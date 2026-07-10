// components/Hero/HeroClient.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
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
        <Link to="contact" smooth={true} duration={800} offset={-100} className="cursor-pointer">
          {ctaText}
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-lg border-slate-300 h-12 px-8 text-base"
      >
        <Link to="services" smooth={true} duration={800} offset={-100} className="cursor-pointer">
          {secondaryCtaText}
        </Link>
      </Button>
    </div>
  );
}
