// app/product/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Timer,
  FileCheck2,
  BellRing,
  LockKeyhole,
  KeyRound,
  Users,
  Smartphone,
  Landmark,
  ScrollText,
  Link2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product — Torvus Security",
  description:
    "From plain-language safety to technical depth: check-ins, duress, tamper-evident records, controlled releases, and a focused recipient experience.",
};

function Pill({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 ring-1 ring-white/5 backdrop-blur-sm">
      <Icon className="h-3.5 w-3.5 text-rose-400" />
      {children}
    </span>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-zinc-900/60 p-5 ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-rose-400/30 hover:shadow-rose-500/10 hover:shadow-xl">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/10 ring-1 ring-rose-400/20">
        <Icon className="h-4.5 w-4.5 text-rose-400" />
      </div>
      <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{children}</p>
    </div>
  );
}

export default function ProductPage() {
  return (
    <main className="relative isolate bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-zinc-100">
      {/* subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(244,63,94,0.15),transparent_60%)]"
      />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:pt-14">
        <p className="text-[11px] font-semibold tracking-widest text-rose-400">
          PRODUCT
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-rose-300 bg-clip-text text-transparent">
            Proof when you need it. Release when you choose.
          </span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
          Torvus helps you create tamper-evident records, set check-ins, and
          deliver information to trusted people under your rules—calm in normal
          days, decisive in emergencies.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Pill icon={ShieldCheck}>Tamper-evident records</Pill>
          <Pill icon={Timer}>Check-ins & timers</Pill>
          <Pill icon={BellRing}>Duress signal</Pill>
          <Pill icon={Users}>Recipient controls</Pill>
          <Pill icon={KeyRound}>Passkeys & TOTP</Pill>
          <Pill icon={ScrollText}>Signed audit trail</Pill>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto mt-10 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* What you can do today */}
      <section className="mx-auto mt-10 max-w-6xl px-4">
        <h2 className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-zinc-100 to-rose-300/90 bg-clip-text text-transparent">
            What you can do today
          </span>
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card icon={FileCheck2} title="Capture proof">
            Hash files and notes into a signed trail. Any change becomes
            detectable—a simple, reliable way to preserve integrity.
          </Card>
          <Card icon={Timer} title="Arm a plan">
            Set check-ins or a timer. Stay in control during travel, fieldwork,
            or high-risk moments. Snooze or disarm any time.
          </Card>
          <Card icon={Users} title="Choose recipients">
            Name who sees what upon release. Links are short-lived and
            revocable; recipients don’t need a full account.
          </Card>
          <Card icon={BellRing} title="Act under duress">
            Trigger an alert—or a release—discreetly. You decide the sequence,
            from notifications to delivery.
          </Card>
        </div>
      </section>

      {/* Separator */}
      <div className="mx-auto mt-12 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Pillars of trust */}
      <section className="mx-auto mt-10 max-w-6xl px-4">
        <h2 className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-zinc-100 to-rose-300/90 bg-clip-text text-transparent">
            Pillars of trust
          </span>
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 ring-1 ring-white/5">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-400/20">
              <ShieldCheck className="h-4 w-4 text-rose-400" />
            </div>
            <h3 className="text-sm font-semibold">Integrity</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
              <li>Content hashing & signed audit entries</li>
              <li>Change detection that’s easy to verify</li>
              <li>Transparent architecture notes</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 ring-1 ring-white/5">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-400/20">
              <Link2 className="h-4 w-4 text-rose-400" />
            </div>
            <h3 className="text-sm font-semibold">Control</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
              <li>Time-locks, check-ins, and snooze</li>
              <li>Per-recipient visibility at release</li>
              <li>Revocable, expiring access links</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 ring-1 ring-white/5">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-400/20">
              <KeyRound className="h-4 w-4 text-rose-400" />
            </div>
            <h3 className="text-sm font-semibold">Identity</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
              <li>Passkeys (WebAuthn) with TOTP fallback</li>
              <li>Role-aware policies for teams</li>
              <li>Org-grade options on the roadmap</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical deep dive (interactive details) */}
      <section className="mx-auto mt-12 max-w-6xl px-4">
        <h2 className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-zinc-100 to-rose-300/90 bg-clip-text text-transparent">
            Under the hood
          </span>
        </h2>

        <details className="group mt-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-5 ring-1 ring-white/5 transition hover:border-rose-400/30">
          <summary className="cursor-pointer list-none select-none">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-zinc-300">
                Implementation notes for practitioners
              </p>
              <span className="mt-1 h-6 w-6 rounded-md border border-white/10 text-zinc-400 transition group-open:rotate-180 flex items-center justify-center">
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </span>
            </div>
          </summary>
          <div className="prose prose-invert mt-3 max-w-none text-sm text-zinc-400 [&>p]:leading-6">
            <p>
              Records are fingerprinted (hashed) and chained into a signed
              trail; server events log the context of capture and release.
              Check-ins drive escalation—notify, then release—based on your
              schedule. Recipient links are short-lived and audience-bound, with
              optional extra verification. Authentication favors passkeys for
              phishing-resistance; TOTP remains available as a fallback.
            </p>
            <p className="mt-3">
              For legal/compliance teams, see{" "}
              <Link href="/transparency" className="underline">
                Transparency
              </Link>{" "}
              and{" "}
              <Link href="/security" className="underline">
                Security
              </Link>
              . Organizations can discuss data residency and SSO/SCIM on{" "}
              <Link href="/contact" className="underline">
                contact
              </Link>
              .
            </p>
          </div>
        </details>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-12 max-w-6xl px-4 pb-14 sm:pb-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-zinc-900/70 to-zinc-800/60 p-6 ring-1 ring-white/5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                See it in action
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Explore the demo workflow, then create a plan in minutes.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/demo"
                className="inline-flex items-center rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow-rose-500/25 transition hover:brightness-110"
              >
                Try the demo
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
