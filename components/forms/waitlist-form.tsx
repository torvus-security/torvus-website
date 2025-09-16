"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useFormState, useFormStatus } from "react-dom";

import {
  submitWaitlistAction,
  waitlistInitialState,
  type WaitlistState,
} from "@/app/(site)/waitlist/actions";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function WaitlistForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submittedAt, setSubmittedAt] = useState(() => Date.now().toString());
  const [state, formAction] = useFormState<WaitlistState, FormData>(
    submitWaitlistAction,
    waitlistInitialState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      setSubmittedAt(Date.now().toString());
    }
  }, [state.status]);

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="space-y-6 rounded-3xl border border-storm/10 bg-mist/50 p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name">
          <input
            type="text"
            id="waitlist-name"
            name="name"
            placeholder="Ada Lovelace"
            required
            className="h-12 w-full rounded-2xl border border-storm/15 bg-white px-4 text-body text-storm focus:border-lapis"
            autoComplete="name"
          />
        </Field>
        <Field label="Email" name="email">
          <input
            type="email"
            id="waitlist-email"
            name="email"
            placeholder="you@organisation"
            required
            className="h-12 w-full rounded-2xl border border-storm/15 bg-white px-4 text-body text-storm focus:border-lapis"
            autoComplete="email"
          />
        </Field>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Organisation" name="organisation">
          <input
            type="text"
            id="waitlist-organisation"
            name="organisation"
            placeholder="Optional"
            className="h-12 w-full rounded-2xl border border-storm/15 bg-white px-4 text-body text-storm focus:border-lapis"
            autoComplete="organization"
          />
        </Field>
        <Field label="How can Torvus help?" name="focus">
          <input
            type="text"
            id="waitlist-focus"
            name="focus"
            placeholder="Digital legacy, investigations, critical response..."
            className="h-12 w-full rounded-2xl border border-storm/15 bg-white px-4 text-body text-storm focus:border-lapis"
            autoComplete="off"
          />
        </Field>
      </div>
      <div>
        <label
          htmlFor="waitlist-notes"
          className="block text-small font-semibold text-storm/80"
        >
          Additional context (optional)
        </label>
        <textarea
          id="waitlist-notes"
          name="intent"
          placeholder="Share scenarios, requirements, or timelines."
          rows={4}
          className="mt-2 w-full rounded-2xl border border-storm/15 bg-white px-4 py-3 text-body text-storm focus:border-lapis"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-thunder/70">
          Joining the waitlist keeps you in the loop on private beta milestones. We store
          only what you submit.
        </p>
        <SubmitButton idleText="Request access" pendingText="Submitting…" />
      </div>
      <div aria-live="polite" className="text-small text-thunder/80">
        {state.message}
      </div>
      <input type="hidden" name="submittedAt" value={submittedAt} />
      <div aria-hidden="true" className="hidden">
        <label htmlFor="waitlist-website">Website</label>
        <input
          id="waitlist-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  children: ReactNode;
};

function Field({ label, name, children }: FieldProps) {
  return (
    <div>
      <label
        className="block text-small font-semibold text-storm/80"
        htmlFor={`waitlist-${name}`}
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function SubmitButton({
  idleText,
  pendingText,
}: {
  idleText: string;
  pendingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={cn(
        buttonClasses({ variant: "primary", size: "lg" }),
        pending && "opacity-60",
      )}
      disabled={pending}
    >
      {pending ? pendingText : idleText}
    </button>
  );
}
