// components/feature-modal.tsx
"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";

type FeatureModalProps = {
  open: boolean;
  title: string;
  icon?: ReactNode;
  onClose: () => void;
  children: ReactNode;
};

export default function FeatureModal({
  open,
  title,
  icon,
  onClose,
  children,
}: FeatureModalProps) {
  if (!open) return null;

  function onBackdropKey(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      aria-modal="true"
      role="dialog"
      onKeyDown={onBackdropKey}
    >
      {/* Backdrop */}
      <button
        aria-label="Close details"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg rounded-2xl bg-background text-foreground shadow-2xl ring-1 ring-black/10">
        <div className="flex items-start gap-3 p-5 md:p-6">
          {icon}
          <h3 className="text-xl font-semibold leading-snug">{title}</h3>
          <button
            onClick={onClose}
            className="ml-auto rounded-full p-2 text-muted-foreground hover:bg-muted/70 hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

/* Ensure TS treats this file as a module even if someone removes the default export later. */
export {};
