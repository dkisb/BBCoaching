// components/Testimonials/TestimonialCard.tsx
import Image from "next/image";

export type Testimonial = {
  image: string;
  name: string;
  role?: string;
  description: string;
  imageAlt?: string;
};

export default function TestimonialCard({
  image,
  name,
  role,
  description,
  imageAlt,
}: Testimonial) {
  return (
    <article className="m-2" aria-label={`Testimonial by ${name}`}>
      <div
        className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-end bg-gray-2 00 mx-auto"
        style={{
          aspectRatio: "1 / 1",
          minWidth: 60,
          minHeight: 60,
          maxWidth: 80,
          maxHeight: 80,
        }}
      >
        <Image
          src={image}
          alt={imageAlt ?? name}
          width={80}
          height={80}
          className="object-cover object-top w-full h-full"
          style={{ width: "auto", height: "auto" }}
          loading="lazy"
        />
      </div>

      <p className="mt-6 text-base text-white font-medium break-words overflow-y-auto max-h-32">
        “{description}”
      </p>

      <h3 className="mt-6 text-xl text-[#0055ff] font-bold">{name}</h3>
      {role ? <p className="mt-1 text-[#0055ff]">{role}</p> : null}
    </article>
  );
}