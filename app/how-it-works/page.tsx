import HowSection from "@/components/how/section"
import StepCard from "@/components/how/step-card"
import Duo from "@/components/how/duo"
import HowAnchors from "@/components/how/anchors"

export const metadata = {
  title: "How it works",
  description: "Three usage paths: digital asset inheritance, journalist safety, and conditional information release.",
}

export default function HowItWorksPage() {
  // SVG icons (inline so they inherit currentColor from icon-chip)
  const IconKey = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 7a5 5 0 1 1-5-5 5 5 0 0 1 5 5Z" />
      <path d="M14 12l7 7" />
      <path d="M14 15l3 3" />
    </svg>
  )
  const IconShield = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22C7 20 4 17 4 12V7l8-5 8 5v5c0 5-3 8-8 10Z" />
    </svg>
  )
  const IconLock = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
  const IconTimer = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2 2" />
      <path d="M12 2v2" />
    </svg>
  )

  return (
    <main className="container-page section">
      <div className="stack-lg sec-layout">
        <aside className="hidden xl:block">
          <HowAnchors />
        </aside>
        <div className="stack-lg">
          {/* Hero */}
          <header className="band p-6 sm:p-8 rounded-2xl">
            <h1 className="h1 ink2 ink2--lapis-lagoon ink-shadow">How it works</h1>
            <p className="body">Three practical paths to protect and release sensitive information—safely.</p>
          </header>

          {/* 1. Digital asset inheritance management */}
          <HowSection id="inheritance" heading="Digital asset inheritance management">
            <p className="body">
              Plan ahead: designate recipients and conditions so critical accounts, keys, and documents are delivered
              only when they should be.
            </p>

            <div className="flow-grid">
              <StepCard
                title="Create a vault"
                body="Add accounts, keys, and documents to a private vault."
                icon={IconLock}
                chipClass="icon-chip--blue"
              />
              <StepCard
                title="Nominate recipients"
                body="Choose trusted people or an executor, set identities and contact methods."
                icon={IconKey}
                chipClass="icon-chip--green"
              />
              <StepCard
                title="Define triggers"
                body="Time-based unlock, multi-party approval, proof-of-death verification, or custom checks."
                icon={IconTimer}
                chipClass="icon-chip--purple"
              />
              <StepCard
                title="Deliver on condition"
                body="When triggers are met, release happens securely with full audit."
                icon={IconShield}
                chipClass="icon-chip--orange"
              />
            </div>

            <Duo
              you={{
                title: "What you do",
                items: [
                  "List assets and upload docs into your vault",
                  "Add recipients and how to reach them",
                  "Pick unlock rules (time, approvals, verification)",
                ],
              }}
              torvus={{
                title: "What Torvus does",
                items: [
                  "Encrypts everything at rest (AES-256-GCM) and in transit (TLS 1.3)",
                  "Stores keys in KMS and enforces RBAC & audit trails",
                  "Executes triggers and delivers materials with proof and logs",
                ],
              }}
            />
          </HowSection>

          {/* 2. Journalist information management & whistleblower safety */}
          <HowSection id="journalists" heading="Journalist information management & whistleblower safety" accent="rose">
            <p className="body">
              Set up safe collection for sensitive tips, keep sources compartmentalised, and control when and how
              materials are shared.
            </p>

            <div className="flow-grid">
              <StepCard
                title="Create a secure drop"
                body="Generate an isolated inbox with one-time links and burn-after-read options."
                icon={IconShield}
                chipClass="icon-chip--purple"
              />
              <StepCard
                title="Compartmentalise"
                body="Keep source materials separate; apply need-to-know access."
                icon={IconLock}
                chipClass="icon-chip--blue"
              />
              <StepCard
                title="Protect the pipeline"
                body="Set redaction workflows and approval paths before release."
                icon={IconKey}
                chipClass="icon-chip--green"
              />
              <StepCard
                title="Time or event release"
                body="Schedule publication or tie it to verifications/consents."
                icon={IconTimer}
                chipClass="icon-chip--orange"
              />
            </div>

            <Duo
              you={{
                title: "What you do",
                items: [
                  "Spin up a drop and share the link",
                  "Assign editors and reviewers",
                  "Choose redaction rules and approvals",
                ],
              }}
              torvus={{
                title: "What Torvus does",
                items: [
                  "Encrypts files and metadata, logs every access",
                  "Separates projects and enforces least privilege",
                  "Maintains immutable audit logs and secure handoff",
                ],
              }}
            />
          </HowSection>

          {/* 3. Individual information protection & release on condition */}
          <HowSection
            id="conditional"
            heading="Individual information protection & release on condition"
            accent="green"
          >
            <p className="body">
              Protect personal data with rules: time-lock, approvals, or outside verification. Release only when
              conditions are met.
            </p>

            <div className="flow-grid">
              <StepCard
                title="Add sensitive info"
                body="Store IDs, documents, account recovery codes, and instructions."
                icon={IconLock}
                chipClass="icon-chip--green"
              />
              <StepCard
                title="Choose guardians"
                body="Select trusted people who can approve release."
                icon={IconKey}
                chipClass="icon-chip--blue"
              />
              <StepCard
                title="Set conditions"
                body="Time-delay, proof documents, multi-approver quorum, or emergency access."
                icon={IconTimer}
                chipClass="icon-chip--purple"
              />
              <StepCard
                title="Release & notify"
                body="When conditions pass, recipients get access; you get a tamper-proof log."
                icon={IconShield}
                chipClass="icon-chip--orange"
              />
            </div>

            <Duo
              you={{
                title: "What you do",
                items: ["Upload information and define who can receive it", "Pick approval thresholds and delays"],
              }}
              torvus={{
                title: "What Torvus does",
                items: [
                  "Guards data with encryption and scoped access",
                  "Executes your rules and records a full audit trail",
                ],
              }}
            />
          </HowSection>

          {/* CTA */}
          <section className="surface--mist p-6 sm:p-8 rounded-xl">
            <h2 className="h2">Ready to try it?</h2>
            <p className="body">Start with a private vault and add a single rule. You can expand later.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a className="btn btn-primary" href="/waitlist">
                Join the waitlist
              </a>
              <a className="btn btn-secondary" href="/contact">
                Talk to us
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
