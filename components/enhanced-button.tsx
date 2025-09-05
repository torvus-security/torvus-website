"use client"

import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface EnhancedButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "success" | "danger"
  size?: "sm" | "default" | "lg"
  className?: string
  onClick?: () => void
  href?: string
  type?: "button" | "submit"
  disabled?: boolean
}

export function EnhancedButton({
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: EnhancedButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "btn btn-primary"
      case "secondary":
        return "btn btn-secondary"
      case "success":
        return "btn btn-success"
      case "danger":
        return "btn btn-danger"
      default:
        return "btn btn-primary"
    }
  }

  return (
    <Button
      className={`
        ${getVariantClasses()}
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  )
}
