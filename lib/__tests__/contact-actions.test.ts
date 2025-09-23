import { describe, expect, it, beforeEach, afterAll, vi } from "vitest";

import { contactInitialState, submitContactAction } from "@/app/(site)/contact/actions";

import type * as CryptoModule from "node:crypto";

const headerValues = new Map<string, string | null>();

vi.mock("next/headers", () => ({
  headers: () => ({
    get: (key: string) => headerValues.get(key) ?? null,
  }),
}));

type MockSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
  userAgent?: string | null;
  referer?: string | null;
};

const mocks = vi.hoisted(() => ({
  persistContactSubmission: vi.fn<(submission: MockSubmission) => Promise<void>>(),
  notifyContactSubmission: vi.fn<(submission: MockSubmission) => Promise<void>>(),
}));

vi.mock("@/lib/contact-sink", () => ({
  persistContactSubmission: mocks.persistContactSubmission,
  notifyContactSubmission: mocks.notifyContactSubmission,
}));

const { persistContactSubmission, notifyContactSubmission } = mocks;

const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);

vi.mock("@/lib/rate-limit", () => ({
  rateLimit: () => ({ allowed: true, remaining: 4, reset: Date.now() + 60_000 }),
}));

vi.mock("node:crypto", async () => {
  const actual: typeof CryptoModule = await vi.importActual("node:crypto");
  return {
    ...actual,
    randomUUID: () => "uuid-test",
  };
});

describe("submitContactAction", () => {
  beforeEach(() => {
    persistContactSubmission.mockReset();
    notifyContactSubmission.mockReset();
    persistContactSubmission.mockResolvedValue(undefined);
    notifyContactSubmission.mockResolvedValue(undefined);
    headerValues.set("user-agent", "Vitest");
    headerValues.set("referer", "https://example.com/pricing");
    consoleErrorSpy.mockClear();
  });

  it("persists and notifies with sanitized payload", async () => {
    const formData = new FormData();
    formData.set("name", "  <b>Jane</b>  Doe ");
    formData.set("email", "user@example.com");
    formData.set("message", "Hello <script>alert(1)</script>\n\nThanks!");
    formData.set("submittedAt", String(Date.now() - 2_000));
    formData.set("website", "");

    const result = await submitContactAction(contactInitialState, formData);

    expect(result).toEqual({
      status: "success",
      message: "Thanks for reaching out. We’ll respond shortly.",
    });

    const submission: MockSubmission | undefined =
      persistContactSubmission.mock.calls[0]?.[0];

    expect(submission).toBeDefined();
    expect(submission).toMatchObject({
      name: "Jane Doe",
      email: "user@example.com",
      userAgent: "Vitest",
      referer: "https://example.com/pricing",
    });
    expect(typeof submission?.id).toBe("string");
    expect(submission?.message).toContain("Hello alert(1)");
    expect(submission?.message).not.toContain("<");

    expect(notifyContactSubmission).toHaveBeenCalledWith(expect.any(Object));
  });

  it("returns an error when persistence fails", async () => {
    persistContactSubmission.mockRejectedValueOnce(new Error("boom"));

    const formData = new FormData();
    formData.set("name", "Jane Doe");
    formData.set("email", "user@example.com");
    formData.set("message", "Hello there, this is a fairly long message.");
    formData.set("submittedAt", String(Date.now() - 2_000));

    const result = await submitContactAction(contactInitialState, formData);

    expect(result).toEqual({
      status: "error",
      message: "Please try again later.",
    });

    expect(notifyContactSubmission).not.toHaveBeenCalled();
  });
});

afterAll(() => {
  consoleErrorSpy.mockRestore();
});
