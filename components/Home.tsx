// components/Home.tsx (server component)
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Experiences from "./Experiences/Experiences";
import Skills from "./Skills/Skills";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";

// Optional generic AOS wrapper for sections that don't have their own wrappers
import HomeAOSClient from "./HomeAOSClient";

import type { HeroTranslations } from "./Hero/Hero";
import type { AboutTranslations } from "./About/About";
import type { ResumeTranslations } from "./Resume/Resume";
import type { ExperiencesTranslations } from "./Experiences/Experiences";
import type { SkillsTranslations } from "./Skills/Skills";
import type { ServicesTranslations } from "./Services/Services";
import type { TestimonialsTranslations } from "./Testimonials/Testimonials";
import type { GalleryTranslations } from "./Gallery/Gallery";
import type { ContactTranslations } from "./Contact/Contact";

type HomeTranslations = {
  hero: HeroTranslations;
  about: AboutTranslations;
  resume: ResumeTranslations;
  experiences: ExperiencesTranslations;
  skills: SkillsTranslations;
  services: ServicesTranslations;
  testimonials: TestimonialsTranslations;
  gallery: GalleryTranslations;
  contact: ContactTranslations;
};

export default function Home({
  t,
}: {
  t: HomeTranslations;
}) {
  return (
    <div id="home" className="overflow-hidden bg-gray-400">
      {/* Hero uses a client wrapper internally for AOS on CTA; safe to render directly */}
      <Hero t={t.hero} />

      {/* About already uses AboutClient for AOS on the CTA; render directly */}
      <About t={t.about} />

      {/* Resume: wrap once if you want a section-level animation */}
      <HomeAOSClient>
        <Resume t={t.resume} />
      </HomeAOSClient>

      {/* Experiences: we added AOSBlock in grid/cards; a section-level wrapper is optional */}
      <Experiences t={t.experiences} />

      {/* Skills: uses AOSBlock (and optional TiltWrapper) per card; no outer wrapper needed */}
      <Skills t={t.skills} />

      {/* Services: uses AOSBlock per card; no outer wrapper needed */}
      <Services t={t.services} />

      {/* Testimonials: carousel is client; content is server-rendered. No extra AOS needed */}
      <Testimonials t={t.testimonials} />

      {/* Gallery: server section + client carousel/lightbox; no extra wrapper needed */}
      <Gallery t={t.gallery} />

      {/* Contact: server section + client form; no extra wrapper needed */}
      <Contact t={t.contact} />
    </div>
  );
}