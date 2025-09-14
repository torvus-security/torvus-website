// components/security-pillars.tsx
"use client";

import { ShieldCheck, Fingerprint, FileCheck2 } from "lucide-react";

const PILLARS = [
  {
    title: "Defense-in-depth",
    desc:
      "Isolation by design, scoped secrets, signed releases, and default-deny access.",
    icon: ShieldCheck,
    badgeClass: "bg-rose-50 text-rose-500 ring-1 ring-rose-200",
  },
  {
    title: "Modern auth",
    desc:
      "Passkeys (WebAuthn) and TOTP options for strong, phishing-resistant user login.",
    icon: Fingerprint,
    badgeClass: "bg-sky-50 text-sky-500 ring-1 ring-sky-200",
  },
  {
    title: "Provenance & audit",
    desc:
      "Cryptographic logs so you can demonstrate integrity and verify timelines.",
    icon: FileCheck2,
    badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200",
  },
];

export default function SecurityPillars() {
  // ⬅️ No section heading here (the page supplies it)
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PILLARS.map(({ title, desc, icon: Icon, badgeClass }) => (
        <div key={title} className="card p-6">
          <div className="flex items-start gap-4">
            <span
              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${badgeClass}`}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
