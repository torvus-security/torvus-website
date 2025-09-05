import { type NextRequest, NextResponse } from "next/server"
import { sweep, enqueueIfDue, getSchedulerState } from "@/lib/scheduler"
import { audit } from "@/lib/memdb"

export async function GET(_req: NextRequest) {
  const now = Date.now()
  enqueueIfDue(now) // ensure due job exists if grace has passed
  const { released } = sweep(now)
  if (released.length > 0) {
    audit("system", "release_swept", { count: released.length })
  }
  const s = getSchedulerState()
  return NextResponse.json({ ok: true, released: released.length, state: s })
}

export async function POST(_req: NextRequest) {
  const now = Date.now()
  enqueueIfDue(now) // ensure due job exists if grace has passed
  const { released } = sweep(now)
  if (released.length > 0) {
    audit("system", "release_swept", { count: released.length })
  }
  const s = getSchedulerState()
  return NextResponse.json({ ok: true, released: released.length, state: s })
}
