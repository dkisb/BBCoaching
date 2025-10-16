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
      return `flex items-center space-x-2 px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base font-medium border transition-all ${
        isActive
          ? "bg-white text-[#0055ff] border-white cursor-default"
          : "text-white border-white/50 hover:bg-white/10"
      }`;
    }
    
    return `flex items-center space-x-2 px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base font-medium border transition-all ${
      isActive
        ? "bg-[#0055ff] text-white border-[#0055ff] cursor-default pointer-events-none"
        : "text-black border-gray-200 hover:bg-gray-100"
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
      title={isActive ? `Current language: ${label}` : `Switch to ${label}`}
    >
      <Image src={flag} alt={`${label} flag`} width={20} height={20} className="md:w-6 md:h-6" />
      <span>{label}</span>
    </button>
  );
}