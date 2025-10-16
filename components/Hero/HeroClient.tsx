// components/Hero/HeroClient.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { BsArrowDownShort } from "react-icons/bs";

type Props = {
  ctaText: string;
};

export default function HeroClient({ ctaText }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up" />
      <div data-aos="fade-up" data-aos-delay="200" />
      <div data-aos="fade-up" data-aos-delay="400" />
      <Link
        to="about"
        smooth={true}
        duration={1000}
        offset={-100}
        data-aos="fade-up"
        data-aos-delay="600"
        className="mt-6 px-10 py-4 bg-[#0055ff] hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
      >
        <span className="text-white">{ctaText}</span>
        <BsArrowDownShort className="w-5 h-5 ml-2 inline-block text-white" />
      </Link>
    </>
  );
}