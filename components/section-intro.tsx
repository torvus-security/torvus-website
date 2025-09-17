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
        <p className="text-[0.95rem] font-semibold uppercase tracking-[0.26em] text-cranberry">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-3xl text-h2 font-semibold text-storm">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-lead text-thunder">{description}</p>
      ) : null}
      {children}
    </div>
  );
}
