"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface TourStep {
  id: string
  title: string
  description: string
  target: string
  position: "top" | "bottom" | "left" | "right"
}

const tourSteps: TourStep[] = [
  {
    id: "hero",
    title: "Welcome to Torvus Security",
    description: "Your digital guardian for protecting what matters most. Let's explore how it works.",
    target: "hero-section",
    position: "bottom",
  },
  {
    id: "mobile-app",
    title: "Mobile-First Design",
    description: "Access your secure vault anywhere with our intuitive mobile app interface.",
    target: "mobile-mockup",
    position: "left",
  },
  {
    id: "features",
    title: "Core Security Features",
    description: "Discover our three pillars of digital security: Vault, Check-ins, and Release Plans.",
    target: "value-pillars",
    position: "top",
  },
  {
    id: "how-it-works",
    title: "Simple 3-Step Process",
    description: "See how easy it is to set up your digital guardianship in just three steps.",
    target: "how-it-works",
    position: "top",
  },
  {
    id: "demo",
    title: "Try the Demo",
    description: "Experience the platform firsthand with our interactive demo versions.",
    target: "demo-buttons",
    position: "top",
  },
]

interface ProductTourProps {
  isOpen: boolean
  onClose: () => void
}

export function ProductTour({ isOpen, onClose }: ProductTourProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const currentTargetRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (currentTargetRef.current) {
      currentTargetRef.current.style.position = ""
      currentTargetRef.current.style.zIndex = ""
      currentTargetRef.current.style.boxShadow = ""
      currentTargetRef.current.style.borderRadius = ""
      currentTargetRef.current.style.transition = ""
    }

    if (isOpen && tourSteps[currentStep]) {
      const element = document.getElementById(tourSteps[currentStep].target)
      currentTargetRef.current = element

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
        element.style.position = "relative"
        element.style.zIndex = "1000"
        element.style.boxShadow = "0 0 0 4px rgba(190, 18, 60, 0.3), 0 0 20px rgba(190, 18, 60, 0.2)"
        element.style.borderRadius = "12px"
        element.style.transition = "all 0.3s ease"
      }
    }

    return () => {
      if (currentTargetRef.current) {
        currentTargetRef.current.style.position = ""
        currentTargetRef.current.style.zIndex = ""
        currentTargetRef.current.style.boxShadow = ""
        currentTargetRef.current.style.borderRadius = ""
        currentTargetRef.current.style.transition = ""
        currentTargetRef.current = null
      }
    }
  }, [currentStep, isOpen])

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const skipTour = () => {
    onClose()
  }

  if (!isOpen || !tourSteps[currentStep]) return null

  const step = tourSteps[currentStep]

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[999] pointer-events-none transition-opacity duration-300" />

      <div
        className="fixed z-[1001] pointer-events-auto transition-all duration-300"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card className="w-96 max-w-[90vw] bg-gradient-to-br from-card to-card/80 border-primary/20 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={skipTour}
                className="ml-2 text-muted-foreground hover:text-foreground"
              >
                <span className="w-4 h-4 flex items-center justify-center">×</span>
              </Button>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex space-x-1">
                {tourSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                {currentStep > 0 && (
                  <Button variant="outline" size="sm" onClick={prevStep}>
                    <span className="w-4 h-4 mr-1 flex items-center justify-center">←</span>
                    Back
                  </Button>
                )}
                <Button size="sm" onClick={nextStep} className="btn btn-primary">
                  {currentStep === tourSteps.length - 1 ? "Finish" : "Next"}
                  {currentStep < tourSteps.length - 1 && (
                    <span className="w-4 h-4 ml-1 flex items-center justify-center">→</span>
                  )}
                </Button>
              </div>
            </div>

            <div className="text-center mt-4">
              <Button variant="ghost" size="sm" onClick={skipTour} className="text-muted-foreground">
                Skip Tour
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export function TourTrigger() {
  const [isTourOpen, setIsTourOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsTourOpen(true)}
        className="btn btn-primary fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <span className="w-4 h-4 mr-2 flex items-center justify-center">▶</span>
        Take Tour
      </Button>

      <ProductTour isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
    </>
  )
}
