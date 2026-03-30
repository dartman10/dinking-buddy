#!/usr/bin/env node
/**
 * Fetches product images from Amazon using Node.js fetch API (not curl).
 * Uses a different HTTP fingerprint to bypass curl-specific CAPTCHAs.
 *
 * Usage: node scratch/fetch-images-v2.mjs [--dry-run]
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const SHIRTS_PATH = resolve("lib/shirts.ts");
const DRY_RUN = process.argv.includes("--dry-run");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const HEADERS = {
  "User-Agent": UA,
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Accept-Encoding": "gzip, deflate, br",
  "Cache-Control": "max-age=0",
  "Sec-Ch-Ua": '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": '"macOS"',
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
};

async function fetchImage(asin) {
  try {
    const resp = await fetch(`https://www.amazon.com/dp/${asin}`, {
      headers: {
        ...HEADERS,
        Referer: "https://www.amazon.com/s?k=pickleball+shirt",
      },
      redirect: "follow",
    });
    const html = await resp.text();

    if (html.length < 10000 && /captcha/i.test(html)) {
      return "CAPTCHA";
    }

    // hiRes is best quality
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

    return null;
  } catch (e) {
    console.log(`    Error: ${e.message}`);
    return null;
  }
}

function cleanUrl(url) {
  url = url.replace(/&amp;/g, "&");
  if (url.includes("_CLa")) return url;
  return url.replace(/_AC_S[LXY]\d+_/, "_AC_SX385_");
}

async function main() {
  let src = readFileSync(SHIRTS_PATH, "utf-8");

  const shirtPattern =
    /\{\s*\n\s*id:\s*"(\d+)",\s*\n\s*asin:\s*"([A-Z0-9]+)",\s*\n\s*title:\s*"([^"]+)",[^}]*?image:\s*\n?\s*"",/g;
  const shirts = [...src.matchAll(shirtPattern)];
  console.log(`Found ${shirts.length} products with empty images.\n`);

  if (shirts.length === 0) {
    console.log("Nothing to do!");
    return;
  }

  // Warm up — visit homepage
  console.log("Warming up session...");
  try {
    await fetch("https://www.amazon.com/", { headers: HEADERS });
    console.log("Session ready.\n");
  } catch {
    console.log("Warm-up failed, continuing.\n");
  }
  await sleep(rand(2000, 4000));

  let updated = 0;
  let failed = 0;
  let captchaStreak = 0;

  for (let i = 0; i < shirts.length; i++) {
    const [, id, asin, title] = shirts[i];

    const imageUrl = await fetchImage(asin);

    if (imageUrl === "CAPTCHA") {
      captchaStreak++;
      console.log(`  ⚠ #${id} ${asin} — CAPTCHA (streak: ${captchaStreak})`);
      failed++;

      if (captchaStreak >= 3) {
        const backoff = rand(60000, 120000);
        console.log(`  💤 Backing off ${Math.round(backoff / 1000)}s...`);
        await sleep(backoff);
        captchaStreak = 0;
      } else {
        await sleep(rand(8000, 15000));
      }
    } else if (imageUrl) {
      captchaStreak = 0;
      console.log(
        `  ✅ [${updated + 1}/${shirts.length}] #${id} ${asin} → ${imageUrl.slice(0, 65)}...`
      );

      if (!DRY_RUN) {
        // Re-read file for freshest content
        src = readFileSync(SHIRTS_PATH, "utf-8");
        const asinBlock = new RegExp(
          `(asin:\\s*"${asin}"[\\s\\S]*?image:\\s*\\n?\\s*)""`
        );
        const newSrc = src.replace(asinBlock, `$1"${imageUrl}"`);
        if (newSrc !== src) {
          writeFileSync(SHIRTS_PATH, newSrc);
          src = newSrc;
          console.log(`    ✍ Saved.`);
        } else {
          console.log(`    ⚠ Could not find replacement target for ${asin}`);
        }
      }
      updated++;
    } else {
      captchaStreak = 0;
      console.log(`  ✗ #${id} ${asin} — no image found`);
      failed++;
    }

    // Wait between requests
    if (i < shirts.length - 1) {
      if ((i + 1) % 15 === 0) {
        const pause = rand(15000, 30000);
        console.log(`  ☕ Coffee break ${Math.round(pause / 1000)}s...`);
        await sleep(pause);
      } else if ((i + 1) % 5 === 0) {
        await sleep(rand(8000, 15000));
      } else {
        await sleep(rand(3000, 6000));
      }
    }
  }

  console.log(`\nDone! Updated: ${updated}, Failed: ${failed}`);
}

main();
