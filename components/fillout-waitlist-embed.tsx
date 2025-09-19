"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const BASE_URL = "https://forms.fillout.com/t/eAbjuSPKYNus";

type FilloutWaitlistEmbedProps = {
  className?: string;
};

export function FilloutWaitlistEmbed({ className }: FilloutWaitlistEmbedProps) {
  const [src, setSrc] = useState(BASE_URL);

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
