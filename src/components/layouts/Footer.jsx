import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Users,
  Shield,
} from "lucide-react";
import logo from "../../assets/oppai_logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Produit",
      icon: <Code size={16} className="text-turquoise" />,
      links: [
        { name: "Fonctionnalités", href: "#features" },
        { name: "Projets", href: "#projects" },
        { name: "Technologies", href: "#tech" },
        { name: "Open Source", href: "#opensource" },
      ],
    },
    {
      title: "Collectif",
      icon: <Users size={16} className="text-coral" />,
      links: [
        { name: "À propos", href: "#about" },
        { name: "Équipe", href: "#team" },
        { name: "Carrières", href: "#careers" },
        { name: "Blog Tech", href: "#blog" },
      ],
    },
    {
      title: "Support",
      icon: <Shield size={16} className="text-turquoise-light" />,
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Contact", href: "#contact" },
        { name: "Discord", href: "#discord" },
        { name: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Légal",
      icon: <Shield size={16} className="text-coral-light" />,
      links: [
        { name: "Confidentialité", href: "#privacy" },
        { name: "Conditions", href: "#terms" },
        { name: "Licence MIT", href: "#license" },
        { name: "Cookies", href: "#cookies" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://www.github.com/", label: "GitHub" },
    { icon: <Twitter size={20} />, href: "https://www.twitter.com/", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "https://www.linkdin.com/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "oppaicdev@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-turquoise rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-coral rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-turquoise-light rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-turquoise/5 via-transparent to-coral/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <img
              src={logo}
              alt="OPPAI Logo"
              className="h-12 sm:h-16 w-auto filter brightness-110"
            />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={`social-${social.label.toLowerCase()}-${index}`}
                href={social.href}
                className="group p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-turquoise hover:bg-turquoise/10 transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <div className="text-gray-400 group-hover:text-turquoise transition-colors duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid - Responsive Mobile Vertical */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="group text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-4">
                {section.icon}
                <h4 className="font-semibold text-white ml-2 font-mono text-lg group-hover:text-turquoise transition-colors duration-300">
                  {section.title}
                </h4>
              </div>

              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={`${section.title.toLowerCase()}-link-${link.name.replace(/\s+/g, '-').toLowerCase()}-${linkIndex}`}
                    href={link.href}
                    className="block text-gray-400 hover:text-turquoise-light transition-all duration-300 font-mono text-sm hover:translate-x-1 hover:scale-105 transform"
                  >
                    <span className="inline-flex items-center">
                      {"> "}
                      {link.name}
                      <ExternalLink
                        size={12}
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 font-mono text-sm">
                &copy; {currentYear}{" "}
                <span className="text-turquoise">OPPAI</span> Collective.
                <span className="text-coral ml-1">All rights reserved</span>.
              </p>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-gray-400 font-mono text-sm">
                Crafted with{" "}
                <span className="text-coral animate-pulse">❤️</span> by
              </p>
              <a
                href="https://emmanuelagbotoedo.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-turquoise hover:text-turquoise-light transition-colors duration-300 font-mono font-semibold group"
              >
                Emmanuel AGBOTOEDO
                <ExternalLink
                  size={14}
                  className="ml-1 group-hover:translate-x-1 transform transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-turquoise to-transparent opacity-50"></div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx="true">{`
        @keyframes float-up {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }

        .animate-float-up {
          animation: float-up 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
