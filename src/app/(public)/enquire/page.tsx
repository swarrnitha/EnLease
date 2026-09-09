import React from "react";
import { EnquiryForm } from "@/components/organisms/EnquiryForm";

export default function EnquirePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Industrial Space Request</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-1">Submit Your Property Requirement</h1>
        <p className="mt-2 text-sm text-slate-600">
          Provide your specifications for land area, leasing area, and preferred industrial corridor.
        </p>
      </div>

      <EnquiryForm />
    </div>
  );
};
