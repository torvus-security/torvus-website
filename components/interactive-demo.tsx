"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, Users, Clock, CheckCircle, Play, RotateCcw } from "lucide-react"

const demoSteps = [
  {
    id: "upload",
    title: "Upload Documents",
    description: "Securely upload your important files",
    icon: Upload,
    color: "bg-blue-500",
    content: "Documents are encrypted client-side before upload",
  },
  {
    id: "recipients",
    title: "Add Recipients",
    description: "Define who should receive your documents",
    icon: Users,
    color: "bg-green-500",
    content: "Recipients are verified through multiple channels",
  },
  {
    id: "schedule",
    title: "Set Check-ins",
    description: "Configure activity verification schedule",
    icon: Clock,
    color: "bg-amber-500",
    content: "Flexible check-in intervals with grace periods",
  },
  {
    id: "complete",
    title: "System Active",
    description: "Your digital guardianship is now protecting your data",
    icon: CheckCircle,
    color: "bg-accent",
    content: "Continuous monitoring with audit trail",
  },
]

export function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const startDemo = () => {
    setIsPlaying(true)
    setCurrentStep(0)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStep((current) => {
            if (current < demoSteps.length - 1) {
              return current + 1
            } else {
              setIsPlaying(false)
              clearInterval(interval)
              return current
            }
          })
          return 0
        }
        return prev + 2
      })
    }, 100)
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setProgress(0)
    setIsPlaying(false)
  }

  return (
    <Card className="bg-gradient-to-br from-muted/50 to-background border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Interactive Product Demo</CardTitle>
            <p className="text-muted-foreground mt-1">See how Torvus Security works in action</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={startDemo} disabled={isPlaying} size="sm">
              <Play className="w-4 h-4 mr-2" />
              {isPlaying ? "Playing..." : "Start Demo"}
            </Button>
            <Button onClick={resetDemo} variant="outline" size="sm">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between body">
            <span>
              Step {currentStep + 1} of {demoSteps.length}
            </span>
            <span>{Math.round((currentStep / (demoSteps.length - 1)) * 100)}% Complete</span>
          </div>
          <Progress value={(currentStep / (demoSteps.length - 1)) * 100} className="h-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {demoSteps.map((step, index) => {
            const StepIcon = step.icon
            return (
              <div
                key={step.id}
                className={`relative p-4 rounded-lg border transition-all duration-300 ${
                  index === currentStep
                    ? "border-primary bg-primary/5 scale-105"
                    : index < currentStep
                      ? "border-accent bg-accent/5"
                      : "border-border bg-muted/30"
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.color} text-white`}>
                    <StepIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="h4">{step.title}</h4>
                  </div>
                  {index < currentStep && <CheckCircle className="w-4 h-4 text-accent" />}
                </div>
                <p className="small text-muted-foreground mb-2">{step.description}</p>

                {index === currentStep && isPlaying && (
                  <div className="mt-3 pt-3 border-t border-border/50 transition-all duration-300">
                    <p className="small text-primary font-medium">{step.content}</p>
                    <Progress value={progress} className="h-1 mt-2" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div
          key={currentStep}
          className="bg-card/50 rounded-lg p-4 border border-border/50 transition-all duration-300"
        >
          <div className="flex items-center space-x-3 mb-2">
            {(() => {
              const StepIcon = demoSteps[currentStep].icon
              return <StepIcon className="w-5 h-5 text-primary" />
            })()}
            <h3 className="font-semibold">{demoSteps[currentStep].title}</h3>
            <Badge variant="outline" className="small">
              Step {currentStep + 1}
            </Badge>
          </div>
          <p className="body text-muted-foreground">{demoSteps[currentStep].content}</p>
        </div>
      </CardContent>
    </Card>
  )
}
