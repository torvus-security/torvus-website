"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"
import { AuthGuard } from "@/components/auth-guard"
import { mockFiles, mockRecipients, mockCheckIns } from "@/lib/mock-data"
import { ArrowLeft, ArrowRight, FileText, Users, Clock, Send, Check } from "lucide-react"

const steps = [
  { id: 1, name: "Select Files", icon: FileText },
  { id: 2, name: "Choose Recipients", icon: Users },
  { id: 3, name: "Define Trigger", icon: Clock },
  { id: 4, name: "Delivery & Message", icon: Send },
]

export default function NewReleasePlanPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [planData, setPlanData] = useState({
    name: "",
    selectedFiles: [] as string[],
    selectedRecipients: [] as string[],
    trigger: {
      checkInId: "",
      gracePeriod: 12,
    },
    deliveryChannel: "email" as const,
    messageTemplate: "",
    dryRun: true,
  })

  const updatePlanData = (updates: Partial<typeof planData>) => {
    setPlanData({ ...planData, ...updates })
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return planData.name && planData.selectedFiles.length > 0
      case 2:
        return planData.selectedRecipients.length > 0
      case 3:
        return planData.trigger.checkInId && planData.trigger.gracePeriod > 0
      case 4:
        return planData.deliveryChannel && planData.messageTemplate
      default:
        return false
    }
  }

  const handleSubmit = () => {
    console.log("Creating release plan:", planData)
    router.push("/app/release-plans")
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="planName" className="block text-sm font-medium mb-2">
                Plan Name
              </label>
              <Input
                id="planName"
                value={planData.name}
                onChange={(e) => updatePlanData({ name: e.target.value })}
                placeholder="e.g., Emergency Legal Documents"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Select Files from Vault</h3>
              <div className="space-y-3">
                {mockFiles.map((file) => (
                  <div key={file.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Checkbox
                      checked={planData.selectedFiles.includes(file.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updatePlanData({ selectedFiles: [...planData.selectedFiles, file.id] })
                        } else {
                          updatePlanData({ selectedFiles: planData.selectedFiles.filter((id) => id !== file.id) })
                        }
                      }}
                    />
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">{file.name}</div>
                      <div className="text-sm text-muted-foreground">
                        <Badge variant="outline" className="mr-2">
                          {file.classification}
                        </Badge>
                        {file.tags.join(", ")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-4">Choose Recipients</h3>
              <div className="space-y-3">
                {mockRecipients
                  .filter((recipient) => recipient.status === "verified")
                  .map((recipient) => (
                    <div key={recipient.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <Checkbox
                        checked={planData.selectedRecipients.includes(recipient.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updatePlanData({ selectedRecipients: [...planData.selectedRecipients, recipient.id] })
                          } else {
                            updatePlanData({
                              selectedRecipients: planData.selectedRecipients.filter((id) => id !== recipient.id),
                            })
                          }
                        }}
                      />
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="font-medium">{recipient.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {recipient.email} • {recipient.relationship}
                        </div>
                      </div>
                      <Badge className="bg-green-500/10 text-green-500">Verified</Badge>
                    </div>
                  ))}
              </div>
              {mockRecipients.filter((r) => r.status === "verified").length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No verified recipients available. Please verify recipients first.
                </p>
              )}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="checkIn" className="block text-sm font-medium mb-2">
                Trigger Check-in
              </label>
              <Select
                value={planData.trigger.checkInId}
                onValueChange={(value) => updatePlanData({ trigger: { ...planData.trigger, checkInId: value } })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select check-in to monitor" />
                </SelectTrigger>
                <SelectContent>
                  {mockCheckIns
                    .filter((checkIn) => checkIn.status === "active")
                    .map((checkIn) => (
                      <SelectItem key={checkIn.id} value={checkIn.id}>
                        {checkIn.name} ({checkIn.interval})
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="gracePeriod" className="block text-sm font-medium mb-2">
                Grace Period (hours after missed check-in)
              </label>
              <Input
                id="gracePeriod"
                type="number"
                min="1"
                max="168"
                value={planData.trigger.gracePeriod}
                onChange={(e) =>
                  updatePlanData({
                    trigger: { ...planData.trigger, gracePeriod: Number.parseInt(e.target.value) || 12 },
                  })
                }
              />
              <p className="text-xs text-muted-foreground mt-1">
                How long to wait after a missed check-in before triggering the release
              </p>
            </div>

            <div className="p-4 bg-muted/20 rounded-lg">
              <h4 className="font-medium mb-2">Trigger Summary</h4>
              <p className="text-sm text-muted-foreground">
                If the selected check-in is missed and {planData.trigger.gracePeriod} hours pass without completion,
                this release plan will be triggered.
              </p>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="deliveryChannel" className="block text-sm font-medium mb-2">
                Delivery Channel
              </label>
              <Select
                value={planData.deliveryChannel}
                onValueChange={(value) => updatePlanData({ deliveryChannel: value as any })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="secure-link">Secure Link</SelectItem>
                  <SelectItem value="sftp">SFTP</SelectItem>
                  <SelectItem value="webhook">Webhook</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="messageTemplate" className="block text-sm font-medium mb-2">
                Message Template
              </label>
              <Textarea
                id="messageTemplate"
                value={planData.messageTemplate}
                onChange={(e) => updatePlanData({ messageTemplate: e.target.value })}
                placeholder="Enter the message that will be sent to recipients..."
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="dryRun"
                checked={planData.dryRun}
                onCheckedChange={(checked) => updatePlanData({ dryRun: !!checked })}
              />
              <label htmlFor="dryRun" className="text-sm">
                Enable dry-run mode (simulate releases without sending actual data)
              </label>
            </div>

            <div className="p-4 bg-muted/20 rounded-lg">
              <h4 className="font-medium mb-2">Release Plan Summary</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Files: {planData.selectedFiles.length} selected</p>
                <p>Recipients: {planData.selectedRecipients.length} selected</p>
                <p>Trigger: After {planData.trigger.gracePeriod}h grace period</p>
                <p>Delivery: {planData.deliveryChannel}</p>
                {planData.dryRun && (
                  <p className="text-amber-600">⚠️ Dry-run mode enabled - no actual data will be sent</p>
                )}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <AuthGuard>
      <AppLayout>
        <div className="max-w-4xl space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Create Release Plan</h1>
              <p className="text-muted-foreground mt-2">Set up conditional document release</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.id
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-muted-foreground text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                </div>
                <div className="ml-3">
                  <div
                    className={`text-sm font-medium ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {step.name}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${currentStep > step.id ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <Card>
            <CardHeader>
              <CardTitle>
                Step {currentStep}: {steps[currentStep - 1].name}
              </CardTitle>
            </CardHeader>
            <CardContent>{renderStepContent()}</CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            {currentStep < 4 ? (
              <Button onClick={nextStep} disabled={!canProceed()}>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!canProceed()}>
                Create Release Plan
              </Button>
            )}
          </div>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}
