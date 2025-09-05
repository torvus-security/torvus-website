"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedButton } from "@/components/enhanced-button"
import { AnimatedText } from "@/components/animated-text"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  organization: string
  topic: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  topic?: string
  message?: string
  consent?: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    topic: "",
    message: "",
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.topic) {
      newErrors.topic = "Please select a topic"
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    if (!formData.consent) {
      newErrors.consent = "You must consent to processing"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("[v0] Form submitted:", formData)

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        organization: "",
        topic: "",
        message: "",
        consent: false,
      })
      setErrors({})
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <AnimatedText delay={0.2}>
      <Card className="border-border/50 bg-gradient-to-br from-card to-card/80">
        <CardHeader>
          <CardTitle className="h4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Secure Inquiry Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          {submitStatus === "success" ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h3 className="text-xl font-semibold text-green-700">Message Sent Successfully!</h3>
              <p className="text-muted-foreground">
                Thank you for your inquiry. We'll get back to you within 24 hours.
              </p>
              <Button variant="outline" onClick={() => setSubmitStatus("idle")} className="mt-4">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block small font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    className={`field ${errors.name ? "field--error" : ""}`}
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                  {errors.name && (
                    <p className="help error mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block small font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className={`field ${errors.email ? "field--error" : ""}`}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className="help error mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block small font-medium mb-2">
                  Organization
                </label>
                <Input
                  id="organization"
                  className="field"
                  value={formData.organization}
                  onChange={(e) => handleInputChange("organization", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="topic" className="block small font-medium mb-2">
                  Topic *
                </label>
                <Select onValueChange={(value) => handleInputChange("topic", value)} value={formData.topic}>
                  <SelectTrigger className={`field ${errors.topic ? "field--error" : ""}`}>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="legal">Legal</SelectItem>
                    <SelectItem value="media">Media</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="security">Security Research</SelectItem>
                    <SelectItem value="advisory">Advisory Board</SelectItem>
                  </SelectContent>
                </Select>
                {errors.topic && (
                  <p className="help error mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.topic}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block small font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  className={`field ${errors.message ? "field--error" : ""}`}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
                {errors.message && (
                  <p className="help error mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                  className={errors.consent ? "field--error" : ""}
                />
                <div className="flex-1">
                  <label htmlFor="consent" className="small text-muted-foreground leading-relaxed">
                    I consent to Torvus Security processing this inquiry according to the{" "}
                    <a href="/legal/privacy" className="text-primary hover:underline font-medium">
                      privacy policy
                    </a>
                  </label>
                  {errors.consent && (
                    <p className="help error mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.consent}
                    </p>
                  )}
                </div>
              </div>

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2 text-red-700">
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}

              <EnhancedButton type="submit" className="w-full text-white font-bold" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending secure inquiry...
                  </>
                ) : (
                  "Send secure inquiry"
                )}
              </EnhancedButton>
            </form>
          )}
        </CardContent>
      </Card>
    </AnimatedText>
  )
}
