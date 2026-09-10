import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Technologies />
      <Services />
      <Projects />
      <Process />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}