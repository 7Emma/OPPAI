import React from "react";
import { services } from "../Datas/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
          &lt;Nos Services/&gt;
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-coral/20 to-turquoise/20 rounded-2xl p-8 border border-turquoise/20 hover:border-coral/50 transition-all duration-300 hover:shadow-lg hover:shadow-turquoise/10 group-hover:from-coral/30 group-hover:to-turquoise/30">
                  <IconComponent
                    size={48}
                    className="text-turquoise mx-auto mb-4 group-hover:scale-110 group-hover:text-coral transition-all duration-300"
                  />
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-turquoise-light text-sm">{service.desc}</p>
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
