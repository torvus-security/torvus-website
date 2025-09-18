"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const BASE_URL = "https://form.fillout.com/t/eAbjuSPKYNus";

type FilloutWaitlistEmbedProps = {
  className?: string;
};

export function FilloutWaitlistEmbed({ className }: FilloutWaitlistEmbedProps) {
  const [src, setSrc] = useState(BASE_URL);

  useEffect(() => {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

    if (typeof window === "undefined") {
      return;
    }

    if (window.gtag && GA_ID) {
      window.gtag("get", GA_ID, "client_id", (clientId: string) => {
        if (!clientId) {
          setSrc(BASE_URL);
          return;
        }

        const url = new URL(BASE_URL);
        url.searchParams.set("cid", clientId);
        setSrc(url.toString());
      });
    } else {
      setSrc(BASE_URL);
    }
  }, []);

  return (
    <iframe
      src={src}
      title="Torvus waitlist form"
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      allow="camera; microphone"
    />
  );
}
