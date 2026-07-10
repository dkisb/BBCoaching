"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter, type AppLocale } from "@/i18n/routing";

type LanguageSwitcherProps = {
  variant?: "default" | "mobile";
};

export default function LanguageSwitcher({ variant = "default" }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname() || "/";

  return (
    <div className="flex items-center space-x-2" role="group" aria-label="Language switcher">
      <LangButton
        locale="en"
        currentLocale={locale}
        pathname={pathname}
        router={router}
        variant={variant}
      />
      <LangButton
        locale="hu"
        currentLocale={locale}
        pathname={pathname}
        router={router}
        variant={variant}
      />
    </div>
  );
}

function LangButton({
  locale,
  pathname,
  currentLocale,
  router,
  variant = "default",
}: {
  locale: AppLocale;
  pathname: string;
  currentLocale: string;
  router: ReturnType<typeof useRouter>;
  variant?: "default" | "mobile";
}) {
  const flag = `/images/${locale}.svg`;
  const label = locale.toUpperCase();
  const isActive = locale === currentLocale;

  const getButtonClasses = () => {
    if (variant === "mobile") {
      return `flex items-center justify-center w-12 h-10 md:w-14 md:h-11 rounded-md border transition-all ${
        isActive
          ? "bg-brand/10 border-brand cursor-default"
          : "border-slate-200 hover:bg-slate-50"
      }`;
    }

    return `flex items-center justify-center w-12 h-10 md:w-14 md:h-11 rounded-md border transition-all ${
      isActive
        ? "bg-brand border-brand cursor-default pointer-events-none"
        : "border-slate-200 hover:bg-slate-50"
    }`;
  };

  return (
    <button
      type="button"
      onClick={() => {
        if (!isActive) router.replace({ pathname }, { locale });
      }}
      className={getButtonClasses()}
      aria-current={isActive ? "page" : undefined}
      aria-disabled={isActive}
      aria-label={isActive ? `Current language: ${label}` : `Switch to ${label}`}
      title={isActive ? `Current language: ${label}` : `Switch to ${label}`}
    >
      <Image src={flag} alt={`${label} flag`} width={20} height={20} className="md:w-6 md:h-6" />
    </button>
  );
}