import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AuraLogo } from "@/components/brand/AuraLogo";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 bg-[#060608] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full -top-20 -left-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute w-[400px] h-[400px] bg-red-600/10 blur-[130px] rounded-full -bottom-20 -right-20"
        aria-hidden="true"
      />

      <div className="max-w-md w-full text-center space-y-8 relative z-10 p-8 rounded-3xl bg-[#0c0c14]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
        {/* Brand Logo Header */}
        <div className="flex justify-center">
          <AuraLogo variant="full" size="md" />
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-[11px] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>ERROR 404 • SCENE NOT FOUND</span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-display font-extrabold text-white tracking-tight">
            404
          </h1>

          <p className="text-sm text-[#a0a0ab] leading-relaxed max-w-sm mx-auto">
            This cut, frame, or page does not exist in the {siteConfig.name} production timeline.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <Link
            href="/fr"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 transition-all shadow-[0_0_24px_rgba(245,158,11,0.25)] hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Studio Overview</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
