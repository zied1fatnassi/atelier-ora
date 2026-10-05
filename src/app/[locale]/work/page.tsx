import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

interface WorkPageProps {
  params: Promise<{ locale: string }>;
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const isArabic = locale === "ar";
  const isFrench = locale === "fr";

  return (
    <div className="py-32 px-4 md:px-8 bg-[#060608] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="font-mono text-xs tracking-widest text-amber-400 uppercase">
              {dict.projects.tag}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            {dict.projects.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#a0a0ab] font-light leading-relaxed max-w-2xl">
            {dict.projects.subtitle}
          </p>

          <div className="p-4 rounded-2xl bg-[#0f0f15] border border-white/10 text-xs text-[#a0a0ab] flex items-center gap-3">
            <Badge variant="amber">
              <span>{dict.projects.badge}</span>
            </Badge>
            <span>{dict.projects.notice}</span>
          </div>
        </div>

        {/* Projects Gallery */}
        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {dict.projects.items.map((project, idx) => (
            <article
              key={project.slug}
              className="p-6 sm:p-10 rounded-[32px] bg-[#0c0c12] border border-white/10 space-y-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-500">
                    <span>0{idx + 1}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                    {project.title}
                  </h2>
                </div>

                <Button
                  href={`/${locale}/work/${project.slug}`}
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  {dict.common.viewCaseStudy}
                </Button>
              </div>

              {/* Big Media Showcase */}
              <Link
                href={`/${locale}/work/${project.slug}`}
                className="block relative aspect-[16/9] w-full rounded-2xl overflow-hidden group bg-neutral-900 focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-6 start-6 end-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-bold font-mono">
                    4K MASTER
                  </span>
                </div>
              </Link>

              {/* Sub Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.gallery.map((img, gIdx) => (
                  <div
                    key={gIdx}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} preview ${gIdx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Project Story & Challenge/Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs text-[#a0a0ab]">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="font-mono text-amber-400 uppercase tracking-wider block">
                    {isArabic ? "التحدي :" : isFrench ? "LE DÉFI :" : "THE CHALLENGE:"}
                  </span>
                  <p className="leading-relaxed text-white/80">
                    {project.challenge}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="font-mono text-amber-400 uppercase tracking-wider block">
                    {isArabic ? `حل ${siteConfig.name} :` : isFrench ? `LA SOLUTION ${siteConfig.name} :` : `${siteConfig.name} SOLUTION:`}
                  </span>
                  <p className="leading-relaxed text-white/80">
                    {project.solution}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="font-mono text-amber-400 uppercase tracking-wider block">
                    {isArabic ? "النتائج والمخرجات :" : isFrench ? "LIVRABLES & RÉSULTATS :" : "KEY DELIVERABLES:"}
                  </span>
                  <ul className="space-y-1 text-white/90">
                    {project.results.map((r, rI) => (
                      <li key={rI} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
