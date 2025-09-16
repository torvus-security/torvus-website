import { loadLegalDocument } from "@/lib/mdx";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "Terms",
  description:
    "Terms of use for accessing the Torvus Security services and private beta.",
  path: "/legal/terms",
});

export default async function TermsPage() {
  const { Content, frontmatter } = await loadLegalDocument("terms");
  const updated = frontmatter?.updated as string | undefined;

  return (
    <div className="pb-24">
      <article className="container space-y-6 py-16">
        <header className="space-y-2">
          <p className="text-small font-semibold uppercase tracking-[0.18em] text-storm/70">
            Legal
          </p>
          <h1 className="text-display font-semibold text-storm">
            {frontmatter?.title ?? "Terms of Use"}
          </h1>
          {updated ? (
            <p className="text-small text-thunder/70">Last updated {updated}</p>
          ) : null}
        </header>
        <div className="prose prose-slate max-w-none">
          <Content />
        </div>
      </article>
    </div>
  );
}
