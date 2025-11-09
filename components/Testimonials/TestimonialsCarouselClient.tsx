"use client";

import { useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard, { Testimonial } from "./TestimonialCard";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 },
};

export default function TestimonialsCarouselClient({
  items,
}: {
  items: Testimonial[];
}) {
  // Disable autoplay on mobile screens (below 764px)
  const autoPlay = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(min-width: 764px)").matches;
  }, []);

  return (
    <div className="mt-16 w-[70%] mx-auto">
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite
        autoPlay={autoPlay}
        autoPlaySpeed={2000}
      >
        {items.map((t, idx) => (
          <TestimonialCard
            key={`${t.name}-${idx}`}
            image={t.image}
            name={t.name}
            role={t.role}
            description={t.description}
            imageAlt={t.imageAlt}
          />
        ))}
      </Carousel>
    </div>
  );
}