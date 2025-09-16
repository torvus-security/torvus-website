// components/phone-mock.tsx
// Self-contained mobile mock (no external image required)

export function PhoneMock() {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-[560px] w-[302px] sm:h-[640px] sm:w-[342px] rounded-[32px] border border-slate-200/70 bg-white/80 shadow-[inset_0_0_0_8px_rgba(255,255,255,.92),0_10px_30px_rgba(2,6,23,.08)]"
    >
      <div className="absolute inset-[10px] rounded-[24px] border border-slate-100/60 bg-gradient-to-b from-cyan-50 to-emerald-50" />
      {/* speaker & pill */}
      <div className="absolute top-3 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-slate-200/80" />
      <div className="absolute bottom-3 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-slate-200/70" />
    </div>
  );
}