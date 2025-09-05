"use client"

import { Badge } from "@/components/ui/badge"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, X, ChevronRight } from "lucide-react"

interface HelpTooltipProps {
  title: string
  content: string
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
}

export function HelpTooltip({ title, content, children, position = "top" }: HelpTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  }

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center space-x-2 cursor-help"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
        <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
      </div>

      {isOpen && (
        <div className={`absolute z-50 transition-all duration-200 ${positionClasses[position]}`}>
          <Card className="w-80 shadow-lg border-border/50 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold h4">{title}</h4>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsOpen(false)}>
                  <X className="w-3 h-3" />
                </Button>
              </div>
              <p className="small text-muted-foreground leading-relaxed">{content}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export function OnboardingTour() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const tourSteps = [
    {
      target: "dashboard-stats",
      title: "Dashboard Overview",
      content: "Monitor your active release plans, upcoming check-ins, and pending verifications at a glance.",
    },
    {
      target: "quick-actions",
      title: "Quick Actions",
      content: "Access the most common tasks directly from your dashboard for faster workflow.",
    },
    {
      target: "recent-activity",
      title: "Activity Feed",
      content: "Stay informed about all system events and user actions with the activity timeline.",
    },
  ]

  const startTour = () => {
    setIsActive(true)
    setCurrentStep(0)
  }

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsActive(false)
      setCurrentStep(0)
    }
  }

  const skipTour = () => {
    setIsActive(false)
    setCurrentStep(0)
  }

  if (!isActive) {
    return (
      <Button onClick={startTour} variant="outline" size="sm" className="fixed bottom-4 right-4 z-40 bg-transparent">
        <HelpCircle className="w-4 h-4 mr-2" />
        Take Tour
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-card rounded-lg p-6 max-w-md mx-4 border border-border/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">{tourSteps[currentStep].title}</h3>
          <Badge variant="outline" className="small">
            {currentStep + 1} of {tourSteps.length}
          </Badge>
        </div>

        <p className="body text-muted-foreground mb-6">{tourSteps[currentStep].content}</p>

        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={skipTour} size="sm">
            Skip Tour
          </Button>
          <Button onClick={nextStep} size="sm">
            {currentStep < tourSteps.length - 1 ? (
              <>
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </>
            ) : (
              "Finish"
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
