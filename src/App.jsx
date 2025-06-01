import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import des composants
import Navigation from './components/Header';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/About';
import ProjectsSection from './pages/Projects';
import ServicesSection from './pages/Services';
import TeamSection from './pages/Team';
import ContactSection from './pages/Contact';
import Footer from './components/Footer';
import Home  from './pages/Home';

function App () {
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
      <Router>
        <Navigation 
        isScrolled={isScrolled} 
        scrollToSection={scrollToSection} 
        activeSection={activeSection} 
        />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='hero' element={<HeroSection scrollToSection={scrollToSection}/>} ></Route>
          <Route path='about' element={<AboutSection/>} ></Route>
          <Route path='projects' element={<ProjectsSection/>} ></Route>
          <Route path='services' element={<ServicesSection/>} ></Route>
          <Route path='team' element={<TeamSection/>} ></Route>
          <Route path='contact' element={<ContactSection/>} ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;