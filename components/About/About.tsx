// components/About/About.tsx
import Image from "next/image";
import AboutClient from "./AboutClient";

export type AboutTranslations = {
  title: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  stat1Title: string;
  stat1Description: string;
  stat2Title: string;
  stat2Description: string;
  getInTouch: string;
  imageAlt?: string;
};

type Props = {
  t: AboutTranslations;
};

export default function About({ t }: Props) {
  return (
    <section id="about" className="pt-16 pb-16 text-black">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* image */}
        <div className="flex justify-center">
          <Image
            src="/images/about.jpg"
            alt={t.imageAlt ?? "About BB Coaching"}
            width={520}
            height={520}
            className="rounded-3xl shadow-lg object-cover"
            style={{ height: "auto" }}
            priority={false}
          />
        </div>

        {/* text */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t.title} <span className="text-[#0055ff]">{t.titleHighlight}</span>
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg">{t.paragraph1}</p>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">{t.paragraph2}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-[#14134120] rounded-2xl p-5">
              <p className="text-xl font-semibold">{t.stat1Title}</p>
              <p className="text-gray-600">{t.stat1Description}</p>
            </div>
            <div className="bg-[#14134120] rounded-2xl p-5">
              <p className="text-xl font-semibold">{t.stat2Title}</p>
              <p className="text-gray-600">{t.stat2Description}</p>
            </div>
          </div>

          {/* Client wrapper only for AOS + smooth scroll behavior */}
          <AboutClient ctaText={t.getInTouch} />
        </div>
      </div>
    </section>
  );
}