"use client";

import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { PiPhone } from "react-icons/pi";
import { useTranslations } from "next-intl";
import { smoothScrollTo } from "../../helper";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { Button } from "@/components/ui/button";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ showNav, closeNav }: Props) {
  const t = useTranslations("nav");

  const navLinks = [
    { id: 1, url: "#home", label: t("home") },
    { id: 2, url: "#about", label: t("about") },
    { id: 3, url: "#services", label: t("services") },
    { id: 4, url: "#testimonials", label: t("testimonials") },
    { id: 5, url: "#gallery", label: t("gallery") },
    { id: 6, url: "#contact", label: t("contact") },
  ];

  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  useEffect(() => {
    if (!showNav) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [showNav, closeNav]);

  return (
    <div>
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[100002] bg-slate-950/40 w-full h-screen`}
        onClick={closeNav}
        aria-hidden={!showNav}
      />
      <nav
        aria-label="Mobile"
        className={`${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-white shadow-2xl space-y-6 z-[100005] right-0`}
        role="dialog"
        aria-modal="true"
        inert={!showNav}
      >
        <button
          onClick={closeNav}
          className="absolute top-[1.2rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-slate-900"
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
                <span className="text-slate-900 w-fit text-xl ml-12 border-b-2 border-transparent hover:border-brand sm:text-2xl font-medium">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="px-12 pt-4">
          <Button
            asChild
            size="lg"
            className="w-full rounded-lg bg-brand text-brand-foreground hover:bg-brand/90"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact", { offset: -80, duration: 500 });
                closeNav();
              }}
            >
              <PiPhone className="w-5 h-5" />
              <span>{t("bookCall")}</span>
            </a>
          </Button>
        </div>
      </nav>
    </div>
  );
}
