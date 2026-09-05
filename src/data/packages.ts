export type PackageCategory =
  | "nature"
  | "culture"
  | "adventure"
  | "beach"
  | "food"
  | "cafe"
  | "wellness"
  | "romantic"
  | "family"
  | "sunrise"
  | "sunset"
  | "snorkeling"
  | "diving"
  | "surfing"
  | "chill"
  | "photography"
  | "nightlife"
  | "shopping"
  | "mixed"

export type TravelerType =
  | "solo"
  | "couple"
  | "family"
  | "friends"
  | "honeymoon"
  | "adventure-seeker"
  | "photographer"
  | "foodie"
  | "surfer"
  | "diver"
  | "slow-traveler"
  | "luxury-traveler"
  | "budget-traveler"

export interface PackageItinerary {
  time: string
  /** id of a Destination this stop corresponds to, if any (some stops — lunch, a scenic drive — aren't tied to a listed place). */
  destinationId?: string
  title: string
  description: string
  duration?: string
}

export interface TravelPackage {
  id: string
  name: string
  /** id of the destinationRegions area this package is based in. */
  areaId: string
  tagline: string
  description: string
  category: PackageCategory
  /** ids of Destination entries visited on this route. */
  destinationIds: string[]
  tags: string[]
  duration: string
  startTime?: string
  endTime?: string
  bestTimeToVisit?: string
  itinerary: PackageItinerary[]
  estimatedCost: {
    min: number
    max: number
    currency: "IDR"
  }
  included: string[]
  excluded: string[]
  suitableFor: TravelerType[]
  difficulty: "easy" | "moderate" | "hard"
  transport?: string
  images: string[]
  active: boolean
}

export const travelPackages: TravelPackage[] = [
  // ============================================================
  // SINGARAJA
  // ============================================================
  {
    id: "singaraja-waterfall-trail",
    name: "North Bali Waterfall Trail",
    areaId: "singaraja",
    tagline: "Three jungle waterfalls in one highland adventure",
    description:
      "A nature-focused route through Buleleng's waterfall cluster, combining an easy roadside cascade with a proper jungle trek to two more secluded falls.",
    category: "nature",
    destinationIds: [
      "gitgit-waterfall",
      "sambangan-waterfalls",
      "bali-sekumpul-waterfall",
    ],
    tags: ["nature", "adventure", "hiking", "waterfall", "photography"],
    duration: "8-9 hours",
    startTime: "07:00",
    endTime: "16:00",
    bestTimeToVisit: "Dry season (April-October), start early",
    itinerary: [
      {
        time: "07:00",
        title: "Depart for Buleleng",
        description: "Pickup and scenic drive north into the highlands.",
        duration: "2.5 hours",
      },
      {
        time: "09:30",
        destinationId: "gitgit-waterfall",
        title: "Gitgit Waterfall",
        description: "Short, easy walk to Gitgit's cool forest cascade.",
        duration: "1 hour",
      },
      {
        time: "11:00",
        destinationId: "sambangan-waterfalls",
        title: "Sambangan Waterfalls",
        description:
          "Guided trek through the Sambangan waterfall and pool cluster, with time to swim.",
        duration: "2 hours",
      },
      {
        time: "13:30",
        title: "Local lunch",
        description: "Warung lunch in the village before the final stop.",
        duration: "1 hour",
      },
      {
        time: "14:30",
        destinationId: "bali-sekumpul-waterfall",
        title: "Sekumpul Waterfall",
        description: "Trek down to Bali's most dramatic multi-tier falls.",
        duration: "1.5 hours",
      },
    ],
    estimatedCost: { min: 350000, max: 650000, currency: "IDR" },
    included: ["Private vehicle", "Local trekking guide", "Bottled water"],
    excluded: ["Entrance tickets", "Meals", "Gratuity"],
    suitableFor: ["adventure-seeker", "friends", "photographer", "solo"],
    difficulty: "moderate",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gitgit_waterfall_200507-1.jpg",
    ],
    active: true,
  },
  {
    id: "singaraja-dolphin-sunrise",
    name: "Lovina Sunrise Dolphin Watching",
    areaId: "singaraja",
    tagline: "Wild dolphins at sunrise on Bali's calm northern coast",
    description:
      "An early-morning boat trip out onto Lovina Bay to watch wild dolphins, followed by a relaxed breakfast on the black-sand beach.",
    category: "sunrise",
    destinationIds: ["lovina-beach"],
    tags: ["sunrise", "wildlife", "relaxation", "beach"],
    duration: "3-4 hours",
    startTime: "05:30",
    endTime: "09:00",
    bestTimeToVisit: "Early morning, calmest seas",
    itinerary: [
      {
        time: "05:30",
        destinationId: "lovina-beach",
        title: "Board the boat",
        description: "Meet the traditional outrigger boat on Lovina Beach.",
        duration: "15 minutes",
      },
      {
        time: "05:45",
        title: "Dolphin watching",
        description: "Cruise out to where pods of wild dolphins surface at dawn.",
        duration: "1.5 hours",
      },
      {
        time: "07:30",
        destinationId: "lovina-beach",
        title: "Beachfront breakfast",
        description: "Relax with breakfast on the black-sand beach.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 100000, max: 200000, currency: "IDR" },
    included: ["Boat trip", "Life jacket"],
    excluded: ["Breakfast", "Hotel transfer", "Gratuity"],
    suitableFor: ["family", "couple", "solo", "slow-traveler"],
    difficulty: "easy",
    transport: "Traditional outrigger boat",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lovina_Beach_Bali.jpg",
    ],
    active: true,
  },

  // ============================================================
  // BEDUGUL
  // ============================================================
  {
    id: "bedugul-lake-temple-highlights",
    name: "Bedugul Lake & Temple Highlights",
    areaId: "bedugul",
    tagline: "Bali's iconic lake temple and cool highland scenery",
    description:
      "A relaxed highland day around Lake Beratan — the postcard lake temple, the shoreline itself, and a stroll through the botanic garden's cool mountain air.",
    category: "culture",
    destinationIds: [
      "bali-ulun-danu-beratan",
      "lake-beratan",
      "bali-botanic-garden",
    ],
    tags: ["culture", "nature", "photography", "family"],
    duration: "5-6 hours",
    startTime: "09:00",
    endTime: "15:00",
    bestTimeToVisit: "Morning, before highland mist burns off",
    itinerary: [
      {
        time: "09:00",
        destinationId: "bali-ulun-danu-beratan",
        title: "Ulun Danu Beratan Temple",
        description: "Photograph the lake temple against the misty mountains.",
        duration: "1.5 hours",
      },
      {
        time: "10:45",
        destinationId: "lake-beratan",
        title: "Lakeshore walk",
        description: "Walk the shoreline park with views across the volcanic lake.",
        duration: "1 hour",
      },
      {
        time: "12:00",
        title: "Highland lunch",
        description: "Lunch at a restaurant overlooking the lake.",
        duration: "1 hour",
      },
      {
        time: "13:30",
        destinationId: "bali-botanic-garden",
        title: "Bali Botanic Garden",
        description: "Wander the tropical plant collections and forest trails.",
        duration: "1.5 hours",
      },
    ],
    estimatedCost: { min: 200000, max: 450000, currency: "IDR" },
    included: ["Private vehicle", "Driver-guide", "Bottled water"],
    excluded: ["Entrance tickets", "Lunch", "Gratuity"],
    suitableFor: ["family", "couple", "photographer", "slow-traveler"],
    difficulty: "easy",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ulun_Danu_Beratan_Temple.jpg",
    ],
    active: true,
  },
  {
    id: "bedugul-garden-slow-escape",
    name: "Bedugul Highland Slow Escape",
    areaId: "bedugul",
    tagline: "Cool mountain air, forest trails and unhurried time outdoors",
    description:
      "A deliberately unhurried half-day for travelers who want the botanic garden's cool air and forest trails without cramming in temple stops.",
    category: "wellness",
    destinationIds: ["bali-botanic-garden"],
    tags: ["nature", "relaxation", "family", "hiking"],
    duration: "3-4 hours",
    startTime: "09:00",
    endTime: "13:00",
    bestTimeToVisit: "Weekday mornings, quieter trails",
    itinerary: [
      {
        time: "09:00",
        destinationId: "bali-botanic-garden",
        title: "Garden entry & orientation",
        description: "Start at the treetop canopy walk and orchid garden.",
        duration: "1 hour",
      },
      {
        time: "10:00",
        title: "Forest trail walk",
        description: "Slow walk through the pine forest and fern trails.",
        duration: "1.5 hours",
      },
      {
        time: "11:30",
        title: "Picnic lunch",
        description: "Picnic in the garden's open lawns before heading back.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 80000, max: 200000, currency: "IDR" },
    included: ["Garden entrance ticket"],
    excluded: ["Transportation", "Food", "Gratuity"],
    suitableFor: ["family", "solo", "slow-traveler", "budget-traveler"],
    difficulty: "easy",
    transport: "Private car or scooter",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/DJI_0128_Bali_Botanic_Garden.jpg",
    ],
    active: true,
  },

  // ============================================================
  // KINTAMANI
  // ============================================================
  {
    id: "kintamani-sunrise-hike",
    name: "Mount Batur Sunrise Hike",
    areaId: "kintamani",
    tagline: "Summit an active volcano before dawn for the ultimate sunrise",
    description:
      "A guided pre-dawn trek up Mount Batur, timed to reach the crater rim for sunrise, followed by a hot breakfast cooked over volcanic steam and a look at Lake Batur below.",
    category: "sunrise",
    destinationIds: ["bali-mount-batur", "lake-batur"],
    tags: ["sunrise", "hiking", "adventure", "mountains", "photography"],
    duration: "6-8 hours",
    startTime: "02:00",
    endTime: "10:00",
    bestTimeToVisit: "Dry season, clear-sky nights",
    itinerary: [
      {
        time: "02:00",
        title: "Hotel pickup",
        description: "Pickup and drive to the Mount Batur trailhead.",
        duration: "1.5 hours",
      },
      {
        time: "03:30",
        destinationId: "bali-mount-batur",
        title: "Begin the ascent",
        description: "Guided trek up the volcanic trail by headlamp.",
        duration: "2.5 hours",
      },
      {
        time: "06:00",
        title: "Sunrise at the crater rim",
        description:
          "Watch sunrise from the summit, with a hot breakfast cooked using volcanic steam.",
        duration: "1 hour",
      },
      {
        time: "07:30",
        destinationId: "lake-batur",
        title: "Descent with lake views",
        description: "Descend with sweeping views over Lake Batur.",
        duration: "2 hours",
      },
    ],
    estimatedCost: { min: 350000, max: 600000, currency: "IDR" },
    included: [
      "Local trekking guide",
      "Headlamp",
      "Breakfast at the summit",
      "Bottled water",
    ],
    excluded: ["Hotel transfer", "Entrance ticket", "Gratuity"],
    suitableFor: ["adventure-seeker", "friends", "couple", "photographer"],
    difficulty: "hard",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Batur,_Kintamani,_Bali,_Indonesia.jpg",
    ],
    active: true,
  },
  {
    id: "kintamani-viewpoint-cafe",
    name: "Kintamani Scenic Cafe Morning",
    areaId: "kintamani",
    tagline: "Coffee with a volcano view, no hiking required",
    description:
      "An easy highland morning for travelers who want Kintamani's volcanic panorama without the pre-dawn trek — a viewpoint stop and a relaxed coffee overlooking Mount Batur.",
    category: "cafe",
    destinationIds: ["kintamani-viewpoint"],
    tags: ["cafe", "photography", "mountains", "chill"],
    duration: "4-5 hours",
    startTime: "08:00",
    endTime: "12:30",
    bestTimeToVisit: "Morning, before afternoon cloud cover",
    itinerary: [
      {
        time: "08:00",
        title: "Drive to the highlands",
        description: "Scenic drive up into the Kintamani caldera.",
        duration: "2 hours",
      },
      {
        time: "10:00",
        destinationId: "kintamani-viewpoint",
        title: "Kintamani Viewpoint",
        description: "Panoramic views of Mount and Lake Batur from the caldera rim.",
        duration: "1 hour",
      },
      {
        time: "11:00",
        title: "Coffee with a view",
        description: "Relaxed coffee at a viewpoint café overlooking the volcano.",
        duration: "1.5 hours",
      },
    ],
    estimatedCost: { min: 150000, max: 350000, currency: "IDR" },
    included: ["Private vehicle", "Driver-guide"],
    excluded: ["Entrance ticket", "Food and drinks", "Gratuity"],
    suitableFor: ["couple", "solo", "photographer", "family"],
    difficulty: "easy",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gunung_Batur_Kintamani.jpg",
    ],
    active: true,
  },

  // ============================================================
  // UBUD
  // ============================================================
  {
    id: "ubud-nature-escape",
    name: "Ubud Nature Escape",
    areaId: "ubud",
    tagline: "Rice terraces and jungle ridges through Ubud's green heart",
    description:
      "A nature-focused route through Ubud's most photogenic landscapes — the layered Tegallalang terraces, a quiet ridge walk, and open countryside rice fields.",
    category: "nature",
    destinationIds: [
      "bali-tegalalang-rice-terrace",
      "bali-campuhan-ridge-walk",
      "ubud-rice-fields",
    ],
    tags: ["nature", "photography", "hiking", "relaxation"],
    duration: "6-7 hours",
    startTime: "07:00",
    endTime: "14:00",
    bestTimeToVisit: "Early morning, before the midday heat",
    itinerary: [
      {
        time: "07:00",
        destinationId: "bali-campuhan-ridge-walk",
        title: "Morning ridge walk",
        description: "Start with a peaceful walk through Ubud's green valley.",
        duration: "1.5 hours",
      },
      {
        time: "09:00",
        destinationId: "bali-tegalalang-rice-terrace",
        title: "Tegallalang Rice Terrace",
        description: "Explore the famous layered terraces and viewpoints.",
        duration: "2 hours",
      },
      {
        time: "12:00",
        title: "Local lunch",
        description: "Lunch overlooking the surrounding countryside.",
        duration: "1 hour",
      },
      {
        time: "13:00",
        destinationId: "ubud-rice-fields",
        title: "Ubud rice fields walk",
        description: "A relaxed closing walk through open countryside fields.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 150000, max: 400000, currency: "IDR" },
    included: ["Private vehicle", "Bottled water"],
    excluded: ["Entrance tickets", "Lunch", "Gratuity"],
    suitableFor: ["couple", "friends", "solo", "photographer", "slow-traveler"],
    difficulty: "moderate",
    transport: "Private car or scooter",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rice_Terrace_in_Ubud.jpg",
    ],
    active: true,
  },
  {
    id: "ubud-culture-temple-trail",
    name: "Ubud Culture & Temple Trail",
    areaId: "ubud",
    tagline: "Ancient temples, sacred springs and Balinese heritage",
    description:
      "A culture-focused day visiting Ubud's historic archaeological temple and its sacred water-purification temple.",
    category: "culture",
    destinationIds: ["bali-goa-gajah", "bali-tirta-empul"],
    tags: ["culture", "history", "temple", "photography"],
    duration: "6-7 hours",
    startTime: "08:00",
    endTime: "15:00",
    bestTimeToVisit: "Morning, for smaller crowds",
    itinerary: [
      {
        time: "08:00",
        destinationId: "bali-goa-gajah",
        title: "Goa Gajah",
        description: "Explore the historic cave temple and archaeological grounds.",
        duration: "1.5 hours",
      },
      {
        time: "10:30",
        destinationId: "bali-tirta-empul",
        title: "Tirta Empul Temple",
        description:
          "Visit the sacred water temple and learn about Balinese purification traditions.",
        duration: "2 hours",
      },
      {
        time: "13:00",
        title: "Balinese lunch",
        description: "Traditional Balinese meal at a local restaurant.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 150000, max: 400000, currency: "IDR" },
    included: ["Private vehicle", "Driver-guide"],
    excluded: ["Temple entrance fees", "Sarong rental", "Lunch", "Gratuity"],
    suitableFor: ["couple", "family", "solo", "photographer"],
    difficulty: "easy",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Goa_Gajah,_Hindu_temple_Ubud_Bali_Indonesia.jpg",
    ],
    active: true,
  },

  // ============================================================
  // KUTA
  // ============================================================
  {
    id: "kuta-surf-sunset",
    name: "Kuta Surf & Sunset",
    areaId: "kuta",
    tagline: "Beginner-friendly waves and Bali's original beach sunset",
    description:
      "An afternoon on Bali's original beach town — beginner surf lessons on Kuta's gentle break, followed by the sunset the beach is famous for.",
    category: "surfing",
    destinationIds: ["bali-kuta-beach"],
    tags: ["surfing", "sunset", "beach", "popular"],
    duration: "4-5 hours",
    startTime: "14:00",
    endTime: "18:30",
    bestTimeToVisit: "Late afternoon",
    itinerary: [
      {
        time: "14:00",
        destinationId: "bali-kuta-beach",
        title: "Surf lesson",
        description: "Beginner-friendly surf lesson on Kuta's gentle break.",
        duration: "2 hours",
      },
      {
        time: "16:30",
        title: "Free time on the beach",
        description: "Relax on the sand or grab a drink at a beachfront bar.",
        duration: "1 hour",
      },
      {
        time: "17:30",
        destinationId: "bali-kuta-beach",
        title: "Sunset",
        description: "Watch the sunset from Kuta Beach.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 250000, max: 500000, currency: "IDR" },
    included: ["Surfboard rental", "Surf instructor"],
    excluded: ["Food and drinks", "Transportation", "Gratuity"],
    suitableFor: ["surfer", "solo", "friends", "budget-traveler"],
    difficulty: "easy",
    transport: "Self-arranged / scooter",
    images: [
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/42000/42223-Kuta-Beach.jpg",
    ],
    active: true,
  },
  {
    id: "kuta-family-fun-day",
    name: "Kuta Family Fun Day",
    areaId: "kuta",
    tagline: "Waterslides in the morning, souvenir shopping in the afternoon",
    description:
      "A family-friendly day combining Bali's biggest water park with the Kuta Art Market for souvenirs and local crafts.",
    category: "family",
    destinationIds: ["waterbom-bali", "kuta-art-market"],
    tags: ["family", "adventure", "shopping"],
    duration: "6-7 hours",
    startTime: "09:00",
    endTime: "16:00",
    bestTimeToVisit: "Weekday mornings, shorter queues",
    itinerary: [
      {
        time: "09:00",
        destinationId: "waterbom-bali",
        title: "Waterbom Bali",
        description: "Slides, lazy river and pools for the whole family.",
        duration: "4 hours",
      },
      {
        time: "13:00",
        title: "Lunch break",
        description: "Lunch near the water park.",
        duration: "1 hour",
      },
      {
        time: "14:00",
        destinationId: "kuta-art-market",
        title: "Kuta Art Market",
        description: "Browse souvenirs, clothing and local handicrafts.",
        duration: "2 hours",
      },
    ],
    estimatedCost: { min: 700000, max: 1300000, currency: "IDR" },
    included: ["Private vehicle", "Driver"],
    excluded: ["Waterbom admission", "Food", "Shopping spend", "Gratuity"],
    suitableFor: ["family", "budget-traveler"],
    difficulty: "easy",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cabanas_At_Waterbom_Amusement_Park,_Kuta_Bali.JPG",
    ],
    active: true,
  },

  // ============================================================
  // SANUR
  // ============================================================
  {
    id: "sanur-sunrise-cycling",
    name: "Sanur Sunrise & Cycling Morning",
    areaId: "sanur",
    tagline: "Watch the sunrise, cycle the coast and enjoy a slow breakfast",
    description:
      "A calm morning route along Sanur's beachfront — sunrise over the reef-protected bay, then a relaxed ride down the promenade.",
    category: "sunrise",
    destinationIds: ["bali-sanur-beach", "sanur-beach-walk"],
    tags: ["sunrise", "cycling", "beach", "relaxation"],
    duration: "3-4 hours",
    startTime: "05:30",
    endTime: "09:00",
    bestTimeToVisit: "Early morning",
    itinerary: [
      {
        time: "05:30",
        destinationId: "bali-sanur-beach",
        title: "Sunrise",
        description: "Watch the sunrise over the calm waters of Sanur.",
        duration: "1 hour",
      },
      {
        time: "06:45",
        destinationId: "sanur-beach-walk",
        title: "Beach cycling",
        description: "Cycle along Sanur's beachfront promenade.",
        duration: "1 hour",
      },
      {
        time: "08:00",
        title: "Local breakfast",
        description: "Breakfast at a local Sanur eatery.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 100000, max: 250000, currency: "IDR" },
    included: ["Bicycle rental"],
    excluded: ["Breakfast", "Transportation", "Gratuity"],
    suitableFor: ["couple", "family", "solo", "slow-traveler"],
    difficulty: "easy",
    transport: "Bicycle",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sanur_Beach,_Bali.jpg",
    ],
    active: true,
  },
  {
    id: "sanur-beach-hopping-chill",
    name: "Sanur Beach Hopping & Chill",
    areaId: "sanur",
    tagline: "A slow, unhurried day across Sanur's quieter beaches",
    description:
      "A low-key day for travelers who just want calm water and quiet sand — Sanur's main beach and the quieter Mertasari stretch further south.",
    category: "chill",
    destinationIds: ["bali-sanur-beach", "mertasari-beach"],
    tags: ["beach", "family", "relaxation"],
    duration: "5-6 hours",
    startTime: "09:00",
    endTime: "15:00",
    bestTimeToVisit: "Morning to early afternoon",
    itinerary: [
      {
        time: "09:00",
        destinationId: "bali-sanur-beach",
        title: "Sanur Beach",
        description: "Morning swim and relaxing on the main beach.",
        duration: "2 hours",
      },
      {
        time: "12:00",
        title: "Lunch",
        description: "Lunch at a beachfront café.",
        duration: "1 hour",
      },
      {
        time: "13:30",
        destinationId: "mertasari-beach",
        title: "Mertasari Beach",
        description: "A quieter stretch of coastline with calm shallow water.",
        duration: "1.5 hours",
      },
    ],
    estimatedCost: { min: 50000, max: 200000, currency: "IDR" },
    included: [],
    excluded: ["Food and drinks", "Transportation", "Gratuity"],
    suitableFor: ["family", "solo", "slow-traveler", "budget-traveler"],
    difficulty: "easy",
    transport: "Scooter or private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sanur_Beach.JPG",
    ],
    active: true,
  },

  // ============================================================
  // JIMBARAN
  // ============================================================
  {
    id: "jimbaran-sunset-seafood",
    name: "Jimbaran Sunset Seafood Dinner",
    areaId: "jimbaran",
    tagline: "Beachfront grilled seafood as the sun goes down",
    description:
      "A romantic evening on Jimbaran's sandy bay, ending with a grilled seafood dinner served right on the beach at sunset.",
    category: "romantic",
    destinationIds: ["jimbaran-beach"],
    tags: ["sunset", "food", "romantic", "beach"],
    duration: "3 hours",
    startTime: "17:00",
    endTime: "20:00",
    bestTimeToVisit: "Late afternoon into sunset",
    itinerary: [
      {
        time: "17:00",
        destinationId: "jimbaran-beach",
        title: "Beach time",
        description: "Relax on the sand as the sun starts to lower.",
        duration: "1 hour",
      },
      {
        time: "18:00",
        title: "Sunset",
        description: "Watch the sunset over Jimbaran Bay.",
        duration: "30 minutes",
      },
      {
        time: "18:30",
        title: "Seafood dinner",
        description: "Grilled seafood dinner at a beachfront restaurant.",
        duration: "1.5 hours",
      },
    ],
    estimatedCost: { min: 250000, max: 600000, currency: "IDR" },
    included: ["Beachfront table reservation"],
    excluded: ["Food and drinks", "Transportation", "Gratuity"],
    suitableFor: ["couple", "honeymoon", "foodie", "luxury-traveler"],
    difficulty: "easy",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jimabaran_beach.jpg",
    ],
    active: true,
  },
  {
    id: "jimbaran-market-culture-morning",
    name: "Jimbaran Fish Market Morning",
    areaId: "jimbaran",
    tagline: "See Bali's fishing culture come alive at dawn",
    description:
      "An early visit to Jimbaran's traditional fish market, where the day's catch is auctioned and traded right off the boats.",
    category: "culture",
    destinationIds: ["jimbaran-fish-market"],
    tags: ["culture", "photography", "food"],
    duration: "2-3 hours",
    startTime: "06:00",
    endTime: "08:30",
    bestTimeToVisit: "Early morning, when boats come in",
    itinerary: [
      {
        time: "06:00",
        destinationId: "jimbaran-fish-market",
        title: "Jimbaran Fish Market",
        description: "Watch the morning fish auction and trading.",
        duration: "1.5 hours",
      },
      {
        time: "07:30",
        title: "Fresh seafood breakfast",
        description: "Breakfast featuring fresh catch at a nearby warung.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 80000, max: 200000, currency: "IDR" },
    included: [],
    excluded: ["Food", "Transportation", "Gratuity"],
    suitableFor: ["photographer", "foodie", "solo", "friends"],
    difficulty: "easy",
    transport: "Private car or scooter",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pasar_Ikan_Tradisional_Kedonganan.jpg",
    ],
    active: true,
  },

  // ============================================================
  // PECATU
  // ============================================================
  {
    id: "pecatu-uluwatu-sunset-cliffs",
    name: "Uluwatu Sunset & Cliffs",
    areaId: "pecatu",
    tagline: "Cliff-top temple, fire dance and a beach beneath limestone walls",
    description:
      "The Bukit Peninsula's signature sunset route — Uluwatu's dramatic sea temple, then Melasti Beach's limestone cliffs before the light fades.",
    category: "sunset",
    destinationIds: ["bali-uluwatu-temple", "bali-melasti-beach"],
    tags: ["culture", "sunset", "photography", "popular"],
    duration: "6-7 hours",
    startTime: "14:00",
    endTime: "21:00",
    bestTimeToVisit: "Afternoon into sunset",
    itinerary: [
      {
        time: "14:00",
        destinationId: "bali-melasti-beach",
        title: "Melasti Beach",
        description: "Beach time beneath the towering limestone cliffs.",
        duration: "2 hours",
      },
      {
        time: "16:30",
        destinationId: "bali-uluwatu-temple",
        title: "Uluwatu Temple",
        description: "Explore the cliff-top sea temple at golden hour.",
        duration: "1.5 hours",
      },
      {
        time: "18:00",
        title: "Kecak fire dance",
        description: "Sunset Kecak fire dance performance at the clifftop amphitheatre.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 200000, max: 450000, currency: "IDR" },
    included: ["Private vehicle", "Driver-guide"],
    excluded: ["Temple entrance", "Kecak dance ticket", "Gratuity"],
    suitableFor: ["couple", "honeymoon", "photographer", "friends"],
    difficulty: "easy",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bali_Uluwatu_Temple.jpg",
    ],
    active: true,
  },
  {
    id: "pecatu-surf-beach-hopping",
    name: "Bukit Surf Beach Hopping",
    areaId: "pecatu",
    tagline: "Two of the Bukit's best surf breaks, cliff caves included",
    description:
      "A surf-focused route through Pecatu's cove beaches — Padang Padang's compact turquoise cove and Suluban's cave-access surf break.",
    category: "surfing",
    destinationIds: ["padang-padang-beach", "suluban-beach"],
    tags: ["surfing", "adventure", "photography"],
    duration: "5-6 hours",
    startTime: "08:00",
    endTime: "14:00",
    bestTimeToVisit: "Morning, before the tide changes",
    itinerary: [
      {
        time: "08:00",
        destinationId: "padang-padang-beach",
        title: "Padang Padang Beach",
        description: "Swim and watch surfers in the compact turquoise cove.",
        duration: "2 hours",
      },
      {
        time: "10:30",
        title: "Local lunch",
        description: "Lunch at a warung overlooking the cliffs.",
        duration: "1 hour",
      },
      {
        time: "11:30",
        destinationId: "suluban-beach",
        title: "Suluban Beach",
        description: "Walk through the limestone cave entrance to the surf break.",
        duration: "2 hours",
      },
    ],
    estimatedCost: { min: 150000, max: 350000, currency: "IDR" },
    included: ["Private vehicle"],
    excluded: ["Entrance fees", "Food", "Surfboard rental", "Gratuity"],
    suitableFor: ["surfer", "adventure-seeker", "friends", "photographer"],
    difficulty: "moderate",
    transport: "Private car or scooter",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Padang_Padang_Beach_Bali.jpg",
    ],
    active: true,
  },

  // ============================================================
  // NUSA DUA
  // ============================================================
  {
    id: "nusa-dua-resort-beach-day",
    name: "Nusa Dua Resort Beach Day",
    areaId: "nusa-dua",
    tagline: "Calm water, white sand and easy family relaxation",
    description:
      "An easygoing beach day across two of Nusa Dua's polished, family-friendly beaches with calm, shallow water.",
    category: "family",
    destinationIds: ["bali-nusa-dua-beach", "pandawa-beach"],
    tags: ["beach", "family", "relaxation", "photography"],
    duration: "5-6 hours",
    startTime: "09:00",
    endTime: "15:00",
    bestTimeToVisit: "Morning",
    itinerary: [
      {
        time: "09:00",
        destinationId: "bali-nusa-dua-beach",
        title: "Nusa Dua Beach",
        description: "Morning swim in calm, clear water.",
        duration: "2 hours",
      },
      {
        time: "12:00",
        title: "Lunch",
        description: "Lunch near the beach.",
        duration: "1 hour",
      },
      {
        time: "13:00",
        destinationId: "pandawa-beach",
        title: "Pandawa Beach",
        description: "Visit the white-sand beach beneath limestone cliffs.",
        duration: "2 hours",
      },
    ],
    estimatedCost: { min: 200000, max: 500000, currency: "IDR" },
    included: ["Private vehicle", "Driver"],
    excluded: ["Entrance fees", "Food", "Gratuity"],
    suitableFor: ["family", "luxury-traveler", "couple"],
    difficulty: "easy",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nusa_Dua_beach_Bali.jpg",
    ],
    active: true,
  },
  {
    id: "nusa-dua-coastal-adventure",
    name: "Nusa Dua Coastal Adventure",
    areaId: "nusa-dua",
    tagline: "Crashing sea spray and a dramatic cliff-backed beach",
    description:
      "A shorter, more dramatic coastal route past Water Blow's crashing sea spray to Pandawa's cliff-lined beach.",
    category: "adventure",
    destinationIds: ["water-blow-nusa-dua", "pandawa-beach"],
    tags: ["nature", "photography", "adventure"],
    duration: "3-4 hours",
    startTime: "15:00",
    endTime: "18:30",
    bestTimeToVisit: "High tide, for the biggest sea spray",
    itinerary: [
      {
        time: "15:00",
        destinationId: "water-blow-nusa-dua",
        title: "Water Blow",
        description: "Watch waves burst through the narrow rock opening.",
        duration: "1 hour",
      },
      {
        time: "16:15",
        destinationId: "pandawa-beach",
        title: "Pandawa Beach",
        description: "Sunset views from the cliff-backed white-sand beach.",
        duration: "2 hours",
      },
    ],
    estimatedCost: { min: 150000, max: 350000, currency: "IDR" },
    included: ["Private vehicle"],
    excluded: ["Entrance fees", "Food", "Gratuity"],
    suitableFor: ["couple", "photographer", "friends"],
    difficulty: "easy",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water_Blow_Point,_Nusa_Dua,_Bali.jpg",
    ],
    active: true,
  },

  // ============================================================
  // NUSA PENIDA
  // ============================================================
  {
    id: "nusa-penida-west-highlights",
    name: "West Nusa Penida Highlights",
    areaId: "nusa-penida",
    tagline: "The island's three most iconic viewpoints in one day",
    description:
      "A full-day fast-boat trip to Nusa Penida's west side, covering its three most photographed landmarks — the T-Rex cliff, the collapsed arch, and the infinity pool.",
    category: "photography",
    destinationIds: [
      "bali-kelingking-beach",
      "broken-beach",
      "angel-billabong",
    ],
    tags: ["adventure", "photography", "nature", "popular"],
    duration: "Full day",
    startTime: "07:00",
    endTime: "18:00",
    bestTimeToVisit: "Dry season, calm boat crossings",
    itinerary: [
      {
        time: "07:00",
        title: "Fast boat from Sanur",
        description: "Boat crossing to Nusa Penida (~45 minutes).",
        duration: "1 hour",
      },
      {
        time: "08:30",
        destinationId: "bali-kelingking-beach",
        title: "Kelingking Beach",
        description: "The iconic T-Rex-shaped cliff viewpoint.",
        duration: "1.5 hours",
      },
      {
        time: "10:30",
        destinationId: "broken-beach",
        title: "Broken Beach",
        description: "Circular rock formation with a collapsed cliff arch.",
        duration: "1 hour",
      },
      {
        time: "12:00",
        destinationId: "angel-billabong",
        title: "Angel's Billabong",
        description: "Natural infinity-pool rock formation overlooking the ocean.",
        duration: "1 hour",
      },
      {
        time: "13:30",
        title: "Lunch",
        description: "Lunch at a local warung.",
        duration: "1 hour",
      },
      {
        time: "16:30",
        title: "Return boat to Sanur",
        description: "Fast boat back to the mainland.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 600000, max: 950000, currency: "IDR" },
    included: [
      "Fast boat return ticket",
      "Private vehicle on Nusa Penida",
      "Local guide",
    ],
    excluded: ["Entrance tickets", "Meals", "Gratuity"],
    suitableFor: ["adventure-seeker", "photographer", "friends", "couple"],
    difficulty: "moderate",
    transport: "Fast boat + private vehicle",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kelingking_Beach,_Nusa_Penida_Bali.jpg",
    ],
    active: true,
  },
  {
    id: "nusa-penida-east-diamond-day",
    name: "East Nusa Penida: Diamond Beach Day",
    areaId: "nusa-penida",
    tagline: "The quieter, less-crowded side of the island",
    description:
      "A day trip to Nusa Penida's eastern side, centered on the white-sand cliffs of Diamond Beach — a quieter alternative to the busier west-side circuit.",
    category: "beach",
    destinationIds: ["bali-diamond-beach"],
    tags: ["beach", "nature", "adventure", "photography"],
    duration: "Full day",
    startTime: "07:00",
    endTime: "17:00",
    bestTimeToVisit: "Early morning for the fast boat and fewer crowds",
    itinerary: [
      {
        time: "07:00",
        title: "Fast boat from Sanur",
        description: "Boat crossing to Nusa Penida (~45 minutes).",
        duration: "1 hour",
      },
      {
        time: "09:00",
        destinationId: "bali-diamond-beach",
        title: "Diamond Beach",
        description: "Descend the cliffside stairway to the white-sand beach.",
        duration: "3 hours",
      },
      {
        time: "12:30",
        title: "Lunch",
        description: "Lunch at a clifftop warung overlooking the beach.",
        duration: "1 hour",
      },
      {
        time: "15:30",
        title: "Return boat to Sanur",
        description: "Fast boat back to the mainland.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 500000, max: 850000, currency: "IDR" },
    included: [
      "Fast boat return ticket",
      "Private vehicle on Nusa Penida",
    ],
    excluded: ["Entrance ticket", "Meals", "Gratuity"],
    suitableFor: ["couple", "solo", "slow-traveler", "photographer"],
    difficulty: "moderate",
    transport: "Fast boat + private vehicle",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Diamond_Beach_Nusa_Penida.jpg",
    ],
    active: true,
  },

  // ============================================================
  // AMED
  // ============================================================
  {
    id: "amed-snorkeling-diving-day",
    name: "Amed Snorkeling & Wreck Diving Day",
    areaId: "amed",
    tagline: "Beach-entry snorkeling and Bali's most famous shipwreck dive",
    description:
      "Amed's signature underwater day — calm coral-fringed snorkeling in Jemeluk Bay followed by the WWII shipwreck at Tulamben, suited to both snorkelers and divers.",
    category: "diving",
    destinationIds: ["jemeluk-bay", "usat-liberty-wreck"],
    tags: ["snorkeling", "diving", "adventure", "beach"],
    duration: "6-7 hours",
    startTime: "08:00",
    endTime: "15:00",
    bestTimeToVisit: "Morning, calmest and clearest water",
    itinerary: [
      {
        time: "08:00",
        destinationId: "jemeluk-bay",
        title: "Jemeluk Bay snorkeling",
        description: "Beach-entry snorkeling over coral just offshore.",
        duration: "2 hours",
      },
      {
        time: "11:00",
        title: "Transfer to Tulamben",
        description: "Short drive up the coast to Tulamben.",
        duration: "30 minutes",
      },
      {
        time: "11:30",
        destinationId: "usat-liberty-wreck",
        title: "USAT Liberty Shipwreck",
        description: "Snorkel or dive the coral-encrusted WWII wreck.",
        duration: "2 hours",
      },
      {
        time: "14:00",
        title: "Lunch",
        description: "Lunch at a beachfront warung.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 300000, max: 700000, currency: "IDR" },
    included: ["Snorkeling gear", "Local guide", "Bottled water"],
    excluded: ["Dive equipment rental", "Diving certification fee", "Lunch", "Gratuity"],
    suitableFor: ["diver", "adventure-seeker", "friends", "solo"],
    difficulty: "moderate",
    transport: "Private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/USAT_Liberty_Wreck_Dive.jpg",
    ],
    active: true,
  },
  {
    id: "amed-slow-coastal-sunrise",
    name: "Amed Slow Coastal Sunrise",
    areaId: "amed",
    tagline: "Mount Agung at sunrise and centuries-old salt-making traditions",
    description:
      "An unhurried east-coast morning — sunrise over Mount Agung from Amed's shoreline, then a visit to traditional salt farmers still working the black volcanic sand by hand.",
    category: "sunrise",
    destinationIds: ["amed-mount-agung-viewpoint", "amed-salt-farms"],
    tags: ["sunrise", "culture", "photography", "slow-travel"],
    duration: "3-4 hours",
    startTime: "05:30",
    endTime: "09:00",
    bestTimeToVisit: "Dawn, dry season for clearest Mount Agung views",
    itinerary: [
      {
        time: "05:30",
        destinationId: "amed-mount-agung-viewpoint",
        title: "Sunrise over Mount Agung",
        description: "Watch the sky light up behind Mount Agung from the coast.",
        duration: "1.5 hours",
      },
      {
        time: "07:00",
        destinationId: "amed-salt-farms",
        title: "Traditional salt farms",
        description: "See local families hand-press seawater into salt.",
        duration: "1 hour",
      },
      {
        time: "08:00",
        title: "Coastal breakfast",
        description: "Breakfast at a warung along the shore.",
        duration: "1 hour",
      },
    ],
    estimatedCost: { min: 80000, max: 200000, currency: "IDR" },
    included: [],
    excluded: ["Breakfast", "Transportation", "Gratuity"],
    suitableFor: ["solo", "couple", "photographer", "slow-traveler"],
    difficulty: "easy",
    transport: "Scooter or private car",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gunung_Agung_Amed.jpg",
    ],
    active: true,
  },
]
