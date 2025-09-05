import { Alert, AlertDescription } from "@/components/ui/alert"

export function DemoBanner() {
  return (
    <Alert className="border-amber-500/50 bg-amber-500/10">
      <span className="h-4 w-4 text-amber-500 flex items-center justify-center text-sm">⚠️</span>
      <AlertDescription className="text-amber-200">
        <strong>Demo Only</strong> — No real encryption, storage, or delivery. This is a prototype interface.
      </AlertDescription>
    </Alert>
  )
}
