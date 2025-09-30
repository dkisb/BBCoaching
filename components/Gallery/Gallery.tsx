import GalleryCarouselClient from "./GalleryClientCarousel";

export type GalleryTranslations = {
  title: string;
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
    { id: 4, image: "/images/kika.jpg" },
    { id: 5, image: "/images/world-champs.jpg" },
    { id: 6, image: "/images/szoke-m.jpeg" },
    { id: 7, image: "/images/martin-head.jpeg" },
  ];

  const items = GalleryList.map((it, i) => ({
    ...it,
    alt: it.alt ?? `${t.title} ${i + 1}`,
  }));

  return (
    <section id="gallery" className="pt-16 pb-16">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black">
        {t.title}
      </h2>
      <GalleryCarouselClient items={items} />
    </section>
  );
}