import type React from "react"
interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export function GradientText({ children, className = "", variant = "primary" }: GradientTextProps) {
  const variants = {
    primary: "bg-gradient-to-r from-foreground via-foreground to-foreground/80",
    secondary: "bg-gradient-to-r from-primary via-primary to-primary/70",
    accent: "bg-gradient-to-r from-accent via-accent to-accent/70",
  }

  return <span className={`${variants[variant]} bg-clip-text text-transparent ${className}`}>{children}</span>
}
