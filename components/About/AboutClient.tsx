"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

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
      <Link
        to="contact"
        smooth={true}
        duration={800}
        offset={-100}
        className="inline-block mt-8 px-10 py-4 bg-[#0055ff] hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-white"
      >
        {ctaText}
      </Link>
    </div>
  );
}