/* eslint-disable import/no-unused-modules */

import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function DigitalLegacyOg() {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "'Satoshi', 'Inter', 'sans-serif'",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0B1220 0%, #26619C 55%, #1AAE9F 100%)",
          color: "#FFFFFF",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#D61F69",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          />
          <div style={{ fontSize: "42px", fontWeight: 600 }}>Torvus Digital Legacy</div>
        </div>
        <div
          style={{
            maxWidth: "760px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div style={{ fontSize: "66px", fontWeight: 600, lineHeight: 1.1 }}>
            Estate orchestration with death verification, executors, and provenance.
          </div>
          <div
            style={{ fontSize: "28px", color: "rgba(229,231,235,0.92)", lineHeight: 1.4 }}
          >
            Inventory assets, capture intent, and release them only when policy-backed
            checks confirm it’s time.
          </div>
        </div>
        <div style={{ fontSize: "26px", fontWeight: 500, color: "#BBF7D0" }}>
          torvussecurity.com/digital-legacy
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
