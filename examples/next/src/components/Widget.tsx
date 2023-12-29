"use client";

import { INTMAXWalletWidget } from "intmax-widget";
import { useEffect, useRef } from "react";

export default function Widget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const walletWidget = new INTMAXWalletWidget(containerRef.current.id, {
        clientId: "your-client-id",
        theme: "light",
        url: "https://internal.dev.intmaxwallet.site",
        lang: "en",
        contentStyles: {
          primary: "rgb(52, 211, 153)",
          gradientBtnForeground: "rgb(29, 78, 216)",
          gradientSidebar: "rgb(245, 158, 11)",
          gradientBtn: "#fffff",
          foreground: "rgb(245, 158, 11)",
        },
      });
      walletWidget.mount();
    }

    return () => {
      const container = document.getElementById("wallet-container");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "96px",
      }}
    >
      <div
        id="wallet-container"
        ref={containerRef}
        style={{
          width: "400px",
          height: "100%",
        }}
      />
    </main>
  );
}
