import Link from "next/link";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowUpRight, Globe, Film, Camera, Smartphone, Sparkles, Layers } from "lucide-react";

interface ServicesSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function ServicesSection({ locale, dict }: ServicesSectionProps) {
  const iconMap: Record<string, React.ReactNode> = {
    "web-experience": <Globe className="w-6 h-6 text-amber-500" />,
    "commercial-film": <Film className="w-6 h-6 text-amber-500" />,
    "culinary-photo": <Camera className="w-6 h-6 text-amber-500" />,
    "digital-menu": <Smartphone className="w-6 h-6 text-amber-500" />,
    "ai-production": <Sparkles className="w-6 h-6 text-amber-500" />,
    "brand-system": <Layers className="w-6 h-6 text-amber-500" />,
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#09090d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag={dict.services.tag}
          title={dict.services.title}
          subtitle={dict.services.subtitle}
        />

        {/* 6 Outcome-Oriented Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.services.items.map((service, idx) => (
            <div
              key={service.id}
              className="group p-8 rounded-3xl bg-[#111118]/80 border border-white/10 hover:border-amber-500/40 hover:bg-[#161622] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-colors">
                    {iconMap[service.id]}
                  </div>
                  <span className="font-mono text-xs text-[#a0a0ab] uppercase tracking-wider">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm font-medium text-white/90 leading-relaxed">
                  {service.outcome}
                </p>

                <p className="text-xs text-[#a0a0ab] leading-relaxed pt-2 border-t border-white/5">
                  {service.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/${locale}/services#${service.id}`}
                  className="text-xs font-mono tracking-wider uppercase text-amber-400 group-hover:text-amber-300 inline-flex items-center gap-1.5"
                >
                  <span>{dict.common.learnMore}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-mono text-xs text-white/30">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
