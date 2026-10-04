import { DEFAULT_LOCALE, isValidLocale } from "./config";
import { fr } from "./messages/fr";
import { en } from "./messages/en";
import { ar } from "./messages/ar";

const dictionaries = {
  fr,
  en,
  ar,
};

export type Dictionary = typeof fr;

export function getDictionary(locale?: string): Dictionary {
  if (locale && isValidLocale(locale)) {
    return dictionaries[locale];
  }
  return dictionaries[DEFAULT_LOCALE];
}
