// components/header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2">
          {/* Sharper diamond (tiny radius) */}
          <span
            aria-hidden
            className="h-3.5 w-3.5 rotate-45 rounded-[1px] bg-gradient-to-br from-rose-500 via-fuchsia-500 to-pink-500 shadow-sm"
          />
          <span className="font-semibold tracking-tight">Torvus Security</span>
        </Link>

        {/* Simple hamburger (lighter strokes) */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          className="relative h-9 w-9 rounded-xl border border-border/70 transition hover:bg-muted/60"
        >
          <span className="absolute left-2.5 right-2.5 top-[10px] h-[1.5px] rounded bg-foreground/50" />
          <span className="absolute left-2.5 right-2.5 top-1/2 -translate-y-1/2 h-[1.5px] rounded bg-foreground/50" />
          <span className="absolute bottom-[10px] left-2.5 right-2.5 h-[1.5px] rounded bg-foreground/50" />
          <span className="sr-only">{open ? "Close" : "Open"} menu</span>
        </button>
      </div>
    </header>
  );
}
