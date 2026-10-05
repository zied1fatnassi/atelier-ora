import React from "react";
import { siteConfig } from "@/config/site";

interface AuraLogoProps {
  className?: string;
  variant?: "full" | "compact" | "mark";
  theme?: "dark" | "light" | "monochrome";
  size?: "sm" | "md" | "lg";
}

export function AuraLogo({
  className = "",
  variant = "full",
  theme = "dark",
  size = "md",
}: AuraLogoProps) {
  const isLight = theme === "light";
  const isMono = theme === "monochrome";

  const textColor = isMono
    ? isLight
      ? "text-black"
      : "text-white"
    : isLight
    ? "text-zinc-900"
    : "text-[#f8f8fa]";

  const accentFill = isMono ? (isLight ? "#000000" : "#ffffff") : siteConfig.accentColor;

  const markSize =
    size === "sm" ? "w-6 h-6" : size === "lg" ? "w-10 h-10" : "w-8 h-8";

  const textSize =
    size === "sm"
      ? "text-sm tracking-[0.2em]"
      : size === "lg"
      ? "text-2xl tracking-[0.25em]"
      : "text-lg tracking-[0.22em]";

  const subtextSize =
    size === "sm"
      ? "text-[9px] tracking-[0.3em]"
      : size === "lg"
      ? "text-[12px] tracking-[0.35em]"
      : "text-[10px] tracking-[0.32em]";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Logomark (Aperture / A-Monogram) */}
      <svg
        className={`${markSize} shrink-0 transition-transform duration-300 hover:scale-105`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AURA DESIGN Logomark"
      >
        {/* Outer Frame Hex-Cut */}
        <path
          d="M20 2L36 11V29L20 38L4 29V11L20 2Z"
          stroke={isLight ? "#18181b" : "#ffffff"}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90"
        />
        {/* Modernist Architectural 'A' Apex */}
        <path
          d="M20 7L28 27H12L20 7Z"
          stroke={isLight ? "#27272a" : "#e4e4e7"}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Horizontal Prism Crossbar */}
        <line
          x1="14"
          y1="22"
          x2="26"
          y2="22"
          stroke={isLight ? "#27272a" : "#e4e4e7"}
          strokeWidth="1.5"
        />
        {/* Signature Solar Amber Focal Prism Core */}
        <circle cx="20" cy="16" r="2.5" fill={accentFill} />
        <circle
          cx="20"
          cy="16"
          r="4.5"
          stroke={accentFill}
          strokeWidth="0.75"
          strokeOpacity="0.4"
        />
      </svg>

      {/* Typography Elements */}
      {variant !== "mark" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display font-extrabold uppercase ${textColor} ${textSize}`}
            >
              AURA
            </span>
            {variant === "full" && (
              <span
                className={`font-sans font-light uppercase opacity-80 ${textColor} ${subtextSize} self-center mt-0.5`}
              >
                DESIGN
              </span>
            )}
            {!isMono && (
              <span
                className="w-1.5 h-1.5 rounded-full inline-block mb-1"
                style={{ backgroundColor: accentFill }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
