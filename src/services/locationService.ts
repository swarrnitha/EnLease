import { locationsData } from "@/data/locations";
import { LocationInfo } from "@/types/location";

export const locationService = {
  async getLocations(): Promise<LocationInfo[]> {
    return locationsData;
  },

  async getLocationBySlug(slug: string): Promise<LocationInfo | null> {
    const found = locationsData.find((l) => l.slug === slug);
    return found || null;
  },
};
