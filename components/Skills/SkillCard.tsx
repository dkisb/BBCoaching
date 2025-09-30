export default function SkillCard({
  Icon,
  name,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
}) {
  return (
    <article
      className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition"
      aria-label={name}
    >
      <Icon className="text-5xl mb-4 text-[#0055ff]" aria-hidden="true" />
      <p className="text-white">{name}</p>
    </article>
  );
}