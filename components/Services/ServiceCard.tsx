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
    <article className="surface-card p-6 sm:p-8 flex flex-col h-full" aria-label={name}>
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand/10">
        <Icon className="w-7 h-7 text-brand" aria-hidden="true" />
      </span>
      <h3 className="text-xl mt-6 font-bold text-slate-950">{name}</h3>
      <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>
    </article>
  );
}
