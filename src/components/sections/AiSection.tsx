"use client";

import { useState } from "react";
import Image from "next/image";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AiSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function AiSection({ locale, dict }: AiSectionProps) {
  const [activeStage, setActiveStage] = useState<0 | 1 | 2>(0);
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  const stages = isArabic
    ? [
        {
          step: "01",
          title: "تصوير واقعي ميداني",
          desc: "التقاط المشاهد الحقيقية للمنتج أو المكان بمعدات سينمائية وإضاءة منضبطة.",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
          tag: "REAL 4K FOOTAGE",
        },
        {
          step: "02",
          title: "توليد بيئات مفاهيمية بالذكاء الاصطناعي",
          desc: "ابتكار تفاصيل بصرية معمارية وإضاءات سينمائية مستحيلة في استوديوهات التصوير التقليدية.",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
          tag: "SYNTHETIC SCENOGRAPHY",
        },
        {
          step: "03",
          title: "معالجة ومونتاج سينمائي نهائي",
          desc: "دمج بصري دقيق، انتقالات حركية سلسة وتصميم صوتي عالي النقاء.",
          image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
          tag: "CINEMATIC MASTER",
        },
      ]
    : isFrench
    ? [
        {
          step: "01",
          title: "Prise de Vue Réelle",
          desc: "Captation physique du produit ou de la bouteille en studio ou dans votre établissement.",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
          tag: "REAL 4K FOOTAGE",
        },
        {
          step: "02",
          title: "Extension Conceptuelle IA",
          desc: "Génération d'un univers architectural sur-mesure et d'éclairages impossibles en studio classique.",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
          tag: "SYNTHETIC SCENOGRAPHY",
        },
        {
          step: "03",
          title: "Mastering Final Cinématographique",
          desc: "Compositing fluide, transitions magnétiques et sound design pour une campagne virale.",
          image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
          tag: "CINEMATIC MASTER",
        },
      ]
    : [
        {
          step: "01",
          title: "Real Commercial Filming",
          desc: "Physical on-location or studio capture of products, spaces, and textures with cinema glass.",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
          tag: "REAL 4K FOOTAGE",
        },
        {
          step: "02",
          title: "AI Conceptual Scenography",
          desc: "Generating surreal architectural sets and lighting conditions impossible in traditional shoots.",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
          tag: "SYNTHETIC SCENOGRAPHY",
        },
        {
          step: "03",
          title: "Cinematic Final Mastering",
          desc: "Seamless compositing, magnetic motion cuts, and immersive audio design for high-converting campaigns.",
          image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
          tag: "CINEMATIC MASTER",
        },
      ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#09090e] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            tag={dict.aiSection.tag}
            title={dict.aiSection.title}
            subtitle={dict.aiSection.subtitle}
            className="mb-0"
          />

          <Badge variant="amber">
            <span>HYBRID REALITY WORKFLOW</span>
          </Badge>
        </div>

        {/* 3-Stage Transformation Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Stage Controls */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono tracking-widest text-[#a0a0ab] uppercase mb-2">
              {isArabic ? "مراحل التحول الثلاث :" : isFrench ? "LA MÉTAMORPHOSE EN 3 ÉTAPES :" : "THE 3-STAGE TRANSFORMATION:"}
            </div>
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStage(idx as 0 | 1 | 2)}
                  className={cn(
                    "w-full text-start p-5 rounded-2xl border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                    isActive
                      ? "bg-[#14141e] border-amber-500/50 shadow-lg"
                      : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.03]"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-amber-500">
                      {isArabic ? `المرحلة ${stage.step}` : `STAGE ${stage.step}`}
                    </span>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider">
                      {stage.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#a0a0ab] leading-relaxed">
                    {stage.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Interactive Screen Preview */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-[#111118] border border-white/10 aspect-[16/10] shadow-2xl">
              <Image
                key={activeStage}
                src={stages[activeStage].image}
                alt={stages[activeStage].title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Technical Overlay Badges */}
              <div className="absolute top-4 start-4 flex items-center gap-2">
                <Badge variant="rec">
                  <span>HYBRID AI COMPOSITING</span>
                </Badge>
                <Badge variant="hud">
                  <span>{stages[activeStage].tag}</span>
                </Badge>
              </div>

              <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 block">
                    STAGE {activeStage + 1} OF 3
                  </span>
                  <span className="text-base font-display font-semibold text-white">
                    {stages[activeStage].title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveStage(((activeStage + 1) % 3) as 0 | 1 | 2)
                  }
                  className="px-4 py-2 rounded-full bg-amber-500 text-black text-xs font-semibold hover:bg-amber-400 transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>{isArabic ? "المرحلة التالية" : isFrench ? "Étape Suivante" : "Next Stage"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Value Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {dict.aiSection.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#101016] border border-white/5 space-y-2"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="font-display font-semibold text-white text-base">
                  {pt.title}
                </h4>
              </div>
              <p className="text-xs text-[#a0a0ab] leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
