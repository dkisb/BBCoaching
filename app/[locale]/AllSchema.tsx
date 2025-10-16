// app/[locale]/AllSchema.tsx
import type { Messages } from "@/types/messages";

export default function AllSchema({
  locale,
  t,
  siteUrl, // e.g., "https://bbcoaching.com"
  logoUrl, // e.g., "https://bbcoaching.com/images/logoDark.png"
  social = [
    "https://www.instagram.com/borsberti/",
    "https://www.facebook.com/robinagyker/",
    "https://www.tiktok.com/robinagyker/",
    "https://www.linkedin.com/in/döme-marcell-kisbalázs",
  ],
  person = {
    name: "Bertold Bors",
    jobTitle: "Motorsport Performance Analyst & Driver Coach",
    imageUrl: undefined as string | undefined, // optional headshot URL
  },
  address = {
    streetAddress: "",
    addressLocality: "Budapest",
    addressCountry: "HU",
    postalCode: "",
  },
}: {
  locale: string;
  t: Messages;
  siteUrl: string;
  logoUrl: string;
  social?: string[];
  person?: { name: string; jobTitle: string; imageUrl?: string };
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressCountry: string;
    postalCode?: string;
  };
}) {
  // Build localized services
  const services = [
    {
      "@type": "Service",
      name: t.services?.performanceAnalysis?.name,
      description: t.services?.performanceAnalysis?.description,
      provider: { "@type": "Organization", name: "BB Coaching", url: siteUrl },
      inLanguage: locale,
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      name: t.services?.vehicleSetup?.name,
      description: t.services?.vehicleSetup?.description,
      provider: { "@type": "Organization", name: "BB Coaching", url: siteUrl },
      inLanguage: locale,
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      name: t.services?.mentalTraining?.name,
      description: t.services?.mentalTraining?.description,
      provider: { "@type": "Organization", name: "BB Coaching", url: siteUrl },
      inLanguage: locale,
      areaServed: "Worldwide",
    },
  ].filter((s) => s.name && s.description);

  // Build localized reviews from testimonials
  const reviews = [
    {
      name: "Martin Ernesto Varga",
      role: t.testimonials?.role,
      reviewBody: t.testimonials?.list?.martin,
    },
    {
      name: "Martin Szőke",
      role: t.testimonials?.role,
      reviewBody: t.testimonials?.list?.szoke,
    },
    {
      name: "Kristýna Kalistová",
      role: t.testimonials?.role,
      reviewBody: t.testimonials?.list?.kristyna,
    },
    {
      name: "Döme Kisbalázs",
      role: t.testimonials?.simRacer,
      reviewBody: t.testimonials?.list?.dome,
    },
  ]
    .filter((r) => r.reviewBody)
    .map((r) => ({
      "@context": "https://schema.org",
      "@type": "Review",
      reviewBody: r.reviewBody,
      author: { "@type": "Person", name: r.name },
      itemReviewed: { "@type": "Organization", name: "BB Coaching", url: siteUrl },
      inLanguage: locale,
    }));

  const homeUrl = `${siteUrl}/${locale}`;

  const data = [
    // Organization (site identity)
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BB Coaching",
      url: homeUrl,
      logo: logoUrl,
      sameAs: social,
    },

    // WebSite with SearchAction (optional search page URL)
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BB Coaching",
      url: homeUrl,
      inLanguage: locale,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // LocalBusiness (optional; good for local discovery)
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BB Coaching",
      url: homeUrl,
      email: t.contact?.email,
      telephone: t.contact?.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: address.streetAddress ?? "",
        addressLocality: address.addressLocality,
        addressCountry: address.addressCountry,
        postalCode: address.postalCode ?? "",
      },
      areaServed: address.addressCountry,
      inLanguage: locale,
    },

    // Person (you) associated with the org
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: person.name,
      jobTitle: person.jobTitle,
      url: homeUrl,
      image: person.imageUrl,
      sameAs: social,
      worksFor: { "@type": "Organization", name: "BB Coaching", url: homeUrl },
      inLanguage: locale,
    },

    // Services as an ItemList
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: s,
      })),
    },

    // Reviews (Testimonials) — array of Review objects
    ...reviews,

    // Breadcrumbs (minimal for one-page; expand if you add more pages)
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: t.nav?.home ?? "Home",
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t.nav?.services ?? "Services",
          item: `${homeUrl}#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: t.nav?.testimonials ?? "Testimonials",
          item: `${homeUrl}#testimonials`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: t.nav?.contact ?? "Contact",
          item: `${homeUrl}#contact`,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}