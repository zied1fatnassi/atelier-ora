"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// Mathematical vector paths for the signature Aura wordmark
const AURA_PATHS = [
  // Path 0: Soaring architectural 'A' arch
  "M 262.0 9.0 C 263.2 8.8, 264.7 8.2, 268.0 9.0 C 271.3 9.8, 274.2 12.0, 277.8 15.2 C 281.4 18.3, 285.8 23.3, 289.8 28.8 C 293.9 34.3, 298.5 41.5, 301.7 47.7 C 304.8 53.8, 307.2 60.2, 308.7 66.2 C 310.2 72.2, 311.2 79.2, 312.3 87.2 C 313.5 95.2, 314.7 106.0, 314.3 121.2 C 314.0 136.3, 312.2 159.0, 309.8 186.7 C 307.5 214.3, 304.2 250.7, 301.0 290.3 C 297.8 330.0, 294.0 376.5, 290.5 401.5 C 288.7 414.0, 286.7 416.0, 284.5 415.5 C 282.3 415.0, 280.3 411.3, 279.7 403.0 C 279.0 394.7, 280.0 379.7, 282.2 355.7 C 284.3 331.7, 288.2 295.3, 291.5 256.3 C 294.8 217.3, 298.0 170.8, 297.3 134.7 C 297.0 116.5, 295.5 101.5, 293.0 89.2 C 290.5 76.8, 286.5 65.5, 281.3 54.8 C 276.2 44.2, 269.2 32.8, 263.2 25.2 C 257.2 17.5, 251.2 12.3, 246.5 10.5 C 241.8 8.7, 237.8 9.8, 232.0 14.5 C 226.2 19.2, 217.8 28.3, 206.5 42.5 C 195.2 56.7, 179.8 77.8, 161.7 104.7 C 143.5 131.5, 120.8 167.3, 98.2 206.7 C 75.5 246.0, 50.8 293.2, 33.2 334.8 C 15.5 376.5, 3.8 416.5, 8.8 415.0 C 13.8 413.5, 36.5 370.2, 60.8 322.8 C 85.2 275.5, 114.2 218.8, 140.7 172.5 C 167.2 126.2, 194.2 84.8, 214.3 56.5 C 234.5 28.2, 251.2 8.7, 256.2 8.5 C 258.7 8.3, 260.8 9.2, 262.0 9.0 Z",
  // Path 1: Letter 'u'
  "M 332.0 182.0 C 337.8 182.5, 362.3 166.5, 366.0 186.0 C 369.7 205.5, 355.2 278.2, 350.5 330.2 C 345.8 382.2, 350.5 417.8, 362.5 422.3 C 374.5 426.8, 396.0 401.8, 417.5 364.5 C 439.0 327.2, 463.0 273.2, 477.2 227.0 C 491.5 180.8, 498.8 172.7, 499.0 180.0 C 499.2 187.3, 491.5 214.5, 481.5 251.8 C 471.5 289.2, 458.2 341.2, 451.8 376.2 C 445.5 411.2, 445.8 423.0, 439.8 422.3 C 433.8 421.7, 420.2 408.0, 403.5 385.2 C 386.8 362.5, 364.8 328.0, 353.0 292.0 C 341.2 256.0, 338.2 214.5, 332.0 182.0 Z",
  // Path 2: Letter 'a' outer
  "M 650.0 181.0 C 655.0 180.5, 680.0 180.0, 715.0 185.0 C 750.0 190.0, 769.0 205.0, 770.8 235.0 C 772.5 265.0, 762.0 310.0, 755.0 350.0 C 748.0 390.0, 742.0 415.0, 730.0 415.8 C 718.0 416.5, 705.0 395.0, 695.0 365.0 C 685.0 335.0, 676.0 295.0, 665.0 265.0 C 654.0 235.0, 639.0 215.0, 625.0 205.0 C 611.0 195.0, 595.0 190.0, 587.8 185.0 C 600.0 182.0, 635.0 181.5, 650.0 181.0 Z",
  // Path 3: Letter 'r'
  "M 525.0 181.0 C 532.0 180.5, 555.0 180.5, 580.0 185.0 C 605.0 189.5, 630.0 200.0, 636.7 215.0 C 643.3 230.0, 635.0 245.0, 620.0 250.0 C 605.0 255.0, 580.0 248.0, 565.0 240.0 C 550.0 232.0, 542.0 220.0, 538.0 210.0 C 534.0 235.0, 530.0 280.0, 526.0 330.0 C 522.0 380.0, 518.0 411.0, 514.0 412.0 C 510.0 413.0, 512.0 380.0, 516.0 330.0 C 520.0 280.0, 523.0 220.0, 525.0 181.0 Z",
  // Path 4: Letter 'a' inner hole
  "M 645.0 270.0 C 655.0 268.0, 680.0 270.0, 705.0 285.0 C 725.0 298.0, 729.2 320.0, 720.0 340.0 C 710.0 355.0, 685.0 355.2, 665.0 345.0 C 645.0 335.0, 630.0 310.0, 623.7 290.0 C 620.0 278.0, 632.0 272.0, 645.0 270.0 Z"
];

export interface AuraLogoProps {
  className?: string;
  variant?: "full" | "horizontal" | "compact" | "mark" | "symbol";
  theme?: "dark" | "light" | "monochrome" | "gold";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  priority?: boolean;
  withTagline?: boolean;
}

export function AuraLogo({
  className = "",
  variant = "full",
  theme = "dark",
  size = "md",
  withTagline = false,
}: AuraLogoProps) {
  const isLight = theme === "light";
  const isMono = theme === "monochrome";
  const isGold = theme === "gold";

  // Palette definitions
  const goldPrimary = isLight ? "#D97706" : "#F59E0B";
  const goldSecondary = isLight ? "#B45309" : "#FBBF24";
  const goldDeep = isLight ? "#92400E" : "#D97706";

  const prodTextColor = isMono
    ? isLight ? "#0A0A0E" : "#FFFFFF"
    : isLight ? "#0A0A0E" : "#FFFFFF";

  const prodBadgeBg = isLight ? "#F1F1F5" : "#0E0E18";
  const prodBadgeBorder = isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.18)";
  const pillGlow = isLight ? "rgba(217, 119, 6, 0.08)" : "rgba(245, 158, 11, 0.06)";

  // Sizing matrix with accurate aspect ratios
  const dimensions = {
    xs: { h: 22, fullW: 42, horizW: 110, compactW: 86, markW: 22 },
    sm: { h: 30, fullW: 58, horizW: 145, compactW: 115, markW: 30 },
    md: { h: 38, fullW: 74, horizW: 185, compactW: 145, markW: 38 },
    lg: { h: 50, fullW: 98, horizW: 245, compactW: 192, markW: 50 },
    xl: { h: 68, fullW: 132, horizW: 330, compactW: 260, markW: 68 },
  }[size];

  // 1. SYMBOL / ICON ONLY (Squircle Tile)
  if (variant === "mark") {
    return (
      <div
        className={cn(
          "aura-logo-container inline-flex shrink-0 select-none transition-transform duration-300 hover:scale-105",
          className
        )}
        style={{ width: dimensions.markW, height: dimensions.h }}
        role="img"
        aria-label={`${siteConfig.name} Icon`}
      >
        <svg
          viewBox="0 0 512 512"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="markGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={goldSecondary} />
              <stop offset="42%" stopColor={goldPrimary} />
              <stop offset="100%" stopColor={goldDeep} />
            </linearGradient>
            <linearGradient id="markTileBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isLight ? "#ECECEF" : "#141420"} />
              <stop offset="100%" stopColor={isLight ? "#DFDFE5" : "#08080D"} />
            </linearGradient>
            {!isLight && (
              <radialGradient id="markGlow" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="rgba(245, 158, 11, 0.24)" />
                <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
              </radialGradient>
            )}
          </defs>

          {/* Squircle Tile */}
          <rect width="512" height="512" rx="112" fill="url(#markTileBg)" />
          {!isLight && <rect width="512" height="512" rx="112" fill="url(#markGlow)" />}
          <rect
            x="3"
            y="3"
            width="506"
            height="506"
            rx="109"
            stroke={isLight ? "rgba(0,0,0,0.08)" : "rgba(255, 255, 255, 0.14)"}
            strokeWidth="4"
          />

          {/* Centered Soaring 'A' Arch */}
          <g fill={isMono ? prodTextColor : "url(#markGold)"} fillRule="evenodd" transform="translate(123.6, 81.3) scale(0.82)">
            <path d={AURA_PATHS[0]} />
          </g>
        </svg>
      </div>
    );
  }

  // 2. PURE SYMBOL (Transparent Arch without Tile)
  if (variant === "symbol") {
    return (
      <div
        className={cn(
          "aura-logo-container inline-flex shrink-0 select-none transition-transform duration-300 hover:scale-105",
          className
        )}
        style={{ width: dimensions.markW * 0.75, height: dimensions.h }}
        role="img"
        aria-label={`${siteConfig.name} Symbol`}
      >
        <svg
          viewBox="0 0 315 415"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="pureGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={goldSecondary} />
              <stop offset="45%" stopColor={goldPrimary} />
              <stop offset="100%" stopColor={goldDeep} />
            </linearGradient>
          </defs>
          <g fill={isMono ? prodTextColor : "url(#pureGold)"} fillRule="evenodd" transform="translate(-8, -8)">
            <path d={AURA_PATHS[0]} />
          </g>
        </svg>
      </div>
    );
  }

  // 3. COMPACT LOGO (Specialized for mobile header < 640px)
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "aura-logo-container inline-flex items-center shrink-0 select-none transition-transform duration-300 hover:scale-[1.02]",
          className
        )}
        style={{ width: dimensions.compactW, height: dimensions.h }}
        role="img"
        aria-label={`${siteConfig.name}`}
      >
        <svg
          viewBox="0 0 280 80"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="compactGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={goldSecondary} />
              <stop offset="45%" stopColor={goldPrimary} />
              <stop offset="100%" stopColor={goldDeep} />
            </linearGradient>
          </defs>

          {/* Soaring 'A' Icon */}
          <g fill={isMono ? prodTextColor : "url(#compactGold)"} fillRule="evenodd" transform="translate(10, 8) scale(0.16)">
            <path d={AURA_PATHS[0]} />
          </g>

          {/* AURA PROD typographic lockup */}
          <g transform="translate(70, 20)">
            <text
              x="0"
              y="28"
              fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
              fontSize="24"
              fontWeight="900"
              letterSpacing="0.08em"
              fill={isMono ? prodTextColor : goldPrimary}
            >
              AURA
            </text>
            <text
              x="76"
              y="28"
              fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
              fontSize="24"
              fontWeight="900"
              letterSpacing="0.12em"
              fill={prodTextColor}
            >
              PROD
            </text>
            <text
              x="1"
              y="44"
              fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
              fontSize="7.5"
              fontWeight="700"
              letterSpacing="0.22em"
              fill={isLight ? "#71717A" : "#80808C"}
            >
              DIGITAL STUDIO
            </text>
          </g>
        </svg>
      </div>
    );
  }

  // 4. HORIZONTAL LOGO (For widescreen headers, footers, invoices)
  if (variant === "horizontal") {
    return (
      <div
        className={cn(
          "aura-logo-container inline-flex items-center shrink-0 select-none transition-transform duration-300 hover:scale-[1.02]",
          className
        )}
        style={{ width: dimensions.horizW, height: dimensions.h }}
        role="img"
        aria-label={`${siteConfig.name}`}
      >
        <svg
          viewBox="0 0 540 120"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="horizGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={goldSecondary} />
              <stop offset="42%" stopColor={goldPrimary} />
              <stop offset="100%" stopColor={goldDeep} />
            </linearGradient>
          </defs>

          {/* Scaled Aura Signature */}
          <g fill={isMono ? prodTextColor : "url(#horizGold)"} fillRule="evenodd" transform="translate(14, 14) scale(0.24)">
            {AURA_PATHS.map((p, idx) => (
              <path key={idx} d={p} />
            ))}
          </g>

          {/* Vertical Hairline Divider */}
          <line
            x1="220"
            y1="28"
            x2="220"
            y2="92"
            stroke={isLight ? "#D4D4DC" : "rgba(255, 255, 255, 0.18)"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* PROD + Subtitle */}
          <g transform="translate(240, 36)">
            <text
              x="0"
              y="34"
              fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
              fontSize="36"
              fontWeight="900"
              letterSpacing="0.16em"
              fill={prodTextColor}
            >
              PROD
            </text>
            <text
              x="2"
              y="56"
              fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
              fontSize="10.5"
              fontWeight="600"
              letterSpacing="0.28em"
              fill={isLight ? "#60606C" : "#A0A0AB"}
            >
              {withTagline ? "CREATIVE PRODUCTION" : "CREATIVE AGENCY"}
            </text>
          </g>
        </svg>
      </div>
    );
  }

  // 5. PRIMARY FULL LOGO (Default Signature)
  // Aura mark with high-contrast PROD lockup above 'ura'
  return (
    <div
      className={cn(
        "aura-logo-container inline-flex items-center shrink-0 select-none transition-transform duration-300 hover:scale-[1.02]",
        className
      )}
      style={{ width: dimensions.fullW, height: dimensions.h }}
      role="img"
      aria-label={`${siteConfig.name}`}
    >
      <svg
        viewBox="0 0 820 440"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="mainGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={goldSecondary} />
            <stop offset="42%" stopColor={goldPrimary} />
            <stop offset="100%" stopColor={goldDeep} />
          </linearGradient>
          <linearGradient id="mainWhite" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#ECECF2" />
          </linearGradient>
        </defs>

        {/* Aura Signature Wordmark in Solar Amber */}
        <g fill={isMono ? prodTextColor : "url(#mainGold)"} fillRule="evenodd" transform="translate(10, 12)">
          {AURA_PATHS.map((p, idx) => (
            <path key={idx} d={p} />
          ))}
        </g>

        {/* High-Contrast PROD Capsule in the natural architectural gallery */}
        <g transform="translate(372, 54)">
          <rect
            x="0"
            y="0"
            width="224"
            height="72"
            rx="14"
            fill={prodBadgeBg}
            stroke={prodBadgeBorder}
            strokeWidth="1.5"
          />
          <rect x="2" y="2" width="220" height="68" rx="12" fill={pillGlow} />

          {/* Camera/Cinema REC Accent Point */}
          <circle cx="28" cy="36" r="5" fill={isLight ? "#D97706" : "#F59E0B"} />
          {!isLight && (
            <circle cx="28" cy="36" r="8" stroke="#F59E0B" strokeWidth="1.5" opacity="0.4" />
          )}

          {/* PROD in Crisp Modern Geometric Typography */}
          <text
            x="50"
            y="47"
            fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
            fontSize="33"
            fontWeight="800"
            letterSpacing="0.22em"
            fill={isLight ? "#0A0A0E" : "url(#mainWhite)"}
          >
            PROD
          </text>
        </g>
      </svg>
    </div>
  );
}
