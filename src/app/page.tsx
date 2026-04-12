"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/pages/hero";
import AboutMe from "@/components/pages/aboutme";
import Footer from "@/components/pages/footer";
import Projects from "@/components/pages/projects";
import History from "@/components/pages/history";
import Contact from "@/components/pages/contact";

export default function Home() {
  const { scrollY } = useScroll();

  // Mapping: When scroll is 0, color is transparent.
  // When scroll reaches 300px, color becomes black (#000000).
  const backgroundColor = useTransform(
    scrollY,
    [0, 300],
    ["rgba(255, 255, 255, 0)", "#000000"]
  );

  return (
    <>
      <Hero />
      {/* Changed to motion.div to allow animated background color */}
      <motion.div style={{ backgroundColor }} className="relative z-10">
        <AboutMe />
        <History />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}
