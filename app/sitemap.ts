import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  return [
    { url: base, lastModified: now },
    { url: `${base}/shop`, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/blog`, lastModified: now },
  ];
}
