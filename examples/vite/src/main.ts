import { INTMAXWalletWidget } from "intmaxwidget";

document.addEventListener("DOMContentLoaded", function () {
  const widgetOptions = {
    clientId: "your-client-id",
    url: "https://internal.dev.intmaxwallet.site",
    theme: "light",
    lang: "en",
    contentStyles: {
      primary: "rgb(52, 211, 153)",
      gradientBtnForeground: "rgb(29, 78, 216)",
      gradientSidebar: "rgb(245, 158, 11)",
      gradientBtn: "#fffff",
      foreground: "rgb(245, 158, 11)",
    },
  };

  const widget = new INTMAXWalletWidget("widget-container", widgetOptions);
  widget.mount();
});
