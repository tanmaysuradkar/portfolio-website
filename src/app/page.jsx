import Image from "next/image"
import Link from "next/link"
import Navigation from "@/app/components/Navigation"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import About from "./pages/About"
import ScrollTextAnimation from "./components/ScrollTextAnimation"

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#ffffff]">
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
