"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "@/i18n.config";
import Image from "next/image";

import franceFlag from "@/public/france-flag.svg";
import ukFlag from "@/public/uk-flag.svg";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)}>
              <Image
                src={locale === "fr" ? franceFlag : ukFlag}
                alt={`${locale}-flag`}
                className="w-10 h-10 transition-all hover:scale-110"
                width={80}
                height={80}
                priority
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
