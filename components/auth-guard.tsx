"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Mock authentication check
    const checkAuth = () => {
      // In a real app, this would check for valid tokens, session, etc.
      const isLoggedIn = localStorage.getItem("torvus-auth") === "true"
      setIsAuthenticated(isLoggedIn)

      if (!isLoggedIn) {
        router.push("/auth/sign-in")
      }
    }

    checkAuth()
  }, [router])

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <span className="text-4xl mx-auto mb-4 block animate-pulse">🛡️</span>
            <p className="text-muted-foreground">Verifying authentication...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to sign-in
  }

  return <>{children}</>
}
