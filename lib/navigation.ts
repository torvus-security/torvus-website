type NavigationItem = {
  href: string;
  label: string;
  description: string;
};

export const primaryNavigation: NavigationItem[] = [
  {
    href: "/product",
    label: "Product",
    description: "Understand the Torvus vault, policy engine, and control center.",
  },
  {
    href: "/security",
    label: "Security",
    description: "Hardening approach, attestations, and zero-knowledge guarantees.",
  },
  {
    href: "/features",
    label: "How it works",
    description: "Compose policies, duress modes, and recipient verification paths.",
  },
  {
    href: "/digital-legacy",
    label: "Digital Legacy",
    description: "Plan estate disclosures and contingencies with Torvus Digital Legacy.",
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

export const secondaryNavigation: NavigationItem[] = [
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
