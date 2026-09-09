import React from "react";
import Link from "next/link";
import { HeroBanner } from "@/components/organisms/HeroBanner";
import { PropertyGrid } from "@/components/organisms/PropertyGrid";
import { EngagementModelsGrid } from "@/components/organisms/EngagementModelsGrid";
import { propertyService } from "@/services/propertyService";
import { locationsData } from "@/data/locations";
import { Button } from "@/components/atoms/Button";
import { ArrowRight, ShieldCheck, Zap, Factory, CheckCircle, MapPin } from "lucide-react";

export default async function HomePage() {
  const featuredProperties = await propertyService.getFeaturedProperties();

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Properties Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Grade-A Assets</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">Featured Industrial Parks</h2>
            <p className="text-sm text-slate-600 mt-1">Explore ready-to-occupy and upcoming warehousing hubs in prime corridors.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/properties">
              <Button variant="outline" size="sm" className="gap-1.5">
                View All Properties <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <PropertyGrid properties={featuredProperties} />
      </section>

      {/* Why Choose EnLease Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Institutional Advantage</span>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Why Choose EnLease</h2>
            <p className="text-sm text-slate-300 mt-2">We bridge the gap between world-class industrial infrastructure developers and growing enterprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/60 border border-slate-700/60 p-8 rounded-lg">
              <div className="h-12 w-12 rounded-lg bg-indigo-900/60 text-indigo-400 flex items-center justify-center mb-6">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Grade-A Specifications</h3>
              <p className="text-sm text-slate-300">
                14m+ clear heights, FM2 flooring, heavy floor load capacity, and expansive aprons designed for multi-axle trailer maneuverability.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 p-8 rounded-lg">
              <div className="h-12 w-12 rounded-lg bg-indigo-900/60 text-indigo-400 flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Strategic Corridors</h3>
              <p className="text-sm text-slate-300">
                Located right along key arterial highways (NH-48, NH-544, ORR) with swift access to international airports and major seaports.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 p-8 rounded-lg">
              <div className="h-12 w-12 rounded-lg bg-indigo-900/60 text-indigo-400 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Complete Compliance</h3>
              <p className="text-sm text-slate-300">
                Clear land titles, statutory approvals, environmental clearances, and robust fire safety compliance (ESFR sprinkler systems) guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Industrial Hubs</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">Explore Key Locations</h2>
            <p className="text-sm text-slate-600 mt-1">Discover industrial growth corridors across South India.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/locations">
              <Button variant="outline" size="sm" className="gap-1.5">
                All Locations <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationsData.slice(0, 3).map((loc) => (
            <Link key={loc.id} href={`/locations/${loc.slug}`} className="group card overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm block">
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 z-20 text-white">
                  <h3 className="font-bold text-lg">{loc.title}</h3>
                  <p className="text-xs text-slate-200">{loc.totalParks} Industrial Parks</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-slate-600 line-clamp-2">{loc.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="bg-slate-100 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Flexible Leasing Solutions</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">Industrial Engagement Models</h2>
            <p className="text-sm text-slate-600 mt-2">Tailored financial and structural frameworks designed to fit your operational strategy.</p>
          </div>

          <EngagementModelsGrid />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[var(--color-primary)] text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to find your next industrial space?</h2>
            <p className="mt-2 text-indigo-100 text-sm sm:text-base max-w-xl">
              Connect with our industrial leasing experts today for custom layout planning, pricing, and park site visits.
            </p>
          </div>
          <Link href="/enquire">
            <Button variant="secondary" size="lg" className="bg-white text-[var(--color-primary)] hover:bg-slate-100 font-bold whitespace-nowrap">
              Submit Space Requirement
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
