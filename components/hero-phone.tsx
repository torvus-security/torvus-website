// components/hero-phone.tsx
import React from "react";

export default function HeroPhone() {
  return (
    <div className="relative">
      {/* Back plate behind the phone */}
      <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-white/70 to-rose-100/50 shadow-[0_40px_120px_-20px_rgba(2,6,23,0.25)] ring-1 ring-black/5 dark:from-white/10 dark:to-rose-400/10" />

      {/* Phone */}
      <div className="relative mx-auto w-[360px] sm:w-[380px] md:w-[420px] rounded-[28px] border border-black/10 bg-white shadow-[0_10px_40px_rgba(2,6,23,0.15)] dark:bg-neutral-900">
        {/* Status / header */}
        <div className="rounded-t-[28px] bg-gradient-to-br from-rose-500 to-fuchsia-600 p-4 text-white">
          <div className="flex items-center justify-between text-xs/none opacity-90">
            <span>9:41</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/90" />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <span className="inline-block h-3 w-3 rotate-45 rounded-sm bg-white/90" />
            <div>
              <div className="font-semibold">Torvus</div>
              <div className="text-xs/5 opacity-80">Digital Guardian</div>
            </div>
            <div className="ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white/70" />
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 p-4">
          <div className="rounded-xl border border-black/10 bg-white/70 p-3 text-sm shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
              <span className="inline-block h-2 w-2 rounded-[2px] bg-rose-600" />
              <span>Vault</span>
            </div>
            <div className="mt-2 text-2xl font-semibold">24</div>
            <div className="text-xs text-neutral-500">Files secured</div>
          </div>
          <div className="rounded-xl border border-black/10 bg-white/70 p-3 text-sm shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
              <span className="inline-block h-2 w-2 rounded-full border-2 border-rose-600" />
              <span>Check-ins</span>
            </div>
            <div className="mt-2 text-2xl font-semibold">3</div>
            <div className="text-xs text-neutral-500">Active plans</div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="px-4">
          <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
            Quick Actions
          </div>

          <div className="mt-2 overflow-hidden rounded-xl border border-black/10 bg-white/70 shadow-sm dark:border-white/10 dark:bg-white/5">
            <button className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-rose-50/80 dark:hover:bg-rose-400/10">
              <span className="inline-block h-2 w-2 rounded-[3px] bg-rose-600" />
              <span className="text-sm">Upload Document</span>
            </button>
            <div className="h-px bg-neutral-200/70 dark:bg-white/10" />
            <button className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-white/10">
              <span className="inline-block h-2 w-2 rounded-full bg-neutral-400" />
              <span className="text-sm">Add Recipient</span>
            </button>
          </div>
        </div>

        {/* Recent activity */}
        <div className="p-4">
          <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
            Recent Activity
          </div>

          <div className="mt-2 space-y-2 rounded-xl border border-black/10 bg-white/70 p-3 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <div>
                <div>Check-in completed</div>
                <div className="text-xs text-neutral-500">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-500" />
              <div>
                <div>Document uploaded</div>
                <div className="text-xs text-neutral-500">1 day ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="rounded-b-[28px] border-t border-black/10 bg-white/80 px-4 py-2 text-xs text-neutral-500 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <span className="mb-1 inline-block h-2 w-2 rounded-[3px] bg-rose-600" />
              <span className="text-[11px] font-medium text-rose-600">Dashboard</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-1 inline-block h-2 w-2 rounded-full bg-neutral-400" />
              <span className="text-[11px]">Vault</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-1 inline-block h-2 w-2 rounded-full bg-neutral-400" />
              <span className="text-[11px]">Recipients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-1 inline-block h-2 w-2 rounded-full bg-neutral-400" />
              <span className="text-[11px]">Settings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-16 top-6 h-24 w-24 rounded-full bg-fuchsia-400/30 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 bottom-10 h-20 w-20 rounded-full bg-teal-400/30 blur-2xl" />
    </div>
  );
}
