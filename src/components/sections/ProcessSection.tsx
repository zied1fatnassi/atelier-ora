import { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../ui/SectionHeading";

interface ProcessSectionProps {
  dict: Dictionary;
}

export function ProcessSection({ dict }: ProcessSectionProps) {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#060608] relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag={dict.process.tag}
          title={dict.process.title}
          subtitle={dict.process.subtitle}
        />

        {/* 6 Step Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.process.steps.map((step) => {
            const isMonthlyCare = step.num === "06";
            return (
              <div
                key={step.num}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isMonthlyCare
                    ? "bg-[#14141e] border-amber-500/40 relative overflow-hidden"
                    : "bg-[#0d0d13] border-white/10 hover:border-white/20"
                }`}
              >
                {isMonthlyCare && (
                  <div className="absolute top-0 end-0 px-4 py-1 bg-amber-500 text-black text-[10px] font-mono font-bold uppercase tracking-wider rounded-bl-xl">
                    PARTENARIAT CONTINU
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-display font-extrabold text-amber-500 tracking-tight">
                      {step.num}
                    </span>
                    <span className="font-mono text-[11px] text-white/30 uppercase">
                      PHASE {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a0a0ab] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span>ATELIER ORA PROTOCOL</span>
                  <span className="text-amber-500/80">STANDARDIZED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
