import ServiceCard from "./ServiceCard";
import AOSBlock from "../common/AOSBlock";
import { IconType } from "react-icons";
import { FaChartLine, FaCar, FaBrain, FaTv, FaGraduationCap } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";

export type ServicesTranslations = {
  eyebrow: string;
  intro: string;
  title: string;
  titleHighlight: string;
  performanceAnalysis: { name: string; description: string };
  vehicleSetup: { name: string; description: string };
  mentalTraining: { name: string; description: string };
};

export type SkillsTranslations = {
  performanceAnalysis: string;
  vehicleSetup: string;
  dataVideoAnalysis: string;
  driverDevelopment: string;
};

type ServiceItem = {
  id: number;
  icon: IconType;
  name: string;
  description: string;
};

type SkillItem = {
  id: number;
  icon: IconType;
  name: string;
};

export default function Services({
  t,
  skills,
}: {
  t: ServicesTranslations;
  skills: SkillsTranslations;
}) {
  const servicesList: ServiceItem[] = [
    {
      id: 1,
      icon: FaChartLine,
      name: t.performanceAnalysis.name,
      description: t.performanceAnalysis.description,
    },
    {
      id: 2,
      icon: FaCar,
      name: t.vehicleSetup.name,
      description: t.vehicleSetup.description,
    },
    {
      id: 3,
      icon: FaBrain,
      name: t.mentalTraining.name,
      description: t.mentalTraining.description,
    },
  ];

  const skillsList: SkillItem[] = [
    { id: 1, icon: LuChartNoAxesCombined, name: skills.performanceAnalysis },
    { id: 2, icon: FaCar, name: skills.vehicleSetup },
    { id: 3, icon: FaTv, name: skills.dataVideoAnalysis },
    { id: 4, icon: FaGraduationCap, name: skills.driverDevelopment },
  ];

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="section-container flex flex-col items-center">
        <span className="section-eyebrow">{t.eyebrow}</span>
        <h2 className="mt-4 text-center section-heading">
          {t.title} <br /> <span className="text-brand">{t.titleHighlight}</span>
        </h2>
        <p className="mt-5 text-center text-slate-600 text-lg max-w-2xl">{t.intro}</p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {servicesList.map((service, i) => (
            <AOSBlock key={service.id} animation="fade-up" delay={i * 100} className="h-full">
              <ServiceCard Icon={service.icon} name={service.name} description={service.description} />
            </AOSBlock>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
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
      </div>
    </section>
  );
}
