// components/Contact/ContactFormClient.tsx
"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
};

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
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || t.errorGeneric);

      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : t.errorGeneric;
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-center"
      className="md:p-10 p-5 bg-[#131332] rounded-lg"
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
          className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
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
          className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
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
          className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
        />

        <label className="sr-only" htmlFor="message">
          {t.message}
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.message}
          className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-8 px-12 py-4 bg-[#0055ff] hover:bg-blue-900 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer rounded-full text-white"
          aria-live="polite"
        >
          <span className="text-white">
            {loading ? t.sending : t.send}
          </span>
        </button>

        {errorMsg && (
          <p className="text-red-400 mt-4" role="alert">
            {errorMsg}
          </p>
        )}
        {success && (
          <p className="text-green-400 mt-4" role="status">
            {t.success}
          </p>
        )}
      </form>
    </div>
  );
}