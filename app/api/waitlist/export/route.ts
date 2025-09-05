import { type NextRequest, NextResponse } from "next/server"
import { getWaitlist } from "@/lib/memdb"

export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token")
  if (!process.env.WAITLIST_ADMIN_TOKEN || token !== process.env.WAITLIST_ADMIN_TOKEN) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 })
  }
  const rows = getWaitlist().map((e) => `${e.hash},${e.consent ? "true" : "false"},${new Date(e.ts).toISOString()}`)
  const csv = ["hash,consent,ts_iso", ...rows].join("\n")
  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "no-store",
      "Content-Disposition": 'attachment; filename="waitlist.csv"',
    },
  })
}
