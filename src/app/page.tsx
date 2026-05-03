import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Zee Pearson | Embedded Software Engineer",
  description: "Professional portfolio of Zee Pearson, specialized in embedded systems and firmware development",
};

export default function Home() {
  return (
    <main className="bg-slate-900 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
