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
  {
    id: "11",
    asin: "B0BKFFSHF9",
    title: "My Retirement Plan: Pickleball – Premium Tri-Blend Tee",
    description:
      "Forget golf — your retirement plan is pickleball. This soft 90% cotton / 10% polyester tee from Ann Arbor T-shirt Co. is made in the USA and perfect for the retiree who found their true calling.",
    image:
      "https://m.media-amazon.com/images/I/81+SgKzdGoL._AC_SX342_.jpg",
    tags: ["unisex", "funny", "gift", "retirement"],
    affiliateUrl: `https://www.amazon.com/dp/B0BKFFSHF9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "12",
    asin: "B0G7SPV2PL",
    title: "Salty Bones Dink Responsibly Graphic T-Shirt",
    description:
      "Dink responsibly — on and off the court. This 100% ringspun cotton tee from Salty Bones is printed in the USA with a classic fit and premium feel that earns its 4.9-star rating.",
    image:
      "https://m.media-amazon.com/images/I/61s2O+04wvL._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0G7SPV2PL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "13",
    asin: "B0DZCJTYVP",
    title: "Stay Out of The Kitchen – Women's Pickleball Tee",
    description:
      "The number-one rule in pickleball, now emblazoned on a lightweight women's tee. A must-have for the player who lives to dominate the non-volley zone.",
    image:
      "https://m.media-amazon.com/images/I/81yuE0XB1RL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZCJTYVP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "14",
    asin: "B0DVB72614",
    title: "Funny Pickleball T-Shirt – Hilarious Sports Graphic",
    description:
      "A 4.9-star fan favorite from TeeUnion with a hilarious sports graphic that'll have your pickleball crew laughing between points. Unisex fit, maximum humor.",
    image:
      "https://m.media-amazon.com/images/I/81pJJb48CJL._AC_SX342_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DVB72614?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "15",
    asin: "B0F8888H4J",
    title: "UPF 50+ Turtle Dawn Rally Performance Tee",
    description:
      "Hit the outdoor courts worry-free with this UPF 50+ quick-dry performance tee from Fjalljós. The Turtle Dawn Rally graphic adds style while the 90% polyester / 10% spandex blend keeps you cool.",
    image:
      "https://m.media-amazon.com/images/I/712pjAtQ26L._AC_SX342_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0F8888H4J?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "16",
    asin: "B0CWKX8QBV",
    title: "It's A Good Day to Play Pickleball – Women's Graphic Top",
    description:
      "Every day is a good day for pickleball! This soft cotton-blend tee features a cheerful graphic and relaxed fit that's perfect for game day or casual hangouts.",
    image:
      "https://m.media-amazon.com/images/I/51kdDW75e-L._AC_SX342_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CWKX8QBV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "17",
    asin: "B0D5M1GFTN",
    title: "Women's Pickleball Player Gift Tee – SUWATOIN",
    description:
      "A best-selling pickleball tee with 239+ reviews and a 4.7-star rating. Super soft, true to size, and available in multiple colors — the perfect gift for any woman who loves the game.",
    image:
      "https://m.media-amazon.com/images/I/81KLThqoHML._AC_SX385_.jpg",
    tags: ["women's", "gift", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5M1GFTN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "18",
    asin: "B0C61RXTKW",
    title: "Pickleball Heartbeat Graphic Tee – Women's Short Sleeve",
    description:
      "Show your heartbeat runs on pickleball with this cute heartbeat-graphic tee. Made from a premium cotton blend that's lightweight, stretchy, and comfortable all day long.",
    image:
      "https://m.media-amazon.com/images/I/71ey+1CYPGL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C61RXTKW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "19",
    asin: "B0DYKB86Z9",
    title: "American Flag Pickleball T-Shirt – Men's Patriotic Tee",
    description:
      "Show your love for pickleball and America with this patriotic flag tee from Qskall. A soft 60% polyester / 35% rayon / 5% spandex blend that's perfect for 4th of July tournaments.",
    image:
      "https://m.media-amazon.com/images/I/51E9WOFn8ML._AC_SY445_.jpg",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYKB86Z9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "20",
    asin: "B0BWXJ16L5",
    title: "Women's Pickleball Graphic T-Shirt – Player Gift Tee",
    description:
      "A 4.6-star rated graphic tee from VVNTY with cute pickleball designs. Soft cotton blend, versatile styling, and the kind of shirt that gets compliments on and off the court.",
    image:
      "https://m.media-amazon.com/images/I/71gXwPtIOwL._AC_SX342_.jpg",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0BWXJ16L5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "21",
    asin: "B0D5Y248WX",
    title: "LBP Pickleball Shirt – Women's Pickle Ball Lover Tee",
    description:
      "Show your love for the game with this casual women's pickleball tee from LBP. Soft cotton blend, relaxed fit, and perfect for game day or everyday wear.",
    image:
      "https://m.media-amazon.com/images/I/81PazGFvnTL._AC_SX385_.jpg",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5Y248WX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "22",
    asin: "B0F12ML71L",
    title: "Funny Pickleball Shirt – Women's Ball Got It 2025 Tee",
    description:
      "A 2025 novelty retirement-ready pickleball shirt with a fun 'Ball Got It' graphic. Great conversation starter on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71RpkhvYFlL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F12ML71L?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "23",
    asin: "B0FP33JSB2",
    title: "Pickleball Shirts Women – Player Team Tshirts",
    description:
      "Rep your pickleball squad with this women's team-style graphic tee. Comfortable short sleeve fit, perfect for casual matches and practice sessions.",
    image: 
      "https://m.media-amazon.com/images/I/81Ulu092iBL._AC_SX385_.jpg",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FP33JSB2?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "24",
    asin: "B0F1FSNM8V",
    title: "Women's Oversized Pickleball Team Graphic T-Shirt",
    description:
      "An oversized, relaxed-fit pickleball graphic tee for women who like their shirts comfortable and their dinks precise. Baseball-fan style design.",
    image: 
      "https://m.media-amazon.com/images/I/61vKP1JlhKL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F1FSNM8V?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "25",
    asin: "B0D62Q5HYD",
    title: "I Can't, I Have Pickleball – Women's Tee",
    description:
      "The perfect excuse for every invitation. This 'I Can't, I Have Pickleball' shirt lets everyone know where your priorities are.",
    image: 
      "https://m.media-amazon.com/images/I/81OnZXivoxL._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0D62Q5HYD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "26",
    asin: "B0CWLF42FW",
    title: "It's A Good Day to Play Pickleball – Women's Colorful Tee",
    description:
      "Brighten up your wardrobe with this colorful pickleball graphic tee. Every day is a good day to play when you're wearing this cheerful shirt.",
    image: 
      "https://m.media-amazon.com/images/I/81gjMjM1ZlL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CWLF42FW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "27",
    asin: "B0C5QYPPNM",
    title: "Women's It's a Good Day to Play Pickleball Tank Top",
    description:
      "Stay cool on the court with this women's racerback tank top. A cute pickleball lover vest shirt perfect for summer casual sport.",
    image: 
      "https://m.media-amazon.com/images/I/71216l4K9HL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5QYPPNM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "28",
    asin: "B0DZCLZKK8",
    title: "TUPOSU Pickleball Shirt for Women – Player Lover Tee",
    description:
      "A dedicated pickleball player shirt from TUPOSU with a fun graphic design. Makes a great gift for any woman who loves the game.",
    image: 
      "https://m.media-amazon.com/images/I/71WT87ACm0L._AC_SX385_.jpg",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZCLZKK8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "29",
    asin: "B0GH7Q7H2H",
    title: "It's A Good Day – Women's V-Neck Pickleball Tee",
    description:
      "A relaxed V-neck tee with a fun pickleball graphic. Casual enough for everyday wear, sporty enough for post-game hangouts.",
    image: 
      "https://m.media-amazon.com/images/I/71EXh-WCIlL._AC_SX385_.jpg",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GH7Q7H2H?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "30",
    asin: "B0DSDN1BGX",
    title: "Pickleball Oversized Graphic T-Shirt – Baseball Fan Style",
    description:
      "A trendy oversized graphic tee that combines pickleball love with baseball-style flair. Short sleeve, relaxed fit, and full of personality.",
    image: 
      "https://m.media-amazon.com/images/I/61lwSWVS6FL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSDN1BGX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "31",
    asin: "B0BWXJ1NVP",
    title: "Women's Pickleball Graphic T-Shirt – Player Gift",
    description:
      "A versatile women's pickleball graphic tee that works as a thoughtful gift or a treat for yourself. Short sleeve, comfortable fit.",
    image: 
      "https://m.media-amazon.com/images/I/71gXwPtIOwL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0BWXJ1NVP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "32",
    asin: "B0GC63R8NJ",
    title: "Pickleball Tank Top – Got It Oops Yours Sleeveless",
    description:
      "The classic pickleball call-out on a sleeveless summer tank. 'Got It... Oops, Yours!' — every player knows this moment.",
    image: 
      "https://m.media-amazon.com/images/I/71-8Lerm8JL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GC63R8NJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "33",
    asin: "B0GJSQ8MNR",
    title: "Peace Love Pickleball – Women's Sport T-Shirt",
    description:
      "Peace, love, and pickleball — the three essentials. A fun graphic tee for women who believe in living the good life, one dink at a time.",
    image: 
      "https://m.media-amazon.com/images/I/71g9IU0fMuL._AC_SX385_.jpg",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GJSQ8MNR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "34",
    asin: "B0C624RM1W",
    title: "Was That Out? – Women's Letter Print Pickleball Shirt",
    description:
      "The most debated question in pickleball history, now on a shirt. A playful letter-print graphic tee that every player can relate to.",
    image: 
      "https://m.media-amazon.com/images/I/71HtZpb0rEL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C624RM1W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "35",
    asin: "B0DXKHHRJJ",
    title: "Pickleball Heart V-Neck Graphic Tee – Women's",
    description:
      "Wear your heart on your sleeve — and your love for pickleball on your chest. A cute heart-themed V-neck graphic tee for women.",
    image: 
      "https://m.media-amazon.com/images/I/61nIqTMtH1L._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DXKHHRJJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "36",
    asin: "B0GJBHMN1G",
    title: "Cutesong Pickleball Player T-Shirt – Funny Sports Lover",
    description:
      "A funny and cute pickleball player tee from Cutesong. Short sleeve, lightweight, and perfect for showing off your love of the sport.",
    image: 
      "https://m.media-amazon.com/images/I/71Gb+sz6FzL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GJBHMN1G?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "37",
    asin: "B0DZ6JLR1L",
    title: "I Can't, I Have Pickleball – Women's Paddleball Lover",
    description:
      "Another excuse to skip everything else — because pickleball comes first. A fun paddleball lover tee for women with priorities.",
    image: 
      "https://m.media-amazon.com/images/I/71q+GRUd4ML._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ6JLR1L?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "38",
    asin: "B0F186TZZY",
    title: "LHBNK Pickleball Tank Tops – Women's Graphic Summer",
    description:
      "A fun graphic pickleball tank top from LHBNK. Perfect for hot summer matches, gym sessions, or just showing off your pickleball obsession.",
    image: 
      "https://m.media-amazon.com/images/I/81sC5ix1grL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F186TZZY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "39",
    asin: "B0FCYSKQ66",
    title: "LuxLass Pickleball Shirt – Front & Back Print Women's",
    description:
      "Stand out with front and back pickleball graphic prints from LuxLass. A paddleball-themed tee that says you're serious about the game.",
    image: 
      "https://m.media-amazon.com/images/I/716z+J8hZUL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FCYSKQ66?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "40",
    asin: "B0D6YQLQTD",
    title: "Stay Out of The Kitchen – Women's Printed Tee",
    description:
      "The golden rule of pickleball on a graphic tee. Stay out of the kitchen and look great doing it with this women's printed shirt.",
    image: 
      "https://m.media-amazon.com/images/I/71rrWPizpFL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YQLQTD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "41",
    asin: "B0D4M1B6SY",
    title: "Pickleball Mom – It's a Good Day Tee",
    description:
      "For the mom who never misses a game. A dedicated pickleball mom tee that celebrates the sport and the player who balances it all.",
    image: 
      "https://m.media-amazon.com/images/I/81R-DRK6XjL._AC_SX385_.jpg",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4M1B6SY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "42",
    asin: "B0CM5QH7T9",
    title: "COLORFUL BLING Women's Pickleball T-Shirt – Crew Neck",
    description:
      "A stylish crew neck pickleball tee from COLORFUL BLING. Stretchable cotton blend with a regular fit that's comfortable on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/91ZGoUniGEL._AC_SX385_.jpg",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CM5QH7T9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "43",
    asin: "B0CJTRSFNP",
    title: "Women's Athletic V-Neck Pickleball Tee",
    description:
      "An athletic V-neck pickleball tee designed for active play. Lightweight, breathable, and ready for competitive or casual matches.",
    image: 
      "https://m.media-amazon.com/images/I/81mEJFFpCnL._AC_SX385_.jpg",
    tags: ["women's", "performance", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CJTRSFNP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "44",
    asin: "B0GKZSK88L",
    title: "Women's Funny Polo Shirt – Pickleball Golf Tennis Print",
    description:
      "A fun printed polo shirt that bridges pickleball, golf, and tennis. Collared design makes it court-ready and country-club approved.",
    image: 
      "https://m.media-amazon.com/images/I/71o5WHSWSjL._AC_SX385_.jpg",
    tags: ["women's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0GKZSK88L?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "45",
    asin: "B0C5QZG9TZ",
    title: "Pickleball Lover Vest – Women's Sleeveless Tank",
    description:
      "A sleeveless pickleball vest shirt for summer sport. Casual, comfortable, and perfect for showing off your toned pickleball arms.",
    image: 
      "https://m.media-amazon.com/images/I/71216l4K9HL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5QZG9TZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "46",
    asin: "B0GCDJWRW7",
    title: "ZIRWTI Play Pickleball Racerback Tank – Women's",
    description:
      "A racerback graphic tank from ZIRWTI with a fun 'Play Pickleball' design. Athletic gym clothes meet pickleball style.",
    image: 
      "https://m.media-amazon.com/images/I/71pQyyb0VhL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GCDJWRW7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "47",
    asin: "B0D4CFHWLB",
    title: "Pickleball Shirt – Vintage Sports Lover Graphic Tee",
    description:
      "A vintage-inspired pickleball graphic tee for the sports lover. The retro design adds character to this everyday-wearable shirt.",
    image: 
      "https://m.media-amazon.com/images/I/61GIQyL0TWL._AC_QL10_SX980_SY55_FMwebp_.jpg",
    tags: ["women's", "graphic", "vintage"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4CFHWLB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "48",
    asin: "B0D1Y89663",
    title: "Got It Oops Yours – Pickleball V-Neck Funny Tee",
    description:
      "The universal pickleball callout on a women's V-neck tee. A funny gift for pickleball lovers who've lived this moment a thousand times.",
    image: 
      "https://m.media-amazon.com/images/I/61eNrqFuVXL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D1Y89663?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "49",
    asin: "B0GHYMTJJP",
    title: "IFQ Heartbeat Pickleball Lover T-Shirt – Women's",
    description:
      "Show the world your heartbeat runs on pickleball with this graphic tee from IFQ. A fun sport lover shirt with a pulse-line design.",
    image: 
      "https://m.media-amazon.com/images/I/71DOPz5GhZL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GHYMTJJP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "50",
    asin: "B0DDL2WYN7",
    title: "LAZYCHILD Pickleball Heartbeat Graphic T-Shirt",
    description:
      "A heartbeat-themed pickleball tee from LAZYCHILD. The EKG-style graphic shows your vital signs are all pickleball, all the time.",
    image: 
      "https://m.media-amazon.com/images/I/81L5fWjdBwL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0DDL2WYN7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "51",
    asin: "B0FPTPNKTB",
    title: "Pickleball Because Murder is Wrong – Funny Women's Tee",
    description:
      "The ultimate stress-relief sport, now with a hilarious tagline. A darkly funny pickleball tee for women with a great sense of humor.",
    image: 
      "https://m.media-amazon.com/images/I/81BxJC2m4wL._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FPTPNKTB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "52",
    asin: "B0DY7WVBR3",
    title: "Pickleball Short Sleeve Shirt – Women's Casual",
    description:
      "A simple, comfortable short sleeve pickleball shirt for everyday wear. Clean design, relaxed fit, and perfect for casual outings.",
    image: 
      "https://m.media-amazon.com/images/I/71hRYfhSW-L._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DY7WVBR3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "53",
    asin: "B0D5PVFHPL",
    title: "LIWYLU Pickleball Tank Top – Women's Player Gift",
    description:
      "A pickleball player gift tank from LIWYLU. Casual sports tee with sleeveless design, perfect for warm-weather play.",
    image: 
      "https://m.media-amazon.com/images/I/71k9rMH0wIL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5PVFHPL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "54",
    asin: "B0F1F1JHN9",
    title: "Pickleball Shirts – 2025 Novelty Retirement Sport Graphic",
    description:
      "A novelty retirement sport graphic tee for the 2025 pickleball obsessive. Because your new full-time job is playing pickleball.",
    image: 
      "https://m.media-amazon.com/images/I/61GIQyL0TWL._AC_QL10_SX980_SY55_FMwebp_.jpg",
    tags: ["women's", "funny", "retirement"],
    affiliateUrl: `https://www.amazon.com/dp/B0F1F1JHN9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "55",
    asin: "B0GH7H4L6Y",
    title: "WESEOOU V-Neck Pickleball Tees – Women's Casual",
    description:
      "A relaxed V-neck pickleball tee from WESEOOU. Casual letter-print design that's perfect for the women who live for the game.",
    image: 
      "https://m.media-amazon.com/images/I/717XfOfMGJL._AC_SX385_.jpg",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GH7H4L6Y?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "56",
    asin: "B0F8NVKZ1C",
    title: "Women's Sleeveless Graphic Workout Pickleball Top",
    description:
      "A sleeveless graphic workout top for the active pickleball player. Designed for movement and breathability during intense matches.",
    image: 
      "https://m.media-amazon.com/images/I/61i8d9S0QpL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0F8NVKZ1C?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "57",
    asin: "B0C1N6CRN5",
    title: "Was That Out? – Women's Pickleball T-Shirt",
    description:
      "The eternal pickleball debate on yet another must-have tee. Because the ball was definitely out... or was it?",
    image: 
      "https://m.media-amazon.com/images/I/81UN7dsHXJL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C1N6CRN5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "58",
    asin: "B0F48SX6GV",
    title: "ChalkTalkSPORTS Pickleball Button Down Dress Shirt",
    description:
      "Dress it up with this ChalkTalkSPORTS pickleball button-down. A polished look for the player who takes both their game and style seriously.",
    image: 
      "https://m.media-amazon.com/images/I/81MEG3oWVDL._AC_SX385_.jpg",
    tags: ["men's", "premium", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0F48SX6GV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "59",
    asin: "B0BZQLB45K",
    title: "ChalkTalkSPORTS Pickleball Performance Polo – Adult",
    description:
      "A premium performance polo from ChalkTalkSPORTS designed for the serious pickleball player. Moisture-wicking fabric keeps you cool under pressure.",
    image: 
      "https://m.media-amazon.com/images/I/71H5Q2JT9GL._AC_SX385_.jpg",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0BZQLB45K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "60",
    asin: "B0DY4HHTJY",
    title: "Men's Pinhole Stitching Performance Pickleball Shirt",
    description:
      "Technical pinhole stitching construction for maximum airflow during competitive play. A performance shirt built for athletes who don't slow down.",
    image: 
      "https://m.media-amazon.com/images/I/61-OBkMcgaL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DY4HHTJY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "61",
    asin: "B0DLGTZYVL",
    title: "Men's Performance Short Sleeve Pickleball Tee – UV",
    description:
      "UV-protective short sleeve performance tee for outdoor pickleball. Moisture-wicking technology keeps you dry through every rally.",
    image: 
      "https://m.media-amazon.com/images/I/51m0LggrPLL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0DLGTZYVL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "62",
    asin: "B0DQF3H31G",
    title: "Franklin Sports Men's Performance Pickleball Shirt",
    description:
      "From the trusted name in sports equipment, Franklin Sports delivers a performance pickleball shirt built for competitive play and lasting comfort.",
    image: 
      "https://m.media-amazon.com/images/I/71jX7wF9wQL._AC_SX385_.jpg",
    tags: ["men's", "performance", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQF3H31G?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "63",
    asin: "B0F887KYYF",
    title: "Fjalljós Turtle Neck Pickleball Performance Shirt",
    description:
      "A unique turtle neck performance design from Fjalljós with UPF 50+ sun protection. Stand out on the court with style and function.",
    image: 
      "https://m.media-amazon.com/images/I/712pjAtQ26L._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0F887KYYF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "64",
    asin: "B0FTMZ8YNP",
    title: "Fjalljós UPF 50+ Pickleball Performance Tee – Quick Dry",
    description:
      "Quick-dry UPF 50+ performance tee from Fjalljós. Purpose-built for outdoor pickleball with moisture-wicking fabric and athletic cut.",
    image: 
      "https://m.media-amazon.com/images/I/71rChkwEgSL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTMZ8YNP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "65",
    asin: "B0DQF368RC",
    title: "Franklin Sports Performance Pickleball Shirt – White",
    description:
      "A clean white performance polo from Franklin Sports. Classic courtside style with modern moisture-wicking technology.",
    image: 
      "https://m.media-amazon.com/images/I/618XFFXIHqL._AC_SX385_.jpg",
    tags: ["men's", "performance", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQF368RC?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "66",
    asin: "B0FTMWGWH7",
    title: "Fjalljós Performance Pickleball Tee – Short Sleeve",
    description:
      "Another standout from Fjalljós, this short sleeve performance tee combines athletic cut with technical fabric for serious court time.",
    image: 
      "https://m.media-amazon.com/images/I/71yaf-TPweL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTMWGWH7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "67",
    asin: "B0CKM47TZS",
    title: "Men's Performance Pickleball Raglan Tee",
    description:
      "A raglan-cut performance tee designed for full range of motion on the pickleball court. Athletic fit with breathable construction.",
    image: 
      "https://m.media-amazon.com/images/I/81oELbdlg1L._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0CKM47TZS?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "68",
    asin: "B0GD6WDDGD",
    title: "Cozople Athletic Pickleball Performance Shirt",
    description:
      "Cozople's athletic pickleball shirt combines performance fabric with a comfortable fit. Designed for players who demand both style and function.",
    image: 
      "https://m.media-amazon.com/images/I/71m64IU7qkL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0GD6WDDGD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "69",
    asin: "B0DY7X93P3",
    title: "Men's Pinhole Performance Pickleball Tee – Variant",
    description:
      "Technical performance tee with pinhole ventilation for enhanced airflow. Stay cool during the most competitive matches.",
    image: 
      "https://m.media-amazon.com/images/I/61XicHmMRtL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DY7X93P3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "70",
    asin: "B0F888VVDJ",
    title: "Fjalljós Unique Print Pickleball Shirt – Performance",
    description:
      "A unique graphic print performance pickleball shirt from Fjalljós. Quick-dry fabric meets eye-catching design.",
    image: 
      "https://m.media-amazon.com/images/I/711mDtnyU5L._AC_SX385_.jpg",
    tags: ["men's", "performance", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F888VVDJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "71",
    asin: "B0DG2N63ZP",
    title: "AYUNIX Pickleball Polo – Men's Performance",
    description:
      "Step onto the court in style with the AYUNIX pickleball polo. Moisture-wicking performance fabric with a sharp collared design.",
    image: 
      "https://m.media-amazon.com/images/I/71ZXoRItARL._AC_SX385_.jpg",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DG2N63ZP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "72",
    asin: "B0DG2N6FZG",
    title: "AYUNIX Pickleball Polo Shirt – Men's Sport",
    description:
      "A sport-ready polo from AYUNIX designed for the competitive pickleball player. Keeps you dry and looking sharp all match long.",
    image: 
      "https://m.media-amazon.com/images/I/71ZXoRItARL._AC_SX385_.jpg",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DG2N6FZG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "73",
    asin: "B0BZQM3PV6",
    title: "ChalkTalkSPORTS Pickleball Performance Polo – Sport",
    description:
      "A sport-focused performance polo from ChalkTalkSPORTS. Premium moisture management for the player who takes every point seriously.",
    image: 
      "https://m.media-amazon.com/images/I/71Ho90f6ITL._AC_SX385_.jpg",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0BZQM3PV6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "74",
    asin: "B0DZ6Q4HYT",
    title: "Men's Seamless Pickleball Performance Shirt",
    description:
      "Seamless construction eliminates chafing during intense play. A next-level performance shirt for dedicated pickleball athletes.",
    image: 
      "https://m.media-amazon.com/images/I/71OrVtL4+iL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ6Q4HYT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "75",
    asin: "B0CNM6QPD3",
    title: "Men's Long Sleeve Pickleball Athletic Shirt",
    description:
      "Extra coverage for early morning or late afternoon court sessions. A long sleeve athletic pickleball shirt with performance fabric.",
    image: 
      "https://m.media-amazon.com/images/I/81jDIrLnXAL._AC_SX385_.jpg",
    tags: ["men's", "performance", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0CNM6QPD3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "76",
    asin: "B0C4X1JNDG",
    title: "Life is Good – Keep It Simple Pickleball Tee (Dark)",
    description:
      "The iconic Life is Good Crusher Tee in a darker colorway. USA-grown cotton, simple pickleball graphic, maximum comfort.",
    image: 
      "https://m.media-amazon.com/images/I/71aGBUFrnLL._AC_SX385_.jpg",
    tags: ["men's", "premium", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C4X1JNDG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "77",
    asin: "B0DQ3ZWYBH",
    title: "Men's Moisture Wicking Pickleball Performance Shirt",
    description:
      "Engineered for athletes, this moisture-wicking performance shirt keeps you dry and comfortable through marathon pickleball sessions.",
    image: 
      "https://m.media-amazon.com/images/I/81JoxhAt8eL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQ3ZWYBH?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "78",
    asin: "B0DYJZKKHZ",
    title: "Men's Orion Performance Pickleball Shirt",
    description:
      "The Orion performance pickleball shirt delivers technical fabric and athletic cut for competitive players who demand the best.",
    image: 
      "https://m.media-amazon.com/images/I/31IvAi9NhdL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYJZKKHZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "79",
    asin: "B0D7W36R6J",
    title: "AYUNIX Pickleball Performance Polo – Golf Outfits",
    description:
      "Dress for the club and the court with this versatile AYUNIX polo. Pickleball graphics meet golf-course style.",
    image: 
      "https://m.media-amazon.com/images/I/81o-R95+yzL._AC_SX385_.jpg",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0D7W36R6J?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "80",
    asin: "B0FGKRYRJ2",
    title: "Court & Coast Short Sleeve Pickleball Shirt",
    description:
      "From court to coast, this versatile short sleeve shirt transitions seamlessly between active play and casual hangouts.",
    image: 
      "https://m.media-amazon.com/images/I/71mozk0+GHL._AC_SX385_.jpg",
    tags: ["men's", "performance", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FGKRYRJ2?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "81",
    asin: "B0F6CRV83X",
    title: "Qskall American Flag Pickleball T-Shirt – 4th of July",
    description:
      "Combine patriotism and pickleball with this American flag graphic tee from Qskall. Perfect for 4th of July tournaments and holiday cookouts.",
    image: 
      "https://m.media-amazon.com/images/I/719BzbYlxBL._AC_SX385_.jpg",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F6CRV83X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "82",
    asin: "B0DQF2CX98",
    title: "Franklin Sports Ultimate Polo – Pickleball Edition",
    description:
      "Franklin Sports' ultimate polo shirt in a pickleball edition. Premium feel, athletic performance, and a brand you trust.",
    image: 
      "https://m.media-amazon.com/images/I/71nyoDb27TL._AC_SX385_.jpg",
    tags: ["men's", "polo", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQF2CX98?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "83",
    asin: "B0DZW1D81T",
    title: "TIEEI Pickleball Shirts – Men's Paddleball Themed Tee",
    description:
      "A paddleball-themed graphic tee from TIEEI for the men's pickleball enthusiast. Casual fit with a fun player-themed design.",
    image: 
      "https://m.media-amazon.com/images/I/71N0NYj0oWL._AC_SX385_.jpg",
    tags: ["men's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZW1D81T?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "84",
    asin: "B0BKG1PMZL",
    title: "Ann Arbor Retirement Plan: Pickleball – Funny Shirt",
    description:
      "From Ann Arbor T-shirt Co., the ultimate retirement plan shirt. Because the only thing better than retiring is retiring to play pickleball.",
    image: 
      "https://m.media-amazon.com/images/I/81+SgKzdGoL._AC_SX385_.jpg",
    tags: ["men's", "funny", "retirement"],
    affiliateUrl: `https://www.amazon.com/dp/B0BKG1PMZL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "85",
    asin: "B0FTWJ25PN",
    title: "Men's Funny Long Sleeve Polo – Pickleball Edition",
    description:
      "A long sleeve polo with pickleball humor built in. Perfect for those cooler court days when you still want to make your opponents laugh.",
    image: 
      "https://m.media-amazon.com/images/I/81FY2tVWZ9L._AC_SX385_.jpg",
    tags: ["men's", "polo", "funny", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTWJ25PN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "86",
    asin: "B0BJWCJLMK",
    title: "The Dinkfather – Funny Pickleball T-Shirt for Men",
    description:
      "An offer your fellow players can't refuse. The Dinkfather parody tee is the ultimate power move for any pickleball godfather.",
    image: 
      "https://m.media-amazon.com/images/I/71e7haLmjlL._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0BJWCJLMK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "87",
    asin: "B0DZ2698Z2",
    title: "Men's Pickleball Polo – Pickles Print",
    description:
      "A fun pickles-print polo for the man who doesn't take himself too seriously. Stylish enough for the court, funny enough for the after-party.",
    image: 
      "https://m.media-amazon.com/images/I/91uirGC-ZSL._AC_SX385_.jpg",
    tags: ["men's", "polo", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ2698Z2?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "88",
    asin: "B0DGV912RB",
    title: "Men's Quarter Zip Pickleball Performance Shirt",
    description:
      "A sleek quarter-zip performance shirt for the player who wants versatility. Zip up for warmup, unzip for intense rallies.",
    image: 
      "https://m.media-amazon.com/images/I/71AfnGWjifL._AC_SX385_.jpg",
    tags: ["men's", "performance", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0DGV912RB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "89",
    asin: "B0CF3X3QN9",
    title: "Margaritaville Fins Up Pickleball Shirt",
    description:
      "It's 5 o'clock somewhere, and pickleball is always on the schedule. The Margaritaville Fins Up pickleball shirt brings island vibes to the court.",
    image: 
      "https://m.media-amazon.com/images/I/71qaAGe5wTL._AC_SX385_.jpg",
    tags: ["men's", "casual", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0CF3X3QN9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "90",
    asin: "B0C3FG2L7X",
    title: "ChalkTalkSPORTS Pickleball Short Sleeve Button Down",
    description:
      "A versatile short sleeve pickleball button-down from ChalkTalkSPORTS. Casual enough for the weekend, sharp enough for a pickleball social.",
    image: 
      "https://m.media-amazon.com/images/I/71X-m2kGJrL._AC_SX385_.jpg",
    tags: ["unisex", "premium", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C3FG2L7X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "91",
    asin: "B0DVBFTJXD",
    title: "TeeUnion Funny Pickleball T-Shirt – Hilarious Graphic",
    description:
      "Another hilarious sports graphic from TeeUnion that'll have the whole court cracking up. Because pickleball is serious business told with humor.",
    image: 
      "https://m.media-amazon.com/images/I/81xrjjtkaBL._AC_SX385_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DVBFTJXD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "92",
    asin: "B0BZQLB4F5",
    title: "ChalkTalkSPORTS Pickleball Sport Polo – Performance",
    description:
      "ChalkTalkSPORTS performance sport polo built for competitive pickleball. Youth and adult sizes available for the whole family.",
    image: 
      "https://m.media-amazon.com/images/I/71Ho90f6ITL._AC_SX385_.jpg",
    tags: ["unisex", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0BZQLB4F5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "93",
    asin: "B0C5QZNQG8",
    title: "Women It's a Good Day to Play – Pickleball Tank",
    description:
      "Spread positivity on the pickleball court with this 'Good Day to Play' tank. Casual, comfortable, and full of good vibes.",
    image: 
      "https://m.media-amazon.com/images/I/71216l4K9HL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5QZNQG8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "94",
    asin: "B0DVBTKNGX",
    title: "TeeUnion Funny Pickleball Graphic – Sports Humor Tee",
    description:
      "TeeUnion strikes again with another funny pickleball graphic tee. For the player who wins every match — at least when it comes to humor.",
    image: 
      "https://m.media-amazon.com/images/I/81pJJb48CJL._AC_SX385_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DVBTKNGX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "95",
    asin: "B0F189JB18",
    title: "LHBNK Pickleball Tank Tops – Women's Summer Graphic",
    description:
      "A graphic pickleball tank from LHBNK that's perfect for summer. Sleeveless design keeps you cool when the game heats up.",
    image: 
      "https://m.media-amazon.com/images/I/81AYkU5ChCL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F189JB18?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "96",
    asin: "B0D1Y5KSNB",
    title: "Got It Oops Yours – Pickleball V-Neck Gift Tee",
    description:
      "The pickleball callout that never gets old, on a comfortable V-neck tee. A perfect gag gift for any pickleball player.",
    image: 
      "https://m.media-amazon.com/images/I/61eNrqFuVXL._AC_SX385_.jpg",
    tags: ["unisex", "funny", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D1Y5KSNB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "97",
    asin: "B0DZCM6Y2N",
    title: "TUPOSU Pickleball Player Shirt – Funny Graphic",
    description:
      "A funny pickleball player graphic shirt from TUPOSU. Bold design for the player who loves making a statement on the court.",
    image: 
      "https://m.media-amazon.com/images/I/71+DWALt-7L._AC_SX385_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZCM6Y2N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "98",
    asin: "B0BJW9S5B4",
    title: "I'm Missing Pickleball Right Now – Funny T-Shirt",
    description:
      "Worn when you're anywhere that isn't the pickleball court. Because you're always missing pickleball, even if you just finished playing.",
    image: 
      "https://m.media-amazon.com/images/I/81GW6-umuzL._AC_SX385_.jpg",
    tags: ["unisex", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BJW9S5B4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "99",
    asin: "B0DB25795F",
    title: "Men's Moisture Wicking Pickleball Performance Variant",
    description:
      "A moisture-wicking performance tee for the serious player. Keeps you dry and focused during long tournament days.",
    image: 
      "https://m.media-amazon.com/images/I/61lz6G2C70L._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DB25795F?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "100",
    asin: "B0C626FFN6",
    title: "Was That Out? – Pickleball Letter Print Tee",
    description:
      "Join the eternal debate with this 'Was That Out?' letter print tee. Every pickleball player has been there — now wear the argument.",
    image: 
      "https://m.media-amazon.com/images/I/71HtZpb0rEL._AC_SX385_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C626FFN6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "101",
    asin: "B0D6YPJC7W",
    title: "Stay Out of The Kitchen – Printed Pickleball Tee",
    description:
      "Kitchen violations are no joke — unless they're on your shirt. A fun printed tee reminding everyone of pickleball's golden rule.",
    image: 
      "https://m.media-amazon.com/images/I/71rrWPizpFL._AC_SX385_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YPJC7W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "102",
    asin: "B0DPLVXC29",
    title: "Pickleball Definition – Sarcastic Graphic Novelty Tee",
    description:
      "The dictionary definition of pickleball, but way more accurate (and sarcastic). A novelty tee from Crazy Dog for players with a sense of humor.",
    image: 
      "https://m.media-amazon.com/images/I/71PmvNhpKvL._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DPLVXC29?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "103",
    asin: "B0D8KWK44B",
    title: "AYUNIX Pickleball Polo – Performance Golf Outfits",
    description:
      "A performance polo that transitions seamlessly from the pickleball court to the golf course. AYUNIX quality with quick-dry comfort.",
    image: 
      "https://m.media-amazon.com/images/I/81wPg1+eqmL._AC_SX385_.jpg",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0D8KWK44B?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "104",
    asin: "B0G6T4Y2F9",
    title: "TIEEI Pickleball Shirts – Paddleball Themed Graphic",
    description:
      "A paddleball-themed graphic tee from TIEEI. Casual styling meets pickleball enthusiasm in this comfortable everyday shirt.",
    image: 
      "https://m.media-amazon.com/images/I/71qfQ0IeXRL._AC_SX385_.jpg",
    tags: ["unisex", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0G6T4Y2F9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "105",
    asin: "B0FP2YV5L8",
    title: "Pickleball Women Tshirts – Gym Casual Team Lover",
    description:
      "A gym-ready casual pickleball tee for women. Perfect for team practices, friendly matches, or just representing the sport you love.",
    image: 
      "https://m.media-amazon.com/images/I/81Ulu092iBL._AC_SX385_.jpg",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FP2YV5L8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "106",
    asin: "B0FJFCWKQJ",
    title: "LBP Women's Pickleball Shirt – Pickle Ball Lover",
    description:
      "A cute pickleball lover shirt from LBP. Casual pickle ball tee that makes a great gift for the pickleball-obsessed woman in your life.",
    image: 
      "https://m.media-amazon.com/images/I/71ArWRpj-ML._AC_SX385_.jpg",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJFCWKQJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "107",
    asin: "B0GC66KCGV",
    title: "Got It Oops Yours – Pickleball Sleeveless Tank",
    description:
      "The 'Got It Oops Yours' moment captured on a sleeveless summer workout graphic tee. A funny tank for warm-weather pickleball.",
    image: 
      "https://m.media-amazon.com/images/I/71-8Lerm8JL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GC66KCGV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "108",
    asin: "B0DYK8WK24",
    title: "Qskall American Flag Pickleball – Patriotic Tee",
    description:
      "Fly the flag and the paddle with this American flag pickleball tee. Patriotic design meets paddleball lover style.",
    image: 
      "https://m.media-amazon.com/images/I/71PnmaNvYCL._AC_SX385_.jpg",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYK8WK24?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "109",
    asin: "B0FHPDBK1Y",
    title: "SUWATOIN Women Pickleball Player Gift Tee",
    description:
      "A dedicated women's pickleball player gift tee from SUWATOIN. Comfortable fit, fun design, and perfect for the player who has everything.",
    image: 
      "https://m.media-amazon.com/images/I/71aqjtdbduL._AC_SX385_.jpg",
    tags: ["women's", "gift", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FHPDBK1Y?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "110",
    asin: "B0BJXQCKM8",
    title: "I'm Missing Pickleball Right Now – Unisex Tee",
    description:
      "For every moment you're not on the court. This funny unisex tee captures the feeling every pickleball addict knows too well.",
    image: 
      "https://m.media-amazon.com/images/I/81GW6-umuzL._AC_SX385_.jpg",
    tags: ["unisex", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BJXQCKM8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "111",
    asin: "B0DLX1H5P3",
    title: "Pickleball Champion – Graphic Tee",
    description:
      "Declare yourself the pickleball champion with this bold graphic tee. Whether it's official or self-proclaimed, wear it with pride.",
    image: 
      "https://m.media-amazon.com/images/I/71lkgx6gfyL._AC_SX385_.jpg",
    tags: ["unisex", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DLX1H5P3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "112",
    asin: "B0GCCD3ZV8",
    title: "ZIRWTI Racerback Pickleball Tank – Play Pickleball",
    description:
      "A racerback tank from ZIRWTI that's built for movement. Play pickleball in style with this athletic gym-ready graphic tank.",
    image: 
      "https://m.media-amazon.com/images/I/71G0KJXmV0L._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GCCD3ZV8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "113",
    asin: "B0FTMTWJNN",
    title: "Fjalljós Performance Tee – UPF 50+ Men's Pickleball",
    description:
      "UPF 50+ quick-dry performance from Fjalljós. Purpose-built for pickleball players who need sun protection without sacrificing comfort.",
    image: 
      "https://m.media-amazon.com/images/I/71QrWg4N6hL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTMTWJNN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "114",
    asin: "B0D1Y7XKYT",
    title: "Got It Oops Yours – Ladies V-Neck Pickleball Gifts",
    description:
      "The beloved 'Got It Oops Yours' phrase on a ladies V-neck tee. A funny gift that resonates with every pickleball player.",
    image: 
      "https://m.media-amazon.com/images/I/61MP4WR5qML._AC_SX385_.jpg",
    tags: ["women's", "funny", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D1Y7XKYT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "115",
    asin: "B0GH7Q9GKF",
    title: "WESEOOU V-Neck Funny Casual Pickleball Tee",
    description:
      "A funny casual V-neck pickleball tee from WESEOOU. Relaxed fit with a playful design for the woman who takes her game seriously but not herself.",
    image: 
      "https://m.media-amazon.com/images/I/81sRHUlCLoL._AC_SX385_.jpg",
    tags: ["women's", "funny", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GH7Q9GKF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "116",
    asin: "B0G6L8M47T",
    title: "Pickleball Oversized Team Graphic Tee",
    description:
      "An oversized team-style graphic tee for the pickleball-obsessed. Relaxed fit and bold design make this a wardrobe staple.",
    image: 
      "https://m.media-amazon.com/images/I/61YsfaugeKL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0G6L8M47T?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "117",
    asin: "B0CM5NV22N",
    title: "COLORFUL BLING Women's Pickleball Player Graphic Tee",
    description:
      "A colorful pickleball player graphic tee from COLORFUL BLING. Short sleeve, crew neck, and stretchable cotton blend for all-day comfort.",
    image: 
      "https://m.media-amazon.com/images/I/91ZGoUniGEL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CM5NV22N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "118",
    asin: "B0DNWL1PHK",
    title: "RMTXCD Tank Top – Pickleball Lover Summer",
    description:
      "A pickleball lover tank from RMTXCD for those hot summer court sessions. Casual, cute, and ready for game day.",
    image: 
      "https://m.media-amazon.com/images/I/71agLncpXAL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DNWL1PHK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "119",
    asin: "B0CKQQT32M",
    title: "LAZYCHILD Heartbeat Pickleball Shirt – Graphic Tee",
    description:
      "Another heartbeat graphic pickleball tee from LAZYCHILD. Show the world your vital signs are all pickleball, all the time.",
    image: 
      "https://m.media-amazon.com/images/I/81FCaVloVsL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CKQQT32M?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "120",
    asin: "B0FPVWFTMP",
    title: "Abraham Dinkin – Funny Pickleball Tee",
    description:
      "Four score and seven dinks ago... The Abraham Dinkin tee combines pickleball humor with presidential flair. A hilarious conversation piece.",
    image: 
      "https://m.media-amazon.com/images/I/81IOhe8+XKL._AC_SX385_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FPVWFTMP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "121",
    asin: "B0CSPVD5MV",
    title: "Camp Dink Counselor – Pickleball Shirt",
    description:
      "Welcome to Camp Dink, where every session is a pickleball clinic. A fun counselor-themed tee for the player who always teaches the newbies.",
    image: 
      "https://m.media-amazon.com/images/I/815QJ4LzL4L._AC_SX385_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CSPVD5MV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "122",
    asin: "B0G7J4B55P",
    title: "Women's Pickleball Graphic T – Casual Funny Sports",
    description:
      "A casual funny sports graphic tee for women who love pickleball. Lightweight, comfortable, and always game-ready.",
    image: 
      "https://m.media-amazon.com/images/I/61jK6+vAxGL._AC_SX385_.jpg",
    tags: ["women's", "funny", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0G7J4B55P?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "123",
    asin: "B0D5LX8K96",
    title: "SUWATOIN Women Pickleball Shirt – Casual Player Tee",
    description:
      "A casual pickleball player tee from SUWATOIN. Simple, comfortable design that works for game day and every day.",
    image: 
      "https://m.media-amazon.com/images/I/81KLThqoHML._AC_SX385_.jpg",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5LX8K96?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "124",
    asin: "B0B1N8N42X",
    title: "Mens Funny Pickleball Legend – Sports Hilarious Tee",
    description:
      "Because every pickleball court needs a legend, and it might as well be you. A hilarious sports tee from Crazy Dog T-Shirts.",
    image: 
      "https://m.media-amazon.com/images/I/718AciaWF2L._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0B1N8N42X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "125",
    asin: "B0FQP565CT",
    title: "Funny Golf Hawaiian Pickleball Polo – Print Shirt",
    description:
      "A bold Hawaiian-print pickleball polo that brings tropical vibes to the court. Quick-dry fabric meets vacation-mode styling.",
    image: 
      "https://m.media-amazon.com/images/I/71xqAUR7uxL._AC_SX385_.jpg",
    tags: ["men's", "polo", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FQP565CT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "126",
    asin: "B0GDZLQ9MW",
    title: "Funny Golf Polo – Pickleball Print Performance",
    description:
      "A performance polo with fun pickleball graphics. Moisture-wicking fabric for serious play, funny design for serious fun.",
    image: 
      "https://m.media-amazon.com/images/I/91G+eWFaqUL._AC_SX385_.jpg",
    tags: ["men's", "polo", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GDZLQ9MW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "127",
    asin: "B0DYJBH4T9",
    title: "RMTXCD Women Pickleball Tank Top – Summer Sport",
    description:
      "A summer sport tank from RMTXCD for the active pickleball player. Cute vest design with a casual sleeveless cut.",
    image: 
      "https://m.media-amazon.com/images/I/71tc3jFZzRL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYJBH4T9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "128",
    asin: "B0F1F1SQ4K",
    title: "Pickleball It's A Good Day – Sleeveless Retirement Tee",
    description:
      "A sleeveless retirement sport graphic tee. Every day is a good day to play pickleball when you're retired.",
    image: 
      "https://m.media-amazon.com/images/I/612NWYrF+LL._AC_QL10_SX980_SY55_FMwebp_.jpg",
    tags: ["women's", "tank top", "retirement"],
    affiliateUrl: `https://www.amazon.com/dp/B0F1F1SQ4K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "129",
    asin: "B0CYH51Q9S",
    title: "LHBNK Pickleball Tank Tops – Graphic Summer Gifts",
    description:
      "A graphic summer pickleball tank from LHBNK. A perfect sleeveless gift for pickleball lovers who like to stay cool.",
    image: 
      "https://m.media-amazon.com/images/I/81k8E+qHHsL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0CYH51Q9S?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "130",
    asin: "B0GCC12Q6Z",
    title: "Pickleball Tank Tops – Got It Oops Yours Summer",
    description:
      "The 'Got It Oops Yours' classic on a summer workout tank. Sleeveless graphic design for warm-weather pickleball.",
    image: 
      "https://m.media-amazon.com/images/I/71gjIQ2NyAL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GCC12Q6Z?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "131",
    asin: "B0CYH635TG",
    title: "LHBNK Pickleball Tank – Summer Sleeveless Lover Gifts",
    description:
      "Another sleeveless summer tank from LHBNK. A graphic pickleball lover gift that keeps you cool while your game stays hot.",
    image: 
      "https://m.media-amazon.com/images/I/81kYEcpjbqL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0CYH635TG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "132",
    asin: "B0GC4TNDSB",
    title: "Got It Oops Yours – Women's Summer Workout Tank",
    description:
      "A summer workout graphic tank with the iconic pickleball callout. Perfect for outdoor games and gym sessions.",
    image: 
      "https://m.media-amazon.com/images/I/71JCMprm9QL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GC4TNDSB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "133",
    asin: "B0CWLDY4HV",
    title: "Pickleball Heartbeat – It's A Good Day Tank Top",
    description:
      "Heartbeat meets 'Good Day to Play' in this graphic tank top. Double the pickleball enthusiasm in one sleeveless design.",
    image: 
      "https://m.media-amazon.com/images/I/81GeLYPnpVL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CWLDY4HV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "134",
    asin: "B0GLX1S19K",
    title: "RXGOY Pickleball Improves Memory – Funny Tank Top",
    description:
      "Playing pickleball improves memory — it was in! A funny tank top from RXGOY about the game's most common memory recovery technique.",
    image: 
      "https://m.media-amazon.com/images/I/71sK8p8Z-DL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GLX1S19K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "135",
    asin: "B0DWMFF474",
    title: "Heart Graphic Pickleball Tank – Women's Summer",
    description:
      "A heart graphic pickleball tank for the summer. Sleeveless design with a fun baseball-style graphic that shows your love for the game.",
    image: 
      "https://m.media-amazon.com/images/I/716gp5HA82L._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DWMFF474?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "136",
    asin: "B0CXY57NPZ",
    title: "It's a Good Day – Pickleball Letter Print Tank Top",
    description:
      "A fun letter-print tank top that declares every day a good day for pickleball. Casual fit for summer sports.",
    image: 
      "https://m.media-amazon.com/images/I/71VTPAcS9ML._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CXY57NPZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "137",
    asin: "B0D5Q2JBTN",
    title: "LIWYLU Pickleball Tank Tops – Graphic Player Gifts",
    description:
      "A graphic player gift tank from LIWYLU. Sleeveless design with pickleball lover graphics for the summer season.",
    image: 
      "https://m.media-amazon.com/images/I/81ZMQgiasHL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5Q2JBTN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "138",
    asin: "B0D5PZ1R1N",
    title: "LIWYLU Pickleball Tank Top – Player Gift Dark",
    description:
      "A dark-colored pickleball tank from LIWYLU. Casual sports tee with sleeveless design perfect for active play.",
    image: 
      "https://m.media-amazon.com/images/I/71HB5UdSegL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5PZ1R1N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "139",
    asin: "B0FCC1X64W",
    title: "SAUIVD Playing Pickleball Improves Memory – Tank",
    description:
      "A funny tank about how playing pickleball improves memory. Casual loose sleeveless design that's perfect for summer court sessions.",
    image: 
      "https://m.media-amazon.com/images/I/71+T8vnlYwL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FCC1X64W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "140",
    asin: "B0C5P1XTVT",
    title: "Pickle Baller – Paddles and Ball Flowy Tank Top",
    description:
      "A flowy tank top with paddles-and-ball graphic from the Pickle Baller collection. Ladies fit for the casual sport enthusiast.",
    image: 
      "https://m.media-amazon.com/images/I/51A06bnpDYL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5P1XTVT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "141",
    asin: "B0CCNBXZ7H",
    title: "Pickleball Graphic T-Shirt – Was That Out Letter Print",
    description:
      "The iconic 'Was That Out?' debate captured on a women's graphic tee. Short sleeve summer style for the pickleball player.",
    image: 
      "https://m.media-amazon.com/images/I/71PLTWTqZDL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CCNBXZ7H?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "142",
    asin: "B0CCNDTSJD",
    title: "Was That Out – Women's Pickleball Summer Graphic Tee",
    description:
      "Another variation of the beloved 'Was That Out?' graphic. Summer-ready short sleeve tee for the woman who lives for line calls.",
    image: 
      "https://m.media-amazon.com/images/I/715aCVstyGL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CCNDTSJD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "143",
    asin: "B0G457L52Q",
    title: "It Was In – Retro Style Pickleball T-Shirt",
    description:
      "Settle the debate once and for all — it was IN. A retro-style pickleball tee with a classic cotton-blend design.",
    image: 
      "https://m.media-amazon.com/images/I/51iIFdL8V3L._AC_SX385_.jpg",
    tags: ["unisex", "funny", "vintage"],
    affiliateUrl: `https://www.amazon.com/dp/B0G457L52Q?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "144",
    asin: "B0C8HVDB3J",
    title: "Was That Out – Women's Pickleball Letter Print Tee",
    description:
      "The eternal pickleball question on a comfortable letter-print tee. A short sleeve summer top for the woman always making line calls.",
    image: 
      "https://m.media-amazon.com/images/I/71OSYoV3g-L._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C8HVDB3J?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "145",
    asin: "B0CJKW3MH3",
    title: "Vintage Pickleballs – Retro Enthusiast Sporty Tee",
    description:
      "A retro-styled vintage pickleball tee for the enthusiast. Classic sporty design that looks like it came straight from the golden age of pickleball.",
    image: 
      "https://m.media-amazon.com/images/I/51zGTFTu20L._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CJKW3MH3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "146",
    asin: "B0FQP6NK9N",
    title: "HUURAY Funny Golf Polo – Pickleball Hawaiian Shirt",
    description:
      "A funny Hawaiian-style golf polo with pickleball graphics from HUURAY. Quick-dry moisture wicking meets vacation vibes.",
    image: 
      "https://m.media-amazon.com/images/I/71xqAUR7uxL._AC_SX385_.jpg",
    tags: ["men's", "polo", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FQP6NK9N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "147",
    asin: "B0D5M2PSRQ",
    title: "SUWATOIN Women Pickleball Player T-Shirt – Gift",
    description:
      "A pickleball player tee designed as the perfect gift. Comfortable, casual, and always appreciated by the pickleball lover in your life.",
    image: 
      "https://m.media-amazon.com/images/I/81KLThqoHML._AC_SX385_.jpg",
    tags: ["women's", "gift", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5M2PSRQ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "148",
    asin: "B0D4CB96DM",
    title: "It's A Good Day – Vintage Pickleball Graphic Tee",
    description:
      "A vintage-style graphic tee declaring every day a good day for pickleball. Retro sports lover design on a comfortable cotton blend.",
    image: 
      "https://m.media-amazon.com/images/I/61GIQyL0TWL._AC_QL10_SX980_SY55_FMwebp_.jpg",
    tags: ["women's", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4CB96DM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "149",
    asin: "B0DSDN98QM",
    title: "Pickleball Oversized Graphic T-Shirt – Team Baseball",
    description:
      "An oversized team-style graphic tee with baseball-fan flair and pickleball at its heart. Bold design for the bold player.",
    image: 
      "https://m.media-amazon.com/images/I/71BAIpTDpWL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSDN98QM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "150",
    asin: "B0D4CCY24Q",
    title: "Pickleball Vintage Graphic Tee – Sports Lover",
    description:
      "A vintage-inspired pickleball graphic tee that captures the retro spirit of the sport. Comfortable and stylish for any occasion.",
    image: 
      "https://m.media-amazon.com/images/I/51cLmcztJ3L._AC_SR38,50_.jpg",
    tags: ["women's", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4CCY24Q?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "151",
    asin: "B0FCYT79V6",
    title: "LuxLass Pickleball Front & Back Tee – Women's",
    description:
      "Front and back printing from LuxLass for maximum pickleball statement. A paddleball-themed tee that catches eyes coming and going.",
    image: 
      "https://m.media-amazon.com/images/I/71R0h1NgvoL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FCYT79V6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "152",
    asin: "B0D5Y4YSZS",
    title: "LBP Pickleball Shirt Women – Casual Pickle Ball Tee",
    description:
      "A casual pickle ball tee from LBP that makes a thoughtful gift. Simple design, comfortable fit, and all about the love of pickleball.",
    image: 
      "https://m.media-amazon.com/images/I/818un1fjyGL._AC_SX385_.jpg",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5Y4YSZS?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "153",
    asin: "B0DJYYRCQH",
    title: "Funny Pickleball Queen – Women's Retro Vintage Shirt",
    description:
      "Crown yourself the Pickleball Queen with this retro vintage shirt. A funny paddle-themed tee from TeesMind for the court's royalty.",
    image: 
      "https://m.media-amazon.com/images/I/61oHDvCDTtL._AC_SX385_.jpg",
    tags: ["women's", "funny", "vintage"],
    affiliateUrl: `https://www.amazon.com/dp/B0DJYYRCQH?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "154",
    asin: "B0CJKPKZDB",
    title: "Vintage Pickleballs Player – Distressed Illustration",
    description:
      "A distressed vintage illustration tee celebrating the pickleball player. Retro styling with a humorous sporty vibe.",
    image: 
      "https://m.media-amazon.com/images/I/61aN-sMO5eL._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CJKPKZDB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "155",
    asin: "B0FFGC1FFM",
    title: "Pickleball Fever – Retro Garment-Dyed T-Shirt",
    description:
      "Catch pickleball fever with this retro garment-dyed tee. Unisex fit with a vintage wash finish that looks better with every wear.",
    image: 
      "https://m.media-amazon.com/images/I/618ctfhEvvL._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FFGC1FFM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "156",
    asin: "B0FFG689PN",
    title: "Pickleball Fever (Back) – Retro Garment-Dyed Tee",
    description:
      "The back-print version of the Pickleball Fever tee. Retro style garment-dyed shirt for the player who leads from behind.",
    image: 
      "https://m.media-amazon.com/images/I/61RWVThWDAL._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FFG689PN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "157",
    asin: "B0C4XHS5NL",
    title: "Life is Good – Keep It Simple Pickleball Crusher (XXL)",
    description:
      "Keep it simple — play pickleball. The iconic Life is Good Crusher Tee in a larger size for the big player with a bigger love for the game.",
    image: 
      "https://m.media-amazon.com/images/I/71aGBUFrnLL._AC_SX385_.jpg",
    tags: ["men's", "premium", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C4XHS5NL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "158",
    asin: "B0F2ZNCPLN",
    title: "Pickleball USA Athletic Club – Collegiate Style Tee",
    description:
      "Join the Pickleball USA Athletic Club with this collegiate-style vintage wash tee in pink, yellow, and green. Retro sports apparel at its finest.",
    image: 
      "https://m.media-amazon.com/images/I/61kb53NQwiL._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZNCPLN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "159",
    asin: "B0F2ZM7899",
    title: "Pickleball USA Athletic Club – Vintage Wash Tee",
    description:
      "Another colorway of the Pickleball USA Athletic Club tee. Collegiate style with a vintage wash finish that stands out.",
    image: 
      "https://m.media-amazon.com/images/I/61rnfsU2SFL._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZM7899?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "160",
    asin: "B0F2ZN4D1R",
    title: "Pickleball USA Athletic Club – Retro Sports Tee",
    description:
      "Retro sports apparel meets pickleball pride. This collegiate-style tee looks like a vintage find from pickleball's early days.",
    image: 
      "https://m.media-amazon.com/images/I/61OCB7QQTpL._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZN4D1R?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "161",
    asin: "B0B1N6JYYF",
    title: "Mens Funny Pickleball Legend – Sarcastic Sports Tee",
    description:
      "A sarcastic sports tee declaring pickleball legend status. From Crazy Dog T-Shirts for the player who writes their own mythology.",
    image: 
      "https://m.media-amazon.com/images/I/718AciaWF2L._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0B1N6JYYF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "162",
    asin: "B0F2ZM2HL5",
    title: "Pickleball USA Athletic Club – Pink Vintage Tee",
    description:
      "The pink colorway of the Pickleball USA Athletic Club tee. Vintage wash finish in a standout collegiate design.",
    image: 
      "https://m.media-amazon.com/images/I/61E6iuD2PpL._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZM2HL5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "163",
    asin: "B0F2ZM9FSG",
    title: "Pickleball USA Athletic Club – Yellow Vintage Tee",
    description:
      "The yellow colorway of the Pickleball USA Athletic Club collection. Bright, bold, and perfect for the optimistic pickleball player.",
    image: 
      "https://m.media-amazon.com/images/I/61rnfsU2SFL._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZM9FSG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "164",
    asin: "B0F2ZNDPW7",
    title: "Pickleball USA Athletic Club – Green Vintage Tee",
    description:
      "The green colorway rounding out the Pickleball USA Athletic Club collection. Collegiate vintage style for the dedicated player.",
    image: 
      "https://m.media-amazon.com/images/I/61uRPrLbrTL._AC_SX385_.jpg",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZNDPW7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "165",
    asin: "B0C61V67SC",
    title: "Pickleball Heartbeat Graphic – Women's Short Sleeve",
    description:
      "A heartbeat graphic pickleball tee showing your love runs deep. Short sleeve women's fit with a fun EKG-style design.",
    image: 
      "https://m.media-amazon.com/images/I/71ey+1CYPGL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C61V67SC?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "166",
    asin: "B0FJR36X2X",
    title: "LuxLass Pickleball Front & Back Print – Women's Tee",
    description:
      "Double the pickleball pride with front and back prints from LuxLass. A women's tee that makes a statement from every angle.",
    image: 
      "https://m.media-amazon.com/images/I/718vyEYUp+L._AC_SX385_.jpg",
    tags: ["women's", "graphic", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJR36X2X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "167",
    asin: "B0DZCPNVP1",
    title: "Stay Out of The Kitchen – Pickleball Printed Tee",
    description:
      "The kitchen rule, now on a printed tee. A funny pickleball player lover top that reminds everyone of the non-volley zone.",
    image: 
      "https://m.media-amazon.com/images/I/71ImxvzhWWL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZCPNVP1?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "168",
    asin: "B0D6YQBW55",
    title: "Stay Out Kitchen – Women's Pickleball Printed Shirt",
    description:
      "Another take on the classic 'Stay Out of the Kitchen' pickleball tee. Funny, relatable, and always in style on the court.",
    image: 
      "https://m.media-amazon.com/images/I/71rrWPizpFL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YQBW55?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "169",
    asin: "B0DSHJQR99",
    title: "Pickleball Team Graphic T-Shirt – Oversized Baseball",
    description:
      "An oversized baseball-style graphic tee for the pickleball team. Bold design with a relaxed fit that's perfect for game day.",
    image: 
      "https://m.media-amazon.com/images/I/61lwSWVS6FL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSHJQR99?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "170",
    asin: "B0D4CM2BJK",
    title: "Pickleball Vintage Graphic – Sports Lover Tee",
    description:
      "A vintage sports lover graphic tee celebrating the joy of pickleball. Retro design on a comfortable modern fit.",
    image: 
      "https://m.media-amazon.com/images/I/61GIQyL0TWL._AC_QL10_SX980_SY55_FMwebp_.jpg",
    tags: ["women's", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4CM2BJK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "171",
    asin: "B0GHYG8ZLG",
    title: "IFQ Heartbeat Pickleball – Women's Sport Lover Tee",
    description:
      "Show your heartbeat runs on pickleball with this sport lover tee from IFQ. A fun heartbeat graphic for the dedicated player.",
    image: 
      "https://m.media-amazon.com/images/I/71-LMQY+JkL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GHYG8ZLG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "172",
    asin: "B0C41T5M66",
    title: "ChalkTalkSPORTS Pickleball Polo – Sport Performance",
    description:
      "A sport performance polo from ChalkTalkSPORTS in adult sizes. Premium construction for competitive pickleball play.",
    image: 
      "https://m.media-amazon.com/images/I/71H5Q2JT9GL._AC_SX385_.jpg",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0C41T5M66?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "173",
    asin: "B0DZW5JTMT",
    title: "TIEEI Pickleball Shirts – Men's Paddleball Styled Tee",
    description:
      "A paddleball-styled graphic tee from TIEEI for the men's market. Casual fit with a player-themed design.",
    image: 
      "https://m.media-amazon.com/images/I/71SxMdUYtQL._AC_SX385_.jpg",
    tags: ["men's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZW5JTMT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "174",
    asin: "B0DYK7Z9MT",
    title: "Qskall American Flag Pickleball – 4th of July Tee",
    description:
      "Red, white, blue, and pickleball. A 4th of July patriotic tee from Qskall for the player who loves their country and their court.",
    image: 
      "https://m.media-amazon.com/images/I/71ZJOZrGumL._AC_SX385_.jpg",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYK7Z9MT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "175",
    asin: "B0D8KXQBJ4",
    title: "AYUNIX Pickleball Polo – Performance Wicking Golf",
    description:
      "A performance wicking polo from AYUNIX designed for pickleball and golf. Versatile enough for the court and the clubhouse.",
    image: 
      "https://m.media-amazon.com/images/I/81wPg1+eqmL._AC_SX385_.jpg",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0D8KXQBJ4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "176",
    asin: "B0DVBFWQP4",
    title: "TeeUnion Funny Pickleball – Hilarious Sports Shirt",
    description:
      "Yet another hilarious hit from TeeUnion. This funny pickleball shirt keeps the humor coming with a fresh sports graphic design.",
    image: 
      "https://m.media-amazon.com/images/I/81pJJb48CJL._AC_SX385_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DVBFWQP4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "177",
    asin: "B0D5M1649J",
    title: "SUWATOIN Women Pickleball Player – Lover Gift Tee",
    description:
      "A women's pickleball player gift tee from SUWATOIN. Comfortable, cute, and perfect for expressing your love of the game.",
    image: 
      "https://m.media-amazon.com/images/I/81Wb6PyUZFL._AC_SX385_.jpg",
    tags: ["women's", "gift", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5M1649J?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "178",
    asin: "B0FJFBNVXN",
    title: "LBP Pickleball Shirt Women – Casual Gift Tee",
    description:
      "A casual gift tee from LBP for the pickleball-loving woman. Simple pickle ball design that works for any occasion.",
    image: 
      "https://m.media-amazon.com/images/I/81-Mqo8JnFL._AC_SX385_.jpg",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJFBNVXN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "179",
    asin: "B0B1N6GR2Y",
    title: "Mens Funny Pickleball Legend – Sarcastic Graphic",
    description:
      "The pickleball legend sarcastic tee in another colorway. From Crazy Dog T-Shirts for the player who collects funny tees.",
    image: 
      "https://m.media-amazon.com/images/I/718AciaWF2L._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0B1N6GR2Y?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "180",
    asin: "B0FHPDYK8G",
    title: "SUWATOIN Women Pickleball Player – Purple Gift Tee",
    description:
      "A purple colorway of the beloved SUWATOIN pickleball player tee. A standout gift for the woman who plays in style.",
    image: 
      "https://m.media-amazon.com/images/I/81g2TIn8VfL._AC_SX385_.jpg",
    tags: ["women's", "gift", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FHPDYK8G?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "181",
    asin: "B0DSDQMT9Z",
    title: "Pickleball Oversized Team T-Shirt – Fan Graphic",
    description:
      "An oversized fan graphic tee for the pickleball team supporter. Relaxed fit and bold design for game day.",
    image: 
      "https://m.media-amazon.com/images/I/71BAIpTDpWL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSDQMT9Z?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "182",
    asin: "B0F1861ZBV",
    title: "LHBNK Pickleball Tank – Sleeveless Summer Gifts",
    description:
      "A sleeveless summer pickleball tank from LHBNK. A graphic pickleball lover gift to keep cool during hot court sessions.",
    image: 
      "https://m.media-amazon.com/images/I/81sC5ix1grL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0F1861ZBV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "183",
    asin: "B0D5Y545DM",
    title: "LBP Pickleball Women's Shirt – Pickle Ball Casual",
    description:
      "A casual pickle ball tee from LBP in a fresh design. Comfortable everyday wear for the devoted pickleball player.",
    image: 
      "https://m.media-amazon.com/images/I/818un1fjyGL._AC_SX385_.jpg",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5Y545DM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "184",
    asin: "B0DZCN2F2R",
    title: "TUPOSU Pickleball Shirt – Player Lover Women's",
    description:
      "A pickleball player lover tee from TUPOSU. Graphic design that celebrates the sport with style and comfort.",
    image: 
      "https://m.media-amazon.com/images/I/71+DWALt-7L._AC_SX385_.jpg",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZCN2F2R?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "185",
    asin: "B0F12JPVJX",
    title: "Pickleball Shirts Funny Ball – Novelty Sports Graphic",
    description:
      "A novelty sports graphic tee about the funny ball that started it all. Retirement-ready pickleball humor.",
    image: 
      "https://m.media-amazon.com/images/I/71RpkhvYFlL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F12JPVJX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "186",
    asin: "B0DYKCSF9D",
    title: "Qskall Pickleball American Flag – Paddleball Tee",
    description:
      "A patriotic paddleball tee combining the American flag with pickleball. From Qskall for the player who represents on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71PnmaNvYCL._AC_SX385_.jpg",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYKCSF9D?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "187",
    asin: "B0D62QD6GY",
    title: "I Can't I Have Pickleball – Women's Paddleball Tee",
    description:
      "The ultimate scheduling conflict excuse on a tee. 'I can't, I have pickleball' — because the court waits for no one.",
    image: 
      "https://m.media-amazon.com/images/I/81xm1VZq3IL._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0D62QD6GY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "188",
    asin: "B0C1M1F8TW",
    title: "Women's Pickleball Graphic T-Shirt – Player Gift Top",
    description:
      "A graphic player gift top for women. Short sleeve comfort meets pickleball pride in this versatile everyday tee.",
    image: 
      "https://m.media-amazon.com/images/I/91lj9+X+0cL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0C1M1F8TW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "189",
    asin: "B0GJ9TRRDR",
    title: "Cutesong Pickleball Player T-Shirt – Sport Lover",
    description:
      "A sport lover tee from Cutesong for the dedicated pickleball player. Funny and cute design in a comfortable short sleeve fit.",
    image: 
      "https://m.media-amazon.com/images/I/71Gb+sz6FzL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GJ9TRRDR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "190",
    asin: "B0GJSN3W8W",
    title: "TIEEI Peace Love Pickleball – Women's Sport Tee",
    description:
      "Peace, love, and pickleball on a women's sport tee from TIEEI. Because these three things make the world a better place.",
    image: 
      "https://m.media-amazon.com/images/I/71g9IU0fMuL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GJSN3W8W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "191",
    asin: "B0D6YMMLDD",
    title: "Stay Out Kitchen – Women's Printed Pickleball Shirt",
    description:
      "The kitchen rule on a fun printed tee for women. A pickleball player lover top that's always in season.",
    image: 
      "https://m.media-amazon.com/images/I/81Ld4t2ebZL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YMMLDD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "192",
    asin: "B0CSK85K3M",
    title: "COLORFUL BLING Women's Pickleball – Blue Crew Neck",
    description:
      "A blue crew neck pickleball tee from COLORFUL BLING. Stretchable cotton blend comfort with a standout pickleball graphic.",
    image: 
      "https://m.media-amazon.com/images/I/81qbgsye8mL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CSK85K3M?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "193",
    asin: "B0C9PDRH27",
    title: "RMTXCD Women Pickleball Tank – Casual Sleeveless",
    description:
      "A casual sleeveless pickleball tank from RMTXCD. Cute vest design for summer sport and casual outings.",
    image: 
      "https://m.media-amazon.com/images/I/71+k5CDORcL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C9PDRH27?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "194",
    asin: "B0DYK8M621",
    title: "Qskall American Flag Pickleball – Sporty Patriotic",
    description:
      "A sporty patriotic pickleball tee with American flag graphics. Perfect for holiday tournaments and patriotic player celebrations.",
    image: 
      "https://m.media-amazon.com/images/I/71ZJOZrGumL._AC_SX385_.jpg",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYK8M621?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "195",
    asin: "B0FP325XWV",
    title: "Pickleball Women Tshirts Team – Lover Gift Tee",
    description:
      "A pickleball team lover tee for women. Short sleeve gift that celebrates the player and the sport they love.",
    image: 
      "https://m.media-amazon.com/images/I/81Ulu092iBL._AC_SX385_.jpg",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0FP325XWV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "196",
    asin: "B0C61VL6MS",
    title: "Pickleball Heartbeat Graphic – Women's Short Sleeve",
    description:
      "A heartbeat graphic pickleball shirt for women in a fresh colorway. Show your pulse races for the game.",
    image: 
      "https://m.media-amazon.com/images/I/71ey+1CYPGL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C61VL6MS?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "197",
    asin: "B0FJDT9GQF",
    title: "Mens Funny Pickleball – Its Always A Good Time Tee",
    description:
      "It's always a good time for pickleball, and this sarcastic graphic novelty tee from Crazy Dog proves it. A humor-packed staple.",
    image: 
      "https://m.media-amazon.com/images/I/71GIPfhU4EL._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJDT9GQF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "198",
    asin: "B07PRT56KQ",
    title: "Men's Golf Shirt Short Sleeve Quick Dry Sport Polo Tee",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61BDCfYZRvL._AC_SX385_.jpg",
    tags: ["men's", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B07PRT56KQ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "199",
    asin: "B09HX9465T",
    title: "Men's Workout Running Shirts, Sun Protection Quick Dry Athletic Shirts",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/51+w8RfqToL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B09HX9465T?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "200",
    asin: "B09XXF2NVN",
    title: "Men's UPF 50+ Sun Shirts 1/4 Zip Long Sleeve Golf Shirts",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/715VXs7nDEL._AC_SX385_.jpg",
    tags: ["men's", "performance", "long sleeve", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B09XXF2NVN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "201",
    asin: "B0B2RTTH51",
    title: "Men's Long Sleeve Sun Shirts UPF 50+ 1/4 Zip Up Fishing Running Shirt",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71iWo-SHkvL._AC_SX385_.jpg",
    tags: ["men's", "performance", "long sleeve", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0B2RTTH51?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "202",
    asin: "B0B4JXZTLZ",
    title: "Women's Sleeveless Tennis Shirt Quick Dry Pickleball Shirts UPF 50+",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61Kwh+cNW3L._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0B4JXZTLZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "203",
    asin: "B0B4JZG8S3",
    title: "Women's Sleeveless Tennis Golf Pickleball Shirts UPF 50+",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61KlK+wOEPL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0B4JZG8S3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "204",
    asin: "B0B5QW41MF",
    title: "Men's Quick Dry Tennis Pickleball Performance Polo Shirt",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/91v30WMrdEL._AC_SX385_.jpg",
    tags: ["men's", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0B5QW41MF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "205",
    asin: "B0BFRN38F5",
    title: "Mens Funny Pickleball T Shirts – Dink Responsibly",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71DW63KrhQL._AC_SX385_.jpg",
    tags: ["men's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BFRN38F5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "206",
    asin: "B0BFRS4PG1",
    title: "Crazy Dog Mens Funny Pickleball T-Shirt – Legend Sarcastic Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71DW63KrhQL._AC_SX385_.jpg",
    tags: ["men's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BFRS4PG1?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "207",
    asin: "B0BHX2L5VK",
    title: "Mens Funny Pickleball T Shirts – Big Energy",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71PGjHNT8VL._AC_SX385_.jpg",
    tags: ["men's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BHX2L5VK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "208",
    asin: "B0BL1KF8XG",
    title: "Women's UPF 50+ Pickleball Shirt – Sun Protection Athletic Top",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71DReCy0RhL._AC_SX385_.jpg",
    tags: ["women's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0BL1KF8XG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "209",
    asin: "B0BNFYBB3N",
    title: "Funny Pickleball T-Shirt – Retirement Plan",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/710qFwJ3+KL._AC_SX385_.jpg",
    tags: ["men's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BNFYBB3N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "210",
    asin: "B0BNSLLJ17",
    title: "Funny Pickleball T-Shirt – Weekend Forecast",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/51zjvsZyBeL._AC_SR38,50_.jpg",
    tags: ["unisex", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BNSLLJ17?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "211",
    asin: "B0BNT32GDX",
    title: "Women's Pickleball – Queen of the Court Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71Cig2bUoWL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0BNT32GDX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "212",
    asin: "B0BRK8WMMV",
    title: "Women's Funny Pickleball Tee – Dink & Drive",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/617BfyM3auL._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BRK8WMMV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "213",
    asin: "B0BTBQTLNR",
    title: "Mens Pickleball Dad T-Shirt – Funny Father's Day Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/61gs-KQdWRL._AC_SX385_.jpg",
    tags: ["men's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BTBQTLNR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "214",
    asin: "B0BWXJRTQY",
    title: "Women's Pickleball Graphic T-Shirt – Player Gift Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71gXwPtIOwL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0BWXJRTQY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "215",
    asin: "B0BX6BZ6FG",
    title: "Pickleball Tank Top – Stay Out of My Kitchen",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/81AL2z45PSL._AC_SX385_.jpg",
    tags: ["unisex", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0BX6BZ6FG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "216",
    asin: "B0BXC9T6D3",
    title: "Pickleball Long Sleeve Shirt – Quick Dry Performance",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/710UaeB0lYL._AC_SX385_.jpg",
    tags: ["unisex", "performance", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0BXC9T6D3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "217",
    asin: "B0BZQL5MB7",
    title: "ChalkTalkSPORTS Pickleball Short Sleeve Polo Shirt",
    description:
      "A classic polo style meets pickleball culture. Perfect for the player who wants to look sharp on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71Ho90f6ITL._AC_SX385_.jpg",
    tags: ["unisex", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0BZQL5MB7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "218",
    asin: "B0BZQLZJNG",
    title: "ChalkTalkSPORTS Pickleball Performance Sport Polo",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/718bIBXqc1L._AC_SX385_.jpg",
    tags: ["unisex", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0BZQLZJNG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "219",
    asin: "B0BZQNCKPH",
    title: "ChalkTalkSPORTS Pickleball Polo – Youth & Adult Sizes",
    description:
      "A classic polo style meets pickleball culture. Perfect for the player who wants to look sharp on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71H5Q2JT9GL._AC_SX385_.jpg",
    tags: ["unisex", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0BZQNCKPH?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "220",
    asin: "B0C1MF9J3N",
    title: "Women's Pickleball V-Neck Tee – Just Dink It",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/91lj9+X+0cL._AC_SX385_.jpg",
    tags: ["women's", "v-neck"],
    affiliateUrl: `https://www.amazon.com/dp/B0C1MF9J3N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "221",
    asin: "B0C1N72MCC",
    title: "Women's Pickleball Graphic Tee – Good Day to Play",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/81UN7dsHXJL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C1N72MCC?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "222",
    asin: "B0C3FJZ8PH",
    title: "ChalkTalkSPORTS Pickleball Button Down Dress Shirt",
    description:
      "Rep your love for pickleball with this must-have shirt. Comfortable, stylish, and perfect for any pickleball enthusiast.",
    image: 
      "https://m.media-amazon.com/images/I/71X-m2kGJrL._AC_SX385_.jpg",
    tags: ["unisex", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C3FJZ8PH?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "223",
    asin: "B0C41TN66W",
    title: "ChalkTalkSPORTS Pickleball Short Sleeve Performance Polo",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/718bIBXqc1L._AC_SX385_.jpg",
    tags: ["unisex", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0C41TN66W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "224",
    asin: "B0C52T7F7W",
    title: "Women's Pickleball Tank Top – Good Day to Play Sleeveless",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/61k9sYOdEXL._AC_SX385_.jpg",
    tags: ["women's", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0C52T7F7W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "225",
    asin: "B0C52TK1H1",
    title: "Women's Pickleball Sleeveless Top – Sport Casual",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/61k9sYOdEXL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C52TK1H1?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "226",
    asin: "B0C5NN23SJ",
    title: "Women's Pickleball Tank Top – Cute Pickleball Lover Vest",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/51IyNmH9sKL._AC_SX385_.jpg",
    tags: ["women's", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5NN23SJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "227",
    asin: "B0C5NQF76J",
    title: "Women's Pickleball Tank – Summer Casual Sport Sleeveless",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/61IDmBBhuPL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5NQF76J?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "228",
    asin: "B0C5NT6ZX3",
    title: "Women's Pickleball Sleeveless Tank Top – Casual Athletic",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/61S1YVB0R5L._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5NT6ZX3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "229",
    asin: "B0C5NTCGBN",
    title: "Women's It's a Good Day Pickleball Tank Top – Casual Sport",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/61Tm7lzEjXL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5NTCGBN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "230",
    asin: "B0C7TGKPDC",
    title: "Pickleball Heartbeat Graphic T-Shirt for Women",
    description:
      "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.",
    image: 
      "https://m.media-amazon.com/images/I/51N6ZbwyFcL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C7TGKPDC?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "231",
    asin: "B0C9CP5ZLW",
    title: "Women's Pickleball Tee – Funny Heartbeat Graphic Short Sleeve",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71MdXRTQy+L._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C9CP5ZLW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "232",
    asin: "B0CCNCRW5X",
    title: "MAXIMGR Pickleball Shirts for Women – Was That Out Letter Print",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71PLTWTqZDL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CCNCRW5X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "233",
    asin: "B0CCNDDX7B",
    title: "Pickleball Shirts for Women – Was That Out Graphic T-Shirt (Dark Grey)",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71PLTWTqZDL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CCNDDX7B?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "234",
    asin: "B0CDPW9YS9",
    title: "Pickleball Shirts for Women – Was That Out Graphic (Dark Blue)",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61T21XrAT2L._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CDPW9YS9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "235",
    asin: "B0CDPWC3B9",
    title: "Pickleball Sweatshirt for Women – Good Day to Play Long Sleeve Pullover",
    description:
      "Stay warm before and after your matches with this cozy pickleball hoodie. Perfect for cool-weather court sessions.",
    image: 
      "https://m.media-amazon.com/images/I/61dEkL9PZfL._AC_SX385_.jpg",
    tags: ["women's", "long sleeve", "hoodie"],
    affiliateUrl: `https://www.amazon.com/dp/B0CDPWC3B9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "236",
    asin: "B0CDPXKJ4P",
    title: "Pickleball Shirts for Women – Was That Out Graphic (Purple)",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61dEkL9PZfL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CDPXKJ4P?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "237",
    asin: "B0CDPXQ9L7",
    title: "Pickleball Shirts for Women – Was That Out Graphic (Pink)",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61dEkL9PZfL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CDPXQ9L7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "238",
    asin: "B0CDPZGBTS",
    title: "Pickleball Shirts for Women – Heartbeat Graphic Tee",
    description:
      "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.",
    image: 
      "https://m.media-amazon.com/images/I/61T21XrAT2L._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CDPZGBTS?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "239",
    asin: "B0CGMY224F",
    title: "Women's Pickleball T-Shirt – Cute Graphic Short Sleeve",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/81ljJElK9eL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CGMY224F?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "240",
    asin: "B0CJTTP3G6",
    title: "Women's Pickleball V-Neck Tee – Heartbeat Graphic",
    description:
      "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.",
    image: 
      "https://m.media-amazon.com/images/I/81c4wwxyLtL._AC_SX385_.jpg",
    tags: ["women's", "v-neck", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CJTTP3G6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "241",
    asin: "B0CK9P4TC3",
    title: "Men's Pickleball Performance Polo – Quick Dry Sport",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/810TMoJmjmL._AC_SX385_.jpg",
    tags: ["men's", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0CK9P4TC3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "242",
    asin: "B0CKCSSHMX",
    title: "Men's Pickleball Polo Shirt – Moisture Wicking Athletic",
    description:
      "A classic polo style meets pickleball culture. Perfect for the player who wants to look sharp on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71Gz2g2LsoL._AC_SX385_.jpg",
    tags: ["men's", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0CKCSSHMX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "243",
    asin: "B0CKKD5TWG",
    title: "Men's Pickleball Performance Shirt – Quick Dry Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71I8DaVJyOL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0CKKD5TWG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "244",
    asin: "B0CLLMLZDN",
    title: "PINSPARK Women's Polo Tennis Pickleball Shirt V-Neck",
    description:
      "A classic polo style meets pickleball culture. Perfect for the player who wants to look sharp on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/81KACKZLnlL._AC_SX385_.jpg",
    tags: ["women's", "polo", "v-neck"],
    affiliateUrl: `https://www.amazon.com/dp/B0CLLMLZDN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "245",
    asin: "B0CLLMX192",
    title: "Women's Polo Tennis V-Neck with Collar Pickleball Shirts",
    description:
      "A classic polo style meets pickleball culture. Perfect for the player who wants to look sharp on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/81KACKZLnlL._AC_SX385_.jpg",
    tags: ["women's", "polo", "v-neck"],
    affiliateUrl: `https://www.amazon.com/dp/B0CLLMX192?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "246",
    asin: "B0CMXHHPTL",
    title: "Women's Pickleball Performance Top – UPF 50+ Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/81PIYtf3luL._AC_SX385_.jpg",
    tags: ["women's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0CMXHHPTL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "247",
    asin: "B0CQXBD94M",
    title: "Women's 1/4 Zip Collar Racerback Tank Top Pickleball Shirt",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/71y5VoQc3wL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0CQXBD94M?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "248",
    asin: "B0CSB46Z2K",
    title: "Women's Pickleball Shirt – Casual Graphic Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61QvIzDKMsL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CSB46Z2K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "249",
    asin: "B0CSCY4927",
    title: "Women's 1/4 Zip Up Collared Quick Dry Athletic Pickleball Shirt",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71LAXKZgbTL._AC_SX385_.jpg",
    tags: ["women's", "performance", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0CSCY4927?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "250",
    asin: "B0CTGYGR4W",
    title: "Women's Pickleball Mom Tee – Sports Graphic",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71Yg-+H3NUL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CTGYGR4W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "251",
    asin: "B0CTL1LZFB",
    title: "Women's Pickleball – Oversized Funny Graphic Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/51ofWhhjcwL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CTL1LZFB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "252",
    asin: "B0CTMB8BFZ",
    title: "Women's Pickleball V-Neck – Cute Novelty Sport Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/714JTPPbX5L._AC_SX385_.jpg",
    tags: ["women's", "funny", "v-neck"],
    affiliateUrl: `https://www.amazon.com/dp/B0CTMB8BFZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "253",
    asin: "B0CTNZMFMM",
    title: "Women's Funny Pickleball Tee – Retirement Sport Graphic",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71cn8+z-0kL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CTNZMFMM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "254",
    asin: "B0CTR2G7H4",
    title: "Women's Pickleball Shirt – Fun Sports Graphic Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/713r9Ua41rL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CTR2G7H4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "255",
    asin: "B0CTR3KYGG",
    title: "Women's Pickleball T-Shirt – Good Day to Play Graphic",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/51KEGogvzLL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CTR3KYGG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "256",
    asin: "B0CWL8Q8FV",
    title: "Pickleball T-Shirt & Tank Top – Good Day to Play Colorful",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/81kh8FtqNxL._AC_SX385_.jpg",
    tags: ["unisex", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0CWL8Q8FV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "257",
    asin: "B0CYGJD9BT",
    title: "Women's Pickleball Performance Top – Quick Dry Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71IJrfsPF-L._AC_SX385_.jpg",
    tags: ["women's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0CYGJD9BT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "258",
    asin: "B0CYH4VX1G",
    title: "Women's Pickleball Tank – Sleeveless Athletic Top",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/81k8E+qHHsL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0CYH4VX1G?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "259",
    asin: "B0CYH6M6S4",
    title: "Women's Pickleball Running Tank – Moisture Wicking",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/81k8E+qHHsL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0CYH6M6S4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "260",
    asin: "B0CYZ5Z6Q5",
    title: "Women's Funny Pickleball Tee – Queen of the Court",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71R7BCHC0rL._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0CYZ5Z6Q5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "261",
    asin: "B0CYZKGF99",
    title: "Women's Pickleball Graphic – Heartbeat Short Sleeve",
    description:
      "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.",
    image: 
      "https://m.media-amazon.com/images/I/81af5JHl5kL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CYZKGF99?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "262",
    asin: "B0D1Y9T32D",
    title: "Women's Pickleball Shirt – Yours Pickleball Gifts Funny V Neck",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/61eNrqFuVXL._AC_SX385_.jpg",
    tags: ["women's", "funny", "v-neck", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D1Y9T32D?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "263",
    asin: "B0D41N3L1M",
    title: "Men's Quick Dry Pickleball Performance Shirt",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/81C4HOZ4hrL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0D41N3L1M?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "264",
    asin: "B0D467TT8R",
    title: "Men's Pickleball Polo – Quick Dry Athletic Sport Tee",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71gYZhmYv7L._AC_SX385_.jpg",
    tags: ["men's", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0D467TT8R?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "265",
    asin: "B0D4CD59VY",
    title: "Pickleball Shirt for Women – Good Day Novelty Sports Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/61mwx9WQ4GL._AC_SR38,50_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4CD59VY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "266",
    asin: "B0D4LXRPSP",
    title: "Pickleball Shirt for Women – Good Day Novelty Graphic Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/81Ufnv2t6BL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4LXRPSP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "267",
    asin: "B0D4LXY5R4",
    title: "Pickleball Shirt for Women – Mom Tshirts Good Day to Play",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71wbJiL4ofL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4LXY5R4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "268",
    asin: "B0D4M6WPWR",
    title: "Pickleball Shirt for Women – Mom Sports Graphic Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61RKyW8I9nL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4M6WPWR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "269",
    asin: "B0D4M7T7HG",
    title: "Pickleball Shirt for Women – Letter Novelty Graphic Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/614g0F5I9AL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4M7T7HG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "270",
    asin: "B0D5PP7Y1F",
    title: "Women's Pickleball Shirt – Player T-Shirt Lover Gift Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71+jj9jdm-L._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5PP7Y1F?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "271",
    asin: "B0D5PQJ9LP",
    title: "Women's Pickleball – Player Lover Gift Tank Top",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/71+jj9jdm-L._AC_SX385_.jpg",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5PQJ9LP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "272",
    asin: "B0D62M485Q",
    title: "Men's Pickleball T-Shirt – Funny Dink Graphic",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/81xm1VZq3IL._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D62M485Q?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "273",
    asin: "B0D6YP1BZS",
    title: "CQF Pickleball Shirts for Women – Stay Out of The Kitchen Printed",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71rrWPizpFL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YP1BZS?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "274",
    asin: "B0D6YPJ3DK",
    title: "CQF Pickleball Shirts – Kitchen Printed T-Shirt Funny Player",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71BJ+ODVwFL._AC_SX385_.jpg",
    tags: ["unisex", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YPJ3DK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "275",
    asin: "B0D7VZCJ5Q",
    title: "Women's Pickleball Performance Polo – Quick Dry Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/81o-R95+yzL._AC_SX385_.jpg",
    tags: ["women's", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0D7VZCJ5Q?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "276",
    asin: "B0D8WGX87X",
    title: "AYUNIX Men's Pickleball Shirts – Performance Golf Outfits",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/718yx+ScNHL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0D8WGX87X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "277",
    asin: "B0DB26KP3G",
    title: "Women's Pickleball Tee – Funny Sports Lover Short Sleeve",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/615QdOVPulL._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0DB26KP3G?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "278",
    asin: "B0DDYSS682",
    title: "Pickleball Tank Top – Women's Sleeveless Workout Graphic",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/71gQNd6pqoL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DDYSS682?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "279",
    asin: "B0DDZ62153",
    title: "Pickleball Tank Top for Women – Racerback Graphic Tee",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/71gQNd6pqoL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DDZ62153?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "280",
    asin: "B0DF84NFJZ",
    title: "Pickleball Shirt for Women – Heartbeat Lover Player T-Shirt",
    description:
      "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.",
    image: 
      "https://m.media-amazon.com/images/I/710etuzkrnL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DF84NFJZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "281",
    asin: "B0DF85DKG9",
    title: "Pickleball Shirt for Women – Heartbeat Sport Tee",
    description:
      "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.",
    image: 
      "https://m.media-amazon.com/images/I/710etuzkrnL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DF85DKG9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "282",
    asin: "B0DG2KNYHX",
    title: "AYUNIX Pickleball Shirts Men – Performance Moisture Wicking",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71ZXoRItARL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DG2KNYHX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "283",
    asin: "B0DJ6YHPPH",
    title: "Mens Performance Short Sleeve Pickleball Shirt – UV Protection",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71GRCGOERIL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DJ6YHPPH?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "284",
    asin: "B0DJRRST1K",
    title: "Mens Performance Pickleball Shirt – Moisture-Wicking Design",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61Ucot14OSL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DJRRST1K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "285",
    asin: "B0DK626N3L",
    title: "Women's Pickleball Short Sleeve – Funny Player Graphics",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/61mNT4P2kEL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DK626N3L?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "286",
    asin: "B0DMBWSDJF",
    title: "Women's Pickleball Performance Tank – UPF 50+ Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71BWIUy0YqL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0DMBWSDJF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "287",
    asin: "B0DPHNNB1Q",
    title: "Women's Pickleball Graphic Tee – Casual Sports Lover",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61HdZM7HfLL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DPHNNB1Q?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "288",
    asin: "B0DPLW4FCW",
    title: "Mens Funny T Shirts Pickleball Definition Sarcastic Graphic Novelty Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71PmvNhpKvL._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DPLW4FCW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "289",
    asin: "B0DPLYRM93",
    title: "Crazy Dog Mens Funny Pickleball T-Shirt – Sarcastic Graphic",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/61gNAsHH5tL._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DPLYRM93?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "290",
    asin: "B0DQ41G7J6",
    title: "Crazy Dog Mens Funny Pickleball T-Shirt – Hilarious Sports Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/81x5nP+uacL._AC_SX385_.jpg",
    tags: ["men's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQ41G7J6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "291",
    asin: "B0DQ45L7M8",
    title: "Men's Cationic Moisture Wicking Pickleball Running Shirt",
    description:
      "A great pickleball tee for the guys. Whether you're competing or just hanging out, this shirt has you covered.",
    image: 
      "https://m.media-amazon.com/images/I/81x5nP+uacL._AC_SX385_.jpg",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQ45L7M8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "292",
    asin: "B0DQNCL5PL",
    title: "Pickleball Shirts for Men – Funny Graphic Novelty Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/81pNy96niSL._AC_SX385_.jpg",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQNCL5PL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "293",
    asin: "B0DR82B2D3",
    title: "Pickleball Shirt Women Funny Oversized Team Graphic T-Shirt",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/614jmo0pCIL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DR82B2D3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "294",
    asin: "B0DR8459B5",
    title: "Pickleball Shirt Women Funny Oversized Team Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/51Q6WOatN9L._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0DR8459B5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "295",
    asin: "B0DR85C5K6",
    title: "Pickleball Shirt Women Funny Oversized Team Graphic (Pink)",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/51+1pCM7lSL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DR85C5K6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "296",
    asin: "B0DRCXTV3M",
    title: "Pickleball Shirt Women – Oversized Baseball Style Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61lnKqtXAOL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DRCXTV3M?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "297",
    asin: "B0DSK3223W",
    title: "Pickleball Shirt Women Funny Oversized Graphic T-Shirt Baseball",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71BAIpTDpWL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSK3223W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "298",
    asin: "B0DSWCG7ZK",
    title: "Pickleball Shirt Women – Funny Team Graphic T-Shirt",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71Dtq1vBgqL._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSWCG7ZK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "299",
    asin: "B0DVBHTFZ7",
    title: "TeeUnion Funny Pickleball T-Shirt – Hilarious Sports Graphic",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/81G+n7jUuuL._AC_SX385_.jpg",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DVBHTFZ7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "300",
    asin: "B0DXK7721Z",
    title: "Pickleball V-Neck T-Shirt for Women – Heart Graphic Short-Sleeve",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61U8nrxzSaL._AC_SX385_.jpg",
    tags: ["women's", "v-neck", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DXK7721Z?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "301",
    asin: "B0DXK83RW2",
    title: "Pickleball V-Neck T-Shirt for Women – Lovers Graphic",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61yn96ID3oL._AC_SX385_.jpg",
    tags: ["women's", "v-neck", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DXK83RW2?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "302",
    asin: "B0DY7W87XP",
    title: "Pickleball Shirts for Women – Casual Player Gift Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/81l-y6XZOHL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DY7W87XP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "303",
    asin: "B0DY7WTW7K",
    title: "Pickleball Shirts for Women – Funny Sports Graphic Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71hRYfhSW-L._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DY7WTW7K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "304",
    asin: "B0DYK3T6HD",
    title: "LAZYCHILD Pickleball Shirts Women – Heartbeat Graphic Lover Gift",
    description:
      "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.",
    image: 
      "https://m.media-amazon.com/images/I/31IvAi9NhdL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYK3T6HD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "305",
    asin: "B0DYK7X8Q3",
    title: "Women's Pickleball Heartbeat T-Shirt – Paddleball Lover",
    description:
      "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.",
    image: 
      "https://m.media-amazon.com/images/I/71ZJOZrGumL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYK7X8Q3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "306",
    asin: "B0DYN517DM",
    title: "Women's Pickleball Graphic Tee – Casual Short Sleeve Sports",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/81C9H5yxHVL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYN517DM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "307",
    asin: "B0DYP9K688",
    title: "Women's Pickleball Player Graphic T-Shirt – Short Sleeve",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61mze-E6xBL._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYP9K688?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "308",
    asin: "B0DZ28HF7T",
    title: "Women Pickleball Shirt – I Can't I Have Pickleball Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/81fF-I0udqL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ28HF7T?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "309",
    asin: "B0DZ6KP4P8",
    title: "Women Pickleball Shirt – Paddleball Lover Tee Tops",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71X+wwXuciL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ6KP4P8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "310",
    asin: "B0DZ6PYB53",
    title: "Women's Pickleball Shirt – Casual Pickle Ball Lover Tee (Cyan)",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/81TkmZergFL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ6PYB53?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "311",
    asin: "B0DZ6QJSTZ",
    title: "Women's Pickleball Shirt – Lover Casual Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71VGj3foqfL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ6QJSTZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "312",
    asin: "B0DZW2KY85",
    title: "TIEEI Pickleball Shirts for Men – Player Themed Paddleball Tee",
    description:
      "A great pickleball tee for the guys. Whether you're competing or just hanging out, this shirt has you covered.",
    image: 
      "https://m.media-amazon.com/images/I/61obiqCnjsL._AC_SX385_.jpg",
    tags: ["men's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZW2KY85?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "313",
    asin: "B0DZW33ZZY",
    title: "Pickleball Shirts for Men – Player Themed T-Shirt Paddleball Lover (Green)",
    description:
      "A great pickleball tee for the guys. Whether you're competing or just hanging out, this shirt has you covered.",
    image: 
      "https://m.media-amazon.com/images/I/71N0NYj0oWL._AC_SX385_.jpg",
    tags: ["men's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZW33ZZY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "314",
    asin: "B0F12D4PPT",
    title: "Pickleball Shirts for Women – Funny Ball Got It 2025 Novelty Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71RpkhvYFlL._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0F12D4PPT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "315",
    asin: "B0F2HM12RD",
    title: "Pickleball Shirts for Women – Funny Ball Got It Novelty Tee",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/71PbPEiUsdL._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2HM12RD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "316",
    asin: "B0F3JBJLJL",
    title: "Women's Pickleball Long Sleeve – Quick Dry Performance",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61PDZELZ+ML._AC_SX385_.jpg",
    tags: ["women's", "performance", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0F3JBJLJL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "317",
    asin: "B0F48SGR4M",
    title: "Pickleball Performance Polo – Men's Quick Dry Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/81MEG3oWVDL._AC_SX385_.jpg",
    tags: ["men's", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0F48SGR4M?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "318",
    asin: "B0F5QBG5M7",
    title: "Pickleball Shirts for Women – Graphic T-Shirt Player Gift",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61Pm00IONqL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0F5QBG5M7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "319",
    asin: "B0F6CNTM19",
    title: "Qskall Pickleball Shirts for Men – American Flag T-Shirt",
    description:
      "A great pickleball tee for the guys. Whether you're competing or just hanging out, this shirt has you covered.",
    image: 
      "https://m.media-amazon.com/images/I/71KlcEmohJL._AC_SX385_.jpg",
    tags: ["men's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F6CNTM19?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "320",
    asin: "B0F6CQMST7",
    title: "Qskall Pickleball Shirts for Men – Flag Paddleball Tee",
    description:
      "A great pickleball tee for the guys. Whether you're competing or just hanging out, this shirt has you covered.",
    image: "https://m.media-amazon.com/images/I/719BzbYlxBL._AC_SX385_.jpg",
    tags: ["men's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F6CQMST7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "321",
    asin: "B0F6CRYQ41",
    title: "Qskall Pickleball Shirts for Men – American Flag Design",
    description:
      "A great pickleball tee for the guys. Whether you're competing or just hanging out, this shirt has you covered.",
    image: "https://m.media-amazon.com/images/I/71KlcEmohJL._AC_SX385_.jpg",
    tags: ["men's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F6CRYQ41?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "322",
    asin: "B0F88B9WW8",
    title: "Pickleball Shirts for Men – UPF 50+ Quick Dry Performance Tee",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71gZdhRCTBL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0F88B9WW8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "323",
    asin: "B0F88BYTJ4",
    title: "Pickleball Shirts for Men – UPF 50+ Quick Dry Performance (Turtle)",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71gZdhRCTBL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0F88BYTJ4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "324",
    asin: "B0F88LCXDR",
    title: "Pickleball Shirts for Men – UPF 50+ Performance Tee (Bite)",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61k5+yIzHeL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0F88LCXDR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "325",
    asin: "B0F93VCRHC",
    title: "Pickleball Hoodie – Funny Graphic Pullover Sweatshirt",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/81+Dtp9y-1L._AC_SX385_.jpg",
    tags: ["unisex", "funny", "hoodie", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F93VCRHC?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "326",
    asin: "B0F9NRFT7R",
    title: "Pickleball Hoodie – Stay Out of the Kitchen Sweatshirt",
    description:
      "Stay warm before and after your matches with this cozy pickleball hoodie. Perfect for cool-weather court sessions.",
    image: 
      "https://m.media-amazon.com/images/I/61D-X3BOzYL._AC_SX385_.jpg",
    tags: ["unisex", "hoodie"],
    affiliateUrl: `https://www.amazon.com/dp/B0F9NRFT7R?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "327",
    asin: "B0FBTTMYWK",
    title: "Women's Pickleball Long Sleeve – Athletic UPF Performance",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/61ufDPjwRHL._AC_SX385_.jpg",
    tags: ["women's", "performance", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0FBTTMYWK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "328",
    asin: "B0FBZJBL54",
    title: "Women's Pickleball Hoodie – Graphic Pullover Sweatshirt",
    description:
      "Stay warm before and after your matches with this cozy pickleball hoodie. Perfect for cool-weather court sessions.",
    image: "https://m.media-amazon.com/images/I/8190fSKZ0dL._AC_SX385_.jpg",
    tags: ["women's", "hoodie", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FBZJBL54?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "329",
    asin: "B0FCFP6DDF",
    title: "Pickleball Shirts for Women – Player T-Shirt Paddleball Front Back",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/61sJjrNOlGL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FCFP6DDF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "330",
    asin: "B0FH4MRVYP",
    title: "Women Pickleball Shirt – Player T-Shirt Lover Gift",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/6172QVJpscL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FH4MRVYP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "331",
    asin: "B0FHJL6HB3",
    title: "Women Pickleball Shirt – Player T-Shirt Lover Gift Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/61s-0rqXfkL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FHJL6HB3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "332",
    asin: "B0FHKS5XQY",
    title: "Women Pickleball Shirt – Player T-Shirt (Purple)",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/81mWsk-1ATL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FHKS5XQY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "333",
    asin: "B0FJDGNW45",
    title: "LBP Pickleball Shirt Women – Casual Pickle Ball Tee (Blue)",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/71GIPfhU4EL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJDGNW45?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "334",
    asin: "B0FJRKZVMR",
    title: "LBP Pickleball Shirt Women – Pickle Ball Lover Casual Tee",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71VI-L+1yQL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJRKZVMR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "335",
    asin: "B0FLX8ZSNJ",
    title: "LHBNK Pickleball Tank Tops Women – Graphic Tees Sleeveless",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/71mOQ2o-BaL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FLX8ZSNJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "336",
    asin: "B0FM2DZ1FY",
    title: "Pickleball Hoodie – Men's Funny Graphic Sweatshirt",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: 
      "https://m.media-amazon.com/images/I/81YVYB+IemL._AC_SX385_.jpg",
    tags: ["men's", "funny", "hoodie", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FM2DZ1FY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "337",
    asin: "B0FPF3DPR6",
    title: "Pickleball Shirt Women Funny Oversized Team Graphic T-Shirt Baseball",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: "https://m.media-amazon.com/images/I/619WOIaV-8L._AC_SX385_.jpg",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FPF3DPR6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "338",
    asin: "B0FPFZLY3H",
    title: "Pickleball Shirt Women Funny Oversized Team Baseball Tee (Grey)",
    description:
      "A hilarious pickleball tee that's sure to get laughs on the court. Perfect for players who love a good pun.",
    image: "https://m.media-amazon.com/images/I/81f7E9rVm4L._AC_SX385_.jpg",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FPFZLY3H?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "339",
    asin: "B0FQP3M7CG",
    title: "Pickleball Shirts Women – Player Tshirts Gym Casual Team Gift",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/71i+Mp7+Z-L._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FQP3M7CG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "340",
    asin: "B0FT2CBZGP",
    title: "Fjalljós Pickleball Shirt Men – UPF 50+ Cowboy Pickle Design",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61Rns9vxfUL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FT2CBZGP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "341",
    asin: "B0FTC7GR6D",
    title: "Fjalljós Pickleball Shirt Men – UPF 50+ Performance Tee",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/81mF6JewJdL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTC7GR6D?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "342",
    asin: "B0FTCG7PGG",
    title: "Fjalljós Pickleball Shirt Men – UPF 50+ Palm Paradise",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/81z5dglJ2NL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTCG7PGG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "343",
    asin: "B0FTCZJ5H2",
    title: "Fjalljós Pickleball Shirt Men – UPF 50+ Performance (Grey)",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/81PfLWG5VkL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTCZJ5H2?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "344",
    asin: "B0FTD5XRLT",
    title: "Fjalljós Pickleball Shirt Men – UPF 50+ Quick Dry Design",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/81PfLWG5VkL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTD5XRLT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "345",
    asin: "B0FTWGR5CW",
    title: "Fjalljós Pickleball Shirt Men – UPF 50+ Short Sleeve",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/915ngo5TOGL._AC_SX385_.jpg",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTWGR5CW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "346",
    asin: "B0FVKT71S2",
    title: "Women's Sleeveless UPF 50+ V-Neck Tennis Pickleball Top",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/81LKerGWduL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "v-neck", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FVKT71S2?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "347",
    asin: "B0FVSNSK4S",
    title: "Women's Sleeveless UPF 50+ Tennis Pickleball No-Tuck Peplum Top 1/4 Zip",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/61r29ebza9L._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "long sleeve", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FVSNSK4S?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "348",
    asin: "B0FVSPL2RG",
    title: "Women's Sleeveless UPF 50+ Quick Dry Tennis Pickleball No-Tuck Top",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/61r29ebza9L._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FVSPL2RG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "349",
    asin: "B0FVSQR3J1",
    title: "Women's Sleeveless UPF 50+ Pickleball Top – No-Tuck Peplum",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/61Eh-WsS9FL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FVSQR3J1?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "350",
    asin: "B0FVSR1TF1",
    title: "Women's Sleeveless UPF 50+ Tennis Pickleball – Racerback",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61LPgm-AxHL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FVSR1TF1?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "351",
    asin: "B0FVSRR1Y8",
    title: "Women's Sleeveless Tennis Pickleball Top – V-Neck UPF 50+",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/71T-hA16XyL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "v-neck", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FVSRR1Y8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "352",
    asin: "B0FVSS2SC9",
    title: "Women's Tennis Pickleball Top – V-Neck UPF 50+ Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61Eh-WsS9FL._AC_SX385_.jpg",
    tags: ["women's", "performance", "v-neck", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FVSS2SC9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "353",
    asin: "B0FX46KY2N",
    title: "Women's Pickleball Shirt – Oversized Casual Team Graphic",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/91zWCQFDNdL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FX46KY2N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "354",
    asin: "B0FXL6GH53",
    title: "Women's Pickleball Tee – Casual Lover Graphic Top",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: 
      "https://m.media-amazon.com/images/I/71-k671fiiL._AC_SX385_.jpg",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FXL6GH53?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "355",
    asin: "B0FZQVK6TZ",
    title: "Women's Pickleball Performance Shirt – UPF 50+ Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/61r6IBsDAmL._AC_SX385_.jpg",
    tags: ["women's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FZQVK6TZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "356",
    asin: "B0FZTYKZTV",
    title: "Men's Pickleball Performance Polo – Quick Dry Sport",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/61PMLoslsBL._AC_SX385_.jpg",
    tags: ["men's", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0FZTYKZTV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "357",
    asin: "B0G26LKLMY",
    title: "Women's Pickleball Performance Top – Quick Dry Tennis",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/81xKBKduewL._AC_SX385_.jpg",
    tags: ["women's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0G26LKLMY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "358",
    asin: "B0G26LZVVV",
    title: "Women's Pickleball Athletic Shirt – Moisture Wicking",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/81MXLxHRKhL._AC_SX385_.jpg",
    tags: ["women's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0G26LZVVV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "359",
    asin: "B0G26NGT9X",
    title: "Women's Pickleball Performance V-Neck – Athletic Top",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/813O0oX9OIL._AC_SX385_.jpg",
    tags: ["women's", "performance", "v-neck"],
    affiliateUrl: `https://www.amazon.com/dp/B0G26NGT9X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "360",
    asin: "B0G26NHCVY",
    title: "Women's Pickleball Sport Tank – Quick Dry Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: 
      "https://m.media-amazon.com/images/I/81Vr2mg5nGL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0G26NHCVY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "361",
    asin: "B0G26PC68Z",
    title: "Women's Pickleball Performance Top – Collared Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/812o7+BI9TL._AC_SX385_.jpg",
    tags: ["women's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0G26PC68Z?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "362",
    asin: "B0G2S3KYCF",
    title: "PINSPARK Women's Collared Athletic Pickleball Shirt",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/71QjqYkMBRL._AC_SX385_.jpg",
    tags: ["women's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0G2S3KYCF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "363",
    asin: "B0G34SS9WH",
    title: "Women's Pickleball Tank Top – Racerback Athletic",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: 
      "https://m.media-amazon.com/images/I/71M0VLbMX5L._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0G34SS9WH?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "364",
    asin: "B0G3JHYV3P",
    title: "Women's Pickleball Performance Racerback Tank",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/61rfXro6bqL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0G3JHYV3P?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "365",
    asin: "B0G3PJXVLY",
    title: "Women's Pickleball Shirt – Casual V-Neck Athletic Top",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/71U3BIbjJiL._AC_SX385_.jpg",
    tags: ["women's", "performance", "v-neck", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0G3PJXVLY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "366",
    asin: "B0G4CKZTWL",
    title: "Women's Pickleball Performance – Sleeveless Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/614v0NFR1fL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0G4CKZTWL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "367",
    asin: "B0G4RK5TGW",
    title: "Women's Pickleball Performance Shirt – UPF 50+ Tennis",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/81wLFtPUsHL._AC_SX385_.jpg",
    tags: ["women's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0G4RK5TGW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "368",
    asin: "B0G4SLQ793",
    title: "Women's Pickleball Athletic – Sleeveless Workout Top",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/91EYzzI1kxL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0G4SLQ793?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "369",
    asin: "B0G58C2B9C",
    title: "Women's Pickleball Shirt – Quick Dry V-Neck Athletic",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/81YAzkKvfXL._AC_SX385_.jpg",
    tags: ["women's", "performance", "v-neck"],
    affiliateUrl: `https://www.amazon.com/dp/B0G58C2B9C?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "370",
    asin: "B0G7M3CPM6",
    title: "Women's UPF 50+ Quick Dry Tennis Polo V-Neck Racerback Athletic Tank",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/71iVCnPzlAL._AC_SX385_.jpg",
    tags: ["women's", "performance", "polo", "tank top", "v-neck", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0G7M3CPM6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "371",
    asin: "B0G7MD8LWD",
    title: "PINSPARK Women's UPF 50+ Quick Dry Tennis Polo Racerback",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/71L02RIuyHL._AC_SX385_.jpg",
    tags: ["women's", "performance", "polo", "tank top", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0G7MD8LWD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "372",
    asin: "B0GDW9N2CR",
    title: "Pickleball Sleeveless Workout Graphic – Tank Tee (Vintage Grey)",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/71sc4ed-b-L._AC_SX385_.jpg",
    tags: ["unisex", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GDW9N2CR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "373",
    asin: "B0GDZN1HBC",
    title: "Pickleball Tank Top for Women – Workout Graphic (Purple)",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/91G+eWFaqUL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GDZN1HBC?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "374",
    asin: "B0GF5XP2J9",
    title: "Pickleball Tank Top – Got It Oops Yours Sleeveless Graphic",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/71KHi+HXPJL._AC_SX385_.jpg",
    tags: ["unisex", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GF5XP2J9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "375",
    asin: "B0GF7LR23C",
    title: "Pickleball Tank Top – Sleeveless Workout Graphic (Rose Gold)",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/81OEglfPURL._AC_SX385_.jpg",
    tags: ["unisex", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GF7LR23C?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "376",
    asin: "B0GF7Q1BT5",
    title: "Pickleball Tank – Got It Oops Sleeveless Summer Tee",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/81OEglfPURL._AC_SX385_.jpg",
    tags: ["unisex", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0GF7Q1BT5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "377",
    asin: "B0GF81BBGB",
    title: "Pickleball Tank Top Women – Sleeveless Summer Workout",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/71j7BqS-R1L._AC_SX385_.jpg",
    tags: ["women's", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0GF81BBGB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "378",
    asin: "B0GF836G7C",
    title: "Pickleball Tank Top Women – Got It Oops Graphic",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/71V3NEiYpdL._AC_SX385_.jpg",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GF836G7C?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "379",
    asin: "B0GG7CNS52",
    title: "Pickleball Shirt Women – Oversized Team Graphic Baseball",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/815WeJ+bH9L._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GG7CNS52?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "380",
    asin: "B0GH7V91DW",
    title: "Pickleball Shirts Women – It's A Good Day to Play V-Neck",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/81sRHUlCLoL._AC_SX385_.jpg",
    tags: ["women's", "v-neck"],
    affiliateUrl: `https://www.amazon.com/dp/B0GH7V91DW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "381",
    asin: "B0GHRCSCLD",
    title: "Pickleball Shirts for Women – Casual Letter Printed Tees",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/91I7wuh3fbL._AC_SX385_.jpg",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GHRCSCLD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "382",
    asin: "B0GHY2HVFZ",
    title: "Pickleball Shirt for Women – Heartbeat Player Sport Tee",
    description:
      "Show that pickleball is in your heartbeat with this fun graphic tee. A must-have for passionate players.",
    image: "https://m.media-amazon.com/images/I/71YN6BzB1+L._AC_SX385_.jpg",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GHY2HVFZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "383",
    asin: "B0GL26BST3",
    title: "Women's Sleeveless Tennis Pickleball Golf Polo – Quick Dry UPF50+",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/613wunQqXwL._AC_SX385_.jpg",
    tags: ["women's", "performance", "polo", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0GL26BST3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "384",
    asin: "B0GL28GPXM",
    title: "Outfeel Women's Sleeveless Pickleball Golf Polo – Breathable Mesh",
    description:
      "Stay cool on the court with this sleeveless pickleball top. Lightweight and breathable for peak performance.",
    image: "https://m.media-amazon.com/images/I/613wunQqXwL._AC_SX385_.jpg",
    tags: ["women's", "polo", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0GL28GPXM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "385",
    asin: "B0GL31WYKR",
    title: "Women's Sleeveless Pickleball – Golf Polo 1/4 Zip UPF50+",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/61ADMZCiMYL._AC_SX385_.jpg",
    tags: ["women's", "performance", "polo", "tank top", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0GL31WYKR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "386",
    asin: "B0GL35SNKN",
    title: "Women's Pickleball Golf Polo – Sleeveless Quick Dry",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/61UqfbRutWL._AC_SX385_.jpg",
    tags: ["women's", "performance", "polo", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0GL35SNKN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "387",
    asin: "B0GL37414D",
    title: "Women's Pickleball Polo – UPF50+ Breathable Mesh Back",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/5196xcF207L._AC_SX385_.jpg",
    tags: ["women's", "performance", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0GL37414D?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "388",
    asin: "B0GLXVYZSV",
    title: "Women's Pickleball Performance – Sleeveless UPF 50+",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/814ejaIOlAL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0GLXVYZSV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "389",
    asin: "B0GLYLVMK5",
    title: "Women's Sleeveless Pickleball Top – Athletic Performance",
    description:
      "High-performance pickleball apparel with moisture-wicking technology. Designed for comfort on and off the court.",
    image: "https://m.media-amazon.com/images/I/61guJmHL3VL._AC_SX385_.jpg",
    tags: ["women's", "performance", "tank top"],
    affiliateUrl: `https://www.amazon.com/dp/B0GLYLVMK5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "390",
    asin: "B0GVBY9TZT",
    title: "Women's Pickleball Graphic T-Shirt – Casual Short Sleeve",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/B1On3Y+j0-L._CLa%7C2140%2C2000%7C81RxH5%2BpaWL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GVBY9TZT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "391",
    asin: "B0GVBYY2BD",
    title: "Women's Pickleball Graphic Tee – Sports Lover Casual",
    description:
      "A stylish pickleball tee designed for women who love the game. Comfortable enough for all-day wear.",
    image: "https://m.media-amazon.com/images/I/B1mEhjGJ2nL._CLa%7C2140%2C2000%7CB1umaMYiAtL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SL1500_.png",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GVBYY2BD?tag=${AFFILIATE_TAG}`,
  }

];

export default shirts;
