"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

/** Skinnier frame, graceful fallback if image is missing. */
type Props = {
  className?: string;
  /** Optional. If omitted or fails to load, we show a soft gradient. */
  src?: string;
  alt?: string;
};

export default function PhoneMock({ className, src = "/phone-hero.png", alt = "Torvus app preview" }: Props) {
  const [broken, setBroken] = useState(false);

  return (
    <div
      className={clsx(
        "relative mx-auto rounded-[36px] border border-black/10 bg-white shadow-sm",
        "h-[560px] w-[280px] sm:h-[620px] sm:w-[310px] md:h-[680px] md:w-[340px]", // slimmer proportions
        "before:absolute before:left-1/2 before:top-3 before:h-1.5 before:w-24 before:-translate-x-1/2 before:rounded-full before:bg-black/10",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-[10px] overflow-hidden rounded-[24px] bg-white">
        {!broken && src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 280px, 340px"
            className="object-cover"
            onError={() => setBroken(true)}
            priority
          />
        ) : (
          // Fallback: subtle brand gradient panel
          <div className="h-full w-full bg-[radial-gradient(1200px_600px_at_80%_0%,#dbeafe,transparent_60%),linear-gradient(90deg,var(--brand-cyan),var(--brand-emerald))] opacity-[.18]" />
        )}
      </div>
    </div>
  );
}