import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { localeAlternates, localeUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = localeAlternates();
  return routing.locales.map((locale) => ({
    url: localeUrl(locale),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
