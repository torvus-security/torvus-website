// lib/demoPolicy.ts — demo-only policy for recipient preview (no PII)
export type DemoRecipient = { id: string; name: string; channel: "email" | "sms" | "webhook" }
export type DemoAction = { id: string; type: "send" | "notify"; item: string; recipientId: string }
export type DemoPolicy = {
  intervalMinutes: number
  graceMinutes: number
  recipients: DemoRecipient[]
  actions: DemoAction[]
  updatedAt: number
}

export function getDemoPolicy(): DemoPolicy {
  // Try localStorage override first (if dashboard wrote one)
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem("torvus_demo_policy")
      if (raw) return JSON.parse(raw) as DemoPolicy
    } catch {
      /* ignore */
    }
  }
  // Default demo policy (safe placeholders)
  return {
    intervalMinutes: 60,
    graceMinutes: 15,
    recipients: [{ id: "r1", name: "Trusted Contact", channel: "email" }],
    actions: [{ id: "a1", type: "send", item: "Letter of instruction (demo)", recipientId: "r1" }],
    updatedAt: Date.now(),
  }
}
