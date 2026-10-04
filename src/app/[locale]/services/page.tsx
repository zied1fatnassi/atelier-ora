import { notFound } from "next/navigation";
import Link from "next/link";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Globe, Film, Camera, Smartphone, Sparkles, Layers } from "lucide-react";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  const iconMap: Record<string, React.ReactNode> = {
    "web-experience": <Globe className="w-8 h-8 text-amber-500" />,
    "commercial-film": <Film className="w-8 h-8 text-amber-500" />,
    "culinary-photo": <Camera className="w-8 h-8 text-amber-500" />,
    "digital-menu": <Smartphone className="w-8 h-8 text-amber-500" />,
    "ai-production": <Sparkles className="w-8 h-8 text-amber-500" />,
    "brand-system": <Layers className="w-8 h-8 text-amber-500" />,
  };

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="font-mono text-xs tracking-widest text-amber-400 uppercase">
              {dict.services.tag}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {dict.services.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#a0a0ab] font-light leading-relaxed max-w-3xl">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Deep Dive into all 6 Services */}
        <div className="space-y-16">
          {dict.services.items.map((srv, idx) => (
            <div
              id={srv.id}
              key={srv.id}
              className="p-8 sm:p-12 rounded-[32px] bg-[#0c0c12] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-amber-500/30 transition-all"
            >
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    {iconMap[srv.id]}
                  </span>
                  <div>
                    <span className="font-mono text-xs text-amber-500 font-bold uppercase">
                      SERVICE 0{idx + 1} • {srv.tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {srv.title}
                    </h2>
                  </div>
                </div>

                <div className="text-base sm:text-lg font-medium text-white/95 leading-relaxed">
                  {srv.outcome}
                </div>

                <p className="text-sm text-[#a0a0ab] leading-relaxed">
                  {srv.details}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-white/70">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                    STANDARD CINÉMA / NEXT.JS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                    LIVRABLE CLÉ EN MAIN
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-xs font-mono text-[#a0a0ab] uppercase">
                  DÉMARRER AVEC CETTE EXPERTISE
                </span>
                <Button
                  href={`/${locale}/contact?service=${srv.id}`}
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Intégrer à mon projet
                </Button>
                <Link
                  href={`/${locale}/work`}
                  className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors uppercase inline-flex items-center gap-1"
                >
                  <span>Voir des exemples</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
