// components/site-footer.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Torvus Security</p>
        <nav className="flex gap-6 text-sm">
          <Link href="/terms" className="text-slate-500 hover:text-slate-700">Terms</Link>
          <Link href="/privacy" className="text-slate-500 hover:text-slate-700">Privacy</Link>
          <Link href="/security" className="text-slate-500 hover:text-slate-700">Security</Link>
        </nav>
      </div>
    </footer>
  );
}