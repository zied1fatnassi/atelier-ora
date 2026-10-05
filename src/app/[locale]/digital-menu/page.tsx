import { notFound } from "next/navigation";
import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { DigitalMenuPreviewSection } from "@/components/sections/DigitalMenuPreviewSection";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";

interface DigitalMenuPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DigitalMenuPage({ params }: DigitalMenuPageProps) {
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
            <Badge variant="amber">
              <span>{dict.digitalMenu.tag}</span>
            </Badge>
            <Badge variant="hud">
              <span>{isArabic ? "ثلاث لغات: عربي / إنجليزي / فرنسي" : "TRILINGUAL EN / FR / AR"}</span>
            </Badge>
            <Badge variant="hud">
              <span>{isArabic ? "طلب مباشر عبر واتساب" : "WHATSAPP DIRECT ORDERING"}</span>
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {dict.digitalMenu.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#a0a0ab] font-light leading-relaxed max-w-3xl">
            {dict.digitalMenu.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Button
              href={`/${locale}/contact?product=digital-menu`}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              {dict.common.startProject}
            </Button>
          </div>
        </div>

        {/* Live Interactive Simulator Section */}
        <div className="rounded-[36px] bg-[#09090e] border border-white/10 p-4 sm:p-10 shadow-2xl">
          <DigitalMenuPreviewSection locale={locale as Locale} dict={dict} />
        </div>

        {/* Key Product Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 space-y-3">
            <div className="text-2xl sm:text-3xl font-display font-bold text-amber-500">
              {isArabic ? "توفير كامل" : isFrench ? "Zéro Papier" : "Zero Paper Waste"}
            </div>
            <h3 className="text-lg font-display font-semibold text-white">
              {isArabic ? "تحديث فوري دون تكاليف طباعة" : isFrench ? "Zéro Coût de Réimpression" : "Instant Mobile Updates"}
            </h3>
            <p className="text-xs text-[#a0a0ab] leading-relaxed">
              {isArabic
                ? "عدّل الأسعار والأطباق اليومية في ثوانٍ معدودة من هاتفك الذكي دون انتظار أو طباعة ورقية."
                : isFrench
                ? "Modifiez les prix ou masquez un plat épuisé en 10 secondes depuis votre smartphone sans réimpression."
                : "Update prices or mark seasonal specials 86'd in seconds straight from your mobile phone with zero reprinting overhead."}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 space-y-3">
            <div className="text-2xl sm:text-3xl font-display font-bold text-amber-500">
              {isArabic ? "طلب سلس" : isFrench ? "Commande Directe" : "Direct Ordering"}
            </div>
            <h3 className="text-lg font-display font-semibold text-white">
              {isArabic ? "تكامل واتساب المباشر" : isFrench ? "Parcours WhatsApp Fluide" : "Frictionless WhatsApp Flow"}
            </h3>
            <p className="text-xs text-[#a0a0ab] leading-relaxed">
              {isArabic
                ? "يختار الضيوف أصنافهم ويرسلون القائمة الكاملة بضغطة زر إلى واتساب الفريق لتجهيز الطلب."
                : isFrench
                ? "Vos clients composent leur sélection et l'envoient en un clic sur le WhatsApp de votre service."
                : "Guests curate their order and transmit it instantly to your team's WhatsApp without third-party commission fees."}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 space-y-3">
            <div className="text-2xl sm:text-3xl font-display font-bold text-amber-500">
              {isArabic ? "بدون تطبيق" : isFrench ? "Zéro Téléchargement" : "Zero App Downloads"}
            </div>
            <h3 className="text-lg font-display font-semibold text-white">
              {isArabic ? "مسح QR سريع وفوري" : isFrench ? "Accès Instantané Safari & Chrome" : "Instant Browser Access"}
            </h3>
            <p className="text-xs text-[#a0a0ab] leading-relaxed">
              {isArabic
                ? "يفتح فوراً بمجرد مسح رمز QR في متصفح الهاتف بسرعة استثنائية وتصميم مريح للعين."
                : isFrench
                ? "Ouverture immédiate dès le scan du QR code, avec support trilingue natif et filtres alimentaires."
                : "Opens instantly in Safari and Chrome upon scanning your custom QR code with native trilingual switching."}
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-8">
          <Button
            href={`/${locale}/contact?product=digital-menu`}
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
