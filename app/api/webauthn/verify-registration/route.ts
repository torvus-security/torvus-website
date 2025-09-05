import { type NextRequest, NextResponse } from "next/server"
import { finishRegistration } from "@/lib/webauthn"

export async function POST(req: NextRequest) {
  const { email, attResp } = await req.json()
  return NextResponse.json({ ok: await finishRegistration(email, attResp) })
}
