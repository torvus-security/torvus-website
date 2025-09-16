import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "a" | "b" | "auto" | "emphasis";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "auto", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-card-surface={variant}
        className={cn("card-surface flex flex-col gap-4", className)}
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
    <p className={cn("max-w-prose text-body text-thunder/90", className)} {...props} />
  );
}
