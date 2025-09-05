import { type NextRequest, NextResponse } from "next/server"
import { startAuth } from "@/lib/webauthn"

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  return NextResponse.json(await startAuth(email))
}
