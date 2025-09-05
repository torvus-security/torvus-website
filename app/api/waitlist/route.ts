import { type NextRequest, NextResponse } from "next/server"
import { addWaitlist, getWaitlist } from "@/lib/memdb"
import { audit } from "@/lib/memdb"
import crypto from "crypto"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  const { email, consent } = await req.json().catch(() => ({ email: "", consent: false }))
  const norm = String(email || "")
    .trim()
    .toLowerCase()
  if (!isValidEmail(norm)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 })
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "Consent required" }, { status: 400 })
  }
  const hash = crypto.createHash("sha256").update(norm).digest("hex")
  addWaitlist(hash, !!consent)
  try {
    audit("anon", "waitlist_joined", { emailHash: hash })
  } catch {}
  return NextResponse.json({ ok: true, count: getWaitlist().length })
}
