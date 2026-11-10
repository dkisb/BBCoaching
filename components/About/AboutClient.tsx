"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { smoothScrollTo } from "@/helper";
import { Button } from "@/components/ui/button";

type Props = {
  ctaText: string;
};

export default function AboutClient({ ctaText }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
      <Button
        asChild
        size="lg"
        className="mt-8 rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 h-12 px-8 text-base"
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
    </div>
  );
}
