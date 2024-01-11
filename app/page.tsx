import Header from "@/components/Header";
import SvgAnimated from "@/components/SvgAnimated";

export default function Home() {
  return (
    <main className="min-h-screen max-w-6xl m-auto px-4">
      <SvgAnimated />
      <div className="relative min-h-full">
        <Header />
      </div>
    </main>
  );
}
