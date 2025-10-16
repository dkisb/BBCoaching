import ExperienceCard from "./ExperienceCard";

type Item = {
  id: number;
  image: string;
  title: string;
  company?: string;
  imageAlt?: string;
};

export default function ExperiencesGrid({ items }: { items: Item[] }) {
  return (
    <div
      className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16"
    >
      {items.map((experience) => (
        <ExperienceCard
          key={experience.id}
          image={experience.image}
          title={experience.title}
          company={experience.company}
          imageAlt={experience.imageAlt ?? experience.title}
        />
      ))}
    </div>
  );
}