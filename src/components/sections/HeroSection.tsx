"use client";

import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowUpRight, Play, Camera, Film } from "lucide-react";

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 md:px-8 bg-[#060608]">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Editorial Background Image with Film Tone */}
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85"
            alt="Atelier Ora Studio Atmosphere"
            fill
            priority
            className="object-cover object-center filter grayscale contrast-125"
            sizes="100vw"
          />
        </div>

        {/* Ambient Warm Amber Light */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-amber-600/10 blur-[160px] rounded-full pointer-events-none" />

        {/* Film Grain Texture */}
        <div className="absolute inset-0 film-grain" />

        {/* Vignette Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#060608]/50 to-[#060608]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Camera HUD Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <Badge variant="rec">
            <span>{dict.common.rec}</span>
          </Badge>
          <Badge variant="hud">
            <span>{dict.hero.metadata.sensor}</span>
          </Badge>
          <Badge variant="hud">
            <span>{dict.hero.metadata.location}</span>
          </Badge>
          <Badge variant="amber">
            <span>{dict.hero.metadata.craft}</span>
          </Badge>
        </div>

        {/* Hero Editorial Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-[#f8f8fa] leading-[1.05] max-w-5xl mb-6">
          {dict.hero.headline}
        </h1>

        {/* Subhead / Value Proposition */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#a0a0ab] font-light max-w-3xl leading-relaxed mb-10">
          {dict.hero.subhead}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <Button
            href={`/${locale}/contact`}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-base shadow-[0_0_35px_rgba(245,158,11,0.3)]"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            {dict.hero.ctaPrimary}
          </Button>

          <Button
            href={`/${locale}/work`}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-base"
            icon={<Play className="w-3.5 h-3.5 text-amber-400" />}
            iconPosition="left"
          >
            {dict.hero.ctaSecondary}
          </Button>
        </div>

        {/* Technical Production Frame / Ticker */}
        <div className="w-full max-w-4xl p-4 sm:p-6 rounded-2xl bg-[#0f0f15]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10 text-start">
            {dict.hero.metrics.map((metric, idx) => (
              <div key={idx} className="pt-4 md:pt-0 md:px-6 first:px-0 first:pt-0">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#f8f8fa] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-[#a0a0ab] mt-1 font-sans">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#60606c] gap-2">
            <span className="flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-amber-500" />
              <span>DJI OSMO POCKET 3 & 4 • CINEMA RIGS</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-amber-500" />
              <span>DAVINCI RESOLVE D-LOG M COLOR GRADING</span>
            </span>
            <Link
              href={`/${locale}/production`}
              className="text-amber-400 hover:text-amber-300 transition-colors uppercase"
            >
              {dict.common.learnMore} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
