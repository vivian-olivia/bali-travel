export { destinations, type Destination } from "./destinations"
export {
  travelPackages,
  type TravelPackage,
  type PackageItinerary,
  type PackageCategory,
  type TravelerType,
} from "./packages"

export const WHATSAPP_NUMBER = "6281214050607"
export const BUSINESS_NAME = "Bali Rahayu"
export const BUSINESS_EMAIL = "hello@balirahayutours.com"
export const BUSINESS_INSTAGRAM = "@balirahayutours"

export type TransportType = "private-driver" | "airport-shuttle" | "intercity"
export type TourCategory =
  | "ubud"
  | "south-bali"
  | "central-bali"
  | "north-bali"
  | "east-bali"
export type TourTag = "adventure" | "beach" | "nature" | "culture"
export type InquiryStatus = "new" | "contacted" | "confirmed" | "completed" | "cancelled"

export interface TransportService {
  id: string
  name: string
  type: TransportType
  description: string
  startingPrice: number
  duration: string
  destinations: string[]
  inclusions: string[]
  exclusions: string[]
  image: string
  active: boolean
  /** Whether this service can be booked self-drive (no driver) as well as with a driver. */
  driverOptional?: boolean
  /** Price when booked self-drive, i.e. without a driver. Only used when driverOptional is true. */
  selfDrivePrice?: number
}

export interface Tour {
  id: string
  name: string
  category: TourCategory
  /** id of the specific destinationRegions pin this tour is anchored to (its headline stop) — used to match tours to the correct map pin, since several pins can share the same broad category. */
  regionId: string
  description: string
  startingPrice: number
  duration: string
  tags: TourTag[]
  destinations: string[]
  itinerary: { time: string; activity: string }[]
  inclusions: string[]
  exclusions: string[]
  images: string[]
  active: boolean
}

export interface Inquiry {
  id: string
  customerName: string
  phone: string
  service: string
  travelDate: string
  people: number
  pickup: string
  destination: string
  status: InquiryStatus
  notes: string
  createdAt: string
}

export const transportServices: TransportService[] = [
  {
    id: "private-driver-full-day",
    name: "Private Driver — Full Day",
    type: "private-driver",
    description:
      "Your own dedicated English-speaking driver for a full day. Perfect for island exploration, temple hopping, or custom itineraries. Up to 10 hours of flexible transport.",
    startingPrice: 700000,
    duration: "Up to 10 hours",
    destinations: ["Anywhere in Bali"],
    inclusions: [
      "Experienced English-speaking driver",
      "Air-conditioned vehicle",
      "Fuel",
      "Bottled water",
    ],
    exclusions: ["Parking fees", "Entrance tickets", "Meals", "Toll fees"],
    image:
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&h=500&fit=crop&auto=format",
    active: true,
    driverOptional: true,
    selfDrivePrice: 350000,
  },
  {
    id: "private-driver-half-day",
    name: "Private Driver — Half Day",
    type: "private-driver",
    description:
      "A shorter transfer option ideal for a few key stops or when you need flexibility in half your day. Up to 5 hours of service.",
    startingPrice: 450000,
    duration: "Up to 5 hours",
    destinations: ["Anywhere in Bali"],
    inclusions: [
      "Experienced driver",
      "Air-conditioned vehicle",
      "Fuel",
      "Bottled water",
    ],
    exclusions: ["Parking fees", "Entrance tickets", "Meals", "Toll fees"],
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=500&fit=crop&auto=format",
    active: true,
    driverOptional: true,
    selfDrivePrice: 250000,
  },
  {
    id: "airport-ubud",
    name: "Airport ↔ Ubud",
    type: "airport-shuttle",
    description:
      "Direct private transfer between Ngurah Rai International Airport and Ubud. Comfortable, door-to-door, no shared shuttles.",
    startingPrice: 400000,
    duration: "~90 minutes",
    destinations: ["Ngurah Rai Airport", "Ubud"],
    inclusions: [
      "Meet & greet at arrival hall",
      "Driver with name board",
      "Air-conditioned vehicle",
      "Toll fees",
    ],
    exclusions: ["Airport parking fee (IDR 5,000)", "Gratuity"],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop&auto=format",
    active: true,
  },
  {
    id: "airport-seminyak",
    name: "Airport ↔ Seminyak / Kuta",
    type: "airport-shuttle",
    description:
      "Fast and reliable private transfer between the airport and Seminyak, Kuta, Legian, or Canggu. Fixed pricing, no surprises.",
    startingPrice: 200000,
    duration: "~20–45 minutes",
    destinations: [
      "Ngurah Rai Airport",
      "Seminyak",
      "Kuta",
      "Legian",
      "Canggu",
    ],
    inclusions: [
      "Driver with name board",
      "Air-conditioned vehicle",
      "Toll fees",
    ],
    exclusions: ["Airport parking fee (IDR 5,000)", "Gratuity"],
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=500&fit=crop&auto=format",
    active: true,
  },
  {
    id: "airport-nusa-dua",
    name: "Airport ↔ Nusa Dua / Jimbaran",
    type: "airport-shuttle",
    description:
      "Private transfer to Nusa Dua resort areas or Jimbaran. Quick and direct, no sharing with strangers.",
    startingPrice: 150000,
    duration: "~20–30 minutes",
    destinations: ["Ngurah Rai Airport", "Nusa Dua", "Jimbaran"],
    inclusions: ["Driver with name board", "Air-conditioned vehicle"],
    exclusions: ["Airport parking fee (IDR 5,000)", "Gratuity"],
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&auto=format",
    active: true,
  },
  {
    id: "bali-bromo",
    name: "Bali → Bromo (Intercity)",
    type: "intercity",
    description:
      "Overland transfer from Bali to Mount Bromo in East Java, including ferry crossing. A classic bucket-list route done in comfort.",
    startingPrice: 1200000,
    duration: "12–14 hours",
    destinations: ["Bali", "Probolinggo", "Cemoro Lawang"],
    inclusions: [
      "Private vehicle",
      "Ferry crossing (Bali–Java)",
      "English-speaking driver",
    ],
    exclusions: ["Accommodation", "National park entrance ticket", "Meals"],
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=500&fit=crop&auto=format",
    active: true,
  },
  {
    id: "bali-ijen",
    name: "Bali → Kawah Ijen (Intercity)",
    type: "intercity",
    description:
      "Overnight transfer from Bali to Kawah Ijen crater, East Java. Witness the famous blue flame phenomenon at dawn.",
    startingPrice: 1500000,
    duration: "Overnight (depart ~10 PM)",
    destinations: ["Bali", "Banyuwangi", "Kawah Ijen"],
    inclusions: [
      "Private vehicle",
      "Ferry crossing (Bali–Java)",
      "Driver accompanies to trailhead",
    ],
    exclusions: [
      "Accommodation",
      "National park entrance ticket",
      "Crater trekking guide",
    ],
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&h=500&fit=crop&auto=format",
    active: true,
  },
]

export const tours: Tour[] = [
  {
    id: "ubud-full-day",
    name: "Ubud Cultural Full Day",
    category: "ubud",
    regionId: "ubud",
    description:
      "An immersive day through Ubud's soul — terraced rice fields, sacred temples, traditional craft villages, and the famous Monkey Forest. The quintessential Bali experience.",
    startingPrice: 450000,
    duration: "10–11 hours",
    tags: ["culture", "nature"],
    destinations: [
      "Tegalalang Rice Terrace",
      "Tirta Empul Temple",
      "Ubud Monkey Forest",
      "Kemenuh Butterfly Park",
    ],
    itinerary: [
      { time: "08:00", activity: "Pickup from your hotel" },
      {
        time: "09:30",
        activity:
          "Tegalalang Rice Terrace — famous layered terraces, photo stops",
      },
      {
        time: "11:00",
        activity: "Tirta Empul Temple — holy spring water purification ritual",
      },
      { time: "12:30", activity: "Lunch at local warung (own expense)" },
      {
        time: "14:00",
        activity: "Ubud Monkey Forest — roam with 700+ long-tailed macaques",
      },
      { time: "15:30", activity: "Ubud Art Market & Palace stroll" },
      { time: "17:00", activity: "Return journey to hotel" },
      { time: "18:30", activity: "Drop-off at hotel" },
    ],
    inclusions: [
      "Private air-conditioned vehicle",
      "English-speaking driver-guide",
      "Bottled water",
      "Fuel",
    ],
    exclusions: [
      "Entrance tickets (~IDR 50,000–80,000/person)",
      "Meals",
      "Gratuity",
    ],
    images: [
      "https://images.unsplash.com/photo-1558005530-a7958896ec60?w=1200&h=700&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&h=700&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1711609110590-5ad5c4599e56?w=1200&h=700&fit=crop&auto=format",
    ],
    active: true,
  },
  {
    id: "ubud-sunrise",
    name: "Ubud Sunrise & Waterfall",
    category: "ubud",
    regionId: "ubud",
    description:
      "Rise before dawn for golden-hour rice terrace views, then cool off at a hidden jungle waterfall. Best for photographers and adventurers.",
    startingPrice: 550000,
    duration: "9–10 hours",
    tags: ["nature", "adventure"],
    destinations: [
      "Tegalalang at Sunrise",
      "Kanto Lampo Waterfall",
      "Tegenungan Waterfall",
    ],
    itinerary: [
      { time: "05:30", activity: "Early pickup from hotel" },
      {
        time: "06:45",
        activity:
          "Sunrise at Tegalalang Rice Terrace — golden hour photography",
      },
      {
        time: "08:30",
        activity: "Traditional Balinese breakfast at a local café",
      },
      {
        time: "10:00",
        activity: "Kanto Lampo Waterfall — swim in natural pools",
      },
      {
        time: "12:00",
        activity: "Tegenungan Waterfall — iconic cascading falls",
      },
      { time: "13:30", activity: "Lunch at riverside restaurant" },
      { time: "15:00", activity: "Return to hotel" },
    ],
    inclusions: ["Private vehicle", "Driver-guide", "Bottled water"],
    exclusions: ["Entrance tickets", "Meals", "Gratuity"],
    images: [
      "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?w=1200&h=700&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558005530-a7958896ec60?w=1200&h=700&fit=crop&auto=format",
    ],
    active: true,
  },
  {
    id: "uluwatu-sunset",
    name: "Uluwatu Sunset & Kecak Fire Dance",
    category: "south-bali",
    regionId: "pecatu",
    description:
      "Bali's most dramatic cliff-top temple at golden hour, followed by the ancient Kecak fire dance performed at sunset. Unforgettable.",
    startingPrice: 350000,
    duration: "6–7 hours",
    tags: ["culture", "beach"],
    destinations: ["Uluwatu Temple", "Jimbaran Bay Seafood Dinner"],
    itinerary: [
      { time: "14:00", activity: "Pickup from hotel" },
      {
        time: "15:30",
        activity: "Arrive Uluwatu Temple — explore sea temple on 70m cliff",
      },
      {
        time: "18:00",
        activity: "Kecak Fire Dance performance at the clifftop amphitheatre",
      },
      {
        time: "19:30",
        activity:
          "Jimbaran Bay — sunset seafood dinner on the beach (own expense)",
      },
      { time: "21:00", activity: "Return to hotel" },
    ],
    inclusions: ["Private vehicle", "Driver-guide", "Bottled water"],
    exclusions: ["Kecak dance ticket (~IDR 150,000)", "Dinner", "Gratuity"],
    images: [
      "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=1200&h=700&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1532186651327-6ac23687d189?w=1200&h=700&fit=crop&auto=format",
    ],
    active: true,
  },
  {
    id: "nusa-penida-day",
    name: "Nusa Penida Day Trip",
    category: "south-bali",
    regionId: "nusa-penida",
    description:
      "A full day on Bali's most dramatic island — Kelingking's T-Rex cliff, broken beach arch, crystal bay snorkeling. Includes fast boat transfer.",
    startingPrice: 750000,
    duration: "Full day",
    tags: ["beach", "adventure"],
    destinations: [
      "Kelingking Beach",
      "Broken Beach",
      "Angel's Billabong",
      "Crystal Bay",
    ],
    itinerary: [
      { time: "07:00", activity: "Hotel pickup, drive to Sanur harbour" },
      { time: "08:30", activity: "Fast boat to Nusa Penida (~45 minutes)" },
      {
        time: "09:30",
        activity: "Kelingking Beach viewpoint — iconic T-Rex cliff",
      },
      { time: "11:00", activity: "Broken Beach & Angel's Billabong" },
      { time: "12:30", activity: "Lunch at local warung" },
      {
        time: "14:00",
        activity: "Crystal Bay — snorkeling with mola mola (seasonal)",
      },
      { time: "16:30", activity: "Fast boat back to Sanur" },
      { time: "18:00", activity: "Return to hotel" },
    ],
    inclusions: [
      "Hotel pickup",
      "Fast boat return ticket",
      "Private vehicle on Nusa Penida",
      "Local guide",
    ],
    exclusions: [
      "Entrance tickets",
      "Snorkeling gear rental",
      "Meals",
      "Gratuity",
    ],
    images: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&h=700&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1559628233-100c798642d4?w=1200&h=700&fit=crop&auto=format",
    ],
    active: true,
  },
  {
    id: "kintamani-volcano",
    name: "Kintamani Volcano & Coffee Plantation",
    category: "central-bali",
    regionId: "kintamani",
    description:
      "Lake Batur from the Kintamani caldera rim, plus a stop at a traditional Luwak coffee plantation in the highlands. Stunning volcanic scenery.",
    startingPrice: 400000,
    duration: "8–9 hours",
    tags: ["nature", "adventure"],
    destinations: [
      "Kintamani",
      "Lake Batur",
      "Coffee Plantation",
      "Pura Kehen Temple",
    ],
    itinerary: [
      { time: "08:00", activity: "Hotel pickup" },
      { time: "09:30", activity: "Coffee & spice plantation — free tasting" },
      {
        time: "11:00",
        activity:
          "Kintamani viewpoint — panoramic view of Mt. Batur & Lake Batur",
      },
      { time: "12:00", activity: "Lunch with volcano view (own expense)" },
      {
        time: "13:30",
        activity:
          "Pura Kehen Temple — Bali's second most important state temple",
      },
      { time: "15:00", activity: "Penglipuran Traditional Village" },
      { time: "17:00", activity: "Return to hotel" },
    ],
    inclusions: [
      "Private vehicle",
      "Driver-guide",
      "Coffee plantation tour & tasting",
      "Bottled water",
    ],
    exclusions: ["Entrance tickets", "Meals", "Gratuity"],
    images: [
      "https://images.unsplash.com/photo-1711609110590-5ad5c4599e56?w=1200&h=700&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&h=700&fit=crop&auto=format",
    ],
    active: true,
  },
  {
    id: "lovina-dolphins",
    name: "Lovina Dolphins & Handara Gate",
    category: "north-bali",
    regionId: "singaraja",
    description:
      "Wake up early for wild dolphin watching in Lovina Bay, then visit Bali's famous Handara golf gate and the serene Bedugul lake temples.",
    startingPrice: 600000,
    duration: "Full day",
    tags: ["beach", "nature"],
    destinations: [
      "Lovina Bay",
      "Handara Gate",
      "Pura Ulun Danu Bratan",
      "Gitgit Waterfall",
    ],
    itinerary: [
      { time: "04:30", activity: "Early hotel pickup" },
      {
        time: "06:30",
        activity: "Lovina Bay — sunrise dolphin watching boat trip",
      },
      { time: "08:30", activity: "Breakfast at local café" },
      {
        time: "10:00",
        activity: "Handara Golf Gate — iconic mountain backdrop photo stop",
      },
      {
        time: "11:30",
        activity: "Pura Ulun Danu Bratan — floating lake temple",
      },
      { time: "13:00", activity: "Lunch at Bedugul highlands" },
      { time: "14:30", activity: "Gitgit Waterfall hike" },
      { time: "17:00", activity: "Return journey to hotel" },
    ],
    inclusions: [
      "Private vehicle",
      "Dolphin boat trip",
      "Driver-guide",
      "Bottled water",
    ],
    exclusions: ["Entrance tickets", "Meals", "Gratuity"],
    images: [
      "https://images.unsplash.com/photo-1711609110590-5ad5c4599e56?w=1200&h=700&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&h=700&fit=crop&auto=format",
    ],
    active: true,
  },
  {
    id: "sekumpul-waterfall",
    name: "Sekumpul & Fiji Waterfall Trek",
    category: "north-bali",
    regionId: "singaraja",
    description:
      "Bali's most spectacular waterfall — a cluster of seven cascades deep in a lush jungle valley. A proper adventure with an easy guided jungle trek.",
    startingPrice: 650000,
    duration: "9–10 hours",
    tags: ["adventure", "nature"],
    destinations: [
      "Sekumpul Waterfall",
      "Fiji Waterfall",
      "Singsing Waterfall",
    ],
    itinerary: [
      { time: "07:00", activity: "Hotel pickup" },
      { time: "09:30", activity: "Arrive at Sekumpul — local guide briefing" },
      {
        time: "10:00",
        activity:
          "Jungle trek down to Fiji Waterfall (30 min, moderate difficulty)",
      },
      {
        time: "11:00",
        activity: "Trek to Sekumpul — seven cascades, swim in natural pools",
      },
      { time: "13:00", activity: "Trek back up (30 min)" },
      { time: "13:30", activity: "Lunch at local warung" },
      { time: "15:00", activity: "Optional: Singsing Waterfall short stop" },
      { time: "17:00", activity: "Return to hotel" },
    ],
    inclusions: [
      "Private vehicle",
      "Local trekking guide",
      "Driver-guide",
      "Bottled water",
    ],
    exclusions: ["Entrance ticket (~IDR 20,000)", "Meals", "Gratuity"],
    images: [
      "https://images.unsplash.com/photo-1682406187130-84561b4e0e78?w=1200&h=700&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?w=1200&h=700&fit=crop&auto=format",
    ],
    active: true,
  },
]

export const inquiries: Inquiry[] = [
  {
    id: "inq-001",
    customerName: "Sarah Mitchell",
    phone: "+44 7700 900123",
    service: "Ubud Cultural Full Day",
    travelDate: "2026-09-15",
    people: 2,
    pickup: "The Layar Seminyak",
    destination: "Ubud",
    status: "confirmed",
    notes: "Vegetarian meals preferred. Anniversary trip.",
    createdAt: "2026-09-01",
  },
  {
    id: "inq-002",
    customerName: "Thomas & Anna Bergmann",
    phone: "+49 30 12345678",
    service: "Private Driver — Full Day",
    travelDate: "2026-09-18",
    people: 4,
    pickup: "Alaya Resort Ubud",
    destination: "Custom — Besakih, Amed, Candidasa",
    status: "contacted",
    notes: "Want to see east Bali. Flexible on timing.",
    createdAt: "2026-09-02",
  },
  {
    id: "inq-003",
    customerName: "Ryo Tanaka",
    phone: "+81 90 1234 5678",
    service: "Airport ↔ Ubud",
    travelDate: "2026-09-10",
    people: 1,
    pickup: "Ngurah Rai Airport Terminal International",
    destination: "Bisma Eight Ubud",
    status: "completed",
    notes: "Flight SQ: arrives 14:35",
    createdAt: "2026-09-03",
  },
  {
    id: "inq-004",
    customerName: "Laura Chen",
    phone: "+65 9123 4567",
    service: "Nusa Penida Day Trip",
    travelDate: "2026-09-20",
    people: 3,
    pickup: "COMO Uma Seminyak",
    destination: "Nusa Penida",
    status: "new",
    notes: "Are wetsuits provided? One person is a beginner swimmer.",
    createdAt: "2026-09-04",
  },
  {
    id: "inq-005",
    customerName: "Marco Ferrari",
    phone: "+39 02 1234567",
    service: "Bali → Bromo (Intercity)",
    travelDate: "2026-09-25",
    people: 2,
    pickup: "Alaya Ubud",
    destination: "Cemoro Lawang, East Java",
    status: "new",
    notes: "Need accommodation suggestions near Bromo.",
    createdAt: "2026-09-04",
  },
]

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildBookingMessage(params: {
  service: string
  date?: string
  people?: number
  pickup?: string
  notes?: string
}): string {
  const lines = [
    `Hi! I'd like to book the following service:`,
    ``,
    `📌 Service: ${params.service}`,
    params.date ? `📅 Date: ${params.date}` : "",
    params.people
      ? `👥 Passengers: ${params.people} ${
          params.people === 1 ? "person" : "people"
        }`
      : "",
    params.pickup ? `📍 Pickup: ${params.pickup}` : "",
    params.notes ? `📝 Notes: ${params.notes}` : "",
    ``,
    `Please confirm availability and pricing. Thank you!`,
  ]
  return lines.filter(Boolean).join("\n")
}

// Native pixel dimensions of bali-map.png — keeps the map at its real
// proportions so the illustration is never stretched or cropped.
export const MAP_ASPECT_RATIO = "1488 / 801"

export interface DestinationRegion {
  id: string
  name: string
  tagline: string
  x: number
  y: number
  category: TourCategory
  // Richer area metadata, inspired by a proposed Region→Area→Destination→
  // Package content model — optional since user-created custom pins (see
  // ../data/customRegions.ts) only ever set the fields above.
  description?: string
  suitableFor?: string[]
  vibe?: string[]
  bestFor?: string[]
  recommendedStay?: string
  nearbyAreas?: string[]
}

export const destinationRegions: DestinationRegion[] = [
  {
    id: "singaraja",
    name: "Singaraja",
    tagline: "Bali's northern coast with dolphin bays and jungle waterfalls",
    x: 48,
    y: 8,
    category: "north-bali",
    description:
      "A quieter northern Bali base surrounded by black-sand beaches, waterfalls, traditional villages and access to Lovina's famous dolphin-watching waters.",
    suitableFor: ["nature", "adventure", "wildlife", "photography", "relaxation"],
    vibe: ["quiet", "nature", "local"],
    bestFor: ["waterfalls", "dolphin watching", "nature", "slow travel"],
    recommendedStay: "2-3 nights",
    nearbyAreas: ["bedugul", "amed"],
  },
  {
    id: "bedugul",
    name: "Bedugul",
    tagline: "Cool highland lake temple, home to Pura Ulun Danu Bratan",
    x: 47,
    y: 25,
    category: "north-bali",
    description:
      "A cool mountainous region centered around Lake Beratan, with temples, botanical gardens, strawberry farms and scenic highland landscapes.",
    suitableFor: ["nature", "culture", "family", "photography", "relaxation"],
    vibe: ["cool", "peaceful", "nature"],
    bestFor: ["lake views", "temples", "highlands", "family trips", "nature"],
    recommendedStay: "1-2 nights",
    nearbyAreas: ["singaraja", "ubud", "kintamani"],
  },
  {
    id: "kintamani",
    name: "Kintamani",
    tagline: "Bali's highland region with stunning volcanic views",
    x: 72,
    y: 32,
    category: "central-bali",
    description:
      "A mountainous region dominated by Mount Batur and Lake Batur, offering sunrise hikes, jeep adventures, hot springs and volcanic scenery.",
    suitableFor: ["adventure", "nature", "hiking", "sunrise", "photography"],
    vibe: ["mountain", "adventure", "cool"],
    bestFor: [
      "Mount Batur",
      "sunrise",
      "jeep tours",
      "hot springs",
      "volcanic landscapes",
    ],
    recommendedStay: "1-2 nights",
    nearbyAreas: ["ubud", "bedugul", "amed"],
  },
  {
    id: "ubud",
    name: "Ubud",
    tagline: "Cultural heart of Bali — rice terraces, temples & art villages",
    x: 56,
    y: 39,
    category: "ubud",
    description:
      "A lush inland destination centered around Balinese culture, rice fields, temples, art, cafés, wellness experiences and jungle landscapes.",
    suitableFor: [
      "culture",
      "nature",
      "wellness",
      "food",
      "photography",
      "relaxation",
    ],
    vibe: ["cultural", "artistic", "lush", "peaceful"],
    bestFor: ["culture", "rice terraces", "temples", "cafés", "spas", "yoga"],
    recommendedStay: "3-5 nights",
    nearbyAreas: ["kintamani", "bedugul"],
  },
  {
    id: "kuta",
    name: "Kuta",
    tagline: "Bali's original beach town — sunsets, surf, and nightlife",
    x: 38,
    y: 57,
    category: "south-bali",
    description:
      "A lively beach destination with beginner-friendly surf, shopping, restaurants, nightlife and easy airport access.",
    suitableFor: ["surfing", "nightlife", "shopping", "family", "budget"],
    vibe: ["lively", "busy", "social"],
    bestFor: ["surfing", "nightlife", "sunset", "shopping", "budget travel"],
    recommendedStay: "2-3 nights",
    nearbyAreas: ["sanur", "jimbaran", "pecatu"],
  },
  {
    id: "sanur",
    name: "Sanur",
    tagline: "Laid-back east coast, gateway to Nusa Penida's cliffs",
    x: 60,
    y: 54,
    category: "south-bali",
    description:
      "A calm coastal area with shallow reef-protected waters, a long beachfront promenade, sunrise views and convenient fast-boat connections to Nusa Penida and Nusa Lembongan.",
    suitableFor: ["sunrise", "family", "relaxation", "cycling", "snorkeling"],
    vibe: ["chill", "peaceful", "family-friendly"],
    bestFor: [
      "sunrise",
      "cycling",
      "snorkeling",
      "families",
      "Nusa Penida day trips",
    ],
    recommendedStay: "2-4 nights",
    nearbyAreas: ["kuta", "nusa-penida"],
  },
  {
    id: "jimbaran",
    name: "Jimbaran",
    tagline: "Fishing village famous for beachfront seafood at sunset",
    x: 40,
    y: 66,
    category: "south-bali",
    description:
      "A relaxed southern bay known for seafood dinners directly on the beach, beautiful sunsets and a more romantic atmosphere.",
    suitableFor: ["sunset", "food", "romantic", "relaxation", "family"],
    vibe: ["romantic", "chill", "coastal"],
    bestFor: ["sunset dinner", "seafood", "couples", "relaxing beach time"],
    recommendedStay: "1-3 nights",
    nearbyAreas: ["kuta", "pecatu", "nusa-dua"],
  },
  {
    id: "pecatu",
    name: "Pecatu",
    tagline: "Home to Uluwatu's cliff temple and the Bukit's surf beaches",
    x: 47,
    y: 87,
    category: "south-bali",
    description:
      "The southern Bukit Peninsula's cliffside destination, known for Uluwatu Temple, world-class surf beaches, beach clubs and spectacular sunsets.",
    suitableFor: ["surfing", "sunset", "adventure", "romantic", "photography"],
    vibe: ["dramatic", "luxury", "surf", "romantic"],
    bestFor: ["Uluwatu", "surfing", "cliff views", "sunset", "beach clubs"],
    recommendedStay: "2-4 nights",
    nearbyAreas: ["jimbaran", "nusa-dua"],
  },
  {
    id: "nusa-dua",
    name: "Nusa Dua",
    tagline: "Manicured resort peninsula with calm bays and sunset views",
    x: 57,
    y: 78,
    category: "south-bali",
    description:
      "A polished resort area with landscaped beaches, calm water, luxury hotels, family attractions and water sports.",
    suitableFor: ["family", "luxury", "relaxation", "beach", "watersports"],
    vibe: ["luxury", "quiet", "family-friendly"],
    bestFor: [
      "resort holidays",
      "families",
      "watersports",
      "beach relaxation",
    ],
    recommendedStay: "2-4 nights",
    nearbyAreas: ["jimbaran", "pecatu", "sanur"],
  },
  {
    id: "nusa-penida",
    name: "Nusa Penida",
    tagline: "Dramatic island cliffs, turquoise bays, and snorkeling",
    x: 80,
    y: 76,
    category: "south-bali",
    description:
      "A rugged island southeast of Bali known for dramatic cliffs, beaches, viewpoints, snorkeling and manta encounters.",
    suitableFor: ["adventure", "snorkeling", "photography", "beach", "nature"],
    vibe: ["rugged", "adventurous", "scenic"],
    bestFor: [
      "Kelingking",
      "snorkeling",
      "manta rays",
      "cliff viewpoints",
      "island adventures",
    ],
    recommendedStay: "2-3 nights",
    nearbyAreas: ["sanur"],
  },
  {
    id: "amed",
    name: "Amed",
    tagline: "Quiet east-coast villages with world-class snorkeling and diving",
    // Approximate placement on the island's eastern coastal bulge, past
    // Kintamani — nudge via the admin map's drag-to-reposition if it lands
    // off the coastline.
    x: 88,
    y: 24,
    category: "east-bali",
    description:
      "A string of traditional coastal villages with black-sand beaches, coral reefs, snorkeling, diving and spectacular views of Mount Agung.",
    suitableFor: [
      "snorkeling",
      "diving",
      "nature",
      "sunrise",
      "adventure",
      "relaxation",
    ],
    vibe: ["quiet", "authentic", "underwater", "slow"],
    bestFor: ["snorkeling", "diving", "sunrise", "freediving", "slow travel"],
    recommendedStay: "3-4 nights",
    nearbyAreas: ["kintamani", "singaraja"],
  },
]

export const categoryLabels: Record<TourCategory, string> = {
  ubud: "Ubud",
  "south-bali": "South Bali",
  "central-bali": "Central Bali",
  "north-bali": "North Bali",
  "east-bali": "East Bali",
}

export const tourTagLabels: Record<TourTag, string> = {
  adventure: "Adventure",
  beach: "Beach",
  nature: "Nature",
  culture: "Culture",
}

export const transportTypeLabels: Record<TransportType, string> = {
  "private-driver": "Private Driver",
  "airport-shuttle": "Airport Shuttle",
  intercity: "Intercity",
}
