"use client";

import React from "react";
import { AuraLogo } from "./AuraLogo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface AuraSplashLoaderProps {
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}

export function AuraSplashLoader({
  className = "",
  label = "AURA PROD • INITIALIZING STUDIO ENGINE",
  size = "md",
  fullScreen = false,
}: AuraSplashLoaderProps) {
  const content = (
    <div className={cn("flex flex-col items-center justify-center gap-6", className)}>
      {/* Glowing Pulsing Icon Mark */}
      <div className="relative flex items-center justify-center">
        {/* Ambient solar amber glow */}
        <div
          className="absolute -inset-4 rounded-full bg-amber-500/20 blur-xl animate-pulse"
          aria-hidden="true"
        />
        
        {/* Animated Aura Symbol */}
        <div className="relative z-10 animate-bounce duration-1000">
          <AuraLogo variant="mark" size={size === "lg" ? "xl" : size === "sm" ? "md" : "lg"} />
        </div>
      </div>

      {/* Brand Typography & HUD Progress Line */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
          <span className="font-mono text-[11px] tracking-[0.25em] text-white/80 uppercase font-semibold">
            {siteConfig.name}
          </span>
        </div>

        {label && (
          <span className="font-mono text-[10px] tracking-widest text-[#a0a0ab] uppercase">
            {label}
          </span>
        )}

        {/* Minimalist Studio Progress Line */}
        <div className="w-36 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 w-1/2 rounded-full animate-[shimmer_1.6s_infinite_linear]" />
        </div>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#060608]/95 backdrop-blur-md">
        {content}
      </div>
    );
  }

  return content;
}
