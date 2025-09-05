import { type NextRequest, NextResponse } from "next/server"
import { setHold, audit } from "@/lib/memdb"

export async function POST(req: NextRequest) {
  try {
    console.log("[v0] Duress API called")
    const { email } = await req.json() // demo: supplied by client
    const userEmail = email || "demo@example.com"
    console.log("[v0] Triggering duress for email:", userEmail)

    setHold(userEmail, true)
    console.log("[v0] Hold set for user")

    audit(userEmail, "duress_triggered")
    console.log("[v0] Duress audit logged successfully")

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Duress trigger error:", error)
    return NextResponse.json({ error: "Duress trigger failed" }, { status: 500 })
  }
}
