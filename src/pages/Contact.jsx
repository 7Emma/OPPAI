import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import SocialsAndProjects from "../components/contact/SocialsAndProjects";
import ContactInfoAndStack from "../components/contact/ContactInfoAndStack";
import ContactForm from "../components/contact/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-10 w-64 h-64 border border-turquoise rounded-full animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
        <div
          className="absolute bottom-10 right-20 w-48 h-48 border border-coral rounded-full animate-spin"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        ></div>
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
            &lt;Contact Us/&gt;
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Prêt à donner vie à votre projet ? Collaborons pour créer quelque
            chose d'extraordinaire ensemble.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Les trois sous-composants sont placés ici */}
          <SocialsAndProjects />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="grid md:grid-cols-2 gap-8 h-full">
              <ContactInfoAndStack />
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-slate-800/60 to-slate-700/60 rounded-2xl p-8 border border-turquoise/30 backdrop-blur-sm">
            <Calendar size={32} className="text-turquoise mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              Besoin d'une Consultation Rapide ?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/oppai-collective"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-turquoise to-coral px-6 py-3 rounded-full text-white font-semibold hover:from-turquoise-dark hover:to-coral-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-turquoise/25 flex items-center justify-center"
              >
                <Calendar size={20} className="mr-2" />
                Réserver un Appel (30min gratuit)
              </a>
              <a
                href="https://wa.me/2290191732432?text=Bonjour%2C%20je%20souhaite%20d%C3%A9marrer%20un%20projet%20avec%20vous"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-turquoise px-6 py-3 rounded-full text-turquoise font-semibold hover:bg-turquoise hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
