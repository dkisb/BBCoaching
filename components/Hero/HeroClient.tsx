// components/Hero/HeroClient.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { smoothScrollTo } from "@/helper";
import { Button } from "@/components/ui/button";

type Props = {
  ctaText: string;
  secondaryCtaText: string;
};

export default function HeroClient({ ctaText, secondaryCtaText }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div data-aos="fade-up" className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md sm:max-w-none">
      <Button
        asChild
        size="lg"
        className="rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 h-12 px-8 text-base"
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("contact", { offset: -100, duration: 800 });
          }}
        >
          {ctaText}
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-lg border-slate-300 h-12 px-8 text-base"
      >
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("services", { offset: -100, duration: 800 });
          }}
        >
          {secondaryCtaText}
        </a>
      </Button>
    </div>
  );
}
