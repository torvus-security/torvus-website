import { cn } from "@/lib/utils";

import type { HTMLAttributes } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
} & HTMLAttributes<HTMLDivElement>;

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "text-center items-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-small font-semibold uppercase tracking-[0.18em] text-storm/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-3xl text-h2 font-semibold text-storm">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-lead text-thunder/90">{description}</p>
      ) : null}
      {children}
    </div>
  );
}
