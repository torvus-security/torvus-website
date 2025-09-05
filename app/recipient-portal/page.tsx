"use client"
import { useEffect, useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { PageHeader } from "@/components/ui/pageheader"
import { getDemoPolicy } from "@/lib/demoPolicy"

type ReleaseItem = { id: string; title: string; kind: "document" | "note" }
type SignatureBundle = {
  payload: { policyDigest: string; snapshotAt: number; issuer: string }
  signature: string
  pubkey: string
}
type ReleasePackage = {
  title: string
  reason: string
  recipientName: string
  items: ReleaseItem[]
  provenance: any
  signatureBundle?: SignatureBundle
  generatedAt: number
}

function buildFromDemo(): ReleasePackage {
  const p = getDemoPolicy()
  const first = p.recipients[0]
  const items: ReleaseItem[] = p.actions.map((a) => ({ id: a.id, title: a.item || "Demo item", kind: "document" }))
  const snapshot = {
    intervalMinutes: p.intervalMinutes,
    graceMinutes: p.graceMinutes,
    recipients: p.recipients.map((r) => ({ id: r.id, name: r.name, channel: r.channel })),
    actions: p.actions.map((a) => ({ id: a.id, type: a.type, recipientId: a.recipientId })),
    updatedAt: p.updatedAt,
  }
  return {
    title: "Release package preview (demo)",
    reason: "This is a demo preview of what would be delivered under the current policy.",
    recipientName: first ? first.name : "Recipient",
    items,
    provenance: {
      policy: snapshot,
      oracles: ["missed_checkin"],
      auditIds: ["demo-abc123"],
      note: "Unsigned demo bundle",
    },
    generatedAt: Date.now(),
  }
}

export default function RecipientPortalDemo() {
  const [pkg, setPkg] = useState<ReleasePackage | null>(null)
  const [err, setErr] = useState<string>("")
  const [verified, setVerified] = useState<"yes" | "no" | "na">("na")

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch("/api/release/preview", { cache: "no-store" })
        if (res.ok) {
          const data = await res.json()
          if (!cancelled && data?.ok && data?.package) {
            setPkg(data.package as ReleasePackage)
            setVerified(data.package.signatureBundle ? "yes" : "na")
            return
          }
        }
      } catch {
        /* ignore */
      }
      if (!cancelled) {
        setPkg(buildFromDemo())
        setVerified("na")
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const headlineBadge = useMemo(() => {
    if (verified === "yes") return <span className="badge success">✅ Verified (demo)</span>
    if (verified === "no") return <span className="badge alert">⚠️ Could not verify</span>
    return <span className="badge info">ℹ️ Unsigned demo</span>
  }, [verified])

  function copyProvenance() {
    if (!pkg) return
    try {
      navigator.clipboard.writeText(JSON.stringify(pkg.provenance, null, 2))
    } catch {}
  }

  if (err) {
    return (
      <main className="container-page section">
        <p className="text-cranberry">{err}</p>
      </main>
    )
  }

  if (!pkg) {
    return (
      <main className="container-page section">
        <p>Loading…</p>
      </main>
    )
  }

  return (
    <main className="container-page section stack">
      <PageHeader
        title="Recipient Portal (demo)"
        blurb="Demo preview only — do not upload or enter real personal or sensitive data."
      />

      <Card>
        <div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}
        >
          <div>
            <h2>{pkg.title}</h2>
            <p className="muted">{pkg.reason}</p>
            <p>
              <b>Recipient:</b> {pkg.recipientName}
            </p>
            <p className="small">Generated: {new Date(pkg.generatedAt).toLocaleString()}</p>
          </div>
          <div>{headlineBadge}</div>
        </div>
      </Card>

      <Card title="Items included">
        {pkg.items.length === 0 ? (
          <p className="muted">No items configured in the current policy.</p>
        ) : (
          <ul className="list-tight">
            {pkg.items.map((i) => (
              <li key={i.id}>
                <b>{i.title}</b> <span className="small">({i.kind})</span>
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card title="Why you're receiving this">
        <p className="muted">
          Under the policy interval and grace settings, a missed or late check-in would trigger delivery of the above
          items to the designated recipient(s).
        </p>
      </Card>

      <Card title="Provenance JSON" subtitle="Snapshot of policy fields and demo oracles">
        <pre className="small whitespace-pre-wrap overflow-x-auto bg-mist p-3 rounded-lg border border-thunder/20">
          {JSON.stringify(pkg.provenance, null, 2)}
        </pre>
        <p className="mt-4">
          <button className="button" onClick={copyProvenance}>
            Copy JSON
          </button>
        </p>
      </Card>

      <p>
        <a className="button" href="/app">
          ← Back to dashboard
        </a>
      </p>
    </main>
  )
}
