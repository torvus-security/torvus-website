import Link from "next/link";

import { DeviceMock } from "@/components/device-mock";
import { IconChip } from "@/components/icon-chip";
import { PrimarySubtleLink, buttonClasses } from "@/components/ui/button";

const highlights = [
  {
    icon: "key" as const,
    tone: "lapis" as const,
    copy: "Asset inventory with intent capture for every vault item",
  },
  {
    icon: "users" as const,
    tone: "lagoon" as const,
    copy: "Executor identities verified with policy-backed approvals",
  },
  {
    icon: "timer" as const,
    tone: "cranberry" as const,
    copy: "Death verification predicates and grace periods you control",
  },
  {
    icon: "shield" as const,
    tone: "lapis" as const,
    copy: "Duress pause and audit provenance baked into every release",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lapis/35 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
      <div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-pastel-cranberry/60 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-10 h-80 w-80 rounded-full bg-pastel-lapis/60 blur-[180px]"
        aria-hidden="true"
      />

      <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center">
        <div className="space-y-7 rounded-2xl border border-white/60 bg-white/90 p-8 shadow-[0_22px_60px_rgba(11,18,32,0.12)] backdrop-blur-sm">
          <p className="text-[0.9rem] font-semibold uppercase tracking-[0.26em] text-lapis">
            Digital Legacy Kit
          </p>
          <h1 className="text-display font-semibold text-storm">
            Preserve your intent and release it only when it truly matters.
          </h1>
          <p className="max-w-[60ch] text-lead text-thunder">
            Torvus Digital Legacy seals assets, instructions, and crypto secrets behind
            policy-orchestrated releases so executors only receive what you intend—after
            verification and with provenance.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimarySubtleLink href="/waitlist" className="w-full sm:w-auto">
              Join the waitlist
            </PrimarySubtleLink>
            <Link
              href="/digital-legacy"
              className={buttonClasses({
                variant: "tertiary",
                size: "sm",
                className: "border-lapis/45 text-lapis",
              })}
            >
              Explore Digital Legacy
            </Link>
          </div>
          <p className="max-w-[60ch] text-[0.94rem] text-thunder">
            Zero-knowledge encryption, duress controls, and executors with verified
            identities. No plaintext ever leaves your vault without the conditions you
            set.
          </p>
          <div className="mt-6 grid gap-2 text-[0.92rem]">
            {highlights.map((item) => (
              <IconChip key={item.copy} tone={item.tone} icon={item.icon}>
                {item.copy}
              </IconChip>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <DeviceMock />
          <div className="w-full max-w-[340px] space-y-4 rounded-2xl border border-storm/10 bg-white/95 p-6 shadow-soft-1">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-lapis">
              Estate orchestrator
            </p>
            <h2 className="text-h4 font-semibold text-storm">
              Executors receive policy-backed checklists with provenance.
            </h2>
            <ul className="space-y-2 text-[0.95rem] text-thunder">
              <li className="flex gap-3">
                <span
                  className="mt-[0.4rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-lapis"
                  aria-hidden="true"
                />
                <span>
                  Per-recipient bundles with redaction controls before anything unlocks.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-[0.4rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-lagoon"
                  aria-hidden="true"
                />
                <span>
                  Verified executors complete step-by-step check-ins monitored by Torvus.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-[0.4rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-cranberry"
                  aria-hidden="true"
                />
                <span>All actions produce tamper-evident provenance certificates.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
