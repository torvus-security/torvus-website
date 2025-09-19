type NavigationItem = {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
};

export const productNavigation: NavigationItem[] = [
  {
    href: "/pricing#individual",
    label: "Torvus Individual",
    description: "Personal vault with Digital Legacy Kit basics for solo operators.",
  },
  {
    href: "/pricing#professional",
    label: "Torvus Professional",
    description:
      "Advanced policies, executor KYC, and provenance controls for journalists and planners.",
  },
  {
    href: "/pricing#enterprise",
    label: "Torvus Enterprise",
    description: "Custom estate-mode workflows with dedicated support and assurances.",
  },
];

export const primaryNavigation: NavigationItem[] = [
  {
    href: "/digital-legacy",
    label: "Digital Legacy",
    description: "Plan controlled estate disclosures with the Digital Legacy Kit.",
  },
  {
    href: "/features",
    label: "How it works",
    description: "Compose policies, duress modes, and recipient verification paths.",
  },
  {
    href: "/security",
    label: "Security",
    description: "Hardening approach, attestations, and zero-knowledge guarantees.",
  },
  {
    href: "/pricing",
    label: "Pricing",
    description: "Compare Torvus Individual, Professional, and Enterprise tiers.",
  },
  {
    href: "/use-cases",
    label: "Use cases",
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

export const footerNavigation = {
  product: [
    { href: "/pricing#individual", label: "Torvus Individual" },
    { href: "/pricing#professional", label: "Torvus Professional" },
    { href: "/pricing#enterprise", label: "Torvus Enterprise" },
    { href: "/digital-legacy", label: "Digital Legacy" },
  ],
  trust: [
    { href: "/security", label: "Security" },
    { href: "/trust-center", label: "Trust Center" },
    { href: "/status", label: "Status" },
  ],
  policies: [
    { href: "/legal/privacy", label: "Privacy" },
    { href: "/legal/terms", label: "Terms" },
  ],
};
