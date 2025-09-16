import Link from "next/link";
import PhoneMock from "@/components/phone-mock";
import FeatureGrid from "@/components/feature-grid";

export const metadata = {
  title: "Torvus — Conditional release, done safely",
  description:
    "Torvus is a secure vault with a conditional-release engine. Encrypt locally, set your conditions, and know that only the right people get the right things at the right time.",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-2 md:gap-12 md:pt-16">
        <div>
          <h1 className="heading-tight text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Your instructions,
            <br />
            <span className="grad-text-brand">only when it’s right</span>
          </h1>
          <p className="mt-6 max-w-xl text-slate-600">
            Torvus is a secure vault with a conditional-release engine. Encrypt locally, set your conditions, and know
            that only the right people get the right things at the right time.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/signup" className="rounded-lg bg-rose-500 px-4 py-2 font-medium text-white hover:bg-rose-600">
              Sign up for updates
            </Link>
            <Link href="/security" className="rounded-lg border px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">
              See how it’s secured
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          <PhoneMock />
        </div>
      </section>

      {/* “What you get” preview reusing the grid */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900">
          What you get with <span className="grad-text-brand">Torvus</span>
        </h2>
        <FeatureGrid />
      </section>
    </main>
  );
}