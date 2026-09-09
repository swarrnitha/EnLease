import { EnquiryRequest, EnquiryResponse } from "@/types/enquiry";

export const enquiryService = {
  async submitEnquiry(data: EnquiryRequest): Promise<EnquiryResponse> {
    // Simulate backend submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const refId = `ENQ-${Math.floor(100000 + Math.random() * 900000)}`;

    return {
      success: true,
      referenceId: refId,
      message: "Enquiry submitted successfully. Our industrial leasing team will contact you within 24 hours.",
      timestamp: new Date().toISOString(),
    };
  },
};
