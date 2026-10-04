import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/get-dictionary";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { ArrowUpRight } from "lucide-react";

interface SelectedWorkSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function SelectedWorkSection({ locale, dict }: SelectedWorkSectionProps) {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-[#060608] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            tag={dict.projects.tag}
            title={dict.projects.title}
            subtitle={dict.projects.subtitle}
            className="mb-0"
          />

          <div className="flex flex-col items-start md:items-end gap-2">
            <Badge variant="amber">
              <span>{dict.projects.badge}</span>
            </Badge>
            <p className="text-xs text-[#a0a0ab] max-w-xs md:text-end">
              {dict.projects.notice}
            </p>
          </div>
        </div>

        {/* Flagship Projects List */}
        <div className="space-y-20 md:space-y-32">
          {dict.projects.items.map((project, idx) => (
            <article
              key={project.slug}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Media Preview Box */}
              <div className="lg:col-span-7 overflow-hidden rounded-3xl bg-[#101016] border border-white/10 aspect-[16/10] relative">
                <Link
                  href={`/${locale}/work/${project.slug}`}
                  data-cursor="VIEW"
                  className="block w-full h-full relative overflow-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded-3xl"
                  aria-label={`${project.title} - ${project.category}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Corner HUD Data */}
                  <div className="absolute top-4 start-4 flex items-center gap-2">
                    <Badge variant="hud">
                      <span>{project.location}</span>
                    </Badge>
                    <Badge variant="hud">
                      <span>{project.year}</span>
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 end-4">
                    <span className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </div>

              {/* Editorial Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-amber-500 font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="w-6 h-px bg-white/20" />
                  <span className="font-mono text-xs text-[#a0a0ab] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  <Link href={`/${locale}/work/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-base text-[#a0a0ab] leading-relaxed font-light">
                  {project.summary}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.services.map((srv) => (
                    <span
                      key={srv}
                      className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/80 font-mono"
                    >
                      {srv}
                    </span>
                  ))}
                </div>

                {/* Key Outcomes / Results */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#a0a0ab]">
                  {project.results.slice(0, 2).map((res, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-white/90">{res}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/${locale}/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>{dict.common.viewCaseStudy}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Work Link */}
        <div className="mt-20 text-center">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#12121a] border border-white/15 text-white font-medium hover:bg-white/10 hover:border-amber-500/50 transition-all text-sm shadow-lg"
          >
            <span>{dict.common.viewAllWork}</span>
            <ArrowUpRight className="w-4 h-4 text-amber-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
