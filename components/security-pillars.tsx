// components/security-pillars.tsx
import { Shield, Fingerprint, ScrollText } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Defense-in-depth",
    desc:
      "Isolation by design, scoped secrets, signed releases, and default-deny access.",
    tint: "from-rose-400/20 to-rose-500/10 text-rose-600",
  },
  {
    icon: Fingerprint,
    title: "Modern auth",
    desc:
      "Passkeys (WebAuthn) and TOTP options for strong, phishing-resistant user login.",
    tint: "from-sky-400/20 to-sky-500/10 text-sky-600",
  },
  {
    icon: ScrollText,
    title: "Provenance & audit",
    desc:
      "Cryptographic logs so you can demonstrate integrity and verify timelines.",
    tint: "from-emerald-400/20 to-emerald-500/10 text-emerald-600",
  },
];

export default function SecurityPillars() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6">
      {pillars.map(({ icon: Icon, title, desc, tint }) => (
        <div
          key={title}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition"
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
