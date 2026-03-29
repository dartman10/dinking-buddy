import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dinkingbuddy.com";
  const now = new Date();
  return [
    { url: base, lastModified: now },
    { url: `${base}/shop`, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/blog`, lastModified: now },
  ];
}
