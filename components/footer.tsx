import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 flex items-center justify-between text-sm text-muted-foreground">
        <p>© 2025 Torvus Security</p>
        <div className="flex items-center gap-6">
          <Link href="/legal/terms" className="hover:text-foreground">Terms</Link>
          <Link href="/legal/privacy" className="hover:text-foreground">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
