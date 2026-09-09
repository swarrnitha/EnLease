import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { developerService } from "@/services/developerService";
import { propertyService } from "@/services/propertyService";
import { PropertyGrid } from "@/components/organisms/PropertyGrid";
import { Button } from "@/components/atoms/Button";
import { Building2, ArrowLeft, ShieldCheck, Globe } from "lucide-react";

interface DeveloperDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DeveloperDetailPage({ params }: DeveloperDetailPageProps) {
  const { slug } = await params;
  const developer = await developerService.getDeveloperBySlug(slug);

  if (!developer) {
    notFound();
  }

  const allProperties = await propertyService.getProperties();
  const devProperties = allProperties.filter(
    (p) => p.developer.id === developer.id
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/developers" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Developers
          </Link>
        </div>

        {/* Developer Header */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-xl bg-indigo-50 text-[var(--color-primary)] flex items-center justify-center font-bold text-2xl">
                {developer.name.charAt(0)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Verified Industrial Partner</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">{developer.name}</h1>
                <p className="text-sm text-slate-500 mt-1">{developer.tagline}</p>
              </div>
            </div>

            <a href={developer.website} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="md" className="gap-2">
                <Globe className="h-4 w-4" /> Official Website
              </Button>
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-6">
            {developer.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-100">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Established</p>
              <p className="text-lg font-bold text-slate-900 mt-1">{developer.establishedYear}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Total Portfolio</p>
              <p className="text-lg font-bold text-slate-900 mt-1">{developer.totalIndustrialSpace}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Headquarters</p>
              <p className="text-lg font-bold text-slate-900 mt-1">{developer.headquarters}</p>
            </div>
          </div>
        </div>

        {/* Properties by Developer */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
            Industrial Parks Developed by {developer.name}
          </h2>
          <PropertyGrid properties={devProperties} />
        </div>
      </div>
    </div>
  );
};
