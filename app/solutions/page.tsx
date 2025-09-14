import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Newspaper,
  Briefcase,
  KeyRound,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Torvus Security",
  description:
    "See how Torvus helps individuals, journalists, and organizations safeguard materials and prove integrity.",
};

type Card = {
  title: string;
  icon: React.ReactNode;
  body: string;
  bullets: string[];
  cta: { label: string; href: string };
};

const SECTIONS: { id: string; eyebrow: string; cards: Card[] }[] = [
  {
    id: "individuals",
    eyebrow: "Individuals",
    cards: [
      {
        title: "Personal estates & legacy",
        icon: <FileText className="h-5 w-5" />,
        body:
          "Store wills, instructions, and sensitive documents with release rules for the right moment.",
        bullets: [
          "Time-based and event-based releases",
          "Watermarked views for untrusted recipients",
          "Tamper-evident timeline",
        ],
        cta: { label: "See the demo", href: "/#demo" },
      },
      {
        title: "Private archives",
        icon: <KeyRound className="h-5 w-5" />,
        body:
          "Collect records, photos, and notes you want retained, but only revealed under clear conditions.",
        bullets: ["Encrypted vault", "Revocation at any time", "Access logs"],
        cta: { label: "Get in touch", href: "/contact" },
      },
    ],
  },
  {
    id: "journalists",
    eyebrow: "Journalists",
    cards: [
      {
        title: "Source protection",
        icon: <Newspaper className="h-5 w-5" />,
        body:
          "Protect materials and provenance, then issue single-use links with watermarks and expirations.",
        bullets: [
          "Recipient-specific links",
          "WebAuthn sign-in",
          "Chain-of-custody exports",
        ],
        cta: { label: "Talk to us", href: "/contact" },
      },
      {
        title: "Integrity you can prove",
        icon: <ShieldCheck className="h-5 w-5" />,
        body:
          "Every action is hashed and signed so you can prove what happened and when.",
        bullets: ["Immutable audit log", "Signed exports", "Role scoping"],
        cta: { label: "Read how it works", href: "/#how-it-works" },
      },
    ],
  },
  {
    id: "organizations",
    eyebrow: "Organizations",
    cards: [
      {
        title: "Governed sharing",
        icon: <Users className="h-5 w-5" />,
        body:
          "Define exactly who can access materials, when, and under what conditions.",
        bullets: [
          "Policy guardrails",
          "SSO & SCIM",
          "Least-privilege access",
        ],
        cta: { label: "Request a demo", href: "/contact" },
      },
      {
        title: "Compliance friendly",
        icon: <Briefcase className="h-5 w-5" />,
        body:
          "Support for org controls, on-call escalation, and reviews for regulated environments.",
        bullets: ["DPA & sub-processors", "Data residency options", "KMS"],
        cta: { label: "See pricing", href: "/pricing" },
      },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <header className="text-center mb-14">
        <p className="text-sm text-muted-foreground tracking-wide">Solutions</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Built for{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            real work
          </span>
          .
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Pick the path that matches how you’ll use Torvus.
        </p>
      </header>

      <nav className="mb-10 flex flex-wrap justify-center gap-2">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border px-3.5 py-1.5 text-sm hover:bg-muted transition"
          >
            {s.eyebrow}
          </a>
        ))}
      </nav>

      <div className="space-y-16">
        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight">
              {s.eyebrow}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {s.cards.map((c) => (
                <article
                  key={c.title}
                  className="group rounded-2xl border bg-background/70 p-6 md:p-7 transition hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="grid place-items-center h-8 w-8 rounded-full bg-gradient-to-tr from-rose-100 to-rose-50 text-rose-600 ring-1 ring-rose-200/60">
                      {c.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={c.cta.href}
                    className="mt-5 inline-flex rounded-lg border px-3.5 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition"
                  >
                    {c.cta.label}
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
