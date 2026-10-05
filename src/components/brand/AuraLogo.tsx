import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface AuraLogoProps {
  className?: string;
  variant?: "full" | "compact" | "mark";
  theme?: "dark" | "light" | "monochrome";
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

export function AuraLogo({
  className = "",
  variant = "full",
  theme = "dark",
  size = "md",
  priority = true,
}: AuraLogoProps) {
  const isLight = theme === "light";
  const isMono = theme === "monochrome";

  // Pick appropriate logo asset:
  // For dark backgrounds (default), use the dark-optimized logo where 'Prod' is crisp white
  // For light backgrounds, use the original logo where 'Prod' is dark
  const logoSrc = isLight
    ? "/brand/aura-prod-logo.png"
    : "/brand/aura-prod-logo-dark.png";

  const markSrc = "/brand/icon-192.png";

  const dimensions = {
    sm: { width: 62, height: 32, mark: 26 },
    md: { width: 80, height: 42, mark: 32 },
    lg: { width: 110, height: 58, mark: 44 },
  }[size];

  if (variant === "mark") {
    return (
      <div
        className={cn(
          "relative inline-flex items-center justify-center shrink-0 rounded-lg overflow-hidden select-none transition-transform duration-300 hover:scale-105",
          className
        )}
        style={{ width: dimensions.mark, height: dimensions.mark }}
        aria-label={`${siteConfig.name} Logomark`}
      >
        <Image
          src={markSrc}
          alt={`${siteConfig.name} Logomark`}
          width={dimensions.mark}
          height={dimensions.mark}
          className="w-full h-full object-contain rounded-lg"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative inline-flex items-center select-none transition-transform duration-300 hover:scale-[1.02]",
        isMono && (isLight ? "filter grayscale brightness-0" : "filter grayscale brightness-200"),
        className
      )}
      style={{ width: dimensions.width, height: dimensions.height }}
      aria-label={`${siteConfig.name} Logo`}
    >
      <Image
        src={logoSrc}
        alt={`${siteConfig.name} Logo`}
        width={785}
        height={410}
        priority={priority}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

