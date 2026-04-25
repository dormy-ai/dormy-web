"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#solution", label: "Solution" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 border-b border-border/50 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="Dormy home">
          <img src="/wordmark-transparent.svg" alt="Dormy" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-navy/70 hover:text-navy text-[15px] font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#install"
            className="inline-flex items-center gap-2 bg-coral text-white px-5 py-2.5 rounded-full text-[15px] font-medium hover:bg-coral-dark transition-colors"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-background/95 border-t border-border/50 backdrop-blur-md md:hidden mt-2">
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-navy/70 hover:text-navy text-base font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#install"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-coral text-white px-5 py-3 rounded-full text-base font-medium"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
