import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Page Not Found – ${siteConfig.name}`,
};

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="font-display text-[10rem] leading-none text-brand-green mb-4">
        404
      </p>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        {siteConfig.notFound.headline}
      </h1>
      <p className="text-gray-500 mb-10">
        {siteConfig.notFound.message}
      </p>
      <Link
        href="/"
        className="inline-block bg-brand-yellow text-brand-green font-bold uppercase tracking-wide py-3 px-8 rounded hover:brightness-105 transition-all"
      >
        {siteConfig.notFound.cta}
      </Link>
    </main>
  );
}
