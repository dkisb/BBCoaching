import ServiceCard from "./ServiceCard";
import AOSBlock from "../common/AOSBlock"; // optional small client wrapper
import { IconType } from "react-icons";
import { FaChartLine, FaCar, FaBrain } from "react-icons/fa";

export type ServicesTranslations = {
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
    <section id="services" className="pt-16 pb-16 flex flex-col items-center justify-center">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black">
        {t.title} <br /> <span className="text-[#0055ff]">{t.titleHighlight}</span>
      </h2>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10 mt-20 justify-items-center items-start">
        {servicesList.map((service, i) => (
          <AOSBlock key={service.id} animation="fade-right" delay={i * 100}>
            <div className="w-full h-full flex" style={{ minHeight: 350 }}>
              <ServiceCard Icon={service.icon} name={service.name} description={service.description} />
            </div>
          </AOSBlock>
        ))}
      </div>
    </section>
  );
}