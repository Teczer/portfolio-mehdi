import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Exclude paths for static files
  const excludePaths = [
    "/manifest.json",
    "/android-chrome-192x192.png",
    "/android-chrome-512x512.png",
    "/apple-touch-icon.png",
    "/browserconfig.xml",
    "/docker-gradient.svg",
    "/express-gradient.svg",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/favicon.ico",
    "/figma-gradient.svg",
    "/france-flag.svg",
    "/freemarker.svg",
    "/homepage.gif",
    "/icon-192x192.png",
    "/icon-256x256.png",
    "/icon-384x384.png",
    "/icon-512x512.png",
    "/Mehdoche.jpg",
    "/mstile-150x150.png",
    "/next.svg",
    "/nodejs-gradient.svg",
    "/point-bg.svg",
    "/react-gradient.svg",
    "/robots.txt",
    "/shadcn.svg",
    "/sitemap.xml",
    "/sw.js",
    "/sw.js.map",
    "/typescript-gradient.svg",
    "/uk-flag.svg",
    "/vercel.svg",
    "/workbox-8817a5e5.js",
    "/workbox-8817a5e5.js.map",
  ];

  if (excludePaths.some((path) => pathname.startsWith(path))) {
    return;
  }

  // NOT EXCLUDED
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
