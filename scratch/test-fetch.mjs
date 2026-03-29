// Quick test: what does Amazon return for a product page?
const asin = process.argv[2] || "B0F12ML71L";

const resp = await fetch(`https://www.amazon.com/dp/${asin}`, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
  },
});

const html = await resp.text();
console.log("Status:", resp.status);
console.log("Length:", html.length);
console.log("Has CAPTCHA:", html.includes("captcha") || html.includes("CAPTCHA"));
console.log("Has robot:", html.includes("robot") || html.includes("Robot"));
console.log("Has api-services-support:", html.includes("api-services-support"));

// Check og:image
const og = html.match(/<meta\s+(?:property|name)="og:image"\s+content="([^"]+)"/i);
console.log("og:image:", og ? og[1].slice(0, 100) : "NOT FOUND");

// Check hiRes
const hiRes = html.match(/"hiRes"\s*:\s*"([^"]+)"/);
console.log("hiRes:", hiRes ? hiRes[1].slice(0, 100) : "NOT FOUND");

// Check mainUrl
const mainUrl = html.match(/"mainUrl"\s*:\s*"([^"]+)"/);
console.log("mainUrl:", mainUrl ? mainUrl[1].slice(0, 100) : "NOT FOUND");

// Check for any m.media-amazon image
const anyImg = html.match(/https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9+]+\._[^"'\s]+/);
console.log("anyImg:", anyImg ? anyImg[0].slice(0, 100) : "NOT FOUND");

// First 500 chars of page title area
const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
console.log("Title:", titleMatch ? titleMatch[1].trim().slice(0, 120) : "NOT FOUND");
