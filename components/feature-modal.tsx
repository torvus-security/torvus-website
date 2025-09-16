"use client";

import * as React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function FeatureModal({ open, onClose, title, icon, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-strong">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="relative z-10 mx-auto max-w-xl p-4 sm:p-6">
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="flex items-start gap-3 p-5">
            {icon ? <div className="mt-1">{icon}</div> : null}
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <button
              onClick={onClose}
              className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="px-5 pb-5 text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}