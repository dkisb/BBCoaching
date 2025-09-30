// components/Hero/Hero.tsx
import Image from "next/image";
import HeroClient from "./HeroClient";

export type HeroTranslations = {
  title: string;
  titleHighlight: string;
  subtitle: string;
  readMore: string;
  imageAlt?: string;
};

type Props = {
  t: HeroTranslations;
};

export default function Hero({ t }: Props) {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-black overflow-hidden flex-col"
    >
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/hero2.jpg"
          alt={t.imageAlt ?? "BB Coaching"}
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
          style={{ height: "auto" }}
          priority
        />

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
          {t.title}
          <br />
          <span className="text-[#0055ff]">{t.titleHighlight}</span>
        </h1>

        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium">
          {t.subtitle}
        </h2>

        {/* Client-only wrapper for AOS animations + smooth scroll */}
        <HeroClient ctaText={t.readMore} />
      </div>
    </section>
  );
}