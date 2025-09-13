// components/feature-grid.tsx
import {
  ShieldCheck,
  Timer,
  FileClock,
  KeySquare,
  Vault,
  Link as LinkIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const FEATURES: Feature[] = [
  {
    title: "Rules-based release",
    description:
      "Define exactly who can access materials, when, and under what conditions.",
    icon: Timer,
  },
  {
    title: "Torvus Vault",
    description:
      "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
    icon: Vault,
  },
  {
    title: "Tamper-evident proof",
    description:
      "Every action is hashed and signed so you can prove what happened and when.",
    icon: FileClock,
  },
  {
    title: "Passkeys & WebAuthn",
    description:
      "Phishing-resistant authentication for accounts and recipient access.",
    icon: KeySquare,
  },
  {
    title: "Fine-grained links",
    description:
      "Issue single-use or expiring links, watermark views, and revoke at any time.",
    icon: LinkIcon,
  },
  {
    title: "Policy guardrails",
    description:
      "Enforce organization-wide controls and audit everything centrally.",
    icon: ShieldCheck,
  },
];

export default function FeatureGrid() {
  return (
    <section aria-labelledby="features-heading" className="mt-10 md:mt-12 lg:mt-14">
      <h2
        id="features-heading"
        className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        What you get with Torvus
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur dark:border-white/10 dark:bg-neutral-900/60 dark:ring-white/10"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 ring-1 ring-rose-500/30">
                <Icon className="h-5 w-5 text-rose-600" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
