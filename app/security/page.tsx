import AnchorNav from "@/components/security/anchor-nav"
import Section from "@/components/security/section"
import SpecCard from "@/components/security/spec-card"
import Highlights from "@/components/security/highlights"

export const metadata = {
  title: "Security",
  description: "How we protect data — identity, encryption, monitoring, compliance, and continuity.",
}

export default function SecurityPage() {
  const updated = new Date().toLocaleString()

  // Data (reuse your previous arrays; trimmed for brevity here)
  const identity = [
    {
      label: "User auth",
      technical: "Passkeys/WebAuthn (FIDO2), fallback TOTP; OAuth 2.1 / OIDC RP",
      plain: "Passwordless by default; codes as backup.",
      status: "now",
    },
    {
      label: "Session security",
      technical: "HttpOnly/SameSite=strict, short-lived JWT + rotating refresh",
      plain: "Short sessions; refresh tokens rotate to limit replay.",
      status: "now",
    },
    {
      label: "Provisioning",
      technical: "SCIM 2.0",
      plain: "Connect your IdP to auto-manage accounts.",
      status: "planned",
    },
  ]

  const dataProtection = [
    {
      label: "In transit",
      technical: "TLS 1.3 everywhere; HSTS; PFS cipher suites",
      plain: "All connections are encrypted; browsers are told to use HTTPS only.",
      status: "now",
    },
    {
      label: "At rest",
      technical: "AES‑256‑GCM; envelope encryption via KMS",
      plain: "Data on disk is encrypted with modern ciphers and managed keys.",
      status: "now",
    },
    {
      label: "Field encryption",
      technical: "Deterministic + randomised field-level crypto for sensitive columns",
      plain: "Highly sensitive fields are encrypted individually in the database.",
      status: "planned",
    },
  ]

  const keys = [
    {
      label: "KMS",
      technical: "AWS KMS customer managed keys; per-env separation; key aliases",
      plain: "Keys are managed in KMS with strict separation between environments.",
      status: "now",
    },
    {
      label: "Rotation",
      technical: "Automated rotation; encryption context; key-use logging",
      plain: "Keys rotate on a schedule; every use is logged with context.",
      status: "now",
    },
    {
      label: "Tenant isolation",
      technical: "Per-tenant data partitioning; scoped KMS context",
      plain: "Customer data is partitioned; keys can be scoped by tenant.",
      status: "planned",
    },
  ]

  const vault = [
    {
      label: "Secrets",
      technical: "Managed secrets store; short-lived DB creds; periodic rotation",
      plain: "App secrets and DB passwords live in a vault and rotate regularly.",
      status: "now",
    },
    {
      label: "Service identity",
      technical: "mTLS between services; SPIFFE/SPIRE (planned)",
      plain: "Services mutually authenticate using certificates.",
      status: "planned",
    },
  ]

  const sdlc = [
    {
      label: "Static analysis",
      technical: "SAST + secret scanning in CI; IaC linting (tfsec/Checkov)",
      plain: "Code and infra configs are scanned automatically on each change.",
      status: "now",
    },
    {
      label: "Dependency health",
      technical: "SBOM generation; supply-chain checks; pinned versions",
      plain: "We track third-party code and keep vulnerable versions out.",
      status: "now",
    },
    {
      label: "Reviews & signing",
      technical: "Protected branches; 2-person reviews; build artefact signing",
      plain: "Changes need review and signed builds before deployment.",
      status: "planned",
    },
  ]

  const infra = [
    {
      label: "Network",
      technical: "Private subnets; egress controls; WAF + DDoS protection",
      plain: "Only required paths are exposed; abusive traffic is filtered.",
      status: "now",
    },
    {
      label: "Zero-trust admin",
      technical: "SSO + MFA, JIT access, short-lived creds",
      plain: "Admins log in via SSO with MFA and get time-limited access.",
      status: "now",
    },
    {
      label: "Service mesh",
      technical: "mTLS, policy, retries; progressive delivery",
      plain: "Service-to-service traffic is encrypted and governed by policy.",
      status: "planned",
    },
  ]

  const monitoring = [
    {
      label: "Audit logging",
      technical: "Immutable, append-only logs; time-sync; structured events",
      plain: "Security-relevant actions are recorded and tamper-resistant.",
      status: "now",
    },
    {
      label: "Detection",
      technical: "SIEM integration; anomaly alerts; runtime signals",
      plain: "Signals feed alerts that our team can investigate quickly.",
      status: "now",
    },
    {
      label: "IR & runbooks",
      technical: "On-call rotations; playbooks; post-incident reviews",
      plain: "Documented steps for response and follow-up improvements.",
      status: "now",
    },
  ]

  const compliance = [
    {
      label: "SOC 2",
      technical: "Type II readiness in progress; formal audit on roadmap",
      plain: "We're aligning controls and preparing for an external audit.",
      status: "planned",
    },
    {
      label: "ISO 27001",
      technical: "ISMS scoping and risk treatment plan (roadmap)",
      plain: "We're building toward a certifiable security management system.",
      status: "planned",
    },
    {
      label: "Privacy",
      technical: "GDPR/APPs alignment; DPA available; data-subject workflows",
      plain: "We minimise personal data, honour requests and provide a DPA.",
      status: "now",
    },
  ]

  const continuity = [
    {
      label: "Backups",
      technical: "Daily encrypted backups; point-in-time recovery; retention policy",
      plain: "We can restore data to specific points in time if needed.",
      status: "now",
    },
    {
      label: "Resilience",
      technical: "RPO 15m / RTO 24h targets; cross-AZ replication",
      plain: "We aim to lose at most 15 minutes of data and restore in a day.",
      status: "planned",
    },
    {
      label: "Chaos testing",
      technical: "Planned failure drills; dependency fault injection",
      plain: "We practice failures so real incidents are calmer.",
      status: "planned",
    },
  ]

  const disclosure = [
    {
      label: "Disclosure",
      technical: "security.txt; PGP for reports; triage SLA",
      plain: "Security researchers can contact us and get a prompt response.",
      status: "now",
    },
    {
      label: "Bug bounty",
      technical: "Private program (roadmap) on established platform",
      plain: "We plan to invite vetted researchers to test the product.",
      status: "planned",
    },
  ]

  return (
    <main className="container-page section">
      <div className="stack-lg sec-layout">
        {/* Sticky anchors on xl */}
        <aside className="hidden xl:block">
          <AnchorNav />
        </aside>

        <div className="stack-lg">
          <header className="sec-hero rounded-2xl">
            <div className="sec-hero__inner stack-sm">
              <h1 className="h1 ink2 ink2--thunder-lapis ink-shadow">Security principles</h1>
              <p className="body">
                Built for breach-resilience: strong identity, careful data handling, and verified operations.
              </p>
              <p className="small" style={{ opacity: 0.8 }}>
                Status chips show what's live vs planned.
              </p>
            </div>
          </header>

          {/* Quick highlights */}
          <Highlights />

          <Section id="identity" heading="Identity & access">
            <p className="body">How people sign in and what they can do.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 spec-grid">
              {identity.map((i, idx) => (
                <SpecCard
                  key={i.label}
                  title={i.label}
                  technical={i.technical}
                  plain={i.plain}
                  status={i.status as any}
                  tone={["sky", "sky", "sky", "sky", "sky", "sky"][idx % 6]}
                />
              ))}
            </div>
          </Section>

          <Section id="data" heading="Data protection" variant="mist">
            <p className="body">How data is protected in transit, at rest, and at field level.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 spec-grid">
              {dataProtection.map((d, idx) => (
                <SpecCard
                  key={d.label}
                  title={d.label}
                  technical={d.technical}
                  plain={d.plain}
                  status={d.status as any}
                  tone={["lemon", "lemon", "lemon", "lemon", "lemon", "lemon"][idx % 6]}
                />
              ))}
            </div>
          </Section>

          <div className="grid lg:grid-cols-2 gap-3 stack-lg">
            <Section id="keys" heading="Key management">
              <div className="grid gap-3 spec-grid">
                {keys.map((k, idx) => (
                  <SpecCard
                    key={k.label}
                    title={k.label}
                    technical={k.technical}
                    plain={k.plain}
                    status={k.status as any}
                    tone={["mint", "mint", "mint", "mint", "mint", "mint"][idx % 6]}
                  />
                ))}
              </div>
            </Section>
            <Section id="secrets" heading="Secrets & service identity" variant="mist">
              <div className="grid gap-3 spec-grid">
                {vault.map((s, idx) => (
                  <SpecCard
                    key={s.label}
                    title={s.label}
                    technical={s.technical}
                    plain={s.plain}
                    status={s.status as any}
                    tone={["lilac", "lilac", "lilac", "lilac", "lilac", "lilac"][idx % 6]}
                  />
                ))}
              </div>
            </Section>
          </div>

          <Section id="sdlc" heading="Secure development">
            <p className="body">Code security, dependency management, and build integrity.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 spec-grid">
              {sdlc.map((c, idx) => (
                <SpecCard
                  key={c.label}
                  title={c.label}
                  technical={c.technical}
                  plain={c.plain}
                  status={c.status as any}
                  tone={["sand", "sand", "sand", "sand", "sand", "sand"][idx % 6]}
                />
              ))}
            </div>
          </Section>

          <Section id="infra" heading="Infrastructure & network" variant="mist">
            <p className="body">Network security, access controls, and service architecture.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 spec-grid">
              {infra.map((n, idx) => (
                <SpecCard
                  key={n.label}
                  title={n.label}
                  technical={n.technical}
                  plain={n.plain}
                  status={n.status as any}
                  tone={["sky", "sky", "sky", "sky", "sky", "sky"][idx % 6]}
                />
              ))}
            </div>
          </Section>

          <Section id="monitoring" heading="Monitoring & incident response">
            <p className="body">Detection, logging, and response capabilities.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 spec-grid">
              {monitoring.map((m, idx) => (
                <SpecCard
                  key={m.label}
                  title={m.label}
                  technical={m.technical}
                  plain={m.plain}
                  status={m.status as any}
                  tone={["blush", "blush", "blush", "blush", "blush", "blush"][idx % 6]}
                />
              ))}
            </div>
          </Section>

          <Section id="compliance" heading="Compliance & privacy" variant="mist">
            <p className="body">Certifications, standards alignment, and privacy practices.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 spec-grid">
              {compliance.map((c, idx) => (
                <SpecCard
                  key={c.label}
                  title={c.label}
                  technical={c.technical}
                  plain={c.plain}
                  status={c.status as any}
                  tone={["mint", "mint", "mint", "mint", "mint", "mint"][idx % 6]}
                />
              ))}
            </div>
          </Section>

          <div className="grid lg:grid-cols-2 gap-3 stack-lg">
            <Section id="continuity" heading="Business continuity">
              <p className="body">Backup, recovery, and resilience planning.</p>
              <div className="grid gap-3 spec-grid">
                {continuity.map((b, idx) => (
                  <SpecCard
                    key={b.label}
                    title={b.label}
                    technical={b.technical}
                    plain={b.plain}
                    status={b.status as any}
                    tone={["lemon", "lemon", "lemon", "lemon", "lemon", "lemon"][idx % 6]}
                  />
                ))}
              </div>
            </Section>
            <Section id="disclosure" heading="Responsible disclosure" variant="mist">
              <p className="body">Security research and vulnerability reporting.</p>
              <div className="grid gap-3 spec-grid">
                {disclosure.map((r, idx) => (
                  <SpecCard
                    key={r.label}
                    title={r.label}
                    technical={r.technical}
                    plain={r.plain}
                    status={r.status as any}
                    tone={["lilac", "lilac", "lilac", "lilac", "lilac", "lilac"][idx % 6]}
                  />
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </main>
  )
}
