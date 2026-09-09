import React from "react";
import { FolderSearch } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No properties found",
  description = "Try adjusting your search criteria or filters to discover industrial spaces.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-[var(--color-primary)] mb-4">
        <FolderSearch className="h-6 w-6" />
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500 max-w-md">{description}</p>
    </div>
  );
};
