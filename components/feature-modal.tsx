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

export default function FeatureModal({
  open,
  title,
  icon,
  onClose,
  children,
}: Props) {
  if (!open) return null;

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm"
      />
      <div className="relative mx-auto mt-24 w-[min(92vw,680px)] rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="flex items-start gap-3 p-5 sm:p-6">
          {icon && (
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 text-slate-600">
              {icon}
            </span>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <div className="mt-2 text-[15px] leading-6 text-slate-600">
              {children}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}