"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSBlock({
  children,
  animation = "fade-up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div data-aos={animation} data-aos-delay={delay} className={className}>
      {children}
    </div>
  );
}