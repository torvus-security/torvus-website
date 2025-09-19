declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
      identify?: (id: string, properties?: Record<string, unknown>) => void;
      pageview?: () => void;
    };
  }
}

export function trackEvent(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", event, properties ?? {});
  }

  if (window.posthog?.capture) {
    window.posthog.capture(event, properties ?? {});
  }
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", { page_path: path });
  }

  if (window.posthog?.capture) {
    window.posthog.capture("pageview", { path });
  } else if (window.posthog?.pageview) {
    window.posthog.pageview();
  }
}
