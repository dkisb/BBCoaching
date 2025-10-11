import TestimonialsCarouselClient from "./TestimonialsCarouselClient";

export type TestimonialsTranslations = {
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
      image: "/images/simon.jpeg",
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
    {
      image: "/images/hero2.jpg",
      name: "Döme Kisbalázs",
      role: t.simRacer,
      description: t.list.dome,
      imageAlt: "Döme Kisbalázs",
    }
  ];

  return (
    <section id="testimonials" className="pt-16 pb-16">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        {t.title} <span className="text-[#0055ff]">{t.titleHighlight}</span>
      </h2>

      <TestimonialsCarouselClient items={testimonialsList} />
    </section>
  );
}