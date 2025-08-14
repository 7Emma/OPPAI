import React, { useEffect, useState } from "react";
import { Code, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import bg1 from "../assets/bg/bg1.jpeg";
import bg2 from "../assets/bg/bg2.jpeg";

const HeroSection = ({ scrollToSection }) => {
  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [floatingCount, setFloatingCount] = useState(100);

  const welcomeMessages = [
    "welcome_to_oppai.exe",
    "bienvenue_chez_oppai.exe",
    "oppai_collective.exe",
    "start_coding_with_us.exe",
  ];

  const backgroundImages = [bg1, bg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWelcomeIndex((prev) => (prev + 1) % welcomeMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setFloatingCount(window.innerWidth < 640 ? 30 : 100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden top-20 bottom-full"
    >
      {/* Arrière-plan */}
      <div className="absolute inset-0">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentBgIndex ? "opacity-50" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </div>

      {/* Dégradés */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-turquoise/10 to-coral/10 animate-pulse"></div>

      {/* Éléments flottants */}
      <div className="absolute inset-0">
        {[...Array(floatingCount)].map((_, i) => (
          <div
            key={i}
            className="absolute text-turquoise-light/40 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                3 + Math.random() * 4
              }s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {
              ["0", "1", "{", "}", "<", "/>", "()", "[]"][
                Math.floor(Math.random() * 8)
              ]
            }
          </div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 text-center z-10 relative">
        {/* Messages de bienvenue */}
        <div className="font-mono text-turquoise text-lg sm:text-xl mb-4">
          &gt; {welcomeMessages[currentWelcomeIndex]}
        </div>

        {/* Titre */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-turquoise-light via-coral to-turquoise-dark bg-clip-text text-transparent font-mono animate-gradient">
          OPPAI
        </h1>

        {/* Slogan */}
        <p className="text-lg sm:text-xl md:text-2xl mb-4 text-coral-light animate-pulse-slow">
          Collectif de Développeurs
        </p>

        {/* Manifeste défilant */}
        <div className="overflow-hidden whitespace-nowrap border-t border-b border-turquoise/20 py-2 mt-6 mb-6">
          <span className="text-coral-light animate-marquee font-mono">
            💻 Nous codons avec passion • 🤝 Rejoignez notre aventure • 🚀
            Innovation à chaque ligne de code •
          </span>
        </div>

        {/* Bloc infos */}
        <div className="font-mono text-turquoise-light mb-8 bg-slate-900/70 backdrop-blur-sm rounded-lg p-3 sm:p-4 max-w-full sm:max-w-2xl mx-auto border border-turquoise/30 hover:border-turquoise transition-all duration-500">
          <div className="text-left text-sm sm:text-base">
            <span className="text-coral">const</span>{" "}
            <span className="text-turquoise">oppai</span> = {"{"}
            <br />
            <span className="ml-4 text-turquoise-light">mission</span>:{" "}
            <span className="text-coral-light">"Innovation through code"</span>,
            <br />
            <span className="ml-4 text-turquoise-light">members</span>:{" "}
            <span className="text-turquoise">10+</span>,
            <br />
            <span className="ml-4 text-turquoise-light">tech_stack</span>:{" "}
            <span className="text-coral-light">
              ["React", "Node.js", "TailwindCSS", "C/C++"]
            </span>
            ,
            <br />
            <span className="ml-4 text-turquoise-light">since</span>:{" "}
            <span className="text-turquoise">"2023"</span>,
            <br />
            <span className="ml-4 text-turquoise-light">
              projects_completed
            </span>
            : <span className="text-turquoise">25</span>,
            <br />
            <span className="ml-4 text-turquoise-light">status</span>:{" "}
            <span className="text-coral">"Always coding"</span>
            <br />
            {"}"};
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-turquoise-light font-mono">
          <div>
            <p className="text-4xl font-bold">25+</p>
            <p className="text-sm">Projets livrés</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10+</p>
            <p className="text-sm">Membres actifs</p>
          </div>
          <div>
            <p className="text-4xl font-bold">5</p>
            <p className="text-sm">Partenaires</p>
          </div>
          <div>
            <p className="text-4xl font-bold">∞</p>
            <p className="text-sm">Tasses de café</p>
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-gradient-to-r from-turquoise to-coral px-8 py-4 rounded-full text-lg font-semibold hover:from-turquoise-dark hover:to-coral-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-turquoise/25 flex items-center justify-center"
          >
            <Code className="inline-block mr-2 animate-bounce-slow" size={20} />{" "}
            Voir nos Projets
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border-2 border-coral px-8 py-4 rounded-full text-lg font-semibold hover:bg-coral hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Nous Rejoindre
            <ChevronDown className="ml-2 animate-bounce" size={20} />
          </a>
        </div>

        {/* Citation */}
        <p className="mt-8 text-sm italic text-white/60 animate-pulse-slow">
          "Le code est notre langage, l'innovation notre mission."
        </p>

        {/* Flèche vers section suivante */}
        <div className="mt-16 animate-bounce">
          <ChevronDown
            size={40}
            className="mx-auto text-turquoise-light/50 cursor-pointer"
            onClick={() => scrollToSection && scrollToSection("about")}
          />
        </div>

        {/* Indicateurs du carrousel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBgIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBgIndex
                  ? "bg-turquoise shadow-lg shadow-turquoise/50"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx="true">{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
          background-size: 200% 200%;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
