import { DestinationRegion } from "./index"

const STORAGE_KEY = "bali-travel:custom-regions"
const OVERRIDES_KEY = "bali-travel:region-position-overrides"
const HIDDEN_KEY = "bali-travel:hidden-region-ids"

export type PositionOverrides = Record<string, { x: number; y: number }>

export function loadCustomRegions(): DestinationRegion[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as DestinationRegion[]) : []
  } catch {
    return []
  }
}

export function saveCustomRegions(regions: DestinationRegion[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(regions))
}

// Built-in pins live in source code and can't be rewritten from the
// browser, so moving one in admin just records a per-id x/y override here
// instead. Both the admin map and the public map apply these on top of the
// built-in defaults.
export function loadPositionOverrides(): PositionOverrides {
  try {
    const raw = localStorage.getItem(OVERRIDES_KEY)
    return raw ? (JSON.parse(raw) as PositionOverrides) : {}
  } catch {
    return {}
  }
}

export function savePositionOverrides(overrides: PositionOverrides) {
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(overrides))
}

export function applyPositionOverrides(
  regions: DestinationRegion[],
  overrides: PositionOverrides,
): DestinationRegion[] {
  return regions.map((region) =>
    overrides[region.id]
      ? { ...region, x: overrides[region.id].x, y: overrides[region.id].y }
      : region,
  )
}

// Built-in pins can't be deleted from source code either, so "deleting" one
// in admin just hides its id here — both maps filter it out, and admin
// offers a way to restore it since nothing was actually removed.
export function loadHiddenRegionIds(): string[] {
  try {
    const raw = localStorage.getItem(HIDDEN_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function saveHiddenRegionIds(ids: string[]) {
  localStorage.setItem(HIDDEN_KEY, JSON.stringify(ids))
}
