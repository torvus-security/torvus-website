"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  /** Optional leading icon element (e.g. a colored circle with an icon) */
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function FeatureModal({
  open,
  onClose,
  title,
  icon,
  children,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Close when clicking outside the panel
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Solid overlay so the content is readable */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-zinc-900"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-rose-400 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-zinc-200"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-3 flex items-center gap-3">
          {icon ? <span className="shrink-0">{icon}</span> : null}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          {children}
        </div>
      </div>
    </div>
  );
}