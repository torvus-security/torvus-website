import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "subtle"
  | "destructive"
  | "link";
type ButtonSize = "sm" | "md" | "lg";

type ClassOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-cranberry text-white shadow-soft-2 transition-colors hover:bg-[#c11d5f] active:bg-[#a71952] focus-visible:ring-2 focus-visible:ring-cranberry focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  secondary:
    "border border-lapis/55 bg-transparent text-lapis shadow-none transition-colors hover:bg-lapis/10 active:bg-lapis/15 focus-visible:ring-2 focus-visible:ring-lapis focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  tertiary:
    "border border-lagoon/45 bg-transparent text-lagoon shadow-none transition-colors hover:bg-lagoon/10 active:bg-lagoon/15 focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  subtle:
    "border-transparent bg-transparent text-thunder transition-colors hover:bg-mist/50 active:bg-mist/70 focus-visible:ring-2 focus-visible:ring-cranberry/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  destructive:
    "border-transparent bg-[#b21852] text-white shadow-soft-1 transition-colors hover:bg-[#981646] active:bg-[#84123d] focus-visible:ring-2 focus-visible:ring-cranberry focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  link: "border-0 bg-transparent text-cranberry underline-offset-4 hover:underline focus-visible:ring-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-[0.98rem] md:px-6",
  md: "px-5 py-2.5 text-[1rem] md:px-6",
  lg: "px-6 py-3 text-[1.04rem] md:px-7",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: ClassOptions = {}): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full border font-semibold tracking-tight transition-all duration-150 ease-out sm:whitespace-nowrap",
    "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );
}
