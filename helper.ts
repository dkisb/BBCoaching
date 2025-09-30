import { scroller } from "react-scroll";

export function smoothScrollTo(id: string, opts?: { offset?: number; duration?: number }) {
  scroller.scrollTo(id, {
    smooth: true,
    duration: opts?.duration ?? 600,
    offset: opts?.offset ?? -100,
  });
}