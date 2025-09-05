"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Type, Contrast, Keyboard, Volume2 } from "lucide-react"

export function AccessibilityEnhancements() {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [screenReaderMode, setScreenReaderMode] = useState(false)

  useEffect(() => {
    // Apply accessibility preferences
    const root = document.documentElement

    if (highContrast) {
      root.classList.add("high-contrast")
    } else {
      root.classList.remove("high-contrast")
    }

    if (largeText) {
      root.classList.add("large-text")
    } else {
      root.classList.remove("large-text")
    }

    if (reducedMotion) {
      root.classList.add("reduce-motion")
    } else {
      root.classList.remove("reduce-motion")
    }

    if (screenReaderMode) {
      root.classList.add("screen-reader-mode")
    } else {
      root.classList.remove("screen-reader-mode")
    }
  }, [highContrast, largeText, reducedMotion, screenReaderMode])

  const announceChange = (message: string) => {
    // Create live region announcement for screen readers
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "polite")
    announcement.setAttribute("aria-atomic", "true")
    announcement.className = "sr-only"
    announcement.textContent = message
    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  return (
    <Card className="accessibility-controls">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Eye className="h-5 w-5" />
          <span>Accessibility Options</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* High Contrast */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Contrast className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <div>
                <h4 className="font-medium">High Contrast</h4>
                <p className="text-sm text-muted-foreground">Increase color contrast</p>
              </div>
            </div>
            <Button
              variant={highContrast ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setHighContrast(!highContrast)
                announceChange(`High contrast ${!highContrast ? "enabled" : "disabled"}`)
              }}
              aria-pressed={highContrast}
              aria-label={`${highContrast ? "Disable" : "Enable"} high contrast mode`}
            >
              {highContrast ? "On" : "Off"}
            </Button>
          </div>

          {/* Large Text */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Type className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <div>
                <h4 className="font-medium">Large Text</h4>
                <p className="text-sm text-muted-foreground">Increase font size</p>
              </div>
            </div>
            <Button
              variant={largeText ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setLargeText(!largeText)
                announceChange(`Large text ${!largeText ? "enabled" : "disabled"}`)
              }}
              aria-pressed={largeText}
              aria-label={`${largeText ? "Disable" : "Enable"} large text mode`}
            >
              {largeText ? "On" : "Off"}
            </Button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Eye className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <div>
                <h4 className="font-medium">Reduced Motion</h4>
                <p className="text-sm text-muted-foreground">Minimize animations</p>
              </div>
            </div>
            <Button
              variant={reducedMotion ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setReducedMotion(!reducedMotion)
                announceChange(`Reduced motion ${!reducedMotion ? "enabled" : "disabled"}`)
              }}
              aria-pressed={reducedMotion}
              aria-label={`${reducedMotion ? "Disable" : "Enable"} reduced motion mode`}
            >
              {reducedMotion ? "On" : "Off"}
            </Button>
          </div>

          {/* Screen Reader Mode */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Volume2 className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <div>
                <h4 className="font-medium">Screen Reader</h4>
                <p className="text-sm text-muted-foreground">Enhanced descriptions</p>
              </div>
            </div>
            <Button
              variant={screenReaderMode ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setScreenReaderMode(!screenReaderMode)
                announceChange(`Screen reader mode ${!screenReaderMode ? "enabled" : "disabled"}`)
              }}
              aria-pressed={screenReaderMode}
              aria-label={`${screenReaderMode ? "Disable" : "Enable"} screen reader optimizations`}
            >
              {screenReaderMode ? "On" : "Off"}
            </Button>
          </div>
        </div>

        {/* Keyboard Navigation Help */}
        <div className="p-3 bg-muted/20 rounded-lg">
          <h4 className="font-medium mb-2 flex items-center">
            <Keyboard className="h-4 w-4 mr-2" aria-hidden="true" />
            Keyboard Navigation
          </h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Tab</kbd> - Navigate forward
            </p>
            <p>
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Shift + Tab</kbd> - Navigate backward
            </p>
            <p>
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Enter</kbd> or{" "}
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Space</kbd> - Activate buttons
            </p>
            <p>
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Esc</kbd> - Close dialogs and menus
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-wrap gap-2">
          {highContrast && <Badge className="bg-blue-500/10 text-blue-500">High Contrast</Badge>}
          {largeText && <Badge className="bg-green-500/10 text-green-500">Large Text</Badge>}
          {reducedMotion && <Badge className="bg-purple-500/10 text-purple-500">Reduced Motion</Badge>}
          {screenReaderMode && <Badge className="bg-amber-500/10 text-amber-500">Screen Reader</Badge>}
        </div>
      </CardContent>
    </Card>
  )
}
