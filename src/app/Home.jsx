import React from "react";
import HomeSection from "../components/HomeSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-screen flex justify-center items-center flex-col">
        <HomeSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
