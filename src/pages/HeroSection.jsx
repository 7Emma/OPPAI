import React, { useEffect, useState } from "react";
import { Code, ChevronDown } from "lucide-react";

const HeroSection = ({ scrollToSection }) => {
  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);
  const [floatingCount, setFloatingCount] = useState(100);

  const welcomeMessages = [
    "welcome_to_oppai.exe",
    "bienvenue_chez_oppai.exe",
    "oppai_collective.exe",
    "start_coding_with_us.exe",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWelcomeIndex((prev) => (prev + 1) % welcomeMessages.length);
    }, 3000);
    return () => clearInterval(interval);
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
    <section id='hero' className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-turquoise/20 to-coral/20 animate-pulse"></div>

      <div className="absolute inset-0">
        {[...Array(floatingCount)].map((_, i) => (
          <div
            key={i}
            className="absolute text-turquoise-light/30 font-mono text-xs"
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

      <div className="container mx-auto px-4 text-center z-10">
        <div className="font-mono text-turquoise text-lg sm:text-xl mb-4 h-8">
          <div className="transition-all duration-500 ease-in-out transform">
            &gt; {welcomeMessages[currentWelcomeIndex]}
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-turquoise-light via-coral to-turquoise-dark bg-clip-text text-transparent font-mono animate-gradient">
          OPPAI
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-4 text-coral-light animate-pulse-slow">
          Collectif de Développeurs
        </p>

        <div className="font-mono text-turquoise-light mb-8 bg-slate-900/50 rounded-lg p-3 sm:p-4 max-w-full sm:max-w-2xl mx-auto border border-turquoise/30 hover:border-turquoise transition-all duration-500">
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
            <span className="ml-4 text-turquoise-light">status</span>:{" "}
            <span className="text-coral">"Always coding"</span>
            <br />
            {"}"};
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-gradient-to-r from-turquoise to-coral px-8 py-4 rounded-full text-lg font-semibold hover:from-turquoise-dark hover:to-coral-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-turquoise/25 flex items-center justify-center"
          >
            <Code className="inline-block mr-2 animate-bounce-slow" size={20} />
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

        <div className="mt-16 animate-bounce">
          <ChevronDown
            size={40}
            className="mx-auto text-turquoise-light/50 cursor-pointer"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>

      <style jsx="true" >{`
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
      `}</style>
    </section>
  );
};

export default HeroSection;
