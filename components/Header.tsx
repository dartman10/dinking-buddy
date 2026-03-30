import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header className="bg-brand-green text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-3xl tracking-wider text-brand-yellow hover:opacity-90 transition-opacity"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex gap-6 text-sm font-semibold uppercase tracking-widest">
          <Link
            href="/shop"
            className="hover:text-brand-yellow transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="hover:text-brand-yellow transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-brand-yellow transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
