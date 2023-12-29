import { INTMAXWalletWidget } from "intmax-widget";

document.addEventListener("DOMContentLoaded", function () {
  const widgetOptions = {
    clientId: "your-client-id",
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
