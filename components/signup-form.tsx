// components/signup-form.tsx
"use client";

import { useState } from "react";

export default function SignupForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Simulate submission; replace with your API route later.
    setTimeout(() => {
      setDone(true);
      setLoading(false);
    }, 700);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border/70 bg-card p-6 text-center shadow-sm">
        <h3 className="text-lg font-semibold">You’re on the list ✅</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We’ll email you with early access news and product updates.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Name</span>
          <input
            required
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none
                       focus:ring-2 focus:ring-black/10"
            placeholder="Ada Lovelace"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Email</span>
          <input
            required
            type="email"
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none
                       focus:ring-2 focus:ring-black/10"
            placeholder="you@domain.com"
          />
        </label>

        <label className="sm:col-span-2 flex flex-col gap-2">
          <span className="text-sm font-medium">Organization (optional)</span>
          <input
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none
                       focus:ring-2 focus:ring-black/10"
            placeholder="Acme Corp"
          />
        </label>

        <label className="sm:col-span-2 flex flex-col gap-2">
          <span className="text-sm font-medium">What are you hoping Torvus will help with?</span>
          <textarea
            rows={4}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none
                       focus:ring-2 focus:ring-black/10"
            placeholder="Short note…"
          />
        </label>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          By signing up, you agree to receive emails about Torvus. Unsubscribe anytime.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background shadow
                     hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Submitting…" : "Join waitlist"}
        </button>
      </div>
    </form>
  );
}
