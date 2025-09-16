// components/feature-modal.tsx
"use client";
import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

type Props = {
  open: boolean;
  title: string;
  icon?: ReactNode;
  onClose: () => void;
  children: ReactNode;
};

export default function FeatureModal({ open, title, icon, onClose, children }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop z-40" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="fixed z-50 inset-0 grid place-items-center p-4"
      >
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {icon}
              <h3 className="font-display text-xl text-brand-ink">{title}</h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-lg border border-slate-300 p-2 hover:bg-slate-50"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 text-slate-700">{children}</div>
        </div>
      </div>
    </>
  );
}