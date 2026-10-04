import { notFound } from "next/navigation";
import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PricingSection } from "@/components/sections/PricingSection";
import { Badge } from "@/components/ui/Badge";
import { HelpCircle } from "lucide-react";

interface PricingPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PricingPage({ params }: PricingPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  const faqs = [
    {
      q: "Pourquoi vos tarifs sont-ils indiqués « À partir de » ?",
      a: "Chaque établissement a des besoins uniques : certains ont besoin d'un menu de 50 références et d'un film commercial de 60 secondes, d'autres ont besoin d'un site d'adhésion privé pour un club de fitness avec 10 vidéos d'exercices. Nous débutons toujours par un cadrage précis pour vous soumettre un montant ferme et définitif avant le premier coup de caméra ou la première ligne de code.",
    },
    {
      q: "Quels sont les délais habituels de livraison d'un projet complet ?",
      a: "Pour la formule Éclosion (1 490 TND), comptez généralement 10 à 14 jours ouvrés après le tournage sur place. Pour la formule Signature & Film (2 400 TND), comptez 3 à 4 semaines pour l'ensemble du tournage 4K, le montage étalonné, le développement sur-mesure et les tests multilingues.",
    },
    {
      q: "Puis-je commander uniquement un film publicitaire ou uniquement un menu digital ?",
      a: "Absolument. Bien que notre force réside dans la synergie globale entre l'image et le code, toutes nos expertises peuvent être commandées individuellement selon les priorités actuelles de votre entreprise.",
    },
    {
      q: "Comment fonctionne la formule Content Care mensuelle ?",
      a: "C'est un abonnement mensuel sans engagement à long terme. Chaque mois, nous passons une journée dans votre établissement pour capturer de nouveaux plats, de nouveaux cours de sport ou de nouveaux événements, et nous vous livrons 4 vidéos montées prêtes à publier sur vos réseaux sociaux tout en maintenant votre site et vos menus à jour.",
    },
    {
      q: "Quelles sont les modalités de paiement acceptées ?",
      a: "Nous acceptons les virements bancaires professionnels en Tunisie (TND) ainsi que les règlements internationaux en devises (EUR / USD) pour nos clients étrangers. Le règlement s'effectue généralement en 2 ou 3 échéances : acompte au lancement, étape de validation intermédiaire, et solde à la mise en ligne.",
    },
  ];

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="font-mono text-xs tracking-widest text-amber-400 uppercase">
              {dict.pricing.tag}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {dict.pricing.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#a0a0ab] font-light leading-relaxed max-w-3xl">
            {dict.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Tiers & Calculator Section */}
        <PricingSection locale={locale as Locale} dict={dict} />

        {/* FAQ Section with Semantic & Accessible details */}
        <div className="max-w-4xl mx-auto space-y-10 pt-12 border-t border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>QUESTIONS FRÉQUENTES</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">
              Tout ce que vous devez savoir avant de démarrer.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-[#0c0c12] border border-white/10 open:border-amber-500/40 transition-colors cursor-pointer"
              >
                <summary className="font-display font-semibold text-lg text-white list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-amber-500 group-open:rotate-45 transition-transform text-2xl font-light">
                    +
                  </span>
                </summary>
                <p className="text-sm text-[#a0a0ab] leading-relaxed pt-4 border-t border-white/5 mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
