import { notFound } from "next/navigation";
import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProductionSection } from "@/components/sections/ProductionSection";
import { DigitalMenuPreviewSection } from "@/components/sections/DigitalMenuPreviewSection";
import { AiSection } from "@/components/sections/AiSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 01. Hero */}
      <HeroSection locale={locale as Locale} dict={dict} />

      {/* 02. Manifesto / Core Positioning */}
      <ManifestoSection dict={dict} />

      {/* 03. What We Do / Outcomes */}
      <ServicesSection locale={locale as Locale} dict={dict} />

      {/* 04. Selected Flagship Work */}
      <SelectedWorkSection locale={locale as Locale} dict={dict} />

      {/* 05. Interactive Industries */}
      <IndustriesSection locale={locale as Locale} dict={dict} />

      {/* 06. Real Production & Cinema Gear */}
      <ProductionSection locale={locale as Locale} dict={dict} />

      {/* 07. Digital Menu Product Showcase & Simulator */}
      <DigitalMenuPreviewSection locale={locale as Locale} dict={dict} />

      {/* 08. AI & Visual Innovation */}
      <AiSection dict={dict} />

      {/* 09. 5-Step Process */}
      <ProcessSection dict={dict} />

      {/* 10. Transparent Pricing & Cost Estimator */}
      <PricingSection locale={locale as Locale} dict={dict} />

      {/* 11. Final High-Conversion CTA */}
      <section className="py-24 md:py-36 px-4 md:px-8 bg-[#060608] relative border-t border-white/10 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest inline-block">
            NOUS SOMMES PRÊTS
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
            Prêt à transformer la présence digitale de votre établissement ?
          </h2>

          <p className="text-base sm:text-xl text-[#a0a0ab] font-light max-w-2xl mx-auto leading-relaxed">
            Échangeons sur vos ambitions. Nous concevons une proposition sur-mesure sous 24 heures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href={`/${locale}/contact`}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-base shadow-[0_0_35px_rgba(245,158,11,0.3)]"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              {dict.common.startProject}
            </Button>
            <a
              href="https://wa.me/21629888900"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#12121a] border border-white/15 text-white hover:bg-white/10 transition-colors text-base font-medium shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="pt-8 text-xs font-mono text-white/40 flex items-center justify-center gap-4">
            <span>TUNIS • LA MARSA • SIDI BOU SAID</span>
            <span>•</span>
            <span>RÉPONSE SOUS 24H</span>
          </div>
        </div>
      </section>
    </div>
  );
}
