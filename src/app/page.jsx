"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import LargeText from "./pages/LargeText";
import Footer from "./components/Footer";
import cursor from "./components/cursor";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ScrollTextAnimation from "./components/ScrollTextAnimation";
import { motion,useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [hover, sethover] = useState(false);
  const Scroll = useScroll;
  const size = hover ? 100 : 40;
  const x = cursor().x;
  const y = cursor().y;
  const containerRef = useRef(null)
  return (
    <div id="main" data-scroll-container ref={containerRef} className="relative overflow-hidden bg-[#ffffff]">
      <motion.div
        transition={{
          type: "tween",
          ease: "backOut",
        }}
        animate={{
          x: `${x}px`,
          y: `${y}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        className="h-10 w-10 z-190 rounded-full absolute border-2 border-black"
      ></motion.div>
      {/* Header Navigation */}
      <Navigation sethover={sethover} />
      {/* Hero Section */}
      <Hero sethover={sethover} />
      <ScrollTextAnimation Scroll={Scroll} motion={motion}/>
      {/* Skill */}
      <Skills />
      {/* Project */}
      <Projects sethover={sethover}/>
      {/* About */}
      <About />
      {/*Large Text*/}
      <LargeText sethover={sethover}/>
      {/* Footer */}
      <Footer />
    </div>

  );
}
