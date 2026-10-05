import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 border-b border-white/10 pb-6">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">
            {isArabic ? "الشروط والأحكام" : isFrench ? "CONDITIONS GÉNÉRALES" : "TERMS OF SERVICE"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white">
            {dict.footer.terms}
          </h1>
          <p className="text-xs font-mono text-[#a0a0ab]">
            {isArabic
              ? `إصدار 2026 • ${siteConfig.name}`
              : isFrench
              ? `Édition 2026 • ${siteConfig.name}`
              : `Edition 2026 • ${siteConfig.name}`}
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-[#a0a0ab] space-y-8 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              {isArabic ? "1. النطاق ومجال التطبيق" : isFrench ? "1. Objet & Champ d'Application" : "1. Scope & Application"}
            </h2>
            <p>
              {isArabic
                ? `تحدد هذه الشروط العامة أطر التعاون وتقديم الخدمات بين ${siteConfig.name} (${siteConfig.legalName}) وعملائها من أصحاب المنشآت والعلامات التجارية والشركات.`
                : isFrench
                ? `Les présentes Conditions Générales définissent les modalités de collaboration et de prestation de services entre ${siteConfig.name} (${siteConfig.legalName}) et ses clients professionnels (entreprises de restauration, hôtellerie, clubs sportifs, commerces et entreprises).`
                : `These Terms of Service govern the collaboration and provision of digital and creative services between ${siteConfig.name} (${siteConfig.legalName}) and its professional clients across web engineering, commercial content production, branding, and AI solutions.`}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              {isArabic ? "2. حقوق الملكية الفكرية والتسليم" : isFrench ? "2. Prestations & Propriété Intellectuelle" : "2. Deliverables & Intellectual Property"}
            </h2>
            <p>
              {isArabic
                ? "تنتقل حقوق استغلال الأعمال المنفذة (الأفلام التجارية، الصور الفوتوغرافية، الأكواد البرمجية المخصصة، أنظمة الهوية) بالكامل إلى العميل فور تسوية المبالغ المستحقة بموجب اتفاقية العمل المعتمدة."
                : isFrench
                ? "Toutes les œuvres créées (films commerciaux, photographies éditées, codes sources sur-mesure, identités de marque) font l'objet d'une cession des droits d'exploitation stipulée dans la proposition. Les droits sont pleinement transférés au client à compter du règlement intégral des prestations convenues."
                : "All commissioned custom deliverables (commercial films, edited photography libraries, custom codebase, brand identities) are transferred to the client with full commercial usage rights upon complete settlement of agreed proposal terms."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              {isArabic ? "3. شروط الإنتاج والتصوير الميداني" : isFrench ? "3. Modalités de Tournage & Production" : "3. On-Location Production & Filming"}
            </h2>
            <p>
              {isArabic
                ? "يتم التنسيق المسبق لجدول مواعيد التصوير بالموقع لضمان تصوير هادئ وسلس دون أي تعطيل لسير العمل التجاري للعميل أو إزعاج الضيوف."
                : isFrench
                ? "Pour toute intervention de tournage vidéo 4K ou prise de vues photographiques sur site, les plannings et conditions d'accès sont convenus conjointement à l'avance. Notre équipe opère avec une discrétion maximale afin de préserver la tranquillité de votre clientèle et de vos opérations."
                : "All on-location commercial filming and photography schedules are coordinated in advance. Production is executed with agile cinema equipment and high discretion to avoid any interruption to your daily business operations or guest experience."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              {isArabic ? "4. القانون المعمول به والتواصل" : isFrench ? "4. Droit Applicable & Contact" : "4. Applicable Law & Contact"}
            </h2>
            <p>
              {isArabic
                ? `تخضع هذه الشروط للقوانين المنظمة في تونس، ويتم حل أي استفسار بالتراضي الودي أولاً. للتواصل الرسمي: ${siteConfig.emails.general}، هاتف: ${siteConfig.contact.phone}.`
                : isFrench
                ? `Les présentes conditions sont soumises à la législation applicable en Tunisie. En cas de différend, les parties privilégient une concertation amiable. Contact officiel : ${siteConfig.emails.general}, téléphone : ${siteConfig.contact.phone}.`
                : `These terms are governed by the applicable commercial laws in Tunisia. For formal or contractual inquiries, contact: ${siteConfig.emails.general} or telephone: ${siteConfig.contact.phone}.`}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
