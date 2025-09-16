import Link from "next/link";

export const metadata = {
  title: "Solutions — Torvus Security",
  description: "Pick the path that matches how you’ll use Torvus.",
};

type CardProps = {
  title: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  tint: string;
  icon: React.ReactNode;
  intro: string;
};

function Card({ title, bullets, ctaText, ctaHref, tint, icon, intro }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 hover-card">
      <div className="mb-4 flex items-center gap-3">
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ${tint}`}>{icon}</span>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mb-4 text-slate-600">{intro}</p>
      <ul className="mb-4 list-disc space-y-1 pl-5 text-slate-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <Link href={ctaHref} className="rounded-lg border px-3 py-2 font-medium text-slate-700 hover:bg-slate-50">
        {ctaText}
      </Link>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <section className="py-12 text-center">
        <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500">SOLUTIONS</p>
        <h1 className="heading-tight text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Built for <span className="grad-text-brand">real work.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Pick the path that matches how you’ll use Torvus.
        </p>
      </section>

      <section className="grid gap-6 pb-24 sm:grid-cols-2">
        <Card
          title="Personal estates & legacy"
          intro="Store wills, instructions, and sensitive documents with release rules for the right moment."
          bullets={[
            "Time-based and event-based releases",
            "Watermarked views for untrusted recipients",
            "Tamper-evident timeline",
          ]}
          ctaText="Sign up for updates"
          ctaHref="/signup"
          tint="bg-rose-50 ring-rose-200 text-rose-600"
          icon={<span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />}
        />
        <Card
          title="Private archives"
          intro="Collect records, photos, and notes you want retained, but only revealed under clear conditions."
          bullets={["Encrypted vault", "Revocation at any time", "Access logs"]}
          ctaText="Get in touch"
          ctaHref="/contact"
          tint="bg-rose-50 ring-rose-200 text-rose-600"
          icon={<span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />}
        />
      </section>
    </main>
  );
}