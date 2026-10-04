import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { fontDisplay, fontSans, fontArabic } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CookieConsent } from "@/components/ui/CookieConsent";
import "../globals.css";

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

  const title = `${dict.common.studioName} — ${dict.common.studioTagline}`;
  const description = dict.hero.subhead;

  return {
    title: {
      default: title,
      template: `%s | ${dict.common.studioName}`,
    },
    description,
    keywords: [
      "creative digital studio tunis",
      "agence web tunisie",
      "production video 4k tunis",
      "menu digital qr code restaurant tunis",
      "creation site web café restaurant tunisie",
      "studio design d'auteur",
      "dji osmo pocket production",
      "davinci resolve color grading",
    ],
    authors: [{ name: "Atelier Ora Studio" }],
    creator: "Atelier Ora Studio",
    metadataBase: new URL("https://atelierora.studio"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://atelierora.studio/${locale}`,
      siteName: "Atelier Ora Studio",
      images: [
        {
          url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
          width: 1200,
          height: 630,
          alt: "Atelier Ora Studio",
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

  // Structured Data Schema for LocalBusiness and Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://atelierora.studio/#organization",
        name: "Atelier Ora Studio",
        url: "https://atelierora.studio",
        logo: "https://atelierora.studio/logo.png",
        description: dict.manifesto.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Les Berges du Lac 2 / La Marsa",
          addressLocality: "Tunis",
          addressCountry: "TN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+216-29-888-900",
          contactType: "customer service",
          availableLanguage: ["French", "Arabic", "English"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://atelierora.studio/#localbusiness",
        name: "Atelier Ora Studio — Creative Digital & Film",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        telephone: "+21629888900",
        priceRange: "1490 TND - 6000 TND",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tunis",
          addressRegion: "Tunis",
          addressCountry: "TN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 36.8065,
          longitude: 10.1815,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:30",
            closes: "19:00",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontArabic.variable} h-full antialiased`}
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
