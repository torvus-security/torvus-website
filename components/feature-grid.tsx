// components/feature-grid.tsx
import {
  ShieldCheck,
  FileCheck2,
  Landmark,
  Link2,
  ScrollText,
  LockKeyhole,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Rules-based release",
    desc:
      "Define exactly who can access materials, when, and under what conditions.",
    tint: "from-rose-400/20 to-rose-500/10 text-rose-600",
  },
  {
    icon: FileCheck2,
    title: "Torvus Vault",
    desc:
      "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
    tint: "from-sky-400/20 to-sky-500/10 text-sky-600",
  },
  {
    icon: Landmark,
    title: "Tamper-evident proof",
    desc:
      "Every action is hashed and signed so you can prove what happened and when.",
    tint: "from-emerald-400/20 to-emerald-500/10 text-emerald-600",
  },
  {
    icon: LockKeyhole,
    title: "Passkeys & WebAuthn",
    desc:
      "Phishing-resistant authentication for accounts and recipient access. TOTP supported.",
    tint: "from-amber-400/20 to-amber-500/10 text-amber-600",
  },
  {
    icon: Link2,
    title: "Fine-grained links",
    desc:
      "Issue single-use or expiring links, watermark views, and revoke at any time.",
    tint: "from-violet-400/20 to-violet-500/10 text-violet-600",
  },
  {
    icon: ScrollText,
    title: "Policy guardrails",
    desc:
      "Enforce organization-wide controls and audit everything centrally.",
    tint: "from-pink-400/20 to-pink-500/10 text-pink-600",
  },
];

export default function FeatureGrid() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
      {features.map(({ icon: Icon, title, desc, tint }) => (
        <div
          key={title}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm ring-1 ring-black/0 hover:shadow-md transition"
        >
          <div
            className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b ${tint}`}
          >
            <Icon className="h-4 w-4 opacity-80" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        </div>
      ))}
    </div>
  );
}
