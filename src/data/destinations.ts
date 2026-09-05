export interface Destination {
  id: string
  name: string
  area: string
  category: string
  description: string
  googleMapsUrl: string
  images: string[]
  tags: string[]
  entranceFee: number | "free"
  openingHours: string
  bestTimeToVisit: string
  active: boolean
}

export const destinations: Destination[] = [
  {
    id: "bali-uluwatu-temple",
    name: "Uluwatu Temple",
    area: "pecatu",
    category: "temple",
    description:
      "A spectacular Balinese sea temple perched on a dramatic cliff overlooking the Indian Ocean, famous for its sunset views and Kecak dance performances.",
    googleMapsUrl: "https://maps.google.com/?q=Uluwatu+Temple+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bali_Uluwatu_Temple.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Luhur_Uluwatu_Temple,_Bali,_20220826_0953_1016.jpg",
    ],
    tags: ["culture", "sunset", "photography", "popular"],
    entranceFee: 50000,
    openingHours: "07:00 - 19:00",
    bestTimeToVisit: "Late afternoon for sunset",
    active: true,
  },
  {
    id: "bali-kuta-beach",
    name: "Kuta Beach",
    area: "kuta",
    category: "beach",
    description:
      "One of Bali's most famous beaches, known for its long sandy shoreline, surfing, and beautiful sunsets.",
    googleMapsUrl: "https://maps.google.com/?q=Kuta+Beach+Bali",
    images: [
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/42000/42223-Kuta-Beach.jpg",
    ],
    tags: ["beach", "surfing", "sunset", "popular"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Late afternoon",
    active: true,
  },
  {
    id: "bali-tegalalang-rice-terrace",
    name: "Tegallalang Rice Terrace",
    area: "ubud",
    category: "rice-terrace",
    description:
      "A scenic rice terrace landscape north of Ubud featuring lush green fields and traditional Balinese irrigation systems.",
    googleMapsUrl: "https://maps.google.com/?q=Tegallalang+Rice+Terrace+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tegallalang_Rice_Terraces_Bali.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rice_terraces_in_Tagallalang.jpg",
    ],
    tags: ["nature", "photography", "culture", "popular"],
    entranceFee: 25000,
    openingHours: "07:00 - 18:00",
    bestTimeToVisit: "Early morning",
    active: true,
  },
  {
    id: "bali-tirta-empul",
    name: "Tirta Empul Temple",
    area: "ubud",
    category: "temple",
    description:
      "A sacred Hindu water temple famous for its holy spring water and traditional purification rituals.",
    googleMapsUrl: "https://maps.google.com/?q=Tirta+Empul+Temple+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tirta_Empul.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pura_Tirta_Empul,_Bali.JPG",
    ],
    tags: ["culture", "temple", "spiritual", "history"],
    entranceFee: 50000,
    openingHours: "08:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "bali-sekumpul-waterfall",
    name: "Sekumpul Waterfall",
    area: "singaraja",
    category: "waterfall",
    description:
      "A collection of dramatic waterfalls surrounded by dense tropical forest, considered one of Bali's most impressive natural attractions.",
    googleMapsUrl: "https://maps.google.com/?q=Sekumpul+Waterfall+Bali",
    images: [
      "https://www.baligoldentour.com/images/bali-tours-packages/sekumpul-waterfall.jpg",
    ],
    tags: ["nature", "adventure", "waterfall", "photography"],
    entranceFee: 20000,
    openingHours: "07:00 - 17:00",
    bestTimeToVisit: "Morning during the dry season",
    active: true,
  },
  {
    id: "bali-nusa-dua-beach",
    name: "Nusa Dua Beach",
    area: "nusa-dua",
    category: "beach",
    description:
      "A clean and calm beach area known for clear turquoise water, soft sand, and a relaxed atmosphere.",
    googleMapsUrl: "https://maps.google.com/?q=Nusa+Dua+Beach+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/NusaDuaBeachBali.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/NusaDuaBeachBali1.jpg",
    ],
    tags: ["beach", "family", "relaxation", "photography"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "bali-mount-batur",
    name: "Mount Batur",
    area: "kintamani",
    category: "mountain",
    description:
      "An active volcano and popular hiking destination offering spectacular sunrise views over Lake Batur.",
    googleMapsUrl: "https://maps.google.com/?q=Mount+Batur+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Batur_Bali.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Batur_Bali_1.jpg",
    ],
    tags: ["adventure", "nature", "hiking", "sunrise"],
    entranceFee: 100000,
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Early morning for sunrise",
    active: true,
  },
  {
    id: "bali-ulun-danu-beratan",
    name: "Ulun Danu Beratan Temple",
    area: "bedugul",
    category: "temple",
    description:
      "A beautiful temple complex located on the shores of Lake Beratan, surrounded by cool mountain scenery.",
    googleMapsUrl: "https://maps.google.com/?q=Ulun+Danu+Beratan+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ulun_Danu_Beratan_Temple.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ulun_Danu_Beratan,_Bali_(2).jpg",
    ],
    tags: ["temple", "culture", "nature", "photography", "popular"],
    entranceFee: 75000,
    openingHours: "07:00 - 19:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "bali-tanah-lot",
    name: "Tanah Lot",
    area: "West Bali",
    category: "temple",
    description:
      "An iconic Balinese temple built on an offshore rock formation, particularly famous for dramatic ocean views and sunsets.",
    googleMapsUrl: "https://maps.google.com/?q=Tanah+Lot+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tanah_lot,_Bali.jpg",
    ],
    tags: ["temple", "sunset", "culture", "photography", "popular"],
    entranceFee: 75000,
    openingHours: "07:00 - 19:00",
    bestTimeToVisit: "Late afternoon",
    active: true,
  },
  {
    id: "bali-campuhan-ridge-walk",
    name: "Campuhan Ridge Walk",
    area: "ubud",
    category: "viewpoint",
    description:
      "A peaceful walking trail through rolling green hills and tropical vegetation in the heart of Ubud.",
    googleMapsUrl: "https://maps.google.com/?q=Campuhan+Ridge+Walk+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Campuhan_Ridge_Walk,_Ubud,_Bali_(15003876518).jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Campuhan_Ridge_Walk,_Ubud,_Bali_(15003876558).jpg",
    ],
    tags: ["nature", "hiking", "photography", "relaxation"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Early morning",
    active: true,
  },
  {
    id: "bali-goa-gajah",
    name: "Goa Gajah",
    area: "ubud",
    category: "historical-site",
    description:
      "An ancient archaeological site featuring a distinctive cave entrance, stone carvings, bathing pools, and temple grounds.",
    googleMapsUrl: "https://maps.google.com/?q=Goa+Gajah+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Goa_Gajah,_Hindu_temple_Ubud_Bali_Indonesia.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bali_-_Goa_Gajah_(2022)_-_img_01.jpg",
    ],
    tags: ["history", "culture", "temple", "photography"],
    entranceFee: 30000,
    openingHours: "08:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "bali-diamond-beach",
    name: "Diamond Beach",
    area: "nusa-penida",
    category: "beach",
    description:
      "A breathtaking white-sand beach on Nusa Penida surrounded by towering cliffs and turquoise water.",
    googleMapsUrl: "https://maps.google.com/?q=Diamond+Beach+Nusa+Penida",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Diamond_Beach_Nusa_Penida.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Diamond_Beach_in_Nusa_Penida,_Bali.jpg",
    ],
    tags: ["beach", "nature", "adventure", "photography", "popular"],
    entranceFee: 25000,
    openingHours: "06:00 - 18:00",
    bestTimeToVisit: "Early morning",
    active: true,
  },
  {
    id: "bali-kelingking-beach",
    name: "Kelingking Beach",
    area: "nusa-penida",
    category: "viewpoint",
    description:
      "A world-famous viewpoint overlooking a dramatic T-Rex-shaped cliff and turquoise ocean.",
    googleMapsUrl: "https://maps.google.com/?q=Kelingking+Beach+Nusa+Penida",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kelingking_Beach.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_Kelingking,_Nusa_Penida.jpg",
    ],
    tags: ["beach", "viewpoint", "nature", "photography", "popular"],
    entranceFee: 10000,
    openingHours: "06:00 - 18:00",
    bestTimeToVisit: "Early morning",
    active: true,
  },
  {
    id: "bali-sanur-beach",
    name: "Sanur Beach",
    area: "sanur",
    category: "beach",
    description:
      "A relaxed coastal destination known for calm waters, colorful sunrises, beachfront paths, and a laid-back atmosphere.",
    googleMapsUrl: "https://maps.google.com/?q=Sanur+Beach+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sanur_Beach,_Bali.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sanur_Beach.JPG",
    ],
    tags: ["beach", "sunrise", "family", "cycling", "relaxation"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Early morning for sunrise",
    active: true,
  },
  {
    id: "bali-besakih-temple",
    name: "Besakih Temple",
    area: "East Bali",
    category: "temple",
    description:
      "Known as Bali's Mother Temple, this extensive temple complex sits on the slopes of Mount Agung.",
    googleMapsUrl: "https://maps.google.com/?q=Besakih+Temple+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Besakih_Temple_Bali.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Besakih_Temple_Bali_Indonesia.jpg",
    ],
    tags: ["temple", "culture", "history", "mountains"],
    entranceFee: 90000,
    openingHours: "08:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "bali-jatiluwih-rice-terrace",
    name: "Jatiluwih Rice Terraces",
    area: "West Bali",
    category: "rice-terrace",
    description:
      "A vast cultural landscape featuring traditional Balinese rice terraces stretching across the foothills of the mountains.",
    googleMapsUrl: "https://maps.google.com/?q=Jatiluwih+Rice+Terraces+Bali",
    images: ["https://commons.wikimedia.org/wiki/Special:FilePath/Jatiluwih.jpg"],
    tags: ["nature", "culture", "photography", "hiking", "unesco"],
    entranceFee: 50000,
    openingHours: "08:00 - 18:00",
    bestTimeToVisit: "Morning or late afternoon",
    active: true,
  },
  {
    id: "bali-goa-lawah",
    name: "Goa Lawah Temple",
    area: "East Bali",
    category: "temple",
    description:
      "An ancient seaside temple built around a cave believed to be home to thousands of bats.",
    googleMapsUrl: "https://maps.google.com/?q=Goa+Lawah+Temple+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Goa_Lawah,_Bali_(16153374937).jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Goa_Lawah,_Bali_(16304746350).jpg",
    ],
    tags: ["temple", "culture", "history", "nature"],
    entranceFee: 30000,
    openingHours: "08:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "bali-melasti-beach",
    name: "Melasti Beach",
    area: "pecatu",
    category: "beach",
    description:
      "A beautiful beach beneath towering limestone cliffs, known for its clear water, white sand, and dramatic scenery.",
    googleMapsUrl: "https://maps.google.com/?q=Melasti+Beach+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Melasti_Beach.jpg",
    ],
    tags: ["beach", "sunset", "photography", "cliffs"],
    entranceFee: 10000,
    openingHours: "07:00 - 19:00",
    bestTimeToVisit: "Late afternoon",
    active: true,
  },

  {
    id: "lovina-beach",
    name: "Lovina Beach",
    area: "singaraja",
    category: "beach",
    description:
      "A peaceful black-sand beach on Bali's northern coast, famous for calm waters, traditional fishing boats, and early-morning dolphin watching.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lovina+Beach+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lovina_Beach_Bali.jpg",
    ],
    tags: ["beach", "sunrise", "wildlife", "relaxation"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Early morning",
    active: true,
  },
  {
    id: "gitgit-waterfall",
    name: "Gitgit Waterfall",
    area: "singaraja",
    category: "waterfall",
    description:
      "A scenic waterfall surrounded by lush tropical forest in northern Bali, with a cool atmosphere and several walking trails.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gitgit+Waterfall+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gitgit_waterfall_200507-1.jpg",
    ],
    tags: ["waterfall", "nature", "hiking", "photography"],
    entranceFee: 20000,
    openingHours: "07:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "sambangan-waterfalls",
    name: "Sambangan Waterfalls",
    area: "singaraja",
    category: "waterfall",
    description:
      "A collection of waterfalls and natural pools hidden within the lush jungle of northern Bali, popular for adventure and canyoning.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sambangan+Waterfalls+Bali",
    // No Commons photo is filed under "Sambangan" specifically — this is a
    // nearby Buleleng jungle waterfall used as a stand-in.
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Air_Terjun_Sekumpul.jpg",
    ],
    tags: ["waterfall", "nature", "adventure", "hiking", "hidden-gem"],
    entranceFee: 20000,
    openingHours: "07:00 - 17:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "lake-beratan",
    name: "Lake Beratan",
    area: "bedugul",
    category: "lake",
    description:
      "A serene volcanic lake surrounded by mountains and forest, forming the scenic centerpiece of Bali's Bedugul highlands.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake+Beratan+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_Bratan,_Bali.jpg",
    ],
    tags: ["nature", "mountains", "photography", "relaxation"],
    entranceFee: 30000,
    openingHours: "07:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "bali-botanic-garden",
    name: "Bali Botanic Garden",
    area: "bedugul",
    category: "botanical-garden",
    description:
      "A large highland botanical garden featuring tropical plants, mountain landscapes, forest trails, and peaceful picnic areas.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bali+Botanic+Garden+Bedugul",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/DJI_0128_Bali_Botanic_Garden.jpg",
    ],
    tags: ["nature", "family", "photography", "hiking", "relaxation"],
    entranceFee: 30000,
    openingHours: "08:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "lake-batur",
    name: "Lake Batur",
    area: "kintamani",
    category: "lake",
    description:
      "A crescent-shaped volcanic lake beneath Mount Batur, offering dramatic mountain scenery and a peaceful escape from Bali's busier tourist areas.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake+Batur+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_Batur,_Bali,_Indonesia_SF0001.jpg",
    ],
    tags: ["nature", "mountains", "photography", "relaxation"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "kintamani-viewpoint",
    name: "Kintamani Viewpoint",
    area: "kintamani",
    category: "viewpoint",
    description:
      "A panoramic highland viewpoint overlooking Mount Batur and Lake Batur, popular for scenic views and sunrise photography.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kintamani+Viewpoint+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gunung_Batur_Kintamani.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gunung_Batur_Kintamani_Bali.jpg",
    ],
    tags: ["viewpoint", "mountains", "photography", "sunrise"],
    entranceFee: 50000,
    openingHours: "06:00 - 18:00",
    bestTimeToVisit: "Early morning",
    active: true,
  },
  {
    id: "ubud-rice-fields",
    name: "Ubud Rice Fields",
    area: "ubud",
    category: "rice-terrace",
    description:
      "Traditional rice fields surrounding Ubud that showcase Bali's rural landscapes, farming traditions, and lush tropical scenery.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ubud+Rice+Fields+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ubud_Rice_Fields.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rice_terraced_fields_in_Ubud.JPG",
    ],
    tags: ["rice-terrace", "nature", "culture", "photography", "relaxation"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Morning or late afternoon",
    active: true,
  },
  {
    id: "waterbom-bali",
    name: "Waterbom Bali",
    area: "kuta",
    category: "water-park",
    description:
      "A large tropical water park in Kuta featuring slides, pools, gardens, and family-friendly attractions.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Waterbom+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cabanas_At_Waterbom_Amusement_Park,_Kuta_Bali.JPG",
    ],
    tags: ["family", "adventure", "popular"],
    entranceFee: 600000,
    openingHours: "09:00 - 18:00",
    bestTimeToVisit: "Weekday mornings",
    active: true,
  },
  {
    id: "kuta-art-market",
    name: "Kuta Art Market",
    area: "kuta",
    category: "market",
    description:
      "A traditional-style tourist market near Kuta Beach offering souvenirs, clothing, handicrafts, and local artwork.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kuta+Art+Market+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kuta_Square_-_panoramio.jpg",
    ],
    tags: ["culture", "shopping", "photography"],
    entranceFee: "free",
    openingHours: "08:00 - 22:00",
    bestTimeToVisit: "Late afternoon",
    active: true,
  },
  {
    id: "sanur-beach-walk",
    name: "Sanur Beach Walk",
    area: "sanur",
    category: "walking-trail",
    description:
      "A scenic beachfront pathway stretching along Sanur's coastline, ideal for walking, cycling, and enjoying the sunrise.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sanur+Beach+Walk+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sanur_Beach_Bali.jpg",
    ],
    tags: ["beach", "sunrise", "cycling", "relaxation"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Early morning",
    active: true,
  },
  {
    id: "mertasari-beach",
    name: "Mertasari Beach",
    area: "sanur",
    category: "beach",
    description:
      "A quieter section of Sanur's coastline featuring calm shallow waters, sandy shores, and views toward the offshore islands.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mertasari+Beach+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sanur,_Bali_2017-08-19_(2).jpg",
    ],
    tags: ["beach", "sunrise", "family", "relaxation"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "jimbaran-beach",
    name: "Jimbaran Beach",
    area: "jimbaran",
    category: "beach",
    description:
      "A wide sandy bay famous for beachfront seafood restaurants, fishing boats, calm waters, and beautiful sunsets.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jimbaran+Beach+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jimabaran_beach.jpg",
    ],
    tags: ["beach", "sunset", "family", "relaxation", "photography"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Late afternoon",
    active: true,
  },
  {
    id: "jimbaran-fish-market",
    name: "Jimbaran Fish Market",
    area: "jimbaran",
    category: "market",
    description:
      "A lively traditional seafood market where visitors can experience Jimbaran's long-standing fishing culture and local seafood trade.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jimbaran+Fish+Market+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_Ikan_Tradisional_Kedonganan.jpg",
    ],
    tags: ["culture", "photography", "popular"],
    entranceFee: "free",
    openingHours: "06:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "padang-padang-beach",
    name: "Padang Padang Beach",
    area: "pecatu",
    category: "beach",
    description:
      "A picturesque beach tucked between limestone cliffs, famous for its turquoise water, surf breaks, and compact sandy cove.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Padang+Padang+Beach+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Padang_Padang_Beach_Bali.jpg",
    ],
    tags: ["beach", "surfing", "photography", "popular"],
    entranceFee: 15000,
    openingHours: "07:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "suluban-beach",
    name: "Suluban Beach",
    area: "pecatu",
    category: "beach",
    description:
      "A dramatic surf destination accessed through limestone cliffs, with caves, rock formations, and a popular surfing scene.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Suluban+Beach+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pantai_suluban_blue_point_bali.jpg",
    ],
    tags: ["beach", "surfing", "adventure", "photography"],
    entranceFee: 5000,
    openingHours: "06:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "water-blow-nusa-dua",
    name: "Water Blow",
    area: "nusa-dua",
    category: "natural-attraction",
    description:
      "A dramatic rocky coastal formation where waves crash through a narrow opening, producing spectacular bursts of seawater.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Water+Blow+Nusa+Dua+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water_Blow_Point,_Nusa_Dua,_Bali.jpg",
    ],
    tags: ["nature", "photography", "adventure", "popular"],
    entranceFee: 15000,
    openingHours: "09:00 - 18:00",
    bestTimeToVisit: "High tide",
    active: true,
  },
  {
    id: "pandawa-beach",
    name: "Pandawa Beach",
    area: "nusa-dua",
    category: "beach",
    description:
      "A scenic white-sand beach surrounded by towering limestone cliffs and known for its clear blue water.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Pandawa+Beach+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pandawa_Beach,_Nusa_Dua,_Bali,_Indonesia.jpg",
    ],
    tags: ["beach", "family", "photography", "popular"],
    entranceFee: 20000,
    openingHours: "07:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "broken-beach",
    name: "Broken Beach",
    area: "nusa-penida",
    category: "coastal-landmark",
    description:
      "A spectacular circular natural rock formation where the ocean flows through a collapsed cliff arch, creating a turquoise lagoon.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Broken+Beach+Nusa+Penida",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nusa_Penida_-_Bali.jpg",
    ],
    tags: ["nature", "photography", "adventure", "popular"],
    entranceFee: 5000,
    openingHours: "06:00 - 18:00",
    bestTimeToVisit: "Morning",
    active: true,
  },
  {
    id: "angel-billabong",
    name: "Angel's Billabong",
    area: "nusa-penida",
    category: "natural-pool",
    description:
      "A naturally formed infinity-like rock pool overlooking the ocean, located near Broken Beach on Nusa Penida.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Angels+Billabong+Nusa+Penida",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Angel's_Billabong,_Nusa_Penida.jpg",
    ],
    tags: ["nature", "photography", "adventure"],
    entranceFee: 10000,
    openingHours: "06:00 - 18:00",
    bestTimeToVisit: "Morning during low tide",
    active: true,
  },

  {
    id: "jemeluk-bay",
    name: "Jemeluk Bay",
    area: "amed",
    category: "beach",
    description:
      "A calm, coral-fringed bay lined with traditional wooden jukung fishing boats, and Amed's most popular spot for beach-entry snorkeling.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jemeluk+Bay+Amed+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bali-amed-village-fishing-beach-boats.jpg",
    ],
    tags: ["beach", "snorkeling", "culture", "relaxation"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Early morning for calm, clear water",
    active: true,
  },
  {
    id: "usat-liberty-wreck",
    name: "USAT Liberty Shipwreck",
    area: "amed",
    category: "dive-site",
    description:
      "A WWII-era US Army cargo ship sunk just offshore in Tulamben, now encrusted in coral and one of Bali's most famous shallow wreck dives.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=USAT+Liberty+Wreck+Tulamben",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/USAT_Liberty_Wreck_Dive.jpg",
    ],
    tags: ["diving", "snorkeling", "adventure", "history"],
    entranceFee: 50000,
    openingHours: "06:00 - 17:00",
    bestTimeToVisit: "Morning for the calmest, clearest visibility",
    active: true,
  },
  {
    id: "amed-salt-farms",
    name: "Amed Traditional Salt Farms",
    area: "amed",
    category: "village",
    description:
      "Centuries-old sea-salt farms where local families still hand-press seawater through black volcanic sand using traditional methods.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Amed+Traditional+Salt+Farm+Bali",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Amed_Traditional_Salt_Maker.jpg",
    ],
    tags: ["culture", "photography", "hidden-gem"],
    entranceFee: "free",
    openingHours: "Daylight hours, weather dependent",
    bestTimeToVisit: "Morning during dry season",
    active: true,
  },
  {
    id: "amed-mount-agung-viewpoint",
    name: "Amed Mount Agung Viewpoint",
    area: "amed",
    category: "viewpoint",
    description:
      "Coastal viewpoints along Amed's shoreline with unobstructed views of Mount Agung rising above the Bali Sea, especially striking at sunrise.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Amed+Bali+Mount+Agung+Viewpoint",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gunung_Agung_Amed.jpg",
    ],
    tags: ["viewpoint", "sunrise", "nature", "photography"],
    entranceFee: "free",
    openingHours: "Open 24 hours",
    bestTimeToVisit: "Sunrise",
    active: true,
  },
]
