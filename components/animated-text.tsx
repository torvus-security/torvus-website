"use client"

import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight"
}

export function AnimatedText({ children, className = "", delay = 0, variant = "fadeUp" }: AnimatedTextProps) {
  return <div className={`transition-all duration-800 ease-out ${className}`}>{children}</div>
}
