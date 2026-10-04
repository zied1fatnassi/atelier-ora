import { notFound } from "next/navigation";
import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 border-b border-white/10 pb-6">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">
            CONDITIONS GÉNÉRALES
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white">
            {dict.footer.terms}
          </h1>
          <p className="text-xs font-mono text-[#a0a0ab]">
            Édition 2026 • Atelier Ora Studio
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-[#a0a0ab] space-y-8 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              1. Objet &amp; Champ d&apos;Application
            </h2>
            <p>
              Les présentes Conditions Générales définissent les modalités de collaboration et de prestation de services entre l&apos;Atelier Ora Studio et ses clients professionnels (entreprises de restauration, hôtellerie, clubs sportifs, boutiques et marques de prestige).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              2. Prestations &amp; Propriété Intellectuelle
            </h2>
            <p>
              Toutes les œuvres créées (films publicitaires, photographies éditées, codes sources sur-mesure, identités de marque) font l&apos;objet d&apos;un contrat de cession de droits d&apos;exploitation défini dans le devis d&apos;intervention. Les droits sont pleinement transférés au client à compter du règlement intégral des sommes dues.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              3. Modalités de Tournage &amp; Production
            </h2>
            <p>
              Pour toute intervention de tournage vidéo 4K ou prise de vues photographiques dans l&apos;établissement du client, les plannings et conditions d&apos;accès sont convenus conjointement à l&apos;avance. L&apos;Atelier Ora s&apos;engage à opérer avec une discrétion maximale pour ne pas perturber le service commercial en cours.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              4. Droit Applicable &amp; Juridiction
            </h2>
            <p>
              Les présentes conditions sont soumises au droit tunisien. En cas de différend relatif à l&apos;interprétation ou à l&apos;exécution d&apos;une commande, les parties s&apos;engagent à rechercher une solution amiable avant toute action judiciaire devant les tribunaux compétents de Tunis.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
