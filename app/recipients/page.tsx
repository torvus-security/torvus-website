"use client"
import { useEffect, useState } from "react"
import nacl from "tweetnacl"

type ReleaseItem = { id: string; title: string; kind: "document" | "note" }
type ReleasePackage = {
  title: string
  reason: string
  recipientName: string
  items: ReleaseItem[]
  provenance: any
  signatureBundle: {
    payload: { policyDigest: string; snapshotAt: number; issuer: string }
    signature: string
    pubkey: string
  }
  generatedAt: number
}

function fromB64url(s: string): Uint8Array {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4))
  return new Uint8Array(Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/") + pad, "base64"))
}

export default function RecipientPortal() {
  const [pkg, setPkg] = useState<ReleasePackage | null>(null)
  const [err, setErr] = useState<string>("")
  const [verified, setVerified] = useState<boolean | null>(null)

  useEffect(() => {
    fetch("/api/release/preview")
      .then((r) => r.json())
      .then((d) => {
        if (d?.ok) setPkg(d.package)
        else setErr("Failed to load")
      })
      .catch(() => setErr("Failed to load"))
  }, [])

  useEffect(() => {
    if (!pkg) return
    try {
      const msg = Buffer.from(JSON.stringify(pkg.signatureBundle.payload))
      const sig = fromB64url(pkg.signatureBundle.signature)
      const pk = fromB64url(pkg.signatureBundle.pubkey)
      const ok = nacl.sign.detached.verify(new Uint8Array(msg), sig, pk)
      setVerified(ok)
    } catch {
      setVerified(false)
    }
  }, [pkg])

  function copyProvenance() {
    if (!pkg) return
    navigator.clipboard.writeText(JSON.stringify(pkg.provenance, null, 2)).catch(() => {})
  }

  if (err)
    return (
      <main className="container mx-auto px-4 py-8 stack-lg">
        <p className="text-red-500">{err}</p>
      </main>
    )
  if (!pkg)
    return (
      <main className="container mx-auto px-4 py-8 stack-lg">
        <p>Loading…</p>
      </main>
    )

  return (
    <main className="container-page section">
      <h1 className="h1 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
        Recipient Portal (preview)
      </h1>

      <div className="surface--light p-6 mb-6 border border-rose-100">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h2 className="h2">{pkg.title}</h2>
            <p className="body">{pkg.reason}</p>
            <p className="body">
              <strong>Recipient:</strong> {pkg.recipientName}
            </p>
            <p className="small">Generated: {new Date(pkg.generatedAt).toLocaleString()}</p>
          </div>
          <div className="ml-4">
            {verified === true && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                ✅ Verified
              </span>
            )}
            {verified === false && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
                ⚠️ Could not verify
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="surface--light p-6 mb-6 border border-rose-100">
        <h2 className="h2">Items</h2>
        {pkg.items.length === 0 ? (
          <p className="body">No items configured in the current policy.</p>
        ) : (
          <ul className="space-y-2">
            {pkg.items.map((i) => (
              <li key={i.id} className="flex items-center">
                <strong className="body">{i.title}</strong>
                <span className="small">({i.kind})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="surface--light p-6 border border-rose-100">
        <h2 className="h2">Provenance JSON</h2>
        <p className="body mb-4">Demo representation of policy + oracles (not legal advice).</p>
        <pre className="surface--mist p-4 rounded-md text-sm overflow-x-auto border border-border">
          {JSON.stringify(pkg.provenance, null, 2)}
        </pre>
        <button
          className="mt-4 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-md hover:from-rose-600 hover:to-pink-700 transition-colors"
          onClick={copyProvenance}
        >
          Copy JSON
        </button>
      </div>
    </main>
  )
}
