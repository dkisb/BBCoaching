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
import { Separator } from "@/components/ui/separator";
import type { Messages } from "@/types/messages";

export default function Home({
  t,
}: {
  t: Messages;
}) {
  return (
    <div id="home" className="overflow-hidden bg-[#f8fafc]">
      <div className="bg-[#eef2ff]">
        <Hero t={t.hero} />
      </div>
      <Separator className="bg-slate-300/40" />

      <div className="bg-[#f8fafc]">
        <About t={t.about} />
      </div>
      <Separator className="bg-slate-300/40" />

      <div className="bg-[#eef2ff]">
        <Resume t={t.resume} />
      </div>
      <Separator className="bg-slate-300/40" />

      <div className="bg-[#f8fafc]">
        <Experiences t={t.experiences} />
      </div>
      <Separator className="bg-slate-300/40" />

      <div className="bg-[#eef2ff]">
        <Skills t={t.skills} />
      </div>
      <Separator className="bg-slate-300/40" />

      <div className="bg-[#f8fafc]">
        <Services t={t.services} />
      </div>
      <Separator className="bg-slate-300/40" />

      <div className="bg-[#eef2ff]">
        <Testimonials t={t.testimonials} />
      </div>
      <Separator className="bg-slate-300/40" />

      <div className="bg-[#f8fafc]">
        <Gallery t={t.gallery} />
      </div>
      <Separator className="bg-slate-300/40" />

      <div className="bg-[#eef2ff]">
        <Contact t={t.contact} />
      </div>
    </div>
  );
}