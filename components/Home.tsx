// components/Home.tsx (server component)
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import { Separator } from "@/components/ui/separator";
import StickyMobileCTA from "./common/StickyMobileCTA";
import type { Messages } from "@/types/messages";

export default function Home({
  t,
}: {
  t: Messages;
}) {
  return (
    <>
      <div id="home" className="overflow-hidden bg-white">
        <div className="bg-gradient-to-b from-blue-50/70 via-white to-white">
          <Hero t={t.hero} skills={t.skills} />
        </div>
        <Separator className="bg-slate-200" />

        <section id="about" className="bg-white py-20 sm:py-28">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <About t={t.about} />
            <Resume t={t.resume} />
          </div>
        </section>
        <Separator className="bg-slate-200" />

        <div className="bg-gradient-to-b from-blue-50/60 via-blue-50/20 to-white">
          <Services t={t.services} />
        </div>
        <Separator className="bg-slate-200" />

        <div className="bg-white">
          <Testimonials t={t.testimonials} />
        </div>
        <Separator className="bg-slate-200" />

        <div className="bg-slate-50">
          <Gallery t={t.gallery} />
        </div>
        <Separator className="bg-slate-200" />

        <div className="bg-gradient-to-b from-white to-blue-50/50">
          <Contact t={t.contact} />
        </div>
      </div>
      <StickyMobileCTA />
    </>
  );
}
