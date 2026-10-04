import { notFound } from "next/navigation";
import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
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
            INFORMATIONS LÉGALES
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white">
            {dict.footer.privacy}
          </h1>
          <p className="text-xs font-mono text-[#a0a0ab]">
            Dernière mise à jour : Octobre 2026 • Atelier Ora Studio
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-[#a0a0ab] space-y-8 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              1. Engagement de Confidentialité
            </h2>
            <p>
              L&apos;Atelier Ora s&apos;engage à protéger la vie privée et les données personnelles des visiteurs de son site web, de ses clients et prospects. Cette politique détaille les types d&apos;informations que nous collectons et la manière dont elles sont traitées dans le respect des législations en vigueur en Tunisie et à l&apos;international (RGPD).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              2. Données Collectées via le Formulaire
            </h2>
            <p>
              Lorsque vous remplissez notre formulaire guidé de démarrage de projet, nous collectons : votre nom, votre numéro de téléphone/WhatsApp, votre adresse email, le nom de votre établissement et les spécifications de votre projet. Ces informations sont strictement utilisées pour élaborer votre cadrage créatif et vous répondre dans les 24 heures. Elles ne sont jamais revendues ni cédées à des tiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              3. Cookies et Mesures d&apos;Audience
            </h2>
            <p>
              Nous utilisons des cookies techniques strictement nécessaires au bon fonctionnement de la plateforme (sauvegarde de la langue choisie, état du mode sans animation, sauvegarde locale de votre progression dans le formulaire). Nous respectons scrupuleusement votre choix via notre bandeau de consentement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              4. Vos Droits
            </h2>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Pour toute demande, vous pouvez contacter notre délégué à la protection des données par email à : contact@atelierora.studio.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
