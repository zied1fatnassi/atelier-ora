import { notFound } from "next/navigation";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
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
            {isArabic ? "المعلومات القانونية والخصوصية" : isFrench ? "INFORMATIONS LÉGALES & CONFIDENTIALITÉ" : "LEGAL & DATA PRIVACY"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white">
            {dict.footer.privacy}
          </h1>
          <p className="text-xs font-mono text-[#a0a0ab]">
            {isArabic
              ? `آخر تحديث: 2026 • ${siteConfig.name}`
              : isFrench
              ? `Dernière mise à jour : Octobre 2026 • ${siteConfig.name}`
              : `Last Updated: October 2026 • ${siteConfig.name}`}
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-[#a0a0ab] space-y-8 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              {isArabic ? "1. الالتزام بالخصوصية" : isFrench ? "1. Engagement de Confidentialité" : "1. Commitment to Privacy"}
            </h2>
            <p>
              {isArabic
                ? `تلتزم ${siteConfig.name} (${siteConfig.legalName}) بحماية خصوصية وبيانات زوار الموقع والعملاء. توضح هذه السياسة كيفية جمع البيانات ومعالجتها وفقاً لأعلى معايير حماية البيانات واللائحة العامة لحماية البيانات (GDPR).`
                : isFrench
                ? `${siteConfig.name} (${siteConfig.legalName}) s'engage à protéger la vie privée et les données personnelles des visiteurs de son site web et de ses clients. Cette politique détaille les informations que nous traitons conformément aux principes de minimisation des données et aux normes internationales (RGPD).`
                : `${siteConfig.name} (${siteConfig.legalName}) is committed to safeguarding the privacy and personal data of website visitors, clients, and partners. This policy outlines how information is collected, processed, and secured in adherence to international data protection principles (GDPR compliant).`}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              {isArabic ? "2. البيانات المجمعة عبر استمارة المشروع" : isFrench ? "2. Données Collectées via le Formulaire" : "2. Information Collected via Project Inquiries"}
            </h2>
            <p>
              {isArabic
                ? "عند ملء استمارة المشروع، نقوم بجمع: الاسم الكامل، رقم الهاتف/واتساب، البريد الإلكتروني، اسم المنشأة، والخدمات المطلوبة. تُستخدم هذه البيانات حصرياً لإعداد العرض الفني والتواصل معك، ولا يتم بيعها أو مشاركتها مع أي جهة خارجية."
                : isFrench
                ? "Lorsque vous transmettez une demande de projet, nous collectons : votre nom complet, votre numéro de téléphone ou WhatsApp, votre adresse e-mail professionnelle, le nom de votre établissement et les spécifications de votre projet. Ces données sont strictement utilisées pour élaborer votre cadrage créatif et ne sont jamais cédées à des tiers."
                : "When you submit a project inquiry, we collect: full name, business email, phone or WhatsApp number, company name, and project requirements. This information is strictly utilized to prepare your proposal and respond directly. We never sell or transfer personal data to third parties."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              {isArabic ? "3. ملفات تعريف الارتباط والتقنيات" : isFrench ? "3. Cookies et Respect de l'Audience" : "3. Essential Cookies & Privacy"}
            </h2>
            <p>
              {isArabic
                ? "نستخدم ملفات تعريف ارتباط فنية فقط لضمان عمل المنصة (تذكر اللغة المفضلة، إعدادات تقليل الحركة، وحفظ تقدم الاستمارة محلياً على جهازك دون أي تتبع إعلاني غير مصرح به)."
                : isFrench
                ? "Nous utilisons uniquement des cookies techniques strictement nécessaires au fonctionnement de la plateforme (préférence linguistique, mode sans animation, sauvegarde locale de progression). Aucun traceur publicitaire intrusif n'est activé sans consentement explicite."
                : "We utilize strictly essential technical cookies to enable platform functionality (locale preference, reduced motion preference, and local form state persistence). No non-essential advertising trackers are deployed without explicit consent."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-semibold text-white">
              {isArabic ? "4. حقوقك ومسؤول حماية البيانات" : isFrench ? "4. Vos Droits & Délégué à la Protection des Données" : "4. Your Rights & Data Controller Contact"}
            </h2>
            <p>
              {isArabic
                ? `يحق لك طلب الوصول إلى بياناتك أو تعديلها أو حذفها في أي وقت. لأي استفسار يتعلق بالخصوصية، يمكنك التواصل مع مسؤول الخصوصية عبر البريد الإلكتروني: ${siteConfig.emails.privacy}. المقر: ${siteConfig.location.address}.`
                : isFrench
                ? `Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour toute demande, veuillez contacter notre responsable de la confidentialité à : ${siteConfig.emails.privacy}. Siège : ${siteConfig.location.address}.`
                : `You maintain the right to access, rectify, or request deletion of your personal data at any time. For any data inquiries or rights requests, contact our privacy office directly at: ${siteConfig.emails.privacy}. Registered address: ${siteConfig.location.address}.`}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
