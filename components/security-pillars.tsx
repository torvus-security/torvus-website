// components/security-pillars.tsx
import { Layers3, KeyRound, FileSearch2 } from "lucide-react";

const pillars = [
  {
    title: "Defense-in-depth",
    body:
      "Isolation by design, scoped secrets, signed releases, and default-deny access.",
    Icon: Layers3,
    accent: { bg: "bg-rose-50", text: "text-rose-600", ring: "ring-rose-200/70" },
  },
  {
    title: "Modern auth",
    body:
      "Passkeys (WebAuthn) and TOTP options for strong, phishing-resistant user login.",
    Icon: KeyRound,
    accent: { bg: "bg-sky-50", text: "text-sky-600", ring: "ring-sky-200/70" },
  },
  {
    title: "Provenance & audit",
    body:
      "Cryptographic logs so you can demonstrate integrity and verify timelines.",
    Icon: FileSearch2,
    accent: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      ring: "ring-violet-200/70",
    },
  },
];

export default function SecurityPillars() {
  return (
    <section
      aria-labelledby="security-heading"
      className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-24 lg:px-8"
    >
      <h2
        id="security-heading"
        className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[2.75rem]"
      >
        <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Built for security from day one
        </span>
      </h2>

      <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-3">
        {pillars.map(({ title, body, Icon, accent }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_-12px_rgba(15,23,42,.2)] ring-1 ring-black/5"
          >
            <div
              className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ${accent.bg} ${accent.text} ring-1 ${accent.ring}`}
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
