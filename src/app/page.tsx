import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import About from "@/components/sections/About";
import Learning from "@/components/sections/Learning";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <WhatIDo />
      <Learning />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
