import { notFound } from "next/navigation";
import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { PricingSection } from "@/components/sections/PricingSection";
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
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  const faqs = isArabic
    ? [
        {
          q: "كيف يتم تحديد تكلفة ونطاق المشروع في AURA PROD؟",
          a: "كل منشأة أو علامة تجارية تتطلب مواصفات دقيقة: من عدد صفحات المنصة ونوع التفاعل المطلوب، إلى أيام التصوير السينمائي بالموقع ومتطلبات اللغات. نبدأ بجلسة اكتشاف استراتيجية لتقديم مقترح واضح ومفصل قبل البدء بأي خطوة إنتاجية.",
        },
        {
          q: "ما هي المدة الزمنية المعتادة لتسليم مشروع متكامل؟",
          a: "عادةً ما تستغرق المشاريع المحددة من أسبوعين إلى 3 أسابيع، بينما تستغرق المشاريع الشاملة (التي تشمل تصوير الفيديو 4K ومعالجة الألوان وتطوير المنصة والمنيو الرقمي) ما بين 3 إلى 5 أسابيع عمل متقنة.",
        },
        {
          q: "هل يمكن التعاقد على خدمة منفصلة مثل الفيديو التجاري أو المنيو فقط؟",
          a: "بالتأكيد. رغم أن قوتنا الأساسية تكمن في تقديم تجربة رقمية شاملة تجمع بين الصورة والكود، يمكنك طلب أي من الركائز الخمس بشكل مستقل وفقاً لاحتياجاتك الراهنة.",
        },
        {
          q: "كيف تعمل الشراكة الإبداعية الشهرية (Creative Retainer)؟",
          a: "تعمل كاستوديو رقمي وفني مدمج مع علامتك التجارية؛ حيث نقوم بتخصيص أيام تصوير دورية كل شهر لإنتاج مقاطع فيديو ريلز جديدة، وتحديث الموقع الإلكتروني وقوائم الطعام وصيانة الأداء التقني باستمرار.",
        },
        {
          q: "ما هي طرق الدفع والتعاقد المتاحة؟",
          a: "نوفر فواتير رسمية وعقود عمل واضحة. نقبل التحويلات البنكية محلياً في تونس (TND) وكذلك التحويلات الدولية بالعملات الأجنبية (EUR / USD) لشركائنا وعملائنا في الخارج.",
        },
      ]
    : isFrench
    ? [
        {
          q: "Comment est déterminé le devis d'un projet chez AURA PROD ?",
          a: "Chaque établissement possède ses propres exigences : du nombre de pages et d'interactions sur-mesure au temps de tournage vidéo 4K sur site et à la configuration multilingue. Nous débutons toujours par un cadrage précis pour vous soumettre une proposition claire et définitive.",
        },
        {
          q: "Quels sont les délais habituels de réalisation d'un projet ?",
          a: "Comptez généralement 2 à 3 semaines pour une plateforme web ciblée, et 3 à 5 semaines pour un projet complet combinant tournage cinématographique, étalonnage 4K, développement Next.js et menu digital.",
        },
        {
          q: "Peut-on faire appel à vous uniquement pour la production vidéo ou le menu digital ?",
          a: "Absolument. Même si notre plus grande valeur réside dans la synergie globale entre l'image de marque, le film et le code, chacune de nos cinq expertises peut être activée individuellement.",
        },
        {
          q: "Comment fonctionne la formule de partenariat créatif mensuel ?",
          a: "Nous opérons comme votre équipe créative et technologique intégrée. Chaque mois, nous réalisons de nouvelles prises de vue sur site, produisons vos vidéos et assurons la maintenance et l'évolution continue de votre écosystème digital.",
        },
        {
          q: "Quelles sont les modalités de règlement acceptées ?",
          a: "Nous acceptons les virements bancaires en Tunisie (TND) ainsi que les règlements internationaux en devises (EUR / USD) pour nos clients à l'étranger, avec facturation professionnelle et échelonnement par jalons validés.",
        },
      ]
    : [
        {
          q: "How does AURA PROD scope and structure project proposals?",
          a: "Every brand has unique technical and visual requirements: from custom web pages and interactions to on-location cinema shoot days and multilingual architectures. We conduct a discovery session to deliver a transparent, fixed-scope proposal before production begins.",
        },
        {
          q: "What is the typical production timeline for a full project?",
          a: "Targeted web platforms typically launch within 2 to 3 weeks. Comprehensive turnkey productions—including on-location 4K filming, DaVinci Resolve color mastering, custom Next.js engineering, and digital menus—typically require 3 to 5 weeks.",
        },
        {
          q: "Can we commission commercial video production or a digital menu individually?",
          a: "Yes. While our greatest commercial advantage lies in unified creative production (combining video, branding, and software), all five core pillars can be commissioned independently based on your current priorities.",
        },
        {
          q: "How does the monthly creative retainer operate?",
          a: "We function as your dedicated in-house creative studio. We schedule regular shoot days on location each month, deliver fresh social video reels and campaign photography, and continuously manage your web platform and digital menu updates.",
        },
        {
          q: "What payment and billing structures are supported?",
          a: "We provide official commercial invoices with milestone-based agreements. We accept domestic bank transfers in Tunisia (TND) as well as international wire transfers in EUR and USD for international clients.",
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

        {/* Pricing Tiers & Scope Estimator Section */}
        <PricingSection locale={locale as Locale} dict={dict} />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-10 pt-12 border-t border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>
                {isArabic
                  ? "الأسئلة الشائعة"
                  : isFrench
                  ? "QUESTIONS FRÉQUENTES"
                  : "FREQUENT QUESTIONS"}
              </span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">
              {isArabic
                ? "كل ما ترغب في معرفته قبل بدء العمل معنا."
                : isFrench
                ? "Tout ce que vous devez savoir avant de démarrer."
                : "Key questions before starting a collaboration."}
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
