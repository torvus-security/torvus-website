import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => ({}))
  console.log("[telemetry]", { path: (payload as any)?.path, ts: Date.now() })
  return NextResponse.json({ ok: true })
}
