import React from "react";
import Link from "next/link";
import { developersData } from "@/data/developers";
import { Button } from "@/components/atoms/Button";
import { Building2, ArrowRight, ShieldCheck } from "lucide-react";

export default function DevelopersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Industrial Developers & Partners</h1>
        <p className="mt-1 text-sm text-slate-600">
          Discover institutional-grade industrial park developers and real estate partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {developersData.map((dev) => (
          <div key={dev.id} className="card rounded-xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-indigo-50 text-[var(--color-primary)] flex items-center justify-center font-bold text-xl">
                  {dev.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{dev.name}</h3>
                  <p className="text-xs text-slate-500">Established {dev.establishedYear} &bull; {dev.headquarters}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">{dev.description}</p>

              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Total Portfolio</p>
                  <p className="text-base font-bold text-slate-900 mt-1">{dev.totalIndustrialSpace}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Completed Parks</p>
                  <p className="text-base font-bold text-slate-900 mt-1">{dev.completedProjectsCount}+ Projects</p>
                </div>
              </div>
            </div>

            <Link href={`/developers/${dev.slug}`}>
              <Button variant="primary" size="sm" className="w-full justify-center gap-1.5">
                View Developer Profile & Parks <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
