// components/ui/pageheader.tsx
// Minimal PageHeader component to satisfy "@/components/ui/pageheader" imports.
// Drop this file at components/ui/pageheader.tsx

import * as React from "react";

type Align = "left" | "center";

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  align?: Align;
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function PageHeader({
  title,
  subtitle,
  actions,
  align = "left",
  className,
  ...props
}: PageHeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cx(
        "w-full mb-6 md:mb-8",
        isCenter ? "text-center" : "text-left",
        className
      )}
      {...props}
    >
      <div className={cx("flex items-start gap-3", isCenter && "justify-center")}>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-1 text-sm md:text-base text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </div>
  );
}

export default PageHeader;
