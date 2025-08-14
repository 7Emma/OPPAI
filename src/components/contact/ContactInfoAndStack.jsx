import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Code, Phone, MapPin, Clock } from "lucide-react";
import { copyToClipboard } from "../../utils/copyToClipboard";


const ContactInfoAndStack = () => {
  const [copiedText, setCopiedText] = useState("");

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email Principal",
      value: "dev@oppai-collective.fr",
      href: "mailto:dev@oppai-collective.fr",
      copyable: true,
    },
    {
      icon: <Phone size={20} />,
      label: "WhatsApp Business",
      value: "+229 XX XX XX XX",
      href: "https://wa.me/229xxxxxxxx",
      copyable: true,
    },
    {
      icon: <MapPin size={20} />,
      label: "Localisation",
      value: "Cotonou, Bénin 🇧🇯",
      href: "#",
      copyable: false,
    },
    {
      icon: <Clock size={20} />,
      label: "Disponibilité",
      value: "Lun-Ven 9h-18h WAT",
      href: "#",
      copyable: false,
    },
  ];

  const techStack = {
    Frontend: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Python", "Go", "Rust"],
    Cloud: ["AWS", "Azure", "GCP", "Kubernetes"],
    Databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    Mobile: ["React Native", "Flutter"],
    DevOps: ["Docker", "Jenkins", "GitLab CI/CD"],
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-turquoise/20 backdrop-blur-sm">
      <div className="flex items-center mb-6">
        <Mail size={24} className="text-turquoise mr-3" />
        <h3 className="text-2xl font-bold text-white font-mono">
          Informations Contact
        </h3>
      </div>

      <div className="space-y-6 mb-8">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-start">
            <div className="w-10 h-10 bg-gradient-to-r from-coral/20 to-turquoise/20 rounded-lg flex items-center justify-center mr-4 border border-turquoise/30">
              {info.icon}
            </div>
            <div className="flex-1">
              <div className="text-gray-400 text-sm">
                {info.label}
              </div>
              <div className="text-white font-semibold flex items-center">
                {info.href.startsWith("http") ||
                info.href.startsWith("mailto") ? (
                  <a
                    href={info.href}
                    target={
                      info.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="hover:text-turquoise transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span>{info.value}</span>
                )}
                {info.copyable && (
                  <button
                    onClick={() =>
                      copyToClipboard(info.value.replace(/[^\w@.-]/g, ""), info.label, setCopiedText)
                    }
                    className="ml-2 text-gray-400 hover:text-turquoise transition-colors duration-300"
                    title={`Copier ${info.label}`}
                  >
                    <Copy size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div>
        <h4 className="text-white font-semibold mb-4 flex items-center">
          <Code size={16} className="text-coral mr-2" />
          Stack Technique:
        </h4>
        <div className="space-y-3">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="text-xs">
              <span className="text-turquoise font-mono font-semibold">
                {category}:
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-700/50 text-coral px-2 py-1 rounded border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Copy notification for this component */}
      {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-coral to-turquoise px-6 py-3 rounded-lg text-white font-semibold shadow-lg z-50"
          >
            ✓ {copiedText} copié !
          </motion.div>
        )}
    </div>
  );
};

export default ContactInfoAndStack