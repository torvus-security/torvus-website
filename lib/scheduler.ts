// lib/scheduler.ts — demo in-memory "release" scheduler
import { getPolicy } from "@/lib/memdb"
import { randomUUID } from "crypto"

export type ReleaseJob = {
  id: string
  at: number // when to release (ms epoch)
  policyUpdatedAt: number
  status: "queued" | "released"
  createdAt: number
}

const state = {
  lastCheckInAt: undefined as number | undefined,
  jobs: [] as ReleaseJob[],
}

export function setLastCheckIn(ts: number = Date.now()) {
  state.lastCheckInAt = ts
  // Clear any queued jobs on successful check-in
  state.jobs = state.jobs.filter((j) => j.status !== "queued") // demo: cancel queued
}

export function nextDue(): number | null {
  const p = getPolicy()
  const last = state.lastCheckInAt ?? Date.now()
  return last + (p.intervalMinutes + p.graceMinutes) * 60_000
}

export function enqueueIfDue(now = Date.now()) {
  const dueAt = nextDue()
  if (dueAt && now >= dueAt) {
    const job: ReleaseJob = {
      id: randomUUID(),
      at: dueAt,
      policyUpdatedAt: getPolicy().updatedAt,
      status: "queued",
      createdAt: now,
    }
    state.jobs.push(job)
    return job
  }
  return null
}

export function sweep(now = Date.now()) {
  const released: ReleaseJob[] = []
  for (const j of state.jobs) {
    if (j.status === "queued" && j.at <= now) {
      j.status = "released"
      released.push(j)
    }
  }
  return { released }
}

export function getSchedulerState() {
  return {
    lastCheckInAt: state.lastCheckInAt ?? null,
    nextDueAt: nextDue(),
    queued: state.jobs.filter((j) => j.status === "queued").length,
    total: state.jobs.length,
  }
}
