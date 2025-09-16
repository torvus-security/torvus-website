"use server";

import { z } from "zod";

import { rateLimit } from "@/lib/rate-limit";
import { sanitizeInput } from "@/lib/sanitize";

export type WaitlistState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

export const waitlistInitialState: WaitlistState = {
  status: "idle",
  message: "",
};

const schema = z.object({
  name: z.string().min(2, "Name is required").max(80),
  email: z.string().email("Enter a valid email").max(160, "Email is too long"),
  organisation: z.string().max(160).optional(),
  focus: z.string().max(160).optional(),
  intent: z.string().max(600).optional(),
  website: z.string().max(0).optional(),
  submittedAt: z.string(),
});

export async function submitWaitlistAction(
  _prevState: WaitlistState | undefined,
  formData: FormData,
): Promise<WaitlistState> {
  const parsed = schema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please double-check the form and try again.",
    };
  }

  const { name, email, organisation, focus, intent, website, submittedAt } = parsed.data;

  if (website && website.trim().length > 0) {
    return {
      status: "success",
      message: "Thanks for reaching out—we’ll get back to you soon.",
    };
  }

  const elapsed = Date.now() - Number.parseInt(submittedAt, 10);
  if (!Number.isFinite(elapsed) || elapsed < 800) {
    return {
      status: "error",
      message: "Please try again.",
    };
  }

  const limiter = rateLimit({ key: "waitlist", limit: 5, interval: 10 * 60 * 1000 });
  if (!limiter.allowed) {
    return {
      status: "error",
      message: "Please try again later.",
    };
  }

  const payload = {
    name: sanitizeInput(name),
    email: sanitizeInput(email),
    organisation: organisation ? sanitizeInput(organisation) : undefined,
    focus: focus ? sanitizeInput(focus) : undefined,
    intent: intent ? sanitizeInput(intent, { allowNewlines: true }) : undefined,
    submittedAt: new Date().toISOString(),
  };

  console.info("waitlist.submit", payload);

  return {
    status: "success",
    message: "Thanks for joining the waitlist. We'll be in touch soon.",
  };
}
