"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type GalleryItem = {
  id: number;
  image: string;
  alt: string;
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1324 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1324, min: 764 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1, slidesToSlide: 1 },
};

function ArrowButton({
  onClick,
  disabled,
  direction,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  direction: "left" | "right";
}) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous" : "Next"}
      onClick={onClick}
      disabled={disabled}
      className={`react-multi-carousel-arrow react-multi-carousel-arrow--${direction}`}
      style={{
        position: "absolute",
        [direction]: 0,
        top: "calc(50% - 15px)",
        zIndex: 2,
        background: "rgba(0,0,0,0.5)",
        border: "none",
        borderRadius: "50%",
        width: 40,
        height: 40,
        color: "white",
        fontSize: 24,
        cursor: "pointer",
      } as React.CSSProperties}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
}

export default function GalleryCarouselClient({
  items,
}: {
  items: GalleryItem[];
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Disable autoplay on narrow screens without resize listeners
  const autoPlay = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(min-width: 764px)").matches;
  }, []);

  const arrowProps =
    expandedIndex !== null
      ? { arrows: false, customLeftArrow: <></>, customRightArrow: <></> }
      : {
          arrows: true,
          customLeftArrow: <ArrowButton direction="left" />,
          customRightArrow: <ArrowButton direction="right" />,
        };

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
      <div className="w-[90%] sm:w-[70%] mx-auto mt-20 relative">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite
          autoPlay={autoPlay}
          autoPlaySpeed={2000}
          itemClass="px-4 sm:px-6 md:px-8"
          {...arrowProps}
        >
          {items.map((g, i) => (
            <button
              key={g.id}
              className="flex justify-center items-center cursor-pointer"
              onClick={() => setExpandedIndex(i)}
              type="button"
              aria-label={`Open image ${i + 1}`}
              style={{ background: "transparent", border: "none", padding: 0 }}
            >
              <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] xl:w-[350px] xl:h-[350px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={g.image}
                  alt={g.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 640px) 280px, (max-width: 764px) 300px, (max-width: 1324px) 320px, 350px"
                  priority={i === 0}
                />
              </div>
            </button>
          ))}
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
            {/* Prev */}
            <button
              className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition z-10"
              onClick={goPrev}
              aria-label="Previous"
              type="button"
              style={{ left: "-3rem" }}
            >
              ←
            </button>
            {/* Next */}
            <button
              className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 transition z-10"
              onClick={goNext}
              aria-label="Next"
              type="button"
              style={{ right: "-3rem" }}
            >
              →
            </button>

            <div className="relative w-[90vw] max-w-[800px] h-[80vh] flex items-center justify-center">
              <Image
                src={items[expandedIndex].image}
                alt={items[expandedIndex].alt}
                fill
                style={{ objectFit: "contain" }}
                className="rounded"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}