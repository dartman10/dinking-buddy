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
    image: "",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5Y248WX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "22",
    asin: "B0F12ML71L",
    title: "Funny Pickleball Shirt – Women's Ball Got It 2025 Tee",
    description:
      "A 2025 novelty retirement-ready pickleball shirt with a fun 'Ball Got It' graphic. Great conversation starter on and off the court.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F12ML71L?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "23",
    asin: "B0FP33JSB2",
    title: "Pickleball Shirts Women – Player Team Tshirts",
    description:
      "Rep your pickleball squad with this women's team-style graphic tee. Comfortable short sleeve fit, perfect for casual matches and practice sessions.",
    image: "",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FP33JSB2?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "24",
    asin: "B0F1FSNM8V",
    title: "Women's Oversized Pickleball Team Graphic T-Shirt",
    description:
      "An oversized, relaxed-fit pickleball graphic tee for women who like their shirts comfortable and their dinks precise. Baseball-fan style design.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F1FSNM8V?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "25",
    asin: "B0D62Q5HYD",
    title: "I Can't, I Have Pickleball – Women's Tee",
    description:
      "The perfect excuse for every invitation. This 'I Can't, I Have Pickleball' shirt lets everyone know where your priorities are.",
    image: "",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0D62Q5HYD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "26",
    asin: "B0CWLF42FW",
    title: "It's A Good Day to Play Pickleball – Women's Colorful Tee",
    description:
      "Brighten up your wardrobe with this colorful pickleball graphic tee. Every day is a good day to play when you're wearing this cheerful shirt.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CWLF42FW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "27",
    asin: "B0C5QYPPNM",
    title: "Women's It's a Good Day to Play Pickleball Tank Top",
    description:
      "Stay cool on the court with this women's racerback tank top. A cute pickleball lover vest shirt perfect for summer casual sport.",
    image: "",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5QYPPNM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "28",
    asin: "B0DZCLZKK8",
    title: "TUPOSU Pickleball Shirt for Women – Player Lover Tee",
    description:
      "A dedicated pickleball player shirt from TUPOSU with a fun graphic design. Makes a great gift for any woman who loves the game.",
    image: "",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZCLZKK8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "29",
    asin: "B0GH7Q7H2H",
    title: "It's A Good Day – Women's V-Neck Pickleball Tee",
    description:
      "A relaxed V-neck tee with a fun pickleball graphic. Casual enough for everyday wear, sporty enough for post-game hangouts.",
    image: "",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GH7Q7H2H?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "30",
    asin: "B0DSDN1BGX",
    title: "Pickleball Oversized Graphic T-Shirt – Baseball Fan Style",
    description:
      "A trendy oversized graphic tee that combines pickleball love with baseball-style flair. Short sleeve, relaxed fit, and full of personality.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSDN1BGX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "31",
    asin: "B0BWXJ1NVP",
    title: "Women's Pickleball Graphic T-Shirt – Player Gift",
    description:
      "A versatile women's pickleball graphic tee that works as a thoughtful gift or a treat for yourself. Short sleeve, comfortable fit.",
    image: "",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0BWXJ1NVP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "32",
    asin: "B0GC63R8NJ",
    title: "Pickleball Tank Top – Got It Oops Yours Sleeveless",
    description:
      "The classic pickleball call-out on a sleeveless summer tank. 'Got It... Oops, Yours!' — every player knows this moment.",
    image: "",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GC63R8NJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "33",
    asin: "B0GJSQ8MNR",
    title: "Peace Love Pickleball – Women's Sport T-Shirt",
    description:
      "Peace, love, and pickleball — the three essentials. A fun graphic tee for women who believe in living the good life, one dink at a time.",
    image: "",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GJSQ8MNR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "34",
    asin: "B0C624RM1W",
    title: "Was That Out? – Women's Letter Print Pickleball Shirt",
    description:
      "The most debated question in pickleball history, now on a shirt. A playful letter-print graphic tee that every player can relate to.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C624RM1W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "35",
    asin: "B0DXKHHRJJ",
    title: "Pickleball Heart V-Neck Graphic Tee – Women's",
    description:
      "Wear your heart on your sleeve — and your love for pickleball on your chest. A cute heart-themed V-neck graphic tee for women.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DXKHHRJJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "36",
    asin: "B0GJBHMN1G",
    title: "Cutesong Pickleball Player T-Shirt – Funny Sports Lover",
    description:
      "A funny and cute pickleball player tee from Cutesong. Short sleeve, lightweight, and perfect for showing off your love of the sport.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GJBHMN1G?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "37",
    asin: "B0DZ6JLR1L",
    title: "I Can't, I Have Pickleball – Women's Paddleball Lover",
    description:
      "Another excuse to skip everything else — because pickleball comes first. A fun paddleball lover tee for women with priorities.",
    image: "",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ6JLR1L?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "38",
    asin: "B0F186TZZY",
    title: "LHBNK Pickleball Tank Tops – Women's Graphic Summer",
    description:
      "A fun graphic pickleball tank top from LHBNK. Perfect for hot summer matches, gym sessions, or just showing off your pickleball obsession.",
    image: "",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F186TZZY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "39",
    asin: "B0FCYSKQ66",
    title: "LuxLass Pickleball Shirt – Front & Back Print Women's",
    description:
      "Stand out with front and back pickleball graphic prints from LuxLass. A paddleball-themed tee that says you're serious about the game.",
    image: "",
    tags: ["women's", "graphic", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FCYSKQ66?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "40",
    asin: "B0D6YQLQTD",
    title: "Stay Out of The Kitchen – Women's Printed Tee",
    description:
      "The golden rule of pickleball on a graphic tee. Stay out of the kitchen and look great doing it with this women's printed shirt.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YQLQTD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "41",
    asin: "B0D4M1B6SY",
    title: "Pickleball Mom – It's a Good Day Tee",
    description:
      "For the mom who never misses a game. A dedicated pickleball mom tee that celebrates the sport and the player who balances it all.",
    image: "",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4M1B6SY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "42",
    asin: "B0CM5QH7T9",
    title: "COLORFUL BLING Women's Pickleball T-Shirt – Crew Neck",
    description:
      "A stylish crew neck pickleball tee from COLORFUL BLING. Stretchable cotton blend with a regular fit that's comfortable on and off the court.",
    image: "",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CM5QH7T9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "43",
    asin: "B0CJTRSFNP",
    title: "Women's Athletic V-Neck Pickleball Tee",
    description:
      "An athletic V-neck pickleball tee designed for active play. Lightweight, breathable, and ready for competitive or casual matches.",
    image: "",
    tags: ["women's", "performance", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CJTRSFNP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "44",
    asin: "B0GKZSK88L",
    title: "Women's Funny Polo Shirt – Pickleball Golf Tennis Print",
    description:
      "A fun printed polo shirt that bridges pickleball, golf, and tennis. Collared design makes it court-ready and country-club approved.",
    image: "",
    tags: ["women's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0GKZSK88L?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "45",
    asin: "B0C5QZG9TZ",
    title: "Pickleball Lover Vest – Women's Sleeveless Tank",
    description:
      "A sleeveless pickleball vest shirt for summer sport. Casual, comfortable, and perfect for showing off your toned pickleball arms.",
    image: "",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5QZG9TZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "46",
    asin: "B0GCDJWRW7",
    title: "ZIRWTI Play Pickleball Racerback Tank – Women's",
    description:
      "A racerback graphic tank from ZIRWTI with a fun 'Play Pickleball' design. Athletic gym clothes meet pickleball style.",
    image: "",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GCDJWRW7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "47",
    asin: "B0D4CFHWLB",
    title: "Pickleball Shirt – Vintage Sports Lover Graphic Tee",
    description:
      "A vintage-inspired pickleball graphic tee for the sports lover. The retro design adds character to this everyday-wearable shirt.",
    image: "",
    tags: ["women's", "graphic", "vintage"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4CFHWLB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "48",
    asin: "B0D1Y89663",
    title: "Got It Oops Yours – Pickleball V-Neck Funny Tee",
    description:
      "The universal pickleball callout on a women's V-neck tee. A funny gift for pickleball lovers who've lived this moment a thousand times.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D1Y89663?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "49",
    asin: "B0GHYMTJJP",
    title: "IFQ Heartbeat Pickleball Lover T-Shirt – Women's",
    description:
      "Show the world your heartbeat runs on pickleball with this graphic tee from IFQ. A fun sport lover shirt with a pulse-line design.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GHYMTJJP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "50",
    asin: "B0DDL2WYN7",
    title: "LAZYCHILD Pickleball Heartbeat Graphic T-Shirt",
    description:
      "A heartbeat-themed pickleball tee from LAZYCHILD. The EKG-style graphic shows your vital signs are all pickleball, all the time.",
    image: "",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0DDL2WYN7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "51",
    asin: "B0FPTPNKTB",
    title: "Pickleball Because Murder is Wrong – Funny Women's Tee",
    description:
      "The ultimate stress-relief sport, now with a hilarious tagline. A darkly funny pickleball tee for women with a great sense of humor.",
    image: "",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FPTPNKTB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "52",
    asin: "B0DY7WVBR3",
    title: "Pickleball Short Sleeve Shirt – Women's Casual",
    description:
      "A simple, comfortable short sleeve pickleball shirt for everyday wear. Clean design, relaxed fit, and perfect for casual outings.",
    image: "",
    tags: ["women's", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DY7WVBR3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "53",
    asin: "B0D5PVFHPL",
    title: "LIWYLU Pickleball Tank Top – Women's Player Gift",
    description:
      "A pickleball player gift tank from LIWYLU. Casual sports tee with sleeveless design, perfect for warm-weather play.",
    image: "",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5PVFHPL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "54",
    asin: "B0F1F1JHN9",
    title: "Pickleball Shirts – 2025 Novelty Retirement Sport Graphic",
    description:
      "A novelty retirement sport graphic tee for the 2025 pickleball obsessive. Because your new full-time job is playing pickleball.",
    image: "",
    tags: ["women's", "funny", "retirement"],
    affiliateUrl: `https://www.amazon.com/dp/B0F1F1JHN9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "55",
    asin: "B0GH7H4L6Y",
    title: "WESEOOU V-Neck Pickleball Tees – Women's Casual",
    description:
      "A relaxed V-neck pickleball tee from WESEOOU. Casual letter-print design that's perfect for the women who live for the game.",
    image: "",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GH7H4L6Y?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "56",
    asin: "B0F8NVKZ1C",
    title: "Women's Sleeveless Graphic Workout Pickleball Top",
    description:
      "A sleeveless graphic workout top for the active pickleball player. Designed for movement and breathability during intense matches.",
    image: "",
    tags: ["women's", "tank top", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0F8NVKZ1C?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "57",
    asin: "B0C1N6CRN5",
    title: "Was That Out? – Women's Pickleball T-Shirt",
    description:
      "The eternal pickleball debate on yet another must-have tee. Because the ball was definitely out... or was it?",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C1N6CRN5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "58",
    asin: "B0F48SX6GV",
    title: "ChalkTalkSPORTS Pickleball Button Down Dress Shirt",
    description:
      "Dress it up with this ChalkTalkSPORTS pickleball button-down. A polished look for the player who takes both their game and style seriously.",
    image: "",
    tags: ["men's", "premium", "polo"],
    affiliateUrl: `https://www.amazon.com/dp/B0F48SX6GV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "59",
    asin: "B0BZQLB45K",
    title: "ChalkTalkSPORTS Pickleball Performance Polo – Adult",
    description:
      "A premium performance polo from ChalkTalkSPORTS designed for the serious pickleball player. Moisture-wicking fabric keeps you cool under pressure.",
    image: "",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0BZQLB45K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "60",
    asin: "B0DY4HHTJY",
    title: "Men's Pinhole Stitching Performance Pickleball Shirt",
    description:
      "Technical pinhole stitching construction for maximum airflow during competitive play. A performance shirt built for athletes who don't slow down.",
    image: "",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DY4HHTJY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "61",
    asin: "B0DLGTZYVL",
    title: "Men's Performance Short Sleeve Pickleball Tee – UV",
    description:
      "UV-protective short sleeve performance tee for outdoor pickleball. Moisture-wicking technology keeps you dry through every rally.",
    image: "",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0DLGTZYVL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "62",
    asin: "B0DQF3H31G",
    title: "Franklin Sports Men's Performance Pickleball Shirt",
    description:
      "From the trusted name in sports equipment, Franklin Sports delivers a performance pickleball shirt built for competitive play and lasting comfort.",
    image: "",
    tags: ["men's", "performance", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQF3H31G?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "63",
    asin: "B0F887KYYF",
    title: "Fjalljós Turtle Neck Pickleball Performance Shirt",
    description:
      "A unique turtle neck performance design from Fjalljós with UPF 50+ sun protection. Stand out on the court with style and function.",
    image: "",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0F887KYYF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "64",
    asin: "B0FTMZ8YNP",
    title: "Fjalljós UPF 50+ Pickleball Performance Tee – Quick Dry",
    description:
      "Quick-dry UPF 50+ performance tee from Fjalljós. Purpose-built for outdoor pickleball with moisture-wicking fabric and athletic cut.",
    image: "",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTMZ8YNP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "65",
    asin: "B0DQF368RC",
    title: "Franklin Sports Performance Pickleball Shirt – White",
    description:
      "A clean white performance polo from Franklin Sports. Classic courtside style with modern moisture-wicking technology.",
    image: "",
    tags: ["men's", "performance", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQF368RC?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "66",
    asin: "B0FTMWGWH7",
    title: "Fjalljós Performance Pickleball Tee – Short Sleeve",
    description:
      "Another standout from Fjalljós, this short sleeve performance tee combines athletic cut with technical fabric for serious court time.",
    image: "",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTMWGWH7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "67",
    asin: "B0CKM47TZS",
    title: "Men's Performance Pickleball Raglan Tee",
    description:
      "A raglan-cut performance tee designed for full range of motion on the pickleball court. Athletic fit with breathable construction.",
    image: "",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0CKM47TZS?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "68",
    asin: "B0GD6WDDGD",
    title: "Cozople Athletic Pickleball Performance Shirt",
    description:
      "Cozople's athletic pickleball shirt combines performance fabric with a comfortable fit. Designed for players who demand both style and function.",
    image: "",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0GD6WDDGD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "69",
    asin: "B0DY7X93P3",
    title: "Men's Pinhole Performance Pickleball Tee – Variant",
    description:
      "Technical performance tee with pinhole ventilation for enhanced airflow. Stay cool during the most competitive matches.",
    image: "",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DY7X93P3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "70",
    asin: "B0F888VVDJ",
    title: "Fjalljós Unique Print Pickleball Shirt – Performance",
    description:
      "A unique graphic print performance pickleball shirt from Fjalljós. Quick-dry fabric meets eye-catching design.",
    image: "",
    tags: ["men's", "performance", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F888VVDJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "71",
    asin: "B0DG2N63ZP",
    title: "AYUNIX Pickleball Polo – Men's Performance",
    description:
      "Step onto the court in style with the AYUNIX pickleball polo. Moisture-wicking performance fabric with a sharp collared design.",
    image: "",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DG2N63ZP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "72",
    asin: "B0DG2N6FZG",
    title: "AYUNIX Pickleball Polo Shirt – Men's Sport",
    description:
      "A sport-ready polo from AYUNIX designed for the competitive pickleball player. Keeps you dry and looking sharp all match long.",
    image: "",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DG2N6FZG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "73",
    asin: "B0BZQM3PV6",
    title: "ChalkTalkSPORTS Pickleball Performance Polo – Sport",
    description:
      "A sport-focused performance polo from ChalkTalkSPORTS. Premium moisture management for the player who takes every point seriously.",
    image: "",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0BZQM3PV6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "74",
    asin: "B0DZ6Q4HYT",
    title: "Men's Seamless Pickleball Performance Shirt",
    description:
      "Seamless construction eliminates chafing during intense play. A next-level performance shirt for dedicated pickleball athletes.",
    image: "",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ6Q4HYT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "75",
    asin: "B0CNM6QPD3",
    title: "Men's Long Sleeve Pickleball Athletic Shirt",
    description:
      "Extra coverage for early morning or late afternoon court sessions. A long sleeve athletic pickleball shirt with performance fabric.",
    image: "",
    tags: ["men's", "performance", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0CNM6QPD3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "76",
    asin: "B0C4X1JNDG",
    title: "Life is Good – Keep It Simple Pickleball Tee (Dark)",
    description:
      "The iconic Life is Good Crusher Tee in a darker colorway. USA-grown cotton, simple pickleball graphic, maximum comfort.",
    image: "",
    tags: ["men's", "premium", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C4X1JNDG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "77",
    asin: "B0DQ3ZWYBH",
    title: "Men's Moisture Wicking Pickleball Performance Shirt",
    description:
      "Engineered for athletes, this moisture-wicking performance shirt keeps you dry and comfortable through marathon pickleball sessions.",
    image: "",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQ3ZWYBH?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "78",
    asin: "B0DYJZKKHZ",
    title: "Men's Orion Performance Pickleball Shirt",
    description:
      "The Orion performance pickleball shirt delivers technical fabric and athletic cut for competitive players who demand the best.",
    image: "",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYJZKKHZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "79",
    asin: "B0D7W36R6J",
    title: "AYUNIX Pickleball Performance Polo – Golf Outfits",
    description:
      "Dress for the club and the court with this versatile AYUNIX polo. Pickleball graphics meet golf-course style.",
    image: "",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0D7W36R6J?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "80",
    asin: "B0FGKRYRJ2",
    title: "Court & Coast Short Sleeve Pickleball Shirt",
    description:
      "From court to coast, this versatile short sleeve shirt transitions seamlessly between active play and casual hangouts.",
    image: "",
    tags: ["men's", "performance", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FGKRYRJ2?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "81",
    asin: "B0F6CRV83X",
    title: "Qskall American Flag Pickleball T-Shirt – 4th of July",
    description:
      "Combine patriotism and pickleball with this American flag graphic tee from Qskall. Perfect for 4th of July tournaments and holiday cookouts.",
    image: "",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F6CRV83X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "82",
    asin: "B0DQF2CX98",
    title: "Franklin Sports Ultimate Polo – Pickleball Edition",
    description:
      "Franklin Sports' ultimate polo shirt in a pickleball edition. Premium feel, athletic performance, and a brand you trust.",
    image: "",
    tags: ["men's", "polo", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0DQF2CX98?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "83",
    asin: "B0DZW1D81T",
    title: "TIEEI Pickleball Shirts – Men's Paddleball Themed Tee",
    description:
      "A paddleball-themed graphic tee from TIEEI for the men's pickleball enthusiast. Casual fit with a fun player-themed design.",
    image: "",
    tags: ["men's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZW1D81T?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "84",
    asin: "B0BKG1PMZL",
    title: "Ann Arbor Retirement Plan: Pickleball – Funny Shirt",
    description:
      "From Ann Arbor T-shirt Co., the ultimate retirement plan shirt. Because the only thing better than retiring is retiring to play pickleball.",
    image: "",
    tags: ["men's", "funny", "retirement"],
    affiliateUrl: `https://www.amazon.com/dp/B0BKG1PMZL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "85",
    asin: "B0FTWJ25PN",
    title: "Men's Funny Long Sleeve Polo – Pickleball Edition",
    description:
      "A long sleeve polo with pickleball humor built in. Perfect for those cooler court days when you still want to make your opponents laugh.",
    image: "",
    tags: ["men's", "polo", "funny", "long sleeve"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTWJ25PN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "86",
    asin: "B0BJWCJLMK",
    title: "The Dinkfather – Funny Pickleball T-Shirt for Men",
    description:
      "An offer your fellow players can't refuse. The Dinkfather parody tee is the ultimate power move for any pickleball godfather.",
    image: "",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0BJWCJLMK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "87",
    asin: "B0DZ2698Z2",
    title: "Men's Pickleball Polo – Pickles Print",
    description:
      "A fun pickles-print polo for the man who doesn't take himself too seriously. Stylish enough for the court, funny enough for the after-party.",
    image: "",
    tags: ["men's", "polo", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZ2698Z2?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "88",
    asin: "B0DGV912RB",
    title: "Men's Quarter Zip Pickleball Performance Shirt",
    description:
      "A sleek quarter-zip performance shirt for the player who wants versatility. Zip up for warmup, unzip for intense rallies.",
    image: "",
    tags: ["men's", "performance", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0DGV912RB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "89",
    asin: "B0CF3X3QN9",
    title: "Margaritaville Fins Up Pickleball Shirt",
    description:
      "It's 5 o'clock somewhere, and pickleball is always on the schedule. The Margaritaville Fins Up pickleball shirt brings island vibes to the court.",
    image: "",
    tags: ["men's", "casual", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0CF3X3QN9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "90",
    asin: "B0C3FG2L7X",
    title: "ChalkTalkSPORTS Pickleball Short Sleeve Button Down",
    description:
      "A versatile short sleeve pickleball button-down from ChalkTalkSPORTS. Casual enough for the weekend, sharp enough for a pickleball social.",
    image: "",
    tags: ["unisex", "premium", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C3FG2L7X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "91",
    asin: "B0DVBFTJXD",
    title: "TeeUnion Funny Pickleball T-Shirt – Hilarious Graphic",
    description:
      "Another hilarious sports graphic from TeeUnion that'll have the whole court cracking up. Because pickleball is serious business told with humor.",
    image: "",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DVBFTJXD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "92",
    asin: "B0BZQLB4F5",
    title: "ChalkTalkSPORTS Pickleball Sport Polo – Performance",
    description:
      "ChalkTalkSPORTS performance sport polo built for competitive pickleball. Youth and adult sizes available for the whole family.",
    image: "",
    tags: ["unisex", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0BZQLB4F5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "93",
    asin: "B0C5QZNQG8",
    title: "Women It's a Good Day to Play – Pickleball Tank",
    description:
      "Spread positivity on the pickleball court with this 'Good Day to Play' tank. Casual, comfortable, and full of good vibes.",
    image: "",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5QZNQG8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "94",
    asin: "B0DVBTKNGX",
    title: "TeeUnion Funny Pickleball Graphic – Sports Humor Tee",
    description:
      "TeeUnion strikes again with another funny pickleball graphic tee. For the player who wins every match — at least when it comes to humor.",
    image: "",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DVBTKNGX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "95",
    asin: "B0F189JB18",
    title: "LHBNK Pickleball Tank Tops – Women's Summer Graphic",
    description:
      "A graphic pickleball tank from LHBNK that's perfect for summer. Sleeveless design keeps you cool when the game heats up.",
    image: "",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F189JB18?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "96",
    asin: "B0D1Y5KSNB",
    title: "Got It Oops Yours – Pickleball V-Neck Gift Tee",
    description:
      "The pickleball callout that never gets old, on a comfortable V-neck tee. A perfect gag gift for any pickleball player.",
    image: "",
    tags: ["unisex", "funny", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D1Y5KSNB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "97",
    asin: "B0DZCM6Y2N",
    title: "TUPOSU Pickleball Player Shirt – Funny Graphic",
    description:
      "A funny pickleball player graphic shirt from TUPOSU. Bold design for the player who loves making a statement on the court.",
    image: "",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZCM6Y2N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "98",
    asin: "B0BJW9S5B4",
    title: "I'm Missing Pickleball Right Now – Funny T-Shirt",
    description:
      "Worn when you're anywhere that isn't the pickleball court. Because you're always missing pickleball, even if you just finished playing.",
    image: "",
    tags: ["unisex", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BJW9S5B4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "99",
    asin: "B0DB25795F",
    title: "Men's Moisture Wicking Pickleball Performance Variant",
    description:
      "A moisture-wicking performance tee for the serious player. Keeps you dry and focused during long tournament days.",
    image: "",
    tags: ["men's", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0DB25795F?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "100",
    asin: "B0C626FFN6",
    title: "Was That Out? – Pickleball Letter Print Tee",
    description:
      "Join the eternal debate with this 'Was That Out?' letter print tee. Every pickleball player has been there — now wear the argument.",
    image: "",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C626FFN6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "101",
    asin: "B0D6YPJC7W",
    title: "Stay Out of The Kitchen – Printed Pickleball Tee",
    description:
      "Kitchen violations are no joke — unless they're on your shirt. A fun printed tee reminding everyone of pickleball's golden rule.",
    image: "",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YPJC7W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "102",
    asin: "B0DPLVXC29",
    title: "Pickleball Definition – Sarcastic Graphic Novelty Tee",
    description:
      "The dictionary definition of pickleball, but way more accurate (and sarcastic). A novelty tee from Crazy Dog for players with a sense of humor.",
    image: "",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DPLVXC29?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "103",
    asin: "B0D8KWK44B",
    title: "AYUNIX Pickleball Polo – Performance Golf Outfits",
    description:
      "A performance polo that transitions seamlessly from the pickleball court to the golf course. AYUNIX quality with quick-dry comfort.",
    image: "",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0D8KWK44B?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "104",
    asin: "B0G6T4Y2F9",
    title: "TIEEI Pickleball Shirts – Paddleball Themed Graphic",
    description:
      "A paddleball-themed graphic tee from TIEEI. Casual styling meets pickleball enthusiasm in this comfortable everyday shirt.",
    image: "",
    tags: ["unisex", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0G6T4Y2F9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "105",
    asin: "B0FP2YV5L8",
    title: "Pickleball Women Tshirts – Gym Casual Team Lover",
    description:
      "A gym-ready casual pickleball tee for women. Perfect for team practices, friendly matches, or just representing the sport you love.",
    image: "",
    tags: ["women's", "casual", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FP2YV5L8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "106",
    asin: "B0FJFCWKQJ",
    title: "LBP Women's Pickleball Shirt – Pickle Ball Lover",
    description:
      "A cute pickleball lover shirt from LBP. Casual pickle ball tee that makes a great gift for the pickleball-obsessed woman in your life.",
    image: "",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJFCWKQJ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "107",
    asin: "B0GC66KCGV",
    title: "Got It Oops Yours – Pickleball Sleeveless Tank",
    description:
      "The 'Got It Oops Yours' moment captured on a sleeveless summer workout graphic tee. A funny tank for warm-weather pickleball.",
    image: "",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GC66KCGV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "108",
    asin: "B0DYK8WK24",
    title: "Qskall American Flag Pickleball – Patriotic Tee",
    description:
      "Fly the flag and the paddle with this American flag pickleball tee. Patriotic design meets paddleball lover style.",
    image: "",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYK8WK24?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "109",
    asin: "B0FHPDBK1Y",
    title: "SUWATOIN Women Pickleball Player Gift Tee",
    description:
      "A dedicated women's pickleball player gift tee from SUWATOIN. Comfortable fit, fun design, and perfect for the player who has everything.",
    image: "",
    tags: ["women's", "gift", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FHPDBK1Y?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "110",
    asin: "B0BJXQCKM8",
    title: "I'm Missing Pickleball Right Now – Unisex Tee",
    description:
      "For every moment you're not on the court. This funny unisex tee captures the feeling every pickleball addict knows too well.",
    image: "",
    tags: ["unisex", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0BJXQCKM8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "111",
    asin: "B0DLX1H5P3",
    title: "Pickleball Champion – Graphic Tee",
    description:
      "Declare yourself the pickleball champion with this bold graphic tee. Whether it's official or self-proclaimed, wear it with pride.",
    image: "",
    tags: ["unisex", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DLX1H5P3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "112",
    asin: "B0GCCD3ZV8",
    title: "ZIRWTI Racerback Pickleball Tank – Play Pickleball",
    description:
      "A racerback tank from ZIRWTI that's built for movement. Play pickleball in style with this athletic gym-ready graphic tank.",
    image: "",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0GCCD3ZV8?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "113",
    asin: "B0FTMTWJNN",
    title: "Fjalljós Performance Tee – UPF 50+ Men's Pickleball",
    description:
      "UPF 50+ quick-dry performance from Fjalljós. Purpose-built for pickleball players who need sun protection without sacrificing comfort.",
    image: "",
    tags: ["men's", "performance", "UPF"],
    affiliateUrl: `https://www.amazon.com/dp/B0FTMTWJNN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "114",
    asin: "B0D1Y7XKYT",
    title: "Got It Oops Yours – Ladies V-Neck Pickleball Gifts",
    description:
      "The beloved 'Got It Oops Yours' phrase on a ladies V-neck tee. A funny gift that resonates with every pickleball player.",
    image: "",
    tags: ["women's", "funny", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D1Y7XKYT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "115",
    asin: "B0GH7Q9GKF",
    title: "WESEOOU V-Neck Funny Casual Pickleball Tee",
    description:
      "A funny casual V-neck pickleball tee from WESEOOU. Relaxed fit with a playful design for the woman who takes her game seriously but not herself.",
    image: "",
    tags: ["women's", "funny", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GH7Q9GKF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "116",
    asin: "B0G6L8M47T",
    title: "Pickleball Oversized Team Graphic Tee",
    description:
      "An oversized team-style graphic tee for the pickleball-obsessed. Relaxed fit and bold design make this a wardrobe staple.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0G6L8M47T?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "117",
    asin: "B0CM5NV22N",
    title: "COLORFUL BLING Women's Pickleball Player Graphic Tee",
    description:
      "A colorful pickleball player graphic tee from COLORFUL BLING. Short sleeve, crew neck, and stretchable cotton blend for all-day comfort.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CM5NV22N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "118",
    asin: "B0DNWL1PHK",
    title: "RMTXCD Tank Top – Pickleball Lover Summer",
    description:
      "A pickleball lover tank from RMTXCD for those hot summer court sessions. Casual, cute, and ready for game day.",
    image: "",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DNWL1PHK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "119",
    asin: "B0CKQQT32M",
    title: "LAZYCHILD Heartbeat Pickleball Shirt – Graphic Tee",
    description:
      "Another heartbeat graphic pickleball tee from LAZYCHILD. Show the world your vital signs are all pickleball, all the time.",
    image: "",
    tags: ["women's", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CKQQT32M?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "120",
    asin: "B0FPVWFTMP",
    title: "Abraham Dinkin – Funny Pickleball Tee",
    description:
      "Four score and seven dinks ago... The Abraham Dinkin tee combines pickleball humor with presidential flair. A hilarious conversation piece.",
    image: "",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FPVWFTMP?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "121",
    asin: "B0CSPVD5MV",
    title: "Camp Dink Counselor – Pickleball Shirt",
    description:
      "Welcome to Camp Dink, where every session is a pickleball clinic. A fun counselor-themed tee for the player who always teaches the newbies.",
    image: "",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CSPVD5MV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "122",
    asin: "B0G7J4B55P",
    title: "Women's Pickleball Graphic T – Casual Funny Sports",
    description:
      "A casual funny sports graphic tee for women who love pickleball. Lightweight, comfortable, and always game-ready.",
    image: "",
    tags: ["women's", "funny", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0G7J4B55P?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "123",
    asin: "B0D5LX8K96",
    title: "SUWATOIN Women Pickleball Shirt – Casual Player Tee",
    description:
      "A casual pickleball player tee from SUWATOIN. Simple, comfortable design that works for game day and every day.",
    image: "",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5LX8K96?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "124",
    asin: "B0B1N8N42X",
    title: "Mens Funny Pickleball Legend – Sports Hilarious Tee",
    description:
      "Because every pickleball court needs a legend, and it might as well be you. A hilarious sports tee from Crazy Dog T-Shirts.",
    image: "",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0B1N8N42X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "125",
    asin: "B0FQP565CT",
    title: "Funny Golf Hawaiian Pickleball Polo – Print Shirt",
    description:
      "A bold Hawaiian-print pickleball polo that brings tropical vibes to the court. Quick-dry fabric meets vacation-mode styling.",
    image: "",
    tags: ["men's", "polo", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FQP565CT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "126",
    asin: "B0GDZLQ9MW",
    title: "Funny Golf Polo – Pickleball Print Performance",
    description:
      "A performance polo with fun pickleball graphics. Moisture-wicking fabric for serious play, funny design for serious fun.",
    image: "",
    tags: ["men's", "polo", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GDZLQ9MW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "127",
    asin: "B0DYJBH4T9",
    title: "RMTXCD Women Pickleball Tank Top – Summer Sport",
    description:
      "A summer sport tank from RMTXCD for the active pickleball player. Cute vest design with a casual sleeveless cut.",
    image: "",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYJBH4T9?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "128",
    asin: "B0F1F1SQ4K",
    title: "Pickleball It's A Good Day – Sleeveless Retirement Tee",
    description:
      "A sleeveless retirement sport graphic tee. Every day is a good day to play pickleball when you're retired.",
    image: "",
    tags: ["women's", "tank top", "retirement"],
    affiliateUrl: `https://www.amazon.com/dp/B0F1F1SQ4K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "129",
    asin: "B0CYH51Q9S",
    title: "LHBNK Pickleball Tank Tops – Graphic Summer Gifts",
    description:
      "A graphic summer pickleball tank from LHBNK. A perfect sleeveless gift for pickleball lovers who like to stay cool.",
    image: "",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0CYH51Q9S?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "130",
    asin: "B0GCC12Q6Z",
    title: "Pickleball Tank Tops – Got It Oops Yours Summer",
    description:
      "The 'Got It Oops Yours' classic on a summer workout tank. Sleeveless graphic design for warm-weather pickleball.",
    image: "",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GCC12Q6Z?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "131",
    asin: "B0CYH635TG",
    title: "LHBNK Pickleball Tank – Summer Sleeveless Lover Gifts",
    description:
      "Another sleeveless summer tank from LHBNK. A graphic pickleball lover gift that keeps you cool while your game stays hot.",
    image: "",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0CYH635TG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "132",
    asin: "B0GC4TNDSB",
    title: "Got It Oops Yours – Women's Summer Workout Tank",
    description:
      "A summer workout graphic tank with the iconic pickleball callout. Perfect for outdoor games and gym sessions.",
    image: "",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GC4TNDSB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "133",
    asin: "B0CWLDY4HV",
    title: "Pickleball Heartbeat – It's A Good Day Tank Top",
    description:
      "Heartbeat meets 'Good Day to Play' in this graphic tank top. Double the pickleball enthusiasm in one sleeveless design.",
    image: "",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CWLDY4HV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "134",
    asin: "B0GLX1S19K",
    title: "RXGOY Pickleball Improves Memory – Funny Tank Top",
    description:
      "Playing pickleball improves memory — it was in! A funny tank top from RXGOY about the game's most common memory recovery technique.",
    image: "",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0GLX1S19K?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "135",
    asin: "B0DWMFF474",
    title: "Heart Graphic Pickleball Tank – Women's Summer",
    description:
      "A heart graphic pickleball tank for the summer. Sleeveless design with a fun baseball-style graphic that shows your love for the game.",
    image: "",
    tags: ["women's", "tank top", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DWMFF474?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "136",
    asin: "B0CXY57NPZ",
    title: "It's a Good Day – Pickleball Letter Print Tank Top",
    description:
      "A fun letter-print tank top that declares every day a good day for pickleball. Casual fit for summer sports.",
    image: "",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CXY57NPZ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "137",
    asin: "B0D5Q2JBTN",
    title: "LIWYLU Pickleball Tank Tops – Graphic Player Gifts",
    description:
      "A graphic player gift tank from LIWYLU. Sleeveless design with pickleball lover graphics for the summer season.",
    image: "",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5Q2JBTN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "138",
    asin: "B0D5PZ1R1N",
    title: "LIWYLU Pickleball Tank Top – Player Gift Dark",
    description:
      "A dark-colored pickleball tank from LIWYLU. Casual sports tee with sleeveless design perfect for active play.",
    image: "",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5PZ1R1N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "139",
    asin: "B0FCC1X64W",
    title: "SAUIVD Playing Pickleball Improves Memory – Tank",
    description:
      "A funny tank about how playing pickleball improves memory. Casual loose sleeveless design that's perfect for summer court sessions.",
    image: "",
    tags: ["women's", "tank top", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FCC1X64W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "140",
    asin: "B0C5P1XTVT",
    title: "Pickle Baller – Paddles and Ball Flowy Tank Top",
    description:
      "A flowy tank top with paddles-and-ball graphic from the Pickle Baller collection. Ladies fit for the casual sport enthusiast.",
    image: "",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C5P1XTVT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "141",
    asin: "B0CCNBXZ7H",
    title: "Pickleball Graphic T-Shirt – Was That Out Letter Print",
    description:
      "The iconic 'Was That Out?' debate captured on a women's graphic tee. Short sleeve summer style for the pickleball player.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CCNBXZ7H?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "142",
    asin: "B0CCNDTSJD",
    title: "Was That Out – Women's Pickleball Summer Graphic Tee",
    description:
      "Another variation of the beloved 'Was That Out?' graphic. Summer-ready short sleeve tee for the woman who lives for line calls.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CCNDTSJD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "143",
    asin: "B0G457L52Q",
    title: "It Was In – Retro Style Pickleball T-Shirt",
    description:
      "Settle the debate once and for all — it was IN. A retro-style pickleball tee with a classic cotton-blend design.",
    image: "",
    tags: ["unisex", "funny", "vintage"],
    affiliateUrl: `https://www.amazon.com/dp/B0G457L52Q?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "144",
    asin: "B0C8HVDB3J",
    title: "Was That Out – Women's Pickleball Letter Print Tee",
    description:
      "The eternal pickleball question on a comfortable letter-print tee. A short sleeve summer top for the woman always making line calls.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0C8HVDB3J?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "145",
    asin: "B0CJKW3MH3",
    title: "Vintage Pickleballs – Retro Enthusiast Sporty Tee",
    description:
      "A retro-styled vintage pickleball tee for the enthusiast. Classic sporty design that looks like it came straight from the golden age of pickleball.",
    image: "",
    tags: ["unisex", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CJKW3MH3?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "146",
    asin: "B0FQP6NK9N",
    title: "HUURAY Funny Golf Polo – Pickleball Hawaiian Shirt",
    description:
      "A funny Hawaiian-style golf polo with pickleball graphics from HUURAY. Quick-dry moisture wicking meets vacation vibes.",
    image: "",
    tags: ["men's", "polo", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0FQP6NK9N?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "147",
    asin: "B0D5M2PSRQ",
    title: "SUWATOIN Women Pickleball Player T-Shirt – Gift",
    description:
      "A pickleball player tee designed as the perfect gift. Comfortable, casual, and always appreciated by the pickleball lover in your life.",
    image: "",
    tags: ["women's", "gift", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5M2PSRQ?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "148",
    asin: "B0D4CB96DM",
    title: "It's A Good Day – Vintage Pickleball Graphic Tee",
    description:
      "A vintage-style graphic tee declaring every day a good day for pickleball. Retro sports lover design on a comfortable cotton blend.",
    image: "",
    tags: ["women's", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4CB96DM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "149",
    asin: "B0DSDN98QM",
    title: "Pickleball Oversized Graphic T-Shirt – Team Baseball",
    description:
      "An oversized team-style graphic tee with baseball-fan flair and pickleball at its heart. Bold design for the bold player.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSDN98QM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "150",
    asin: "B0D4CCY24Q",
    title: "Pickleball Vintage Graphic Tee – Sports Lover",
    description:
      "A vintage-inspired pickleball graphic tee that captures the retro spirit of the sport. Comfortable and stylish for any occasion.",
    image: "",
    tags: ["women's", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4CCY24Q?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "151",
    asin: "B0FCYT79V6",
    title: "LuxLass Pickleball Front & Back Tee – Women's",
    description:
      "Front and back printing from LuxLass for maximum pickleball statement. A paddleball-themed tee that catches eyes coming and going.",
    image: "",
    tags: ["women's", "graphic", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FCYT79V6?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "152",
    asin: "B0D5Y4YSZS",
    title: "LBP Pickleball Shirt Women – Casual Pickle Ball Tee",
    description:
      "A casual pickle ball tee from LBP that makes a thoughtful gift. Simple design, comfortable fit, and all about the love of pickleball.",
    image: "",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5Y4YSZS?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "153",
    asin: "B0DJYYRCQH",
    title: "Funny Pickleball Queen – Women's Retro Vintage Shirt",
    description:
      "Crown yourself the Pickleball Queen with this retro vintage shirt. A funny paddle-themed tee from TeesMind for the court's royalty.",
    image: "",
    tags: ["women's", "funny", "vintage"],
    affiliateUrl: `https://www.amazon.com/dp/B0DJYYRCQH?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "154",
    asin: "B0CJKPKZDB",
    title: "Vintage Pickleballs Player – Distressed Illustration",
    description:
      "A distressed vintage illustration tee celebrating the pickleball player. Retro styling with a humorous sporty vibe.",
    image: "",
    tags: ["unisex", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0CJKPKZDB?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "155",
    asin: "B0FFGC1FFM",
    title: "Pickleball Fever – Retro Garment-Dyed T-Shirt",
    description:
      "Catch pickleball fever with this retro garment-dyed tee. Unisex fit with a vintage wash finish that looks better with every wear.",
    image: "",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FFGC1FFM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "156",
    asin: "B0FFG689PN",
    title: "Pickleball Fever (Back) – Retro Garment-Dyed Tee",
    description:
      "The back-print version of the Pickleball Fever tee. Retro style garment-dyed shirt for the player who leads from behind.",
    image: "",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FFG689PN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "157",
    asin: "B0C4XHS5NL",
    title: "Life is Good – Keep It Simple Pickleball Crusher (XXL)",
    description:
      "Keep it simple — play pickleball. The iconic Life is Good Crusher Tee in a larger size for the big player with a bigger love for the game.",
    image: "",
    tags: ["men's", "premium", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C4XHS5NL?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "158",
    asin: "B0F2ZNCPLN",
    title: "Pickleball USA Athletic Club – Collegiate Style Tee",
    description:
      "Join the Pickleball USA Athletic Club with this collegiate-style vintage wash tee in pink, yellow, and green. Retro sports apparel at its finest.",
    image: "",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZNCPLN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "159",
    asin: "B0F2ZM7899",
    title: "Pickleball USA Athletic Club – Vintage Wash Tee",
    description:
      "Another colorway of the Pickleball USA Athletic Club tee. Collegiate style with a vintage wash finish that stands out.",
    image: "",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZM7899?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "160",
    asin: "B0F2ZN4D1R",
    title: "Pickleball USA Athletic Club – Retro Sports Tee",
    description:
      "Retro sports apparel meets pickleball pride. This collegiate-style tee looks like a vintage find from pickleball's early days.",
    image: "",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZN4D1R?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "161",
    asin: "B0B1N6JYYF",
    title: "Mens Funny Pickleball Legend – Sarcastic Sports Tee",
    description:
      "A sarcastic sports tee declaring pickleball legend status. From Crazy Dog T-Shirts for the player who writes their own mythology.",
    image: "",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0B1N6JYYF?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "162",
    asin: "B0F2ZM2HL5",
    title: "Pickleball USA Athletic Club – Pink Vintage Tee",
    description:
      "The pink colorway of the Pickleball USA Athletic Club tee. Vintage wash finish in a standout collegiate design.",
    image: "",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZM2HL5?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "163",
    asin: "B0F2ZM9FSG",
    title: "Pickleball USA Athletic Club – Yellow Vintage Tee",
    description:
      "The yellow colorway of the Pickleball USA Athletic Club collection. Bright, bold, and perfect for the optimistic pickleball player.",
    image: "",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZM9FSG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "164",
    asin: "B0F2ZNDPW7",
    title: "Pickleball USA Athletic Club – Green Vintage Tee",
    description:
      "The green colorway rounding out the Pickleball USA Athletic Club collection. Collegiate vintage style for the dedicated player.",
    image: "",
    tags: ["unisex", "vintage", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0F2ZNDPW7?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "165",
    asin: "B0C61V67SC",
    title: "Pickleball Heartbeat Graphic – Women's Short Sleeve",
    description:
      "A heartbeat graphic pickleball tee showing your love runs deep. Short sleeve women's fit with a fun EKG-style design.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C61V67SC?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "166",
    asin: "B0FJR36X2X",
    title: "LuxLass Pickleball Front & Back Print – Women's Tee",
    description:
      "Double the pickleball pride with front and back prints from LuxLass. A women's tee that makes a statement from every angle.",
    image: "",
    tags: ["women's", "graphic", "premium"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJR36X2X?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "167",
    asin: "B0DZCPNVP1",
    title: "Stay Out of The Kitchen – Pickleball Printed Tee",
    description:
      "The kitchen rule, now on a printed tee. A funny pickleball player lover top that reminds everyone of the non-volley zone.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZCPNVP1?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "168",
    asin: "B0D6YQBW55",
    title: "Stay Out Kitchen – Women's Pickleball Printed Shirt",
    description:
      "Another take on the classic 'Stay Out of the Kitchen' pickleball tee. Funny, relatable, and always in style on the court.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YQBW55?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "169",
    asin: "B0DSHJQR99",
    title: "Pickleball Team Graphic T-Shirt – Oversized Baseball",
    description:
      "An oversized baseball-style graphic tee for the pickleball team. Bold design with a relaxed fit that's perfect for game day.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSHJQR99?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "170",
    asin: "B0D4CM2BJK",
    title: "Pickleball Vintage Graphic – Sports Lover Tee",
    description:
      "A vintage sports lover graphic tee celebrating the joy of pickleball. Retro design on a comfortable modern fit.",
    image: "",
    tags: ["women's", "vintage", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D4CM2BJK?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "171",
    asin: "B0GHYG8ZLG",
    title: "IFQ Heartbeat Pickleball – Women's Sport Lover Tee",
    description:
      "Show your heartbeat runs on pickleball with this sport lover tee from IFQ. A fun heartbeat graphic for the dedicated player.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GHYG8ZLG?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "172",
    asin: "B0C41T5M66",
    title: "ChalkTalkSPORTS Pickleball Polo – Sport Performance",
    description:
      "A sport performance polo from ChalkTalkSPORTS in adult sizes. Premium construction for competitive pickleball play.",
    image: "",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0C41T5M66?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "173",
    asin: "B0DZW5JTMT",
    title: "TIEEI Pickleball Shirts – Men's Paddleball Styled Tee",
    description:
      "A paddleball-styled graphic tee from TIEEI for the men's market. Casual fit with a player-themed design.",
    image: "",
    tags: ["men's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZW5JTMT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "174",
    asin: "B0DYK7Z9MT",
    title: "Qskall American Flag Pickleball – 4th of July Tee",
    description:
      "Red, white, blue, and pickleball. A 4th of July patriotic tee from Qskall for the player who loves their country and their court.",
    image: "",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYK7Z9MT?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "175",
    asin: "B0D8KXQBJ4",
    title: "AYUNIX Pickleball Polo – Performance Wicking Golf",
    description:
      "A performance wicking polo from AYUNIX designed for pickleball and golf. Versatile enough for the court and the clubhouse.",
    image: "",
    tags: ["men's", "polo", "performance"],
    affiliateUrl: `https://www.amazon.com/dp/B0D8KXQBJ4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "176",
    asin: "B0DVBFWQP4",
    title: "TeeUnion Funny Pickleball – Hilarious Sports Shirt",
    description:
      "Yet another hilarious hit from TeeUnion. This funny pickleball shirt keeps the humor coming with a fresh sports graphic design.",
    image: "",
    tags: ["unisex", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DVBFWQP4?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "177",
    asin: "B0D5M1649J",
    title: "SUWATOIN Women Pickleball Player – Lover Gift Tee",
    description:
      "A women's pickleball player gift tee from SUWATOIN. Comfortable, cute, and perfect for expressing your love of the game.",
    image: "",
    tags: ["women's", "gift", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5M1649J?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "178",
    asin: "B0FJFBNVXN",
    title: "LBP Pickleball Shirt Women – Casual Gift Tee",
    description:
      "A casual gift tee from LBP for the pickleball-loving woman. Simple pickle ball design that works for any occasion.",
    image: "",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJFBNVXN?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "179",
    asin: "B0B1N6GR2Y",
    title: "Mens Funny Pickleball Legend – Sarcastic Graphic",
    description:
      "The pickleball legend sarcastic tee in another colorway. From Crazy Dog T-Shirts for the player who collects funny tees.",
    image: "",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0B1N6GR2Y?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "180",
    asin: "B0FHPDYK8G",
    title: "SUWATOIN Women Pickleball Player – Purple Gift Tee",
    description:
      "A purple colorway of the beloved SUWATOIN pickleball player tee. A standout gift for the woman who plays in style.",
    image: "",
    tags: ["women's", "gift", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0FHPDYK8G?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "181",
    asin: "B0DSDQMT9Z",
    title: "Pickleball Oversized Team T-Shirt – Fan Graphic",
    description:
      "An oversized fan graphic tee for the pickleball team supporter. Relaxed fit and bold design for game day.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0DSDQMT9Z?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "182",
    asin: "B0F1861ZBV",
    title: "LHBNK Pickleball Tank – Sleeveless Summer Gifts",
    description:
      "A sleeveless summer pickleball tank from LHBNK. A graphic pickleball lover gift to keep cool during hot court sessions.",
    image: "",
    tags: ["women's", "tank top", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0F1861ZBV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "183",
    asin: "B0D5Y545DM",
    title: "LBP Pickleball Women's Shirt – Pickle Ball Casual",
    description:
      "A casual pickle ball tee from LBP in a fresh design. Comfortable everyday wear for the devoted pickleball player.",
    image: "",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0D5Y545DM?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "184",
    asin: "B0DZCN2F2R",
    title: "TUPOSU Pickleball Shirt – Player Lover Women's",
    description:
      "A pickleball player lover tee from TUPOSU. Graphic design that celebrates the sport with style and comfort.",
    image: "",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0DZCN2F2R?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "185",
    asin: "B0F12JPVJX",
    title: "Pickleball Shirts Funny Ball – Novelty Sports Graphic",
    description:
      "A novelty sports graphic tee about the funny ball that started it all. Retirement-ready pickleball humor.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0F12JPVJX?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "186",
    asin: "B0DYKCSF9D",
    title: "Qskall Pickleball American Flag – Paddleball Tee",
    description:
      "A patriotic paddleball tee combining the American flag with pickleball. From Qskall for the player who represents on and off the court.",
    image: "",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYKCSF9D?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "187",
    asin: "B0D62QD6GY",
    title: "I Can't I Have Pickleball – Women's Paddleball Tee",
    description:
      "The ultimate scheduling conflict excuse on a tee. 'I can't, I have pickleball' — because the court waits for no one.",
    image: "",
    tags: ["women's", "funny"],
    affiliateUrl: `https://www.amazon.com/dp/B0D62QD6GY?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "188",
    asin: "B0C1M1F8TW",
    title: "Women's Pickleball Graphic T-Shirt – Player Gift Top",
    description:
      "A graphic player gift top for women. Short sleeve comfort meets pickleball pride in this versatile everyday tee.",
    image: "",
    tags: ["women's", "graphic", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0C1M1F8TW?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "189",
    asin: "B0GJ9TRRDR",
    title: "Cutesong Pickleball Player T-Shirt – Sport Lover",
    description:
      "A sport lover tee from Cutesong for the dedicated pickleball player. Funny and cute design in a comfortable short sleeve fit.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GJ9TRRDR?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "190",
    asin: "B0GJSN3W8W",
    title: "TIEEI Peace Love Pickleball – Women's Sport Tee",
    description:
      "Peace, love, and pickleball on a women's sport tee from TIEEI. Because these three things make the world a better place.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0GJSN3W8W?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "191",
    asin: "B0D6YMMLDD",
    title: "Stay Out Kitchen – Women's Printed Pickleball Shirt",
    description:
      "The kitchen rule on a fun printed tee for women. A pickleball player lover top that's always in season.",
    image: "",
    tags: ["women's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0D6YMMLDD?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "192",
    asin: "B0CSK85K3M",
    title: "COLORFUL BLING Women's Pickleball – Blue Crew Neck",
    description:
      "A blue crew neck pickleball tee from COLORFUL BLING. Stretchable cotton blend comfort with a standout pickleball graphic.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0CSK85K3M?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "193",
    asin: "B0C9PDRH27",
    title: "RMTXCD Women Pickleball Tank – Casual Sleeveless",
    description:
      "A casual sleeveless pickleball tank from RMTXCD. Cute vest design for summer sport and casual outings.",
    image: "",
    tags: ["women's", "tank top", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C9PDRH27?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "194",
    asin: "B0DYK8M621",
    title: "Qskall American Flag Pickleball – Sporty Patriotic",
    description:
      "A sporty patriotic pickleball tee with American flag graphics. Perfect for holiday tournaments and patriotic player celebrations.",
    image: "",
    tags: ["men's", "patriotic", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0DYK8M621?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "195",
    asin: "B0FP325XWV",
    title: "Pickleball Women Tshirts Team – Lover Gift Tee",
    description:
      "A pickleball team lover tee for women. Short sleeve gift that celebrates the player and the sport they love.",
    image: "",
    tags: ["women's", "casual", "gift"],
    affiliateUrl: `https://www.amazon.com/dp/B0FP325XWV?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "196",
    asin: "B0C61VL6MS",
    title: "Pickleball Heartbeat Graphic – Women's Short Sleeve",
    description:
      "A heartbeat graphic pickleball shirt for women in a fresh colorway. Show your pulse races for the game.",
    image: "",
    tags: ["women's", "graphic", "casual"],
    affiliateUrl: `https://www.amazon.com/dp/B0C61VL6MS?tag=${AFFILIATE_TAG}`,
  },
  {
    id: "197",
    asin: "B0FJDT9GQF",
    title: "Mens Funny Pickleball – Its Always A Good Time Tee",
    description:
      "It's always a good time for pickleball, and this sarcastic graphic novelty tee from Crazy Dog proves it. A humor-packed staple.",
    image: "",
    tags: ["men's", "funny", "graphic"],
    affiliateUrl: `https://www.amazon.com/dp/B0FJDT9GQF?tag=${AFFILIATE_TAG}`,
  },
];

export default shirts;
