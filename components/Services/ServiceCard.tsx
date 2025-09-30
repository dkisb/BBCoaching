import { IconType } from "react-icons";

export default function ServiceCard({
  Icon,
  name,
  description,
}: {
  Icon: IconType;
  name: string;
  description: string;
}) {
  return (
    <article className="flex flex-col" aria-label={name}>
      <Icon className="w-10 h-10 text-black" aria-hidden="true" />
      <h3 className="text-xl mt-6 md:text-2xl font-bold text-black">{name}</h3>
      <p className="mt-4 text-black text-lg md:text-xl leading-relaxed">{description}</p>
    </article>
  );
}