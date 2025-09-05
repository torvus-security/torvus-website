// lib/memdb.ts — demo-safe in-memory store (no PII, resets on redeploy)
export type User = { id: string; email: string; totpSecret?: string; hold?: boolean }
export type Audit = { at: number; actor: string; action: string; meta?: any }
export type WaitlistEntry = { hash: string; consent: boolean; ts: number }

export type PolicyRecipient = { id: string; name: string; channel: string }
export type PolicyAction = { id: string; type: string; recipientId: string; item?: string }
export type Policy = {
  intervalMinutes: number
  graceMinutes: number
  recipients: PolicyRecipient[]
  actions: PolicyAction[]
  updatedAt: number
}

const db = { users: [] as User[], audit: [] as Audit[] }
const waitlist: WaitlistEntry[] = []

const demoPolicy: Policy = {
  intervalMinutes: 60,
  graceMinutes: 15,
  recipients: [
    { id: "r1", name: "Emergency Contact", channel: "email" },
    { id: "r2", name: "Legal Representative", channel: "secure_message" },
  ],
  actions: [
    { id: "a1", type: "release", recipientId: "r1", item: "Personal Documents" },
    { id: "a2", type: "release", recipientId: "r2", item: "Legal Instructions" },
  ],
  updatedAt: Date.now(),
}

export function upsertUser(email: string, patch: Partial<User> = {}) {
  let u = db.users.find((x) => x.email === email)
  if (!u) {
    u = { id: crypto.randomUUID(), email }
    db.users.push(u)
  }
  Object.assign(u, patch)
  return u
}
export const getUserByEmail = (email: string) => db.users.find((u) => u.email === email)
export const setHold = (email: string, hold: boolean) => {
  const u = getUserByEmail(email)
  if (u) u.hold = hold
}
export const audit = (actor: string, action: string, meta?: any) =>
  db.audit.push({ at: Date.now(), actor, action, meta })

export const getAudit = () => db.audit

export function addWaitlist(hash: string, consent: boolean) {
  waitlist.push({ hash, consent, ts: Date.now() })
}

export function getWaitlist() {
  return waitlist
}

export const getPolicy = () => demoPolicy
