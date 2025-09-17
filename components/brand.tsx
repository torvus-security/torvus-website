import Link from "next/link";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link
      href="/"
      aria-label="Torvus Security home"
      className="inline-flex items-center gap-2"
    >
      <svg
        width={compact ? 16 : 18}
        height={compact ? 16 : 18}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2L22 12L12 22L2 12Z" fill="#D61F69" />
      </svg>
      <span className="font-semibold tracking-tight text-[17px] text-storm">
        Torvus <span className="font-normal">Security</span>
      </span>
    </Link>
  );
}
