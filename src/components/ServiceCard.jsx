import { motion } from "framer-motion";
import { Star, CheckCircle, Clock, Users, ArrowRight } from "lucide-react";

function ServiceCard({ service, index, onHover }) {
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
                key={`${service.id || service.title}-feature-${idx}-${feature}`}
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
}

export default ServiceCard;
