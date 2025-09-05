"use client"

import { Loader2, Shield } from "lucide-react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "branded"
  text?: string
}

export function LoadingSpinner({ size = "md", variant = "default", text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  if (variant === "branded") {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <Shield className={`${sizeClasses[size]} text-primary animate-spin`} />
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
        </div>
        {text && <p className={`${textSizeClasses[size]} text-muted-foreground font-medium`}>{text}</p>}
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
      {text && <span className={`${textSizeClasses[size]} text-muted-foreground`}>{text}</span>}
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card/30 to-primary/5">
      <LoadingSpinner variant="branded" size="lg" text="Loading Torvus Security..." />
    </div>
  )
}
