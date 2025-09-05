"use client"
import { useState } from "react"
import type React from "react"
import { EnhancedButton } from "@/components/enhanced-button"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle")
  const [error, setError] = useState<string>("")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!isValidEmail(email)) {
      setError("Please enter a valid email.")
      return
    }
    if (!consent) {
      setError("Please agree to the privacy terms.")
      return
    }
    setStatus("loading")
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, consent }),
    })
    const data = await res.json().catch(() => ({}))
    if (res.ok && (data as any)?.ok) setStatus("ok")
    else {
      setStatus("err")
      setError((data as any)?.error || "Something went wrong")
    }
  }

  return (
    <main className="container-page section min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="h1 ink2 ink2--cranberry-lagoon ink-shadow mb-4">Join the early access</h1>
          <p className="body text-gray-600 text-lg">No spam. Unsubscribe anytime.</p>
        </div>

        {status !== "ok" ? (
          <form onSubmit={submit} className="surface--light rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <label htmlFor="email" className="block small font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="field w-full"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start gap-3 small text-gray-600">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                />
                <span>
                  I agree to receive updates about Torvus Security and understand the{" "}
                  <a
                    href="/legal/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-rose-600 hover:text-rose-700 underline"
                  >
                    privacy policy
                  </a>
                  .
                </span>
              </label>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="help error small">{error}</p>
              </div>
            )}

            <EnhancedButton type="submit" variant="primary" disabled={status === "loading"} className="w-full">
              {status === "loading" ? "Submitting…" : "Get early access"}
            </EnhancedButton>
          </form>
        ) : (
          <div className="surface--light rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 ink2 ink2--cranberry-lagoon rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">✓</span>
            </div>
            <h2 className="h2 text-gray-900 mb-4">Thanks — you're on the list</h2>
            <p className="body text-gray-600 mb-8">
              We've recorded your interest. We'll email you when private beta opens.
            </p>
            <EnhancedButton variant="primary" className="inline-block" onClick={() => (window.location.href = "/")}>
              Back to home
            </EnhancedButton>
          </div>
        )}
      </div>
    </main>
  )
}
