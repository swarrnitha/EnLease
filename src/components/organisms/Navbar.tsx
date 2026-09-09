"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Building2, Menu, X, PhoneCall } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white shadow-md">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">EnLease</span>
              <span className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Industrial Leasing</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors">
              Home
            </Link>
            <Link href="/properties" className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors">
              Properties
            </Link>
            <Link href="/locations" className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors">
              Locations
            </Link>
            <Link href="/developers" className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors">
              Developers
            </Link>
            <Link href="/models" className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors">
              Engagement Models
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/enquire">
              <Button variant="primary" size="md" className="gap-2 shadow-xs">
                <PhoneCall className="h-4 w-4" /> Enquire Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[var(--color-primary)]"
          >
            Home
          </Link>
          <Link
            href="/properties"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[var(--color-primary)]"
          >
            Properties
          </Link>
          <Link
            href="/locations"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[var(--color-primary)]"
          >
            Locations
          </Link>
          <Link
            href="/developers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[var(--color-primary)]"
          >
            Developers
          </Link>
          <Link
            href="/models"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[var(--color-primary)]"
          >
            Engagement Models
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[var(--color-primary)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-[var(--color-primary)]"
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link href="/enquire" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center gap-2">
                <PhoneCall className="h-4 w-4" /> Enquire Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
