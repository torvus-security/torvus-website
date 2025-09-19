"use client";

import { useEffect } from "react";

import { trackEvent, trackPageView } from "@/lib/analytics";

type AnalyticsEventProps = {
  event: string;
  properties?: Record<string, unknown>;
  pagePath?: string;
};

export function AnalyticsEvent({ event, properties, pagePath }: AnalyticsEventProps) {
  useEffect(() => {
    trackEvent(event, properties);
    if (pagePath) {
      trackPageView(pagePath);
    }
  }, [event, pagePath, properties]);

  return null;
}
