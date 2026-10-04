# ATELIER ORA — Creative Technology & Commercial Film Studio
> **Bespoke Digital Presence, 4K Commercial Video, and Interactive Experiences for Premier Hospitality & Lifestyle Brands.**

[![CI Pipeline](https://github.com/zied1fatnassi/atelier-ora/actions/workflows/ci.yml/badge.svg)](https://github.com/zied1fatnassi/atelier-ora/actions)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.8-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-amber.svg)](LICENSE)

---

## ✦ Overview

**Atelier Ora** (`أتيليه أورا`) is a creative digital studio combining high-velocity web engineering, 4K commercial cinematography, editorial photography, and interactive digital menus.

We help premier local destinations — **specialty coffee shops, fine dining restaurants, fitness sanctuaries, boutique hotels, curated retail boutiques, and aesthetic spas** — build the digital presence people experience before they even set foot in the venue.

---

## ✦ Core Capabilities & Pages (12 Complete Pages)

1. **Cinematic Homepage (`/[locale]`)**
   - 4K Camera HUD overlays (`24 FPS`, `REC`, `TUNIS 36.8°N 10.1°E`, `D-LOG M 10-BIT`).
   - Strategic manifesto & core positioning.
   - Outcome-driven services breakdown.
   - Flagship concept projects showcase.
   - Interactive industry selector with dynamic visual swaps.
   - Agile production section (Shoot → Edit → Design → Publish).
   - Live interactive Digital Menu simulation with WhatsApp order flow.
   - 3-stage AI & Visual Innovation transformation pipeline.
   - 5-step standardized client methodology.
   - Transparent "Starting from" pricing tiers with interactive budget estimator.
   - High-conversion invitation CTA.

2. **Work Portfolio (`/[locale]/work`)**
   - Flagship studio concept portfolio with full-bleed media and client impact metrics.

3. **Editorial Case Studies (`/[locale]/work/[slug]`)**
   - Flagship 1: **Café Mirador & Roastery** (Specialty Coffee in Sidi Bou Said).
   - Flagship 2: **Kinetix Athletic Club** (High-Performance Sanctuary in La Marsa).
   - Flagship 3: **Dar El Bahr Gastronomie** (Coastal Fine Dining in Gammarth).

4. **Services (`/[locale]/services`)**
   - Web Experiences, Commercial Films, Culinary Photography, PWA Menus, AI VFX, and Brand Systems.

5. **Industries (`/[locale]/industries`)**
   - Deep-dives into Coffee, Gastronomy, Fitness, Boutique Hotels, Retail, and Spas.

6. **Production & Cinema (`/[locale]/production`)**
   - Camera arsenal: DJI Osmo Pocket 3 & 4, Full-frame cinema cameras, 32-bit float audio, and DaVinci Resolve color grading.

7. **Digital Menu Product Page (`/[locale]/digital-menu`)**
   - Interactive live smartphone mockup with real-time category filtering, trilingual switcher, QR demo, and WhatsApp checkout.
   - Concrete ROI metrics (0 TND paper reprints, +38% average ticket lift).

8. **Pricing & Cost Calculator (`/[locale]/pricing`)**
   - Launch (from 1,490 TND), Growth (from 2,400 TND), Studio Care (from 900 TND/mo).
   - Interactive scope estimator with instant Dinar (TND) calculation and FAQ accordion.

9. **About Studio (`/[locale]/about`)**
   - Manifesto, team biographies, lab specifications, and Tunis studio coordinates.

10. **Contact & Guided Project Planner (`/[locale]/contact`)**
    - 5-step guided project planner with `localStorage` autosave.
    - Direct WhatsApp hotline (`+216 29 888 900`).
    - Dedicated lead ingestion endpoint at `/api/contact`.

11. **Privacy Policy (`/[locale]/privacy`)**
    - GDPR and Tunisian regulations compliance.

12. **Terms of Service (`/[locale]/terms`)**
    - Commercial agreements, IP transfer, and shoot guidelines.

---

## ✦ Design System & Tokens

- **Palette:**
  - `bg-canvas`: `#060608` (Deep obsidian black)
  - `bg-surface`: `#0d0d12` (Elevated dark studio panel)
  - `brand-amber`: `#f59e0b` (Solar Ochre / Accent)
  - `brand-cine-red`: `#ef4444` (Cinema REC pulse indicator)
  - `text-primary`: `#f8f8fa` (Titanium crisp white)
  - `text-secondary`: `#a0a0ab` (Cool slate)
- **Typography:**
  - Display: **Syne** (Variable 400-800, high-fashion editorial cut)
  - Body: **Plus Jakarta Sans** (Ultra-crisp readability)
  - Arabic: **Cairo** (Balanced Arabic calligraphy)
- **Micro-Interactions:**
  - Desktop custom cursor with contextual state transitions (`VIEW`, `PLAY`, `DRAG`, `EXPLORE`), disabled on mobile touch devices.
  - Film grain SVG texture layer.
  - Full WCAG 2.2 AA accessibility compliance with `prefers-reduced-motion` and `data-reduced-motion` controls.

---

## ✦ Multilingual & RTL Architecture

Built natively on Next.js App Router i18n routing (`/[locale]/...`):
- **Français (`fr`)**: Default business language in Tunisia.
- **English (`en`)**: Global business reach.
- **العربية (`ar`)**: Native Right-To-Left (`dir="rtl"`), Arabic typographic hierarchy, and reversed animation choreographies.

---

## ✦ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (Turbopack, App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Tailwind CSS v4 + Custom Design Tokens |
| **Motion** | `motion/react` + Pure CSS Transforms |
| **Icons** | Lucide React |
| **QA / E2E Testing** | Playwright MCP |
| **Deployment** | Vercel |

---

## ✦ DevOps & CI/CD Pipeline

The project includes an automated GitHub Actions workflow (`.github/workflows/ci.yml`) triggering on pushes to `main`:
1. **Lint Check**: `npm run lint`
2. **Type Check**: `npx tsc --noEmit`
3. **Production Build**: `npm run build` (Ensuring all 49 multilingual static routes compile cleanly)

---

## ✦ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/zied1fatnassi/atelier-ora.git
cd atelier-ora
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## ✦ Deployment to Vercel

This repository is connected directly to Vercel for zero-config automatic deployments on git push:

```bash
# Push to main branch
git push origin main
```

Vercel will detect Next.js 16 and trigger an optimized edge deployment with global CDN caching.

---

## ✦ Studio Coordinates

- **Studio Headquarters:** Les Berges du Lac 2 / La Marsa, Tunis
- **WhatsApp Hotline:** [+216 29 888 900](https://wa.me/21629888900)
- **Direct Email:** [contact@atelierora.studio](mailto:contact@atelierora.studio)

---

© 2026 Atelier Ora Studio. All rights reserved.
