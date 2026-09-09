import { EngagementModel } from "@/types/engagementModel";

export const engagementModelsData: EngagementModel[] = [
  {
    id: "model-bts-lease",
    title: "Built-to-Suit Lease",
    slug: "built-to-suit-lease",
    shortDescription: "Custom-engineered industrial or warehousing space built exactly to your operational specifications under a long-term lease.",
    description: "Our Built-to-Suit (BTS) lease model provides end-to-end development solutions tailored to unique operational requirements. From specialized clear heights and heavy floor load capacities to custom dock configurations and office layouts, we design, construct, and lease the facility while you focus on core business operations.",
    suitableFor: [
      "Large Manufacturing Plants",
      "Automotive Assembly Units",
      "Specialized Cold Storage & Pharma",
      "Automated Fulfillment Centers",
    ],
    benefits: [
      "Zero upfront capital expenditure (CapEx) on land and construction",
      "Customized layout optimized for your supply chain workflow",
      "Long-term lease security with institutional maintenance",
      "Sustainable green building features reducing operational costs",
    ],
    image: "/images/common/bts-lease.jpg",
  },
  {
    id: "model-bts-purchase",
    title: "Built-to-Suit Lease with Purchase Option",
    slug: "built-to-suit-lease-with-purchase-option",
    shortDescription: "Build-to-suit flexibility with a structured option to acquire the asset over time.",
    description: "Combine the operational advantages of a custom-built facility with long-term asset ownership strategy. This model allows businesses to lease the custom-developed industrial asset with a pre-agreed option to purchase the facility upon maturity of the lease term.",
    suitableFor: [
      "Growing Manufacturing Enterprises",
      "Established Logistics Operators",
      "Enterprises seeking phased balance-sheet asset acquisition",
    ],
    benefits: [
      "Initial operational flexibility without immediate capital lock-in",
      "Pre-determined acquisition terms and valuation roadmap",
      "Full compliance with industrial zoning and environmental norms",
    ],
    image: "/images/common/bts-purchase.jpg",
  },
  {
    id: "model-standard-lease",
    title: "Standard Industrial & Warehouse Lease",
    slug: "standard-industrial-warehouse-lease",
    shortDescription: "Plug-and-play Grade-A ready-to-occupy spaces for immediate deployment.",
    description: "Immediate availability across our established Grade-A industrial parks in Chennai, Coimbatore, and Bengaluru. Ideal for businesses looking to scale operations rapidly without waiting for long construction cycles.",
    suitableFor: [
      "3PL Service Providers",
      "E-commerce Distribution Hubs",
      "FMCG & Retail Storage",
      "Light Assembly & Packaging",
    ],
    benefits: [
      "Immediate occupancy within days of agreement",
      "Standardized Grade-A specifications with pre-installed docks and fire safety",
      "Professional park management, 24/7 security, and common utility maintenance",
    ],
    image: "/images/common/standard-lease.jpg",
  },
  {
    id: "model-epc-client-land",
    title: "EPC on Client Land",
    slug: "epc-on-client-land",
    shortDescription: "Turnkey Engineering, Procurement, and Construction (EPC) services on your own land parcel.",
    description: "Leverage Casagrand's institutional construction expertise, vendor networks, and engineering excellence to develop industrial facilities directly on land owned by your organization.",
    suitableFor: [
      "Corporates owning land parcels seeking turnkey builders",
      "Expansions of existing manufacturing plants",
    ],
    benefits: [
      "Single-point accountability from design to handover",
      "Strict adherence to timelines and budget certainty",
      "World-class engineering standards and safety compliances",
    ],
    image: "/images/common/epc-land.jpg",
  },
];
