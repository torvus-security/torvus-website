"use server";

import { z } from "zod";

import { rateLimit } from "@/lib/rate-limit";
import { sanitizeInput } from "@/lib/sanitize";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const contactInitialState: ContactState = {
  status: "idle",
  message: "",
};

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(160),
  message: z.string().min(10).max(1500),
  website: z.string().max(0).optional(),
  submittedAt: z.string(),
});

export async function submitContactAction(
  _prevState: ContactState | undefined,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please double-check the form and try again.",
    };
  }

  const { name, email, message, website, submittedAt } = parsed.data;

  if (website && website.trim().length > 0) {
    return {
      status: "success",
      message: "Thanks—we’ll respond shortly.",
    };
  }

  const elapsed = Date.now() - Number.parseInt(submittedAt, 10);
  if (!Number.isFinite(elapsed) || elapsed < 800) {
    return {
      status: "error",
      message: "Please try again.",
    };
  }

  const limiter = rateLimit({ key: "contact", limit: 5, interval: 10 * 60 * 1000 });
  if (!limiter.allowed) {
    return {
      status: "error",
      message: "Please try again later.",
    };
  }

  const payload = {
    name: sanitizeInput(name),
    email: sanitizeInput(email),
    message: sanitizeInput(message, { allowNewlines: true }),
    submittedAt: new Date().toISOString(),
  };

  console.info("contact.submit", payload);

  return {
    status: "success",
    message: "Thanks for reaching out. We’ll respond shortly.",
  };
}
