"use client";

import { cn } from "@/lib/utils";

type Scheme = "dark" | "light";
type Accent = "cranberry" | "lagoon" | "lapis";

export default function DevicePhoneV0({
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
  const accents = { cranberry: "#D61F69", lagoon: "#1AAE9F", lapis: "#26619C" } as const;
  const accentHex = accents[accent];
  const bg0 = scheme === "dark" ? "#0B1220" : "#FFFFFF";
  const bg1 = scheme === "dark" ? "#18263C" : "#F2F6FA";
  const bezel = scheme === "dark" ? "#D9DEE5" : "#E4E8EE";
  const cardBg = scheme === "dark" ? "rgba(7,12,22,0.92)" : "rgba(255,255,255,0.92)";
  const cardText = scheme === "dark" ? "#E6E7EB" : "#1F2937";

  return (
    <div
      aria-label={ariaLabel}
      role="img"
      className={cn(
        "relative mx-auto h-[560px] w-[280px] md:h-[600px] md:w-[300px]",
        float && "animate-[float_10s_ease-in-out_infinite]",
      )}
    >
      <div className="absolute inset-0 rounded-[36px] bg-white/30 blur-[1px] opacity-35" />
      <div className="absolute inset-[6px] rounded-[32px] bg-white/20 blur-[0.5px] opacity-35" />
      <div className="absolute inset-[12px] rounded-[28px] bg-white/10 opacity-30" />

      <div className="absolute inset-0 rounded-[36px] border border-white/40 bg-white/10 backdrop-blur-sm shadow-[0_20px_50px_rgba(11,18,32,0.2)]" />

      <svg viewBox="0 0 390 780" className="relative z-10 h-full w-full rounded-[28px]">
        <defs>
          <linearGradient id="scr" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={bg0} />
            <stop offset="100%" stopColor={bg1} />
          </linearGradient>
          <radialGradient id="accentHalo" cx="70%" cy="25%" r="65%">
            <stop offset="0%" stopColor={accentHex} stopOpacity="0.22" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect x="12" y="12" width="366" height="756" rx="26" fill="url(#scr)" />
        <rect x="12" y="12" width="366" height="756" rx="26" fill="url(#accentHalo)" />

        <rect x="150" y="36" width="90" height="20" rx="10" fill={bezel} opacity="0.9" />

        <g transform="translate(95, 300)">
          <rect width="200" height="64" rx="32" fill={cardBg} />
          <text
            x="20"
            y="39"
            fontSize="15"
            fontWeight="700"
            fill={accentHex}
            letterSpacing="0.14em"
          >
            POLICY
          </text>
          <circle cx="120" cy="33" r="3" fill={accentHex} />
          <text x="135" y="39" fontSize="15" fontWeight="600" fill={cardText}>
            Active
          </text>
        </g>

        <g transform="translate(55, 388)">
          <rect
            width="280"
            height="54"
            rx="12"
            fill={scheme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}
          />
          <rect
            y="70"
            width="220"
            height="54"
            rx="12"
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
