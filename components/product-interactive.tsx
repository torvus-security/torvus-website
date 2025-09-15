// components/product-interactive.tsx
"use client";

import {
  ShieldCheck,
  Timer,
  FileCheck2,
  BellRing,
  KeyRound,
  Users,
  Link2,
  Smartphone,
  Landmark,
  ScrollText,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

/** Simple color theme map for varied icon accents */
const accents = {
  rose:  { badge: "bg-rose-500/12 ring-rose-400/25",   icon: "text-rose-300" },
  sky:   { badge: "bg-sky-500/12 ring-sky-400/25",     icon: "text-sky-300" },
  emerald:{badge:"bg-emerald-500/12 ring-emerald-400/25",icon:"text-emerald-300"},
  amber: { badge: "bg-amber-500/12 ring-amber-400/25", icon: "text-amber-300" },
  violet:{ badge: "bg-violet-500/12 ring-violet-400/25",icon: "text-violet-300"},
  cyan:  { badge: "bg-cyan-500/12 ring-cyan-400/25",   icon: "text-cyan-300" },
} as const;

type AccentKey = keyof typeof accents;

type Feature = {
  id: string;
  title: string;
  blurb: string;
  details: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: AccentKey;
};

const PILLS: Feature[] = [
  {
    id: "proof",
    title: "Tamper-evident records",
    blurb: "Hash files and notes into a signed trail.",
    details:
      "Every captured file or note is fingerprinted (hashed) and chained into a signed audit log. Any alteration is detectable. You can export proofs for audits or disputes.",
    Icon: FileCheck2,
    accent: "rose",
  },
  {
    id: "timers",
    title: "Check-ins & timers",
    blurb: "Stay in control during travel or fieldwork.",
    details:
      "Create a plan with scheduled check-ins. Miss a check-in and Torvus follows your instructions: notify, escalate, or release to chosen recipients.",
    Icon: Timer,
    accent: "sky",
  },
  {
    id: "duress",
    title: "Duress signal",
    blurb: "Trigger a discreet alert or release.",
    details:
      "If you’re under pressure, a duress action can trigger alerts or controlled release—configured by you. It aims to reduce harm while preserving evidence.",
    Icon: BellRing,
    accent: "amber",
  },
  {
    id: "recipients",
    title: "Recipient controls",
    blurb: "Choose who sees what and for how long.",
    details:
      "Define recipients per plan. Access links are short-lived, revocable, and audience-bound. Extra verification can be requested for sensitive releases.",
    Icon: Users,
    accent: "emerald",
  },
  {
    id: "auth",
    title: "Passkeys & TOTP",
    blurb: "Strong sign-in with WebAuthn.",
    details:
      "Phishing-resistant passkeys are preferred, with TOTP as a fallback. Organization options like SSO are on the roadmap and track well with the architecture.",
    Icon: KeyRound,
    accent: "violet",
  },
  {
    id: "audit",
    title: "Signed audit trail",
    blurb: "Provenance for capture and release.",
    details:
      "Contextual server events are signed alongside client-side fingerprints to give you verifiable timelines and provenance for content and actions.",
    Icon: ScrollText,
    accent: "cyan",
  },
];

const PILLARS: Feature[] = [
  {
    id: "integrity",
    title: "Integrity",
    blurb: "Chained hashes, signed events, exportable proofs.",
    details:
      "Chained hashing makes tampering evident. Signed events capture ‘who/what/when’ with exportable bundles compatible with standard verification tools.",
    Icon: ShieldCheck,
    accent: "rose",
  },
  {
    id: "control",
    title: "Control",
    blurb: "Check-ins, time-locks, per-recipient release.",
    details:
      "Design your own release rules: time windows, staged alerts, and per-recipient visibility. Revocation ends access immediately for future requests.",
    Icon: Link2,
    accent: "sky",
  },
  {
    id: "identity",
    title: "Identity",
    blurb: "Modern auth and role-aware policies.",
    details:
      "Built for passkeys first. For teams, role-aware controls shape what staff can see and sign. Org-grade SSO/SCIM are planned with a clear compatibility path.",
    Icon: Landmark,
    accent: "emerald",
  },
];

function AccentBadge({
  Icon,
  accent,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  accent: AccentKey;
}) {
  const c = accents[accent];
  return (
    <div
      className={[
        "mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1",
        c.badge,
      ].join(" ")}
    >
      <Icon className={["h-4 w-4", c.icon].join(" ")} />
    </div>
  );
}

function useEscape(handler: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handler();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler]);
}

function Modal({
  open,
  onClose,
  feature,
}: {
  open: boolean;
  onClose: () => void;
  feature: Feature | null;
}) {
  useEscape(onClose);
  if (!open || !feature) return null;

  const accent = accents[feature.accent];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-950 p-6 ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <div className={["inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1", accent.badge].join(" ")}>
            <feature.Icon className={["h-4 w-4", accent.icon].join(" ")} />
          </div>
          <h3 className="text-base font-semibold text-zinc-100">
            {feature.title}
          </h3>
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.details}</p>
        <button
          onClick={onClose}
          className="mt-5 inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/** Reusable clickable block with hover/press affordance */
function Clickable({
  feature,
  onOpen,
  as = "div",
}: {
  feature: Feature;
  onOpen: (f: Feature) => void;
  as?: "div" | "button";
}) {
  const Tag: any = as;
  return (
    <Tag
      onClick={() => onOpen(feature)}
      onKeyDown={(e: React.KeyboardEvent) =>
        (e.key === "Enter" || e.key === " ") && onOpen(feature)
      }
      role="button"
      tabIndex={0}
      className="group rounded-2xl border border-white/10 bg-zinc-900/60 p-5 ring-1 ring-white/5 transition will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:shadow-xl hover:shadow-black/40 focus:outline-none focus:ring-2 focus:ring-white/30"
    >
      <AccentBadge Icon={feature.Icon} accent={feature.accent} />
      <h3 className="text-sm font-semibold text-zinc-100">{feature.title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{feature.blurb}</p>
      <span className="mt-3 inline-block text-xs font-medium text-zinc-300/70 group-hover:text-zinc-200">
        Learn more →
      </span>
    </Tag>
  );
}

export default function InteractiveProduct() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Feature | null>(null);

  const openModal = (f: Feature) => {
    setCurrent(f);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const PillRow = useMemo(
    () => (
      <div className="mx-auto mt-6 max-w-6xl px-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PILLS.map((f) => (
            <Clickable key={f.id} feature={f} onOpen={openModal} />
          ))}
        </div>
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const Cards = useMemo(
    () => (
      <section className="mx-auto mt-10 max-w-6xl px-4">
        <h2 className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-zinc-100 to-rose-300/90 bg-clip-text text-transparent">
            What you can do today
          </span>
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLS.slice(0, 4).map((f) => (
            <Clickable key={f.id} feature={f} onOpen={openModal} />
          ))}
        </div>
      </section>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const Pillars = useMemo(
    () => (
      <section className="mx-auto mt-12 max-w-6xl px-4">
        <h2 className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-zinc-100 to-rose-300/90 bg-clip-text text-transparent">
            Pillars of trust
          </span>
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {PILLARS.map((f) => (
            <Clickable key={f.id} feature={f} onOpen={openModal} />
          ))}
        </div>
      </section>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      {/* top row of pills/cards */}
      {PillRow}

      {/* mid “what you can do” cards */}
      {Cards}

      {/* pillars */}
      {Pillars}

      {/* decorative divider */}
      <div className="mx-auto mt-12 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Modal open={open} onClose={closeModal} feature={current} />
    </>
  );
}
