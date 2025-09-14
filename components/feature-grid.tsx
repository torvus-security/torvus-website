// components/feature-grid.tsx
"use client";

import {
  ShieldCheck,
  FileCheck2,
  Landmark,
  Link2,
  Vault,
  ScrollText,
} from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badgeClass: string;
};

const FEATURES: Feature[] = [
  {
    title: "Rules-based release",
    desc:
      "Define exactly who can access materials, when, and under what conditions.",
    icon: ShieldCheck,
    badgeClass: "bg-rose-50 text-rose-500 ring-1 ring-rose-200",
  },
  {
    title: "Torvus Vault",
    desc:
      "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
    icon: Vault,
    badgeClass: "bg-sky-50 text-sky-500 ring-1 ring-sky-200",
  },
  {
    title: "Tamper-evident proof",
    desc:
      "Every action is hashed and signed so you can prove what happened and when.",
    icon: Landmark,
    badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200",
  },
  {
    title: "Passkeys & WebAuthn",
    desc:
      "Phishing-resistant authentication for accounts and recipient access. TOTP supported.",
    icon: ScrollText,
    badgeClass: "bg-amber-50 text-amber-500 ring-1 ring-amber-200",
  },
  {
    title: "Fine-grained links",
    desc:
      "Issue single-use or expiring links, watermark views, and revoke at any time.",
    icon: Link2,
    badgeClass: "bg-violet-50 text-violet-500 ring-1 ring-violet-200",
  },
  {
    title: "Policy guardrails",
    desc:
      "Enforce organization-wide controls and audit everything centrally.",
    icon: FileCheck2,
    badgeClass: "bg-pink-50 text-pink-500 ring-1 ring-pink-200",
  },
];

export default function FeatureGrid() {
  // ⬅️ No section heading here (the page supplies it)
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {FEATURES.map(({ title, desc, icon: Icon, badgeClass }) => (
        <div
          key={title}
          className="card p-6 hover:shadow-xl transition-shadow"
        >
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
