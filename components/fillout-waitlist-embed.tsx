"use client";

import { useEffect, useRef, useState } from "react";

import { trackEvent } from "@/lib/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const BASE_URL = "https://forms.fillout.com/t/eAbjuSPKYNus";
const FILL_OUT_ORIGIN = new URL(BASE_URL).origin;

type FilloutWaitlistEmbedProps = {
  className?: string;
};

export function FilloutWaitlistEmbed({ className }: FilloutWaitlistEmbedProps) {
  const [src, setSrc] = useState(BASE_URL);
  const submissionTracked = useRef(false);

  const trackSubmission = () => {
    if (submissionTracked.current) {
      return;
    }
    submissionTracked.current = true;
    trackEvent("waitlist_submit", { source: "fillout" });
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    let isMounted = true;

    const updateClientId = () => {
      if (!GA_ID || typeof window.gtag !== "function") {
        return false;
      }

      window.gtag("get", GA_ID, "client_id", (clientId: string) => {
        if (!isMounted) {
          return;
        }

        if (!clientId) {
          setSrc(BASE_URL);
          return;
        }

        const url = new URL(BASE_URL);
        url.searchParams.set("cid", clientId);
        setSrc(url.toString());
        if (url.pathname.toLowerCase().includes("thank")) {
          trackSubmission();
        }
      });

      return true;
    };

    if (updateClientId()) {
      return () => {
        isMounted = false;
      };
    }

    const interval = window.setInterval(() => {
      if (updateClientId()) {
        window.clearInterval(interval);
      }
    }, 1200);

    return () => {
      isMounted = false;
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (submissionTracked.current) {
      return;
    }
    if (src.toLowerCase().includes("thank")) {
      trackSubmission();
    }
  }, [src]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleMessage = (event: MessageEvent) => {
      if (!isFilloutOrigin(event.origin)) {
        return;
      }
      if (isSubmissionMessage(event.data)) {
        trackSubmission();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      src={src}
      title="Torvus waitlist form"
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
      allow="camera; microphone; geolocation"
    />
  );
}

function isFilloutOrigin(origin: string) {
  return origin === FILL_OUT_ORIGIN || origin.endsWith(".fillout.com");
}

function isSubmissionMessage(data: unknown) {
  if (!data) return false;
  if (typeof data === "string") {
    const lower = data.toLowerCase();
    return (
      lower.includes("thank") || lower.includes("success") || lower.includes("submitted")
    );
  }
  if (typeof data === "object") {
    const payload = data as Record<string, unknown>;
    const type = typeof payload.type === "string" ? payload.type.toLowerCase() : "";
    const name =
      typeof payload.eventName === "string" ? payload.eventName.toLowerCase() : "";
    const status = typeof payload.status === "string" ? payload.status.toLowerCase() : "";
    if (type.includes("submit") || type.includes("thank")) return true;
    if (name.includes("submit")) return true;
    if (status.includes("success") || status.includes("submitted")) return true;
    if ("submissionId" in payload) return true;
  }
  return false;
}
