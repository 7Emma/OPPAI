import { useState } from "react";
import {
  Code,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Star,
  Award,
  Users,
} from "lucide-react";
import teamMembers from "../../Datas/personnel";

const Personal = () => {

  const TechBadge = ({ tech, gradient }) => (
    <span
      className={`inline-block px-3 py-1 m-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${gradient} shadow-md`}
    >
      {tech}
    </span>
  );

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="flex items-center space-x-2 text-sm">
      <Icon className={`w-4 h-4 ${color}`} />
      <span className="text-gray-300">{label}:</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );

  const SocialLink = ({ href, icon: Icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
      title={label}
    >
      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </a>
  );

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-12 h-12 text-coral mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
              Notre Équipe
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez les talents exceptionnels qui composent{" "}
            <span className="text-coral font-semibold">OPPAI</span>. Chaque
            membre apporte son expertise unique pour transformer vos idées en
            solutions technologiques innovantes. Nos professionnels passionnés
            sont prêts à vous accompagner dans la digitalisation et la
            croissance de votre entreprise.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-r from-coral/20 to-coral/10 rounded-xl p-6 border border-coral/20">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-coral" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {teamMembers.length}
                </div>
                <div className="text-coral text-sm">Experts</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-turquoise/20 to-turquoise/10 rounded-xl p-6 border border-turquoise/20">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-turquoise" />
              <div>
                <div className="text-2xl font-bold text-white">240+</div>
                <div className="text-turquoise text-sm">Projets</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 rounded-xl p-6 border border-purple-400/20">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-purple-400" />
              <div>
                <div className="text-2xl font-bold text-white">4.8</div>
                <div className="text-purple-400 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-green-400/10 rounded-xl p-6 border border-green-400/20">
            <div className="flex items-center space-x-3">
              <Code className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-green-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const IconComponent = member.icon;
            return (
              <div
                key={member.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-coral/20 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Avatar & Header */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 mx-auto mb-4 relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            // Fallback si l'image ne charge pas
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        {/* Fallback avec icône si l'image ne charge pas */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${member.gradient} flex items-center justify-center hidden`}
                        >
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        {/* Overlay gradient subtil */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        ></div>
                      </div>
                      {/* Indicateur en ligne */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-slate-800">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                      {/* Badge spécialité */}
                      <div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-gradient-to-r ${member.gradient} shadow-lg`}
                      >
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* Speciality */}
                  <div className="mb-4">
                    <div
                      className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white text-xs font-semibold`}
                    >
                      {member.speciality}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2 mb-4">
                    <StatCard
                      icon={Award}
                      label="Projets"
                      value={member.projects}
                      color="text-yellow-400"
                    />
                    <StatCard
                      icon={Star}
                      label="Note"
                      value={`${member.rating}/5`}
                      color="text-yellow-400"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap -m-1">
                      {member.technologies.map((tech, index) => (
                        <TechBadge
                          key={index}
                          tech={tech}
                          gradient={member.gradient}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <SocialLink
                        href={`mailto:${member.email}`}
                        icon={Mail}
                        label="Email"
                      />
                      <SocialLink
                        href={`https://github.com/${member.github}`}
                        icon={Github}
                        label="GitHub"
                      />
                      <SocialLink
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        icon={Linkedin}
                        label="LinkedIn"
                      />
                    </div>

                    <a
                      href={member.portfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r ${member.gradient} text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      <span>Portfolio</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-coral/10 to-turquoise/10 rounded-2xl border border-coral/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à travailler avec notre équipe ?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment
            notre équipe d'experts peut transformer vos idées en réalité
            technologique.
          </p>

          <a
            href="https://wa.me/2290191732432?text=Bonjour%2C%20je%20souhaite%20d%C3%A9marrer%20un%20projet%20avec%20vous"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-coral to-coral-dark text-white rounded-lg font-medium hover:from-coral-dark hover:to-coral transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </div>
  );
};

export default Personal;
