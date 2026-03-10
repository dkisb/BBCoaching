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
    coachChampion: { role: string; duration: string; description?: string };
    cee: { role: string; duration: string; description?: string };
    cez: { role: string; duration: string; description?: string };
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
      role: t.achievements.coachChampion.role,
      duration: t.achievements.coachChampion.duration,
      description: t.achievements.coachChampion.description,
      imageAlt: t.achievements.coachChampion.role,
    },
    {
      icon: "/images/martinka2.jpeg",
      role: t.achievements.cee.role,
      duration: t.achievements.cee.duration,
      description: t.achievements.cee.description,
      imageAlt: t.achievements.cee.role,
    },
    {
      icon: "/images/cez.jpg",
      role: t.achievements.cez.role,
      duration: t.achievements.cez.duration,
      description: t.achievements.cez.description,
      imageAlt: t.achievements.cez.role,
    },
  ];

  return (
    <section id="resume" className="pt-20 pb-16">
      <div className="w-[90%] md:w-[85%] lg:w-[78%] mx-auto">
        {/* Work Experience */}
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-slate-900 text-center md:text-left break-words w-full">
            {t.workExperience}{" "}
            <span className="text-[#0055ff]">{t.workExperienceHighlight}</span>
          </h2>
          <div className="mt-8 sm:mt-10 w-full">
            <AOSBlock animation="zoom-in" delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-4 items-stretch justify-items-center">
                {work.map((item, idx) => (
                  <ResumeCard key={`${item.role}-${idx}`} {...item} className="w-full max-w-[540px]" />
                ))}
              </div>
            </AOSBlock>
          </div>
        </div>

        {/* Personal Achievements */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-slate-900 text-center md:text-left break-words w-full">
            {t.achievementsTitle}{" "}
            <span className="text-[#0055ff]">{t.achievementsHighlight}</span>
          </h2>
          <div className="mt-8 sm:mt-10 w-full">
            <AOSBlock animation="zoom-in" delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-start justify-items-center">
                {achievements.map((item, idx) => (
                  <ResumeCard
                    key={`${item.role}-${idx}`}
                    {...item}
                    compact
                    className="w-full max-w-[560px]"
                  />
                ))}
              </div>
            </AOSBlock>
          </div>
        </div>
      </div>
    </section>
  );
}