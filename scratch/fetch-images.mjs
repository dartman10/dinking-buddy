#!/usr/bin/env node
/**
 * Fetches product images from Amazon for all shirts with empty `image` fields.
 * Behaves like a real person browsing — cookie jar, full headers, random waits.
 *
 * Usage: node scratch/fetch-images.mjs [--dry-run]
 */

import { readFileSync, writeFileSync, unlinkSync, existsSync } from "fs";
import { execSync } from "child_process";
import { resolve, join } from "path";
import { tmpdir } from "os";

const SHIRTS_PATH = resolve("lib/shirts.ts");
const DRY_RUN = process.argv.includes("--dry-run");
const COOKIE_JAR = join(tmpdir(), `amz-cookies-${Date.now()}.txt`);

// ── Human-like timing ────────────────────────────────────────────────

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// Random delay like a person scrolling/clicking — 3-5s between pages
function humanDelay() {
  return sleep(rand(3000, 5000));
}

// Longer pause like someone got distracted — 8-15s
function longPause() {
  return sleep(rand(8000, 15000));
}

// ── Browser simulation ──────────────────────────────────────────────

const USER_AGENTS = [
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
];

// Stick with one UA for the whole session, like a real browser
const SESSION_UA = USER_AGENTS[rand(0, USER_AGENTS.length - 1)];

function curlCmd(url) {
  return [
    `curl -sL --max-time 20`,
    `--compressed`,
    `-b '${COOKIE_JAR}' -c '${COOKIE_JAR}'`,
    `-H 'User-Agent: ${SESSION_UA}'`,
    `-H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'`,
    `-H 'Accept-Language: en-US,en;q=0.9'`,
    `-H 'Accept-Encoding: gzip, deflate, br'`,
    `-H 'Connection: keep-alive'`,
    `-H 'Sec-Fetch-Dest: document'`,
    `-H 'Sec-Fetch-Mode: navigate'`,
    `-H 'Sec-Fetch-Site: none'`,
    `-H 'Sec-Fetch-User: ?1'`,
    `'${url}'`,
  ].join(" ");
}

// Visit the homepage first to get session cookies, like opening a new tab
function warmUpSession() {
  console.log("Opening amazon.com to start a session...");
  try {
    execSync(curlCmd("https://www.amazon.com/"), {
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    });
    console.log("Session ready.\n");
  } catch {
    console.log("Warm-up failed, continuing anyway.\n");
  }
}

function fetchImage(asin) {
  try {
    // Use Referer like we clicked from search results
    const cmd =
      curlCmd(`https://www.amazon.com/dp/${asin}`) +
      ` -H 'Referer: https://www.amazon.com/s?k=pickleball+shirt'`;

    const html = execSync(cmd, {
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    });

    if (html.length < 10000 && /captcha/i.test(html)) {
      return "CAPTCHA";
    }

    // hiRes is the best quality
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
  } catch {
    return null;
  }
}

function cleanUrl(url) {
  url = url.replace(/&amp;/g, "&");
  if (url.includes("_CLa")) return url;
  return url.replace(/_AC_S[LXY]\d+_/, "_AC_SX385_");
}

// ── Main ─────────────────────────────────────────────────────────────

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

  // Start a session like a real browser
  warmUpSession();
  await sleep(rand(2000, 4000));

  let updated = 0;
  let failed = 0;
  let captchaStreak = 0;

  for (let i = 0; i < shirts.length; i++) {
    const [, id, asin, title] = shirts[i];

    const imageUrl = fetchImage(asin);

    if (imageUrl === "CAPTCHA") {
      captchaStreak++;
      console.log(`  ⚠ #${id} ${asin} — CAPTCHA (streak: ${captchaStreak})`);
      failed++;

      if (captchaStreak >= 3) {
        // Back off like a person who hit a wall — wait 45-90s
        const backoff = rand(45000, 90000);
        console.log(`  💤 Backing off ${Math.round(backoff / 1000)}s...`);
        await sleep(backoff);
        // Re-warm the session with fresh cookies
        if (existsSync(COOKIE_JAR)) unlinkSync(COOKIE_JAR);
        warmUpSession();
        await sleep(rand(8000, 15000));
        captchaStreak = 0;
      } else {
        await sleep(rand(5000, 10000));
      }
    } else if (imageUrl) {
      captchaStreak = 0;
      console.log(
        `  ✅ [${updated + 1}/${shirts.length}] #${id} ${asin} → ${imageUrl.slice(0, 65)}...`
      );
      if (!DRY_RUN) {
        const escapedAsin = asin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const replacePattern = new RegExp(
          `(asin:\\s*"${escapedAsin}",[\\s\\S]*?image:\\s*\\n?\\s*)"",`
        );
        const newSrc = src.replace(
          replacePattern,
          `$1\n      "${imageUrl}",`
        );
        if (newSrc !== src) {
          src = newSrc;
          updated++;
          // Save after every successful fetch
          writeFileSync(SHIRTS_PATH, src, "utf-8");
        } else {
          console.log(`  ⚠ #${id} ${asin} — regex replace failed`);
          failed++;
        }
      } else {
        updated++;
      }
    } else {
      captchaStreak = 0;
      console.log(
        `  ❌ #${id} ${asin} (${title.slice(0, 40)}...) — no image found`
      );
      failed++;
    }

    // Human-like delay between each request
    if (i < shirts.length - 1) {
      // Every ~10 items, take a longer break like a person would
      if ((i + 1) % rand(8, 12) === 0) {
        const pause = rand(15000, 30000);
        console.log(`  ☕ Taking a break... ${Math.round(pause / 1000)}s`);
        await sleep(pause);
      } else {
        await humanDelay();
      }
    }
  }

  // Clean up cookie jar
  if (existsSync(COOKIE_JAR)) unlinkSync(COOKIE_JAR);

  console.log(`\n━━━ Summary ━━━`);
  console.log(`Updated: ${updated}`);
  console.log(`Failed:  ${failed}`);
  console.log(`Total:   ${shirts.length}`);
  if (!DRY_RUN && updated > 0) {
    console.log(`\n✅ Wrote ${updated} images to ${SHIRTS_PATH}`);
  } else if (DRY_RUN) {
    console.log(`\n🔍 Dry run — no files changed.`);
  }
}

main().catch(console.error);
