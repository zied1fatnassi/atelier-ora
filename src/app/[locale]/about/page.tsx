import { notFound } from "next/navigation";
import Image from "next/image";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, MapPin } from "lucide-react";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  const teamImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="font-mono text-xs tracking-widest text-amber-400 uppercase">
              {dict.about.tag}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {dict.about.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#a0a0ab] font-light leading-relaxed max-w-3xl">
            {dict.about.subtitle}
          </p>
        </div>

        {/* Philosophy Card */}
        <div className="p-8 sm:p-14 rounded-[36px] bg-[#0c0c12] border border-white/10 space-y-8 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block">
              {locale === "ar" ? "فلسفتنا في العمل" : locale === "fr" ? "NOTRE PHILOSOPHIE" : "OUR PHILOSOPHY"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-snug">
              {dict.about.philosophyTitle}
            </h2>
            <p className="text-base sm:text-lg text-[#a0a0ab] leading-relaxed font-light">
              {dict.about.philosophyText}
            </p>
          </div>

          {/* Key Studio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {dict.about.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-display font-black text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-[#a0a0ab] font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Disciplines */}
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">
                {locale === "ar" ? "مجالات الإتقان والإنتاج" : locale === "fr" ? "DISCIPLINES DU STUDIO" : "STUDIO DISCIPLINES"}
              </span>
              <h2 className="text-3xl font-display font-bold text-white mt-1">
                {locale === "ar" ? "تكامل الإبداع والسينما والبرمجة." : locale === "fr" ? "L'union du design, de l'image et du code." : "Where design, cinema & software converge."}
              </h2>
            </div>
            <span className="text-xs font-mono text-[#a0a0ab]">
              {siteConfig.location.city.toUpperCase()} • TUNISIA • 24/7
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.about.team.map((member, idx) => (
              <div
                key={member.name}
                className="group p-6 rounded-3xl bg-[#0c0c12] border border-white/10 hover:border-amber-500/40 transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-900">
                    <Image
                      src={teamImages[idx]}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-amber-400 mt-1 uppercase">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs text-[#a0a0ab] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>{siteConfig.name}</span>
                  <span>{siteConfig.location.city.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Location / Presence */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0f0f15] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase">
              <MapPin className="w-4 h-4" />
              <span>{locale === "ar" ? "المقر والتواجد" : locale === "fr" ? "NOTRE BASE OPÉRATIONNELLE" : "STUDIO HEADQUARTERS"}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {locale === "ar" ? "تواصل مع فريقنا الإبداعي." : locale === "fr" ? "Échangez directement avec notre équipe." : "Connect with our creative studio."}
            </h3>
            <p className="text-sm text-[#a0a0ab] max-w-xl">
              {locale === "ar"
                ? `المقر في ${siteConfig.location.address}. نعمل مع العلامات الطموحة محلياً ودولياً على مدار الساعة.`
                : locale === "fr"
                ? `Basé à ${siteConfig.location.address}. Nous collaborons avec des marques ambitieuses en Tunisie et à l'international.`
                : `Headquartered in ${siteConfig.location.address}. We collaborate with ambitious businesses across Tunisia, Europe, the Middle East, and worldwide.`}
            </p>
          </div>
          <Button
            href={`/${locale}/contact`}
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            {dict.common.startProject}
          </Button>
        </div>
      </div>
    </div>
  );
}
