import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { fontDisplay, fontSans, fontArabic, fontMono } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CookieConsent } from "@/components/ui/CookieConsent";
import "../globals.css";

import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const title = dict.common.studioName 
    ? `${dict.common.studioName} — ${dict.common.studioTagline}`
    : siteConfig.seo.defaultTitle;
  const description = dict.hero?.subhead || siteConfig.seo.defaultDescription;

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [...siteConfig.seo.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png",
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      images: [
        {
          url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Studio`,
        },
      ],
      locale: locale === "ar" ? "ar_TN" : locale === "en" ? "en_US" : "fr_FR",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const isRtl = locale === "ar";

  // Structured Data Schema for Organization and Creative Agency
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.svg`,
        description: siteConfig.mission,
        email: siteConfig.emails.general,
        telephone: siteConfig.contact.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.location.address,
          addressLocality: siteConfig.location.city,
          postalCode: siteConfig.location.postalCode,
          addressCountry: "TN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.phone,
          contactType: "customer service",
          email: siteConfig.emails.general,
          availableLanguage: ["English", "French", "Arabic"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#professionalservice`,
        name: `${siteConfig.name} — Creative Digital Agency & Commercial Film`,
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        telephone: siteConfig.contact.phone,
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.location.address,
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          postalCode: siteConfig.location.postalCode,
          addressCountry: "TN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.coordinates.latitude,
          longitude: siteConfig.location.coordinates.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} ${fontArabic.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#060608] text-[#f8f8fa] selection:bg-amber-500 selection:text-black">
        {/* Skip to Content for Accessibility (WCAG 2.2 AA) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:font-bold focus:rounded-full"
        >
          {dict.common.skipToContent}
        </a>

        {/* Custom Desktop Cursor */}
        <CustomCursor />

        {/* Global Navigation */}
        <Header locale={locale as Locale} dict={dict} />

        {/* Main Viewport Content */}
        <main id="main-content" className="flex-1 w-full outline-none">
          {children}
        </main>

        {/* Global Studio Footer */}
        <Footer locale={locale as Locale} dict={dict} />

        {/* Cookie Consent Banner */}
        <CookieConsent dict={{}} />
      </body>
    </html>
  );
}
