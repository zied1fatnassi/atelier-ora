"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale, LOCALE_LABELS, SUPPORTED_LOCALES } from "@/i18n/config";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({ currentLocale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Replace the first locale segment in pathname
    const segments = pathname.split("/");
    // segments[0] is "", segments[1] is locale
    if (SUPPORTED_LOCALES.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join("/") || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono",
        className
      )}
      role="group"
      aria-label="Sélection de langue / Language selector"
    >
      <span className="pl-1.5 text-white/40 flex items-center">
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
      </span>
      {SUPPORTED_LOCALES.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={cn(
              "px-2.5 py-1 rounded-full font-medium transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-amber-500",
              isActive
                ? "bg-amber-500 text-black font-semibold shadow-sm"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
            aria-pressed={isActive}
            aria-label={LOCALE_LABELS[locale].label}
          >
            {LOCALE_LABELS[locale].code}
          </button>
        );
      })}
    </div>
  );
}
