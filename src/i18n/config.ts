export const SUPPORTED_LOCALES = ['fr', 'en', 'ar'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

export const LOCALE_LABELS: Record<Locale, { label: string; code: string; dir: 'ltr' | 'rtl' }> = {
  fr: { label: 'Français', code: 'FR', dir: 'ltr' },
  en: { label: 'English', code: 'EN', dir: 'ltr' },
  ar: { label: 'العربية', code: 'AR', dir: 'rtl' },
};

export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}
