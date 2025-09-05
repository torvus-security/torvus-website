"use client"
import { useEffect, useState } from "react"
import type React from "react"

import { useRouter } from "next/navigation"

interface DemoSessionWrapperProps {
  children: React.ReactNode
}

export function DemoSessionWrapper({ children }: DemoSessionWrapperProps) {
  const [isValidSession, setIsValidSession] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkSession = () => {
      const token = localStorage.getItem("demo_session_token")
      const expires = localStorage.getItem("demo_session_expires")

      if (!token || !expires) {
        console.log("[v0] No demo session found, redirecting to signin")
        router.push("/signin")
        return
      }

      const expiresAt = Number.parseInt(expires, 10)
      if (Date.now() > expiresAt) {
        console.log("[v0] Demo session expired, clearing and redirecting to signin")
        localStorage.removeItem("demo_session_token")
        localStorage.removeItem("demo_session_expires")
        router.push("/signin")
        return
      }

      console.log("[v0] Valid demo session found")
      setIsValidSession(true)
    }

    checkSession()
  }, [router])

  if (isValidSession === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50/50 to-pink-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-rose-600">Checking session...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
