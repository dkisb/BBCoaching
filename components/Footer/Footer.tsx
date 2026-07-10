import Image from "next/image";
import { PiPhone } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { ContactList } from "@/constant/constants";

type FooterProps = {
  footer: { copyright: string; tagline: string; cta: string };
  nav?: {
    home?: string;
    about?: string;
    services?: string;
    testimonials?: string;
    gallery?: string;
    contact?: string;
  };
  contact?: { email?: string; phone?: string };
};

export default function Footer({ footer, nav, contact }: FooterProps) {
  const year = new Date().getFullYear();
  const copyrightText = footer.copyright.replace("{year}", String(year));

  const links = [
    { href: "#home", label: nav?.home },
    { href: "#about", label: nav?.about },
    { href: "#services", label: nav?.services },
    { href: "#testimonials", label: nav?.testimonials },
    { href: "#gallery", label: nav?.gallery },
    { href: "#contact", label: nav?.contact },
  ].filter((l): l is { href: string; label: string } => Boolean(l.label));

  return (
    <footer className="bg-slate-950 text-white">
      <div className="section-container py-14 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:items-center">
        <div>
          <Image
            src="/images/logo.png"
            alt="BB Coaching logo"
            width={140}
            height={140}
            className="object-contain"
          />
          {footer.tagline ? (
            <p className="mt-4 text-slate-400 text-sm max-w-xs">{footer.tagline}</p>
          ) : null}
          {contact?.email || contact?.phone ? (
            <div className="mt-5 space-y-1 text-sm text-slate-400">
              {contact?.email ? <p>{contact.email}</p> : null}
              {contact?.phone ? <p>{contact.phone}</p> : null}
            </div>
          ) : null}
        </div>

        {links.length ? (
          <nav aria-label="Footer" className="md:justify-self-center">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <div className="flex flex-col items-start md:items-end gap-4 md:justify-self-end">
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-brand text-brand-foreground hover:bg-brand/90"
          >
            <a href="#contact">
              <PiPhone className="w-4 h-4" />
              <span>{footer.cta}</span>
            </a>
          </Button>
          <div className="flex items-center gap-3">
            {ContactList.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label={item.name ?? "Social link"}
              >
                <item.icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="section-container py-5 text-sm text-slate-500 text-center md:text-left">
          {copyrightText}
        </p>
      </div>
    </footer>
  );
}
