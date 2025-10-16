// components/Contact/Contact.tsx
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
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
  };
};

export default function Contact({ t }: { t: ContactTranslations }) {
  return (
    <section id="contact" className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            {t.title} <br />{" "}
            <span className="text-[#0055ff]">{t.titleHighlight}</span>
          </h1>

          <p className="text-white mt-6 text-base sm:text-lg font-bold">
            {t.description}{" "}
            <span className="text-[#0055ff]">{t.descriptionHighlight}</span>
          </p>

          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-[#0055ff]" />
              <p className="text-white text-xl font-bold">{t.email}</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-[#0055ff]" />
              <p className="text-white text-xl font-bold">{t.phone}</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-[#0055ff]" />
              <p className="text-white text-xl font-bold">{t.location}</p>
            </div>

            {/* social media */}
            <div className="flex items-center mt-8 space-x-3">
              {ContactList.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#0055ff] rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300"
                  aria-label={item.name ?? "Social link"}
                >
                  <item.icon className="w-6 h-6 text-white" />
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