interface WidgetOptions {
  clientId: string;
  url?: string;
  theme?: "light" | "dark" | "system";
  style?: { [key: string]: string };
  contentStyles?: { [key: string]: string };
  onLoad?: () => void;
}

const INTMAX_WALLET_URL = "https://wallet.intmax.io";

export class INTMAXWalletWidget {
  private containerId: string;
  private options: WidgetOptions;

  constructor(containerId: string, options: WidgetOptions) {
    this.containerId = containerId;
    this.options = options;
  }

  mount() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error("Container not found.");
      return;
    }

    if (!this.options.clientId) {
      throw new Error("clientId is required.");
    }

    const iframe = document.createElement("iframe");
    const queryParams = this.buildQueryParams();
    const widgetUrl =
      (this.options.url || INTMAX_WALLET_URL) +
      (queryParams ? `?${queryParams}` : "");

    this.configureIframe(iframe, widgetUrl);
    this.setupIframeListener(iframe);

    iframe.onload = () => {
      if (this.options.onLoad) {
        this.options.onLoad();
      }
    };
    container.appendChild(iframe);
  }

  private buildQueryParams(): string {
    const queryParams = new URLSearchParams();
    if (this.options.clientId) {
      queryParams.append("clientId", encodeURIComponent(this.options.clientId));
    }
    if (this.options.theme) {
      queryParams.append("theme", this.options.theme);
    }
    return queryParams.toString();
  }

  private configureIframe(iframe: HTMLIFrameElement, widgetUrl: string): void {
    iframe.setAttribute("src", widgetUrl);
    Object.assign(iframe.style, {
      width: this.options.style?.width || "420px",
      height: this.options.style?.height || "600px",
      ...this.options.style,
    });
  }

  private setupIframeListener(iframe: HTMLIFrameElement) {
    const onIframeReady = (event: MessageEvent) => {
      if (
        event.data.type &&
        event.data.type === "iframeReady" &&
        iframe.contentWindow
      ) {
        const message = {
          type: "applyStyles",
          contentStyles: this.options.contentStyles || {},
        };
        iframe.contentWindow.postMessage(
          message,
          this.options.url || INTMAX_WALLET_URL
        );
      }
    };
    window.addEventListener("message", onIframeReady);
  }
}

export default INTMAXWalletWidget;
