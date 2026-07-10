import GalleryCarouselClient from "./GalleryClientCarousel";

export type GalleryTranslations = {
  eyebrow: string;
  title: string;
  intro: string;
};

type GalleryItem = {
  id: number;
  image: string;
  alt?: string;
};

export default function Gallery({ t }: { t: GalleryTranslations }) {
  const GalleryList: GalleryItem[] = [
    { id: 1, image: "/images/rx2.jpg" },
    { id: 2, image: "/images/martinka2.jpeg" },
    { id: 3, image: "/images/markusz.jpeg" },
    { id: 4, image: "/images/kika.jpeg" },
    { id: 5, image: "/images/world-champs.jpg" },
    { id: 6, image: "/images/szoke-m.jpeg" },
    { id: 7, image: "/images/martin-head.jpeg" },
    { id: 8, image: "/images/shranziGallery.jpg" },
    { id: 9, image: "/images/jesoloMartinka.webp" },
    { id: 10, image: "/images/jesoloMartinka2.jpg" },
  ];

  const items = GalleryList.map((it, i) => ({
    ...it,
    alt: it.alt ?? `${t.title} ${i + 1}`,
  }));

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="section-container flex flex-col items-center">
        <span className="section-eyebrow">{t.eyebrow}</span>
        <h2 className="mt-4 text-center section-heading">{t.title}</h2>
        <p className="mt-5 text-center text-slate-600 text-lg max-w-2xl">{t.intro}</p>
      </div>
      <GalleryCarouselClient items={items} />
    </section>
  );
}