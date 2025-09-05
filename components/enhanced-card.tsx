"use client"

import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface EnhancedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function EnhancedCard({ children, className = "", delay = 0 }: EnhancedCardProps) {
  return (
    <div className="transition-all duration-600 ease-out hover:-translate-y-2 hover:scale-[1.02]">
      <Card
        className={`
        transition-all duration-300 
        hover:shadow-lg hover:shadow-primary/10
        border-border/50 hover:border-primary/20
        bg-gradient-to-br from-card to-card/80
        ${className}
      `}
      >
        {children}
      </Card>
    </div>
  )
}
