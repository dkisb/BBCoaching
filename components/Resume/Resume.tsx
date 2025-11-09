import ResumeCard, { ResumeCardProps } from "./ResumeCard";
import AOSBlock from "../common/AOSBlock";

export type ResumeTranslations = {
  workExperience: string;
  workExperienceHighlight: string;
  achievementsTitle: string;
  achievementsHighlight: string;
  jobs: {
    tms: { role: string; company: string; duration: string };
    bdp: { role: string; company: string; duration: string };
    coaching: { role: string; duration: string; description?: string };
    renauer: { role: string; company: string; duration: string };
  };
  achievements: {
    rookie: { role: string; duration: string };
    nationalChampion: { role: string; duration: string };
    worldChampionship: { role: string; duration: string };
    cee: { role: string; duration: string; description?: string };
  };
};

export default function Resume({ t }: { t: ResumeTranslations }) {
  // Build lists server-side so bots see all content in HTML
  const work: ResumeCardProps[] = [
    {
      icon: "/images/tms-logo.png",
      role: t.jobs.tms.role,
      company: t.jobs.tms.company,
      duration: t.jobs.tms.duration,
      imageAlt: `${t.jobs.tms.company} logo`,
    },
    {
      icon: "/images/bdp-logo.jpg",
      role: t.jobs.bdp.role,
      company: t.jobs.bdp.company,
      duration: t.jobs.bdp.duration,
      imageAlt: `${t.jobs.bdp.company} logo`,
    },
    {
      icon: "/images/logoDark.png",
      role: t.jobs.coaching.role,
      duration: t.jobs.coaching.duration,
      description: t.jobs.coaching.description,
      imageAlt: "BB Coaching logo",
    },
    {
      icon: "/images/renauer-logo.png",
      role: t.jobs.renauer.role,
      company: t.jobs.renauer.company,
      duration: t.jobs.renauer.duration,
      imageAlt: `${t.jobs.renauer.company} logo`,
    },
  ];

  const achievements: ResumeCardProps[] = [
    {
      icon: "/images/hero2.jpg",
      role: t.achievements.rookie.role,
      duration: t.achievements.rookie.duration,
      imageAlt: t.achievements.rookie.role,
    },
    {
      icon: "/images/about.jpg",
      role: t.achievements.nationalChampion.role,
      duration: t.achievements.nationalChampion.duration,
      imageAlt: t.achievements.nationalChampion.role,
    },
    {
      icon: "/images/world-champs.jpg",
      role: t.achievements.worldChampionship.role,
      duration: t.achievements.worldChampionship.duration,
      imageAlt: t.achievements.worldChampionship.role,
    },
    {
      icon: "/images/bdp.jpeg",
      role: t.achievements.cee.role,
      duration: t.achievements.cee.duration,
      description: t.achievements.cee.description,
      imageAlt: t.achievements.cee.role,
    },
  ];

  return (
    <section id="resume" className="pt-20 pb-16">
      <div className="w-[95%] sm:w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10">
        {/* Work Experience */}
        <div className="flex flex-col items-center xl:items-start">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-white text-center xl:text-left break-words w-full">
            {t.workExperience}{" "}
            <span className="text-[#0055ff]">{t.workExperienceHighlight}</span>
          </h2>
          <div className="mt-8 sm:mt-10 w-full">
            {/* Optional animation wrapper; remove if not needed */}
            <AOSBlock animation="zoom-in" delay={100}>
              <div className="space-y-4 flex flex-col items-center xl:items-start w-full">
                {work.map((item, idx) => (
                  <ResumeCard key={`${item.role}-${idx}`} {...item} />
                ))}
              </div>
            </AOSBlock>
          </div>
        </div>

        {/* Personal Achievements */}
        <div className="flex flex-col items-center xl:items-start">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-white text-center xl:text-left break-words w-full">
            {t.achievementsTitle}{" "}
            <span className="text-[#0055ff]">{t.achievementsHighlight}</span>
          </h2>
          <div className="mt-8 sm:mt-10 w-full">
            <AOSBlock animation="zoom-in" delay={100}>
              <div className="space-y-4 flex flex-col items-center xl:items-start w-full">
                {achievements.map((item, idx) => (
                  <ResumeCard key={`${item.role}-${idx}`} {...item} />
                ))}
              </div>
            </AOSBlock>
          </div>
        </div>
      </div>
    </section>
  );
}