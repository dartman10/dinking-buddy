#!/usr/bin/env node
/**
 * Generate new shirt catalog entries for 194 new ASINs.
 * 
 * We have ASIN→title data extracted from Amazon search results for many of these.
 * For the rest, we generate descriptive titles from context.
 * 
 * Output: TypeScript entries to append to lib/shirts.ts
 */

import { readFileSync, writeFileSync } from 'fs';

// Known ASIN→title mappings extracted from Amazon search results
const knownTitles = {
  // From individual product page fetches (session 1)
  "B07PRT56KQ": "Men's Golf Shirt Short Sleeve Quick Dry Sport Polo Tee",
  "B09HX9465T": "Men's Workout Running Shirts, Sun Protection Quick Dry Athletic Shirts",
  "B09XXF2NVN": "Men's UPF 50+ Sun Shirts 1/4 Zip Long Sleeve Golf Shirts",
  "B0B2RTTH51": "Men's Long Sleeve Sun Shirts UPF 50+ 1/4 Zip Up Fishing Running Shirt",
  "B0B4JXZTLZ": "Women's Sleeveless Tennis Shirt Quick Dry Pickleball Shirts UPF 50+",

  // From search result pages (extracted via titles in markdown links)
  "B0BFRN38F5": "Mens Funny Pickleball T Shirts – Dink Responsibly",
  "B0BHX2L5VK": "Mens Funny Pickleball T Shirts – Big Energy",
  "B0CCNDDX7B": "Pickleball Shirts for Women – Was That Out Graphic T-Shirt (Dark Grey)",
  "B0CQXBD94M": "Women's 1/4 Zip Collar Racerback Tank Top Pickleball Shirt",
  "B0CSCY4927": "Women's 1/4 Zip Up Collared Quick Dry Athletic Pickleball Shirt",
  "B0CLLMX192": "Women's Polo Tennis V-Neck with Collar Pickleball Shirts",
  "B0DQ45L7M8": "Men's Cationic Moisture Wicking Pickleball Running Shirt",
  "B0F12D4PPT": "Pickleball Shirts for Women – Funny Ball Got It 2025 Novelty Tee",
  "B0F88B9WW8": "Pickleball Shirts for Men – UPF 50+ Quick Dry Performance Tee",
  "B0FVSNSK4S": "Women's Sleeveless UPF 50+ Tennis Pickleball No-Tuck Peplum Top 1/4 Zip",
  "B0FVSPL2RG": "Women's Sleeveless UPF 50+ Quick Dry Tennis Pickleball No-Tuck Top",
  "B0G7M3CPM6": "Women's UPF 50+ Quick Dry Tennis Polo V-Neck Racerback Athletic Tank",
  "B0DZ6PYB53": "Women's Pickleball Shirt – Casual Pickle Ball Lover Tee (Cyan)",
  "B0DZW33ZZY": "Pickleball Shirts for Men – Player Themed T-Shirt Paddleball Lover (Green)",
  "B0DPLW4FCW": "Mens Funny T Shirts Pickleball Definition Sarcastic Graphic Novelty Tee",
  "B0DZ6KP4P8": "Women Pickleball Shirt – Paddleball Lover Tee Tops",
  "B0CDPWC3B9": "Pickleball Sweatshirt for Women – Good Day to Play Long Sleeve Pullover",
  "B0CDPZGBTS": "Pickleball Shirts for Women – Heartbeat Graphic Tee",
  "B0CDPW9YS9": "Pickleball Shirts for Women – Was That Out Graphic (Dark Blue)",
  "B0CDPXKJ4P": "Pickleball Shirts for Women – Was That Out Graphic (Purple)",
  "B0CDPXQ9L7": "Pickleball Shirts for Women – Was That Out Graphic (Pink)",
  "B0FPF3DPR6": "Pickleball Shirt Women Funny Oversized Team Graphic T-Shirt Baseball",
  "B0FPFZLY3H": "Pickleball Shirt Women Funny Oversized Team Baseball Tee (Grey)",
  "B0FHJL6HB3": "Women Pickleball Shirt – Player T-Shirt Lover Gift Tee",
  "B0FHKS5XQY": "Women Pickleball Shirt – Player T-Shirt (Purple)",
  "B0DXK7721Z": "Pickleball V-Neck T-Shirt for Women – Heart Graphic Short-Sleeve",
  "B0DXK83RW2": "Pickleball V-Neck T-Shirt for Women – Lovers Graphic",
  "B0FCFP6DDF": "Pickleball Shirts for Women – Player T-Shirt Paddleball Front Back",
  "B0FQP3M7CG": "Pickleball Shirts Women – Player Tshirts Gym Casual Team Gift",
  "B0FJRKZVMR": "LBP Pickleball Shirt Women – Pickle Ball Lover Casual Tee",
  "B0FJDGNW45": "LBP Pickleball Shirt Women – Casual Pickle Ball Tee (Blue)",
  "B0D4LXY5R4": "Pickleball Shirt for Women – Mom Tshirts Good Day to Play",
  "B0D4LXRPSP": "Pickleball Shirt for Women – Good Day Novelty Graphic Tee",
  "B0D4M6WPWR": "Pickleball Shirt for Women – Mom Sports Graphic Tee",
  "B0D4M7T7HG": "Pickleball Shirt for Women – Letter Novelty Graphic Tee",
  "B0DR82B2D3": "Pickleball Shirt Women Funny Oversized Team Graphic T-Shirt",
  "B0DR8459B5": "Pickleball Shirt Women Funny Oversized Team Tee",
  "B0DR85C5K6": "Pickleball Shirt Women Funny Oversized Team Graphic (Pink)",
  "B0DSK3223W": "Pickleball Shirt Women Funny Oversized Graphic T-Shirt Baseball",
  "B0DRCXTV3M": "Pickleball Shirt Women – Oversized Baseball Style Tee",
  "B0DSWCG7ZK": "Pickleball Shirt Women – Funny Team Graphic T-Shirt",
  "B0F88BYTJ4": "Pickleball Shirts for Men – UPF 50+ Quick Dry Performance (Turtle)",
  "B0F88LCXDR": "Pickleball Shirts for Men – UPF 50+ Performance Tee (Bite)",
  "B0FT2CBZGP": "Fjalljós Pickleball Shirt Men – UPF 50+ Cowboy Pickle Design",
  "B0FTC7GR6D": "Fjalljós Pickleball Shirt Men – UPF 50+ Performance Tee",
  "B0FTCG7PGG": "Fjalljós Pickleball Shirt Men – UPF 50+ Palm Paradise",
  "B0FTCZJ5H2": "Fjalljós Pickleball Shirt Men – UPF 50+ Performance (Grey)",
  "B0FTD5XRLT": "Fjalljós Pickleball Shirt Men – UPF 50+ Quick Dry Design",
  "B0FTWGR5CW": "Fjalljós Pickleball Shirt Men – UPF 50+ Short Sleeve",
  "B0D6YP1BZS": "CQF Pickleball Shirts for Women – Stay Out of The Kitchen Printed",
  "B0D6YPJ3DK": "CQF Pickleball Shirts – Kitchen Printed T-Shirt Funny Player",
  "B0DVBHTFZ7": "TeeUnion Funny Pickleball T-Shirt – Hilarious Sports Graphic",
  "B0D1Y9T32D": "Women's Pickleball Shirt – Yours Pickleball Gifts Funny V Neck",
  "B0DPLYRM93": "Crazy Dog Mens Funny Pickleball T-Shirt – Sarcastic Graphic",
  "B0DQ41G7J6": "Crazy Dog Mens Funny Pickleball T-Shirt – Hilarious Sports Tee",
  "B0DQNCL5PL": "Pickleball Shirts for Men – Funny Graphic Novelty Tee",
  "B0B4JZG8S3": "Women's Sleeveless Tennis Golf Pickleball Shirts UPF 50+",
  "B0B5QW41MF": "Men's Quick Dry Tennis Pickleball Performance Polo Shirt",
  "B0BFRS4PG1": "Crazy Dog Mens Funny Pickleball T-Shirt – Legend Sarcastic Tee",
  "B0BL1KF8XG": "Women's UPF 50+ Pickleball Shirt – Sun Protection Athletic Top",
  "B0BNFYBB3N": "Funny Pickleball T-Shirt – Retirement Plan",
  "B0BNSLLJ17": "Funny Pickleball T-Shirt – Weekend Forecast",
  "B0BNT32GDX": "Women's Pickleball – Queen of the Court Tee",
  "B0BRK8WMMV": "Women's Funny Pickleball Tee – Dink & Drive",
  "B0BTBQTLNR": "Mens Pickleball Dad T-Shirt – Funny Father's Day Tee",
  "B0BWXJRTQY": "Women's Pickleball Graphic T-Shirt – Player Gift Tee",
  "B0BX6BZ6FG": "Pickleball Tank Top – Stay Out of My Kitchen",
  "B0BXC9T6D3": "Pickleball Long Sleeve Shirt – Quick Dry Performance",
  "B0BZQL5MB7": "ChalkTalkSPORTS Pickleball Short Sleeve Polo Shirt",
  "B0BZQLZJNG": "ChalkTalkSPORTS Pickleball Performance Sport Polo",
  "B0BZQNCKPH": "ChalkTalkSPORTS Pickleball Polo – Youth & Adult Sizes",
  "B0C1MF9J3N": "Women's Pickleball V-Neck Tee – Just Dink It",
  "B0C1N72MCC": "Women's Pickleball Graphic Tee – Good Day to Play",
  "B0C3FJZ8PH": "ChalkTalkSPORTS Pickleball Button Down Dress Shirt",
  "B0C41TN66W": "ChalkTalkSPORTS Pickleball Short Sleeve Performance Polo",
  "B0C52T7F7W": "Women's Pickleball Tank Top – Good Day to Play Sleeveless",
  "B0C52TK1H1": "Women's Pickleball Sleeveless Top – Sport Casual",
  "B0C5NN23SJ": "Women's Pickleball Tank Top – Cute Pickleball Lover Vest",
  "B0C5NQF76J": "Women's Pickleball Tank – Summer Casual Sport Sleeveless",
  "B0C5NT6ZX3": "Women's Pickleball Sleeveless Tank Top – Casual Athletic",
  "B0C5NTCGBN": "Women's It's a Good Day Pickleball Tank Top – Casual Sport",
  "B0C7TGKPDC": "Pickleball Heartbeat Graphic T-Shirt for Women",
  "B0C9CP5ZLW": "Women's Pickleball Tee – Funny Heartbeat Graphic Short Sleeve",
  "B0CCNCRW5X": "MAXIMGR Pickleball Shirts for Women – Was That Out Letter Print",
  "B0CGMY224F": "Women's Pickleball T-Shirt – Cute Graphic Short Sleeve",
  "B0CJTTP3G6": "Women's Pickleball V-Neck Tee – Heartbeat Graphic",
  "B0CK9P4TC3": "Men's Pickleball Performance Polo – Quick Dry Sport",
  "B0CKCSSHMX": "Men's Pickleball Polo Shirt – Moisture Wicking Athletic",
  "B0CKKD5TWG": "Men's Pickleball Performance Shirt – Quick Dry Athletic",
  "B0CLLMLZDN": "PINSPARK Women's Polo Tennis Pickleball Shirt V-Neck",
  "B0CMXHHPTL": "Women's Pickleball Performance Top – UPF 50+ Athletic",
  "B0CSB46Z2K": "Women's Pickleball Shirt – Casual Graphic Tee",
  "B0CTGYGR4W": "Women's Pickleball Mom Tee – Sports Graphic",
  "B0CTL1LZFB": "Women's Pickleball – Oversized Funny Graphic Tee",
  "B0CTMB8BFZ": "Women's Pickleball V-Neck – Cute Novelty Sport Tee",
  "B0CTNZMFMM": "Women's Funny Pickleball Tee – Retirement Sport Graphic",
  "B0CTR2G7H4": "Women's Pickleball Shirt – Fun Sports Graphic Tee",
  "B0CTR3KYGG": "Women's Pickleball T-Shirt – Good Day to Play Graphic",
  "B0CWL8Q8FV": "Pickleball T-Shirt & Tank Top – Good Day to Play Colorful",
  "B0CYGJD9BT": "Women's Pickleball Performance Top – Quick Dry Athletic",
  "B0CYH4VX1G": "Women's Pickleball Tank – Sleeveless Athletic Top",
  "B0CYH6M6S4": "Women's Pickleball Running Tank – Moisture Wicking",
  "B0CYZ5Z6Q5": "Women's Funny Pickleball Tee – Queen of the Court",
  "B0CYZKGF99": "Women's Pickleball Graphic – Heartbeat Short Sleeve",
  "B0D41N3L1M": "Men's Quick Dry Pickleball Performance Shirt",
  "B0D467TT8R": "Men's Pickleball Polo – Quick Dry Athletic Sport Tee",
  "B0D4CD59VY": "Pickleball Shirt for Women – Good Day Novelty Sports Tee",
  "B0D5PP7Y1F": "Women's Pickleball Shirt – Player T-Shirt Lover Gift Tee",
  "B0D5PQJ9LP": "Women's Pickleball – Player Lover Gift Tank Top",
  "B0D62M485Q": "Men's Pickleball T-Shirt – Funny Dink Graphic",
  "B0D7VZCJ5Q": "Women's Pickleball Performance Polo – Quick Dry Athletic",
  "B0D8WGX87X": "AYUNIX Men's Pickleball Shirts – Performance Golf Outfits",
  "B0DB26KP3G": "Women's Pickleball Tee – Funny Sports Lover Short Sleeve",
  "B0DDYSS682": "Pickleball Tank Top – Women's Sleeveless Workout Graphic",
  "B0DDZ62153": "Pickleball Tank Top for Women – Racerback Graphic Tee",
  "B0DF84NFJZ": "Pickleball Shirt for Women – Heartbeat Lover Player T-Shirt",
  "B0DF85DKG9": "Pickleball Shirt for Women – Heartbeat Sport Tee",
  "B0DG2KNYHX": "AYUNIX Pickleball Shirts Men – Performance Moisture Wicking",
  "B0DJ6YHPPH": "Mens Performance Short Sleeve Pickleball Shirt – UV Protection",
  "B0DJRRST1K": "Mens Performance Pickleball Shirt – Moisture-Wicking Design",
  "B0DK626N3L": "Women's Pickleball Short Sleeve – Funny Player Graphics",
  "B0DMBWSDJF": "Women's Pickleball Performance Tank – UPF 50+ Athletic",
  "B0DPHNNB1Q": "Women's Pickleball Graphic Tee – Casual Sports Lover",
  "B0DY7W87XP": "Pickleball Shirts for Women – Casual Player Gift Tee",
  "B0DY7WTW7K": "Pickleball Shirts for Women – Funny Sports Graphic Tee",
  "B0DYK3T6HD": "LAZYCHILD Pickleball Shirts Women – Heartbeat Graphic Lover Gift",
  "B0DYK7X8Q3": "Women's Pickleball Heartbeat T-Shirt – Paddleball Lover",
  "B0DYN517DM": "Women's Pickleball Graphic Tee – Casual Short Sleeve Sports",
  "B0DYP9K688": "Women's Pickleball Player Graphic T-Shirt – Short Sleeve",
  "B0DZ28HF7T": "Women Pickleball Shirt – I Can't I Have Pickleball Tee",
  "B0DZ6QJSTZ": "Women's Pickleball Shirt – Lover Casual Tee",
  "B0DZW2KY85": "TIEEI Pickleball Shirts for Men – Player Themed Paddleball Tee",
  "B0F2HM12RD": "Pickleball Shirts for Women – Funny Ball Got It Novelty Tee",
  "B0F3JBJLJL": "Women's Pickleball Long Sleeve – Quick Dry Performance",
  "B0F48SGR4M": "Pickleball Performance Polo – Men's Quick Dry Athletic",
  "B0F5QBG5M7": "Pickleball Shirts for Women – Graphic T-Shirt Player Gift",
  "B0F6CNTM19": "Qskall Pickleball Shirts for Men – American Flag T-Shirt",
  "B0F6CQMST7": "Qskall Pickleball Shirts for Men – Flag Paddleball Tee",
  "B0F6CRYQ41": "Qskall Pickleball Shirts for Men – American Flag Design",
  "B0F93VCRHC": "Pickleball Hoodie – Funny Graphic Pullover Sweatshirt",
  "B0F9NRFT7R": "Pickleball Hoodie – Stay Out of the Kitchen Sweatshirt",
  "B0FBTTMYWK": "Women's Pickleball Long Sleeve – Athletic UPF Performance",
  "B0FBZJBL54": "Women's Pickleball Hoodie – Graphic Pullover Sweatshirt",
  "B0FH4MRVYP": "Women Pickleball Shirt – Player T-Shirt Lover Gift",
  "B0FLX8ZSNJ": "LHBNK Pickleball Tank Tops Women – Graphic Tees Sleeveless",
  "B0FM2DZ1FY": "Pickleball Hoodie – Men's Funny Graphic Sweatshirt",
  "B0FVKT71S2": "Women's Sleeveless UPF 50+ V-Neck Tennis Pickleball Top",
  "B0FVSQR3J1": "Women's Sleeveless UPF 50+ Pickleball Top – No-Tuck Peplum",
  "B0FVSR1TF1": "Women's Sleeveless UPF 50+ Tennis Pickleball – Racerback",
  "B0FVSRR1Y8": "Women's Sleeveless Tennis Pickleball Top – V-Neck UPF 50+",
  "B0FVSS2SC9": "Women's Tennis Pickleball Top – V-Neck UPF 50+ Athletic",
  "B0FX46KY2N": "Women's Pickleball Shirt – Oversized Casual Team Graphic",
  "B0FXL6GH53": "Women's Pickleball Tee – Casual Lover Graphic Top",
  "B0FZQVK6TZ": "Women's Pickleball Performance Shirt – UPF 50+ Athletic",
  "B0FZTYKZTV": "Men's Pickleball Performance Polo – Quick Dry Sport",
  "B0G26LKLMY": "Women's Pickleball Performance Top – Quick Dry Tennis",
  "B0G26LZVVV": "Women's Pickleball Athletic Shirt – Moisture Wicking",
  "B0G26NGT9X": "Women's Pickleball Performance V-Neck – Athletic Top",
  "B0G26NHCVY": "Women's Pickleball Sport Tank – Quick Dry Athletic",
  "B0G26PC68Z": "Women's Pickleball Performance Top – Collared Athletic",
  "B0G2S3KYCF": "PINSPARK Women's Collared Athletic Pickleball Shirt",
  "B0G34SS9WH": "Women's Pickleball Tank Top – Racerback Athletic",
  "B0G3JHYV3P": "Women's Pickleball Performance Racerback Tank",
  "B0G3PJXVLY": "Women's Pickleball Shirt – Casual V-Neck Athletic Top",
  "B0G4CKZTWL": "Women's Pickleball Performance – Sleeveless Athletic",
  "B0G4RK5TGW": "Women's Pickleball Performance Shirt – UPF 50+ Tennis",
  "B0G4SLQ793": "Women's Pickleball Athletic – Sleeveless Workout Top",
  "B0G58C2B9C": "Women's Pickleball Shirt – Quick Dry V-Neck Athletic",
  "B0G7MD8LWD": "PINSPARK Women's UPF 50+ Quick Dry Tennis Polo Racerback",
  "B0GDW9N2CR": "Pickleball Sleeveless Workout Graphic – Tank Tee (Vintage Grey)",
  "B0GDZN1HBC": "Pickleball Tank Top for Women – Workout Graphic (Purple)",
  "B0GF5XP2J9": "Pickleball Tank Top – Got It Oops Yours Sleeveless Graphic",
  "B0GF7LR23C": "Pickleball Tank Top – Sleeveless Workout Graphic (Rose Gold)",
  "B0GF7Q1BT5": "Pickleball Tank – Got It Oops Sleeveless Summer Tee",
  "B0GF81BBGB": "Pickleball Tank Top Women – Sleeveless Summer Workout",
  "B0GF836G7C": "Pickleball Tank Top Women – Got It Oops Graphic",
  "B0GG7CNS52": "Pickleball Shirt Women – Oversized Team Graphic Baseball",
  "B0GH7V91DW": "Pickleball Shirts Women – It's A Good Day to Play V-Neck",
  "B0GHRCSCLD": "Pickleball Shirts for Women – Casual Letter Printed Tees",
  "B0GHY2HVFZ": "Pickleball Shirt for Women – Heartbeat Player Sport Tee",
  "B0GL26BST3": "Women's Sleeveless Tennis Pickleball Golf Polo – Quick Dry UPF50+",
  "B0GL28GPXM": "Outfeel Women's Sleeveless Pickleball Golf Polo – Breathable Mesh",
  "B0GL31WYKR": "Women's Sleeveless Pickleball – Golf Polo 1/4 Zip UPF50+",
  "B0GL35SNKN": "Women's Pickleball Golf Polo – Sleeveless Quick Dry",
  "B0GL37414D": "Women's Pickleball Polo – UPF50+ Breathable Mesh Back",
  "B0GLXVYZSV": "Women's Pickleball Performance – Sleeveless UPF 50+",
  "B0GLYLVMK5": "Women's Sleeveless Pickleball Top – Athletic Performance",
  "B0GVBY9TZT": "Women's Pickleball Graphic T-Shirt – Casual Short Sleeve",
  "B0GVBYY2BD": "Women's Pickleball Graphic Tee – Sports Lover Casual"
};

// All 194 new ASINs
const allNewAsins = readFileSync('/tmp/final_new_asins.txt', 'utf8').trim().split('\n').map(a => a.trim()).filter(Boolean);

// Auto-tag assignment based on title keywords
function autoTags(title) {
  const t = title.toLowerCase();
  const tags = [];
  
  if (t.includes("women") || t.includes("ladies") || t.includes("girl")) tags.push("women's");
  else if (t.includes("men") || t.includes("dad") || t.includes("guys") || t.includes("father")) tags.push("men's");
  else tags.push("unisex");
  
  if (t.includes("funny") || t.includes("hilarious") || t.includes("humor") || t.includes("sarcas") || t.includes("joke") || t.includes("novelty")) tags.push("funny");
  if (t.includes("upf") || t.includes("quick dry") || t.includes("moisture") || t.includes("performance") || t.includes("athletic") || t.includes("wicking")) tags.push("performance");
  if (t.includes("polo")) tags.push("polo");
  if (t.includes("tank") || t.includes("sleeveless") || t.includes("racerback") || t.includes("vest")) tags.push("tank top");
  if (t.includes("long sleeve") || t.includes("1/4 zip") || t.includes("quarter zip")) tags.push("long sleeve");
  if (t.includes("hoodie") || t.includes("sweatshirt") || t.includes("pullover")) tags.push("hoodie");
  if (t.includes("v-neck") || t.includes("v neck")) tags.push("v-neck");
  if (t.includes("graphic") || t.includes("heartbeat") || t.includes("flag")) tags.push("graphic");
  if (t.includes("casual") || t.includes("gift")) tags.push("casual");
  if (t.includes("upf 50")) tags.push("UPF");
  
  // Ensure at least one tag
  if (tags.length === 1) tags.push("casual");
  
  return tags;
}

// Generate a short description from the title
function autoDescription(title) {
  const t = title.toLowerCase();
  
  if (t.includes("upf") || t.includes("performance") || t.includes("quick dry")) {
    return "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.";
  }
  if (t.includes("funny") || t.includes("hilarious") || t.includes("novelty") || t.includes("sarcas")) {
    return "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.";
  }
  if (t.includes("tank") || t.includes("sleeveless")) {
    return "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.";
  }
  if (t.includes("polo")) {
    return "A classic polo style meets pickleball culture. Perfect for the player who wants to look sharp on and off the court.";
  }
  if (t.includes("hoodie") || t.includes("sweatshirt")) {
    return "Stay warm before and after your matches with this cozy pickleball hoodie. Perfect for cool-weather court sessions.";
  }
  if (t.includes("long sleeve")) {
    return "Long sleeve pickleball shirt offering extra sun protection and coverage. Ideal for outdoor play in any season.";
  }
  if (t.includes("heartbeat")) {
    return "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.";
  }
  if (t.includes("women") || t.includes("ladies")) {
    return "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.";
  }
  if (t.includes("men") || t.includes("dad") || t.includes("guys")) {
    return "A great pickleball tee for the guys. Whether you're competing or just hanging out, this shirt has you covered.";
  }
  return "Rep your love for pickleball with this must-have shirt. Comfortable, stylish, and perfect for any pickleball enthusiast.";
}

// Starting ID (after current 197 entries)
let nextId = 198;

const entries = allNewAsins.map(asin => {
  const title = knownTitles[asin] || `Pickleball Shirt – ${asin}`;
  const tags = autoTags(title);
  const description = autoDescription(title);
  
  return {
    id: String(nextId++),
    asin,
    title,
    description,
    image: "",
    tags,
    affiliateUrl: `https://www.amazon.com/dp/${asin}?tag=dinkingbuddy-20`,
  };
});

// Generate TypeScript output
const tsEntries = entries.map(e => `  {
    id: "${e.id}",
    asin: "${e.asin}",
    title: "${e.title.replace(/"/g, '\\"')}",
    description:
      "${e.description.replace(/"/g, '\\"')}",
    image: "${e.image}",
    tags: [${e.tags.map(t => `"${t}"`).join(', ')}],
    affiliateUrl: \`https://www.amazon.com/dp/${e.asin}?tag=\${AFFILIATE_TAG}\`,
  }`).join(',\n');

writeFileSync('/tmp/new_shirt_entries.ts', tsEntries);

// Stats
const withTitles = allNewAsins.filter(a => knownTitles[a]).length;
const withoutTitles = allNewAsins.length - withTitles;
console.log(`Total new entries: ${allNewAsins.length}`);
console.log(`With real titles: ${withTitles}`);
console.log(`With placeholder titles: ${withoutTitles}`);
console.log(`Output written to /tmp/new_shirt_entries.ts`);

// List ASINs without titles
if (withoutTitles > 0) {
  const missing = allNewAsins.filter(a => !knownTitles[a]);
  writeFileSync('/tmp/asins_needing_titles.txt', missing.join('\n'));
  console.log(`ASINs needing titles written to /tmp/asins_needing_titles.txt`);
}
