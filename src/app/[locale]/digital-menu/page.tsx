import { notFound } from "next/navigation";
import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { DigitalMenuPreviewSection } from "@/components/sections/DigitalMenuPreviewSection";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  QrCode,
  Smartphone,
  MessageCircle,
  Zap,
  Globe,
  CheckCircle,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

interface DigitalMenuPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DigitalMenuPage({ params }: DigitalMenuPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="amber">
              <span>PRODUIT DIGITALE BOUTIQUE</span>
            </Badge>
            <Badge variant="hud">
              <span>TRILINGUE FR / AR / EN</span>
            </Badge>
            <Badge variant="hud">
              <span>COMMANDE WHATSAPP DIRECTE</span>
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
              Commander notre menu digital
            </Button>
          </div>
        </div>

        {/* Live Interactive Simulator Section */}
        <div className="rounded-[36px] bg-[#09090e] border border-white/10 p-4 sm:p-10 shadow-2xl">
          <DigitalMenuPreviewSection locale={locale as Locale} dict={dict} />
        </div>

        {/* ROI Metrics / Why restaurants switch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 space-y-3">
            <div className="text-3xl sm:text-4xl font-display font-bold text-amber-500">
              0 TND
            </div>
            <h3 className="text-lg font-display font-semibold text-white">
              Zéro Coût de Réimpression Papier
            </h3>
            <p className="text-xs text-[#a0a0ab] leading-relaxed">
              Fini les factures d&apos;imprimerie à chaque changement de saison ou ajustement de prix. Modifiez un tarif en 10 secondes depuis votre smartphone.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 space-y-3">
            <div className="text-3xl sm:text-4xl font-display font-bold text-amber-500">
              +38%
            </div>
            <h3 className="text-lg font-display font-semibold text-white">
              Augmentation du Panier Moyen
            </h3>
            <p className="text-xs text-[#a0a0ab] leading-relaxed">
              Des photos haute définition de chaque dessert et boisson signature stimulent directement la commande spontanée de vos clients.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 space-y-3">
            <div className="text-3xl sm:text-4xl font-display font-bold text-amber-500">
              100%
            </div>
            <h3 className="text-lg font-display font-semibold text-white">
              Autonomie Complète de l&apos;Équipe
            </h3>
            <p className="text-xs text-[#a0a0ab] leading-relaxed">
              Une interface d&apos;administration si limpide que vos serveurs ou managers peuvent marquer un plat épuisé pendant le service sans faire appel à un développeur.
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
            Déployer le Menu Digital dans votre établissement
          </Button>
        </div>
      </div>
    </div>
  );
}
