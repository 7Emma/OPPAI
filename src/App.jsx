import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des components
import NavBar from "./components/Header";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import New from "./pages/Blog/New";
import Personal from "./pages/Blog/Personal";
//import Blog from "./pages/Blog";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white">
      <Router>
        <NavBar
          isScrolled={isScrolled}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="hero"
            element={<HeroSection scrollToSection={scrollToSection} />}
          ></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="team" element={<Team />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          {/**<Route path="blog" element={<Blog />}></Route>*/}
          <Route path="blog/new" element={<New />}></Route>
          <Route path="blog/personal" element={<Personal />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
