import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Torvus Security</p>
        <nav className="flex items-center gap-6">
          <Link href="/terms" className="transition hover:text-foreground">Terms</Link>
          <Link href="/privacy" className="transition hover:text-foreground">Privacy</Link>
          {/* (No Pricing link) */}
        </nav>
      </div>
    </footer>
  );
}
