import { Code, Smartphone, Cloud, Shield } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Code,
    title: "Développement Web",
    desc: "Applications web modernes et responsive",
    features: ["React/Vue.js", "Node.js/Python", "Base de données", "API REST"],
    duration: "2-6 mois",
    price: "À partir de 2000€",
    projects: "25+ projets",
    rating: 4.9,
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Applications Mobile",
    desc: "Apps iOS et Android performantes",
    features: ["React Native", "Flutter", "Design UX/UI", "App Store"],
    duration: "3-8 mois",
    price: "À partir de 3000€",
    projects: "15+ projets",
    rating: 4.8,
  },
  {
    id: 3,
    icon: Cloud,
    title: "Solutions Cloud",
    desc: "Infrastructure et déploiement cloud",
    features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"],
    duration: "1-4 mois",
    price: "À partir de 1500€",
    projects: "20+ projets",
    rating: 4.9,
  },
  {
    id: 4,
    icon: Shield,
    title: "Cybersécurité",
    desc: "Audit et sécurisation d'applications",
    features: ["Audit sécurité", "Pen testing", "Cryptographie", "Conformité"],
    duration: "2-6 semaines",
    price: "À partir de 1000€",
    projects: "10+ projets",
    rating: 5.0,
  },
];

export default services;
