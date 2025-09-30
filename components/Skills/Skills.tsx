// components/Skills/Skills.tsx
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaCar, FaGraduationCap, FaTv } from "react-icons/fa";
import SkillCard from "./SkillCard";
import AOSBlock from "../common/AOSBlock"; // optional client wrapper
import TiltWrapper from "../common/TiltWrapper";

export type SkillsTranslations = {
  title: string;
  titleHighlight: string;
  performanceAnalysis: string;
  vehicleSetup: string;
  dataVideoAnalysis: string;
  driverDevelopment: string;
};

type SkillItem = {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
};

export default function Skills({ t }: { t: SkillsTranslations }) {
  const skillsList: SkillItem[] = [
    { id: 1, icon: LuChartNoAxesCombined, name: t.performanceAnalysis },
    { id: 2, icon: FaCar, name: t.vehicleSetup },
    { id: 3, icon: FaTv, name: t.dataVideoAnalysis },
    { id: 4, icon: FaGraduationCap, name: t.driverDevelopment },
  ];

  return (
    <section id="skills" className="text-white pt-16 pb-16">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black">
        {t.title} <span className="text-[#0055ff]">{t.titleHighlight}</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skillsList.map((s, i) => (
          <AOSBlock key={s.id} animation="flip-right" delay={i * 100}>
            <TiltWrapper>
              <SkillCard Icon={s.icon} name={s.name} />
            </TiltWrapper>
          </AOSBlock>
        ))}
      </div>
    </section>
  );
}