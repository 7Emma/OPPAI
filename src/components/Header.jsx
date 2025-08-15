import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Home } from "lucide-react";
import logo from "../assets/oppai_logo.svg";

const Navbar = ({
  scrollToSection,
  activeSection,
  isScrolled,
  isBlogPage = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Fermeture automatique du menu mobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsBlogOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fermeture du dropdown blog lors du clic ailleurs (uniquement pour desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isBlogOpen &&
        !event.target.closest(".blog-dropdown") &&
        window.innerWidth >= 768
      ) {
        setIsBlogOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isBlogOpen]);

  // Fonction pour gérer la navigation vers l'accueil avec scroll
  const handleHomeNavigation = (sectionId = "hero") => {
    if (location.pathname === "/") {
      // Si on est déjà sur la page d'accueil, on scroll vers la section
      scrollToSection && scrollToSection(sectionId);
    } else {
      // Si on est sur une autre page, on navigue vers l'accueil puis on scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
    setIsBlogOpen(false);
  };

  const handleNavClick = (sectionId) => {
    handleHomeNavigation(sectionId);
  };

  const navItems = [
    { id: "hero", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "services", label: "Services" },
    { id: "team", label: "Equipes" },
  ];

  const blogItems = [
    { path: "/new", label: "Actualités" },
    { path: "/personal", label: "Personnel" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isBlogPage
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleHomeNavigation("hero")}
            className="flex items-center space-x-2 group"
          >
            <img
              src={logo}
              alt="logo"
              className="h-12 transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Bouton Home pour les pages blog */}
            {isBlogPage && (
              <button
                onClick={() => handleHomeNavigation("hero")}
                className="px-3 py-2 rounded-lg font-medium flex items-center space-x-2 text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10 transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                <span>Accueil</span>
              </button>
            )}

            {/* Navigation principale */}
            {!isBlogPage &&
              navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-turquoise-dark bg-turquoise/20"
                      : "text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}

            {/* Blog dropdown */}
            <div className="relative blog-dropdown">
              <button
                onClick={() => setIsBlogOpen(!isBlogOpen)}
                className={`px-3 py-2 rounded-lg font-medium flex items-center space-x-1 transition-all duration-300 ${
                  location.pathname.startsWith("/new") ||
                  location.pathname.startsWith("/personal")
                    ? "text-turquoise-dark bg-turquoise/20"
                    : "text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10"
                }`}
              >
                <span>Blog</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isBlogOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isBlogOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-xl z-10 py-2 animate-fade-in">
                  {blogItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        setIsBlogOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className={`block px-4 py-2 text-sm rounded-lg mx-2 transition-all duration-200 ${
                        location.pathname === item.path
                          ? "text-turquoise-dark bg-turquoise/10"
                          : "text-gray-700 hover:bg-turquoise/5 hover:text-turquoise"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact button */}
            <button
              onClick={() => handleNavClick("contact")}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-coral to-coral-dark text-white rounded-lg font-medium hover:from-coral-dark hover:to-coral transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-turquoise hover:bg-turquoise/10 transition-all duration-200"
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
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {/* Navigation principale mobile - TOUJOURS affichée */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-turquoise-dark bg-turquoise/20"
                    : "text-turquoise hover:bg-turquoise/10"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Blog mobile */}
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBlogOpen(!isBlogOpen);
                }}
                className={`w-full flex justify-between items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname.startsWith("/new") ||
                  location.pathname.startsWith("/personal")
                    ? "text-turquoise-dark bg-turquoise/20"
                    : "text-turquoise hover:bg-turquoise/10"
                }`}
              >
                <span>Blog</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isBlogOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Sous-menu blog avec animation améliorée */}
              {isBlogOpen && (
                <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                  {blogItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsBlogOpen(false);
                      }}
                      className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                        location.pathname === item.path
                          ? "text-turquoise-dark bg-turquoise/20 font-medium"
                          : "text-gray-700 hover:bg-turquoise/10 hover:text-turquoise"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact button mobile */}
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-center mt-4 px-4 py-3 bg-gradient-to-r from-coral to-coral-dark text-white rounded-lg font-medium transition-all duration-300 shadow-md"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
