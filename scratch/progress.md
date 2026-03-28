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
| Hosting        | Vercel (planned)                              |
| DNS            | Namecheap → Vercel nameservers (planned)      |
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
  shirts.ts           Product catalog array, Shirt interface, AFFILIATE_TAG constant

scratch/
  progress.md         This file
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
| 12 | Push to GitHub (dartman10/dinking-buddy)  | ❌ TODO |
| 13 | Deploy to Vercel                          | ❌ TODO |
| 14 | Connect DinkingBuddy.com domain           | ❌ TODO |
| 15 | Update sitemap dates (stuck on 2025-01-01)| ❌ TODO |

### Product Catalog Status (10 products)

| ID | Title                                            | ASIN         | Image |
| -- | ------------------------------------------------ | ------------ | ----- |
| 1  | Pickleball: Dinking Buddy Premium Tri-Blend      | B0GTVMH4KW  | ✅    |
| 2  | Pickleball: Dinking Master T-Shirt               | B0GV3YVGHY  | ✅    |
| 3  | Mens Funny Pickleball T-Shirt – Legend           | B0B1N7F3XQ  | ✅    |
| 4  | Funny Pickleball Tee – You Just Got Served       | B0CSPS8Y6T  | ✅    |
| 5  | UPF 50+ Performance Tee – Bigfoot Dink Power     | B0F8898BTK  | ✅    |
| 6  | UPF 50+ Performance Tee – Day Dink Vibes         | B0F888KKRW  | ✅    |
| 7  | Life is Good – Keep It Simple Pickleball         | B0C4WTTX34  | ✅    |
| 8  | I Love It When My Wife Lets Me Play Pickleball   | B08QJCMCMM  | ✅    |
| 9  | Pickleball: It's Always A Good Time              | B0FJDTZQ9K  | ✅    |
| 10 | Women's Pickleball Graphic Tee – Was That Out?   | B0C628B9LK  | ✅    |

> Note: ASIN B07537H64L returned 404 (product unavailable). Catalog reduced from 12 to 10 products.

---

## 5. Feature Roadmap

### Phase 1 — MVP Launch (current)
- Static shirt catalog with Amazon affiliate links
- Tag-based filtering on shop page
- SEO basics (sitemap, robots, OG tags)
- FTC affiliate disclosure
- Vercel deployment + custom domain

### Phase 2 — Content & Catalog Growth
- ✅ Linked real ASINs for all products (10 total)
- Add more products (target: 25–50 shirts)
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

### Next session priorities
1. Update sitemap `lastModified` dates to current
2. Push to GitHub → deploy on Vercel → connect domain
3. Add more products to grow catalog toward 25+
