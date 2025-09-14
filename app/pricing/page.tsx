"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Torvus Security",
  description:
    "Simple, transparent pricing for individuals, teams, and organizations that need tamper-evident proof and secure releases.",
};

type Tier = {
  name: string;
  blurb: string;
  priceMonthly: number;
  priceYearly: number;
  cta: { label: string; href: string };
  popular?: boolean;
  features: string[];
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    blurb: "For individuals protecting a few important materials.",
    priceMonthly: 12,
    priceYearly: 120,
    cta: { label: "Start free trial", href: "/contact" },
    features: [
      "Encrypted vault (10 GB)",
      "Rules-based release",
      "Single-use / expiring links",
      "Watermark views",
      "Email support",
    ],
  },
  {
    name: "Standard",
    blurb: "For professionals and small teams that need reliability.",
    priceMonthly: 29,
    priceYearly: 290,
    popular: true,
    cta: { label: "Talk to sales", href: "/contact" },
    features: [
      "Encrypted vault (1 TB)",
      "Passkeys (WebAuthn) + TOTP",
      "Audit trail & tamper-evident proof",
      "Recipient portal",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    blurb: "For organizations with compliance and scale requirements.",
    priceMonthly: 0,
    priceYearly: 0,
    cta: { label: "Request a demo", href: "/contact" },
    features: [
      "SAML/SSO & SCIM",
      "KMS integration",
      "Custom retention & data residency",
      "DPA & security review",
      "On-call escalation",
    ],
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      {/* Heading */}
      <header className="text-center mb-12">
        <p className="text-sm text-muted-foreground tracking-wide">Pricing</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Simple, transparent{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            plans
          </span>
          .
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose monthly or annual billing. Cancel anytime.
        </p>
      </header>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <button
          onClick={() => setAnnual(false)}
          className={`rounded-full px-4 py-1.5 text-sm border transition ${
            !annual
              ? "bg-foreground text-background"
              : "bg-background text-foreground/70 hover:text-foreground"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setAnnual(true)}
          className={`rounded-full px-4 py-1.5 text-sm border transition ${
            annual
              ? "bg-foreground text-background"
              : "bg-background text-foreground/70 hover:text-foreground"
          }`}
        >
          Annual <span className="ml-1 text-emerald-500">(-15%)</span>
        </button>
      </div>

      {/* Grid */}
      <section className="grid gap-6 md:grid-cols-3">
        {TIERS.map((t) => {
          const price = annual ? t.priceYearly : t.priceMonthly;
          const suffix = annual ? "/yr" : "/mo";
          const isContact = t.name === "Enterprise";

          return (
            <article
              key={t.name}
              className={`group relative rounded-2xl border bg-background/70 backdrop-blur-sm p-6 md:p-8 transition
                          hover:shadow-xl hover:-translate-y-0.5`}
              style={{
                boxShadow:
                  "0 10px 30px -10px rgb(2 6 23 / 0.12), 0 1px 0 0 rgb(2 6 23 / 0.04) inset",
              }}
            >
              {t.popular && (
                <span className="absolute -top-3 left-6 rounded-full border bg-white/80 px-2.5 py-1 text-xs font-medium shadow-sm">
                  Most popular
                </span>
              )}

              <h3 className="text-2xl font-bold tracking-tight">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>

              <div className="mt-6 flex items-baseline gap-2">
                {isContact ? (
                  <span className="text-3xl font-semibold">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold tabular-nums">
                      ${price}
                    </span>
                    <span className="text-muted-foreground">{suffix}</span>
                  </>
                )}
              </div>

              <Link
                href={t.cta.href}
                className="mt-6 inline-flex items-center justify-center rounded-lg border px-4 py-2.5 text-sm font-medium transition
                           bg-foreground text-background hover:opacity-90"
              >
                {t.cta.label}
              </Link>

              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-foreground/90"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      {/* Footnote */}
      <p className="mt-10 text-center text-xs text-muted-foreground">
        Prices shown in USD. Taxes may apply. Enterprise features are subject to
        a Master Service Agreement.
      </p>
    </main>
  );
}
