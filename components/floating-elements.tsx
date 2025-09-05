"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-bounce" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-ping" />
    </div>
  )
}
