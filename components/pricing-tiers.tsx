"use client";

import Link from "next/link";

import { PrimarySubtleLink, buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";

type Tier = {
  id: string;
  name: string;
  price: string;
  summary: string;
  features: string[];
  cta: { label: string; href: string; variant?: "primary" | "secondary" | "link" };
};

const tiers: Tier[] = [
  {
    id: "individual",
    name: "Torvus Individual",
    price: "Coming soon",
    summary: "Core vault plus Digital Legacy essentials for personal archives.",
    features: [
      "Guided inventory for passwords, documents, and crypto notes.",
      "Digital Legacy policy presets with inactivity timers.",
      "Two executors and five recipients with verification.",
    ],
    cta: { label: "Join the waitlist", href: "/waitlist", variant: "primary" },
  },
  {
    id: "professional",
    name: "Torvus Professional",
    price: "Team pricing",
    summary:
      "Advanced policies, KYC for executors, and enhanced audit export for journalists, NGOs, and estate planners.",
    features: [
      "Multi-signal release predicates with manual review lanes.",
      "Executor KYC, redaction-ready dry runs, and recipient portal.",
      "Extended audit exports with integration hooks and API webhooks.",
    ],
    cta: { label: "Request access", href: "/waitlist", variant: "secondary" },
  },
  {
    id: "enterprise",
    name: "Torvus Enterprise",
    price: "Custom",
    summary:
      "Enterprise agreements with SSO/SAML, dedicated support, DPA/BAA options, and bespoke estate workflows.",
    features: [
      "Custom estate-mode orchestration with policy simulations.",
      "Dedicated success team, response SLAs, and security reviews.",
      "SSO/SAML, SCIM, and regional data residency roadmaps.",
    ],
    cta: {
      label: "Contact sales",
      href: "mailto:security@torvussecurity.com",
      variant: "link",
    },
  },
];

export function PricingTiers() {
  return (
    <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.85)]">
      <div className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-[0.9rem] font-semibold uppercase tracking-[0.26em] text-lagoon">
            Pricing
          </p>
          <h2 className="text-h2 font-semibold text-storm">
            Choose the Torvus plan that fits how you work.
          </h2>
          <p className="mx-auto max-w-prose text-body text-thunder">
            Start with the Individual toolkit, scale to Professional for advanced
            workflows, or partner with us on Enterprise for custom orchestration.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.id} id={tier.id} className="h-full border-storm/12">
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.summary}</CardDescription>
                <p className="text-[1rem] font-semibold text-lapis">{tier.price}</p>
              </CardHeader>
              <ul className="space-y-2 text-[0.95rem] text-thunder">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span
                      className="mt-[0.35rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-lagoon"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">{renderTierCta(tier)}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderTierCta(tier: Tier) {
  const handleClick = () =>
    trackEvent("pricing_cta_click", { tier: tier.id, label: tier.cta.label });

  if (tier.cta.variant === "link") {
    return (
      <Link
        href={tier.cta.href}
        className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-lapis hover:underline"
        data-pricing-cta={tier.id}
        onClick={handleClick}
      >
        {tier.cta.label}
        <span aria-hidden="true">→</span>
      </Link>
    );
  }

  if (tier.cta.variant === "secondary") {
    return (
      <Link
        href={tier.cta.href}
        className={buttonClasses({
          variant: "secondary",
          size: "sm",
          className: "border-lapis/45 text-lapis",
        })}
        data-pricing-cta={tier.id}
        onClick={handleClick}
      >
        {tier.cta.label}
      </Link>
    );
  }

  return (
    <PrimarySubtleLink
      href={tier.cta.href}
      data-pricing-cta={tier.id}
      className="w-full"
      onClick={handleClick}
    >
      {tier.cta.label}
    </PrimarySubtleLink>
  );
}
