"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

/**
 * Less transparency for readability; keyboard + backdrop-close friendly.
 */
export default function FeatureModal({ open, onClose, title, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Darker overlay for contrast */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="w-full max-w-xl overflow-hidden rounded-2xl bg-white text-zinc-900 shadow-2xl ring-1 ring-black/5 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-white/10"
        >
          <div className="flex items-center justify-between border-b border-zinc-200/70 px-5 py-4 dark:border-white/10">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="rounded-md p-2 hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-5 py-4 leading-relaxed text-[0.985rem]">{children}</div>
        </div>
      </div>
    </div>
  );
}
