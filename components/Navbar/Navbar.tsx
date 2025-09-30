"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiPhone } from "react-icons/pi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { smoothScrollTo } from "@/helper";

type Props = {
  openNav: () => void;
};

export default function Navbar({ openNav }: Props) {
  const t = useTranslations("nav");
  const [navBg, setNavBg] = useState(false);

  const navLinks = [
    { id: 1, url: "#home", label: t("home") },
    { id: 2, url: "#about", label: t("about") },
    { id: 3, url: "#experiences", label: t("experiences") },
    { id: 4, url: "#services", label: t("services") },
    { id: 5, url: "#testimonials", label: t("testimonials") },
    { id: 6, url: "#gallery", label: t("gallery") },
    { id: 7, url: "#contact", label: t("contact") },
  ];

  useEffect(() => {
    const onScroll = () => setNavBg(window.scrollY > 90);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`transition-all ${
        navBg ? "bg-white/90 shadow-md" : "bg-white backdrop-blur"
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-90% mx-auto">
        <div className="flex items-center space-x-2">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("home", { offset: -100 });
            }}
            className="flex items-center justify-center flex-col w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-45 lg:h-45"
            aria-label="Go to home"
          >
            <Image
              src="/images/logoDark.png"
              alt="BB Coaching logo"
              width={180}
              height={180}
              className="w-full h-full object-contain"
              priority
            />
          </a>
        </div>

        <nav aria-label="Primary" className="hidden lg:flex items-center space-x-10">
          <ul className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.url.slice(1), { offset: -100, duration: 600 });
                  }}
                  className="text-base hover:text-cyan-500 text-black font-medium transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("contact", { offset: -100, duration: 600 });
            }}
            className="inline-block"
          >
            <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-[#0055ff] hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
              <PiPhone className="w-5 h-5" />
              <span className="whitespace-nowrap">{t("bookCall")}</span>
            </button>
          </a>

          <button onClick={openNav} className="lg:hidden" aria-label="Open menu" type="button">
            <HiBars3BottomRight className="w-8 h-8 text-black" />
          </button>
        </div>
      </div>
    </header>
  );
}