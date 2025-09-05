"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"

const passwordSchema = z
  .string()
  .min(12, "Password must be at least 12 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")

const signUpSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    password: passwordSchema,
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),
    acceptPrivacy: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type SignUpForm = z.infer<typeof signUpSchema>

const passwordRequirements = [
  { label: "At least 12 characters", test: (pwd: string) => pwd.length >= 12 },
  { label: "One uppercase letter", test: (pwd: string) => /[A-Z]/.test(pwd) },
  { label: "One lowercase letter", test: (pwd: string) => /[a-z]/.test(pwd) },
  { label: "One number", test: (pwd: string) => /[0-9]/.test(pwd) },
  { label: "One special character", test: (pwd: string) => /[^A-Za-z0-9]/.test(pwd) },
]

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  })

  const password = watch("password", "")

  const onSubmit = async (data: SignUpForm) => {
    setIsLoading(true)

    // Mock registration delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock successful registration
    if (data.email && data.password) {
      // Redirect to sign in with success message
      router.push("/auth/sign-in?message=Account created successfully. Please sign in.")
    } else {
      setError("root", { message: "Registration failed. Please try again." })
    }

    setIsLoading(false)
  }

  return (
    <main className="container-page">
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <CardTitle className="h1">Create your Torvus account</CardTitle>
            <p className="body">Join the early access program</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {errors.root && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.root.message}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="small font-medium">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`field ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && (
                  <p id="email-error" className="help error">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="small font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    aria-describedby={errors.password ? "password-error" : "password-requirements"}
                    className={`field ${errors.password ? "border-destructive pr-10" : "pr-10"}`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <span className="text-sm">🙈</span> : <span className="text-sm">👁️</span>}
                  </Button>
                </div>

                {/* Password Requirements */}
                <div id="password-requirements" className="space-y-1">
                  {passwordRequirements.map((req, index) => {
                    const isValid = req.test(password)
                    return (
                      <div key={index} className="flex items-center space-x-2 text-xs">
                        {isValid ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-muted-foreground">✗</span>
                        )}
                        <span className={isValid ? "text-green-500" : "text-muted-foreground"}>{req.label}</span>
                      </div>
                    )
                  })}
                </div>

                {errors.password && (
                  <p id="password-error" className="help error">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="small font-medium">
                  Confirm password
                </label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined}
                    className={`field ${errors.confirmPassword ? "border-destructive pr-10" : "pr-10"}`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <span className="text-sm">🙈</span> : <span className="text-sm">👁️</span>}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p id="confirm-password-error" className="help error">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="acceptTerms" {...register("acceptTerms")} />
                  <label htmlFor="acceptTerms" className="small text-muted-foreground">
                    I agree to the{" "}
                    <Link href="/legal/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>
                  </label>
                </div>
                {errors.acceptTerms && <p className="help error">{errors.acceptTerms.message}</p>}

                <div className="flex items-center space-x-2">
                  <Checkbox id="acceptPrivacy" {...register("acceptPrivacy")} />
                  <label htmlFor="acceptPrivacy" className="small text-muted-foreground">
                    I agree to the{" "}
                    <Link href="/legal/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.acceptPrivacy && <p className="help error">{errors.acceptPrivacy.message}</p>}
              </div>

              <Button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="small">
                Already have an account?{" "}
                <Link href="/auth/sign-in" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
