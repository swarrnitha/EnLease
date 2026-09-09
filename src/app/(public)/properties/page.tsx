"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { propertyService, PropertyFilterParams } from "@/services/propertyService";
import { Property } from "@/types/property";
import { PropertyGrid } from "@/components/organisms/PropertyGrid";
import { PropertyFilters } from "@/components/organisms/PropertyFilters";
import { useWishlist } from "@/hooks/useWishlist";

function PropertiesContent() {
  const searchParams = useSearchParams();
  const initialCity = searchParams.get("city") || "all";
  const initialType = searchParams.get("propertyType") || "all";

  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<PropertyFilterParams>({
    city: initialCity,
    propertyType: initialType as any,
    status: "all",
    searchQuery: "",
  });

  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setIsLoading(true);
      try {
        const res = await propertyService.getProperties(filters);
        if (isMounted) {
          setProperties(res);
        }
      } catch {
        // ignore
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [filters]);

  const handleReset = () => {
    setFilters({
      city: "all",
      propertyType: "all",
      status: "all",
      searchQuery: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Industrial Properties & Parks</h1>
        <p className="mt-1 text-sm text-slate-600">
          Browse our portfolio of Grade-A industrial parks, warehousing hubs, and manufacturing units.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <PropertyFilters
            filters={filters}
            onFilterChange={(newFilters) => setFilters(newFilters)}
            onReset={handleReset}
          />
        </div>

        {/* Property Grid Results */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Showing <span className="font-bold text-slate-900">{properties.length}</span> properties
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 4].map((i) => (
                <div key={i} className="h-80 rounded-lg bg-slate-200 animate-pulse" />
              ))}
            </div>
          ) : (
            <PropertyGrid
              properties={properties}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading properties...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
