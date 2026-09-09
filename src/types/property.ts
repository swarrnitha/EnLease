export type PropertyType =
  | "industrial"
  | "warehouse"
  | "logistics"
  | "manufacturing"
  | "built_to_suit";

export type PropertyStatus =
  | "ready"
  | "under-development"
  | "upcoming"
  | "leased";

export interface PropertyImage {
  url: string;
  caption: string;
}

export interface Connectivity {
  highway?: string;
  airport?: string;
  seaport?: string;
  railway?: string;
  distanceToCity?: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  developer: {
    id: string;
    name: string;
    slug: string;
  };
  location: {
    city: string;
    state: string;
    region: string;
    address: string;
    latitude?: number;
    longitude?: number;
  };
  propertyType: PropertyType;
  status: PropertyStatus;
  landArea?: {
    value: number;
    unit: "acres" | "sqft";
  };
  leasingArea?: {
    value: number;
    unit: "sqft";
  };
  readiness?: string;
  connectivity?: Connectivity;
  description: string;
  images: PropertyImage[];
  brochure?: string;
  features?: string[];
  suitableFor?: string[];
  engagementModels?: string[];
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}
