import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "a" | "b" | "auto";
type CardTone = "neutral" | "info" | "success" | "danger";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  tone?: CardTone;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "auto", tone = "neutral", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-card="true"
        data-card-variant={variant}
        data-card-tone={tone !== "neutral" ? tone : undefined}
        className={cn("flex flex-col gap-5", className)}
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
  return (
    <p className={cn("max-w-prose text-body text-thunder", className)} {...props} />
  );
}
