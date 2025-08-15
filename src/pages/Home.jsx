import { useState, useEffect } from "react";
import NavBar from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import HeroSection from "./HeroSection";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";

function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const sections = [
        "hero",
        "about",
        "projects",
        "services",
        "team",
        "contact",
      ];
      let currentSection = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - 100) currentSection = id;
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white">
      <NavBar
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        isScrolled={isScrolled}
        isBlogPage={false}
      />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
