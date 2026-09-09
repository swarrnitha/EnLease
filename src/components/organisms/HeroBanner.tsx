"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Select } from "@/components/atoms/Select";
import { CITIES, PROPERTY_TYPES } from "@/constants/appConstants";
import { Search, MapPin, Building } from "lucide-react";

export const HeroBanner: React.FC = () => {
  const router = useRouter();
  const [city, setCity] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city !== "all") params.set("city", city);
    if (propertyType !== "all") params.set("propertyType", propertyType);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden py-24 lg:py-32">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="/images/properties/oragadam/park-overview.jpg"
          alt="Industrial Park Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
            Grade-A Industrial & Warehousing Parks
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Industrial spaces built for business.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
            Discover strategically located industrial and warehousing spaces designed for manufacturing, logistics, storage, and long-term business growth.
          </p>

          {/* Search Box Card */}
          <form
            onSubmit={handleSearch}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 rounded-lg shadow-xl border border-slate-200"
          >
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin className="h-3 w-3 text-[var(--color-primary)]" /> Location / City
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c === "All" ? "All Locations" : c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Building className="h-3 w-3 text-[var(--color-primary)]" /> Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                {PROPERTY_TYPES.map((pt) => (
                  <option key={pt.value} value={pt.value}>
                    {pt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <Button type="submit" variant="primary" size="lg" className="w-full justify-center gap-2 h-[42px]">
                <Search className="h-4 w-4" /> Search Properties
              </Button>
            </div>
          </form>

          {/* Quick Metrics */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-800">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">10M+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Sq. Ft. Portfolio</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">6+ hubs</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Strategic Corridors</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">Grade-A</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Specifications</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Compliance Assured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
