import { type NextRequest, NextResponse } from "next/server"
import { verify } from "@/lib/totp"
import { getUserByEmail, audit } from "@/lib/memdb"
import { setDemoSession } from "@/lib/session"

export async function POST(req: NextRequest) {
  try {
    console.log("[v0] TOTP verify API called")
    const { email, token } = await req.json()
    console.log("[v0] Verifying TOTP for email:", email, "token:", token)

    if (email === "demo@example.com" && token === "123456") {
      console.log("[v0] Demo email code verified")
      const res = NextResponse.json({ verified: true, redirect: "/app" })
      audit(email, "demo_email_verified")
      const sessionToken = setDemoSession(res, 120)
      return NextResponse.json({
        verified: true,
        redirect: "/app",
        sessionToken,
      })
    }

    const user = getUserByEmail(email)
    console.log("[v0] User found:", !!user, "has secret:", !!user?.totpSecret)

    const ok = user?.totpSecret ? verify(token, user.totpSecret) : false
    console.log("[v0] TOTP verification result:", ok)

    if (ok) {
      console.log("[v0] Setting session and audit log")
      audit(email, "totp_verified")
      const res = NextResponse.json({ verified: true, redirect: "/app" })
      const sessionToken = setDemoSession(res, 120)
      return NextResponse.json({
        verified: true,
        redirect: "/app",
        sessionToken,
      })
    } else {
      return NextResponse.json({ verified: false })
    }
  } catch (error) {
    console.error("[v0] TOTP verify error:", error)
    return NextResponse.json({ error: "Verification failed" }, { status: 500 })
  }
}
