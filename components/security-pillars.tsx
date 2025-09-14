// components/security-pillars.tsx
import { ShieldCheck, Fingerprint, FileCheck2 } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Defense-in-depth",
    body:
      "Isolation by design, scoped secrets, signed releases, and default-deny access.",
  },
  {
    icon: Fingerprint,
    title: "Modern auth",
    body:
      "Passkeys (WebAuthn) and TOTP options for strong, phishing-resistant user login.",
  },
  {
    icon: FileCheck2,
    title: "Provenance & audit",
    body:
      "Cryptographic logs so you can demonstrate integrity and verify timelines.",
  },
];

export default function SecurityPillars() {
  return (
    <div className="panel-with-frame p-2">
      <div className="panel p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card">
              <div className="icon-pill mb-3">
                <Icon className="h-4 w-4" aria-hidden />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
