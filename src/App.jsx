import React, { useState, useEffect } from 'react';

// Import des composants
import Navigation from './components/Header';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/About';
import ProjectsSection from './pages/Projects';
import ServicesSection from './pages/Services';
import TeamSection from './pages/Team';
import ContactSection from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white">
      <Navigation 
        isScrolled={isScrolled} 
        scrollToSection={scrollToSection} 
        activeSection={activeSection} 
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;