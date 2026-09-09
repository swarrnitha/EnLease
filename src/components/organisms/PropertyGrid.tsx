import React from "react";
import { Property } from "@/types/property";
import { PropertyCard } from "@/components/molecules/PropertyCard";
import { EmptyState } from "@/components/molecules/EmptyState";

interface PropertyGridProps {
  properties: Property[];
  wishlist?: string[];
  onToggleWishlist?: (id: string) => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  wishlist = [],
  onToggleWishlist,
}) => {
  if (properties.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          isWishlisted={wishlist.includes(property.id)}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  );
};
