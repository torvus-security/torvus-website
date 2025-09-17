import fs from "node:fs/promises";
import path from "node:path";

import NextLink from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { createElement, type ComponentProps } from "react";
import remarkGfm from "remark-gfm";

const LEGAL_DIR = path.join(process.cwd(), "content/legal");

type LegalFrontmatter = {
  title?: string;
  updated?: string;
};

const mdxComponents = {
  Link: (props: ComponentProps<typeof NextLink>) => createElement(NextLink, props),
  a: ({ href = "", ...props }: ComponentProps<"a">) => {
    if (href.startsWith("http")) {
      return createElement("a", {
        href,
        rel: props.rel ?? "noreferrer",
        target: props.target ?? "_blank",
        ...props,
      });
    }

    return createElement(NextLink, { href, ...props });
  },
};

export async function loadLegalDocument(slug: string) {
  try {
    const filePath = path.join(LEGAL_DIR, `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf8");

    const { frontmatter, content } = await compileMDX<LegalFrontmatter>({
      source,
      components: mdxComponents,
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
