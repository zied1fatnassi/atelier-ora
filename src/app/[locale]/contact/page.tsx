import { notFound } from "next/navigation";
import { Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { GuidedProjectForm } from "@/components/sections/GuidedProjectForm";
import { Badge } from "@/components/ui/Badge";
import { MessageCircle, Mail, MapPin } from "lucide-react";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="amber">
              <span>{dict.contact.tag}</span>
            </Badge>
            <Badge variant="rec">
              <span>RÉPONSE GARANTIE SOUS 24H</span>
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {dict.contact.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#a0a0ab] font-light leading-relaxed max-w-3xl">
            {dict.contact.subtitle}
          </p>
        </div>

        {/* Quick Contact & Direct Channel Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/21629888900"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-[#0f0f15] border border-white/10 hover:border-emerald-500/50 hover:bg-[#12121a] transition-all flex items-center gap-4 group"
          >
            <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#a0a0ab] uppercase block">
                WHATSAPP DIRECT
              </span>
              <span className="text-base font-semibold text-white group-hover:text-emerald-300">
                +216 29 888 900
              </span>
            </div>
          </a>

          <a
            href="mailto:contact@atelierora.studio"
            className="p-6 rounded-3xl bg-[#0f0f15] border border-white/10 hover:border-amber-500/50 hover:bg-[#12121a] transition-all flex items-center gap-4 group"
          >
            <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#a0a0ab] uppercase block">
                EMAIL DU STUDIO
              </span>
              <span className="text-base font-semibold text-white group-hover:text-amber-300">
                contact@atelierora.studio
              </span>
            </div>
          </a>

          <div className="p-6 rounded-3xl bg-[#0f0f15] border border-white/10 flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.04] text-white shrink-0">
              <MapPin className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#a0a0ab] uppercase block">
                LOCALISATION
              </span>
              <span className="text-sm font-semibold text-white">
                Les Berges du Lac 2 / La Marsa, Tunis
              </span>
            </div>
          </div>
        </div>

        {/* The 5-Step Guided Project Form */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest">
              QUESTIONNAIRE DE CADRAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Définissez votre vision en 2 minutes.
            </h2>
          </div>

          <GuidedProjectForm locale={locale as Locale} dict={dict} />
        </div>
      </div>
    </div>
  );
}
