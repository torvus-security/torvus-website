import { cn } from "@/lib/utils";

import type { ReactNode } from "react";

const pastelMap: Record<"cranberry" | "lagoon" | "lapis", string> = {
  cranberry: "bg-pastel-cranberry text-cranberry",
  lagoon: "bg-pastel-lagoon text-lagoon",
  lapis: "bg-pastel-lapis text-lapis",
};

type IconChipProps = {
  tone?: "cranberry" | "lagoon" | "lapis";
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function IconChip({ tone = "lagoon", icon, children, className }: IconChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.95rem] font-semibold",
        pastelMap[tone],
        className,
      )}
    >
      {icon ? (
        <span
          className="inline-flex h-4 w-4 items-center justify-center"
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
    </span>
  );
}
