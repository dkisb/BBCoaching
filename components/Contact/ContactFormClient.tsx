// components/Contact/ContactFormClient.tsx
"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";

type FormT = {
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

const inputClass =
  "px-4 py-3.5 bg-white border border-slate-200 text-slate-900 outline-none rounded-lg w-full placeholder:text-slate-400 focus:ring-2 focus:ring-brand focus:border-brand transition-shadow";

export default function ContactFormClient({ t }: { t: FormT }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccess(false);

    if (!name || !email || !message) {
      setErrorMsg(t.errorRequired);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg(t.errorInvalidEmail);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (!res.ok) throw new Error(`Contact request failed with ${res.status}`);

      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      // Server errors are logged server-side; show the localized message to the visitor.
      setErrorMsg(t.errorGeneric);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-center"
      className="md:p-10 p-6 surface-card"
    >
      <form onSubmit={handleSubmit} noValidate>
        <label className="sr-only" htmlFor="name">
          {t.name}
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={t.name}
          autoComplete="name"
          className={inputClass}
        />

        <label className="sr-only" htmlFor="email">
          {t.email}
        </label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder={t.email}
          autoComplete="email"
          className={`${inputClass} mt-4`}
          suppressHydrationWarning
        />

        <label className="sr-only" htmlFor="phone">
          {t.phone}
        </label>
        <input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder={t.phone}
          autoComplete="tel"
          className={`${inputClass} mt-4`}
        />

        <label className="sr-only" htmlFor="message">
          {t.message}
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.message}
          className={`${inputClass} mt-4 h-[10rem] resize-none`}
        />

        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="mt-6 w-full sm:w-auto rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 h-12 px-10 text-base"
        >
          {loading ? t.sending : t.send}
        </Button>

        <p className="mt-4 text-sm text-slate-500">{t.trustNote}</p>

        {errorMsg && (
          <p className="text-red-600 mt-4" role="alert">
            {errorMsg}
          </p>
        )}
        {success && (
          <p className="text-emerald-600 mt-4" role="status">
            {t.success}
          </p>
        )}
      </form>
    </div>
  );
}
