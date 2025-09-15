// components/security-pillars.tsx
"use client";

import { useState } from "react";
import FeatureModal from "./feature-modal";
import { Shield, Fingerprint, FileSearch2 } from "lucide-react";

type Pillar = {
  key: string;
  title: string;
  copy: string;
  Icon: any;
  tint: string;
};

const PILLARS: Pillar[] = [
  {
    key: "defense",
    title: "Defense-in-depth",
    copy:
      "Isolation by design, scoped secrets, signed releases, and default-deny access so one failure doesn’t cascade.",
    Icon: Shield,
    tint: "bg-rose-50 text-rose-600 ring-rose-200",
  },
  {
    key: "auth",
    title: "Modern auth",
    copy:
      "Passkeys (WebAuthn) and TOTP options for strong, phishing-resistant user login and recipient access.",
    Icon: Fingerprint,
    tint: "bg-sky-50 text-sky-600 ring-sky-200",
  },
  {
    key: "audit",
    title: "Provenance & audit",
    copy:
      "Cryptographic logs so you can demonstrate integrity and verify timelines at any point in the future.",
    Icon: FileSearch2,
    tint: "bg-emerald-50 text-emerald-600 ring-emerald-200",
  },
];

export default function SecurityPillars() {
  const [open, setOpen] = useState<Pillar | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {PILLARS.map((p) => (
          <button
            key={p.key}
            onClick={() => setOpen(p)}
            className="group rounded-2xl border border-border/70 bg-card p-5 text-left shadow-sm
                       transition hover:-translate-y-0.5 hover:shadow-lg focus:shadow-lg focus:-translate-y-0.5"
          >
            <div className="flex items-start gap-3">
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${p.tint}`}
              >
                <p.Icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold leading-6">{p.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{p.copy}</p>
            <div className="mt-4 text-xs font-medium text-foreground/70 opacity-0 transition group-hover:opacity-100">
              Learn how →
            </div>
          </button>
        ))}
      </div>

      <FeatureModal
        open={!!open}
        onClose={() => setOpen(null)}
        title={open?.title ?? ""}
        icon={
          open ? (
            <span
              className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${open.tint}`}
            >
              <open.Icon className="h-5 w-5" />
            </span>
          ) : null
        }
      >
        <p className="mb-3">{open?.copy}</p>
        <p>
          These controls apply end-to-end: from account sign-in to release rules and tamper-evident export.
          Organizations can enforce posture centrally while individuals get a simple, fast experience.
        </p>
      </FeatureModal>
    </>
  );
}
