// components/security-pills.tsx
import { ShieldCheck, KeyRound, ScrollText } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Defense-in-depth",
    body:
      "Isolation by design, scoped secrets, signed releases, and default-deny access.",
  },
  {
    icon: KeyRound,
    title: "Modern auth",
    body: "Passkeys (WebAuthn) and TOTP for phishing-resistant login.",
  },
  {
    icon: ScrollText,
    title: "Provenance & audit",
    body:
      "Cryptographic logs so you can demonstrate integrity and verify timelines.",
  },
];

export default function SecurityPills() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} className="card">
          <div className="icon-pill">
            <Icon size={18} strokeWidth={2} />
          </div>
          <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
        </div>
      ))}
    </div>
  );
}
