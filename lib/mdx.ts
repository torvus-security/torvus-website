import fs from "node:fs/promises";
import path from "node:path";

import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const LEGAL_DIR = path.join(process.cwd(), "content/legal");

type LegalFrontmatter = {
  title?: string;
  updated?: string;
};

export async function loadLegalDocument(slug: string) {
  try {
    const filePath = path.join(LEGAL_DIR, `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf8");

    const { frontmatter, content } = await compileMDX<LegalFrontmatter>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    const safeFrontmatter: LegalFrontmatter = frontmatter ?? {};

    return {
      frontmatter: safeFrontmatter,
      content,
    } as const;
  } catch (error) {
    console.error(`Failed to load MDX for slug ${slug}`, error);
    notFound();
  }
}
