// components/framed-panel.tsx
import { ReactNode } from "react";

export default function FramedPanel({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur md:p-8 lg:p-10 dark:border-white/10 dark:bg-neutral-900/60 dark:ring-white/10">
      {/* subtle inset outline */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/40 dark:ring-white/5" />
      {children}
    </div>
  );
}
