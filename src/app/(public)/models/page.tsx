import React from "react";
import { EngagementModelsGrid } from "@/components/organisms/EngagementModelsGrid";

export default function EngagementModelsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Commercial & Financial Structuring</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">Industrial Engagement Models</h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          We offer flexible leasing, build-to-suit, and turnkey development frameworks designed to align with your corporate capital strategy and operational timelines.
        </p>
      </div>

      <EngagementModelsGrid />
    </div>
  );
};
