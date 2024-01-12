import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainView from "@/components/MainView";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SvgAnimated from "@/components/SvgAnimated";

export default function Home() {
  return (
    <main className="min-h-screen max-w-6xl m-auto px-4">
      <SvgAnimated />
      <div className="relative min-h-full">
        <Header />
        <MainView />
        <div className="flex flex-col items-center gap-12 mt-16 sm:mt-0 sm:gap-24">
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
