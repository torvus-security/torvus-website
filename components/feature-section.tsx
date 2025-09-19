import { SectionIntro } from "@/components/section-intro";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { ReactNode } from "react";

type FeatureItem = {
  title: string;
  description: string;
  icon?: ReactNode;
  bullets?: string[];
};

type FeatureSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  columns?: 1 | 2 | 3;
  className?: string;
  items: FeatureItem[];
};

export function FeatureSection({
  eyebrow,
  title,
  description,
  align = "start",
  columns = 2,
  className,
  items,
}: FeatureSectionProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <section className={cn("py-[calc(var(--section-pt)*0.75)]", className)}>
      <div className="container space-y-10">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
        />
        <div className={cn("grid gap-6", gridClass)}>
          {items.map((item) => (
            <Card
              key={item.title}
              className="flex h-full flex-col gap-4 border-storm/12 bg-white/96 p-6 shadow-[0_16px_36px_rgba(11,18,32,0.08)]"
            >
              {item.icon ? (
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pastel-lapis text-lapis">
                  {item.icon}
                </div>
              ) : null}
              <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-h4 font-semibold text-storm">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              {item.bullets?.length ? (
                <ul className="mt-1 space-y-2 text-[0.95rem] text-thunder">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span
                        className="mt-[6px] inline-flex h-2.5 w-2.5 rounded-full bg-lagoon/70"
                        aria-hidden="true"
                      />
                      <span className="flex-1 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
