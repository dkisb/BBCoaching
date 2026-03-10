import { Locale } from "./config";
import en from "../messages/en.json";
import hu from "../messages/hu.json";

const dict: Record<Locale, typeof en> = { en, hu };

export async function getTranslations(locale: Locale) {
  // If you later fetch from FS or CMS, keep this async shape
  return dict[locale];
}