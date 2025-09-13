import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Users,
  Code,
  Phone,
  Zap,
  Copy,
  ExternalLink,
  Coffee,
} from "lucide-react";
import { copyToClipboard } from "../../utils/copyToClipboard";

function SocialsAndProjects() {
  const [copiedText, setCopiedText] = useState("");

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      href: "https://github.com/oppai-collective",
      username: "@oppai-collective",
      color: "hover:bg-gray-700",
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      href: "https://www.linkdin.com/",
      username: "OPPAI Collective",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter/X",
      href: "https://www.twitter.com/",
      username: "@oppai_dev",
      color: "hover:bg-gray-800",
    },
    {
      icon: <MessageCircle size={24} />,
      name: "Discord",
      href: "https://discord.gg/emmanuel06986",
      username: "oppai-devs",
      color: "hover:bg-indigo-600",
    },
  ];

  const projectTypes = [
    { icon: <Code size={16} />, name: "Développement Web", available: true },
    { icon: <Phone size={16} />, name: "Applications Mobile", available: true },
    { icon: <Zap size={16} />, name: "API & Microservices", available: true },
    {
      icon: <Users size={16} />,
      name: "Consulting Technique",
      available: true,
    },
    {
      icon: <Coffee size={16} />,
      name: "Formations & Workshops",
      available: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="lg:col-span-1"
    >
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-turquoise/20 backdrop-blur-sm h-full">
        <div className="flex items-center mb-6">
          <Users size={24} className="text-coral mr-3" />
          <h3 className="text-2xl font-bold text-white font-mono">
            Rejoignez la Communauté
          </h3>
        </div>

        {/* Social Links */}
        <div className="space-y-4 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-4 rounded-xl bg-slate-700/50 border border-slate-600 ${social.color} transition-all duration-300 group hover:border-turquoise/50`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-coral to-turquoise rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              <div>
                <div className="text-white font-semibold">{social.name}</div>
                <div className="text-turquoise-light text-sm font-mono">
                  {social.username}
                </div>
              </div>
              <ExternalLink
                size={16}
                className="ml-auto text-gray-400 group-hover:text-turquoise transition-colors duration-300"
              />
            </a>
          ))}
        </div>

        {/* Git Clone Section */}
        <div className="bg-slate-900/50 rounded-xl p-4 border border-turquoise/30 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-turquoise font-mono text-sm">Terminal</span>
            <button
              onClick={() =>
                copyToClipboard(
                  "git clone https://github.com/oppai-collective",
                  "git command",
                  setCopiedText
                )
              }
              className="text-gray-400 hover:text-turquoise transition-colors duration-300"
            >
              <Copy size={14} />
            </button>
          </div>
          <code className="text-turquoise font-mono text-sm block">
            $ git clone https://github.com/oppai-collective
          </code>
        </div>

        {/* Projects Status */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold mb-3 flex items-center">
            <Zap size={16} className="text-coral mr-2" />
            Projets Disponibles:
          </h4>
          {projectTypes.map((project, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                {project.icon}
                <span className="text-gray-300 text-sm ml-2">
                  {project.name}
                </span>
              </div>
              <div
                className={`w-3 h-3 rounded-full ${
                  project.available ? "bg-green-400" : "bg-red-400"
                } animate-pulse`}
              ></div>
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
    </motion.div>
  );
}

export default SocialsAndProjects;
