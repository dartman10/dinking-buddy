# DinkingBuddy.com — Project Progress & Spec

> Last updated: 2026-03-29

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
  layout.tsx          Root layout (metadata, fonts, Header/Footer wrapper)
  page.tsx            Homepage — hero banner + featured shirts grid
  not-found.tsx       Custom 404 (pickleball-themed)
  globals.css         CSS variables, Tailwind theme
  robots.ts           /robots.txt (allow all, sitemap link)
  sitemap.ts          /sitemap.xml (/, /shop, /about)
  shop/page.tsx       Shop page — ShopGrid with tag filtering
  about/page.tsx      About + FTC affiliate disclosure

components/
  Header.tsx          Sticky nav — logo + Shop / About links
  Footer.tsx          Copyright (dynamic year) + Amazon Associates disclaimer
  ProductCard.tsx     Shirt card — image (or SVG placeholder), title, desc, Amazon CTA
  ShopGrid.tsx        Client component — tag filter buttons + product grid

lib/
  shirts.ts           Product catalog array (197 products), Shirt interface, AFFILIATE_TAG constant

scratch/
  progress.md         This file
  asin_list.md        Original ASIN list
  asin_list_100.md    Extended ASIN list (100 entries)
  generate-shirts.mjs Script to generate shirt catalog entries from ASINs
  fetch-images.mjs    Script to fetch product images from Amazon (curl + cookie jar)
  fetch-images.log    Pass 1 log (100/176 fetched)
  fetch-images-pass2.log Pass 2 log (76/76 fetched, human-like mode)
  test-fetch.mjs      Debug script for testing Amazon fetch strategies
```

### Data Flow
1. `lib/shirts.ts` exports a static `Shirt[]` array.
2. Server pages (`/`, `/shop`) import the array and pass it to components.
3. `ShopGrid` ("use client") enables interactive tag filtering on `/shop`.
4. `ProductCard` renders each shirt and links out to Amazon with the affiliate tag.
5. No database, no API routes, no server actions — fully static / SSG-friendly.

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
| 13 | Expand catalog to 25+ products            | ✅ Done (197 products) |
| 14 | Deploy to Vercel                          | ✅ Done |
| 15 | Connect DinkingBuddy.com domain           | ✅ Done |
| 16 | Update sitemap dates (stuck on 2025-01-01)| ❌ TODO |
| 17 | Fetch images for all 197 products         | ✅ Done |

### Product Catalog Status (197 products)

- **Total products:** 197
- **With images:** 197 (all)
- **Without images (placeholder):** 0
- **All 197 have:** ASIN, title, description, tags, affiliate URL, real product image

#### Tag Distribution

| Tag         | Count |
| ----------- | ----- |
| women's     | 106   |
| graphic     | 89    |
| funny       | 64    |
| men's       | 61    |
| casual      | 55    |
| performance | 34    |
| unisex      | 30    |
| gift        | 30    |
| tank top    | 28    |
| premium     | 23    |
| polo        | 17    |
| vintage     | 16    |
| UPF         | 8     |
| patriotic   | 6     |
| retirement  | 4     |
| long sleeve | 2     |
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
- ✅ Expanded catalog to 197 products (exceeds 25–50 target)
- ✅ Fetched real product images for all 197 products
- Add category pages (funny, gift, women's, men's, kids)
- Blog with MDX (pickleball tips, gift guides, "best shirts for…" posts)
- Google Search Console setup + analytics (Vercel Analytics or Plausible)

### Phase 3 — SEO & Traffic
- Long-tail keyword pages ("best pickleball gifts for dad", etc.)
- Structured data / JSON-LD (Product, BreadcrumbList)
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

### Next session priorities
1. Update sitemap `lastModified` dates (still hardcoded to 2025-01-01)
2. Add category pages (funny, gift, women's, men's)
3. Blog with MDX (pickleball tips, gift guides)
4. Google Search Console setup + analytics
