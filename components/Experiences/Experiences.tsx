import ExperiencesAOSClient from "./ExperiencesAOSClient";
import ExperiencesGrid from "./ExperiencesGrid";

export type ExperiencesTranslations = {
  title: string;
  titleHighlight: string;
  list: {
    nationalChampion: string;
    ceeChampionship: string;
    bdpChampionships: string;
    rallyCross: string;
  };
};

type ExperienceItem = {
  id: number;
  image: string;
  title: string;
  company?: string;
  imageAlt?: string;
};

export default function Experiences({ t }: { t: ExperiencesTranslations }) {
  // Build the list using localized strings
  const experiencesList: ExperienceItem[] = [
    {
      id: 1,
      image: "/images/world-champs.jpg",
      title: t.list.nationalChampion,
      imageAlt: t.list.nationalChampion,
    },
    {
      id: 2,
      image: "/images/martinka2.jpeg",
      title: t.list.ceeChampionship,
      company: "KSB Racing Team",
      imageAlt: t.list.ceeChampionship,
    },
    {
      id: 3,
      image: "/images/markusz.jpeg",
      title: t.list.bdpChampionships,
      imageAlt: t.list.bdpChampionships,
    },
    {
      id: 4,
      image: "/images/rx2.jpg",
      title: t.list.rallyCross,
      imageAlt: t.list.rallyCross,
    },
  ];

  return (
    <section id="experiences" className="pt-16 pb-16">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        {t.title} <br />{" "}
        <span className="text-[#0055ff]">{t.titleHighlight}</span>
      </h2>
      <ExperiencesAOSClient>
        <ExperiencesGrid items={experiencesList} />
      </ExperiencesAOSClient>
    </section>
  );
}