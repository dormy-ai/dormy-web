"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/docs", label: "Docs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dashboard", label: "Dashboard" },
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Dormy home">
          <img src="/wordmark-transparent.svg" alt="Dormy" className="h-8 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" variant="outline">
            <a
              href="https://github.com/beizhangnina/dormy-ai"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/dashboard">Sign in</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-background/95 border-t border-border/50 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-sm"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/beizhangnina/dormy-ai"
              target="_blank"
              rel="noreferrer"
              className="py-1 text-sm"
            >
              GitHub
            </a>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-sm font-medium"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
