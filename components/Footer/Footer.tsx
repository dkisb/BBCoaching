export default function Footer({ t }: { t: { copyright: string } }) {
  const year = new Date().getFullYear();
  const text = t.copyright.replace("{year}", String(year));
  return (
    <footer className="bg-black p-5">
      <p className="text-lg text-white/70 text-center">{text}</p>
    </footer>
  );
}