"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = async (data: ForgotPasswordForm) => {
    setIsLoading(true)

    // Mock password reset delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <main className="container-page">
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-4xl">🛡️</span>
              </div>
              <CardTitle className="h1">Check your email</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 prose stack-lg">
              <p className="body">We've sent password reset instructions to your email address.</p>
              <p className="small">Didn't receive the email? Check your spam folder or try again.</p>
              <div className="space-y-2">
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="btn btn-secondary w-full">
                  Try again
                </Button>
                <Link href="/auth/sign-in">
                  <Button variant="ghost" className="btn btn-secondary w-full">
                    <span className="mr-2">←</span>
                    Back to sign in
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="container-page">
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">🛡️</span>
            </div>
            <CardTitle className="h2">Reset your password</CardTitle>
            <p className="body">Enter your email address and we'll send you reset instructions</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="small font-medium">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p id="email-error" className="small text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send reset instructions"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/auth/sign-in" className="small text-primary hover:underline inline-flex items-center">
                <span className="mr-1">←</span>
                Back to sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
