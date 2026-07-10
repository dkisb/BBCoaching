// components/Hero/Hero.tsx
import Image from "next/image";
import HeroClient from "./HeroClient";

export type HeroTranslations = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  partnerPrefix?: string;
  partnerSuffix?: string;
  readMore: string;
  secondaryCta: string;
  stat1Title: string;
  stat1Description: string;
  stat2Title: string;
  stat2Description: string;
  stat3Title: string;
  stat3Description: string;
  imageAlt?: string;
};

type Props = {
  t: HeroTranslations;
};

export default function Hero({ t }: Props) {
  const stats = [
    { title: t.stat1Title, description: t.stat1Description },
    { title: t.stat2Title, description: t.stat2Description },
    { title: t.stat3Title, description: t.stat3Description },
  ];

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 pt-[16vh] pb-16 sm:pt-[20vh] sm:pb-20"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* text content */}
        <div className="flex flex-col items-start text-left">
          <span className="section-eyebrow">{t.eyebrow}</span>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950">
            {t.title}
            <br />
            <span className="text-brand">{t.titleHighlight}</span>
          </h1>

          <h2 className="mt-5 text-base sm:text-xl text-slate-600 max-w-xl">
            {t.subtitle}
          </h2>

          <HeroClient ctaText={t.readMore} secondaryCtaText={t.secondaryCta} />

          {/* stat row */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-md">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-bold text-slate-950">{stat.title}</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-snug">{stat.description}</p>
              </div>
            ))}
          </div>

          {t.partnerPrefix || t.partnerSuffix ? (
            <div className="mt-10 flex items-center gap-3 flex-wrap">
              {t.partnerPrefix ? (
                <span className="text-sm font-medium text-slate-500">{t.partnerPrefix}</span>
              ) : null}
              <span className="inline-flex items-center rounded-md bg-slate-950 px-3 py-2 shadow-sm">
                <Image
                  src="/images/sportgarage.svg"
                  alt="SportGarage CZ logo"
                  width={360}
                  height={100}
                  className="h-auto w-40 sm:w-48"
                />
              </span>
              {t.partnerSuffix ? (
                <span className="text-sm font-medium text-slate-500">{t.partnerSuffix}</span>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-4 rounded-[2rem] bg-brand/5 -z-10" aria-hidden="true" />
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[1.75rem] overflow-hidden border border-slate-200 shadow-xl">
            <Image
              src="/images/hero2.jpg"
              alt={t.imageAlt ?? "Bertold Bors, BB Coaching"}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
