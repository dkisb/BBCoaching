"use client";

import React from "react";
import { CgClose } from "react-icons/cg";
import { useTranslations } from "next-intl";
import { smoothScrollTo } from "../../helper";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ showNav, closeNav }: Props) {
  const t = useTranslations("nav");

  const navLinks = [
    { id: 1, url: "#home", label: t("home") },
    { id: 2, url: "#about", label: t("about") },
    { id: 3, url: "#experiences", label: t("experiences") },
    { id: 4, url: "#services", label: t("services") },
    { id: 5, url: "#testimonials", label: t("testimonials") },
    { id: 6, url: "#gallery", label: t("gallery") },
    { id: 7, url: "#contact", label: t("contact") },
  ];

  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[100002] bg-black/70 w-full h-screen`}
        onClick={closeNav}
        aria-hidden={!showNav}
      />
      <nav
        aria-label="Mobile"
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#0055ff] space-y-6 z-[100005] right-0`}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
          aria-label="Close menu"
          type="button"
        >
          <CgClose className="w-full h-full" />
        </button>

        <div className="px-12 mb-6">
          <LanguageSwitcher variant="mobile" />
        </div>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="mb-4">
              <a
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.url.slice(1), { offset: -80, duration: 500 });
                  closeNav();
                }}
                className="block"
              >
                <span className="text-white w-fit text-xl ml-12 border-b-[1.5px] border-white sm:text-[30px]">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}