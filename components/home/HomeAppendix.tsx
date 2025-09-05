"use client"
import Link from "next/link"
import type React from "react"

/** Minimal Card: relies on existing `.surface` styles if present; otherwise falls back to a simple bordered box via inline style */
function Card({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`surface ${className}`}>{children}</div>
}

function Section({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="h2 text-center mb-4">{title}</h2>
      {children}
    </section>
  )
}

function HomeCard({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <Card>
      <h3 className="h3 mb-2">{title}</h3>
      <p className="body text-thunder/70">{children}</p>
    </Card>
  )
}

export default function HomeAppendix() {
  return (
    <div>
      {/* 1) Clarity band with CTAs */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <Card>
          <h2 className="h2 mb-2">If you go silent, your plan goes into action.</h2>
          <p className="body text-thunder/70 mb-3">
            Store your important information with clear instructions. If you miss your check-in window, Torvus delivers
            your chosen items to your pre-defined recipients—automatically and verifiably.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link className="btn btn-primary" href="/app">
              Create a demo policy
            </Link>
            <Link className="btn btn-secondary" href="/recipient-portal">
              See recipient preview
            </Link>
          </div>
          <p className="small text-thunder/60 mt-3">
            No real personal data in demos · Provenance signing (Ed25519) · Audit trail
          </p>
        </Card>
      </section>

      {/* 2) How it works (3 cards) */}
      <Section title="How Torvus works">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <HomeCard title="Add items & recipients">
            Upload letters, documents, or videos. Choose who should receive what.
          </HomeCard>
          <HomeCard title="Set check-in rules">
            Pick an interval and grace period. If you miss both, a release is triggered.
          </HomeCard>
          <HomeCard title="We deliver with proof">
            Recipients get your items with a signed provenance bundle and audit evidence.
          </HomeCard>
        </div>
      </Section>

      {/* 3) When it matters (3 cards) */}
      <Section title="When it matters">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <HomeCard title="Safety compromised">
            If you're unable to check in, your chosen contact gets what they need immediately.
          </HomeCard>
          <HomeCard title="Legal & estate planning">
            Deliver instructions to counsel or executors only when the trigger conditions are met.
          </HomeCard>
          <HomeCard title="Business continuity">
            Ensure partners have access to critical documents if you're unavailable.
          </HomeCard>
        </div>
      </Section>
    </div>
  )
}
