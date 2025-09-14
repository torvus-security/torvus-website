// components/section-heading.tsx
// Server component (no hooks) that renders an optional eyebrow,
// a single H2 with a gradient-highlighted substring, and an optional subtext.

type Props = {
  label?: string;           // small eyebrow above the heading
  title: string;            // full heading text
  highlight?: string;       // substring of `title` to gradient-highlight (case-insensitive)
  subtext?: string;         // short paragraph under the heading
  align?: "left" | "center";
  className?: string;
};

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function renderWithHighlight(title: string, highlight?: string) {
  if (!highlight) return title;
  const i = title.toLowerCase().indexOf(highlight.toLowerCase());
  if (i < 0) return title;

  const before = title.slice(0, i);
  const hit = title.slice(i, i + highlight.length);
  const after = title.slice(i + highlight.length);

  return (
    <>
      {before}
      <Highlight>{hit}</Highlight>
      {after}
    </>
  );
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtext,
  align = "center",
  className = "",
}: Props) {
  const base =
    "mx-auto max-w-4xl " + (align === "center" ? "text-center" : "text-left");
  return (
    <header className={`${base} ${className}`}>
      {label && (
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          {label}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground">
        {renderWithHighlight(title, highlight)}
      </h2>
      {subtext && (
        <p className="mt-4 text-lg text-muted-foreground">{subtext}</p>
      )}
    </header>
  );
}
