import TestimonialsCarouselClient from "./TestimonialsCarouselClient";

export type TestimonialsTranslations = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  role: string;
  simRacer: string;
  list: {
    martin: string;
    szoke: string;
    kristyna: string;
    dome: string;
    simon: string;
  };
};

export default function Testimonials({ t }: { t: TestimonialsTranslations }) {
  // Localized testimonials list kept local to the component (no external constants)
  const testimonialsList = [
    {
      image: "/images/shranzi.jpg",
      name: "Simon Schranz",
      role: t.role,
      description: t.list.simon,
      imageAlt: "Simon Schranz",
    },
    {
      image: "/images/martin-head.jpeg",
      name: "Martin Ernesto Varga",
      role: t.role,
      description: t.list.martin,
      imageAlt: "Martin Ernesto Varga",
    },
    {
      image: "/images/szoke-m.jpeg",
      name: "Martin Szőke",
      role: t.role,
      description: t.list.szoke,
      imageAlt: "Martin Szőke",
    },
    {
      image: "/images/kika.jpeg",
      name: "Kristýna Kalistová",
      role: t.role,
      description: t.list.kristyna,
      imageAlt: "Kristýna Kalistová",
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="section-container flex flex-col items-center">
        <span className="section-eyebrow">{t.eyebrow}</span>
        <h2 className="mt-4 text-center section-heading">
          {t.title} <span className="text-brand">{t.titleHighlight}</span>
        </h2>
      </div>

      <TestimonialsCarouselClient items={testimonialsList} />
    </section>
  );
}
