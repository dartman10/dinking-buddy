const AFFILIATE_TAG = "dinkingbuddy-20";

export interface Shirt {
  id: string;
  asin: string;
  title: string;
  description: string;
  /** Amazon product image URL. Leave as empty string until a real ASIN is confirmed. */
  image: string;
  tags: string[];
  affiliateUrl: string;
}

const shirts: Shirt[] = [
  {
    id: "1",
    asin: "B0GTVMH4KW",
    title: "Pickleball: Dinking Buddy Premium Tri-Blend T-Shirt",
    description:
      "Friends don't let friends dink alone. Whether you're a beginner or a seasoned pickleball player, every great match starts with the right partner. Find yours at DinkingBuddy.com",
    image:
      "https://m.media-amazon.com/images/I/914uPaqMXjL._CLa%7C2140%2C2000%7C8152LWwxHTL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX342_.png",
    tags: ["unisex", "premium", "tri-blend"],
    affiliateUrl: `https://www.amazon.com/dp/B0GTVMH4KW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "2",
    asin: "B0GV3YVGHY",
    title: "Pickleball: Dinking Master T-Shirt",
    description:
      "Prove you've mastered the art of the dink with this bold graphic tee. Perfect for the player who controls the kitchen with finesse and confidence.",
    image:
      "https://m.media-amazon.com/images/I/A1dbsmzbGeL._CLa%7C2140%2C2000%7C81oHAaMA2PL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX342_.png",
    tags: ["unisex", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GV3YVGHY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "3",
    asin: "B0B1N7F3XQ",
    title: "Mens Funny Pickleball T-Shirt – Legend",
    description:
      "Show everyone on the court that you're a legend with this hilarious graphic tee from Crazy Dog. Soft, comfortable, and guaranteed to get laughs between rallies.",
    image:
      "https://m.media-amazon.com/images/I/718AciaWF2L._AC_SX385_.jpg",
    tags: ["men's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0B1N7F3XQ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "4",
    asin: "B0CSPS8Y6T",
    title: "Funny Pickleball Tee – You Just Got Served",
    description:
      "Let your opponents know what just happened with this witty pickleball tee. A fan-favorite from Crazy Dog T-Shirts with a soft, comfortable fit.",
    image:
      "https://m.media-amazon.com/images/I/81cFhVvZhBL._AC_SX385_.jpg",
    tags: ["men's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0CSPS8Y6T?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "5",
    asin: "B0F8898BTK",
    title: "UPF 50+ Pickleball Performance Tee – Bigfoot Dink Power",
    description:
      "Stay cool and protected on the court with this quick-dry UPF 50+ performance shirt. Features a fun Bigfoot dinking graphic — because even Sasquatch plays pickleball.",
    image:
      "https://m.media-amazon.com/images/I/71NmDJSbX4L._AC_SX342_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0F8898BTK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "6",
    asin: "B0F888KKRW",
    title: "UPF 50+ Pickleball Performance Tee – Day Dink Vibes",
    description:
      "Sun protection meets pickleball style. This lightweight, moisture-wicking performance tee keeps you comfortable during long outdoor sessions on the court.",
    image:
      "https://m.media-amazon.com/images/I/71gZdhRCTBL._AC_SX342_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0F888KKRW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "7",
    asin: "B0C4WTTX34",
    title: "Life is Good – Keep It Simple Pickleball Crusher Tee",
    description:
      "From the iconic Life is Good brand, this 100% USA-grown cotton crusher tee celebrates the simple joy of pickleball. Soft, durable, and destined to become your favorite court-day shirt.",
    image:
      "https://m.media-amazon.com/images/I/71aGBUFrnLL._AC_SX385_.jpg",
    tags: ["men's", "premium", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0C4WTTX34?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "8",
    asin: "B08QJCMCMM",
    title: "I Love It When My Wife Lets Me Play Pickleball T-Shirt",
    description:
      "The ultimate conversation-starter on and off the court. A hilarious gift for the husband whose wife graciously allows him to sneak away for one more game.",
    image:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C81SedA2W0FL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX342_.png",
    tags: ["men's", "funny", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B08QJCMCMM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "9",
    asin: "B0FJDTZQ9K",
    title: "Pickleball: It's Always A Good Time – Funny Tee",
    description:
      "Rain or shine, weekday or weekend — it's always a good time for pickleball. A sarcastic novelty tee from Crazy Dog that speaks the truth every player feels.",
    image:
      "https://m.media-amazon.com/images/I/71GIPfhU4EL._AC_SX385_.jpg",
    tags: ["men's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJDTZQ9K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "10",
    asin: "B0C628B9LK",
    title: "Women's Pickleball Graphic Tee – Was That Out?",
    description:
      "The eternal pickleball question, now on a shirt. Soft, true-to-size, and perfect for the player who always gives the benefit of the doubt — or doesn't.",
    image:
      "https://m.media-amazon.com/images/I/71HtZpb0rEL._AC_SY445_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C628B9LK?tag=${AFFILIATE_TAG}`,
  },
];

export default shirts;
