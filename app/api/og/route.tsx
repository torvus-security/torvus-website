import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.slice(0, 120) ?? siteConfig.name;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #0B1220 0%, #1F2937 60%, #26619C 100%)",
          color: "white",
          fontFamily: "'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "rgba(26, 174, 159, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            T
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              maxWidth: "920px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(229, 231, 235, 0.9)",
              maxWidth: "720px",
              fontWeight: 500,
            }}
          >
            Policy-driven vaulting with conditional release, duress controls, and
            provenance.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
          <span style={{ color: "rgba(229, 231, 235, 0.8)", fontWeight: 500 }}>
            torvussecurity.com
          </span>
          <span style={{ color: "rgba(229, 231, 235, 0.8)", fontWeight: 500 }}>
            Protect people by protecting their information.
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
