"use client"
import { useState } from "react"
import { startAuthentication, startRegistration } from "@simplewebauthn/browser"

export default function PasskeysDemo() {
  const [email, setEmail] = useState("demo@example.com")
  const [msg, setMsg] = useState("")

  async function register() {
    const opts = await fetch("/api/webauthn/generate-registration-options", {
      method: "POST",
      body: JSON.stringify({ email }),
    }).then((r) => r.json())
    const att = await startRegistration(opts)
    const ok = await fetch("/api/webauthn/verify-registration", {
      method: "POST",
      body: JSON.stringify({ email, attResp: att }),
    }).then((r) => r.json())
    setMsg(ok.ok ? "✅ Registered" : "❌ Failed")
  }
  async function authenticate() {
    const opts = await fetch("/api/webauthn/generate-authentication-options", {
      method: "POST",
      body: JSON.stringify({ email }),
    }).then((r) => r.json())
    const as = await startAuthentication(opts)
    const ok = await fetch("/api/webauthn/verify-authentication", {
      method: "POST",
      body: JSON.stringify({ email, asResp: as }),
    }).then((r) => r.json())
    setMsg(ok.ok ? "✅ Authenticated" : "❌ Failed")
  }

  return (
    <main className="container-page section">
      <div className="mx-auto max-w-2xl">
        <div className="surface--light rounded-2xl shadow-xl p-8">
          <h1 className="h1">Passkeys Demo</h1>

          <div className="space-y-6">
            <div>
              <label className="block small font-medium text-gray-700 mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="field w-full" />
            </div>

            <div className="flex gap-4">
              <button className="btn btn-primary" onClick={register}>
                Register Passkey
              </button>
              <button className="btn btn-secondary" onClick={authenticate}>
                Authenticate
              </button>
            </div>

            {msg && <div className="p-4 surface--muted rounded-lg text-center font-medium">{msg}</div>}
          </div>
        </div>
      </div>
    </main>
  )
}
