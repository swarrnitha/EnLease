import React from "react";
import Link from "next/link";
import { Property } from "@/types/property";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { formatArea } from "@/utils/formatters";
import { MapPin, Building2, ArrowRight, Bookmark } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  isWishlisted?: boolean;
  onToggleWishlist?: (id: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isWishlisted = false,
  onToggleWishlist,
}) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "ready":
        return "success";
      case "under-development":
        return "warning";
      case "upcoming":
        return "info";
      default:
        return "neutral";
    }
  };

  return (
    <div className="card flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Image Container */}
      <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
        <img
          src={property.images[0]?.url || "/images/hoarding-placeholder.svg"}
          alt={property.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          <Badge variant={getStatusVariant(property.status)}>
            {property.readiness || property.status}
          </Badge>
          <Badge variant="primary" className="capitalize">
            {property.propertyType.replace("_", " ")}
          </Badge>
        </div>

        {onToggleWishlist && (
          <button
            onClick={() => onToggleWishlist(property.id)}
            className={`absolute top-3 right-3 z-20 rounded-full p-2 transition-colors ${
              isWishlisted
                ? "bg-[var(--color-primary)] text-white"
                : "bg-white/80 text-slate-700 hover:bg-white"
            }`}
            title="Save Property"
          >
            <Bookmark className="h-4 w-4 fill-current" />
          </button>
        )}

        <div className="absolute bottom-3 left-3 right-3 z-20 text-white">
          <p className="text-xs font-medium text-slate-200 flex items-center gap-1">
            <Building2 className="h-3 w-3" /> {property.developer.name}
          </p>
          <h3 className="font-semibold text-lg line-clamp-1">{property.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="line-clamp-1">{property.location.address}</span>
          </p>

          <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 my-3 bg-slate-50/50 p-3 rounded-md">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">Land Area</p>
              <p className="text-sm font-semibold text-slate-900">
                {property.landArea ? formatArea(property.landArea.value, property.landArea.unit) : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">Leasing Area</p>
              <p className="text-sm font-semibold text-slate-900">
                {property.leasingArea ? formatArea(property.leasingArea.value, property.leasingArea.unit) : "N/A"}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 mb-4">
            {property.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <Link href={`/properties/${property.slug}`} className="w-full">
            <Button variant="primary" size="sm" className="w-full justify-center gap-1.5">
              View Property <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
