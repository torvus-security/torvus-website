// app/faqs/page.tsx
export const metadata = {
  title: "FAQs — Torvus Security",
  description: "Answers to common questions about Torvus.",
};

export default function FAQs() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl text-brand-ink">
        Frequently asked <span className="text-gradient-brand">questions</span>
      </h1>

      <div className="mt-8 space-y-8">
        <details className="card p-5">
          <summary className="cursor-pointer font-medium text-brand-ink">What is Torvus?</summary>
          <p className="mt-3 text-slate-700">
            Torvus is a secure vault with a conditional-release engine. You set clear conditions; keys
            are re-wrapped to recipients only when those conditions are satisfied.
          </p>
        </details>

        <details className="card p-5">
          <summary className="cursor-pointer font-medium text-brand-ink">Can Torvus see my files?</summary>
          <p className="mt-3 text-slate-700">
            No. Files are encrypted on your device before upload (zero-knowledge). We store ciphertext
            plus minimal metadata.
          </p>
        </details>

        <details className="card p-5">
          <summary className="cursor-pointer font-medium text-brand-ink">How do recipients verify access?</summary>
          <p className="mt-3 text-slate-700">
            Recipients authenticate with MFA and (optionally) pass KYC/IDV gates. Each download is accompanied by a provenance receipt.
          </p>
        </details>
      </div>
    </div>
  );
}