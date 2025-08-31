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
  const size = hover ? 100 : 30;
  const x = cursor().x;
  const y = cursor().y;
  const containerRef = useRef(null)
  return (
    <div id="main" data-scroll-container ref={containerRef} className="relative min-h-[200vh] w-full bg-[#ffffff]">
      <motion.div
        transition={{
          type: "tween",
          ease: "backOut",
        }}
        animate={{
          x: `${x}px`,
          y: `${y}px`,
          // translateY:'-8px',
          // translateX:'8px',
          width: `${size}px`,
          height: `${size}px`,
        }}
        className="h-5 w-5 z-190 mix-blend-difference bg-white rounded-full absolute border-2 border-white"
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
      <div className="w-full sticky bottom-0 left-0 z-0 shadow-md">
      <Footer sethover={sethover}/>
      </div>
    </div>

  );
}
