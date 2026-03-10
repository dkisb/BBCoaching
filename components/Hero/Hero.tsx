// components/Hero/Hero.tsx
import Image from "next/image";
import HeroClient from "./HeroClient";

export type HeroTranslations = {
  title: string;
  titleHighlight: string;
  subtitle: string;
  partnerPrefix?: string;
  partnerSuffix?: string;
  readMore: string;
  imageAlt?: string;
};

type Props = {
  t: HeroTranslations;
};

export default function Hero({ t }: Props) {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center text-slate-900 overflow-hidden px-4 pt-[12vh]">
      <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-4xl">
        <Image
          src="/images/hero2.jpg"
          alt={t.imageAlt ?? "BB Coaching"}
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa] flex-shrink-0"
          priority
        />

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide">
          {t.title}
          <br />
          <span className="text-[#0055ff]">{t.titleHighlight}</span>
        </h1>

        <h2 className="text-sm px-2 text-center sm:text-2xl font-medium">
          {t.subtitle}
        </h2>

        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          {t.partnerPrefix ? (
            <span className="text-sm sm:text-base font-semibold">
              {t.partnerPrefix}
            </span>
          ) : null}
          <span className="inline-flex items-center rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 shadow-sm">
            <Image
              src="/images/sportgarage.svg"
              alt="SportGarage CZ logo"
              width={360}
              height={100}
              className="h-auto w-48 sm:w-60"
            />
          </span>
          {t.partnerSuffix ? (
            <span className="text-sm sm:text-base font-semibold">
              {t.partnerSuffix}
            </span>
          ) : null}
        </div>

        <HeroClient ctaText={t.readMore} />
      </div>
    </section>
  );
}