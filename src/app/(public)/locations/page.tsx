import React from "react";
import Link from "next/link";
import { locationsData } from "@/data/locations";
import { Button } from "@/components/atoms/Button";
import { MapPin, ArrowRight } from "lucide-react";

export default function LocationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Industrial Corridors & Locations</h1>
        <p className="mt-1 text-sm text-slate-600">
          Explore premier industrial clusters and logistics corridors across South India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locationsData.map((loc) => (
          <div key={loc.id} className="card overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
              <img
                src={loc.image}
                alt={loc.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 right-3 z-20 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-200 block mb-1">
                  {loc.city}, {loc.state}
                </span>
                <h3 className="font-bold text-lg">{loc.title}</h3>
              </div>
            </div>

            <div className="p-6 flex flex-1 flex-col justify-between">
              <div>
                <p className="text-xs text-slate-600 mb-4 line-clamp-3">{loc.description}</p>
                <div className="space-y-1 mb-6 text-xs text-slate-500">
                  <p><strong className="text-slate-700">Key Hubs:</strong> {loc.keyHubs.join(", ")}</p>
                  <p><strong className="text-slate-700">Airports:</strong> {loc.airports}</p>
                </div>
              </div>

              <Link href={`/locations/${loc.slug}`}>
                <Button variant="outline" size="sm" className="w-full justify-center gap-1.5">
                  View Corridor Details <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
