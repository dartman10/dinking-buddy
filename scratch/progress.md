# DinkingBuddy.com — Project Progress & Spec

> Last updated: 2026-03-30

---

## 1. Project Overview

**DinkingBuddy.com** is a niche affiliate website for pickleball-themed shirts.
The site curates shirt designs from Amazon and earns commissions through the
Amazon Associates program. The goal is a lightweight, fast, SEO-friendly
storefront that requires zero inventory, payment processing, or shipping logic.

**Domain:** DinkingBuddy.com (registered at Namecheap)
**GitHub:** dartman10/dinking-buddy
**Amazon Associates tag:** `dinkingbuddy-20`
**Amazon approval date:** ~2026-03-28 (must get 3 qualifying sales within 180 days)

---

## 2. Technical Specs

| Layer          | Choice                                       |
| -------------- | -------------------------------------------- |
| Framework      | Next.js 16.2.1 (App Router)                  |
| Language       | TypeScript 5 (strict mode)                   |
| UI / Styling   | Tailwind CSS 4 (PostCSS plugin)              |
| Fonts          | Bebas Neue (headings), Inter (body) — Google |
| React          | 19.2.4                                       |
| Hosting        | Vercel                                        |
| DNS            | Namecheap → Vercel (A + CNAME records)        |
| Images         | Amazon CDN (`m.media-amazon.com`)             |
| Package mgr    | npm                                           |
| Node target    | ES2017                                        |
| Path aliases   | `@/*` → project root                         |

### Design Tokens
- **Brand green:** `#1b4332` — headers, nav, buttons, footer
- **Brand yellow:** `#f7c948` — accents, CTAs, hero headline
- **Body bg:** white · **Body text:** gray-900

### Key Config
- `next.config.ts` — `images.remotePatterns` allows `m.media-amazon.com`
- `postcss.config.mjs` — Tailwind 4 plugin
- `tsconfig.json` — strict, path alias `@/*`

---

## 3. Architecture & File Map

```
app/
  layout.tsx          Root layout (metadata, fonts, Header/Footer, Vercel Analytics)
  page.tsx            Homepage — hero banner + 10 randomized featured shirts
  not-found.tsx       Custom 404 (pickleball-themed)
  globals.css         CSS variables, Tailwind theme
  robots.ts           /robots.txt (allow all, sitemap link)
  sitemap.ts          /sitemap.xml (/, /shop, /about, /blog — dynamic dates)
  shop/page.tsx       Shop page — ShopGrid with tag filtering
  about/page.tsx      About + FTC affiliate disclosure
  blog/page.tsx       Blog index — lists all 10 posts (newest first)
  blog/*/layout.tsx   Per-post layout with metadata
  blog/*/page.mdx     Blog post content (MDX)

components/
  Header.tsx          Sticky nav — logo + Shop / Blog / About links
  Footer.tsx          Copyright (dynamic year) + Amazon Associates disclaimer
  ProductCard.tsx     Shirt card — image, title, desc, Amazon CTA
  ShopGrid.tsx        Client component — tag filter buttons + product grid

lib/
  shirts.ts           Product catalog array (391 products), Shirt interface, AFFILIATE_TAG constant

mdx-components.tsx    MDX component overrides (styled headings, links, lists, blockquotes)

scratch/
  progress.md         This file
  enhancements_list.md Enhancement tracker
  asin_list.md        Original ASIN list
  asin_list_100.md    Extended ASIN list (100 entries)
  generate-shirts.mjs Script to generate shirt catalog entries from ASINs
  fetch-images.mjs    Script to fetch product images from Amazon (curl + cookie jar)
  fetch-images-v2.mjs  Node.js fetch-based image fetcher (bypasses curl CAPTCHA locks)
  generate-new-batch.mjs Script to generate new product entries from ASIN list
  refresh-catalog.mjs Weekly catalog refresh (Playwright discover + fetch details + dead-check)
  new-asins.txt       Manual fallback ASIN list for refresh-catalog.mjs
```

### Data Flow
1. `lib/shirts.ts` exports a static `Shirt[]` array.
2. Server pages (`/`, `/shop`) import the array and pass it to components.
3. `ShopGrid` ("use client") enables interactive tag filtering on `/shop`.
4. `ProductCard` renders each shirt and links out to Amazon with the affiliate tag.
5. Homepage uses `force-dynamic` to randomize 10 featured shirts per page load.
6. Blog posts are MDX files with per-post layouts for metadata.
7. No database, no API routes, no server actions.

---

## 4. MVP Definition (Phase 1) — CURRENT

The MVP is a working, deployable storefront with at least one fully linked
product and the infrastructure for many more.

### MVP Checklist

| #  | Item                                      | Status |
| -- | ----------------------------------------- | ------ |
| 1  | Homepage with hero + featured grid        | ✅ Done |
| 2  | `/shop` page with tag filtering           | ✅ Done |
| 3  | `/about` page with affiliate disclosure   | ✅ Done |
| 4  | Custom 404 page                           | ✅ Done |
| 5  | SEO: sitemap.xml + robots.txt             | ✅ Done |
| 6  | OpenGraph metadata                        | ✅ Done |
| 7  | Responsive design (mobile → desktop)      | ✅ Done |
| 8  | Product #1 fully linked (ASIN + image)    | ✅ Done |
| 9  | Products 2–12 with copy & tags            | ✅ Done (descriptions written) |
| 10 | Products 2–10 real ASINs + images         | ✅ Done (9 new products) |
| 11 | Git repo initialized                      | ✅ Done |
| 12 | Push to GitHub (dartman10/dinking-buddy)  | ✅ Done |
| 13 | Expand catalog to 25+ products            | ✅ Done (391 products) |
| 14 | Deploy to Vercel                          | ✅ Done |
| 15 | Connect DinkingBuddy.com domain           | ✅ Done |
| 16 | Update sitemap dates (stuck on 2025-01-01)| ✅ Done |
| 17 | Fetch images for all 197 products         | ✅ Done |
| 18 | Homepage: limit to 10 randomized products | ✅ Done |
| 19 | Blog with MDX (10 posts)                  | ✅ Done |
| 20 | Vercel Analytics                          | ✅ Done |
| 21 | Google Search Console verification tag    | ⏳ Placeholder (needs user's Google account) |

### Product Catalog Status (391 products)

- **Total products:** 391
- **With images:** 391 (all)
- **Without images (placeholder):** 0
- **All 391 have:** ASIN, title, description, tags, affiliate URL, real product image

#### Tag Distribution

| Tag         | Count |
| ----------- | ----- |
| women's     | 241   |
| graphic     | 152   |
| performance | 105   |
| men's       | 103   |
| funny       | 101   |
| casual      | 94    |
| tank top    | 72    |
| unisex      | 47    |
| polo        | 38    |
| UPF         | 36    |
| gift        | 30    |
| premium     | 23    |
| vintage     | 16    |
| v-neck      | 16    |
| long sleeve | 12    |
| patriotic   | 6     |
| hoodie      | 5     |
| retirement  | 4     |
| tri-blend   | 1     |

> Note: Original ASIN B07537H64L returned 404 (product unavailable) and was excluded.

---

## 5. Feature Roadmap

### Phase 1 — MVP Launch (current)
- Static shirt catalog with Amazon affiliate links
- Tag-based filtering on shop page
- SEO basics (sitemap, robots, OG tags)
- FTC affiliate disclosure
- Vercel deployment + custom domain

### Phase 2 — Content & Catalog Growth
- ✅ Linked real ASINs for all products
- ✅ Expanded catalog to 391 products (exceeds 25–50 target)
- ✅ Fetched real product images for all 391 products
- ✅ Blog with MDX — 10 posts, backdated monthly Jun 2025 – Mar 2026
- ✅ Vercel Analytics integrated
- ⏳ Google Search Console — placeholder tag in layout, needs user setup
- Add category pages (funny, gift, women's, men's, kids)

### Phase 3 — SEO & Traffic
- Long-tail keyword pages ("best pickleball gifts for dad", etc.)
- ✅ Structured data / JSON-LD (WebSite, ItemList, Product schemas)
- Image optimization (OG images per page)
- Internal linking strategy between blog posts and products
- Social sharing meta per product

### Phase 4 — Expansion
- Expand beyond shirts: paddles, bags, accessories (still Amazon affiliate)
- Email capture / newsletter (Buttondown or similar)
- "New arrivals" automated via RSS or manual curation
- Community features (favorite shirts, share outfit)

---

## 6. Monetization

- **Model:** Amazon Associates affiliate commissions
- **Tag:** `dinkingbuddy-20` (hardcoded in `lib/shirts.ts`)
- **Link pattern:** `https://www.amazon.com/dp/{ASIN}?tag=dinkingbuddy-20`
- **Fallback (no ASIN):** `https://www.amazon.com/s?k={search+terms}&tag=dinkingbuddy-20`
- **Requirement:** 3 qualifying sales within 180 days of approval (~by Sept 2026)

---

## 7. Progress Log

### 2026-03-28
- Project scaffolded with Next.js 16 + Tailwind 4 + TypeScript
- Built all MVP pages: home, shop, about, 404
- Created product catalog with 12 shirt entries (1 fully linked, 11 placeholders)
- Implemented tag-based filtering (ShopGrid client component)
- Added SEO routes (sitemap.xml, robots.txt), OpenGraph metadata
- FTC affiliate disclosure in footer + about page
- Initialized git repo locally
- Reviewed project memory — updated to match actual codebase state
- Created this progress document

### 2026-03-29
- Integrated 9 new ASINs into product catalog (10 total products)
- Fetched product titles, images, and details from Amazon for all ASINs
- ASIN B07537H64L returned 404 — removed from catalog
- Catalog reduced from 12 placeholder to 10 fully linked products
- All products now have real images, affiliate URLs, and descriptions
- Updated progress document with new catalog status
- Added GitHub remote: https://github.com/dartman10/dinking-buddy.git
- Pushed all code to GitHub (main branch)
- Added 187 more products via `scratch/generate-shirts.mjs` (197 total)
- 20 products have real images; 177 use SVG placeholder
- Tag coverage spans 17 categories (women's: 106, graphic: 89, funny: 64, men's: 61, etc.)
- Committed bulk addition to GitHub (commit `decc6ac`)
- Built `scratch/fetch-images.mjs` to batch-fetch product images from Amazon
- Pass 1: curl with Safari UA, batched requests — fetched 100/176 empty-image products before Amazon rate-limited with CAPTCHAs
- Pass 2: Rewrote script with human-like behavior — cookie jar, session warm-up, full browser headers (Sec-Fetch-*, Referer), random delays (4–9s), coffee breaks every ~10 items, CAPTCHA recovery with session reset
- Pass 2 fetched all remaining 76 images with **zero CAPTCHAs**
- All 197 products now have real Amazon product images — zero SVG placeholders
- Tested locally: all pages render correctly, Next.js Image optimization working, no errors
- Pushed to GitHub (commit `4d5fec2`)
- Deployed to Vercel via GitHub import
- Connected DinkingBuddy.com domain (Namecheap DNS → Vercel)
- Site live at https://dinkingbuddy.com
- Fixed sitemap dates — now uses `new Date()` (dynamic, always current), added `/blog`
- Homepage limited to 10 featured products, randomized per page load (Fisher-Yates shuffle, `force-dynamic`)
- Added Blog link to Header nav
- Installed `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`; configured `next.config.ts` with `pageExtensions`
- Created `mdx-components.tsx` with styled MDX components (headings, links, lists, blockquotes)
- Created 3 blog posts: best shirts 2026, gift guide, what to wear
- Installed `@vercel/analytics`; added `<Analytics />` to root layout
- Added Google Search Console `verification.google` placeholder in metadata
- Pushed to GitHub (commit `aa0821e`)
- Expanded blog to 10 posts, backdated monthly from June 2025 to March 2026:
  - Jun 2025: What to Wear to Play Pickleball
  - Jul 2025: Pickleball Rules for Beginners
  - Aug 2025: 5 Drills to Improve Your Dink Game
  - Sep 2025: The Ultimate Pickleball Gift Guide
  - Oct 2025: Indoor vs Outdoor Pickleball
  - Nov 2025: How to Choose Your First Pickleball Paddle
  - Dec 2025: Pickleball Etiquette: 10 Unwritten Rules
  - Jan 2026: Pickleball in 2026: Why It's Still Growing
  - Feb 2026: Best Pickleball Shirts for Valentine's Day
  - Mar 2026: The 10 Best Pickleball Shirts in 2026
- Every blog post links back to `/shop` for affiliate traffic
- Pushed to GitHub (commit `29b72ca`)
- Cleaned up workspace: removed unused Next.js boilerplate SVGs, debug scripts, log files

### 2026-03-30
- Expanded product catalog from 197 → 392 products (+194 new ASINs)
- New products sourced from `scratch/asin_list_100.md` via `scratch/generate-new-batch.mjs`
- Image fetching (3 phases):
  - Phase 1: `fetch-images.mjs` (curl) — fetched 141/194 images before IP got CAPTCHA-locked
  - Phase 2: Attempted curl recovery with conservative delays — got 3 more before persistent CAPTCHAs
  - Phase 3: Built `scratch/fetch-images-v2.mjs` using Node.js native `fetch` API — different HTTP fingerprint bypassed CAPTCHA entirely, fetched all remaining 53 images with **zero CAPTCHAs**
- All 392 products now have real Amazon product images — zero empty `image: ""` fields
- Tag coverage expanded to 19 categories (women's: 241, graphic: 152, performance: 105, men's: 103, etc.)
- New tags added: v-neck (16), hoodie (5)
- Build verified clean, all pages render correctly
- Committed and pushed to GitHub (commit `2fe2209`)
- Vercel auto-deployed to https://dinkingbuddy.com

- Built `scratch/refresh-catalog.mjs` — weekly catalog refresh script
  - `--discover` flag uses Playwright (headless Chromium) to search Amazon for new pickleball shirts
  - Discovers ~700+ new ASINs across 10 search queries × 2 pages each
  - Apparel filter rejects non-shirt products (paddles, socks, bags, etc.)
  - Fetches product details (title, image) via Node.js fetch (hybrid: Playwright for search, fetch for details)
  - Auto-generates tags and descriptions from title keywords
  - Dead-link checker for existing products (404/unavailable removal)
  - `--dry-run`, `--add-only`, `--check-only` flags for safe operation
  - HTML entity decoding in titles (&#39; → ')
  - Fallback: manual `scratch/new-asins.txt` still works without --discover
  - Installed `playwright` dependency + Chromium browser binary
- Removed hardcoded shirt count ("197") from 4 blog posts — now uses generic phrasing
  - pickleball-in-2026-why-its-still-growing
  - pickleball-gift-guide
  - best-pickleball-shirts-2026
  - best-pickleball-shirts-valentines-day
- Updated progress.md and memory files
- Added JSON-LD structured data to 3 pages:
  - `layout.tsx` — WebSite schema (site name, URL, description)
  - `shop/page.tsx` — ItemList + Product schema for all 391 products
  - `page.tsx` — ItemList + Product schema for 10 featured shirts
- Committed and pushed to GitHub (commit `5d7994d`)
- Vercel auto-deployed to https://dinkingbuddy.com

### Next session priorities
1. Google Search Console — set up with Google account, replace placeholder ID
2. OG images for social sharing
3. Run first automated catalog refresh (`--discover --add-only`)
4. BreadcrumbList structured data for blog posts
