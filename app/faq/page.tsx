import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck2,
  Timer,
  BellRing,
  LockKeyhole,
  KeyRound,
  Landmark,
  CircleHelp,
  Smartphone,
  Users,
  Wallet,
  LifeBuoy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Torvus Security",
  description:
    "Answers to common questions about Torvus: releases, recipients, security, privacy, pricing, and more.",
};

const Section = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) => (
  <section className="torvus-section mt-section">
    <div className="mb-6 flex items-center gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/20">
        <Icon className="h-3.5 w-3.5 text-rose-600" />
      </span>
      <h2 className="text-lg font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-foreground to-rose-600/80 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
    </div>
    <div className="grid gap-3">
      {children}
    </div>
  </section>
);

const QA = ({
  q,
  children,
  defaultOpen = false,
}: {
  q: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => (
  <details
    className="group rounded-xl border bg-gradient-to-b from-background to-muted/40 p-4 transition hover:border-foreground/20"
    {...(defaultOpen ? { open: true } : {})}
  >
    <summary className="cursor-pointer list-none select-none">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-medium leading-6 tracking-tight">
          {q}
        </h3>
        <span className="mt-1 h-5 w-5 shrink-0 rounded-md border border-border/70 text-muted-foreground transition group-open:rotate-180 group-hover:border-foreground/30 flex items-center justify-center">
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </span>
      </div>
    </summary>
    <div className="prose mt-3 max-w-none text-sm text-muted-foreground [&>p]:leading-6">
      {children}
    </div>
  </details>
);

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <header className="text-center">
        <p className="text-xs font-medium tracking-widest text-rose-600">
          FAQ
        </p>
        <h1 className="mt-3 bg-gradient-to-r from-foreground to-rose-600/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
          Answers to common questions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          Everything you need to know about Torvus releases, recipients,
          security, privacy, pricing, and how it all fits together. If you
          can’t find an answer here,{" "}
          <Link href="/contact" className="underline hover:opacity-80">
            contact us
          </Link>
          .
        </p>
      </header>

      {/* Getting started */}
      <Section title="Getting started" icon={CircleHelp}>
        <QA q="What is Torvus, in one sentence?" defaultOpen>
          <p>
            Torvus helps you create tamper-evident records and set up
            “release plans” that securely deliver critical information to
            trusted recipients, automatically or on your signal.
          </p>
        </QA>

        <QA q="Who is Torvus for?">
          <p>
            Individuals, journalists, founders, field teams and
            organizations that need trustworthy proof, time-locked delivery,
            or a safety net under duress. See{" "}
            <Link href="/use-cases" className="underline">
              use cases
            </Link>{" "}
            for examples.
          </p>
        </QA>

        <QA q="How do I try Torvus?">
          <p>
            Create an account and explore the demo workflow. You can set up
            a test release plan, add recipients, and simulate a check-in
            schedule. See{" "}
            <Link href="/how-it-works" className="underline">
              How it works
            </Link>{" "}
            for a quick walkthrough.
          </p>
        </QA>

        <QA q="Do recipients need a Torvus account?">
          <p>
            No. Recipients can access the{" "}
            <Link href="/recipient-portal" className="underline">
              Recipient Portal
            </Link>{" "}
            via a secure link. You control what they can see and when.
          </p>
        </QA>
      </Section>

      {/* Releases & recipients */}
      <Section title="Releases & recipients" icon={FileCheck2}>
        <QA q="What is a release plan?">
          <p>
            A release plan defines <em>what</em> to deliver, <em>who</em>{" "}
            receives it, and <em>when</em> delivery occurs (e.g., after a
            timer, on missed check-ins, or manually). You can attach notes,
            files, and instructions; Torvus packages this into a
            tamper-evident release.
          </p>
        </QA>

        <QA q="How do check-ins work?">
          <p>
            You set a schedule (e.g., every 12 hours). As long as you
            check-in on time, the plan stays armed but inactive. If you miss
            a check-in, Torvus follows your configured escalation: notify
            you, notify recipients, and/or release.
          </p>
        </QA>

        <QA q="Can I cancel or pause a release?">
          <p>
            Yes. You can disarm a plan anytime before the final release
            event. You can also snooze during travel or out-of-coverage
            periods.
          </p>
        </QA>

        <QA q="Who counts as a recipient?">
          <p>
            Anyone you designate to receive a release—an advisor, lawyer,
            teammate, or family member. Recipients see only what you permit
            at the moment the plan releases.
          </p>
        </QA>

        <QA q="What happens if a recipient loses the link?">
          <p>
            Links are short-lived and audience-bound. You can revoke and
            re-issue a fresh link from the dashboard. For sensitive plans,
            enable additional verification in{" "}
            <Link href="/security" className="underline">
              Security
            </Link>
            .
          </p>
        </QA>
      </Section>

      {/* Security & privacy */}
      <Section title="Security & privacy" icon={ShieldCheck}>
        <QA q="How is evidence tamper-evident?">
          <p>
            Torvus calculates cryptographic fingerprints (hashes) for your
            records and binds them into a signed audit trail. Any change to
            content alters its fingerprint, making tampering detectable.
            See{" "}
            <Link href="/transparency" className="underline">
              Transparency
            </Link>{" "}
            for implementation details and proofs we publish.
          </p>
        </QA>

        <QA q="Do you support passkeys (WebAuthn)?">
          <p>
            Yes. Torvus supports passkey sign-in on modern devices and
            browsers for strong, phishing-resistant authentication. A TOTP
            fallback can be enabled where needed. Try the{" "}
            <Link href="/passkeys-demo" className="underline">
              passkeys demo
            </Link>
            .
          </p>
        </QA>

        <QA q="What is Duress Mode?">
          <p>
            Duress Mode lets you discreetly signal an emergency. Depending
            on your configuration, Torvus can alert trusted contacts and/or
            trigger a pre-selected release plan. You control what happens,
            and you can turn this feature off entirely.
          </p>
        </QA>

        <QA q="What data do you collect?">
          <p>
            We collect only what’s needed to run Torvus and keep your
            account secure. We don’t sell personal data. Read our{" "}
            <Link href="/legal/privacy" className="underline">
              Privacy Notice
            </Link>{" "}
            and{" "}
            <Link href="/transparency" className="underline">
              Transparency
            </Link>{" "}
            docs for specifics.
          </p>
        </QA>

        <QA q="Where is my data stored?">
          <p>
            Primary data is hosted in reputable cloud regions with
            redundancy. For organizations with data-residency needs, talk to{" "}
            <Link href="/contact" className="underline">
              sales
            </Link>{" "}
            about dedicated deployments.
          </p>
        </QA>
      </Section>

      {/* Accounts & billing */}
      <Section title="Accounts & billing" icon={Wallet}>
        <QA q="Is there a free plan?">
          <p>
            Yes—great for personal use and evaluation. See{" "}
            <Link href="/pricing" className="underline">
              Pricing
            </Link>{" "}
            for limits and what’s included in Team and Org.
          </p>
        </QA>

        <QA q="What’s the difference between Team and Org?">
          <p>
            <strong>Team</strong> adds collaboration features and multiple
            active release plans. <strong>Org</strong> is for organizations
            needing advanced controls like SAML SSO/SCIM, custom retention,
            and higher support SLAs.
          </p>
        </QA>

        <QA q="Can I cancel anytime?">
          <p>
            Absolutely. Plans are month-to-month (or annual with savings).
            Cancel or change tiers from the billing settings.
          </p>
        </QA>

        <QA q="Do you offer invoices and purchase orders?">
          <p>
            For Org plans, yes. Contact{" "}
            <Link href="/contact" className="underline">
              sales
            </Link>{" "}
            and we’ll set up invoicing terms that work for your team.
          </p>
        </QA>
      </Section>

      {/* Compliance & legal */}
      <Section title="Compliance & legal" icon={Landmark}>
        <QA q="Do you have independent audits?">
          <p>
            We publish security notes and a changelog on{" "}
            <Link href="/transparency" className="underline">
              Transparency
            </Link>
            . For formal audit needs, reach out to{" "}
            <Link href="/contact" className="underline">
              us
            </Link>{" "}
            and we’ll discuss attestations and roadmap.
          </p>
        </QA>

        <QA q="How do you handle law-enforcement requests?">
          <p>
            We review each request for legal validity and scope. Our goal is
            to protect user privacy while complying with applicable laws.
            See{" "}
            <Link href="/transparency" className="underline">
              Transparency
            </Link>{" "}
            for aggregate reporting.
          </p>
        </QA>

        <QA q="Do you have a bug bounty or disclosure program?">
          <p>
            Yes—security researchers are welcome. Please see{" "}
            <Link href="/security" className="underline">
              Security
            </Link>{" "}
            for responsible disclosure guidelines.
          </p>
        </QA>
      </Section>

      {/* Devices & access */}
      <Section title="Devices & access" icon={Smartphone}>
        <QA q="What if I lose my device?">
          <p>
            You can sign in on a new device with a registered passkey (if it
            syncs via your platform provider) or with your fallback method.
            We recommend adding at least two passkeys and storing recovery
            options securely.
          </p>
        </QA>

        <QA q="Does Torvus work offline?">
          <p>
            You can draft notes and plans offline; actions that require the
            server (like arming or releasing) complete once you regain
            connectivity.
          </p>
        </QA>

        <QA q="Can I add my lawyer or advisor without a full account?">
          <p>
            Yes—add them as a recipient. They’ll get a secure, limited
            portal view when a plan releases. For ongoing collaboration,
            invite them to a Team workspace.
          </p>
        </QA>
      </Section>

      {/* Notifications */}
      <Section title="Notifications & alerts" icon={BellRing}>
        <QA q="What notifications can I enable?">
          <p>
            You control alerts for upcoming check-ins, missed check-ins,
            escrow timers, and releases. Recipients can also receive
            notifications at the moment a plan releases.
          </p>
        </QA>

        <QA q="Can I set quiet hours?">
          <p>
            Yes—configure quiet hours and fallback channels so critical
            alerts still get through when necessary.
          </p>
        </QA>
      </Section>

      {/* Authentication */}
      <Section title="Authentication" icon={KeyRound}>
        <QA q="Do you support SSO?">
          <p>
            Org plans support SAML SSO and SCIM provisioning.{" "}
            <Link href="/contact" className="underline">
              Talk to sales
            </Link>{" "}
            to enable it for your domain.
          </p>
        </QA>

        <QA q="Can I enforce passkeys for my team?">
          <p>
            Yes—Org admins can require passkeys and configure additional
            controls for high-risk roles.
          </p>
        </QA>
      </Section>

      {/* Uptime & support */}
      <Section title="Uptime & support" icon={LifeBuoy}>
        <QA q="What’s your uptime target?">
          <p>
            We engineer for high availability and publish incident notes on{" "}
            <Link href="/transparency" className="underline">
              Transparency
            </Link>
            . Org plans include enhanced support SLAs.
          </p>
        </QA>

        <QA q="How do I get help?">
          <p>
            Send us a message via{" "}
            <Link href="/contact" className="underline">
              contact
            </Link>
            . For urgent account issues, include your workspace email and
            we’ll prioritize it.
          </p>
        </QA>
      </Section>

      {/* CTA */}
      <div className="mt-section rounded-2xl border bg-gradient-to-b from-background to-muted/40 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Still have questions?
        </p>
        <div className="mt-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
