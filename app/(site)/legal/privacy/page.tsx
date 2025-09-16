import { loadLegalDocument } from "@/lib/mdx";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "Privacy",
  description:
    "Privacy notice covering how Torvus handles personal information and encrypted data.",
  path: "/legal/privacy",
});

export default async function PrivacyPage() {
  const { Content, frontmatter } = await loadLegalDocument("privacy");
  const updated = frontmatter?.updated as string | undefined;

  return (
    <div className="pb-24">
      <article className="container space-y-6 py-16">
        <header className="space-y-2">
          <p className="text-small font-semibold uppercase tracking-[0.18em] text-storm/70">
            Legal
          </p>
          <h1 className="text-display font-semibold text-storm">
            {frontmatter?.title ?? "Privacy Notice"}
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
