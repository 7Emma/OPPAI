import {
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Monitor,
  Cpu,
  Palette,
  Server,
  Layers,
  Brain,
  Terminal,
} from "lucide-react";
import bhilal from "../assets/imges/bhilal.jpeg";
import david from "../assets/imges/david.jpeg";
import eddy from "../assets/imges/eddy.jpeg";
import billa from "../assets/imges/billa.jpeg";
import jp from "../assets/imges/jp.jpeg";
import leroy from "../assets/imges/leroy.jpeg";
import marcos from "../assets/imges/macos.jpeg";
import jolidon from "../assets/imges/jolidon.jpeg";
import hesed from "../assets/imges/hesed.jpeg";
import emma from "../assets/imges/emma.jpeg";


// Données de l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Eddy BONI",
    role: "Software Engineer",
    avatar: eddy,
    technologies: ["Java", "Django", "HTML/CSS", "JavaScript", "C++/C"],
    speciality: "Full-Stack Development",
    description:
      "Développeur passionné avec une expertise approfondie en développement full-stack. Eddy maîtrise parfaitement Java et Django pour créer des applications robustes et performantes.",
    portfolioLink: "https://melodic-froyo-f0fe90.netlify.app/",
    email: "eddybaoke@gmail.com",
    github: "oluwafemi006",
    linkedin: "eddy-boni-dev",
    projects: 45,
    rating: 4.9,
    icon: Code,
    gradient: "from-blue-400 to-purple-600",
  },
  {
    id: 2,
    name: "Emmanuel AGBOTOEDO",
    role: "Data Engineer",
    avatar: emma,
    technologies: ["React", "Node.js", "Java", "Python", "C++", "Scala"],
    speciality: "Data Engineering & Analytics",
    description:
      "Expert en ingénierie des données, Emmanuel conçoit et optimise les pipelines de données complexes. Il transforme les données brutes en insights précieux pour l'entreprise.",
    portfolioLink: "https://peppy-crisp-b46439.netlify.app/",
    email: "emma@oppai.dev",
    github: "7Emma",
    linkedin: "emmanuel-mahoukpégo-agbotoedo-50a6bb351/",
    projects: 38,
    rating: 4.8,
    icon: Database,
    gradient: "from-emerald-400 to-cyan-600",
  },
  {
    id: 3,
    name: "David IDOHOU",
    role: "Développeur Full Stack & Ingénieur IA",
    avatar: david,
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "React",
      "Node.js",
      "Machine Learning",
    ],
    speciality: "Intelligence Artificielle & Full-Stack",
    description:
      "Spécialiste en IA et développement full-stack, David combine expertise technique et innovation pour créer des solutions intelligentes et scalables.",
    portfolioLink: "https://davididohouken.vercel.app/",
    email: "idowuasabidavid@gmail.com",
    github: "davididohou",
    linkedin: "david-idohou",
    projects: 52,
    rating: 4.9,
    icon: Brain,
    gradient: "from-violet-400 to-purple-600",
  },
  {
    id: 4,
    name: "Jean-Paul GNIKPO",
    role: "Fullstack Developer",
    avatar: jp,
    technologies: ["PHP", "Laravel", "React", "C/C++", "Firebase"],
    speciality: "Web Development & Backend",
    description:
      "Développeur full-stack polyvalent, Jean-Paul excelle dans la création d'applications web modernes avec PHP/Laravel et React, offrant des solutions complètes et performantes.",
    portfolioLink: "https://jean-paul-gnikpo.dev",
    email: "paul@oppai.dev",
    github: "jeanpaulgnikpo",
    linkedin: "jean-paul-gnikpo",
    projects: 41,
    rating: 4.7,
    icon: Layers,
    gradient: "from-orange-400 to-red-600",
  },
  {
    id: 5,
    name: "Marcos BATAMOUSSI",
    role: "DevOps Engineer",
    avatar: marcos,
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Python",
      "Terraform",
      "CI/CD",
    ],
    speciality: "DevOps & Cloud Infrastructure",
    description:
      "Expert DevOps, Marcos automatise les déploiements et optimise l'infrastructure cloud pour garantir une haute disponibilité et des performances optimales des applications.",
    portfolioLink: "https://marcos-batamoussi-devops.io",
    email: "marcos@oppai.dev",
    github: "marcosbata",
    linkedin: "marcos-batamoussi",
    projects: 29,
    rating: 4.8,
    icon: Cloud,
    gradient: "from-sky-400 to-indigo-600",
  },
  {
    id: 6,
    name: "Bhilal CHITOU",
    role: "Full-Stack Developer",
    avatar: bhilal,
    technologies: [
      "Vue.js",
      "Laravel",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "PHP",
      "JavaScript",
      "Bootstrap",
    ],
    speciality: "Frontend & Web Development",
    description:
      "Développeur full-stack créatif, Bhilal maîtrise les technologies web modernes et excelle dans la création d'interfaces utilisateur élégantes et d'applications web performantes.",
    portfolioLink: "https://bhilal-chitou.dev",
    email: "bhilal@oppai.dev",
    github: "7Bhil",
    linkedin: "bhilal-chitou",
    projects: 36,
    rating: 4.8,
    icon: Monitor,
    gradient: "from-teal-400 to-cyan-600",
  },
 
];

export default teamMembers;
