// components/feature-grid.tsx
import {
  ShieldCheck,
  Vault,
  Stamp,
  Landmark,
  Link2,
  FileCheck2,
} from "lucide-react";

type Item = {
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
  // pastel tint for the circular icon badge
  tint: string;
};

const ITEMS: Item[] = [
  {
    title: "Rules-based release",
    body:
      "Define exactly who can access materials, when, and under what conditions.",
    icon: ShieldCheck,
    tint: "bg-rose-50 text-rose-500 ring-rose-100",
  },
  {
    title: "Torvus Vault",
    body:
      "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
    icon: Vault,
    tint: "bg-sky-50 text-sky-500 ring-sky-100",
  },
  {
    title: "Tamper-evident proof",
    body:
      "Every action is hashed and signed so you can prove what happened and when.",
    icon: Stamp,
    tint: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
  {
    title: "Passkeys & WebAuthn",
    body:
      "Phishing-resistant authentication for accounts and recipient access. TOTP supported.",
    icon: Landmark,
    tint: "bg-amber-50 text-amber-600 ring-amber-100",
  },
  {
    title: "Fine-grained links",
    body:
      "Issue single-use or expiring links, watermark views, and revoke at any time.",
    icon: Link2,
    tint: "bg-violet-50 text-violet-600 ring-violet-100",
  },
  {
    title: "Policy guardrails",
    body:
      "Enforce organization-wide controls and audit everything centrally.",
    icon: FileCheck2,
    tint: "bg-pink-50 text-pink-500 ring-pink-100",
  },
];

export default function FeatureGrid() {
  return (
    <section className="section space-y-8 md:space-y-10">
      {/* Big, prominent heading with subtle gradient on “Torvus” */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
          What you get with{" "}
          <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
            Torvus
          </span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          A secure way to prepare, protect, share, and verify sensitive
          materials.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ title, body, icon: Icon, tint }) => (
          <div
            key={title}
            className="rounded-2xl border border-border/70 bg-card/60 shadow-sm p-6 ring-1 ring-black/0 transition hover:shadow-md"
          >
            <div
              className={`inline-flex size-10 items-center justify-center rounded-full ring-1 ${tint}`}
            >
              <Icon className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
