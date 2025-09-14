// components/section.tsx
import { ReactNode } from "react";
import clsx from "clsx";

type Variant = "plain" | "soft" | "panel";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  headingClassName,
  variant = "plain",
  tight = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  className?: string;
  headingClassName?: string;
  variant?: Variant;
  tight?: boolean;
}) {
  const wrapper =
    variant === "panel"
      ? "framed-soft"
      : variant === "soft"
      ? "framed"
      : "";

  return (
    <section id={id} className={clsx(tight ? "section-tight" : "section")}>
      <div className={clsx(wrapper, "p-6 sm:p-8 lg:p-10", className)}>
        {(eyebrow || title || description) && (
          <header className="mb-8 sm:mb-10">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className={clsx("section-title mt-4", headingClassName)}>
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 max-w-3xl text-base text-slate-600">
                {description}
              </p>
            )}
          </header>
        )}

        {children}
      </div>
    </section>
  );
}
