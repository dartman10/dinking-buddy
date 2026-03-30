#!/usr/bin/env node
/**
 * Weekly catalog refresh for DinkingBuddy.com
 *
 * What it does:
 *   1. (--discover) Uses Playwright to search Amazon and find new ASINs
 *      OR reads new ASINs from scratch/new-asins.txt (fallback)
 *   2. Fetches product details (title, image) for each new ASIN via fetch
 *   3. Checks every existing product for dead links (404 / unavailable)
 *   4. Removes dead products, adds new ones, renumbers IDs
 *   5. Writes the updated lib/shirts.ts
 *
 * Weekly workflow (automated):
 *   node scratch/refresh-catalog.mjs --discover --dry-run   # preview
 *   node scratch/refresh-catalog.mjs --discover              # apply
 *   npm run build && git add -A && git commit && git push
 *
 * Weekly workflow (manual fallback):
 *   1. Paste ASINs into scratch/new-asins.txt
 *   2. node scratch/refresh-catalog.mjs --dry-run
 *   3. node scratch/refresh-catalog.mjs
 *   4. npm run build && git add -A && git commit && git push
 *
 * Flags:
 *   --discover      Use Playwright to search Amazon for new products
 *   --dry-run       Preview changes without writing
 *   --add-only      Only add new products (skip dead-check)
 *   --check-only    Only check for dead products (skip adding)
 *
 * Estimated runtime:
 *   --discover: ~8 min (search + fetch details)
 *   Dead-check: ~35 min for 400 products
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";

// ═══════════════════════════════════════════════════════════════════════
// Config — read affiliate tag from lib/config.ts (single source of truth)
// ═══════════════════════════════════════════════════════════════════════
const SHIRTS_PATH = resolve("lib/shirts.ts");
const CONFIG_PATH = resolve("lib/config.ts");
const NEW_ASINS_PATH = resolve("scratch/new-asins.txt");

function readAffiliateTag() {
  const src = readFileSync(CONFIG_PATH, "utf-8");
  const m = src.match(/affiliateTag:\s*["']([^"']+)["']/);
  if (!m) throw new Error("Could not find affiliateTag in lib/config.ts");
  return m[1];
}
const AFFILIATE_TAG = readAffiliateTag();

const DRY_RUN = process.argv.includes("--dry-run");
const CHECK_ONLY = process.argv.includes("--check-only");
const ADD_ONLY = process.argv.includes("--add-only");
const DISCOVER = process.argv.includes("--discover");

const MAX_NEW_PRODUCTS = 50; // cap per run to avoid rate limiting

const SEARCH_QUERIES = [
  "pickleball shirt",
  "pickleball shirt women",
  "pickleball shirt men",
  "funny pickleball shirt",
  "pickleball performance shirt",
  "pickleball tank top women",
  "pickleball polo shirt",
  "pickleball hoodie",
  "pickleball long sleeve shirt",
  "pickleball UPF sun protection shirt",
];

// ═══════════════════════════════════════════════════════════════════════
// HTTP helpers
// ═══════════════════════════════════════════════════════════════════════
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const HEADERS = {
  "User-Agent": UA,
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Cache-Control": "max-age=0",
  "Sec-Ch-Ua":
    '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": '"macOS"',
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function humanDelay() {
  return sleep(rand(3000, 6000));
}
function coffeeBreak() {
  return sleep(rand(15000, 25000));
}

function decodeEntities(str) {
  return str
    .replace(/&#39;/g, "'")
    .replace(/&#34;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

// ═══════════════════════════════════════════════════════════════════════
// Parse existing catalog
// ═══════════════════════════════════════════════════════════════════════
function parseCatalog() {
  const src = readFileSync(SHIRTS_PATH, "utf-8");
  const entries = [];

  // Match each entry block — from `id:` through the closing `}`
  const blockRegex =
    /\{\s*\n\s*id:\s*"\d+"[\s\S]*?affiliateUrl:\s*`[^`]+`,?\s*\n\s*\}/g;
  let m;
  while ((m = blockRegex.exec(src)) !== null) {
    const block = m[0];
    const asin = block.match(/asin:\s*"([A-Z0-9]+)"/)?.[1];
    const title = block.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1];
    const desc = block.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)?.[1];
    const image = block.match(/image:\s*\n?\s*"([^"]*)"/)?.[1];
    const tagsStr = block.match(/tags:\s*\[([^\]]*)\]/)?.[1] || "";
    const tags = tagsStr
      .split(",")
      .map((t) => t.trim().replace(/"/g, ""))
      .filter(Boolean);

    if (asin) {
      entries.push({
        asin,
        title: title || "",
        description: desc || "",
        image: image || "",
        tags,
      });
    }
  }

  return entries;
}

// ═══════════════════════════════════════════════════════════════════════
// Read new ASINs from file
// ═══════════════════════════════════════════════════════════════════════
function readNewAsins(existingAsins) {
  if (!existsSync(NEW_ASINS_PATH)) {
    console.log(`📄 No new-asins file found at scratch/new-asins.txt — skipping new products.\n`);
    return [];
  }

  const raw = readFileSync(NEW_ASINS_PATH, "utf-8");
  const asins = raw
    .split("\n")
    .map((line) => line.replace(/#.*/, "").trim()) // strip comments
    .filter((line) => /^B[A-Z0-9]{9}$/.test(line)); // valid ASIN format

  const unique = [...new Set(asins)];
  const fresh = unique.filter((a) => !existingAsins.has(a));
  const dupes = unique.length - fresh.length;

  console.log(`📄 Read ${unique.length} ASINs from scratch/new-asins.txt`);
  if (dupes > 0) console.log(`   ${dupes} already in catalog (skipped)`);
  console.log(`   ${fresh.length} new ASINs to process\n`);

  return fresh;
}

// ═══════════════════════════════════════════════════════════════════════
// Playwright discovery — search Amazon with a real browser
// ═══════════════════════════════════════════════════════════════════════
async function discoverAsins(existingAsins) {
  const { chromium } = await import("playwright");

  console.log("🎭 Launching Playwright (headless Chromium)...\n");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: UA,
    viewport: { width: 1440, height: 900 },
    locale: "en-US",
  });
  const page = await context.newPage();

  const foundAsins = new Set();

  try {
    // Warm up — visit homepage to establish cookies/session
    console.log("  Visiting amazon.com homepage...");
    await page.goto("https://www.amazon.com/", { waitUntil: "domcontentloaded" });
    await sleep(rand(2000, 4000));

    for (let qi = 0; qi < SEARCH_QUERIES.length; qi++) {
      const query = SEARCH_QUERIES[qi];

      for (let pg = 1; pg <= 2; pg++) {
        const url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&page=${pg}`;
        console.log(`  🔍 "${query}" page ${pg}...`);

        try {
          await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
          // Wait for search results to render
          await page.waitForSelector('[data-asin]', { timeout: 8000 }).catch(() => {});

          // Extract ASINs via data-asin attribute
          const pageAsins = await page.evaluate(() => {
            const els = document.querySelectorAll("[data-asin]");
            return [...els]
              .map((el) => el.getAttribute("data-asin"))
              .filter((a) => a && /^B[A-Z0-9]{9}$/.test(a));
          });

          let newCount = 0;
          for (const asin of pageAsins) {
            if (!existingAsins.has(asin) && !foundAsins.has(asin)) {
              foundAsins.add(asin);
              newCount++;
            }
          }
          console.log(
            `    ${pageAsins.length} results, +${newCount} new (${foundAsins.size} total)`
          );

          // Check for CAPTCHA
          const isCaptcha = await page.evaluate(() =>
            document.body.innerText.toLowerCase().includes("captcha")
          );
          if (isCaptcha) {
            console.log("    ⚠ CAPTCHA detected — pausing...");
            await sleep(rand(15000, 30000));
          }
        } catch (e) {
          console.log(`    Error: ${e.message.slice(0, 80)}`);
        }

        await sleep(rand(2000, 5000));
      }

      // Longer pause between queries
      if (qi < SEARCH_QUERIES.length - 1) {
        await sleep(rand(4000, 8000));
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`\n  🎭 Discovery complete: ${foundAsins.size} new ASINs found\n`);
  return [...foundAsins];
}

// ═══════════════════════════════════════════════════════════════════════
// Fetch a single product page
// ═══════════════════════════════════════════════════════════════════════
async function fetchProduct(asin) {
  try {
    const resp = await fetch(`https://www.amazon.com/dp/${asin}`, {
      headers: {
        ...HEADERS,
        Referer: "https://www.amazon.com/s?k=pickleball+shirt",
      },
      redirect: "follow",
    });
    const html = await resp.text();

    // CAPTCHA detection
    if (html.length < 10000 && /captcha/i.test(html)) {
      return { status: "captcha" };
    }

    // Dead product detection
    if (resp.status === 404) return { status: "dead" };
    const deadPatterns = [
      /currently unavailable/i,
      /no longer available/i,
      /we couldn.?t find that page/i,
      /looking for something\?/i,
    ];
    // Amazon dog-page 404
    if (/id="g"[\s\S]{0,200}\/images\/G\/01\/error/i.test(html)) {
      return { status: "dead" };
    }
    if (deadPatterns.some((p) => p.test(html))) {
      // Double-check: "currently unavailable" can appear in variants too,
      // so only flag dead if there's no productTitle
      const hasTitle = /id="productTitle"/i.test(html);
      if (!hasTitle) return { status: "dead" };
    }

    // Extract title
    const titleMatch = html.match(
      /<span[^>]*id="productTitle"[^>]*>\s*([\s\S]*?)\s*<\/span>/
    );
    const title = titleMatch
      ? decodeEntities(titleMatch[1].replace(/\s+/g, " ").trim())
      : null;

    // Extract image
    const image = extractImage(html);

    return { status: "alive", title, image };
  } catch (e) {
    return { status: "error", error: e.message };
  }
}

function extractImage(html) {
  const hiRes = html.match(
    /"hiRes"\s*:\s*"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/
  );
  if (hiRes) return cleanUrl(hiRes[1]);

  const og = html.match(
    /<meta\s+(?:property|name)="og:image"\s+content="([^"]+)"/i
  );
  if (og && og[1].includes("m.media-amazon.com")) return cleanUrl(og[1]);

  const landing = html.match(
    /id="landingImage"[^>]*src="(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/
  );
  if (landing) return cleanUrl(landing[1]);

  const anyAC = html.match(
    /(https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9+]+\._AC_[^"'\s]+)/
  );
  if (anyAC) return cleanUrl(anyAC[1]);

  return "";
}

function cleanUrl(url) {
  url = url.replace(/&amp;/g, "&");
  if (url.includes("_CLa")) return url;
  return url.replace(/_AC_S[LXY]\d+_/, "_AC_SX385_");
}

// ═══════════════════════════════════════════════════════════════════════
// Auto-tag & auto-description from title
// ═══════════════════════════════════════════════════════════════════════
function autoTags(title) {
  const t = title.toLowerCase();
  const tags = [];

  // Gender
  if (t.includes("women") || t.includes("ladies") || t.includes("girl"))
    tags.push("women's");
  else if (
    t.includes("men") ||
    t.includes("dad") ||
    t.includes("guys") ||
    t.includes("father")
  )
    tags.push("men's");
  else tags.push("unisex");

  // Style / material
  if (
    t.includes("funny") ||
    t.includes("hilarious") ||
    t.includes("humor") ||
    t.includes("sarcas") ||
    t.includes("joke") ||
    t.includes("novelty")
  )
    tags.push("funny");
  if (
    t.includes("upf") ||
    t.includes("quick dry") ||
    t.includes("moisture") ||
    t.includes("performance") ||
    t.includes("athletic") ||
    t.includes("wicking")
  )
    tags.push("performance");
  if (t.includes("polo")) tags.push("polo");
  if (
    t.includes("tank") ||
    t.includes("sleeveless") ||
    t.includes("racerback") ||
    t.includes("vest")
  )
    tags.push("tank top");
  if (
    t.includes("long sleeve") ||
    t.includes("1/4 zip") ||
    t.includes("quarter zip")
  )
    tags.push("long sleeve");
  if (
    t.includes("hoodie") ||
    t.includes("sweatshirt") ||
    t.includes("pullover")
  )
    tags.push("hoodie");
  if (t.includes("v-neck") || t.includes("v neck")) tags.push("v-neck");
  if (t.includes("graphic") || t.includes("heartbeat") || t.includes("flag"))
    tags.push("graphic");
  if (t.includes("casual") || t.includes("gift")) tags.push("casual");
  if (t.includes("upf 50")) tags.push("UPF");
  if (t.includes("vintage") || t.includes("retro")) tags.push("vintage");
  if (t.includes("premium") || t.includes("tri-blend")) tags.push("premium");
  if (t.includes("retire")) tags.push("retirement");
  if (
    t.includes("patriotic") ||
    t.includes("american flag") ||
    t.includes("4th of july") ||
    t.includes("usa")
  )
    tags.push("patriotic");

  // Ensure at least two tags
  if (tags.length === 1) tags.push("casual");

  return tags;
}

// Filter out non-apparel products that sneak into search results
function isApparel(title) {
  const t = title.toLowerCase();
  // Must be some kind of wearable top
  const apparelTerms = [
    "shirt", "tee", "t-shirt", "tshirt", "top", "tank", "polo",
    "hoodie", "sweatshirt", "pullover", "jersey", "blouse",
    "sleeve", "v-neck", "crew neck", "henley",
  ];
  if (apparelTerms.some((term) => t.includes(term))) return true;
  // Reject known non-apparel
  const rejectTerms = [
    "paddle", "sock", "bag", "hat", "visor", "shorts", "skirt",
    "shoe", "sneaker", "ball", "net", "court", "rack", "clip",
    "bracelet", "necklace", "earring", "sticker", "decal", "towel",
    "bottle", "mug", "cup", "makeup", "cosmetic",
  ];
  if (rejectTerms.some((term) => t.includes(term))) return false;
  // Default: accept if it mentions pickleball (might be an unlabeled shirt)
  return t.includes("pickleball");
}

function autoDescription(title) {
  const t = title.toLowerCase();

  if (t.includes("upf") || t.includes("performance") || t.includes("quick dry"))
    return "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.";
  if (
    t.includes("funny") ||
    t.includes("hilarious") ||
    t.includes("novelty") ||
    t.includes("sarcas")
  )
    return "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.";
  if (t.includes("tank") || t.includes("sleeveless"))
    return "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.";
  if (t.includes("polo"))
    return "A classic polo style meets pickleball culture. Perfect for the player who wants to look sharp on and off the court.";
  if (t.includes("hoodie") || t.includes("sweatshirt"))
    return "Stay warm before and after your matches with this cozy pickleball hoodie. Perfect for cool-weather court sessions.";
  if (t.includes("long sleeve"))
    return "Long sleeve pickleball shirt offering extra sun protection and coverage. Ideal for outdoor play in any season.";
  if (t.includes("heartbeat"))
    return "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.";
  if (t.includes("women") || t.includes("ladies"))
    return "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.";
  if (t.includes("men") || t.includes("dad") || t.includes("guys"))
    return "A great pickleball tee for the guys. Whether you're competing or just hanging out, this shirt has you covered.";
  return "Rep your love for pickleball with this must-have shirt. Comfortable, stylish, and perfect for any pickleball enthusiast.";
}

// ═══════════════════════════════════════════════════════════════════════
// Check existing products for dead links
// ═══════════════════════════════════════════════════════════════════════
async function checkExistingProducts(entries) {
  console.log(
    `🩺 Checking ${entries.length} existing products for dead links...\n`
  );

  const dead = [];
  let checked = 0;
  let captchaStreak = 0;

  // Warm up session
  try {
    await fetch("https://www.amazon.com/", { headers: HEADERS });
    await sleep(rand(2000, 4000));
  } catch {}

  for (const entry of entries) {
    checked++;
    const result = await fetchProduct(entry.asin);

    if (result.status === "dead") {
      console.log(
        `  ❌ [${checked}/${entries.length}] ${entry.asin} — DEAD "${entry.title.slice(0, 50)}"`
      );
      dead.push(entry.asin);
      captchaStreak = 0;
    } else if (result.status === "captcha") {
      captchaStreak++;
      console.log(
        `  ⚠ [${checked}/${entries.length}] ${entry.asin} — CAPTCHA (streak: ${captchaStreak})`
      );
      if (captchaStreak >= 3) {
        const backoff = rand(60000, 120000);
        console.log(`  💤 Backing off ${Math.round(backoff / 1000)}s...`);
        await sleep(backoff);
        captchaStreak = 0;
      } else {
        await sleep(rand(8000, 15000));
      }
    } else if (result.status === "alive") {
      captchaStreak = 0;
      if (checked % 25 === 0) {
        console.log(
          `  ✅ [${checked}/${entries.length}] ...${dead.length} dead so far`
        );
      }
    } else {
      console.log(
        `  ⚠ [${checked}/${entries.length}] ${entry.asin} — ${result.status}: ${result.error || ""}`
      );
    }

    await humanDelay();

    // Coffee break every 40 products
    if (checked % 40 === 0 && checked < entries.length) {
      console.log(`  ☕ Coffee break...`);
      await coffeeBreak();
    }
  }

  console.log(`\n  Dead products found: ${dead.length}\n`);
  return dead;
}

// ═══════════════════════════════════════════════════════════════════════
// Fetch details for new products
// ═══════════════════════════════════════════════════════════════════════
async function fetchNewProducts(newAsins) {
  const capped = newAsins.slice(0, MAX_NEW_PRODUCTS);
  console.log(
    `🆕 Fetching details for ${capped.length} new products (cap: ${MAX_NEW_PRODUCTS})...\n`
  );

  const products = [];
  let captchaStreak = 0;

  // Warm up session
  try {
    await fetch("https://www.amazon.com/", { headers: HEADERS });
    await sleep(rand(2000, 4000));
  } catch {}

  for (let i = 0; i < capped.length; i++) {
    const asin = capped[i];
    const result = await fetchProduct(asin);

    if (result.status === "alive" && result.title) {
      captchaStreak = 0;
      const title = result.title;

      // Filter out non-apparel products (paddles, socks, bags, etc.)
      if (!isApparel(title)) {
        console.log(
          `  ⏭ [${i + 1}/${capped.length}] ${asin} — not apparel, skipping ("${title.slice(0, 50)}")`
        );
        continue;
      }

      products.push({
        asin,
        title,
        description: autoDescription(title),
        image: result.image || "",
        tags: autoTags(title),
      });
      console.log(
        `  ✅ [${i + 1}/${capped.length}] ${asin} — ${title.slice(0, 60)}`
      );
    } else if (result.status === "captcha") {
      captchaStreak++;
      console.log(
        `  ⚠ [${i + 1}/${capped.length}] ${asin} — CAPTCHA (streak: ${captchaStreak})`
      );
      if (captchaStreak >= 3) {
        const backoff = rand(60000, 120000);
        console.log(`  💤 Backing off ${Math.round(backoff / 1000)}s...`);
        await sleep(backoff);
        captchaStreak = 0;
      } else {
        await sleep(rand(8000, 15000));
      }
    } else if (result.status === "dead") {
      console.log(
        `  ⏭ [${i + 1}/${capped.length}] ${asin} — dead/unavailable, skipping`
      );
    } else {
      console.log(
        `  ⚠ [${i + 1}/${capped.length}] ${asin} — ${result.status}: ${result.error || ""}`
      );
    }

    await humanDelay();

    // Coffee break every 15 new products
    if ((i + 1) % 15 === 0 && i + 1 < capped.length) {
      console.log(`  ☕ Coffee break...`);
      await coffeeBreak();
    }
  }

  console.log(`\n  Successfully fetched: ${products.length} new products\n`);
  return products;
}

// ═══════════════════════════════════════════════════════════════════════
// Write the catalog file
// ═══════════════════════════════════════════════════════════════════════
function escapeStr(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

function writeCatalog(entries) {
  const lines = [];

lines.push(`import { siteConfig } from "@/lib/config";`);
  lines.push(``);
  lines.push(`const AFFILIATE_TAG = siteConfig.affiliateTag;`);
  lines.push(``);
  lines.push(`export interface Product {`);
  lines.push(`  id: string;`);
  lines.push(`  asin: string;`);
  lines.push(`  title: string;`);
  lines.push(`  description: string;`);
  lines.push(
    `  /** Amazon product image URL. Leave as empty string until a real ASIN is confirmed. */`
  );
  lines.push(`  image: string;`);
  lines.push(`  tags: string[];`);
  lines.push(`  affiliateUrl: string;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`/** @deprecated Use Product instead */`);
  lines.push(`export type Shirt = Product;`);
  lines.push(``);
  lines.push(`const shirts: Product[] = [`);

  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    const id = String(i + 1);
    const tagsStr = e.tags.map((t) => `"${t}"`).join(", ");
    const comma = i < entries.length - 1 ? "," : "";

    lines.push(`  {`);
    lines.push(`    id: "${id}",`);
    lines.push(`    asin: "${e.asin}",`);
    lines.push(`    title: "${escapeStr(e.title)}",`);
    lines.push(`    description:`);
    lines.push(`      "${escapeStr(e.description)}",`);
    lines.push(`    image:`);
    lines.push(`      "${e.image}",`);
    lines.push(`    tags: [${tagsStr}],`);
    lines.push(
      `    affiliateUrl: \`https://www.amazon.com/dp/${e.asin}?tag=\${AFFILIATE_TAG}\`,`
    );
    lines.push(`  }${comma}`);
  }

  lines.push(`];`);
  lines.push(``);
  lines.push(`export default shirts;`);
  lines.push(``);

  const content = lines.join("\n");

  if (DRY_RUN) {
    console.log("📝 DRY RUN — would write to lib/shirts.ts");
    console.log(`   Entries: ${entries.length}`);
    console.log(`   File size: ${(content.length / 1024).toFixed(1)} KB`);
  } else {
    writeFileSync(SHIRTS_PATH, content);
    console.log(`✅ Written ${entries.length} entries to lib/shirts.ts`);
  }
}

// ═══════════════════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════════════════
async function main() {
  console.log(
    "╔═══════════════════════════════════════════════════════════╗"
  );
  console.log(
    "║           Weekly Catalog Refresh                        ║"
  );
  console.log(
    "╚═══════════════════════════════════════════════════════════╝\n"
  );

  if (DRY_RUN) console.log("🏃 DRY RUN MODE — no files will be changed\n");

  // 1. Parse current catalog
  const existing = parseCatalog();
  const existingAsins = new Set(existing.map((e) => e.asin));
  console.log(`📦 Current catalog: ${existing.length} products\n`);

  let deadAsins = [];
  let newProducts = [];

  // 2. Check existing products for dead links
  if (!ADD_ONLY) {
    deadAsins = await checkExistingProducts(existing);
  }

  // 3. Read new ASINs from file OR discover via Playwright
  if (!CHECK_ONLY) {
    let newAsins;
    if (DISCOVER) {
      newAsins = await discoverAsins(existingAsins);
    } else {
      newAsins = readNewAsins(existingAsins);
    }
    if (newAsins.length > 0) {
      newProducts = await fetchNewProducts(newAsins);
    }
  }

  // 4. Summary
  console.log("═══════════════════════════════════════════════════════════");
  console.log("📊 SUMMARY");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`  Current catalog:     ${existing.length}`);
  console.log(`  Dead (removing):     ${deadAsins.length}`);
  console.log(`  New (adding):        ${newProducts.length}`);
  const finalSize = existing.length - deadAsins.length + newProducts.length;
  console.log(`  Final catalog size:  ${finalSize}`);
  console.log("═══════════════════════════════════════════════════════════\n");

  if (deadAsins.length > 0) {
    console.log("  Dead ASINs:", deadAsins.join(", "));
  }
  if (newProducts.length > 0) {
    console.log("  New products:");
    newProducts.forEach((p) =>
      console.log(`    ${p.asin} — ${p.title.slice(0, 60)}`)
    );
  }

  if (deadAsins.length === 0 && newProducts.length === 0) {
    console.log("\n✅ Catalog is up to date — no changes needed.\n");
    return;
  }

  // 5. Build updated catalog and write
  const deadSet = new Set(deadAsins);
  const updated = existing.filter((e) => !deadSet.has(e.asin));
  updated.push(...newProducts);

  console.log("");
  writeCatalog(updated);
  console.log("\n🎉 Done! Run `npm run build` to verify.\n");
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
