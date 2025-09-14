// components/security-pillars.tsx
import { Shield, Fingerprint, FileText } from "lucide-react";

const PILLARS = [
  {
    icon: Shield,
    tint: "bg-rose-400/15 text-rose-600",
    title: "Defense-in-depth",
    body: "Isolation by design, scoped secrets, signed releases, and default-deny access.",
  },
  {
    icon: Fingerprint,
    tint: "bg-sky-400/15 text-sky-600",
    title: "Modern auth",
    body: "Passkeys (WebAuthn) and TOTP options for strong, phishing-resistant user login.",
  },
  {
    icon: FileText,
    tint: "bg-emerald-400/15 text-emerald-600",
    title: "Provenance & audit",
    body: "Cryptographic logs so you can demonstrate integrity and verify timelines.",
  },
];

export default function SecurityPillars() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PILLARS.map(({ icon: Icon, tint, title, body }) => (
        <div key={title} className="card card-hover p-6">
          <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full ${tint}`}>
            <Icon className="h-4 w-4" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{body}</p>
        </div>
      ))}
    </div>
  );
}
