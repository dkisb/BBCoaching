// types/messages.ts
import type { HeroTranslations } from "@/components/Hero/Hero";
import type { AboutTranslations } from "@/components/About/About";
import type { ResumeTranslations } from "@/components/Resume/Resume";
import type { ExperiencesTranslations } from "@/components/Experiences/Experiences";
import type { SkillsTranslations } from "@/components/Skills/Skills";
import type { ServicesTranslations } from "@/components/Services/Services";
import type { TestimonialsTranslations } from "@/components/Testimonials/Testimonials";
import type { GalleryTranslations } from "@/components/Gallery/Gallery";
import type { ContactTranslations } from "@/components/Contact/Contact";

export type Messages = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    experiences: string;
    services: string;
    testimonials: string;
    gallery: string;
    contact: string;
    bookCall: string;
  };
  hero: HeroTranslations;
  about: AboutTranslations;
  services: ServicesTranslations;
  skills: SkillsTranslations;
  resume: ResumeTranslations;
  experiences: ExperiencesTranslations;
  testimonials: TestimonialsTranslations;
  gallery: GalleryTranslations;
  contact: ContactTranslations;
  footer: {
    copyright: string;
  };
};

