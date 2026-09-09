import React from "react";
import { EnquiryForm } from "@/components/organisms/EnquiryForm";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Get In Touch</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">Contact EnLease Advisory</h1>
        <p className="mt-3 text-sm text-slate-600">
          Speak with our industrial real estate specialists to discuss your manufacturing, warehousing, or logistics space requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Corporate Headquarters</h3>
            
            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>EnLease Industrial Tower, SIPCOT Industrial Growth Centre, Oragadam, Chennai - 603109, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--color-primary)] shrink-0" />
                <span>+91 (44) 6100 6100 / +91 98400 98400</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--color-primary)] shrink-0" />
                <span>leasing@enlease.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="lg:col-span-2">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};
