import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locationService } from "@/services/locationService";
import { propertyService } from "@/services/propertyService";
import { PropertyGrid } from "@/components/organisms/PropertyGrid";
import { Button } from "@/components/atoms/Button";
import { MapPin, ArrowLeft, Compass, Truck, Plane, Ship } from "lucide-react";

interface LocationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function LocationDetailPage({ params }: LocationDetailPageProps) {
  const { slug } = await params;
  const location = await locationService.getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const allProperties = await propertyService.getProperties();
  const locationProperties = allProperties.filter(
    (p) => p.location.city.toLowerCase() === location.city.toLowerCase()
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/locations" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Locations
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 mb-12 shadow-md">
          <div className="absolute inset-0 z-0 opacity-40">
            <img src={location.image} alt={location.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
              {location.city}, {location.state}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{location.title}</h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">{location.description}</p>
          </div>
        </div>

        {/* Hub Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Industrial Hubs</p>
            <ul className="space-y-1 text-sm font-medium text-slate-800">
              {location.keyHubs.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" /> {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Major Highways</p>
            <ul className="space-y-1 text-sm font-medium text-slate-800">
              {location.majorHighways.map((hw, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-[var(--color-primary)] shrink-0" /> {hw}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Air & Seaport Connectivity</p>
            <div className="space-y-2 text-sm text-slate-800">
              <p className="flex items-center gap-2"><Plane className="h-4 w-4 text-[var(--color-primary)] shrink-0" /> {location.airports}</p>
              <p className="flex items-center gap-2"><Ship className="h-4 w-4 text-[var(--color-primary)] shrink-0" /> {location.seaports}</p>
            </div>
          </div>
        </div>

        {/* Properties in this Location */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
            Industrial Properties in {location.title}
          </h2>
          <PropertyGrid properties={locationProperties} />
        </div>
      </div>
    </div>
  );
};
