'use client';
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/app/components/Navigation"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import About from "./pages/About"
import ScrollTextAnimation from "./components/ScrollTextAnimation"
// import {useGSAP} from '@gsap/react'
// import gsap from "gsap"
// import { useRef } from "react";

export default function Home() {
  return (
    <div id="main" className="min-h-screen relative bg-[#ffffff]">
      {/* Header Navigation */}
      <Navigation />
      {/* Hero Section */}
      <Hero />
      <ScrollTextAnimation/>
      {/* Skill */}
      <Skills/>
      {/* Project */}
      <Projects/>
      {/* About */}
      <About/>
      {/* Footer */}
      <Footer/>
    </div>

  );
}
