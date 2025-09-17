import { cn } from "@/lib/utils";

import type { ReactElement, ReactNode } from "react";

const pastelMap: Record<"cranberry" | "lagoon" | "lapis", string> = {
  cranberry: "bg-pastel-cranberry text-cranberry",
  lagoon: "bg-pastel-lagoon text-lagoon",
  lapis: "bg-pastel-lapis text-lapis",
};

type ChipGlyph = "shield" | "timer" | "key" | "check" | "users";

const glyphs: Record<ChipGlyph, JSX.Element> = {
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 3 18.5 5.5v4.8c0 4.5-2.8 8.3-6.5 9.2-3.7-.9-6.5-4.7-6.5-9.2V5.5L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  timer: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <circle cx="12" cy="14" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 4h6M12 11v4h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M14 4a5 5 0 1 0 3.54 8.54L22 17v3h-3v-2h-2v-2h-2.46A5 5 0 0 0 14 4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="9" r="1.5" fill="currentColor" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="m5 12.5 4.5 4L19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <circle cx="9" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 19a5.5 5.5 0 0 1 11 0M16 10.5a2.5 2.5 0 1 0 0-5M20.5 19a4.5 4.5 0 0 0-6.5-3.99"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

type IconChipProps = {
  tone?: "cranberry" | "lagoon" | "lapis";
  icon?: ChipGlyph | ReactElement;
  children: ReactNode;
  className?: string;
};

export function IconChip({ tone = "lagoon", icon, children, className }: IconChipProps) {
  const resolvedIcon = isChipGlyph(icon) ? glyphs[icon] : icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.95rem] font-semibold",
        pastelMap[tone],
        className,
      )}
    >
      {resolvedIcon ? (
        <span
          className="inline-flex h-4 w-4 items-center justify-center"
          aria-hidden="true"
        >
          {resolvedIcon}
        </span>
      ) : null}
      <span>{children}</span>
    </span>
  );
}

function isChipGlyph(value: unknown): value is ChipGlyph {
  return typeof value === "string" && value in glyphs;
}
