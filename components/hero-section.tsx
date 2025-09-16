// components/hero-section.tsx
import Link from "next/link";
import PhoneMock from "./phone-mock";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="font-sans uppercase tracking-[0.16em] text-sm text-slate-500">Torvus</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl leading-tight text-brand-ink">
            Your instructions,<br />
            <span className="text-gradient-brand">only when it’s right</span>
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">
            Torvus is a secure vault with a conditional-release engine. Encrypt locally, set your
            conditions, and know that only the right people get the right things at the right time.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link
              href="/signup"
              className="rounded-xl bg-rose-500 px-5 py-3 text-white shadow hover:bg-rose-600"
            >
              Sign up for updates
            </Link>
            <Link
              href="/security"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50"
            >
              See how it’s secured
            </Link>
          </div>
        </div>

        <div className="justify-self-center">
          <PhoneMock /* add src later: src="/phone-hero.png" */ />
        </div>
      </div>
    </section>
  );
}