import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dinkingbuddy.com";
  return [
    { url: base, lastModified: new Date("2025-01-01") },
    { url: `${base}/shop`, lastModified: new Date("2025-01-01") },
    { url: `${base}/about`, lastModified: new Date("2025-01-01") },
  ];
}
