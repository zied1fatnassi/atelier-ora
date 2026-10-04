"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { ArrowUp, ArrowUpRight, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const [tunisTime, setTunisTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      // Tunis is UTC+1
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Tunis",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTunisTime(new Intl.DateTimeFormat("fr-TN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040406] border-t border-white/10 text-white overflow-hidden pt-20 pb-12">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Top Studio Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="font-mono text-xs tracking-widest text-amber-400 uppercase">
                {dict.common.statusAvailable}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight leading-tight max-w-2xl">
              {dict.footer.tagline}
            </h2>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all shadow-[0_0_25px_rgba(245,158,11,0.25)] text-sm"
              >
                <span>{dict.common.startProject}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/21629888900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] border border-white/15 text-white hover:bg-white/10 transition-colors text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:text-end">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#a0a0ab] uppercase tracking-wider block">
                LOCAL TIME IN TUNIS (GMT+1)
              </span>
              <div className="font-mono text-2xl md:text-3xl font-light text-white tracking-widest tabular-nums">
                <span suppressHydrationWarning>
                  {mounted && tunisTime ? tunisTime : "12:00:00"}
                </span>{" "}
                <span className="text-xs text-amber-500 font-sans">TN</span>
              </div>
            </div>

            <div className="space-y-1 text-sm text-[#a0a0ab]">
              <div className="flex items-center lg:justify-end gap-2 text-white">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Les Berges du Lac 2 / La Marsa, Tunis</span>
              </div>
              <div className="flex items-center lg:justify-end gap-2">
                <Mail className="w-4 h-4 text-white/40" />
                <a href="mailto:contact@atelierora.studio" className="hover:text-white transition-colors">
                  contact@atelierora.studio
                </a>
              </div>
              <div className="flex items-center lg:justify-end gap-2">
                <Phone className="w-4 h-4 text-white/40" />
                <a href="tel:+21629888900" className="hover:text-white transition-colors">
                  +216 29 888 900
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-sm border-b border-white/10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#a0a0ab] mb-4">
              {dict.nav.work}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/work/mirador`} className="text-white/70 hover:text-white transition-colors">
                  Café Mirador & Roastery
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/work/kinetix`} className="text-white/70 hover:text-white transition-colors">
                  Kinetix Athletic Club
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/work/dar-el-bahr`} className="text-white/70 hover:text-white transition-colors">
                  Dar El Bahr Gastronomie
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/work`} className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 font-medium">
                  {dict.common.viewAllWork} →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#a0a0ab] mb-4">
              {dict.nav.services}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/services`} className="text-white/70 hover:text-white transition-colors">
                  Web Sur-Mesure
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/production`} className="text-white/70 hover:text-white transition-colors">
                  Production Film 4K
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/digital-menu`} className="text-white/70 hover:text-white transition-colors">
                  Menu Digital PWA
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-white/70 hover:text-white transition-colors">
                  Systèmes de Marque
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#a0a0ab] mb-4">
              {dict.nav.industries}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/industries`} className="text-white/70 hover:text-white transition-colors">
                  Cafés & Coffee Shops
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/industries`} className="text-white/70 hover:text-white transition-colors">
                  Restaurants & Gastronomie
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/industries`} className="text-white/70 hover:text-white transition-colors">
                  Clubs de Fitness & Gyms
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/industries`} className="text-white/70 hover:text-white transition-colors">
                  Hôtels & Riads de Charme
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#a0a0ab] mb-4">
              {dict.nav.about} & Studio
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/about`} className="text-white/70 hover:text-white transition-colors">
                  {dict.about.philosophyTitle}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/pricing`} className="text-white/70 hover:text-white transition-colors">
                  {dict.nav.pricing}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-white/70 hover:text-white transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy`} className="text-white/70 hover:text-white transition-colors">
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-white/70 hover:text-white transition-colors">
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a0a0ab]">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white tracking-tight">
              {dict.common.studioName}
            </span>
            <span>•</span>
            <span>© 2026 {dict.footer.rights}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
              4K 24FPS • ZERO TEMPLATES • TUNIS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all"
              aria-label="Retourner en haut de la page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
