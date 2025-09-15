// components/cta-signup.tsx
import Link from "next/link";

export default function CTASignup() {
  return (
    <section
      className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-r
                 from-rose-50 via-sky-50 to-emerald-50 p-6 md:p-10 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold leading-tight">
            Ready to safeguard your most important materials?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Join the early access list. We’ll keep you posted with product updates and invites.
          </p>
        </div>
        <div className="flex items-center md:justify-end">
          <Link
            href="/signup"
            className="rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background shadow
                       hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            Sign up for updates
          </Link>
        </div>
      </div>
    </section>
  );
}
