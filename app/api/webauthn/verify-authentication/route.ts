import { type NextRequest, NextResponse } from "next/server"
import { finishAuth } from "@/lib/webauthn"

export async function POST(req: NextRequest) {
  const { email, asResp } = await req.json()
  return NextResponse.json({ ok: await finishAuth(email, asResp) })
}
