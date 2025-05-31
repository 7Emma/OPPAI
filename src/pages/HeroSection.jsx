import React from "react";
import { Code } from "lucide-react";

const HeroSection = ({ scrollToSection }) => {
  return (
    <section
        id="accueil"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 animate-pulse"></div>
        <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    className="absolute text-cyan-400/30 font-mono text-xs"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                    }}
                >
                    {
                        ["0", "1", "{", "}", "&lt;", "/&gt;", "()", "[]"][
                            Math.floor(Math.random() * 8)
                        ]
                    }
                </div>
            ))}
        </div>
        <div className="text-center z-10 px-4">
            <div className="font-mono text-cyan-400 text-xl mb-4">
            &gt; welcome_to_oppai.exe
        </div>
        <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-600 bg-clip-text text-transparent font-mono">
            OPPAI
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-blue-300">
            Collectif de Développeurs
        </p>
        <div className="font-mono text-cyan-300 mb-8 bg-slate-900/50 rounded-lg p-4 max-w-2xl mx-auto border border-cyan-500/30">
            <div className="text-left">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-400">oppai</span> = {"{"}
                <br />
                <span className="ml-4 text-green-400">mission</span>:{" "}
                <span className="text-orange-400">"Innovation through code"</span>,
                <br />
                <span className="ml-4 text-green-400">members</span>:{" "}
                <span className="text-blue-400">50+</span>,
                <br />
                <span className="ml-4 text-green-400">status</span>:{" "}
                <span className="text-red-400">"Always coding"</span>
                <br />
                {"}"};
            </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                onClick={() => scrollToSection("projets")}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
                <Code className="inline-block mr-2" size={20} />
                Voir nos Projets
            </button>
            <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
                Nous Rejoindre
            </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
