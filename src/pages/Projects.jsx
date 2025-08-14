import { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Code,
  ExternalLink,
  Github,
  Star,
  Eye,
  Calendar,
  Users,
  Search,
  Play,
  Download,
  Award,
  TrendingUp,
} from "lucide-react";
import projects from "../Datas/projects";

const categories = [
  { id: "all", name: "Tous", count: projects.length, color: "text-turquoise" },
  {
    id: "web",
    name: "Web",
    count: projects.filter((p) => p.category === "web").length,
    color: "text-coral",
  },
  {
    id: "mobile",
    name: "Mobile",
    count: projects.filter((p) => p.category === "mobile").length,
    color: "text-turquoise-light",
  },
  {
    id: "ai",
    name: "IA/ML",
    count: projects.filter((p) => p.category === "ai").length,
    color: "text-coral-light",
  },
  {
    id: "devops",
    name: "DevOps",
    count: projects.filter((p) => p.category === "devops").length,
    color: "text-turquoise",
  },
  {
    id: "blockchain",
    name: "Blockchain",
    count: projects.filter((p) => p.category === "blockchain").length,
    color: "text-coral",
  },
  {
    id: "iot",
    name: "IoT",
    count: projects.filter((p) => p.category === "iot").length,
    color: "text-turquoise-light",
  },
];

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

const ProjectCard = ({ project, index }) => {
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
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((p) => p.featured);
  const totalStats = projects.reduce(
    (acc, project) => {
      acc.stars += project.stats.stars;
      acc.views += parseFloat(project.stats.views) * 1000;
      acc.downloads += parseFloat(project.stats.downloads) * 1000;
      return acc;
    },
    { stars: 0, views: 0, downloads: 0 }
  );

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/30 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-64 h-64 border border-turquoise rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 border border-coral rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-turquoise via-coral to-turquoise bg-clip-text text-transparent font-mono">
            &lt;Nos Projets/&gt;
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Découvrez nos réalisations techniques : applications web, mobiles,
            solutions IA et projets open source. Chaque projet reflète notre
            passion pour l'innovation et l'excellence technique.
          </p>

          {/* Global Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-turquoise/30">
              <div className="text-3xl font-bold text-coral font-mono mb-1">
                {totalStats.stars}+
              </div>
              <div className="text-gray-400 text-sm">GitHub Stars</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-turquoise/30">
              <div className="text-3xl font-bold text-turquoise font-mono mb-1">
                {Math.round(totalStats.views / 1000)}k+
              </div>
              <div className="text-gray-400 text-sm">Vues Totales</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-turquoise/30">
              <div className="text-3xl font-bold text-turquoise-light font-mono mb-1">
                {Math.round(totalStats.downloads / 1000)}k+
              </div>
              <div className="text-gray-400 text-sm">Téléchargements</div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Rechercher un projet ou technologie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-600 rounded-full pl-12 pr-4 py-3 text-white focus:border-turquoise focus:outline-none transition-colors duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-turquoise to-coral text-white border-transparent"
                    : "bg-slate-800/50 text-gray-300 border-slate-600 hover:border-turquoise/50 hover:text-white"
                }`}
              >
                {category.name}
                <span className={`ml-2 text-sm ${category.color}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        {activeCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <Award size={24} className="text-coral mr-3" />
              <h3 className="text-2xl font-bold text-white font-mono">
                Projets Vedettes
              </h3>
              <TrendingUp size={24} className="text-turquoise ml-3" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <Search size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-500">
                Essayez de modifier vos filtres ou votre recherche
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-white">
                  {activeCategory === "all"
                    ? "Tous nos projets"
                    : `Projets ${
                        categories.find((c) => c.id === activeCategory)?.name
                      }`}
                  <span className="text-turquoise ml-2">
                    ({filteredProjects.length})
                  </span>
                </h3>
                <div className="text-gray-400 text-sm">
                  Triés par popularité
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 rounded-2xl p-8 border border-turquoise/30 backdrop-blur-sm max-w-4xl mx-auto">
            <Github size={48} className="text-turquoise mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Contribuez à Nos Projets Open Source
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Rejoignez notre communauté de développeurs et contribuez à des
              projets qui font la différence. Tous nos projets sont open source
              et accueillent les contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/oppai-collective"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-turquoise to-coral px-8 py-3 rounded-full text-white font-semibold hover:from-turquoise-dark hover:to-coral-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-turquoise/25 flex items-center justify-center"
              >
                <Github size={20} className="mr-2" />
                Voir sur GitHub
              </a>
              <a
                href="#contact"
                className="border-2 border-turquoise px-8 py-3 rounded-full text-turquoise font-semibold hover:bg-turquoise hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Proposer un Projet
                <ExternalLink size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
