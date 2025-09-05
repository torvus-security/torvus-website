"use client"

import { cn } from "@/lib/utils"

interface EnhancedIconProps {
  icon: string
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "gradient" | "outline" | "solid"
  animate?: boolean
  ariaLabel?: string // Added aria-label prop for accessibility
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
}

const containerSizes = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
}

export function EnhancedIcon({
  icon,
  className = "",
  size = "md",
  variant = "default",
  animate = true,
  ariaLabel, // Added aria-label parameter
}: EnhancedIconProps) {
  const baseClasses = "rounded-xl flex items-center justify-center"

  const variantClasses = {
    default: "bg-gradient-to-br from-primary/20 to-primary/10 text-primary",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg",
    outline: "border-2 border-primary/20 text-primary bg-background/50",
    solid: "bg-primary text-primary-foreground shadow-md",
  }

  const animateClasses = animate ? "transition-all duration-200 hover:scale-110 hover:rotate-3" : ""

  return (
    <div
      className={cn(baseClasses, containerSizes[size], variantClasses[variant], animateClasses, className)}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      <div className={cn("flex items-center justify-center", sizeClasses[size])}>{icon}</div>
    </div>
  )
}
