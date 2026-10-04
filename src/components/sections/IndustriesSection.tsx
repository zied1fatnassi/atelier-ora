"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../ui/SectionHeading";
import { Coffee, UtensilsCrossed, Dumbbell, Hotel, ShoppingBag, Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustriesSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function IndustriesSection({ locale, dict }: IndustriesSectionProps) {
  const [activeId, setActiveId] = useState(dict.industries.items[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    coffee: <Coffee className="w-5 h-5" />,
    restaurants: <UtensilsCrossed className="w-5 h-5" />,
    fitness: <Dumbbell className="w-5 h-5" />,
    hotels: <Hotel className="w-5 h-5" />,
    retail: <ShoppingBag className="w-5 h-5" />,
    beauty: <Sparkles className="w-5 h-5" />,
  };

  const imagesMap: Record<string, string> = {
    coffee: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    restaurants: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    fitness: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    hotels: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    retail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    beauty: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  };

  const activeIndustry =
    dict.industries.items.find((item) => item.id === activeId) ||
    dict.industries.items[0];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#060608] relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag={dict.industries.tag}
          title={dict.industries.title}
          subtitle={dict.industries.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Category Selector */}
          <div className="lg:col-span-5 space-y-3" role="tablist" aria-label="Industries">
            {dict.industries.items.map((ind) => {
              const isActive = ind.id === activeId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    "w-full text-start p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                    isActive
                      ? "bg-[#14141d] border-amber-500/50 shadow-lg shadow-amber-500/5"
                      : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "p-2.5 rounded-xl transition-colors",
                        isActive
                          ? "bg-amber-500 text-black"
                          : "bg-white/[0.05] text-[#a0a0ab]"
                      )}
                    >
                      {iconMap[ind.id]}
                    </span>
                    <span
                      className={cn(
                        "font-display font-medium text-base sm:text-lg transition-colors",
                        isActive ? "text-white font-semibold" : "text-white/70"
                      )}
                    >
                      {ind.name}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isActive
                        ? "text-amber-400 rotate-0"
                        : "text-white/20 -rotate-45"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Dynamic Visual & Deliverables Display */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-[#111118] border border-white/10 p-6 sm:p-8 flex flex-col justify-between min-h-[460px]">
              {/* Active Image Background with Smooth Fade */}
              <div className="absolute inset-0 z-0">
                <Image
                  key={activeIndustry.id}
                  src={imagesMap[activeIndustry.id]}
                  alt={activeIndustry.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-50 contrast-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-[#09090e]/80 to-transparent" />
              </div>

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/15 text-xs font-mono text-amber-400 uppercase tracking-widest backdrop-blur-md">
                  {activeIndustry.name}
                </span>
                <span className="text-xs font-mono text-white/50 tracking-wider">
                  SPECIFIC CRAFT
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-4 pt-24">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-snug">
                  {activeIndustry.tagline}
                </h3>

                <div className="p-4 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md text-sm text-[#a0a0ab] space-y-2">
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                    LIVRABLES CLÉS :
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {activeIndustry.deliverables}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/${locale}/contact?industry=${activeIndustry.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors text-sm shadow-md"
                  >
                    <span>{dict.common.startProject}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
