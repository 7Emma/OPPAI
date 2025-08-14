import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users, Star, Zap } from "lucide-react";
import services from "../Datas/services";

const serviceCategories = [
  { name: "Développement", count: "30+", color: "text-coral" },
  { name: "Consulting", count: "20+", color: "text-turquoise" },
  { name: "Maintenance", count: "40+", color: "text-turquoise-light" },
];

const ServiceCard = ({ service, index, onHover }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => onHover(service.id)}
      onHoverEnd={() => onHover(null)}
      className="group cursor-pointer h-full"
    >
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-turquoise/20 hover:border-coral/50 transition-all duration-500 hover:shadow-2xl hover:shadow-turquoise/20 group-hover:from-slate-700/60 group-hover:to-slate-800/60 backdrop-blur-sm h-full flex flex-col">
        {/* Header avec icône et rating */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-coral to-turquoise rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <IconComponent
              size={32}
              className="text-white group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
          <div className="flex items-center bg-slate-700/50 rounded-full px-3 py-1">
            <Star size={14} className="text-yellow-400 mr-1" />
            <span className="text-white text-sm font-bold">
              {service.rating}
            </span>
          </div>
        </div>

        {/* Titre et description */}
        <div className="mb-6 flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-turquoise transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {service.desc}
          </p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-turquoise-light text-sm font-semibold mb-3 flex items-center">
            <CheckCircle size={14} className="mr-2" />
            Technologies & Services:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-700/40 text-turquoise-light px-2 py-1 rounded text-xs font-mono border border-slate-600 group-hover:border-turquoise/30 transition-colors duration-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Infos projet */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-400">
              <Clock size={14} className="mr-2 text-coral" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Users size={14} className="mr-2 text-turquoise" />
              <span>{service.projects}</span>
            </div>
          </div>
          <div className="text-coral font-semibold text-lg">
            {service.price}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <button className="w-full bg-gradient-to-r from-transparent to-transparent border-2 border-turquoise/30 text-turquoise px-6 py-3 rounded-lg font-semibold group-hover:from-turquoise group-hover:to-coral group-hover:text-white group-hover:border-transparent transition-all duration-300 flex items-center justify-center">
            <span>Découvrir</span>
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral via-turquoise to-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-b from-slate-900/30 to-slate-800/50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-72 h-72 border border-turquoise rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-coral rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-coral via-turquoise to-coral bg-clip-text text-transparent font-mono">
            &lt;Nos Services/&gt;
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Solutions techniques complètes pour transformer vos idées en réalité
            digitale. De la conception au déploiement, nous accompagnons votre
            projet avec expertise.
          </p>

          {/* Service categories */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-2xl font-bold ${category.color} font-mono`}
                >
                  {category.count}
                </div>
                <div className="text-gray-400 text-sm">{category.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredService === service.id}
              onHover={setHoveredService}
            />
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-3xl p-8 border border-turquoise/20 backdrop-blur-sm mb-16"
        >
          <div className="text-center mb-8">
            <Zap size={48} className="text-coral mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Notre Processus de Développement
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Analyse",
                desc: "Étude des besoins et spécifications",
              },
              {
                step: "02",
                title: "Design",
                desc: "Conception UX/UI et architecture",
              },
              {
                step: "03",
                title: "Développement",
                desc: "Codage et intégration continue",
              },
              {
                step: "04",
                title: "Déploiement",
                desc: "Mise en production et suivi",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-coral/20 to-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-turquoise/30 group-hover:border-coral/50 transition-all duration-300">
                  <span className="text-turquoise font-bold font-mono text-lg">
                    {phase.step}
                  </span>
                </div>
                <h4 className="text-white font-semibold mb-2">{phase.title}</h4>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-slate-800/60 to-slate-700/60 rounded-2xl p-8 border border-coral/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Prêt à Démarrer Votre Projet ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Discutons de vos besoins et trouvons la solution technique
              parfaite pour votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-coral to-turquoise px-8 py-3 rounded-full text-white font-semibold hover:from-coral-dark hover:to-turquoise-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-coral/25 flex items-center justify-center"
              >
                <Users size={20} className="mr-2" />
                Demander un Devis
              </a>
              <a
                href="#portfolio"
                className="border-2 border-turquoise px-8 py-3 rounded-full text-turquoise font-semibold hover:bg-turquoise hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Voir nos Réalisations
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
