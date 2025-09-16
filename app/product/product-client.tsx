"use client";

import FeatureGrid from "@/components/feature-grid";

export default function ProductClient() {
  return (
    <section className="mx-auto mt-10 max-w-6xl">
      {/* Only the grid/sections live here now (no duplicate H1). */}
      <FeatureGrid />
    </section>
  );
}