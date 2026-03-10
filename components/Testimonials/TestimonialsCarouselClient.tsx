"use client";

import TestimonialCard, { Testimonial } from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialsCarouselClient({
  items,
}: {
  items: Testimonial[];
}) {
  return (
    <div className="mt-12 w-[90%] md:w-[85%] lg:w-[78%] mx-auto">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {items.map((t, idx) => (
            <CarouselItem key={`${t.name}-${idx}`} className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                image={t.image}
                name={t.name}
                role={t.role}
                description={t.description}
                imageAlt={t.imageAlt}
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