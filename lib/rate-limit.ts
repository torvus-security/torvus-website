import { createHash, createHmac } from "node:crypto";

import { cookies, headers } from "next/headers";

const SECRET = process.env.RATE_LIMIT_SECRET ?? "torvus-dev-secret";

type RateLimitOptions = {
  key: string;
  limit: number;
  interval: number; // milliseconds
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  reset: number;
};

function sign(payload: string, scope: string): string {
  return createHmac("sha256", `${SECRET}:${scope}`).update(payload).digest("base64url");
}

function getClientHash(): string {
  const header = headers();
  const ip =
    header.get("x-forwarded-for")?.split(" ")[0].split(",")[0].trim() ??
    header.get("x-real-ip") ??
    "unknown";
  return createHash("sha256").update(ip).digest("hex");
}

export function rateLimit({ key, limit, interval }: RateLimitOptions): RateLimitResult {
  const cookieName = `torvus_rl_${key}`;
  const store = cookies();
  const now = Date.now();
  const clientHash = getClientHash();

  const existing = store.get(cookieName)?.value;
  let windowStart = now;
  let count = 0;

  if (existing) {
    const [ts, counter, signature] = existing.split(":");
    const payload = `${ts}:${counter}:${clientHash}`;
    const expected = sign(payload, key);

    if (expected === signature) {
      windowStart = Number.parseInt(ts, 10);
      if (Number.isNaN(windowStart)) {
        windowStart = now;
      }
      if (now - windowStart < interval) {
        count = Number.parseInt(counter, 10) || 0;
      } else {
        windowStart = now;
        count = 0;
      }
    }
  }

  const reset = windowStart + interval;
  const allowed = count < limit;
  const nextCount = allowed ? count + 1 : count;
  const payload = `${windowStart}:${nextCount}:${clientHash}`;
  const signature = sign(payload, key);
  const value = `${windowStart}:${nextCount}:${signature}`;

  store.set(cookieName, value, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    path: "/",
    maxAge: Math.ceil(interval / 1000),
  });

  return {
    allowed,
    remaining: Math.max(0, limit - nextCount),
    reset,
  };
}
