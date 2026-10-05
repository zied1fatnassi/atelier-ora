import { DEFAULT_LOCALE, isValidLocale } from "./config";
import { fr } from "./messages/fr";
import { en } from "./messages/en";
import { ar } from "./messages/ar";

const dictionaries = {
  en,
  fr,
  ar,
};

export type Dictionary = typeof en;

export function getDictionary(locale?: string): Dictionary {
  if (locale && isValidLocale(locale)) {
    return dictionaries[locale];
  }
  return dictionaries[DEFAULT_LOCALE];
}
