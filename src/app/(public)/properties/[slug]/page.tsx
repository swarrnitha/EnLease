import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { propertyService } from "@/services/propertyService";
import { PropertyConnectivity } from "@/components/organisms/PropertyConnectivity";
import { EnquiryForm } from "@/components/organisms/EnquiryForm";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { formatArea } from "@/utils/formatters";
import { MapPin, Building2, CheckCircle2, FileText, ArrowLeft, ShieldCheck } from "lucide-react";

interface PropertyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = await propertyService.getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/properties" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Properties
          </Link>
        </div>

        {/* Header Hero Section */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-80 lg:h-[420px] bg-slate-100">
              <img
                src={property.images[0]?.url || "/images/hoarding-placeholder.svg"}
                alt={property.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="success">{property.readiness || property.status}</Badge>
                <Badge variant="primary" className="capitalize">{property.propertyType.replace("_", " ")}</Badge>
              </div>
            </div>

            <div className="p-6 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1 mb-2">
                  <Building2 className="h-3.5 w-3.5 text-[var(--color-primary)]" /> {property.developer.name}
                </p>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{property.name}</h1>
                <p className="mt-2 text-sm text-slate-600 flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-slate-400 shrink-0" /> {property.location.address}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 my-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Land Area</p>
                    <p className="text-lg font-bold text-slate-900 mt-1">
                      {property.landArea ? formatArea(property.landArea.value, property.landArea.unit) : "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Leasing Area</p>
                    <p className="text-lg font-bold text-slate-900 mt-1">
                      {property.leasingArea ? formatArea(property.leasingArea.value, property.leasingArea.unit) : "N/A"}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  {property.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <a href="#enquire-section">
                  <Button variant="primary" size="lg" className="gap-2">
                    Enquire About This Property
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="gap-2" disabled>
                  <FileText className="h-4 w-4" /> Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Grid: Features, Connectivity, Enquiry */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Features & Specifications */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[var(--color-primary)]" /> Park Specifications & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-md bg-slate-50 border border-slate-100 text-sm text-slate-800">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable Industries */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Suitable Industry Sectors</h3>
              <div className="flex flex-wrap gap-2">
                {property.suitableFor?.map((ind, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-indigo-50 text-indigo-900 border border-indigo-200 rounded-md text-xs font-medium">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Connectivity Component */}
            <PropertyConnectivity connectivity={property.connectivity} />
          </div>

          {/* Enquiry Form Sidebar */}
          <div className="lg:col-span-1" id="enquire-section">
            <div className="sticky top-24">
              <EnquiryForm propertyName={property.name} propertyId={property.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
