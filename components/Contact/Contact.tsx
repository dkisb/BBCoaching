import { Mail, MapPin, Phone } from "lucide-react";
import ContactFormClient from "./ContactFormClient";
import { ContactList } from "@/constant/constants";

export type ContactTranslations = {
  title: string;
  titleHighlight: string;
  description: string;
  descriptionHighlight: string;
  email: string;
  phone: string;
  location: string;
  form: {
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    errorRequired: string;
    errorInvalidEmail: string;
    errorGeneric: string;
    trustNote: string;
  };
};

export default function Contact({ t }: { t: ContactTranslations }) {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* text content */}
        <div>
          <h2 className="section-heading">
            {t.title} <br />{" "}
            <span className="text-brand">{t.titleHighlight}</span>
          </h2>

          <p className="text-slate-600 mt-6 text-base sm:text-lg">
            {t.description}{" "}
            <span className="font-semibold text-slate-950">{t.descriptionHighlight}</span>
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${t.email}`}
              className="flex items-center gap-3 surface-card px-5 py-4 hover:shadow-md"
            >
              <Mail className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
              <p className="text-slate-800 font-medium">{t.email}</p>
            </a>
            <a
              href={`tel:${t.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 surface-card px-5 py-4 hover:shadow-md"
            >
              <Phone className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
              <p className="text-slate-800 font-medium">{t.phone}</p>
            </a>
            <div className="flex items-center gap-3 surface-card px-5 py-4">
              <MapPin className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
              <p className="text-slate-800 font-medium">{t.location}</p>
            </div>

            {/* social media */}
            <div className="flex items-center pt-4 space-x-3">
              {ContactList.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-brand rounded-full flex items-center justify-center cursor-pointer hover:bg-brand/90 transition-colors"
                  aria-label={item.name ?? "Social link"}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* form (client for interactivity + AOS) */}
        <ContactFormClient t={t.form} />
      </div>
    </section>
  );
}
