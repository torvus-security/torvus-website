"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  open: boolean;
  title: string;
  icon?: React.ReactNode;
  onClose: () => void;
  children: React.ReactNode;
};

export default function FeatureModal({ open, title, icon, onClose, children }: Props) {
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* backdrop */}
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={onClose}
      />
      {/* dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="pointer-events-auto absolute inset-x-4 top-[10vh] mx-auto max-w-xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 md:inset-x-auto"
      >
        <div className="flex items-start gap-3 p-5">
          {icon ? (
            <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 bg-slate-50">
              {icon}
            </span>
          ) : null}
          <h3 className="text-xl font-semibold leading-6 text-slate-900">{title}</h3>
          <button
            onClick={onClose}
            className="ml-auto rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-5 pb-5 text-slate-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}