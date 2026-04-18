import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <HeroSection />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
