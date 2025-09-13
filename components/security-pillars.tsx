// components/security-pillars.tsx
import { ShieldCheck, KeyRound, FileCheck2 } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Defense-in-depth",
    desc:
      "Isolation by design, scoped secrets, signed releases, and default-deny access.",
  },
  {
    icon: KeyRound,
    title: "Modern auth",
    desc: "Passkeys (WebAuthn) and TOTP options for strong, phishing-resistant login.",
  },
  {
    icon: FileCheck2,
    title: "Provenance & audit",
    desc:
      "Cryptographic logs so you can demonstrate integrity and verify timelines.",
  },
];

export function SecurityPillars() {
  return (
    <div className="rounded-3xl border border-border/70 bg-background p-5 md:p-6 shadow-[0_1px_2px_rgba(0,0,0,.06)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4">
            <span className="inline-grid size-10 shrink-0 place-items-center rounded-xl bg-rose-50 border border-rose-200/60 text-rose-600">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
