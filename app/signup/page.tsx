// app/signup/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up — Torvus Security",
  description:
    "Join the Torvus waitlist to receive product updates, early access opportunities, and security transparency notes.",
};

export default function SignupPage() {
  return (
    <main className="bg-gradient-to-b from-zinc-50 to-white">
      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Sign up for updates
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
          We’ll only send essential updates about Torvus and early access
          opportunities. You can unsubscribe anytime.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900">
              Join the waitlist
            </h2>
            <form
              method="POST"
              action="/api/signup" // Replace with your handler or external form endpoint
              className="mt-4 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-zinc-800">
                  Name
                  <input
                    name="name"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="text-sm font-medium text-zinc-800">
                  Email <span className="text-rose-500">*</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-zinc-800">
                Organization
                <input
                  name="org"
                  type="text"
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                  placeholder="Optional"
                />
              </label>

              <label className="block text-sm font-medium text-zinc-800">
                Notes
                <textarea
                  name="notes"
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                  placeholder="Tell us what you’re hoping Torvus can help with."
                />
              </label>

              <div className="flex items-center gap-2">
                <input
                  id="optin"
                  name="optin"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-300"
                />
                <label htmlFor="optin" className="text-sm text-zinc-700">
                  Send me news and early access invites.
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-zinc-300"
              >
                Join waitlist
              </button>
            </form>
          </div>

          {/* Helpful info */}
          <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900">
              What happens next?
            </h2>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-zinc-600">
              <li>
                • We’ll add you to the private list and send occasional product
                updates and timelines.
              </li>
              <li>
                • When early access is ready, you’ll receive an invite with
                instructions to try Torvus.
              </li>
              <li>
                • We keep messages minimal and relevant; unsubscribe any time.
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm text-zinc-700">
                For security or responsible disclosure, please use{" "}
                <a href="/contact" className="font-medium underline">
                  the secure inquiry channel
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
