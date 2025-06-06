import React from "react";
import { Users, Code } from "lucide-react";

const TeamSection = () => {
  const roles = [
    "Frontend Developers",
    "Backend Engineers",
    "DevOps Specialists",
    "Data Scientists",
    "Security Experts",
    "Mobile Developers",
    "Cloud Architects",
    "AI Researchers",
    "Full-Stack Ninjas",
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center animate-pulse mb-16 bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
          &lt;Notre Équipe/&gt;
        </h2>
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-coral/20 to-turquoise/20 rounded-2xl p-8 border border-turquoise/30">
            <Users size={64} className="text-coral mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              50+ Développeurs Talentueux
            </h3>
            <p className="text-turquoise-light max-w-2xl">
              Notre équipe rassemble des experts en développement logiciel, data
              science, cybersécurité, DevOps et intelligence artificielle.
              Ensemble, nous formons une force créative et technique
              exceptionnelle.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-turquoise/20 hover:border-coral/50 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-coral to-turquoise rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <Code size={20} />
              </div>
              <h4 className="text-lg font-semibold text-white">{role}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;