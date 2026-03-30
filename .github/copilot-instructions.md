# Amazon Affiliate Site — Agent Instructions

This is a **reusable Next.js template** for Amazon affiliate product sites. It may already be branded for a specific niche or may need to be rebranded for a new one.

## Architecture

- **Next.js App Router** + Tailwind CSS + TypeScript + MDX blog
- Monetization via Amazon Associates affiliate links
- Static product catalog in `lib/shirts.ts` (array of `Product` objects)
- All niche-specific copy/branding lives in `lib/config.ts`

## Key Files

| File | Purpose |
|---|---|
| `lib/config.ts` | **Single source of truth** for site name, domain, affiliate tag, all page copy |
| `lib/shirts.ts` | Product catalog (array + `Product` interface + `AFFILIATE_TAG` from config) |
| `app/globals.css` | Brand colors (`--brand-green`, `--brand-yellow`) |
| `components/ProductCard.tsx` | Product card (generic, uses `Product` type) |
| `components/ShopGrid.tsx` | Product grid with tag filtering (generic) |
| `components/Header.tsx` | Site header (reads name from config) |
| `components/Footer.tsx` | Footer with affiliate disclosure (reads from config) |
| `app/layout.tsx` | Root layout, metadata, JSON-LD (all from config) |
| `app/page.tsx` | Homepage hero + featured products (copy from config) |
| `app/shop/page.tsx` | Full catalog page (copy from config) |
| `app/about/page.tsx` | About page (paragraphs from config) |
| `app/blog/page.tsx` | Blog index (post list is niche-specific content) |
| `app/blog/*/page.mdx` | Blog posts (niche-specific content, replaced per fork) |
| `app/sitemap.ts` | Sitemap (URL from config) |
| `app/robots.ts` | Robots.txt (URL from config) |
| `app/not-found.tsx` | 404 page (copy from config) |
| `scratch/refresh-catalog.mjs` | Weekly catalog refresh script (reads affiliate tag from config) |

## How to Rebrand for a New Niche

When the user asks to rebrand, set up, or customize this site for a new product category:

### 1. Update `lib/config.ts`
Change every field: name, tagline, domain, url, description, affiliateTag, and all page copy (hero, shop, about, blog, notFound, footer). Replace all niche-specific language.

### 2. Replace the product catalog
Clear the products array in `lib/shirts.ts` and populate with new products. Each product needs: id, asin, title, description, image, tags, affiliateUrl. The `AFFILIATE_TAG` is read from config automatically.

### 3. Update brand colors
In `app/globals.css`, change `--brand-green` and `--brand-yellow` to the new brand's colors.

### 4. Replace blog content
- Delete the existing blog post folders under `app/blog/`
- Update the `posts` array in `app/blog/page.tsx` with new post metadata
- Create new MDX blog posts for the new niche

### 5. Update search queries in refresh script
In `scratch/refresh-catalog.mjs`, update the `SEARCH_QUERIES` array (~line 53) to match the new product category for Amazon discovery.

## Important Notes

- The `Product` type (aliased as `Shirt` for backward compatibility) is defined in `lib/shirts.ts`
- The affiliate tag appears in only ONE place in config — scripts read it via regex
- The `scratch/` folder contains helper scripts, not deployed code
- Components are fully generic — they don't contain niche-specific text
- Blog posts are the only content that must be manually rewritten
- Amazon image domain (`m.media-amazon.com`) is already allowed in `next.config.ts`

## Commands

- `npm run dev` — local development server
- `npx next build` — production build (verify after changes)
- `node scratch/refresh-catalog.mjs --discover --dry-run` — preview catalog refresh
- `node scratch/refresh-catalog.mjs --discover` — run catalog refresh
