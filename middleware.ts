import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// ---- Demo rate limiter (in-memory; may reset across edge instances) ----
type Bucket = { count: number; resetAt: number }
const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const LIMIT = 20 // 20 requests / window
const buckets = new Map<string, Bucket>()

function shouldRateLimit(ip: string, path: string): { limited: boolean; retryAfter?: number } {
  const key = `${ip}|${path}`
  const now = Date.now()
  const b = buckets.get(key)
  if (!b || now > b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return { limited: false }
  }
  b.count += 1
  if (b.count > LIMIT) return { limited: true, retryAfter: Math.ceil((b.resetAt - now) / 1000) }
  return { limited: false }
}

export const config = {
  matcher: ["/api/:path*"],
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const isAPI = url.pathname.startsWith("/api/")

  console.log("[v0] Middleware processing:", url.pathname, "isAPI:", isAPI)

  // Rate-limit POST API calls
  if (isAPI && req.method === "POST") {
    const ip = req.ip ?? req.headers.get("x-forwarded-for") ?? "anon"
    console.log("[v0] Rate limiting check for IP:", ip, "path:", url.pathname)

    const { limited, retryAfter } = shouldRateLimit(String(ip), url.pathname)
    console.log("[v0] Rate limit result - limited:", limited, "retryAfter:", retryAfter)

    if (limited) {
      console.log("[v0] Request rate limited")
      const res = NextResponse.json({ ok: false, error: "Rate limited", retryAfter }, { status: 429 })
      if (retryAfter) res.headers.set("Retry-After", String(retryAfter))
      return res
    }
  }

  console.log("[v0] Middleware allowing request to proceed")
  return NextResponse.next()
}
