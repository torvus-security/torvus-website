// components/feature-grid.tsx
"use client";

import {
  ShieldCheck,
  FileCheck2,
  Link2,
  Landmark,
  Lock,
  Fingerprint,
} from "lucide-react";
import { useState } from "react";
import FeatureModal from "@/components/feature-modal";

type Feature = {
  key: string;
  title: string;
  body: string;
  Icon: any;
  tint: string;
};

const FEATURES: Feature[] = [
  {
    key: "rules",
    title: "Rules-based release",
    body:
      "Define exactly who can access materials, when, and under what conditions. Set time windows, add watermarks, restrict forwarding, and revoke access instantly if circumstances change.",
    Icon: ShieldCheck,
    tint: "bg-rose-50 text-rose-600 ring-rose-200",
  },
  {
    key: "vault",
    title: "Torvus Vault",
    body:
      "Store sensitive files in an encrypted vault designed for zero-trust workflows. Keys are scoped and rotated; data is encrypted in transit and at rest.",
    Icon: Lock,
    tint: "bg-sky-50 text-sky-600 ring-sky-200",
  },
  {
    key: "proof",
    title: "Tamper-evident proof",
    body:
      "Every action is hashed, signed, and immortalized in an immutable audit log, so you can prove what happened and when—useful for audits, disputes, or investigations.",
    Icon: FileCheck2,
    tint: "bg-emerald-50 text-emerald-600 ring-emerald-200",
  },
  {
    key: "passkeys",
    title: "Passkeys & WebAuthn",
    body:
      "Phishing-resistant sign-in for accounts and recipient access. Supports platform authenticators and hardware keys plus TOTP as a fallback.",
    Icon: Fingerprint,
    tint: "bg-amber-50 text-amber-600 ring-amber-200",
  },
  {
    key: "links",
    title: "Fine-grained links",
    body:
      "Issue single-use or expiring links, apply watermark views, rate-limit downloads, and revoke at any time without sharing raw files.",
    Icon: Link2,
    tint: "bg-violet-50 text-violet-600 ring-violet-200",
  },
  {
    key: "guardrails",
    title: "Policy guardrails",
    body:
      "Enforce organization-wide controls, DLP-style restrictions, and retention requirements centrally. Delegate with scoped roles.",
    Icon: Landmark,
    tint: "bg-pink-50 text-pink-600 ring-pink-200",
  },
];

export default function FeatureGrid() {
  const [active, setActive] = useState<Feature | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ key, title, body, Icon, tint }) => (
          <button
            key={key}
            onClick={() => setActive({ key, title, body, Icon, tint })}
            className="group rounded-2xl border border-border/70 bg-card text-left shadow-sm transition
                       hover:shadow-lg focus:shadow-lg focus-visible:outline-none
                       hover:-translate-y-0.5 focus:-translate-y-0.5
                       ring-1 ring-transparent hover:ring-black/5
                       p-5 md:p-6"
          >
            <div className="flex items-start gap-3">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${tint}`}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold leading-6">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
            <div className="mt-4 text-xs font-medium text-foreground/70 opacity-0 transition group-hover:opacity-100">
              Learn more →
            </div>
          </button>
        ))}
      </div>

      <FeatureModal
        open={!!active}
        title={active?.title ?? ""}
        icon={
          active ? (
            <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${active.tint}`}>
              <active.Icon className="h-5 w-5" />
            </span>
          ) : null
        }
        onClose={() => setActive(null)}
      >
        <p className="mb-3">{active?.body}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Designed for privacy first, zero-trust access.</li>
          <li>Granular audit visibility for compliance & accountability.</li>
          <li>Fast to roll out; no special apps required for recipients.</li>
        </ul>
      </FeatureModal>
    </>
  );
}
