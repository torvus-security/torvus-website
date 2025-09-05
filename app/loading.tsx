export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <span className="text-6xl animate-pulse">🛡️</span>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-muted rounded animate-pulse mx-auto" />
          <div className="h-3 w-24 bg-muted/60 rounded animate-pulse mx-auto" />
        </div>
      </div>
    </div>
  )
}
