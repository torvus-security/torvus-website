"use client"

interface SkeletonProps {
  className?: string
  variant?: "text" | "circular" | "rectangular" | "card"
  width?: string | number
  height?: string | number
  lines?: number
}

export function Skeleton({ className = "", variant = "rectangular", width, height, lines = 1 }: SkeletonProps) {
  const baseClasses = "bg-gradient-to-r from-muted/50 via-muted/80 to-muted/50 animate-pulse"

  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    card: "rounded-xl",
  }

  const style = {
    width: width || "100%",
    height: height || (variant === "text" ? "1rem" : "auto"),
  }

  if (variant === "text" && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses.text} ${className}`}
            style={{
              ...style,
              width: index === lines - 1 ? "75%" : "100%",
            }}
          />
        ))}
      </div>
    )
  }

  return <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} style={style} />
}

export function CardSkeleton() {
  return (
    <div className="border border-border/50 rounded-xl p-6 space-y-4 bg-card/50">
      <div className="flex items-center space-x-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="text" lines={3} />
      <div className="flex justify-between items-center">
        <Skeleton variant="rectangular" width={80} height={32} />
        <Skeleton variant="rectangular" width={100} height={32} />
      </div>
    </div>
  )
}

export function DemoSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header skeleton */}
      <div className="text-center space-y-4">
        <Skeleton variant="text" width="300px" height="2rem" className="mx-auto" />
        <Skeleton variant="text" lines={2} className="max-w-2xl mx-auto" />
      </div>

      {/* Demo options skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}

export function FormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Skeleton variant="text" width="60px" height="14px" />
          <Skeleton variant="rectangular" height="40px" />
        </div>
        <div className="space-y-2">
          <Skeleton variant="text" width="80px" height="14px" />
          <Skeleton variant="rectangular" height="40px" />
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton variant="text" width="100px" height="14px" />
        <Skeleton variant="rectangular" height="40px" />
      </div>

      <div className="space-y-2">
        <Skeleton variant="text" width="70px" height="14px" />
        <Skeleton variant="rectangular" height="120px" />
      </div>

      <Skeleton variant="rectangular" height="44px" />
    </div>
  )
}
