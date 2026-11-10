import { scroller } from "react-scroll";

export function smoothScrollTo(id: string, opts?: { offset?: number; duration?: number }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  scroller.scrollTo(id, {
    smooth: !prefersReducedMotion,
    duration: opts?.duration ?? 600,
    offset: opts?.offset ?? -100,
  });
}