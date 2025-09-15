import { Calendar, Code } from "lucide-react";

const RoleCard = ({ role, data, onHover }) => (
  <div
    className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 border border-cyan-500/20 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-sm group cursor-pointer transform hover:scale-105 hover:shadow-2xl"
    onMouseEnter={() => onHover(role)}
    onMouseLeave={() => onHover(null)}
    role="button"
    tabIndex={0}
    aria-label={`Rôle: ${role}`}
  >
    {/* Header avec icône et compteur */}
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {data.icon}
      </div>
      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono font-bold">
        {data.count}
      </span>
    </div>

    {/* Titre */}
    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
      {role}
    </h4>

    {/* Description */}
    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
      {data.description}
    </p>

    {/* Expérience */}
    <div className="flex items-center mb-3 text-pink-400 text-sm">
      <Calendar size={14} className="mr-2" />
      <span>{data.experience}</span>
    </div>

    {/* Technologies */}
    <div className="space-y-2">
      <div className="flex items-center text-teal-400 text-sm mb-2">
        <Code size={14} className="mr-2" />
        <span className="font-mono">Technologies:</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {data.technologies.map((tech, index) => (
          <span
            key={`${role}-tech-${tech}-${index}`}
            className="bg-slate-700/50 text-teal-400 px-2 py-1 rounded text-xs font-mono border border-slate-600 group-hover:border-cyan-500/30 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Indicateur d'animation */}
    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500 rounded animate-pulse"></div>
    </div>
  </div>
);

export default RoleCard