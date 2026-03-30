import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.about.metaDescription,
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-6xl tracking-wider text-brand-green mb-6">
        {siteConfig.about.heading}
      </h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {siteConfig.about.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        <h2 className="font-display text-4xl tracking-wider text-brand-green pt-4">
          Affiliate Disclosure
        </h2>
        <p className="text-sm text-gray-500">
          {siteConfig.footer.disclosure}
        </p>
      </div>
    </main>
  );
}
