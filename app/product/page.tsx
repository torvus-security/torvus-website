// app/product/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import InteractiveProduct from "@/components/product-interactive";

export const metadata: Metadata = {
  title: "Product — Torvus Security",
  description:
    "From plain-language safety to technical depth: check-ins, duress, tamper-evident records, controlled releases, and a focused recipient experience.",
};

export default function ProductPage() {
  return (
    <main className="relative isolate bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-zinc-100">
      {/* subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(244,63,94,0.14),transparent_60%)]"
      />

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:pt-14">
        <p className="text-[11px] font-semibold tracking-widest text-rose-400">
          PRODUCT
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-rose-300 bg-clip-text text-transparent">
            Proof when you need it. Release when you choose.
          </span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
          Torvus helps you create tamper-evident records, set check-ins, and
          deliver information to trusted people under your rules—calm in normal
          days, decisive in emergencies.
        </p>
      </section>

      {/* Interactive sections (pills, cards, pillars, modal) */}
      <InteractiveProduct />

      {/* Sign-up CTA (replaces previous demo block) */}
      <section className="mx-auto mt-12 max-w-6xl px-4 pb-14 sm:pb-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-zinc-900/70 to-zinc-800/60 p-6 ring-1 ring-white/5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">
                Stay in the loop
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Join the waitlist for product updates and early access invites.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/signup"
                className="inline-flex items-center rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow-rose-500/25 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-rose-400/60"
              >
                Sign up for updates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
