export const SUPPORTED_LOCALES = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, { label: string; code: string; dir: 'ltr' | 'rtl' }> = {
  en: { label: 'English', code: 'EN', dir: 'ltr' },
  fr: { label: 'Français', code: 'FR', dir: 'ltr' },
  ar: { label: 'العربية', code: 'AR', dir: 'rtl' },
};

export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}
