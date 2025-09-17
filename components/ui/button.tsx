import Link from "next/link";

import { cn } from "@/lib/utils";

import type { ComponentProps, ReactNode } from "react";

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
    "border border-lapis/55 bg-transparent text-lapis shadow-none transition-colors hover:bg-[--pastel-lagoon] active:bg-[--pastel-lagoon] focus-visible:ring-2 focus-visible:ring-lapis focus-visible:ring-offset-2 focus-visible:ring-offset-white",
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

type InteractiveProps = {
  children: ReactNode;
  className?: string;
};

const primarySoftBase =
  "group relative inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-2.5 text-[15.5px] font-semibold tracking-[0.01em] text-white " +
  "shadow-[0_6px_18px_rgba(214,31,105,0.22)] bg-[linear-gradient(180deg,#DE2E77_0%,#C51C5E_100%)] border border-white/20 transition-all duration-200 ease-out " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D61F69] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60 " +
  "hover:saturate-[1.02] hover:shadow-[0_8px_24px_rgba(214,31,105,0.28)] active:translate-y-[0.5px]";

function PrimarySoftHighlight() {
  return (
    <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15">
      <span className="absolute inset-x-1 top-0 h-2/5 rounded-full bg-white/10 blur-[6px]" />
    </span>
  );
}

export function PrimarySoftButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={cn(primarySoftBase, className)}>
      <PrimarySoftHighlight />
      <span className="relative">{children}</span>
    </button>
  );
}

type PrimarySoftLinkProps = InteractiveProps &
  Omit<ComponentProps<typeof Link>, "children" | "className" | "href"> & {
    href: string;
  };

export function PrimarySoftLink({
  children,
  className,
  href,
  ...props
}: PrimarySoftLinkProps) {
  return (
    <Link href={href} className={cn(primarySoftBase, className)} {...props}>
      <PrimarySoftHighlight />
      <span className="relative">{children}</span>
    </Link>
  );
}
