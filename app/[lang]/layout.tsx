import type { Metadata } from "next";

import { Locale, i18n } from "@/i18n.config";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/Theme/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mehdi Hattou • Développeur Web",
  description:
    "Mehdi Hattou Développeur Web. Partageant une forte affinité avec React, basé à Paris.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Mehdi Hattou • Développeur Web",
    statusBarStyle: "black-translucent",
  },
  keywords: [
    "nextjs",
    "mehdi",
    "hattou",
    "mehdi hattou",
    "portfolio",
    "développeur",
    "developpeur web",
    "developpeur web fullstack",
    "reactjs",
    "React",
    "Paris",
    "Développeur Paris",
  ],
  openGraph: {
    type: "website",
    url: "https://mehdihattou.com",
    title: "Mehdi Hattou • Développeur Web",
    description:
      "Mehdi Hattou Développeur Web. Partageant une forte affinité avec React, basé à Paris.",
    siteName: "Mehdi Hattou • Développeur Web",
    images: ["https://mehdihattou.com/Mehdoche.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://mehdihattou.com",
    creator: "@Mehdi_Hattou",
    images: "https://mehdihattou.com/Mehdoche.jpg",
    title: "Mehdi Hattou • Développeur Web",
    description:
      "Mehdi Hattou Développeur Web. Partageant une forte affinité avec React, basé à Paris.",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body suppressHydrationWarning className="h-full bg-background">
        <ThemeProvider
          defaultTheme="red"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
