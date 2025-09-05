// lib/release.ts (demo)
import { getPolicy } from "@/lib/memdb"
import { signProvenance } from "@/lib/signing"

export type ReleaseItem = { id: string; title: string; kind: "document" | "note" }
export type ReleasePackage = {
  title: string
  reason: string
  recipientName: string
  items: ReleaseItem[]
  provenance: any // human-readable view
  signatureBundle: {
    payload: { policyDigest: string; snapshotAt: number; issuer: string }
    signature: string
    pubkey: string
  }
  generatedAt: number
}

export function buildReleasePreview(): ReleasePackage {
  const policy = getPolicy()
  const firstRecipient = policy.recipients[0]
  const items: ReleaseItem[] = policy.actions.map((a) => ({
    id: a.id,
    title: a.item || "Demo item",
    kind: "document",
  }))

  const snapshot = {
    intervalMinutes: policy.intervalMinutes,
    graceMinutes: policy.graceMinutes,
    recipients: policy.recipients.map((r) => ({ id: r.id, name: r.name, channel: r.channel })),
    actions: policy.actions.map((a) => ({ id: a.id, type: a.type, recipientId: a.recipientId })),
    updatedAt: policy.updatedAt,
  }
  const sb = signProvenance(snapshot)

  return {
    title: "Release package preview (demo)",
    reason: "You are viewing a preview of what would be delivered under the current policy.",
    recipientName: firstRecipient ? firstRecipient.name : "Recipient",
    items,
    provenance: { policy: snapshot, oracles: ["missed_checkin"], auditIds: ["demo-abc123"] },
    signatureBundle: { ...sb },
    generatedAt: Date.now(),
  }
}
