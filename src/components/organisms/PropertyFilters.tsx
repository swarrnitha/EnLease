"use client";

import React from "react";
import { CITIES, PROPERTY_TYPES, PROPERTY_STATUSES } from "@/constants/appConstants";
import { PropertyFilterParams } from "@/services/propertyService";
import { Search, RotateCcw } from "lucide-react";

interface PropertyFiltersProps {
  filters: PropertyFilterParams;
  onFilterChange: (filters: PropertyFilterParams) => void;
  onReset: () => void;
}

export const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  filters,
  onFilterChange,
  onReset,
}) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h3 className="font-semibold text-slate-900 text-base">Filter Properties</h3>
        <button
          onClick={onReset}
          className="text-xs text-slate-500 hover:text-[var(--color-primary)] flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Reset Filters
        </button>
      </div>

      {/* Search Input */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Search Keyword
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search parks, region, features..."
            value={filters.searchQuery || ""}
            onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
            className="w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
          />
        </div>
      </div>

      {/* City Filter */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Location / City
        </label>
        <select
          value={filters.city || "all"}
          onChange={(e) => onFilterChange({ ...filters, city: e.target.value })}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
        >
          {CITIES.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? "All Locations" : c}
            </option>
          ))}
        </select>
      </div>

      {/* Property Type Filter */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Property Type
        </label>
        <select
          value={filters.propertyType || "all"}
          onChange={(e) => onFilterChange({ ...filters, propertyType: e.target.value as any })}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
        >
          {PROPERTY_TYPES.map((pt) => (
            <option key={pt.value} value={pt.value}>
              {pt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Status Filter */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Readiness Status
        </label>
        <select
          value={filters.status || "all"}
          onChange={(e) => onFilterChange({ ...filters, status: e.target.value as any })}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
        >
          {PROPERTY_STATUSES.map((ps) => (
            <option key={ps.value} value={ps.value}>
              {ps.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
