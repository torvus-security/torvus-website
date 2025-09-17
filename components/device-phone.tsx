"use client";

import { cn } from "@/lib/utils";

type Scheme = "dark" | "light";
type Accent = "cranberry" | "lagoon" | "lapis";

export default function DevicePhone({
  scheme = "dark",
  accent = "cranberry",
  float = true,
  ariaLabel = "Phone mockup",
}: {
  scheme?: Scheme;
  accent?: Accent;
  float?: boolean;
  ariaLabel?: string;
}) {
  const accentHex = accent === "lagoon" ? "#1AAE9F" : accent === "lapis" ? "#26619C" : "#D61F69";
  const cardBg = scheme === "dark" ? "rgba(7,12,22,0.92)" : "rgba(255,255,255,0.92)";
  const cardText = scheme === "dark" ? "#E6E7EB" : "#1F2937";

  return (
    <div
      aria-label={ariaLabel}
      role="img"
      className={cn(
        "relative mx-auto h-[540px] w-[270px] md:h-[600px] md:w-[300px]",
        float && "animate-[float_10s_ease-in-out_infinite]",
      )}
    >
      <div className="absolute inset-0 rounded-[40px] bg-white/4 shadow-[0_24px_60px_rgba(11,18,32,0.2)]" />
      <div className="absolute inset-2 rounded-[36px] bg-white/10" />
      <div className="absolute inset-4 rounded-[32px] bg-white/10" />
      <div className="absolute inset-0 rounded-[40px] border border-white/30 bg-white/10 backdrop-blur-sm" />

      <svg viewBox="0 0 360 720" className="relative z-10 h-full w-full rounded-[32px]">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={scheme === "dark" ? "#0B1220" : "#F7FBFF"} />
            <stop offset="100%" stopColor={scheme === "dark" ? "#1A2A44" : "#F4F6FA"} />
          </linearGradient>
          <radialGradient id="halo" cx="70%" cy="20%" r="70%">
            <stop offset="0%" stopColor={accentHex} stopOpacity="0.25" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect x="12" y="12" width="336" height="696" rx="28" fill="url(#bg)" />
        <rect x="12" y="12" width="336" height="696" rx="28" fill="url(#halo)" />

        <rect x="120" y="34" width="120" height="20" rx="10" fill={scheme === "dark" ? "#121826" : "#D7DBE0"} opacity="0.9" />

        <g transform="translate(80, 290)">
          <rect width="200" height="72" rx="36" fill={cardBg} />
          <text x="24" y="43" fontSize="16" fontWeight="600" fill={accentHex} letterSpacing="0.14em">
            POLICY
          </text>
          <circle cx="130" cy="36" r="3" fill={accentHex} />
          <text x="145" y="43" fontSize="16" fontWeight="500" fill={cardText}>
            Active
          </text>
        </g>

        <g transform="translate(40, 400)">
          <rect
            width="280"
            height="60"
            rx="14"
            fill={scheme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}
          />
          <rect
            y="76"
            width="220"
            height="60"
            rx="14"
            fill={scheme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}
          />
        </g>
      </svg>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
