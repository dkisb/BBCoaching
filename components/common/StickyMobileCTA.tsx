"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { PiPhone } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/helper";

export default function StickyMobileCTA() {
  const t = useTranslations("nav");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-[9999] p-3 bg-white/95 backdrop-blur border-t border-slate-200 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button
        asChild
        size="lg"
        className="w-full rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 h-12"
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("contact", { offset: -100, duration: 600 });
          }}
        >
          <PiPhone className="w-4 h-4" />
          <span>{t("bookCall")}</span>
        </a>
      </Button>
    </div>
  );
}
