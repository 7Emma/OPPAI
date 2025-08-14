import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Laptop,
  Server,
  Cloud,
  Brain,
  Shield,
  Smartphone,
  Code,
  Star,
  MapPin,
  Calendar,
  Award,
  GitBranch,
  Coffee,
  Zap,
} from "lucide-react";

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
    color: "text-coral",
  },
  {
    icon: <GitBranch size={24} />,
    value: "25+",
    label: "Projets",
    color: "text-turquoise",
  },
  {
    icon: <Coffee size={24} />,
    value: "1000+",
    label: "Cafés Bus",
    color: "text-turquoise-light",
  },
  {
    icon: <Award size={24} />,
    value: "2+",
    label: "Années",
    color: "text-coral-light",
  },
];

const RoleCard = ({ role, data, onHover }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 20px 40px rgba(0, 206, 209, 0.15)",
      borderColor: "rgba(255, 127, 80, 0.8)",
    }}
    onHoverStart={() => onHover(role)}
    onHoverEnd={() => onHover(null)}
    className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 border border-turquoise/20 hover:border-coral/50 transition-all duration-500 backdrop-blur-sm group cursor-pointer"
    role="button"
    tabIndex={0}
    aria-label={`Rôle: ${role}`}
  >
    {/* Header avec icône et compteur */}
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-gradient-to-r from-coral to-turquoise rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {data.icon}
      </div>
      <span className="bg-turquoise/20 text-turquoise px-3 py-1 rounded-full text-sm font-mono font-bold">
        {data.count}
      </span>
    </div>

    {/* Titre */}
    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-turquoise transition-colors duration-300">
      {role}
    </h4>

    {/* Description */}
    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
      {data.description}
    </p>

    {/* Expérience */}
    <div className="flex items-center mb-3 text-coral-light text-sm">
      <Calendar size={14} className="mr-2" />
      <span>{data.experience}</span>
    </div>

    {/* Technologies */}
    <div className="space-y-2">
      <div className="flex items-center text-turquoise-light text-sm mb-2">
        <Code size={14} className="mr-2" />
        <span className="font-mono">Technologies:</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {data.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-slate-700/50 text-turquoise-light px-2 py-1 rounded text-xs font-mono border border-slate-600 group-hover:border-turquoise/30 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Indicateur d'animation */}
    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-full h-1 bg-gradient-to-r from-coral via-turquoise to-coral rounded animate-pulse"></div>
    </div>
  </motion.div>
);

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
          className="absolute top-20 left-10 w-64 h-64 border border-turquoise rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 border border-coral rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            id="team-heading"
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-coral via-turquoise to-coral bg-clip-text text-transparent font-mono"
          >
            &lt;Notre Équipe/&gt;
          </h2>

          <div className="inline-block bg-gradient-to-r from-coral/10 to-turquoise/10 rounded-2xl p-8 border border-turquoise/30 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <Users size={48} className="text-coral mr-4" />
              <Zap size={48} className="text-turquoise" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
              Collectif de Développeurs Passionnés
            </h3>
            <p className="text-turquoise-light max-w-3xl text-lg leading-relaxed">
              Notre équipe rassemble des experts en développement logiciel, data
              science, cybersécurité, DevOps et intelligence artificielle.
              Ensemble, nous formons une force créative et technique
              exceptionnelle dédiée à l'innovation.
            </p>
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/40 rounded-lg p-6 text-center border border-slate-700 hover:border-turquoise/50 transition-all duration-300 group backdrop-blur-sm"
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
        </motion.div>

        {/* Informations sur la localisation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-slate-800/50 rounded-full px-6 py-3 border border-turquoise/30">
            <MapPin size={20} className="text-coral mr-3" />
            <span className="text-white font-mono">
              Basé à Cotonou, Bénin 🇧🇯
            </span>
            <span className="text-turquoise-light ml-3">|</span>
            <span className="text-turquoise-light ml-3 font-mono">
              Remote-First
            </span>
          </div>
        </motion.div>

        {/* Grille des rôles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <RoleCard
                role={role}
                data={roleData[role]}
                isHovered={hoveredRole === role}
                onHover={setHoveredRole}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-coral/30 backdrop-blur-sm">
            <Star size={32} className="text-coral mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              Rejoignez Notre Aventure
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Nous sommes toujours à la recherche de nouveaux talents passionnés
              pour rejoindre notre collectif.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-coral to-turquoise px-8 py-3 rounded-full text-white font-semibold hover:from-coral-dark hover:to-turquoise-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-coral/25"
            >
              <Users size={20} className="mr-2" />
              Nous Rejoindre
            </a>
          </div>
        </motion.div>
        <div className="flex justify-center">
          <Link
            to="/personal"
            className="inline-flex items-center bg-coral px-8 py-3 mt-10 rounded-full text-white font-semibold hover:bg-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Visiter l'équipe
          </Link>
        </div>
        {/**Pour ajouter les infos */}
        <div className="text-center p-6 bg-slate-800 rounded-lg shadow-lg mt-10">
          <p className="mb-4 text-white">
            Vous appartenez à la team{" "}
            <span className="text-coral font-semibold">OPPAI</span> ? Ajoutez ou
            modifiez vos informations !
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-6 py-2 bg-pink-300 hover:bg-coral text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Ajouter
          </Link>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
