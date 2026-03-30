/**
 * ── Site Configuration ─────────────────────────────────────────────────────
 * Edit this file to rebrand for a new niche. Every niche-specific value lives
 * here so forking requires changing only this file, the product catalog
 * (lib/shirts.ts), brand colors (app/globals.css), and blog content.
 */

export const siteConfig = {
  // ── Identity ──────────────────────────────────────────────
  name: "DinkingBuddy",
  tagline: "Pickleball Shirts",
  domain: "dinkingbuddy.com",
  url: "https://dinkingbuddy.com",
  description:
    "Pickleball-themed shirts for players who love the game. Curated designs, shipped from Amazon.",

  // ── Affiliate ─────────────────────────────────────────────
  affiliateTag: "dinkingbuddy-20",

  // ── Google Search Console ─────────────────────────────────
  googleVerificationId: "GOOGLE_SEARCH_CONSOLE_ID",

  // ── Homepage hero ─────────────────────────────────────────
  hero: {
    headline: "Dinking Buddy",
    subtitle:
      "Pickleball shirts for players who live for the dink. Find your perfect shirt below.",
    cta: "Shop All Shirts",
    featuredHeading: "Featured Shirts",
    browseAllCta: "See All Shirts",
    jsonLdName: "Featured Pickleball Shirts",
  },

  // ── Shop page ─────────────────────────────────────────────
  shop: {
    title: "Shop Pickleball Shirts",
    description:
      "Browse our full collection of pickleball-themed shirts. The perfect gift or treat for any player.",
    subtitle: "Pickleball shirts for every player on the court.",
    emptyFilter: "No shirts found for this filter.",
    jsonLdName: "Pickleball Shirts",
  },

  // ── About page ────────────────────────────────────────────
  about: {
    heading: "About DinkingBuddy",
    metaDescription:
      "DinkingBuddy.com — your source for pickleball shirts and gear.",
    paragraphs: [
      "Friends don't let friends dink alone. DinkingBuddy.com was created for pickleball lovers who want to wear their passion on their sleeve — literally.",
      "We curate the best pickleball-themed shirts available on Amazon, so you can find the perfect match for your game or the ideal gift for your court crew.",
      "Whether you're a beginner just learning the basics or a seasoned player who lives at the kitchen line, there's a shirt here for you.",
    ],
  },

  // ── Blog page ─────────────────────────────────────────────
  blog: {
    description:
      "Pickleball tips, gear guides, and everything dinking. The DinkingBuddy blog.",
    subtitle: "Pickleball tips, gear guides, and everything dinking.",
  },

  // ── 404 page ──────────────────────────────────────────────
  notFound: {
    headline: "That shot landed out of bounds.",
    message:
      "The page you're looking for doesn't exist. Let's get you back to the kitchen.",
    cta: "Back to Home",
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    disclosure:
      "DinkingBuddy.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate we earn from qualifying purchases.",
  },
} as const;
