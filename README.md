# EnLease — Industrial Leasing Platform

> **Project:** EnLease  
> **Framework:** Next.js 16 (App Router)  
> **Language:** TypeScript (Strict Mode)  
> **Styling:** Tailwind CSS v4  
> **Icons:** Lucide React  

---

## 1. Project Overview

**EnLease** is an industrial and warehousing property leasing platform designed following the architectural organization and coding conventions of Hoardify Frontend Architecture, adapted specifically for the industrial real estate domain with verified data from Casagrand Industrial & Warehousing.

---

## 2. Architecture & Layering

EnLease adheres strictly to a layered and modular frontend architecture:

```text
UI (Pages)
  ↓
Features / Components
  ↓
Hooks & State
  ↓
Services / API Layer
  ↓
Data Models / Types
```

---

## 3. Folder Structure

```
enlease/
├── public/
│   └── images/
│       ├── properties/
│       ├── locations/
│       └── developers/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx (HomePage)
│   │   │   ├── properties/
│   │   │   ├── locations/
│   │   │   ├── developers/
│   │   │   ├── models/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── enquire/
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── atoms/ (Button, Input, Textarea, Select, Badge)
│   │   ├── molecules/ (PropertyCard, EmptyState)
│   │   └── organisms/ (Navbar, Footer, HeroBanner, PropertyGrid, PropertyFilters, PropertyConnectivity, EngagementModelsGrid, EnquiryForm)
│   ├── data/ (properties.ts, locations.ts, developers.ts, engagementModels.ts)
│   ├── hooks/ (useWishlist.ts, useDebounce.ts)
│   ├── services/ (propertyService.ts, locationService.ts, developerService.ts, enquiryService.ts)
│   ├── types/ (property.ts, location.ts, developer.ts, enquiry.ts, engagementModel.ts)
│   ├── utils/ (formatters.ts)
│   └── constants/ (appConstants.ts)
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 4. Running Locally

```bash
cd enlease
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 5. Build & Verification

```bash
npm run build
npm run lint
```
