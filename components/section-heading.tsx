// components/section-heading.tsx
import * as React from "react";
import clsx from "clsx";

export function Accent({ children, className }: { children: React.ReactNode; className?: string }) {
  // Subtle teal/sky gradient like v0
  return (
    <span
      className={clsx(
        "bg-gradient-to-r from-teal-400 via-emerald-500 to-sky-500",
        "bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;               // small line above the big title
  title: React.ReactNode;         // allow JSX so we can wrap a word with <Accent>
  description?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <header
      className={clsx(
        "mx-auto w-full max-w-5xl",
        isCenter ? "text-center" : "text-left",
        "space-y-3 sm:space-y-4",
        className
      )}
    >
      {eyebrow ? (
        <p className={clsx("text-sm font-medium text-muted-foreground", isCenter && "mx-auto")}>
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={id}
        className={clsx(
          "font-extrabold tracking-tight text-foreground",
          "text-4xl sm:text-5xl"
        )}
      >
        {title}
      </h2>

      {description ? (
        <p className={clsx("text-base sm:text-lg text-muted-foreground", isCenter && "mx-auto max-w-3xl")}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
