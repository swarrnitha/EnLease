import React from "react";
import { Building2, ShieldCheck, Factory, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">About EnLease</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
          Powering India's Industrial Growth
        </h1>
        <p className="mt-4 text-slate-600 text-base leading-relaxed">
          EnLease is a specialized B2B industrial leasing and property discovery platform connecting enterprises with institutional-grade industrial parks, warehousing facilities, and manufacturing hubs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xs">
          <div className="h-12 w-12 rounded-lg bg-indigo-50 text-[var(--color-primary)] flex items-center justify-center mb-6">
            <Factory className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Grade-A Assets</h3>
          <p className="text-sm text-slate-600">
            We partner with premier developers like Casagrand Industrial to list world-class facilities featuring 14m+ clear heights and FM2 flooring.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xs">
          <div className="h-12 w-12 rounded-lg bg-indigo-50 text-[var(--color-primary)] flex items-center justify-center mb-6">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Verified Data & Compliance</h3>
          <p className="text-sm text-slate-600">
            Every listing features verified corridor connectivity, highway access, power load allocations, and environmental compliances.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-xs">
          <div className="h-12 w-12 rounded-lg bg-indigo-50 text-[var(--color-primary)] flex items-center justify-center mb-6">
            <TrendingUp className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Engagement</h3>
          <p className="text-sm text-slate-600">
            From Built-to-Suit (BTS) leases with purchase options to standard ready-to-occupy sheds, we structure deals around your business strategy.
          </p>
        </div>
      </div>
    </div>
  );
};
