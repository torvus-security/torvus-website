type NavigationItem = {
  href: string;
  label: string;
  description: string;
};

export const primaryNavigation: NavigationItem[] = [
  {
    href: "/features",
    label: "Features",
    description:
      "Instrument policies, recipients, and approvals from the Torvus command center.",
  },
  {
    href: "/security",
    label: "Security",
    description:
      "Zero-trust key orchestration, duress controls, and tamper-evident logs.",
  },
  {
    href: "/digital-legacy",
    label: "Digital Legacy",
    description: "Plan estate disclosures and contingencies without compromising today.",
  },
  {
    href: "/pricing",
    label: "Pricing",
    description:
      "Choose a policy tier that fits your release cadence and assurance needs.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Reach Torvus for security reviews, partnerships, or tailored rollouts.",
  },
];

export const secondaryNavigation: NavigationItem[] = [
  {
    href: "/status",
    label: "Status",
    description: "Live uptime, incident history, and resilience commitments.",
  },
  {
    href: "/legal/privacy",
    label: "Privacy",
    description:
      "Data handling, retention, and privacy safeguards in the Torvus platform.",
  },
  {
    href: "/legal/terms",
    label: "Terms",
    description: "Service terms, acceptable use, and contractual obligations for Torvus.",
  },
];
