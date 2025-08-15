import { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Code,
  Star,
  Eye,
  Calendar,
  Users,
  Play,
  Download,
  Github,
  ExternalLink,
} from "lucide-react";

const statusColors = {
  Terminé: "bg-green-500/20 text-green-400 border-green-500/30",
  "En cours": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Bêta: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Maintenance: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const difficultyColors = {
  Débutant: "text-green-400",
  Intermédiaire: "text-yellow-400",
  Expert: "text-red-400",
};

function ProjectCard({ project, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl overflow-hidden border border-turquoise/20 hover:border-coral/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-turquoise/10 backdrop-blur-sm">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-gradient-to-r from-coral to-turquoise px-3 py-1 rounded-full text-white text-xs font-bold flex items-center">
              <Star size={12} className="mr-1" />
              Featured
            </div>
          </div>
        )}

        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-turquoise/20 to-coral/20 flex flex-col items-center justify-center">
              <Terminal size={32} className="text-turquoise-light mb-2" />
              <div className="text-xs font-mono text-turquoise bg-slate-800/50 px-3 py-1 rounded">
                {project.lang}
              </div>
            </div>
          )}

          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-turquoise to-coral p-3 rounded-full text-white hover:scale-110 transition-transform duration-300"
              title="Voir la démo"
            >
              <Play size={20} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 p-3 rounded-full text-white hover:bg-slate-600 hover:scale-110 transition-all duration-300"
              title="Code source"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-turquoise transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-coral">{project.type}</span>
                <span className="text-gray-400">•</span>
                <span className="text-turquoise-light">{project.year}</span>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                statusColors[project.status]
              }`}
            >
              {project.status}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {project.desc}
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-4 gap-4 mb-4 text-center">
            <div className="bg-slate-700/30 rounded-lg p-2">
              <div className="flex items-center justify-center text-yellow-400 mb-1">
                <Star size={14} />
              </div>
              <div className="text-white text-sm font-semibold">
                {project.stats.stars}
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-2">
              <div className="flex items-center justify-center text-turquoise mb-1">
                <Eye size={14} />
              </div>
              <div className="text-white text-sm font-semibold">
                {project.stats.views}
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-2">
              <div className="flex items-center justify-center text-coral mb-1">
                <Download size={14} />
              </div>
              <div className="text-white text-sm font-semibold">
                {project.stats.downloads}
              </div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-2">
              <div className="flex items-center justify-center text-turquoise-light mb-1">
                <Code size={14} />
              </div>
              <div className="text-white text-sm font-semibold">
                {project.stats.forks}
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-400">
                <Calendar size={14} className="mr-1 text-coral" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Users size={14} className="mr-1 text-turquoise" />
                <span>{project.team}</span>
              </div>
            </div>
            <div
              className={`font-semibold ${
                difficultyColors[project.difficulty]
              }`}
            >
              {project.difficulty}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-slate-700/50 text-turquoise-light px-2 py-1 rounded text-xs font-mono border border-slate-600 group-hover:border-turquoise/30 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="bg-slate-600/50 text-gray-400 px-2 py-1 rounded text-xs font-mono">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-turquoise to-coral px-4 py-2 rounded-lg text-white text-sm font-semibold hover:from-turquoise-dark hover:to-coral-dark transition-all duration-300 flex items-center justify-center group/btn"
            >
              <ExternalLink
                size={16}
                className="mr-2 group-hover/btn:translate-x-1 transition-transform duration-300"
              />
              Démo Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-turquoise text-turquoise rounded-lg text-sm font-semibold hover:bg-turquoise hover:text-white transition-all duration-300 flex items-center justify-center group/btn"
            >
              <Github
                size={16}
                className="mr-2 group-hover/btn:scale-110 transition-transform duration-300"
              />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
