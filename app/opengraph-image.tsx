/* eslint-disable import/no-unused-modules */

import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
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
          background: "linear-gradient(135deg, #0B1220 0%, #1F2937 40%, #26619C 100%)",
          color: "#FFFFFF",
          padding: "80px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: "20px", color: "#FFFFFF" }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#D61F69",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          />
          <div style={{ fontSize: "42px", fontWeight: 600 }}>Torvus Security</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "720px",
          }}
        >
          <div style={{ fontSize: "64px", fontWeight: 600, lineHeight: 1.1 }}>
            Digital Legacy that protects intent and provenance.
          </div>
          <div
            style={{ fontSize: "28px", lineHeight: 1.4, color: "rgba(229,231,235,0.9)" }}
          >
            Policy-driven vaults, executor verification, and duress-aware releases built
            by Torvus.
          </div>
        </div>
        <div style={{ fontSize: "26px", fontWeight: 500, color: "#A5F3FC" }}>
          www.torvussecurity.com
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
