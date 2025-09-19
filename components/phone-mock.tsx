"use client";

import cn from "clsx";
import Image from "next/image";

import type { ReactNode } from "react";

type Scheme = "dark" | "light";
type Accent = "cranberry" | "lagoon" | "lapis";

export function PhoneMock({
  scheme = "dark",
  accent = "cranberry",
  narrow = true,
  ariaLabel = "Phone mockup",
  src,
  alt,
  children,
}: {
  scheme?: Scheme;
  accent?: Accent;
  narrow?: boolean;
  ariaLabel?: string;
  src?: string;
  alt?: string;
  children?: ReactNode;
}) {
  const accents = { cranberry: "#D61F69", lagoon: "#1AAE9F", lapis: "#26619C" } as const;
  const accentHex = accents[accent];
  const text = scheme === "dark" ? "#FFFFFF" : "#1F2937";
  const bg0 = scheme === "dark" ? "#0B1220" : "#FFFFFF";
  const bg1 = scheme === "dark" ? "#18263C" : "#F2F6FA";
  const bezel = scheme === "dark" ? "#D9DEE5" : "#E4E8EE";
  const cardBg = scheme === "dark" ? "rgba(7,12,22,0.92)" : "rgba(255,255,255,0.92)";
  const tint = scheme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";

  return (
    <div
      aria-label={ariaLabel}
      role="img"
      className={cn(
        "relative mx-auto",
        narrow ? "h-[600px] w-[280px]" : "h-[520px] w-[320px]",
        "md:h-[620px] md:w-[300px]",
        "animate-[float_10s_ease-in-out_infinite]",
      )}
    >
      <div className="absolute inset-0 rounded-[36px] bg-white/30 blur-[1px] opacity-30" />
      <div className="absolute inset-[6px] rounded-[32px] bg-white/20 blur-[0.5px] opacity-40" />
      <div className="absolute inset-[12px] rounded-[28px] bg-white/10 opacity-30" />

      <div className="absolute inset-0 rounded-[36px] border border-white/40 bg-white/10 backdrop-blur-sm shadow-[0_20px_50px_rgba(11,18,32,0.2)]" />

      <svg
        viewBox="0 0 390 780"
        className="relative z-10 h-full w-full rounded-[28px]"
        aria-hidden="true"
      >
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

        <g transform="translate(24, 80)">
          <rect
            width="342"
            height="36"
            rx="10"
            fill={scheme === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}
          />
          <g transform="translate(10, 9)">
            <polygon points="8,0 16,8 8,16 0,8" fill="#D61F69" />
            <text
              x="26"
              y="12"
              fontSize="14"
              fontWeight="600"
              fill={text}
              letterSpacing="0.01em"
            >
              Torvus <tspan fontWeight="500">Security</tspan>
            </text>
          </g>
        </g>

        <g transform="translate(95, 150)">
          <rect width="200" height="56" rx="28" fill={cardBg} />
          <text
            x="20"
            y="34"
            fontSize="14"
            fontWeight="700"
            fill={accentHex}
            letterSpacing="0.14em"
          >
            POLICY
          </text>
          <circle cx="118" cy="30" r="3" fill={accentHex} />
          <text x="133" y="34" fontSize="14" fontWeight="600" fill={text}>
            Active
          </text>
        </g>

        <g transform="translate(40, 240)">
          <g transform="translate(0, 0)">
            <rect width="140" height="60" rx="12" fill={tint} />
            <g transform="translate(12, 18)" fill={text}>
              <rect x="0" y="8" width="20" height="14" rx="2" />
              <circle cx="10" cy="15" r="3" fill={accentHex} />
            </g>
            <text x="38" y="36" fontSize="14" fill={text}>
              Vaults
            </text>
          </g>
          <g transform="translate(170, 0)">
            <rect width="140" height="60" rx="12" fill={tint} />
            <g transform="translate(12, 18)" fill={text}>
              <circle cx="10" cy="12" r="6" />
              <circle cx="20" cy="16" r="5" opacity="0.6" />
            </g>
            <text x="38" y="36" fontSize="14" fill={text}>
              Recipients
            </text>
          </g>
          <g transform="translate(0, 76)">
            <rect width="140" height="60" rx="12" fill={tint} />
            <g transform="translate(12, 18)" fill={text}>
              <rect x="0" y="0" width="18" height="22" rx="2" />
              <rect x="4" y="5" width="10" height="2" fill={accentHex} />
            </g>
            <text x="38" y="36" fontSize="14" fill={text}>
              Policies
            </text>
          </g>
          <g transform="translate(170, 76)">
            <rect width="140" height="60" rx="12" fill={tint} />
            <g transform="translate(12, 18)" fill={text}>
              <circle cx="11" cy="12" r="10" />
              <rect x="10" y="6" width="2" height="7" fill={accentHex} />
              <rect x="11" y="12" width="6" height="2" />
            </g>
            <text x="38" y="36" fontSize="14" fill={text}>
              Check-ins
            </text>
          </g>
        </g>
      </svg>

      {src ? (
        <div className="pointer-events-none absolute inset-[52px] z-10 overflow-hidden rounded-[22px]">
          <Image
            src={src}
            alt={alt ?? ariaLabel}
            fill
            className="object-cover"
            sizes="246px"
            priority={false}
          />
        </div>
      ) : null}
      {!src && children ? (
        <div className="pointer-events-none absolute inset-[52px] z-10 flex h-[510px] w-[246px] items-center justify-center overflow-hidden rounded-[22px]">
          {children}
        </div>
      ) : null}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -6px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
