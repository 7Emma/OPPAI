import React, { useState, useEffect } from "react";
import logo from '../assets/oppai_logo.svg';
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet de scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsBlogOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsBlogOpen(false);
  };

  const toggleBlogSubmenu = () => {
    setIsBlogOpen(!isBlogOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsBlogOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <img src={logo} alt='logo' className="text-3xl font-bold mb-8 b mx-auto h-16 text-transparent" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              to="/" 
              className="px-3 py-2 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300"
            >
              Accueil
            </Link>
            
            <Link 
              to="/about" 
              className="px-3 py-2 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300"
            >
              À propos
            </Link>

            {/* Blog avec sous-menu */}
            <div className="relative group">
              <Link 
                to="/blog" 
                className="px-3 py-2 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300 flex items-center space-x-1"
              >
                <span>Blog</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              
              {/* Sous-menu Desktop */}
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                  <Link 
                    to="/blog/news" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-turquoise hover:bg-turquoise/5 transition-all duration-200 border-l-4 border-transparent hover:border-turquoise"
                  >
                    <div className="font-medium">Actualités</div>
                    <div className="text-xs text-gray-500 mt-1">Dernières nouvelles tech</div>
                  </Link>
                  <Link 
                    to="/blog/personal" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-turquoise hover:bg-turquoise/5 transition-all duration-200 border-l-4 border-transparent hover:border-turquoise"
                  >
                    <div className="font-medium">Personnel</div>
                    <div className="text-xs text-gray-500 mt-1">Réflexions et insights</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/services" 
              className="px-3 py-2 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300"
            >
              Services
            </Link>
            
            <Link 
              to="/projects" 
              className="px-3 py-2 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300"
            >
              Projets
            </Link>
            
            <Link 
              to="/contact" 
              className="ml-2 px-4 py-2 bg-gradient-to-r from-coral to-coral-dark text-white rounded-lg font-medium hover:from-coral-dark hover:to-coral transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-turquoise hover:bg-turquoise/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            
            <Link 
              to="/" 
              onClick={closeMenu}
              className="block px-4 py-3 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300"
            >
              Accueil
            </Link>
            
            <Link 
              to="/about" 
              onClick={closeMenu}
              className="block px-4 py-3 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300"
            >
              À propos
            </Link>

            {/* Blog Mobile */}
            <div>
              <button
                onClick={toggleBlogSubmenu}
                className="w-full flex items-center justify-between px-4 py-3 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300"
              >
                <span>Blog</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  isBlogOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Sous-menu Mobile */}
              <div className={`ml-4 mt-2 space-y-1 transition-all duration-300 overflow-hidden ${
                isBlogOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  to="/blog/news" 
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-turquoise hover:bg-turquoise/5 rounded-lg transition-all duration-200"
                >
                  Actualités
                </Link>
                <Link 
                  to="/blog/personal" 
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-turquoise hover:bg-turquoise/5 rounded-lg transition-all duration-200"
                >
                  Personnel
                </Link>
              </div>
            </div>

            <Link 
              to="/services" 
              onClick={closeMenu}
              className="block px-4 py-3 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300"
            >
              Services
            </Link>
            
            <Link 
              to="/projects" 
              onClick={closeMenu}
              className="block px-4 py-3 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 rounded-lg font-medium transition-all duration-300"
            >
              Projets
            </Link>
            
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="block mx-4 mt-4 px-4 py-3 bg-gradient-to-r from-coral to-coral-dark text-white text-center rounded-lg font-medium hover:from-coral-dark hover:to-coral transition-all duration-300 shadow-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;