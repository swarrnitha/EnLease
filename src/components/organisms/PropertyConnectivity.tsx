import React from "react";
import { Connectivity } from "@/types/property";
import { Compass, Plane, Ship, Truck, Train } from "lucide-react";

interface PropertyConnectivityProps {
  connectivity?: Connectivity;
}

export const PropertyConnectivity: React.FC<PropertyConnectivityProps> = ({ connectivity }) => {
  if (!connectivity) return null;

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Compass className="h-5 w-5 text-[var(--color-primary)]" /> Location & Connectivity
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {connectivity.highway && (
          <div className="flex items-start gap-3 p-4 rounded-md bg-slate-50 border border-slate-100">
            <div className="rounded-md bg-indigo-50 p-2 text-[var(--color-primary)]">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Highway Access</p>
              <p className="text-sm font-medium text-slate-900 mt-1">{connectivity.highway}</p>
            </div>
          </div>
        )}

        {connectivity.airport && (
          <div className="flex items-start gap-3 p-4 rounded-md bg-slate-50 border border-slate-100">
            <div className="rounded-md bg-indigo-50 p-2 text-[var(--color-primary)]">
              <Plane className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Airport Access</p>
              <p className="text-sm font-medium text-slate-900 mt-1">{connectivity.airport}</p>
            </div>
          </div>
        )}

        {connectivity.seaport && (
          <div className="flex items-start gap-3 p-4 rounded-md bg-slate-50 border border-slate-100">
            <div className="rounded-md bg-indigo-50 p-2 text-[var(--color-primary)]">
              <Ship className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Seaport Access</p>
              <p className="text-sm font-medium text-slate-900 mt-1">{connectivity.seaport}</p>
            </div>
          </div>
        )}

        {connectivity.railway && (
          <div className="flex items-start gap-3 p-4 rounded-md bg-slate-50 border border-slate-100">
            <div className="rounded-md bg-indigo-50 p-2 text-[var(--color-primary)]">
              <Train className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Railway Terminal</p>
              <p className="text-sm font-medium text-slate-900 mt-1">{connectivity.railway}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
