// app/page.tsx
import Link from "next/link";
import { PhoneMock } from "@/components/phone-mock";

export const metadata = {
  title: "Torvus — Conditional release with real security",
  description:
    "Encrypt locally, set your conditions, and know that only the right people get the right things at the right time.",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-y-12 px-6 pb-14 pt-10 md:grid-cols-2 md:gap-x-10 md:pb-20 md:pt-16 lg:px-8">
        <div>
          <h1 className="font-display leading-[1.05] text-4xl tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Your instructions,
            <br />
            <span className="block text-gradient-brand">
              only when it’s right
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-7 text-slate-600">
            Torvus is a secure vault with a conditional-release engine. Encrypt
            locally, set your conditions, and know that only the right people
            get the right things at the right time.
          </p>

          <div className="mt-8 flex gap-3">
            <Link
              href="/signup"
              className="pressable inline-flex items-center justify-center rounded-xl bg-rose-500 px-4 py-2.5 text-[15px] font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/70"
            >
              Sign up for updates
            </Link>
            <Link
              href="/security"
              className="pressable inline-flex items-center justify-center rounded-xl border border-slate-300/80 bg-white px-4 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50"
            >
              See how it’s secured
            </Link>
          </div>
        </div>

        <div className="justify-self-center">
          {/* Self-contained mock (no broken image icon anymore) */}
          <PhoneMock />
        </div>
      </section>
    </main>
  );
}