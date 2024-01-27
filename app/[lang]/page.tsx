import { WithContext, Person } from "schema-dts";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainView from "@/components/MainView";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SvgAnimated from "@/components/SvgAnimated";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mehdi HATTOU",
    jobTitle: "Développeur Web",
    description:
      "Je suis un développeur web passionné par la création de solutions innovantes.",
    image: "https://mehdihattou.com/icon-512x512.png",
    url: "https://mehdihattou.com",
    sameAs: [
      "https://www.linkedin.com/in/mehdi-hattou/",
      "tel:+33769868732",
      "mailto:mehdi.hattou1@gmail.com",
    ],
  };

  const { navigation, mainView, projects, footer } = await getDictionary(lang);

  return (
    <main className="min-h-full max-w-6xl m-auto px-4 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SvgAnimated />
      <div className="relative min-h-full">
        <Header navigation={navigation} />
        <MainView mainView={mainView} />
        <div className="flex flex-col items-center gap-12 mt-16 sm:mt-0 sm:gap-24">
          <Skills />
          <Projects projects={projects} />
          <Contact />
          <Footer footer={footer} />
        </div>
      </div>
    </main>
  );
}
