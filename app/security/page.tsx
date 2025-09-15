import type { Metadata } from "next";
import {
  Shield,
  Lock,
  KeyRound,
  FileCheck2,
  Users2,
  ClipboardList,
  Timer,
  Fingerprint,
  EyeOff,
  Package,
  Landmark,
  Network,
  Server,
  GaugeCircle,
  Rocket,
  Ban,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security — Torvus Security",
  description:
    "Security at Torvus: zero-knowledge posture, defense-in-depth, conditional release, provenance and an immutable audit trail.",
};

function SectionHeading({
  kicker,
  title,
  highlight,
  sub,
}: {
  kicker?: string;
  title: string;
  highlight?: string;
  sub?: string;
}) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center">
      {kicker ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {kicker}
        </p>
      ) : null}
      <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}{" "}
        {highlight ? (
          <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        ) : null}
      </h1>
      {sub ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {sub}
        </p>
      ) : null}
    </header>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-3 flex items-center gap-3">
        {icon}
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <div className="text-sm leading-6 text-muted-foreground">{children}</div>
    </div>
  );
}

function Dot({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
}

export default function SecurityPage() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/60 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
          <SectionHeading
            kicker="Security at Torvus"
            title="Our"
            highlight="promise"
            sub="We protect people as much as information. Torvus is a secure digital vault with a conditional-release engine that only delivers what you choose, to who you choose, when clearly defined conditions are met. Behind the scenes, we combine strong encryption, modern identity, duress-safe liveness checks, provenance, and an immutable audit trail."
          />
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          title="Security principles we"
          highlight="live by"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={
              <Dot className="bg-rose-50 text-rose-600 ring-rose-200">
                <EyeOff className="h-4 w-4" />
              </Dot>
            }
            title="Zero-knowledge posture"
          >
            your content is encrypted on your device before upload; our servers
            store ciphertext plus minimal metadata.
          </Card>
          <Card
            icon={
              <Dot className="bg-sky-50 text-sky-600 ring-sky-200">
                <Shield className="h-4 w-4" />
              </Dot>
            }
            title="Defense-in-depth"
          >
            encryption, key management, identity, network hardening, and
            immutable logs reinforce one another.
          </Card>
          <Card
            icon={
              <Dot className="bg-amber-50 text-amber-600 ring-amber-200">
                <KeyRound className="h-4 w-4" />
              </Dot>
            }
            title="Least privilege & separation of duties"
          >
            strict role-based access for users and staff; no plaintext content
            access for platform admins.
          </Card>
          <Card
            icon={
              <Dot className="bg-emerald-50 text-emerald-600 ring-emerald-200">
                <ClipboardList className="h-4 w-4" />
              </Dot>
            }
            title="Transparency with privacy"
          >
            append-only audit with integrity proofs, plus privacy-respecting
            redaction where required by law.
          </Card>
        </div>
      </section>

      {/* PROTECTION AT A GLANCE */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          title="How your data is"
          highlight="protected (at a glance)"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <Card
            icon={
              <Dot className="bg-violet-50 text-violet-600 ring-violet-200">
                <Lock className="h-4 w-4" />
              </Dot>
            }
            title="Client-side encryption (zero-knowledge)"
          >
            Files and notes are encrypted per object with a per-vault data key
            (e.g., XChaCha20-Poly1305 or AES-GCM) before they leave your
            browser. Plaintext never reaches our servers.
          </Card>
          <Card
            icon={
              <Dot className="bg-cyan-50 text-cyan-600 ring-cyan-200">
                <KeyRound className="h-4 w-4" />
              </Dot>
            }
            title="Key management with KMS/HSM"
          >
            Data keys are wrapped with Key-Encryption Keys controlled by a cloud
            Key Management Service; usage is logged and keys are rotated. For
            high-assurance scenarios, keys or policy-sealed shares can live in
            Hardware Security Modules / Trusted Execution Environments.
          </Card>
          <Card
            icon={
              <Dot className="bg-emerald-50 text-emerald-600 ring-emerald-200">
                <Network className="h-4 w-4" />
              </Dot>
            }
            title="Transport & session security"
          >
            TLS 1.3 everywhere; hardened cookies (httpOnly, Secure,
            SameSite=strict); strict Content Security Policy, no inline scripts.
          </Card>
          <Card
            icon={
              <Dot className="bg-slate-50 text-slate-600 ring-slate-200">
                <Server className="h-4 w-4" />
              </Dot>
            }
            title="Backups & recovery"
          >
            encrypted at rest with recovery objectives defined so you can rely
            on availability without sacrificing privacy.
          </Card>
          <Card
            icon={
              <Dot className="bg-amber-50 text-amber-600 ring-amber-200">
                <Users2 className="h-4 w-4" />
              </Dot>
            }
            title="Strong identity & access control"
          >
            <ul className="mt-2 list-disc pl-5">
              <li>
                Passkeys (WebAuthn/FIDO2) first; password + TOTP fallback where
                needed. Hardware-key friendly for phishing-resistance.
              </li>
              <li>
                Role-based/attribute-based authorization enforced on every
                server action; tenant isolation by design.
              </li>
              <li>
                Abuse prevention: rate-limits, IP/device signals, bot defense at
                sign-up.
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* CONDITIONAL RELEASE ENGINE */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          title="Conditional Release Engine"
          highlight='(how “only when” works)'
        />
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            icon={
              <Dot className="bg-rose-50 text-rose-600 ring-rose-200">
                <Timer className="h-4 w-4" />
              </Dot>
            }
            title="Policy builder"
          >
            combine time-locks, inactivity (missed check-ins + grace), guardian
            approvals (K-of-N), and verified-death predicates.
          </Card>
          <Card
            icon={
              <Dot className="bg-sky-50 text-sky-600 ring-sky-200">
                <Lock className="h-4 w-4" />
              </Dot>
            }
            title="Policy-sealed keys"
          >
            release is cryptographically impossible unless all predicates pass;
            key shares are sealed to policy inside an attested TEE/HSM and only
            re-wrapped to recipients when conditions are satisfied.
          </Card>
          <Card
            icon={
              <Dot className="bg-emerald-50 text-emerald-600 ring-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
              </Dot>
            }
            title="Dry-run simulator"
          >
            test policies safely with redacted previews and clear pass/fail
            reasons before you rely on them.
          </Card>
        </div>
      </section>

      {/* DURESS-SAFE LIVENESS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading title="Duress-safe" highlight="liveness" />
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            icon={
              <Dot className="bg-rose-50 text-rose-600 ring-rose-200">
                <GaugeCircle className="h-4 w-4" />
              </Dot>
            }
            title="Check-ins & grace"
          >
            periodic “I’m OK” heartbeats prevent accidental releases; grace
            windows reduce false triggers.
          </Card>
          <Card
            icon={
              <Dot className="bg-amber-50 text-amber-600 ring-amber-200">
                <Shield className="h-4 w-4" />
              </Dot>
            }
            title="Duress mode"
          >
            a covert input can appear to “unlock” while silently suspending
            releases, showing decoy content, or alerting a trusted
            contact—without tipping off an observer. Events are logged as
            DURESS=true for your eyes only once safe.
          </Card>
          <Card
            icon={
              <Dot className="bg-sky-50 text-sky-600 ring-sky-200">
                <Fingerprint className="h-4 w-4" />
              </Dot>
            }
            title="Liveness oracles (optional)"
          >
            biometric or device-based proofs can be added for higher assurance
            profiles.
          </Card>
        </div>
      </section>

      {/* RECIPIENTS & PORTAL */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          title="Recipients, verification &"
          highlight="the Portal"
        />
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            icon={
              <Dot className="bg-violet-50 text-violet-600 ring-violet-200">
                <FileCheck2 className="h-4 w-4" />
              </Dot>
            }
            title="Who gets what"
          >
            you map recipients to items. They see only their per-recipient
            sealed bundle with a Provenance Certificate explaining who
            authorized access and when.
          </Card>
          <Card
            icon={
              <Dot className="bg-emerald-50 text-emerald-600 ring-emerald-200">
                <Users2 className="h-4 w-4" />
              </Dot>
            }
            title="Verified recipients"
          >
            identities can be bound to public keys and (optionally) KYC/IDV
            requirements before any decryption is possible.
          </Card>
          <Card
            icon={
              <Dot className="bg-sky-50 text-sky-600 ring-sky-200">
                <Lock className="h-4 w-4" />
              </Dot>
            }
            title="Recipient Portal"
          >
            MFA-protected, zero-knowledge-friendly retrieval with expiring,
            one-time links and detailed provenance.
          </Card>
        </div>
      </section>

      {/* TRANSPARENCY & AUDIT */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          title="Transparency & audit you can"
          highlight="trust"
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            icon={
              <Dot className="bg-rose-50 text-rose-600 ring-rose-200">
                <Landmark className="h-4 w-4" />
              </Dot>
            }
            title="Append-only audit trail"
          >
            every significant action—policy changes, guardian approvals, release
            decisions—is recorded in a hash-chained ledger so integrity can be
            proven later.
          </Card>
          <Card
            icon={
              <Dot className="bg-amber-50 text-amber-600 ring-amber-200">
                <ClipboardList className="h-4 w-4" />
              </Dot>
            }
            title="Privacy-aware history"
          >
            immutable doesn’t mean inflexible—controlled redaction pathways
            exist to meet data-protection obligations.
          </Card>
        </div>
      </section>

      {/* HYBRID CUSTODY CALLOUT */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-rose-50/70 via-white to-sky-50/70 p-6 shadow-sm ring-1 ring-black/5">
          <div className="flex items-start gap-3">
            <Dot className="bg-pink-50 text-pink-600 ring-pink-200">
              <Package className="h-4 w-4" />
            </Dot>
            <div>
              <h3 className="text-base font-semibold">
                Optional hybrid digital-to-physical custody
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                For scenarios involving physical documents or couriered media,
                Torvus can link tamper-evident seals and hand-off scans into the
                same transparency log, providing end-to-end provenance across
                digital and physical boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY & COMPLIANCE */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          title="Privacy & compliance"
          highlight="posture"
        />
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            icon={
              <Dot className="bg-slate-50 text-slate-600 ring-slate-200">
                <EyeOff className="h-4 w-4" />
              </Dot>
            }
            title="Data minimization"
          >
            we store only what’s needed—never your passwords, 2FA codes, or live
            third-party cookies.
          </Card>
          <Card
            icon={
              <Dot className="bg-emerald-50 text-emerald-600 ring-emerald-200">
                <Shield className="h-4 w-4" />
              </Dot>
            }
            title="Clear boundaries"
          >
            Torvus does not circumvent provider ToS; instead we guide
            executors/agents with official processes and keep an auditable
            record.
          </Card>
          <Card
            icon={
              <Dot className="bg-sky-50 text-sky-600 ring-sky-200">
                <Landmark className="h-4 w-4" />
              </Dot>
            }
            title="Regulatory alignment"
          >
            designed for Australian Privacy Principles, GDPR/CCPA, and
            breach-notification duties, with auditability built in.
          </Card>
        </div>
      </section>

      {/* SECURE DEV & OPS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          title="Secure development &"
          highlight="operations"
        />
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            icon={
              <Dot className="bg-purple-50 text-purple-600 ring-purple-200">
                <Rocket className="h-4 w-4" />
              </Dot>
            }
            title="Hardened build & deploy"
          >
            CI/CD with security gates, signed builds, dependency scanning, and
            infrastructure-as-code.
          </Card>
          <Card
            icon={
              <Dot className="bg-cyan-50 text-cyan-600 ring-cyan-200">
                <Network className="h-4 w-4" />
              </Dot>
            }
            title="Network & app hardening"
          >
            CSP, WAF, DDoS shielding, least-privilege IAM, encrypted backups,
            and strict secrets management.
          </Card>
          <Card
            icon={
              <Dot className="bg-emerald-50 text-emerald-600 ring-emerald-200">
                <GaugeCircle className="h-4 w-4" />
              </Dot>
            }
            title="Reliability targets"
          >
            availability SLOs, defined recovery objectives, and observability
            for rapid incident response.
          </Card>
        </div>
      </section>

      {/* WHAT WE DON'T DO */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading title="What we" highlight="don’t do" />
        <ul className="mx-auto max-w-3xl list-disc space-y-2 pl-6 text-sm leading-6 text-muted-foreground">
          <li>Store your passwords or ask for them.</li>
          <li>Release anything until verification conditions are met.</li>
          <li>Show recipients more than the minimum necessary.</li>
        </ul>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading title="Roadmap highlights" highlight="(security)" />
        <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-muted-foreground">
          Regional data residency selection, enterprise SSO, biometric liveness
          for recipients, and automated death-verification integrations where
          available.
        </p>
      </section>

      {/* ONE SENTENCE */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="rounded-3xl border border-border/60 bg-card p-6 text-center shadow-sm ring-1 ring-black/5">
          <p className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed">
            Torvus makes sure your instructions—and only your instructions—
            reach the right people at the right time, with encryption,
            verification, and a tamper-evident paper trail backing every step.
          </p>
        </div>
      </section>

      {/* MICRO-COPY */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            icon={
              <Dot className="bg-emerald-50 text-emerald-600 ring-emerald-200">
                <Lock className="h-4 w-4" />
              </Dot>
            }
            title="Zero-knowledge encryption"
          >
            “We can’t see your files. Only you and your intended recipients
            can.”
          </Card>
          <Card
            icon={
              <Dot className="bg-rose-50 text-rose-600 ring-rose-200">
                <Shield className="h-4 w-4" />
              </Dot>
            }
            title="Duress mode"
          >
            “A covert safety switch that quietly pauses releases and shows a
            harmless view.”
          </Card>
          <Card
            icon={
              <Dot className="bg-sky-50 text-sky-600 ring-sky-200">
                <FileCheck2 className="h-4 w-4" />
              </Dot>
            }
            title="Provenance"
          >
            “Every download comes with a cryptographic receipt of who authorized
            it and when.”
          </Card>
        </div>
      </section>
    </main>
  );
}
