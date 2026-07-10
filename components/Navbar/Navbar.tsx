"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiPhone } from "react-icons/pi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Button } from "@/components/ui/button";
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
    { id: 3, url: "#services", label: t("services") },
    { id: 4, url: "#testimonials", label: t("testimonials") },
    { id: 5, url: "#gallery", label: t("gallery") },
    { id: 6, url: "#contact", label: t("contact") },
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
        navBg ? "bg-white/90 backdrop-blur shadow-sm border-b border-slate-200" : "bg-white"
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="section-container flex items-center h-full justify-between">
        <div className="flex items-center space-x-2">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("home", { offset: -100 });
            }}
            className="flex items-center justify-center flex-col w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            aria-label="Go to home"
          >
            <Image
              src="/images/logoDark.png"
              alt="BB Coaching logo"
              width={180}
              height={180}
              className="object-contain"
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
                  className="text-sm text-slate-700 hover:text-brand font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 px-4 sm:px-6"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact", { offset: -100, duration: 600 });
              }}
            >
              <PiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap text-xs sm:text-sm">{t("bookCall")}</span>
            </a>
          </Button>

          <button onClick={openNav} className="lg:hidden text-slate-900" aria-label="Open menu" type="button">
            <HiBars3BottomRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
