// components/security-pillars.tsx
import { Shield, Fingerprint, ScrollText } from "lucide-react";

const PILLARS = [
  {
    title: "Defense-in-depth",
    body:
      "Isolation by design, scoped secrets, signed releases, and default-deny access.",
    icon: Shield,
    tint: "bg-rose-50 text-rose-600 ring-rose-100",
  },
  {
    title: "Modern auth",
    body:
      "Passkeys (WebAuthn) and TOTP options for strong, phishing-resistant user login.",
    icon: Fingerprint,
    tint: "bg-sky-50 text-sky-600 ring-sky-100",
  },
  {
    title: "Provenance & audit",
    body:
      "Cryptographic logs so you can demonstrate integrity and verify timelines.",
    icon: ScrollText,
    tint: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
];

export default function SecurityPillars() {
  return (
    <section className="section space-y-8 md:space-y-10">
      {/* Single heading with subtle gradient */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Built for security from day one
          </span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {PILLARS.map(({ title, body, icon: Icon, tint }) => (
          <div
            key={title}
            className="rounded-2xl border border-border/70 bg-card/60 shadow-sm p-6"
          >
            <div
              className={`inline-flex size-10 items-center justify-center rounded-full ring-1 ${tint}`}
              aria-hidden
            >
              <Icon className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
