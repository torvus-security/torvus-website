// components/ui/chip.tsx
// Minimal Chip component to satisfy "@/components/ui/chip" imports.
// Drop this file at components/ui/chip.tsx

import * as React from "react";

type Variant = "default" | "secondary" | "success" | "destructive" | "outline";
type Size = "sm" | "md";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  size?: Size;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const variantClasses: Record<Variant, string> = {
  default: "bg-gray-900 text-white",
  secondary: "bg-gray-100 text-gray-900",
  success: "bg-emerald-600 text-white",
  destructive: "bg-rose-600 text-white",
  outline: "border border-gray-300 text-gray-800",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-xs px-2.5 py-1 rounded-full",
  md: "text-sm px-3 py-1.5 rounded-full",
};

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ variant = "secondary", size = "sm", leadingIcon, trailingIcon, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cx(
          "inline-flex items-center gap-1.5 select-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {leadingIcon ? <span className="-ml-0.5">{leadingIcon}</span> : null}
        <span>{children}</span>
        {trailingIcon ? <span className="-mr-0.5">{trailingIcon}</span> : null}
      </span>
    );
  }
);

Chip.displayName = "Chip";

export default Chip;
