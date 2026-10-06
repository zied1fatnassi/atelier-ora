"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { ReducedMotionToggle } from "../ui/ReducedMotionToggle";
import { Button } from "../ui/Button";
import { AuraLogo } from "../brand/AuraLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/industries`, label: dict.nav.industries },
    { href: `/${locale}/production`, label: dict.nav.production },
    { href: `/${locale}/digital-menu`, label: dict.nav.digitalMenu },
    { href: `/${locale}/pricing`, label: dict.nav.pricing },
    { href: `/${locale}/about`, label: dict.nav.about },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out flex justify-center",
          scrolled ? "py-3 px-4 md:px-8" : "py-6 px-4 md:px-8"
        )}
      >
        <div
          className={cn(
            "w-full transition-all duration-500 ease-out flex items-center justify-between",
            scrolled
              ? "max-w-6xl px-4 md:px-6 py-2.5 rounded-full bg-[#0a0a0f]/85 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "max-w-7xl px-2 py-0 bg-transparent border-transparent"
          )}
        >
          {/* Brand Logo */}
          <Link
            href={`/${locale}`}
            className="group flex items-center outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 transition-opacity hover:opacity-95"
            aria-label={`${dict.common.studioName} — ${dict.common.studioTagline}`}
          >
            <span className="sm:hidden flex items-center">
              <AuraLogo variant="compact" size="sm" />
            </span>
            <span className="hidden sm:inline-flex items-center">
              <AuraLogo variant="full" size="md" />
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/5"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-amber-500",
                    isActive
                      ? "text-white bg-white/10 font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-2">
              <ReducedMotionToggle
                labelReduce={dict.common.reducedMotion}
                labelStandard={dict.common.reducedMotionActive}
              />
              <LanguageSwitcher currentLocale={locale} />
            </div>

            <Button
              href={`/${locale}/contact`}
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex font-semibold shadow-sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />}
            >
              {dict.common.startProject}
            </Button>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-amber-400" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#060608]/95 backdrop-blur-2xl xl:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <AuraLogo variant="horizontal" size="sm" />
            <div className="flex items-center gap-2">
              <LanguageSwitcher currentLocale={locale} />
              <ReducedMotionToggle
                labelReduce={dict.common.reducedMotion}
                labelStandard={dict.common.reducedMotionActive}
              />
            </div>
          </div>

          <nav className="flex flex-col gap-3 my-auto">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-2xl sm:text-3xl font-display font-medium tracking-tight py-2 transition-all flex items-center justify-between border-b border-white/[0.05]",
                    isActive
                      ? "text-amber-400 font-bold"
                      : "text-white/70 hover:text-white"
                  )}
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-white/30">0{idx + 1}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 mt-auto space-y-4">
            <Button
              href={`/${locale}/contact`}
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-lg"
              onClick={() => setMobileOpen(false)}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              {dict.common.startProject}
            </Button>
            <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2">
              <span>{dict.common.location}</span>
              <span>24 FPS • 4K UHD</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
