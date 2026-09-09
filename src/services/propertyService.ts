import { propertiesData } from "@/data/properties";
import { locationsData } from "@/data/locations";
import { developersData } from "@/data/developers";
import { engagementModelsData } from "@/data/engagementModels";
import { Property, PropertyType, PropertyStatus } from "@/types/property";
import { LocationInfo } from "@/types/location";
import { Developer } from "@/types/developer";
import { EngagementModel } from "@/types/engagementModel";

export interface PropertyFilterParams {
  city?: string;
  propertyType?: PropertyType | "all";
  status?: PropertyStatus | "all";
  searchQuery?: string;
}

export const propertyService = {
  async getProperties(filters?: PropertyFilterParams): Promise<Property[]> {
    // Simulate API delay if needed or return immediately
    let results = [...propertiesData];

    if (!filters) return results;

    if (filters.city && filters.city !== "All" && filters.city !== "all") {
      results = results.filter(
        (p) => p.location.city.toLowerCase() === filters.city?.toLowerCase()
      );
    }

    if (filters.propertyType && filters.propertyType !== "all") {
      results = results.filter((p) => p.propertyType === filters.propertyType);
    }

    if (filters.status && filters.status !== "all") {
      results = results.filter((p) => p.status === filters.status);
    }

    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.location.city.toLowerCase().includes(q) ||
          p.location.region.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.developer.name.toLowerCase().includes(q)
      );
    }

    return results;
  },

  async getPropertyBySlug(slug: string): Promise<Property | null> {
    const found = propertiesData.find((p) => p.slug === slug);
    return found || null;
  },

  async getFeaturedProperties(): Promise<Property[]> {
    return propertiesData.filter((p) => p.featured);
  },
};
