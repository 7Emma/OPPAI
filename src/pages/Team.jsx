import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Laptop,
  Server,
  Cloud,
  Brain,
  Shield,
  Smartphone,
  Star,
  MapPin,
  Award,
  GitBranch,
  Coffee,
  Zap,
} from "lucide-react";
import PhotoCarousel from "../components/team/PhotoCarousel";
import RoleCard from "../components/team/RoleCard";

const roleData = {
  "Frontend Developers": {
    icon: <Laptop size={20} />,
    count: "3+",
    technologies: ["React", "Vue.js", "TypeScript", "Tailwind"],
    experience: "2-3 ans",
    description: "Création d'interfaces user modernes et responsive",
  },
  "Backend Engineers": {
    icon: <Server size={20} />,
    count: "2+",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    experience: "3-4 ans",
    description: "Architecture serveur robuste et APIs performantes",
  },
  "DevOps Specialists": {
    icon: <Cloud size={20} />,
    count: "2+",
    technologies: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    experience: "3-5 ans",
    description: "Infrastructure cloud et déploiement automatisé",
  },
  "Data Scientists": {
    icon: <Brain size={20} />,
    count: "1+",
    technologies: ["Python", "TensorFlow", "Pandas", "Jupyter"],
    experience: "2-5 ans",
    description: "Analyse de données et modèles d'IA",
  },
  "Security Experts": {
    icon: <Shield size={20} />,
    count: "1+",
    technologies: ["Penetration Testing", "OWASP", "Cryptography"],
    experience: "5+ ans",
    description: "Sécurisation des applications et audits de sécurité",
  },
  "Mobile Developers": {
    icon: <Smartphone size={20} />,
    count: "2+",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    experience: "2-4 ans",
    description: "Applications mobiles cross-platform performantes",
  },
};

const teamStats = [
  {
    icon: <Users size={24} />,
    value: "10+",
    label: "Développeurs",
    color: "text-orange-400",
  },
  {
    icon: <GitBranch size={24} />,
    value: "25+",
    label: "Projets",
    color: "text-cyan-400",
  },
  {
    icon: <Coffee size={24} />,
    value: "1000+",
    label: "Cafés Bus",
    color: "text-teal-400",
  },
  {
    icon: <Award size={24} />,
    value: "2+",
    label: "Années",
    color: "text-pink-400",
  },
];

const TeamSection = () => {
  const [hoveredRole, setHoveredRole] = useState(null);
  const roles = Object.keys(roleData);

  return (
    <section
      id="team"
      className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/30 relative overflow-hidden"
      aria-labelledby="team-heading"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-10 w-64 h-64 border border-cyan-500 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 border border-orange-500 rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in">
          <h2
            id="team-heading"
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500 bg-clip-text text-transparent font-mono animate-pulse"
          >
            &lt;Notre Équipe/&gt;
          </h2>

          <div className="inline-block bg-gradient-to-r from-orange-500/10 to-cyan-500/10 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <Users size={48} className="text-orange-500 mr-4" />
              <Zap size={48} className="text-cyan-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
              Collectif de Développeurs Passionnés
            </h3>
            <p className="text-cyan-300 max-w-3xl text-lg leading-relaxed">
              Notre équipe rassemble des experts en développement logiciel, data
              science, cybersécurité, DevOps et intelligence artificielle.
              Ensemble, nous formons une force créative et technique
              exceptionnelle dédiée à l'innovation.
            </p>
          </div>
        </div>

        {/* Section Photos d'Équipe */}
        <div className="mb-16 animate-slide-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
              📸 Moments d'Équipe
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez notre équipe en action : sessions de travail, moments de
              convivialité et projets collaboratifs
            </p>
          </div>
          <PhotoCarousel />
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/40 rounded-lg p-6 text-center border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-sm transform hover:scale-105"
            >
              <div
                className={`${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold ${stat.color} font-mono`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Informations sur la localisation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/50 rounded-full px-6 py-3 border border-cyan-500/30">
            <MapPin size={20} className="text-orange-500 mr-3" />
            <span className="text-white font-mono">
              Basé à Cotonou, Bénin 🇧🇯
            </span>
            <span className="text-cyan-300 ml-3">|</span>
            <span className="text-cyan-300 ml-3 font-mono">Remote-First</span>
          </div>
        </div>

        {/* Grille des rôles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="animate-slide-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <RoleCard
                role={role}
                data={roleData[role]}
                isHovered={hoveredRole === role}
                onHover={setHoveredRole}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-orange-500/30 backdrop-blur-sm">
            <Star size={32} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              Rejoignez Notre Aventure
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Nous sommes toujours à la recherche de nouveaux talents passionnés
              pour rejoindre notre collectif.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-cyan-500 px-8 py-3 rounded-full text-white font-semibold hover:from-orange-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              <Users size={20} className="mr-2" />
              Nous Rejoindre
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <Link
            to="/Personnel"
            className="inline-flex items-center bg-orange-500 px-8 py-3 rounded-full text-white font-semibold hover:bg-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Visiter l'équipe
          </Link>
        </div>

        {/* Pour ajouter les infos */}
        <div className="text-center p-6 bg-slate-800 rounded-lg shadow-lg">
          <p className="mb-4 text-white">
            Vous appartenez à la team{" "}
            <span className="text-orange-500 font-semibold">OPPAI</span> ?
            Ajoutez ou modifiez vos informations !
          </p>
          <Link
            to="/Dashboard"
            className="inline-block px-6 py-2 bg-pink-300 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Ajouter
          </Link>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
