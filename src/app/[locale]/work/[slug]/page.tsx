import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { isValidLocale, SUPPORTED_LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = ["mirador", "kinetix", "dar-el-bahr"];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const project = dict.projects.items.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-28 px-4 md:px-8 bg-[#060608] min-h-screen text-white">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Navigation Back */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#a0a0ab] hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{dict.common.back} {dict.nav.work}</span>
          </Link>

          <Badge variant="amber">
            <span>{dict.projects.badge}</span>
          </Badge>
        </div>

        {/* Case Study Hero */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-amber-500 uppercase">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.location}</span>
            <span>•</span>
            <span>PROD {project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#a0a0ab] font-light max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Cinematic Media */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          <div className="absolute top-6 start-6 flex items-center gap-3">
            <Badge variant="rec">
              <span>{dict.common.rec}</span>
            </Badge>
            <Badge variant="hud">
              <span>4K 24FPS D-LOG M</span>
            </Badge>
          </div>

          <div className="absolute bottom-6 end-6">
            <Button
              href={`/${locale}/contact?project=${project.slug}`}
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Commander un projet similaire
            </Button>
          </div>
        </div>

        {/* Editorial Narrative: Challenge & Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 border-y border-white/10">
          <div className="space-y-4">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block">
              01. LE DÉFI COMMERCIAL &amp; CRÉATIF
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white">
              Rompre avec l&apos;ordinaire.
            </h2>
            <p className="text-sm sm:text-base text-[#a0a0ab] leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block">
              02. LA STRATÉGIE ATELIER ORA
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white">
              Une direction esthétique radicale.
            </h2>
            <p className="text-sm sm:text-base text-[#a0a0ab] leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Production Gallery */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-2xl text-white">
              Galerie de Production &amp; Étalonnage
            </h3>
            <span className="text-xs font-mono text-[#a0a0ab]">
              SHOOT SUR SITE EN CONDITIONS RÉELLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10"
              >
                <Image
                  src={img}
                  alt={`${project.title} gallery shot ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Concrete Measurable Results */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111119] border border-white/10 space-y-6">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block">
            03. RÉSULTATS TANGIBLES
          </span>
          <h3 className="text-3xl font-display font-bold text-white">
            L&apos;impact concret mesuré après déploiement.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {project.results.map((res, rIdx) => (
              <div
                key={rIdx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2"
              >
                <CheckCircle className="w-5 h-5 text-amber-500" />
                <div className="text-sm font-semibold text-white">{res}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#14141e] to-transparent border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-white">
              Votre établissement a le même potentiel.
            </h3>
            <p className="text-xs text-[#a0a0ab] mt-1">
              Concevons ensemble la présence digitale d&apos;exception qui fera votre renommée.
            </p>
          </div>
          <Button
            href={`/${locale}/contact`}
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            {dict.common.startProject}
          </Button>
        </div>
      </div>
    </article>
  );
}
