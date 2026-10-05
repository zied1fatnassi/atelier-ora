import { notFound } from "next/navigation";
import Image from "next/image";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";

interface ProductionPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProductionPage({ params }: ProductionPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="rec">
              <span>{dict.common.rec}</span>
            </Badge>
            <Badge variant="hud">
              <span>4K UHD 24FPS</span>
            </Badge>
            <Badge variant="amber">
              <span>D-LOG M 10-BIT</span>
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {dict.production.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#a0a0ab] font-light leading-relaxed max-w-3xl">
            {dict.production.subtitle}
          </p>
        </div>

        {/* Big Production Studio Reel Banner */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2000&q=85"
            alt={`${siteConfig.name} Commercial Cinema Production Rig`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

          {/* Camera Viewfinder Overlay HUD */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between pointer-events-none">
            <div className="flex items-center justify-between text-xs font-mono text-white/80">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-rec-pulse" />
                <span>REC • 00:04:18:14</span>
              </span>
              <span>SHUTTER 1/48 • F/1.8 • ISO 200</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                  {siteConfig.name} CINEMA REEL
                </span>
                <span className="text-xl sm:text-2xl font-display font-bold text-white">
                  {isArabic
                    ? "معالجة ألوان سينمائية وتوجيه فني"
                    : isFrench
                    ? "Étalonnage & Direction de la Photographie"
                    : "Cinema Color Grading & Cinematography"}
                </span>
              </div>

              <div className="pointer-events-auto">
                <Button
                  href={`/${locale}/contact?production=commercial`}
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  {dict.common.startProject}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* The 4-step sequence */}
        <div className="space-y-10">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">
              {isArabic ? "مسار الإنتاج الميداني" : isFrench ? "NOTRE FLUX DE TRAVAIL" : "PRODUCTION SEQUENCE"}
            </span>
            <h2 className="text-3xl font-display font-bold text-white mt-1">
              {dict.production.workflowTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.production.workflow.map((item) => (
              <div
                key={item.step}
                className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 space-y-4"
              >
                <div className="text-4xl font-display font-black text-amber-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#a0a0ab] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gear Arsenal Details */}
        <div className="space-y-10">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">
              {isArabic ? "المعدات والتقنيات" : isFrench ? "ARSENAL MATÉRIEL & LAB" : "EQUIPMENT & COLOR LAB"}
            </span>
            <h2 className="text-3xl font-display font-bold text-white mt-1">
              {dict.production.gearTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.production.gearItems.map((gear) => (
              <div
                key={gear.title}
                className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase">
                    {gear.badge}
                  </span>
                  <span className="font-mono text-xs text-white/30">4K D-LOG M</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {gear.title}
                </h3>
                <p className="text-sm text-[#a0a0ab] leading-relaxed">
                  {gear.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
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
