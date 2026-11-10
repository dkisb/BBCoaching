// Single source of truth for site identity used by metadata, schema, sitemap and robots.
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://bertoldbors.com";
export const SITE_NAME = "BB Coaching";
export const LOGO_PATH = "/images/logoDark.png";

export const PERSON = {
  name: "Bertold Bors",
  jobTitle: "Motorsport Performance Analyst & Driver Coach",
  imagePath: "/images/hero2.jpg",
} as const;

// Must match the profiles shown in the UI (constant/constants.ts ContactList).
export const SOCIAL_PROFILES = [
  "https://www.instagram.com/borsberti/",
  "https://www.facebook.com/profile.php?id=100017095442877",
  "https://www.linkedin.com/in/bors-bertold-930036390/",
] as const;

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export const localeUrl = (locale: string) => `${SITE_URL}/${locale}`;

export const localeAlternates = (): Record<string, string> => ({
  ...Object.fromEntries(routing.locales.map((l) => [l, localeUrl(l)])),
  "x-default": localeUrl(routing.defaultLocale),
});
