import type { NextResponse, NextRequest } from "next/server"

export const DEMO_COOKIE = "torvus_demo_auth"
export const DEMO_TOKEN_HEADER = "x-demo-token"

export function setDemoSession(res: NextResponse, minutes = 120) {
  const expires = new Date(Date.now() + minutes * 60 * 1000)
  const isProduction = process.env.NODE_ENV === "production"
  const sessionToken = `demo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

  // Set cookie as fallback
  res.cookies.set(DEMO_COOKIE, "1", {
    httpOnly: false,
    sameSite: "lax",
    secure: isProduction,
    path: "/",
    expires,
  })

  console.log("[v0] Setting demo session cookie:")
  console.log("[v0] - Name:", DEMO_COOKIE)
  console.log("[v0] - Value: 1")
  console.log("[v0] - HttpOnly: false")
  console.log("[v0] - Secure:", isProduction)
  console.log("[v0] - Path: /")
  console.log("[v0] - Expires:", expires.toISOString())

  // Return session token for localStorage storage
  return sessionToken
}

export function hasDemoSession(req: NextRequest) {
  // Check for demo token in header first (more reliable)
  const demoToken = req.headers.get(DEMO_TOKEN_HEADER)
  if (demoToken && demoToken.startsWith("demo_")) {
    console.log("[v0] Demo session found via token header")
    return true
  }

  // Fallback to cookie check
  const hasSession = req.cookies.get(DEMO_COOKIE)?.value === "1"
  console.log("[v0] Checking demo session via cookie:", hasSession)
  return hasSession
}
