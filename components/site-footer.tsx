// components/site-footer.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Torvus Security</p>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <Link href="/terms" className="hover:text-slate-900">Terms</Link>
            <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/security" className="hover:text-slate-900">Security</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}