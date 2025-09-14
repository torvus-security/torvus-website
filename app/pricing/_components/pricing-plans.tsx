"use client";

import { useState } from "react";
import Link from "next/link";

type Plan = {
  name: string;
  blurb: string;
  priceMonthly: number; // in USD
  priceYearly: number;  // in USD
  cta: { href: string; label: string };
  features: string[];
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Solo",
    blurb: "For individuals who need tamper-evident proof and secure releases.",
    priceMonthly: 9,
    priceYearly: 84, // $7/mo avg
    cta: { href: "/auth/sign-up", label: "Get started" },
    features: [
      "Unlimited notes & evidence",
      "1 active release plan",
      "Email support",
      "Passkey sign-in",
    ],
  },
  {
    name: "Team",
    blurb: "For small teams coordinating across roles and devices.",
    priceMonthly: 29,
    priceYearly: 276, // $23/mo avg
    cta: { href: "/auth/sign-up", label: "Start free trial" },
    features: [
      "Everything in Solo",
      "5 active release plans",
      "Role-based access",
      "Export & audit trail",
    ],
    highlight: true,
  },
  {
    name: "Org",
    blurb: "For organizations with compliance and advanced controls.",
    priceMonthly: 79,
    priceYearly: 756, // $63/mo avg
    cta: { href: "/contact", label: "Contact sales" },
    features: [
      "Everything in Team",
      "Unlimited release plans",
      "SAML SSO & SCIM",
      "Custom retention & SLAs",
    ],
  },
];

export default function PricingPlans() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="mt-10 sm:mt-12">
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setAnnual(false)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            !annual
              ? "bg-foreground text-background"
              : "border border-border bg-background text-foreground hover:bg-muted"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setAnnual(true)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            annual
              ? "bg-foreground text-background"
              : "border border-border bg-background text-foreground hover:bg-muted"
          }`}
        >
          Yearly <span className="ml-1 text-[10px] opacity-70">Save ~20%</span>
        </button>
      </div>

      {/* Cards */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan) => {
          const price = annual ? plan.priceYearly : plan.priceMonthly;
          const suffix = annual ? "/yr" : "/mo";
          return (
            <article
              key={plan.name}
              className={[
                "group relative rounded-2xl border p-6 transition",
                "bg-gradient-to-b from-background to-muted/40",
                plan.highlight
                  ? "border-rose-300/60 shadow-[0_10px_30px_-12px_rgba(244,63,94,0.35)]"
                  : "border-border hover:border-foreground/20",
                "hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-0.5",
              ].join(" ")}
            >
              {/* Accent */}
              <div className="absolute inset-x-6 top-0 -translate-y-1/2">
                <div
                  className={[
                    "mx-auto h-1 w-1/2 rounded-full blur",
                    plan.highlight ? "bg-rose-500/50" : "bg-foreground/10",
                  ].join(" ")}
                />
              </div>

              <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>

              <div className="mt-4 flex items-end gap-1">
                <span className="bg-gradient-to-r from-foreground to-rose-600/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
                  ${price}
                </span>
                <span className="pb-1 text-xs text-muted-foreground">{suffix}</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rotate-45 rounded-[1px] bg-rose-500/80" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={plan.cta.href}
                  className={[
                    "inline-flex w-full items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition",
                    plan.highlight
                      ? "border-rose-400/70 bg-rose-500 text-white hover:opacity-90"
                      : "border-border bg-foreground text-background hover:opacity-90",
                  ].join(" ")}
                >
                  {plan.cta.label}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
