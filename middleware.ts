import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const JSON_LD_HASH = "sha256-13Mu0NUzfvJHyN7KVhqxHjBb9z4aNRJDjxeJ4sTXgD8=";
const DEFAULT_POSTHOG_HOST = "https://us.i.posthog.com";
const DEVICE_PERMISSION_ORIGINS = ['"https://forms.fillout.com"', '"https://*.fillout.com"'];

function getPosthogOrigin() {
  const rawHost = process.env.POSTHOG_INGESTION_HOST ?? DEFAULT_POSTHOG_HOST;

  try {
    return new URL(rawHost).origin;
  } catch {
    return new URL(DEFAULT_POSTHOG_HOST).origin;
  }
}

export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID().replace(/-/g, "");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-torvus-csp-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (process.env.NODE_ENV !== "production") {
    const pageviews =
      (globalThis as unknown as { __torvusPageviews?: Map<string, number> })
        .__torvusPageviews ?? new Map<string, number>();
    const path = request.nextUrl.pathname;
    const total = (pageviews.get(path) ?? 0) + 1;
    pageviews.set(path, total);
    (
      globalThis as unknown as { __torvusPageviews: Map<string, number> }
    ).__torvusPageviews = pageviews;
    if (process.env.NODE_ENV === "development") {
      console.info(`[analytics] ${path} -> ${total}`);
    }
  }

  const posthogOrigin = getPosthogOrigin();

  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    JSON_LD_HASH,
    "https://cdn-cookieyes.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://www.clarity.ms",
    posthogOrigin,
  ];

  const connectSrc = [
    "'self'",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    "https://www.clarity.ms",
    "https://c.bing.com",
    "https://log.cookieyes.com",
    posthogOrigin,
  ];

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc.join(" ")}`,
    "style-src 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    `connect-src ${connectSrc.join(" ")}`,
    "frame-src 'self' https://*.fillout.com",
    "frame-ancestors 'none'",
    "base-uri 'none'",
    "form-action 'self'",
  ].join("; ");

  const permissionsPolicy = [
    `camera=(self ${DEVICE_PERMISSION_ORIGINS.join(" ")})`,
    `microphone=(self ${DEVICE_PERMISSION_ORIGINS.join(" ")})`,
    `geolocation=(self ${DEVICE_PERMISSION_ORIGINS.join(" ")})`,
  ].join(", ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
  );
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", permissionsPolicy);
  response.headers.set("X-Frame-Options", "DENY");

  return response;
}

export const config = {
  matcher: ["/((?!api/og|_next/static|_next/image|favicon.ico|icon.svg).*)"],
};
