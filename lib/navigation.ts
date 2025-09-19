export type NavigationLink = {
  href: string;
  label: string;
  description?: string;
};

export const productNavigation: NavigationLink[] = [
  {
    href: "/pricing#individual",
    label: "Torvus Individual",
    description:
      "Secure personal archives with Digital Legacy basics, inventory, and guided releases.",
  },
  {
    href: "/pricing#professional",
    label: "Torvus Professional",
    description:
      "Advanced policies, executor KYC, and provenance features for journalists and planners.",
  },
  {
    href: "/pricing#enterprise-contact",
    label: "Torvus Enterprise",
    description:
      "Custom estate orchestration, SSO, and support. Connect with the Torvus team to scope.",
  },
];

export const primaryNavigation: NavigationLink[] = [
  {
    href: "/product",
    label: "Product",
    description: "Understand the Torvus vault, policy engine, and control center.",
  },
  {
    href: "/digital-legacy",
    label: "Digital Legacy",
    description: "Plan estate disclosures and contingencies with Torvus Digital Legacy.",
  },
  {
    href: "/features",
    label: "How it works",
    description: "Compose policies, duress modes, and recipient verification paths.",
  },
  {
    href: "/pricing",
    label: "Pricing",
    description: "Compare Torvus Individual, Professional, and Enterprise tiers.",
  },
  {
    href: "/security",
    label: "Security",
    description: "Hardening approach, attestations, and zero-knowledge guarantees.",
  },
  {
    href: "/use-cases",
    label: "Use Cases",
    description: "See how journalists, lawyers, and individuals apply Torvus day to day.",
  },
  {
    href: "/faq",
    label: "FAQ",
    description: "Key answers about rollout, recovery, and operational models.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Talk with Torvus about security reviews or tailored onboarding.",
  },
];

// eslint-disable-next-line import/no-unused-modules
export const trustNavigation: NavigationLink[] = [
  {
    href: "/security",
    label: "Security",
    description: "Hardening, encryption, and digital legacy assurances.",
  },
  {
    href: "/status",
    label: "Status",
    description: "Live uptime, incident history, and transparency commitments.",
  },
  {
    href: "/legal/privacy",
    label: "Privacy",
    description: "How Torvus handles personal information and encrypted data.",
  },
  {
    href: "/legal/terms",
    label: "Terms",
    description: "Service terms, acceptable use, and contractual obligations.",
  },
];

// eslint-disable-next-line import/no-unused-modules
export const companyNavigation: NavigationLink[] = [
  {
    href: "/trust",
    label: "Trust Center",
    description: "Transparency hub with policies and external references.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Talk with Torvus about security reviews or tailored onboarding.",
  },
];
