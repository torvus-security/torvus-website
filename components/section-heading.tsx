// components/section-heading.tsx
import React from "react";

type Props = {
  eyebrow?: string;
  title: string;
  /** The word inside `title` to render with a gradient. If omitted, no highlight. */
  highlight?: string;
  /** Optional subtitle/summary below the title. */
  summary?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  summary,
  className,
}: Props) {
  const split = highlight && title.includes(highlight)
    ? title.split(highlight)
    : [title];

  return (
    <div className={["mx-auto max-w-6xl px-4 sm:px-6 text-center", className].filter(Boolean).join(" ")}>
      {eyebrow && (
        <div className="mb-4 text-sm font-semibold text-muted-foreground">{eyebrow}</div>
      )}
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        {highlight && split.length === 2 ? (
          <>
            {split[0]}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {highlight}
            </span>
            {split[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {summary && (
        <p className="mx-auto mt-3 max-w-3xl text-balance text-muted-foreground">
          {summary}
        </p>
      )}
    </div>
  );
}
