import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center space-y-2">
        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} {siteConfig.domain} · All rights reserved.
        </p>
        <p className="text-white/50 text-xs max-w-2xl mx-auto">
          {siteConfig.footer.disclosure}
        </p>
      </div>
    </footer>
  );
}
