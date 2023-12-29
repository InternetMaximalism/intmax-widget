interface WidgetOptions {
  clientId: string;
  url?: string;
  lang?: string;
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
    const walletUrl = this.options.url || INTMAX_WALLET_URL;
    const widgetUrl = walletUrl + (queryParams ? `?${queryParams}` : "");

    this.configureIframe(iframe, widgetUrl, walletUrl);
    this.setupIframeListener(iframe, walletUrl);

    iframe.onload = () => {
      if (this.options.onLoad) {
        this.options.onLoad();
      }
    };
    container.appendChild(iframe);
  }

  private buildQueryParams(): string {
    const allowedKeys = ["clientId", "theme", "lang"];
    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(this.options)) {
      if (allowedKeys.includes(key) && value) {
        queryParams.append(key, encodeURIComponent(value));
      }
    }
    return queryParams.toString();
  }

  private configureIframe(
    iframe: HTMLIFrameElement,
    widgetUrl: string,
    walletUrl: string
  ): void {
    iframe.setAttribute("src", widgetUrl);
    iframe.setAttribute("allow", `publickey-credentials-get ${walletUrl}`);
    Object.assign(iframe.style, {
      width: this.options.style?.width || "400px",
      height: this.options.style?.height || "600px",
      border: this.options.style?.border || "none",
      ...this.options.style,
    });
  }

  private setupIframeListener(iframe: HTMLIFrameElement, walletUrl: string) {
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
        iframe.contentWindow.postMessage(message, walletUrl);
      }
    };
    window.addEventListener("message", onIframeReady);
  }
}

export default INTMAXWalletWidget;
