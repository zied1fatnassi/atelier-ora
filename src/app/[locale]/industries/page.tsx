import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ArrowUpRight } from "lucide-react";

interface IndustriesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function IndustriesPage({ params }: IndustriesPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  const imagesMap: Record<string, string> = {
    coffee: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    restaurants: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    fitness: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    hotels: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    retail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    beauty: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  };

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="font-mono text-xs tracking-widest text-amber-400 uppercase">
              {dict.industries.tag}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {dict.industries.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#a0a0ab] font-light leading-relaxed max-w-3xl">
            {dict.industries.subtitle}
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.industries.items.map((ind) => (
            <div
              key={ind.id}
              className="group rounded-3xl bg-[#0c0c12] border border-white/10 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <Image
                  src={imagesMap[ind.id] || imagesMap.coffee}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent" />
                <span className="absolute top-4 start-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-amber-400 uppercase">
                  {ind.name}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                    {ind.tagline}
                  </h3>
                  <div className="text-xs text-[#a0a0ab] leading-relaxed p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="font-mono text-amber-400 uppercase tracking-wider block mb-1">
                      NOTRE PACK SPÉCIFIQUE :
                    </span>
                    {ind.deliverables}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/${locale}/contact?industry=${ind.id}`}
                    className="text-xs font-mono tracking-wider uppercase text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Démarrer dans ce secteur</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
