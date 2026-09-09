import React from "react";
import Link from "next/link";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white shadow-md">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">EnLease</span>
                <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Industrial Leasing Platform</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Industrial spaces built for business. Discover strategically located Grade-A industrial parks, warehouses, and manufacturing facilities designed for growth.
            </p>
            <div className="space-y-2 pt-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                <span>Oragadam & Sriperumbudur Industrial Corridors, Chennai</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                <span>+91 (44) 6100 6100</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                <span>leasing@enlease.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/properties" className="hover:text-white transition-colors">Industrial Properties</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Locations & Corridors</Link></li>
              <li><Link href="/developers" className="hover:text-white transition-colors">Developers</Link></li>
              <li><Link href="/models" className="hover:text-white transition-colors">Engagement Models</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Key Hubs</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/properties?city=Chennai" className="hover:text-white transition-colors">Oragadam, Chennai</Link></li>
              <li><Link href="/properties?city=Chennai" className="hover:text-white transition-colors">Sriperumbudur, Chennai</Link></li>
              <li><Link href="/properties?city=Coimbatore" className="hover:text-white transition-colors">Coimbatore Cluster</Link></li>
              <li><Link href="/properties?city=Bengaluru" className="hover:text-white transition-colors">Devanahalli, Bengaluru</Link></li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/enquire" className="hover:text-white transition-colors">Submit Requirement</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About EnLease</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} EnLease Industrial Platforms. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Partnering with premier industrial developers like Casagrand Industrial.</p>
        </div>
      </div>
    </footer>
  );
};
