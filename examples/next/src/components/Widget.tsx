"use client";

import { INTMAXWalletWidget } from "intmaxwidget";
import { useEffect, useRef } from "react";

export default function Widget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const walletWidget = new INTMAXWalletWidget(containerRef.current.id, {
        clientId: "your-client-id",
        theme: "dark",
        contentStyles: {
          primary: "251, 113, 133",
          gradientBtnForeground: "52 211 153",
          gradientBtn: "255 255 0",
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
