import { Laptop, Server, Cloud, Brain, Shield, Smartphone } from "lucide-react";

const roleData = {
  "Frontend Developers": {
    icon: Laptop,
    count: "3+",
    technologies: ["React", "Vue.js", "TypeScript", "Tailwind"],
    experience: "2-5 ans",
    description: "Création d'interfaces utilisateur modernes et responsive",
  },
  "Backend Engineers": {
    icon: Server,
    count: "2+",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    experience: "3-6 ans",
    description: "Architecture serveur robuste et APIs performantes",
  },
  "DevOps Specialists": {
    icon: Cloud,
    count: "2+",
    technologies: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    experience: "4-7 ans",
    description: "Infrastructure cloud et déploiement automatisé",
  },
  "Data Scientists": {
    icon: Brain,
    count: "1+",
    technologies: ["Python", "TensorFlow", "Pandas", "Jupyter"],
    experience: "3-5 ans",
    description: "Analyse de données et modèles d'intelligence artificielle",
  },
  "Security Experts": {
    icon: Shield,
    count: "1+",
    technologies: ["Penetration Testing", "OWASP", "Cryptography"],
    experience: "5+ ans",
    description: "Sécurisation des applications et audits de sécurité",
  },
  "Mobile Developers": {
    icon: Smartphone,
    count: "2+",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    experience: "2-4 ans",
    description: "Applications mobiles cross-platform performantes",
  },
};

export default roleData;
