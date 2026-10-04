import Link from "next/link";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { ArrowUpRight, Camera, Film, Sliders, Volume2, CheckCircle2 } from "lucide-react";

interface ProductionSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function ProductionSection({ locale, dict }: ProductionSectionProps) {
  const iconList = [
    <Camera key="1" className="w-5 h-5 text-amber-500" />,
    <Film key="2" className="w-5 h-5 text-amber-500" />,
    <Sliders key="3" className="w-5 h-5 text-amber-500" />,
    <Volume2 key="4" className="w-5 h-5 text-amber-500" />,
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#09090e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            tag={dict.production.tag}
            title={dict.production.title}
            subtitle={dict.production.subtitle}
            className="mb-0"
          />

          <div className="flex items-center gap-3">
            <Badge variant="rec">
              <span>{dict.common.rec}</span>
            </Badge>
            <Badge variant="hud">
              <span>4K UHD 10-BIT</span>
            </Badge>
            <Badge variant="amber">
              <span>DAVINCI RESOLVE</span>
            </Badge>
          </div>
        </div>

        {/* 4-Step Production Sequence Workflow */}
        <div>
          <div className="text-xs font-mono tracking-widest text-[#a0a0ab] uppercase mb-8 flex items-center gap-2">
            <span className="w-6 h-px bg-amber-500" />
            <span>{dict.production.workflowTitle}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.production.workflow.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-[#12121a] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-display font-extrabold text-amber-500">
                      {item.step}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-white/30" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#a0a0ab] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>ATELIER ORA PIPELINE</span>
                  <span>VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment & Tech Arsenal Cards */}
        <div className="space-y-8">
          <div className="text-xs font-mono tracking-widest text-[#a0a0ab] uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-amber-500" />
            <span>{dict.production.gearTitle}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.production.gearItems.map((gear, idx) => (
              <div
                key={gear.title}
                className="p-8 rounded-3xl bg-[#101016] border border-white/10 hover:border-white/20 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                    {iconList[idx % iconList.length]}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] uppercase">
                    {gear.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold text-white">
                  {gear.title}
                </h3>

                <p className="text-sm text-[#a0a0ab] leading-relaxed">
                  {gear.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Production Page Link */}
        <div className="text-center pt-4">
          <Link
            href={`/${locale}/production`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-all text-sm shadow-[0_0_30px_rgba(245,158,11,0.25)]"
          >
            <span>Explorer notre matériel & films de marque</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
