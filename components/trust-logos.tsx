// components/trust-logos.tsx

export default function TrustLogos() {
  // Placeholder logo slots – replace with real SVGs/next/image when ready
  const LOGOS = ["Aegis", "Monarch", "Northwind", "Contour", "Helios"];

  return (
    <section aria-labelledby="trust-heading" className="mt-8 md:mt-10 lg:mt-12">
      <h2 id="trust-heading" className="sr-only">
        Trusted by
      </h2>
      <div className="rounded-2xl border border-black/10 bg-white/60 p-4 ring-1 ring-black/5 backdrop-blur dark:border-white/10 dark:bg-neutral-900/40 dark:ring-white/10">
        <div className="grid grid-cols-2 items-center justify-items-center gap-3 sm:grid-cols-3 md:grid-cols-5">
          {LOGOS.map((name) => (
            <div
              key={name}
              className="flex h-10 w-full items-center justify-center rounded-md border border-black/10 bg-white/70 px-3 text-xs font-medium text-neutral-500 ring-1 ring-black/5 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:ring-white/10"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
