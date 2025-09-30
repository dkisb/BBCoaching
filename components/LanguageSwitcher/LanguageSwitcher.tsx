"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter, type AppLocale } from "@/i18n/routing";

export default function LanguageSwitcher() {
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
      />
      <LangButton
        locale="hu"
        currentLocale={locale}
        pathname={pathname}
        router={router}
      />
    </div>
  );
}

function LangButton({
  locale,
  pathname,
  currentLocale,
  router,
}: {
  locale: AppLocale;
  pathname: string;
  currentLocale: string;
  router: ReturnType<typeof useRouter>;
}) {
  const flag = `/images/${locale}.svg`;
  const label = locale.toUpperCase();
  const isActive = locale === currentLocale;

  return (
    <button
      type="button"
      onClick={() => {
        if (!isActive) router.replace({ pathname }, { locale });
      }}
      className={`flex items-center space-x-2 px-3 py-1 rounded-md text-sm font-medium border transition-all ${
        isActive
          ? "bg-[#0055ff] text-white border-[#0055ff] cursor-default pointer-events-none"
          : "text-black border-gray-200 hover:bg-gray-100"
      }`}
      aria-current={isActive ? "page" : undefined}
      aria-disabled={isActive}
      title={isActive ? `Current language: ${label}` : `Switch to ${label}`}
    >
      <Image src={flag} alt={`${label} flag`} width={20} height={20} />
      <span>{label}</span>
    </button>
  );
}