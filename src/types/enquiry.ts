export type RequirementType =
  | "Manufacturing"
  | "Warehousing"
  | "Logistics"
  | "Distribution"
  | "Built-to-Suit"
  | "Other";

export interface EnquiryRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
  preferredLocation: string;
  propertyId?: string;
  propertyName?: string;
  requirementType: RequirementType;
  spaceRequired: string;
  message: string;
}

export interface EnquiryResponse {
  success: boolean;
  referenceId: string;
  message: string;
  timestamp: string;
}
