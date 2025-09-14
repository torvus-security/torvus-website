// components/feature-grid.tsx
import { FileCheck2, Landmark, Link2, ScrollText, ShieldCheck, Lock } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Rules-based release",
    body: "Define exactly who can access materials, when, and under what conditions.",
    tint: "bg-rose-400/15 text-rose-600",
  },
  {
    icon: Lock, // swapped from Safe -> Lock
    title: "Torvus Vault",
    body: "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
    tint: "bg-sky-400/15 text-sky-600",
  },
  {
    icon: Landmark,
    title: "Tamper-evident proof",
    body: "Every action is hashed and signed so you can prove what happened and when.",
    tint: "bg-emerald-400/15 text-emerald-600",
  },
  {
    icon: ScrollText,
    title: "Passkeys & WebAuthn",
    body: "Phishing-resistant authentication for accounts and recipient access. TOTP supported.",
    tint: "bg-amber-400/20 text-amber-700",
  },
  {
    icon: Link2,
    title: "Fine-grained links",
    body: "Issue single-use or expiring links, watermark views, and revoke at any time.",
    tint: "bg-violet-400/15 text-violet-600",
  },
  {
    icon: FileCheck2,
    title: "Policy guardrails",
    body: "Enforce organization-wide controls and audit everything centrally.",
    tint: "bg-pink-400/15 text-pink-600",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map(({ icon: Icon, title, body, tint }) => (
        <article key={title} className="card card-hover p-6">
          <div className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full ${tint}`}>
            <Icon className="h-4 w-4" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{body}</p>
        </article>
      ))}
    </div>
  );
}
