// app/page.tsx
import HeroSection from "@/components/hero-section";
import HomeFeatureGrid from "@/components/home-feature-grid";

export default function Page() {
  return (
    <>
      <HeroSection />
      <section aria-labelledby="whatYouGet" className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="whatYouGet" className="font-display text-3xl text-brand-ink">
            What you get
          </h2>
        </div>
        <HomeFeatureGrid />
      </section>
    </>
  );
}