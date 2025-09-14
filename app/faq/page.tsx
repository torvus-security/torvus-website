import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Torvus Security",
  description:
    "Answers to common questions about vaults, releases, passkeys, exports and more.",
};

const QAS: { q: string; a: string }[] = [
  {
    q: "How is my data encrypted?",
    a: "Data is encrypted in transit with TLS 1.3 and at rest using AES-256-GCM. Keys are held in a KMS with rotation. We separate control and data planes to limit blast radius.",
  },
  {
    q: "What if a recipient shares a link?",
    a: "Links can be single-use or expiring, and views can be watermarked. You can revoke access at any time and export a tamper-evident log of all activity.",
  },
  {
    q: "Do you support passkeys?",
    a: "Yes. We support WebAuthn passkeys for phishing-resistant sign-in, with optional TOTP fallback.",
  },
  {
    q: "Can I prove what happened later?",
    a: "Every action is hashed and signed. Export a signed timeline for audits or disputes.",
  },
  {
    q: "Where is my data stored?",
    a: "We host in regions with strong privacy protections and offer data residency options on Enterprise.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <header className="text-center mb-12">
        <p className="text-sm text-muted-foreground tracking-wide">FAQ</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Questions,{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            answered
          </span>
          .
        </h1>
      </header>

      <div className="space-y-4">
        {QAS.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border bg-background/70 p-5 transition hover:shadow-lg"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-100 to-indigo-50 text-indigo-600 ring-1 ring-indigo-200/60">
                  <HelpCircle className="h-5 w-5" />
                </span>
                <h3 className="font-medium">{item.q}</h3>
              </div>
              <span className="text-muted-foreground group-open:hidden">+</span>
              <span className="text-muted-foreground hidden group-open:inline">
                –
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
