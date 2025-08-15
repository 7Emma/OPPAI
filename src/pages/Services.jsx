import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Zap } from "lucide-react";
import services from "../Datas/services";
import ServiceCard from "../components/ServiceCard";

const serviceCategories = [
  { name: "Développement", count: "30+", color: "text-coral" },
  { name: "Consulting", count: "20+", color: "text-turquoise" },
  { name: "Maintenance", count: "40+", color: "text-turquoise-light" },
];

function ServicesSection() {
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
          <h2 className="text-4xl animate-pulse md:text-6xl font-bold mb-6 bg-gradient-to-r from-coral via-turquoise to-coral bg-clip-text text-transparent font-mono">
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
}

export default ServicesSection;
