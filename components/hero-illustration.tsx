"use client"

export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-lg border border-rose-100">
        {/* Central vault icon */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-4xl text-white font-bold">◆</div>
            </div>
            {/* Security rings */}
            <div className="absolute -inset-4 border-2 border-rose-200 rounded-full animate-pulse"></div>
            <div className="absolute -inset-8 border border-rose-100 rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Security features */}
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center space-y-2">
              <div className="surface--light w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-rose-500 text-lg">■</span>
              </div>
              <span className="text-xs font-medium text-gray-600">Secure</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="surface--light w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-rose-500 text-lg">◐</span>
              </div>
              <span className="text-xs font-medium text-gray-600">Monitor</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="surface--light w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-rose-500 text-lg">●</span>
              </div>
              <span className="text-xs font-medium text-gray-600">Release</span>
            </div>
          </div>

          {/* Conditional release indicator */}
          <div className="surface--light rounded-xl p-4 w-full shadow-sm border border-rose-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Status</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating security elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-15 animate-bounce delay-1000"></div>
      </div>
    </div>
  )
}
