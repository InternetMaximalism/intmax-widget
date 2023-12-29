import { INTMAXWalletWidget } from "intmaxwidget";

document.addEventListener("DOMContentLoaded", function () {
  const widgetOptions = {
    clientId: "your-client-id",
    url: "https://internal.dev.intmaxwallet.site",
    theme: "light" as const,
    contentStyles: {
      primary: "52 211 153",
      gradientBtnForeground: "29 78 216",
      gradientBtn: "255 255 0",
    },
  };

  const widget = new INTMAXWalletWidget("widget-container", widgetOptions);
  widget.mount();
});
