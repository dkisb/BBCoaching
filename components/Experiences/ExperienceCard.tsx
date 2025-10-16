// components/Experiences/ExperienceCard.tsx
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  company?: string;
  imageAlt?: string;
};

export default function ExperienceCard({ image, title, company, imageAlt }: Props) {
  return (
    <article>
      <div>
        <Image
          src={image}
          alt={imageAlt ?? title}
          width={800}
          height={650}
          className="rounded-lg object-cover"
          style={{ height: "auto" }}
        />
      </div>
      <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">{title}</h3>
      {company ? (
        <p className="pt-2 font-medium text-white/80">{company}</p>
      ) : null}
    </article>
  );
}