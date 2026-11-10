"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const [lightboxApi, setLightboxApi] = useState<CarouselApi>();
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openAt = (index: number) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setIsOpen(true);
    lightboxApi?.scrollTo(index, true);
  };

  // Escape closes; focus moves into the dialog and returns to the trigger on close.
  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (e.key === "Tab") trapFocus(e, dialogRef.current);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <div className="mt-14 section-container relative">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {items.map((g, i) => (
              <CarouselItem key={g.id} className="md:basis-1/2 lg:basis-1/3">
                <button
                  className="group flex justify-center items-center cursor-pointer w-full"
                  onClick={() => openAt(i)}
                  type="button"
                  aria-label={`Open image ${i + 1}`}
                  style={{ background: "transparent", border: "none", padding: 0 }}
                >
                  <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <Image
                      src={g.image}
                      alt={g.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                        <Maximize2 className="w-4 h-4 text-slate-900" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-5 top-1/2 -translate-y-1/2 bg-white border border-slate-200 text-slate-900 hover:bg-slate-50" />
          <CarouselNext className="-right-5 top-1/2 -translate-y-1/2 bg-white border border-slate-200 text-slate-900 hover:bg-slate-50" />
        </Carousel>
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 ${
          isOpen ? "" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-label="Gallery"
        ref={dialogRef}
        inert={!isOpen}
      >
        <div
          className="relative w-[90vw] max-w-3xl"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            className="absolute -top-12 right-0 text-white text-3xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition z-10"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            type="button"
          >
            ×
          </button>

          <Carousel setApi={setLightboxApi} opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {items.map((g) => (
                <CarouselItem key={g.id}>
                  <div className="relative w-full h-[70vh]">
                    <Image
                      src={g.image}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, 768px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:-left-14 top-1/2 -translate-y-1/2 bg-white/90 text-slate-900 hover:bg-white" />
            <CarouselNext className="-right-4 sm:-right-14 top-1/2 -translate-y-1/2 bg-white/90 text-slate-900 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </>
  );
}

// Keep Tab / Shift+Tab cycling inside the open dialog.
function trapFocus(e: KeyboardEvent, container: HTMLElement | null) {
  if (!container) return;
  const focusable = Array.from(
    container.querySelectorAll<HTMLElement>("button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])")
  );
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;
  const isOutside = !container.contains(active);
  if (e.shiftKey && (active === first || isOutside)) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && (active === last || isOutside)) {
    e.preventDefault();
    first.focus();
  }
}
