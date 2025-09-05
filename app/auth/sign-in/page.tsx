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

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

type SignInForm = z.infer<typeof signInSchema>

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [show2FA, setShow2FA] = useState(false)
  const [twoFactorCode, setTwoFactorCode] = useState("")
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async (data: SignInForm) => {
    setIsLoading(true)

    // Mock authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful login - show 2FA step
    if (data.email && data.password) {
      setShow2FA(true)
    } else {
      setError("root", { message: "Invalid email or password" })
    }

    setIsLoading(false)
  }

  const handle2FASubmit = async () => {
    setIsLoading(true)

    // Mock 2FA verification
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (twoFactorCode.length === 6) {
      // Redirect to app dashboard
      router.push("/app")
    } else {
      setError("root", { message: "Invalid verification code" })
    }

    setIsLoading(false)
  }

  if (show2FA) {
    return (
      <main className="container-page">
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <CardTitle className="h1">Two-Factor Authentication</CardTitle>
              <p className="body">Enter the 6-digit code from your authenticator app</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {errors.root && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.root.message}</AlertDescription>
                </Alert>
              )}

              <div>
                <Input
                  type="text"
                  placeholder="000000"
                  value={twoFactorCode}
                  onChange={(e) => setTwoFactorCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="field text-center text-2xl tracking-widest"
                  maxLength={6}
                />
              </div>

              <Button
                onClick={handle2FASubmit}
                className="btn btn-primary w-full"
                disabled={isLoading || twoFactorCode.length !== 6}
              >
                {isLoading ? "Verifying..." : "Verify"}
              </Button>

              <div className="text-center">
                <Button variant="ghost" onClick={() => setShow2FA(false)}>
                  Back to sign in
                </Button>
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
              <span className="text-3xl">🛡️</span>
            </div>
            <CardTitle className="h1">Sign in to Torvus Security</CardTitle>
            <p className="body">Access your secure digital vault</p>
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
                    aria-describedby={errors.password ? "password-error" : undefined}
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
                    {showPassword ? <span>🙈</span> : <span>👁️</span>}
                  </Button>
                </div>
                {errors.password && (
                  <p id="password-error" className="help error">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="small">
                Don't have an account?{" "}
                <Link href="/auth/sign-up" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
