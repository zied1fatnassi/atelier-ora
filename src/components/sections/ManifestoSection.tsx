import { Dictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";
import { Quote } from "lucide-react";

interface ManifestoSectionProps {
  dict: Dictionary;
}

export function ManifestoSection({ dict }: ManifestoSectionProps) {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#09090d] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-500 uppercase">
          <span className="w-2 h-0.5 bg-amber-500 inline-block" />
          <span>{dict.manifesto.tag}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-[#f8f8fa] leading-tight">
          {dict.manifesto.title}
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-[#a0a0ab] leading-relaxed font-light">
          {dict.manifesto.description}
        </p>

        {/* Big Editorial Quote Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#12121a]/80 border border-white/10 relative backdrop-blur-sm">
          <Quote className="w-10 h-10 text-amber-500/30 mb-4" aria-hidden="true" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white italic leading-snug">
            {dict.manifesto.quote}
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-xs font-mono tracking-widest uppercase text-[#a0a0ab]">
              {siteConfig.name} • MANIFESTO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
