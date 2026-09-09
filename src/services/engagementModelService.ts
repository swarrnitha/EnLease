import { engagementModelsData } from "@/data/engagementModels";
import { EngagementModel } from "@/types/engagementModel";

export const engagementModelService = {
  async getEngagementModels(): Promise<EngagementModel[]> {
    return engagementModelsData;
  },

  async getEngagementModelBySlug(slug: string): Promise<EngagementModel | null> {
    const found = engagementModelsData.find((m) => m.slug === slug);
    return found || null;
  },
};
