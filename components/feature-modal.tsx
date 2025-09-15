"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

export type FeatureModalProps = {
  open: boolean;
  title: string;
  icon?: ReactNode;
  onClose: () => void;
  children: ReactNode;
};

export default function FeatureModal({ open, title, icon, onClose, children }: FeatureModalProps) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 transition-opacity",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div className="v0-modal-overlay absolute inset-0" onClick={onClose} />
      <div
        className={clsx(
          "absolute inset-0 flex items-center justify-center p-4",
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        )}
      >
        <div className="v0-modal-panel w-full max-w-xl rounded-2xl border border-black/10 shadow-xl">
          <div className="flex items-center gap-3 border-b border-black/5 p-4">
            {icon ? <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5">{icon}</span> : null}
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="ml-auto rounded-md p-2 hover:bg-black/5 pressable"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-5 text-[15.5px] leading-7 text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}