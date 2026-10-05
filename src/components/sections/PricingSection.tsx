"use client";

import { useState } from "react";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Check, ArrowUpRight, Layers, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function PricingSection({ locale, dict }: PricingSectionProps) {
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  const scopeCapabilities = [
    {
      id: "web",
      name: isArabic
        ? "منصة ويب مخصصة بالكامل"
        : isFrench
        ? "Plateforme Web Sur-Mesure"
        : "Bespoke Web Platform",
      category: isArabic ? "هندسة الويب" : "Web Engineering",
    },
    {
      id: "film",
      name: isArabic
        ? "تصوير وإنتاج فيديو تجاري 4K"
        : isFrench
        ? "Production Vidéo Commerciale 4K"
        : "4K Commercial Video Production",
      category: isArabic ? "السينما" : "Cinema",
    },
    {
      id: "photo",
      name: isArabic
        ? "تصوير فوتوغرافي للمكان والأطباق"
        : isFrench
        ? "Photographie Éditoriale & Culinaire"
        : "Editorial & Product Photography",
      category: isArabic ? "التصوير" : "Photography",
    },
    {
      id: "menu",
      name: isArabic
        ? "منيو رقمي تفاعلي سريع PWA"
        : isFrench
        ? "Menu Digital PWA Trilingue"
        : "Trilingual PWA Digital Menu",
      category: isArabic ? "الضيافة" : "Hospitality",
    },
    {
      id: "branding",
      name: isArabic
        ? "هوية بصرية ونظام تصميم متكامل"
        : isFrench
        ? "Identité Visuelle & Charte"
        : "Brand Identity & Systems",
      category: isArabic ? "الهوية" : "Branding",
    },
    {
      id: "ai",
      name: isArabic
        ? "استوديو الذكاء الاصطناعي وتجسيد 3D"
        : isFrench
        ? "Séquences & Renders 3D / IA"
        : "AI Conceptual Renders & VFX",
      category: isArabic ? "الابتكار" : "AI Studio",
    },
  ];

  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([
    "web",
    "film",
  ]);

  const toggleCapability = (id: string) => {
    if (selectedCapabilities.includes(id)) {
      if (selectedCapabilities.length > 1) {
        setSelectedCapabilities(selectedCapabilities.filter((c) => c !== id));
      }
    } else {
      setSelectedCapabilities([...selectedCapabilities, id]);
    }
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#09090e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            tag={dict.pricing.tag}
            title={dict.pricing.title}
            subtitle={dict.pricing.subtitle}
            className="mb-0"
          />

          <p className="text-xs text-[#a0a0ab] max-w-sm lg:text-end">
            {dict.pricing.currencyNotice}
          </p>
        </div>

        {/* 3 Core Engagement Models */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {dict.pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative",
                tier.popular
                  ? "bg-[#14141e] border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.12)] scale-100 lg:-translate-y-2"
                  : "bg-[#0d0d13] border-white/10 hover:border-white/20"
              )}
            >
              {tier.badge && (
                <div
                  className={cn(
                    "absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider",
                    tier.popular
                      ? "bg-amber-500 text-black shadow-md"
                      : "bg-white/10 text-white/90 border border-white/15"
                  )}
                >
                  {tier.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-2xl text-white">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#a0a0ab] mt-2 leading-relaxed min-h-[36px]">
                    {tier.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                    {tier.price}
                  </div>
                  <span className="text-[11px] font-mono text-[#a0a0ab] mt-1 block">
                    {isArabic
                      ? "عقد مخصص يحدد بوضوح وفق متطلبات مشروعك"
                      : isFrench
                      ? "Cadrage sur-mesure défini selon vos objectifs"
                      : "Custom scope tailored to your operational requirements"}
                  </span>
                </div>

                <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-[#f8f8fa]">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="leading-snug text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <Button
                  href={`/${locale}/contact?tier=${tier.id}`}
                  variant={tier.popular ? "primary" : "secondary"}
                  size="md"
                  className="w-full justify-center text-sm font-semibold"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope Configuration Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111119] border border-white/15 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Layers className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-xl sm:text-2xl text-white">
                  {dict.pricing.calculatorTitle}
                </h3>
                <p className="text-xs text-[#a0a0ab] mt-1">
                  {dict.pricing.calculatorDesc}
                </p>
              </div>
            </div>

            <div className="text-end">
              <div className="text-xs font-mono text-[#a0a0ab] uppercase tracking-wider">
                {isArabic ? "القدرات المختارة" : isFrench ? "COMPOSANTS SÉLECTIONNÉS" : "SELECTED PILLARS"}
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400">
                {selectedCapabilities.length} / {scopeCapabilities.length}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scopeCapabilities.map((opt) => {
              const isSelected = selectedCapabilities.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleCapability(opt.id)}
                  className={cn(
                    "p-4 rounded-2xl border text-start transition-all flex items-center justify-between outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                    isSelected
                      ? "bg-amber-500/10 border-amber-500/50 text-white"
                      : "bg-white/[0.02] border-white/5 text-[#a0a0ab] hover:border-white/15"
                  )}
                >
                  <div>
                    <div className="font-medium text-xs sm:text-sm text-white">
                      {opt.name}
                    </div>
                    <div className="text-[11px] font-mono text-amber-400/80 mt-1 uppercase">
                      {opt.category}
                    </div>
                  </div>
                  <span
                    className={cn(
                      "p-1.5 rounded-full transition-colors shrink-0 ms-2",
                      isSelected
                        ? "bg-amber-500 text-black"
                        : "bg-white/5 text-white/30"
                    )}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a0a0ab]">
            <span>
              {isArabic
                ? "* يتم تدقيق المواصفات الفنية وتحديد الخطة الزمنية بدقة في العرض الفني النهائي."
                : isFrench
                ? "* Le cadrage technique final et le planning de production sont confirmés dans la proposition définitive."
                : "* Technical scope, shoot scheduling, and deliverables are calibrated in the custom proposal."}
            </span>
            <Button
              href={`/${locale}/contact?scope=${selectedCapabilities.join(",")}`}
              variant="primary"
              size="md"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              {dict.common.startProject}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
