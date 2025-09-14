import type { Metadata } from "next";
import { Globe, FileText, BadgeCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Transparency — Torvus Security",
  description:
    "Security posture, uptime, audits, subprocessors, and recent changes to Torvus.",
};

const SUBPROCESSORS = [
  { name: "Vercel", purpose: "Hosting & edge runtime", region: "US/EU" },
  { name: "Cloudflare", purpose: "DDoS protection & CDN", region: "Global" },
  { name: "AWS KMS", purpose: "Key management", region: "Customer region" },
];

const CHANGELOG = [
  {
    date: "2025-09-10",
    note: "Added watermark-by-recipient and single-use link option.",
  },
  { date: "2025-08-27", note: "Passkeys (WebAuthn) GA for all plans." },
  { date: "2025-08-03", note: "Tamper-evident export improvements." },
];

export default function TransparencyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      <header className="text-center">
        <p className="text-sm text-muted-foreground tracking-wide">
          Transparency
        </p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Built in the{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            open
          </span>
          .
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our security posture, availability, and how we run the service.
        </p>
      </header>

      {/* Posture */}
      <section className="rounded-2xl border bg-background/70 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <BadgeCheck className="h-5 w-5 text-emerald-500" />
          <h2 className="text-xl font-semibold">Security posture</h2>
        </div>
        <ul className="mt-4 grid gap-3 text-sm md:grid-cols-2">
          <li>• TLS 1.3 in transit; AES-256-GCM at rest</li>
          <li>• Keys in KMS with rotation</li>
          <li>• Default-deny access; scoped secrets</li>
          <li>• Immutable audit logs & signed exports</li>
        </ul>
      </section>

      {/* Uptime */}
      <section className="rounded-2xl border bg-background/70 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-sky-500" />
          <h2 className="text-xl font-semibold">Availability</h2>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          30-day uptime: <span className="font-medium text-foreground">99.98%</span>.
          Maintenance windows are announced in advance.
        </p>
      </section>

      {/* Sub-processors */}
      <section className="rounded-2xl border bg-background/70 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <Globe className="h-5 w-5 text-indigo-500" />
          <h2 className="text-xl font-semibold">Sub-processors</h2>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Purpose</th>
                <th className="py-2 pr-4">Region</th>
              </tr>
            </thead>
            <tbody>
              {SUBPROCESSORS.map((s) => (
                <tr key={s.name} className="border-t">
                  <td className="py-2 pr-4">{s.name}</td>
                  <td className="py-2 pr-4">{s.purpose}</td>
                  <td className="py-2 pr-4">{s.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Enterprise customers can request a DPA and receive change
          notifications.
        </p>
      </section>

      {/* Changelog */}
      <section className="rounded-2xl border bg-background/70 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-rose-500" />
          <h2 className="text-xl font-semibold">Recent changes</h2>
        </div>
        <ul className="mt-4 space-y-3 text-sm">
          {CHANGELOG.map((c) => (
            <li key={c.date} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60" />
              <div>
                <div className="font-medium">{c.date}</div>
                <div className="text-muted-foreground">{c.note}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
