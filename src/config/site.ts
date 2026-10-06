/**
 * AURA PROD — Central Platform Configuration
 * Single Source of Truth for brand identity, contact info, domains, SEO, and services.
 * All customer-facing and organizational data references this file.
 */

export const siteConfig = {
  // Brand Identity
  name: "AURA PROD",
  shortName: "AURA",
  legalName: process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME || "Aura Prod",
  tagline: "Digital experiences built to be seen.",
  supportingTagline: "Web. Content. AI. Built for brands that want to stand out.",
  mission:
    "AURA PROD is a creative digital agency that combines web development, visual content production, branding, motion, and AI to help businesses present themselves at a higher level and turn attention into business.",
  valueProposition:
    "We combine strategy, design, technology, photography, video production, motion, and AI into one creative workflow to build complete digital experiences.",
  aboutQuote: "We build things people notice.",
  
  // Domains & URLs
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aura-prod.tech",
  domain: "aura-prod.tech",
  
  // Design Tokens
  accentColor: "#f59e0b", // Solar Amber — Cinematic studio warmth and premium commercial film feel
  accentName: "Solar Amber",
  
  // Corporate & Legal (Keep configurable, no fake data)
  registrationNumber: process.env.NEXT_PUBLIC_COMPANY_REG_NUMBER || null,
  vatId: process.env.NEXT_PUBLIC_VAT_ID || null,
  fiscalCode: process.env.NEXT_PUBLIC_FISCAL_CODE || null,
  dataController: process.env.NEXT_PUBLIC_DATA_CONTROLLER || "Aura Prod Data Privacy Office",
  
  // Inquiries & Departmental Inboxes
  emails: {
    general: "hello@aura-prod.tech",
    projects: "projects@aura-prod.tech",
    support: "support@aura-prod.tech",
    careers: "admin@aura-prod.tech",
    press: "contact@aura-prod.tech",
    privacy: "privacy@aura-prod.tech",
  },
  
  // Phone & Instant Messaging
  contact: {
    phone: "+216 55 689 162",
    phoneDisplay: "+216 55 689 162",
    phoneTel: "+21655689162",
    whatsappNumber: "21655689162",
    whatsappLink: "https://wa.me/21655689162",
  },
  
  // Headquarters & Studio
  location: {
    address: "Mahdia, Tunisia",
    city: "Mahdia",
    country: "Tunisia",
    postalCode: "5111",
    region: "Mahdia Governorate",
    timezone: "Africa/Tunis",
    hours: "24/7",
    coordinates: {
      latitude: 35.5047,
      longitude: 11.0622,
    },
  },
  
  // Social Media Handles (Configurable, no fabricated URLs)
  socials: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "",
    x: process.env.NEXT_PUBLIC_SOCIAL_X || "",
    github: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "",
    behance: process.env.NEXT_PUBLIC_SOCIAL_BEHANCE || "",
  },
  
  // 5 Core Service Pillars
  servicePillars: [
    {
      id: "digital-web",
      slug: "services#digital-web",
      key: "digital_web",
      title: "Digital & Web Experiences",
      description:
        "Production-grade web platforms, corporate websites, high-conversion landing pages, e-commerce, and bespoke web apps engineered for speed and aesthetic authority.",
      capabilities: [
        "Production-grade websites",
        "Corporate & brand websites",
        "Conversion landing pages",
        "Custom web applications",
        "Performance & SEO optimization",
      ],
    },
    {
      id: "brand-creative",
      slug: "services#brand-creative",
      key: "brand_creative",
      title: "Brand & Creative Direction",
      description:
        "Comprehensive brand systems, art direction, visual identity, digital design, and campaign concepts that position businesses ahead of competitors.",
      capabilities: [
        "Brand identity & guidelines",
        "Visual systems & typography",
        "Art & creative direction",
        "Campaign conceptualization",
        "Digital product design",
      ],
    },
    {
      id: "commercial-content",
      slug: "services#commercial-content",
      key: "commercial_content",
      title: "Commercial Content Production",
      description:
        "Real-world cinema-grade film and photography. High-end equipment, professional lighting, DaVinci Resolve color mastering, and 32-bit audio capture.",
      capabilities: [
        "Commercial & brand films",
        "Product & hospitality videos",
        "Gym & fitness content",
        "Restaurant & café storytelling",
        "Social media reels & short-form",
        "High-resolution commercial photography",
      ],
    },
    {
      id: "ai-studio",
      slug: "services#ai-studio",
      key: "ai_studio",
      title: "AI Creative Studio",
      description:
        "AI as an amplified production tool. Generative video, concept development, rapid prototyping, and AI-assisted post-production for boundary-pushing campaigns.",
      capabilities: [
        "AI video generation & VFX",
        "Product visual concepts",
        "Generative motion design",
        "AI-assisted color & compositing",
        "Rapid creative prototyping",
      ],
    },
    {
      id: "digital-solutions",
      slug: "services#digital-solutions",
      key: "digital_solutions",
      title: "Digital & AI Solutions",
      description:
        "Bespoke business automation, digital menus for hospitality, custom analytics dashboards, internal tooling, and intelligent workflow integrations.",
      capabilities: [
        "Hospitality digital menus & QR",
        "Custom dashboards & client portals",
        "Workflow & CRM automation",
        "AI assistant integrations",
        "Bespoke SaaS architectures",
      ],
    },
  ],
  
  // Target Verticals
  targetVerticals: [
    "Hospitality & Boutique Hotels",
    "Restaurants, Bistros & Cafés",
    "Gyms & Fitness Centers",
    "Luxury Businesses & Spas",
    "Real Estate & Architectural Firms",
    "Tech Startups & Corporate B2B",
  ],
  
  // Engagement Models (No rigid fabricated pricing tables)
  engagement: {
    primaryModel: "Custom Projects",
    primaryCta: "Start a project",
    secondaryCta: "Book a discovery call",
    models: [
      "Custom Digital & Web Projects",
      "Brand Direction & Identity Systems",
      "Commercial Content & Film Productions",
      "Monthly Content & Creative Retainers",
      "AI Creative & Automation Partnerships",
    ],
  },
  
  // SEO Metadata
  seo: {
    defaultTitle: "AURA PROD — Digital Experiences, Content & AI",
    titleTemplate: "%s — AURA PROD",
    defaultDescription:
      "AURA PROD builds production-grade websites, commercial content, brand experiences, and AI-powered digital solutions for ambitious businesses.",
    keywords: [
      "Creative digital agency Tunisia",
      "Web design Tunisia",
      "Web development Tunisia",
      "Website development Tunisia",
      "Creative agency Tunisia",
      "Branding agency Tunisia",
      "Video production Tunisia",
      "Commercial video Tunisia",
      "AI agency Tunisia",
      "AI video production",
      "AI creative agency",
      "Digital marketing Tunisia",
      "Premium website design",
      "Restaurant website design",
      "Gym website design",
      "Hospitality website design",
      "Custom web development",
      "AI automation for business",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "AURA PROD",
    },
    twitter: {
      card: "summary_large_image",
      creator: "@auraprod",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
