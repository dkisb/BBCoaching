// app/[locale]/AllSchema.tsx
import type { Messages } from "@/types/messages";
import {
  LOGO_PATH,
  PERSON,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
  localeUrl,
} from "@/lib/site";

type Props = {
  locale: string;
  t: Messages;
};

const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// One connected JSON-LD graph. Only facts that are visible on the page belong here.
export default function AllSchema({ locale, t }: Props) {
  const pageUrl = localeUrl(locale);

  const serviceKeys = ["performanceAnalysis", "vehicleSetup", "mentalTraining"] as const;
  const services = serviceKeys
    .map((key) => t.services?.[key])
    .filter((s): s is { name: string; description: string } => Boolean(s?.name && s?.description))
    .map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.description,
      provider: { "@id": PERSON_ID },
      brand: { "@id": ORG_ID },
    }));

  const graph = [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: PERSON.name,
      jobTitle: PERSON.jobTitle,
      image: absoluteUrl(PERSON.imagePath),
      url: pageUrl,
      sameAs: SOCIAL_PROFILES,
      worksFor: { "@id": ORG_ID },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Budapest",
        addressCountry: "HU",
      },
    },
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl(LOGO_PATH),
      founder: { "@id": PERSON_ID },
      email: t.contact?.email,
      telephone: t.contact?.phone,
      sameAs: SOCIAL_PROFILES,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": ORG_ID },
      inLanguage: ["en", "hu"],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: t.metadata?.title,
      description: t.metadata?.description,
      inLanguage: locale,
      isPartOf: { "@id": WEBSITE_ID },
      about: [{ "@id": PERSON_ID }, ...services],
      mainEntity: { "@id": PERSON_ID },
    },
  ];

  // Escape "<" so message content can never close the script tag.
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c"
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
