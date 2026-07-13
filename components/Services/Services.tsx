import ServiceCard from "./ServiceCard";
import AOSBlock from "../common/AOSBlock";
import { IconType } from "react-icons";
import { FaChartLine, FaCar, FaBrain } from "react-icons/fa";

export type ServicesTranslations = {
  eyebrow: string;
  intro: string;
  title: string;
  titleHighlight: string;
  performanceAnalysis: { name: string; description: string };
  vehicleSetup: { name: string; description: string };
  mentalTraining: { name: string; description: string };
};

type ServiceItem = {
  id: number;
  icon: IconType;
  name: string;
  description: string;
};

export default function Services({ t }: { t: ServicesTranslations }) {
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
      </div>
    </section>
  );
}
