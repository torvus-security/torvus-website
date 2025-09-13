// components/phone-mock.tsx

// Pure UI — no client hooks needed
export function PhoneMock() {
  return (
    <div
      aria-label="Torvus mobile mock"
      className="mx-auto w-full max-w-[360px] rounded-[28px] border border-border/70 bg-white shadow-[0_4px_12px_rgba(16,24,40,.14),0_24px_60px_-24px_rgba(16,24,40,.28)]"
    >
      {/* Status bar */}
      <div className="rounded-t-[28px] bg-gradient-to-br from-[#ff2f86] via-[#ff4fa0] to-[#a855f7] px-4 pt-4 pb-3 text-white">
        <div className="flex items-center justify-between text-[10px] opacity-90">
          <span>9:41</span>
          <span className="inline-flex items-center gap-1">
            <span className="inline-block size-1.5 rounded-full bg-white/90" />
            <span className="inline-block size-1.5 rounded-full bg-white/90" />
            <span className="inline-block size-1.5 rounded-full bg-white/90" />
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block rotate-45 size-2 rounded-[2px] bg-white shadow-sm" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Torvus</div>
              <div className="text-[10px] opacity-90">Digital Guardian</div>
            </div>
          </div>
          <span className="inline-grid size-5 place-items-center rounded-full border border-white/50">
            <span className="size-2 rounded-full bg-white/90" />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-3 sm:p-4">
        {/* Stats row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <span className="inline-block size-1.5 rounded-full bg-rose-500" />
              Vault
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-base font-semibold">24</span>
              <span className="text-[11px] text-gray-500">Files secured</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2">
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <span className="inline-block size-1.5 rounded-full bg-pink-500" />
              Check-ins
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-base font-semibold">3</span>
              <span className="text-[11px] text-gray-500">Active plans</span>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-3 rounded-xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 px-3 py-2 text-[11px] font-medium text-gray-700">
            Quick Actions
          </div>

          <button
            type="button"
            className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-800 hover:bg-rose-50/60"
          >
            <span className="inline-block size-2 rounded-[3px] bg-rose-500" />
            Upload Document
          </button>

          <div className="border-t border-gray-200" />
          <button
            type="button"
            className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
          >
            <span className="inline-block size-2 rounded-full bg-gray-500" />
            Add Recipient
          </button>
        </div>

        {/* Recent activity */}
        <div className="mt-3 rounded-xl border border-gray-200 bg-white">
          <div className="border-b border-gray-200 px-3 py-2 text-[11px] font-medium text-gray-700">
            Recent Activity
          </div>

          <div className="px-3 py-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block size-2 rounded-full bg-green-500" />
              <div>
                <div className="text-gray-800">Check-in completed</div>
                <div className="text-[11px] text-gray-500">2 hours ago</div>
              </div>
            </div>

            <div className="mt-2 flex items-start gap-2">
              <span className="mt-1 inline-block size-2 rounded-full bg-rose-500" />
              <div>
                <div className="text-gray-800">Document uploaded</div>
                <div className="text-[11px] text-gray-500">1 day ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-3 rounded-xl border border-gray-200 bg-white px-3 py-2">
          <div className="flex items-center justify-between text-[11px] text-gray-600">
            <span className="text-rose-600 font-medium">Dashboard</span>
            <span>Vault</span>
            <span>Recipients</span>
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneMock;
