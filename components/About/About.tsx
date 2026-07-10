import Image from "next/image";
import { Trophy, LineChart } from "lucide-react";
import AboutClient from "./AboutClient";

export type AboutTranslations = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  stat1Title: string;
  stat1Description: string;
  stat2Title: string;
  stat2Description: string;
  getInTouch: string;
  imageAlt?: string;
};

type Props = {
  t: AboutTranslations;
};

export default function About({ t }: Props) {
  return (
    <div>
      <span className="section-eyebrow">{t.eyebrow}</span>
      <h2 className="mt-4 section-heading">
        {t.title} <span className="text-brand">{t.titleHighlight}</span>
      </h2>

      <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">{t.paragraph1}</p>

      <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">{t.paragraph2}</p>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="surface-card p-5">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand/10">
            <LineChart className="w-6 h-6 text-brand" aria-hidden="true" />
          </span>
          <p className="mt-3 text-xl font-bold text-slate-950">{t.stat1Title}</p>
          <p className="text-slate-500 text-sm">{t.stat1Description}</p>
        </div>
        <div className="surface-card p-5">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand/10">
            <Trophy className="w-6 h-6 text-brand" aria-hidden="true" />
          </span>
          <p className="mt-3 text-xl font-bold text-slate-950">{t.stat2Title}</p>
          <p className="text-slate-500 text-sm">{t.stat2Description}</p>
        </div>
      </div>

      <AboutClient ctaText={t.getInTouch} />

      <div className="relative mt-10 max-w-md">
        <div className="absolute -inset-4 rounded-[2rem] bg-slate-50 -z-10" aria-hidden="true" />
        <Image
          src="/images/about.jpg"
          alt={t.imageAlt ?? "About BB Coaching"}
          width={520}
          height={520}
          className="rounded-2xl shadow-lg object-cover w-full"
          style={{ height: "auto" }}
          priority={false}
        />
      </div>
    </div>
  );
}
