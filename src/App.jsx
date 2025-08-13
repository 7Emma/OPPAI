import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Pages & components
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
import AuthForm from "./pages/AuthForm";
import Dashboard from "./pages/Dashboard";

// Layout Blog
const BlogLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white">
    <NavBar isBlogPage={true} />
    <main className="pt-20">{children}</main>
    <Footer />
  </div>
);

// Page d'accueil
const HomePage = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Fonction pour scroller vers une section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Gestion du scroll pour déterminer la section active et l'état scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Déterminer quelle section est active
      const sections = ["hero", "about", "projects", "services", "team", "contact"];
      const sectionElements = sections.map(id => ({
        id,
        element: document.getElementById(id),
        offsetTop: document.getElementById(id)?.offsetTop || 0
      }));

      // Trouver la section actuellement visible
      let currentSection = "hero";
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && scrollY >= section.offsetTop - 100) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial

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
};

// Routes protégées
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <AuthForm />;
};

// Composant global
function AppRoutes() {
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
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<div>404 - Page non trouvée</div>} />
    </Routes>
  );
}

// App finale
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}