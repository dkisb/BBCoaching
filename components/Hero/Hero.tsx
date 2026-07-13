// components/Hero/Hero.tsx
import Image from "next/image";
import { IconType } from "react-icons";
import { FaCar, FaTv, FaGraduationCap } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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

export type SkillsTranslations = {
  performanceAnalysis: string;
  vehicleSetup: string;
  dataVideoAnalysis: string;
  driverDevelopment: string;
};

type SkillItem = {
  id: number;
  icon: IconType;
  name: string;
};

type Props = {
  t: HeroTranslations;
  skills: SkillsTranslations;
};

export default function Hero({ t, skills }: Props) {
  const stats = [
    { title: t.stat1Title, description: t.stat1Description },
    { title: t.stat2Title, description: t.stat2Description },
    { title: t.stat3Title, description: t.stat3Description },
  ];

  const skillsList: SkillItem[] = [
    { id: 1, icon: LuChartNoAxesCombined, name: skills.performanceAnalysis },
    { id: 2, icon: FaCar, name: skills.vehicleSetup },
    { id: 3, icon: FaTv, name: skills.dataVideoAnalysis },
    { id: 4, icon: FaGraduationCap, name: skills.driverDevelopment },
  ];

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 pt-[16vh] pb-16 sm:pt-[20vh] sm:pb-20"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* text content */}
        <div className="flex flex-col items-start text-left w-full">
          <div className="flex items-start gap-4 w-full">
            <Avatar className="size-20 sm:size-24 shrink-0 ring-2 ring-white shadow-lg lg:hidden">
              <AvatarImage src="/images/hero2.jpg" alt={t.imageAlt ?? "Bertold Bors, BB Coaching"} />
              <AvatarFallback>BB</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <span className="section-eyebrow">{t.eyebrow}</span>
              <h1 className="mt-2 lg:mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-950">
                {t.title}
                <br />
                <span className="text-brand">{t.titleHighlight}</span>
              </h1>
            </div>
          </div>

          <h2 className="mt-5 text-base sm:text-xl text-slate-600 max-w-xl">
            {t.subtitle}
          </h2>

          {/* skill pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {skillsList.map((skill) => (
              <span
                key={skill.id}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                <skill.icon className="w-4 h-4 text-brand" aria-hidden="true" />
                {skill.name}
              </span>
            ))}
          </div>

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
        <div className="relative hidden lg:flex lg:justify-end">
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
