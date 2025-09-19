import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "a" | "b" | "auto";
type CardTone = "neutral" | "info" | "success" | "danger";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  tone?: CardTone;
};

const toneClassNames: Record<CardTone, string> = {
  neutral: "",
  info: "border-lapis/35 bg-pastel-lapis/35",
  success: "border-emerald-200/60 bg-emerald-50/70",
  danger: "border-cranberry/30 bg-pastel-cranberry/30",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "auto", tone = "neutral", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-card="true"
        data-card-variant={variant}
        data-card-tone={tone !== "neutral" ? tone : undefined}
        className={cn(
          "group/card relative flex flex-col gap-5 rounded-3xl border border-storm/12 bg-white/95 p-6 shadow-[0_20px_45px_rgba(14,23,38,0.08)] backdrop-blur-sm transition",
          toneClassNames[tone],
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";

type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h3 className={cn("text-h4 font-semibold text-storm", className)} {...props} />;
}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn("max-w-prose text-body text-thunder", className)} {...props} />;
}
