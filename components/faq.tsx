"use client";

import { useId, useState } from "react";

import { cn } from "@/lib/utils";

import type { ReactNode } from "react";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const groupId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      className={cn(
        "divide-y divide-storm/10 rounded-2xl border border-storm/12 bg-white/96",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${groupId}-panel-${index}`;
        const headingId = `${groupId}-heading-${index}`;

        return (
          <div key={item.question}>
            <h3 id={headingId}>
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left text-[1rem] font-semibold text-storm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex h-6 w-6 items-center justify-center rounded-full border border-storm/15 text-storm transition-transform",
                    isOpen ? "rotate-45" : "rotate-0",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className="px-5 pb-5 text-[0.95rem] text-storm/80"
            >
              <div className="prose prose-sm max-w-none text-thunder prose-a:text-lapis">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
