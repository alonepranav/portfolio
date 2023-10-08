"use client";

import HomeSection from "../components/HomeSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div>
            <HomeSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
