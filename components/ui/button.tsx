import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "link";
type ButtonSize = "sm" | "md" | "lg";

type ClassOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-lapis text-white hover:bg-lapis/90 focus-visible:ring-lapis focus-visible:ring-offset-2",
  secondary:
    "bg-transparent text-storm border border-storm/20 hover:bg-mist focus-visible:ring-storm/30 focus-visible:ring-offset-2",
  tertiary: "bg-lagoon/10 text-storm hover:bg-lagoon/20 focus-visible:ring-lagoon/40",
  link: "bg-transparent text-lapis underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-small",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: ClassOptions = {}): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out",
    "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60",
    "tracking-tight",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );
}
