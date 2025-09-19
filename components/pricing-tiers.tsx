import Link from "next/link";

import { Check } from "@/components/icons";
import { buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import type { ReactNode } from "react";

type Tier = {
  id: string;
  name: string;
  headline: string;
  summary: string;
  features: string[];
  priceNote?: string;
  highlight?: boolean;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  footnote?: ReactNode;
};

type PricingTiersProps = {
  tiers: Tier[];
};

export function PricingTiers({ tiers }: PricingTiersProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          id={tier.id}
          className="flex h-full flex-col justify-between border-lagoon/30 bg-white/96 p-6 shadow-[0_18px_40px_rgba(11,18,32,0.08)]"
        >
          <div className="space-y-4">
            <CardHeader className="space-y-3 p-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-lagoon/30 bg-pastel-lagoon/40 px-3 py-1 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-lagoon">
                {tier.headline}
              </span>
              <CardTitle className="text-h3 font-semibold text-storm">
                {tier.name}
              </CardTitle>
              <CardDescription>{tier.summary}</CardDescription>
              {tier.priceNote ? (
                <p className="text-[0.95rem] font-semibold text-storm/80">
                  {tier.priceNote}
                </p>
              ) : null}
            </CardHeader>
            <ul className="space-y-3 text-[0.95rem] text-storm/85">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-[4px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-lagoon/20 text-lagoon">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-[0.95rem]">
            <Link
              href={tier.primaryCta.href}
              className={buttonClasses({
                variant: tier.highlight ? "primary" : "secondary",
                size: "sm",
                className: tier.highlight
                  ? "justify-center"
                  : "border-lapis/40 text-lapis",
              })}
            >
              {tier.primaryCta.label}
            </Link>
            {tier.secondaryCta ? (
              <Link
                href={tier.secondaryCta.href}
                className="inline-flex items-center gap-1 text-[0.9rem] font-semibold text-storm/70 hover:text-storm focus-visible:text-storm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {tier.secondaryCta.label}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
            {tier.footnote ? (
              <p className="mt-2 text-[0.8rem] text-storm/60">{tier.footnote}</p>
            ) : null}
          </div>
        </Card>
      ))}
    </div>
  );
}
