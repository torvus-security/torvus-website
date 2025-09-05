"use client"

export function MobileAppMockup() {
  return (
    <div className="relative mx-auto w-[280px] aspect-[3/5] rounded-2xl p-1.5 border border-[var(--color-border)] bg-white shadow-md">
      {/* Phone frame */}
      <div className="surface--light rounded-xl overflow-hidden relative">
        {/* Screen container */}
        <div className="w-full h-full bg-white">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm">
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 surface--light/80 rounded-sm"></div>
              <div className="w-6 h-3 surface--light/80 rounded-sm"></div>
            </div>
          </div>

          {/* App header */}
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-2xl">◆</div>
                <div>
                  <h1 className="brand">Torvus</h1>
                  <p className="text-rose-100 text-xs">Digital Guardian</p>
                </div>
              </div>
              <div className="w-6 h-6 flex items-center justify-center text-lg">○</div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-3 space-y-3 surface--muted">
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="surface--light rounded-xl p-2 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 flex items-center justify-center text-rose-500 text-sm">■</div>
                  <span className="text-xs font-medium text-gray-600">Vault</span>
                </div>
                <p className="text-base font-bold text-gray-900">24</p>
                <p className="text-xs text-gray-500">Files secured</p>
              </div>
              <div className="surface--light rounded-xl p-2 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 flex items-center justify-center text-pink-500 text-sm">◐</div>
                  <span className="text-xs font-medium text-gray-600">Check-ins</span>
                </div>
                <p className="text-base font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-500">Active plans</p>
              </div>
            </div>

            {/* Quick actions */}
            <div className="surface--light rounded-xl p-3 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Quick Actions</h3>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100">
                  <div className="w-4 h-4 flex items-center justify-center text-rose-600 text-sm">■</div>
                  <span className="text-sm font-medium text-gray-700">Upload Document</span>
                </button>
                <button className="w-full flex items-center gap-3 p-2 rounded-lg bg-gray-50 border border-gray-100">
                  <div className="w-4 h-4 flex items-center justify-center text-gray-600 text-sm">●</div>
                  <span className="text-sm font-medium text-gray-700">Add Recipient</span>
                </button>
              </div>
            </div>

            {/* Recent activity */}
            <div className="surface--light rounded-xl p-3 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Recent Activity</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-700">Check-in completed</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-700">Document uploaded</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 surface--light border-t border-gray-200 px-4 py-2">
            <div className="flex justify-around">
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 flex items-center justify-center text-rose-500">◆</div>
                <span className="text-xs text-rose-500 font-medium">Dashboard</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 flex items-center justify-center text-gray-400">■</div>
                <span className="text-xs text-gray-400">Vault</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 flex items-center justify-center text-gray-400">●</div>
                <span className="text-xs text-gray-400">Recipients</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 flex items-center justify-center text-gray-400">▲</div>
                <span className="text-xs text-gray-400">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full opacity-15 bg-gradient-to-tr from-[var(--color-cranberry)] to-[var(--color-lapis)]" />
      <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-15 bg-gradient-to-br from-[var(--color-cranberry)] to-[var(--color-lapis)]" />
    </div>
  )
}
