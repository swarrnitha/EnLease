import { developersData } from "@/data/developers";
import { Developer } from "@/types/developer";

export const developerService = {
  async getDevelopers(): Promise<Developer[]> {
    return developersData;
  },

  async getDeveloperBySlug(slug: string): Promise<Developer | null> {
    const found = developersData.find((d) => d.slug === slug);
    return found || null;
  },
};
