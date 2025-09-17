"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useFormState, useFormStatus } from "react-dom";

import {
  contactInitialState,
  submitContactAction,
  type ContactState,
} from "@/app/(site)/contact/actions";
import { PrimarySubtleButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submittedAt, setSubmittedAt] = useState(() => Date.now().toString());
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, formAction] = useFormState<ContactState, FormData>(
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
      className="relative space-y-6 rounded-xl border border-storm/12 bg-white/85 p-6 shadow-soft-1 md:p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl bg-grad-panel opacity-60"
        aria-hidden="true"
      />
      <div className="relative grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name">
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="h-12 w-full rounded-md border border-storm/15 bg-white px-4 text-body text-storm transition focus:border-lapis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white"
          />
        </Field>
        <Field label="Email" name="email">
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            autoComplete="email"
            className="h-12 w-full rounded-md border border-storm/15 bg-white px-4 text-body text-storm transition focus:border-lapis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white"
          />
        </Field>
      </div>
      <div className="relative">
        <label
          htmlFor="contact-message"
          className="block text-small font-semibold text-storm"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          placeholder="Share context, timelines, or questions."
          className="mt-2 w-full rounded-md border border-storm/15 bg-white px-4 py-3 text-body text-storm transition focus:border-lapis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis/50 focus-visible:ring-offset-1 focus-visible:ring-offset-white"
        />
      </div>
      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-thunder">
          We store the minimum needed to respond. Please avoid sharing secrets or
          credentials here.
        </p>
        <SubmitButton idleText="Send message" pendingText="Sending…" />
      </div>
      <div aria-live="polite" className="relative text-small text-thunder">
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
  children: ReactNode;
};

function Field({ label, name, children }: FieldProps) {
  return (
    <div>
      <label
        className="block text-small font-semibold text-storm"
        htmlFor={`contact-${name}`}
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
    <PrimarySubtleButton
      type="submit"
      className={cn(pending && "opacity-60")}
      disabled={pending}
    >
      {pending ? pendingText : idleText}
    </PrimarySubtleButton>
  );
}
