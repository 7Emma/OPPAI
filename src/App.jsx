import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import NavBar from "./components/Header";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import New from "./pages/Blog/New";
import Personal from "./pages/Blog/Personal";

// Layout pour les pages de blog
const BlogLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white">
      <NavBar isBlogPage={true} />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

// Composant principal pour la page d'accueil (avec scroll)
const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "projects",
        "services",
        "team",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Offset pour une meilleure détection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll vers le haut au montage du composant
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white">
      <NavBar
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        isBlogPage={false}
      />

      <main>
        <section id="hero">
          <HeroSection scrollToSection={scrollToSection} />
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

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

// Composant wrapper principal
function AppWrapper() {
  const location = useLocation();

  // Scroll vers le haut lors du changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/new"
        element={
          <BlogLayout>
            <New />
          </BlogLayout>
        }
      />

      <Route
        path="/personal"
        element={
          <BlogLayout>
            <Personal />
          </BlogLayout>
        }
      />

      {/* Route 404 - optionnelle */}
      <Route
        path="*"
        element={
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-coral mb-4">404</h1>
              <p className="text-xl mb-8">Page non trouvée</p>
              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 bg-gradient-to-r from-coral to-coral-dark text-white rounded-lg font-medium hover:from-coral-dark hover:to-coral transform hover:scale-105 transition-all duration-300"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
