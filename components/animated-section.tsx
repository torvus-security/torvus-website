"use client"

import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function AnimatedSection({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) {
  return <div className={`transition-all duration-700 ease-out ${className}`}>{children}</div>
}

export function AnimatedCard({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <div className={`transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] ${className}`}>
      {children}
    </div>
  )
}
