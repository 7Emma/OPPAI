import React from 'react';
import { Globe, Server, Database, Cpu } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { icon: Globe, title: "Développement Web", desc: "Applications web modernes et performantes" },
    { icon: Server, title: "Architecture Cloud", desc: "Solutions cloud scalables et sécurisées" },
    { icon: Database, title: "Big Data & IA", desc: "Traitement de données et intelligence artificielle" },
    { icon: Cpu, title: "Systèmes Embarqués", desc: "IoT et programmation bas niveau" }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          &lt;Nos Services/&gt;
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group-hover:from-cyan-500/30 group-hover:to-teal-500/30">
                  <IconComponent size={48} className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-cyan-100 text-sm">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;