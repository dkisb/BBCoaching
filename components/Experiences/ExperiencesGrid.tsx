import ExperienceCard from "./ExperienceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Item = {
  id: number;
  image: string;
  title: string;
  company?: string;
  imageAlt?: string;
};

export default function ExperiencesGrid({ items }: { items: Item[] }) {
  return (
    <div className="mt-12 w-[90%] md:w-[85%] lg:w-[78%] mx-auto relative">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {items.map((experience) => (
            <CarouselItem key={experience.id} className="md:basis-1/2 lg:basis-1/3">
              <ExperienceCard
                image={experience.image}
                title={experience.title}
                company={experience.company}
                imageAlt={experience.imageAlt ?? experience.title}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-5 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90" />
        <CarouselNext className="-right-5 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90" />
      </Carousel>
    </div>
  );
}