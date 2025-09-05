import { type NextRequest, NextResponse } from "next/server"
import { audit } from "@/lib/memdb"
import { setLastCheckIn, enqueueIfDue, getSchedulerState } from "@/lib/scheduler"

export async function POST(_req: NextRequest) {
  try {
    console.log("[v0] Check-in API called")
    const now = Date.now()
    setLastCheckIn(now)
    const job = enqueueIfDue(now) // if late, this would enqueue a release immediately
    audit("user", "checkin_ok", { now, enqueued: !!job })
    console.log("[v0] Check-in audit logged successfully")
    const s = getSchedulerState()
    return NextResponse.json({ ok: true, nextDueAt: s.nextDueAt, state: s })
  } catch (error) {
    console.error("[v0] Check-in error:", error)
    return NextResponse.json({ error: "Check-in failed" }, { status: 500 })
  }
}
