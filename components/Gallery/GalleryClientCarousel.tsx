"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type GalleryItem = {
  id: number;
  image: string;
  alt: string;
};

export default function GalleryCarouselClient({
  items,
}: {
  items: GalleryItem[];
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const goPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setExpandedIndex((prev) =>
      prev !== null ? (prev - 1 + items.length) % items.length : 0
    );
  };

  const goNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setExpandedIndex((prev) =>
      prev !== null ? (prev + 1) % items.length : 0
    );
  };

  return (
    <>
      <div className="mt-12 w-[90%] md:w-[85%] lg:w-[78%] mx-auto relative">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {items.map((g, i) => (
              <CarouselItem key={g.id} className="md:basis-1/2 lg:basis-1/3">
                <button
                  className="flex justify-center items-center cursor-pointer w-full"
                  onClick={() => setExpandedIndex(i)}
                  type="button"
                  aria-label={`Open image ${i + 1}`}
                  style={{ background: "transparent", border: "none", padding: 0 }}
                >
                  <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] xl:w-[350px] xl:h-[350px] overflow-hidden shadow-lg">
                    <Image
                      src={g.image}
                      alt={g.alt}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 640px) 280px, (max-width: 764px) 300px, (max-width: 1324px) 320px, 350px"
                      priority={i === 0}
                    />
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-5 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90" />
          <CarouselNext className="-right-5 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-white/90" />
        </Carousel>
      </div>

      {expandedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setExpandedIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition z-10"
              onClick={() => setExpandedIndex(null)}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <Button
              type="button"
              aria-label="Previous"
              size="icon-sm"
              className="absolute top-1/2 -left-12 -translate-y-1/2 rounded-full bg-white text-black hover:bg-white/90 z-10"
              onClick={goPrev}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              type="button"
              aria-label="Next"
              size="icon-sm"
              className="absolute top-1/2 -right-12 -translate-y-1/2 rounded-full bg-white text-black hover:bg-white/90 z-10"
              onClick={goNext}
            >
              <ChevronRightIcon />
            </Button>

            <div className="relative w-[90vw] max-w-[800px] h-[80vh] flex items-center justify-center">
              <Image
                src={items[expandedIndex].image}
                alt={items[expandedIndex].alt}
                fill
                style={{ objectFit: "contain" }}
                className=""
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}