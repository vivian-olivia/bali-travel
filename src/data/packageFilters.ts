import { destinations } from "./destinations"
import { destinationRegions, TourCategory } from "./index"
import { TravelPackage } from "./packages"

// Groups the free-form Destination.category values (beach, temple,
// waterfall, ...) into the handful of traveler-facing "what kind of place"
// filters the Tours page and homepage expose. A package matches a filter if
// any of the real places on its route falls into that group.
export type PlaceFilterKey =
  | "beach"
  | "mountain"
  | "waterfall"
  | "forest"
  | "watersport"
  | "temple"
  | "viewpoint"
  | "market"

export interface PlaceFilterDef {
  key: PlaceFilterKey
  label: string
  categories: string[]
}

export const placeFilterDefs: PlaceFilterDef[] = [
  { key: "beach", label: "Beaches", categories: ["beach"] },
  { key: "mountain", label: "Mountains & Lakes", categories: ["mountain", "lake"] },
  { key: "waterfall", label: "Waterfalls", categories: ["waterfall"] },
  {
    key: "forest",
    label: "Forests & Nature",
    categories: ["rice-terrace", "botanical-garden", "walking-trail"],
  },
  {
    key: "watersport",
    label: "Watersports",
    categories: [
      "water-sport",
      "snorkeling",
      "diving",
      "surfing",
      "water-park",
      "dive-site",
      "natural-pool",
    ],
  },
  { key: "temple", label: "Temples & Culture", categories: ["temple", "historical-site"] },
  {
    key: "viewpoint",
    label: "Viewpoints",
    categories: ["viewpoint", "natural-attraction", "coastal-landmark"],
  },
  { key: "market", label: "Markets & Villages", categories: ["market", "village"] },
]

const destinationById = new Map(destinations.map((d) => [d.id, d]))

/** The Destination.category values actually present on a package's route. */
export function getPackagePlaceCategories(pkg: TravelPackage): string[] {
  const categories = pkg.destinationIds
    .map((id) => destinationById.get(id)?.category)
    .filter((c): c is string => Boolean(c))
  return Array.from(new Set(categories))
}

export function packageMatchesFilter(
  pkg: TravelPackage,
  filterKey: PlaceFilterKey,
): boolean {
  const def = placeFilterDefs.find((f) => f.key === filterKey)
  if (!def) return false
  const placeCategories = getPackagePlaceCategories(pkg)
  return placeCategories.some((c) => def.categories.includes(c))
}

const regionById = new Map(destinationRegions.map((r) => [r.id, r]))

/** Broad region grouping (Ubud / South Bali / ...) a package belongs to, derived from its areaId. */
export function getPackageRegionCategory(pkg: TravelPackage): TourCategory | undefined {
  return regionById.get(pkg.areaId)?.category
}

export function getPackageAreaName(pkg: TravelPackage): string {
  return regionById.get(pkg.areaId)?.name ?? pkg.areaId
}
