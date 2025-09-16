"use client";

import { useActionState, useEffect, useRef, useState } from "react";

import {
  contactInitialState,
  submitContactAction,
  type ContactState,
} from "@/app/(site)/contact/actions";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submittedAt, setSubmittedAt] = useState(() => Date.now().toString());
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContactAction,
    contactInitialState,
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
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="h-12 w-full rounded-2xl border border-storm/15 bg-white px-4 text-body text-storm focus:border-lapis"
          />
        </Field>
        <Field label="Email" name="email">
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            autoComplete="email"
            className="h-12 w-full rounded-2xl border border-storm/15 bg-white px-4 text-body text-storm focus:border-lapis"
          />
        </Field>
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-small font-semibold text-storm/80"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          placeholder="Share context, timelines, or questions."
          className="mt-2 w-full rounded-2xl border border-storm/15 bg-white px-4 py-3 text-body text-storm focus:border-lapis"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-thunder/70">
          We’ll respond within two business days. Please avoid sharing secrets or
          credentials here.
        </p>
        <button
          type="submit"
          className={cn(
            buttonClasses({ variant: "primary", size: "lg" }),
            pending && "opacity-60",
          )}
          disabled={pending}
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
      <div aria-live="polite" className="text-small text-thunder/80">
        {state.message}
      </div>
      <input type="hidden" name="submittedAt" value={submittedAt} />
      <div aria-hidden="true" className="hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
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
  children: React.ReactNode;
};

function Field({ label, name, children }: FieldProps) {
  return (
    <div>
      <label
        className="block text-small font-semibold text-storm/80"
        htmlFor={`contact-${name}`}
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
