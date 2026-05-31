import { Spotlight } from "@/components/Spotlight";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionTrackerProvider } from "@/components/SectionTracker";

export default function Home() {
  return (
    <SectionTrackerProvider>
      <Spotlight />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Faq />
      <Contact />
      <Footer />
    </SectionTrackerProvider>
  );
}
