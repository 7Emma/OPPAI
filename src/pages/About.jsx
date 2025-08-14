import React, { useState, useEffect, useMemo } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Users,
  GitBranch,
  Zap,
  Code,
  Award,
  Globe,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import team1 from "../assets/team/team1.jpeg";
import team2 from "../assets/team/team2.jpeg";
import team3 from "../assets/team/team3.jpeg";

const AboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const values = useMemo(
    () => [
      "Innovation continue",
      "Code quality first",
      "Open source mindset",
      "Collaborative spirit",
    ],
    []
  );

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const currentValue = values[currentIndex];
    let timeoutId;

    if (typedText.length < currentValue.length) {
      timeoutId = setTimeout(() => {
        setTypedText(currentValue.substring(0, typedText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setTypedText("");
        setCurrentIndex((prev) => (prev + 1) % values.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, currentIndex, values]);

  const stats = [
    {
      icon: Users,
      value: "10+",
      label: "Développeurs Experts",
      description: "Équipe multidisciplinaire passionnée",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: GitBranch,
      value: "200+",
      label: "Projets Open Source",
      description: "Contributions à l'écosystème tech",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Zap,
      value: "∞",
      label: "Commits & Innovations",
      description: "Créativité sans limites",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Award,
      value: "5+",
      label: "Technologies Maîtrisées",
      description: "Full-stack à DevOps",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const techStack = [
    "React",
    "Node.js",
    "Python",
    "Docker",
    "C/C++",
    "Java",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Laravel",
    "Scala",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const techStackVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-coral via-purple-400 to-turquoise bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            &lt;À Propos/&gt;
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-coral to-turquoise mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-xl text-turquoise/80 mt-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Collective de développeurs passionnés, repoussant les limites de
            l'innovation technologique
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Left */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Main Description */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.p
                className="text-lg text-turquoise/90 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-coral font-semibold">OPPAI</span> est bien
                plus qu'un collectif de développeurs. Nous sommes une{" "}
                <span className="text-turquoise-light font-semibold">
                  communauté dynamique
                </span>{" "}
                de créateurs technologiques unis par une passion commune :
                transformer des idées innovantes en solutions concrètes.
              </motion.p>
              <motion.p
                className="text-lg text-turquoise/90 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Depuis <span className="text-coral font-bold">2023</span>, nous
                développons des solutions logicielles avant-gardistes,
                partageons nos connaissances et repoussons constamment les
                limites du possible. De l'IA au développement web, en passant
                par la cybersécurité et les systèmes distribués.
              </motion.p>
            </motion.div>

            {/* Code Block with Typing Animation */}
            <motion.div
              className="bg-slate-900/80 rounded-2xl p-8 border border-turquoise/30 backdrop-blur-sm shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <motion.div
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Code className="text-turquoise/60" size={20} />
                </motion.div>
              </div>

              <div className="font-mono text-sm">
                <div className="text-coral mb-4">// Notre philosophie</div>
                <div className="space-y-2">
                  <div>
                    <span className="text-coral">const</span>{" "}
                    <span className="text-turquoise">oppaiValues</span> = {"{"}
                  </div>

                  <div className="ml-6">
                    <span className="text-turquoise-light">mission</span>:{" "}
                    <span className="text-green-400">"{typedText}"</span>
                    <motion.span
                      className="text-coral ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </div>

                  <div className="ml-6">
                    <span className="text-turquoise-light">founded</span>:{" "}
                    <span className="text-yellow-400">2023</span>,
                  </div>

                  <div className="ml-6">
                    <span className="text-turquoise-light">location</span>:{" "}
                    <span className="text-blue-400">"Bénin 🇧🇯"</span>,
                  </div>

                  <div className="ml-6">
                    <span className="text-turquoise-light">impact</span>:{" "}
                    <span className="text-purple-400">"Global"</span>
                  </div>

                  <div>{"};"}</div>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="bg-gradient-to-r from-coral/5 to-turquoise/5 rounded-2xl p-6 border border-turquoise/20"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-turquoise mb-4 flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Globe className="mr-3" size={24} />
                </motion.div>
                Notre Stack Technologique
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-slate-800/50 text-turquoise-light rounded-full text-sm border border-turquoise/20 hover:border-coral/50 transition-all duration-300"
                    custom={index}
                    variants={techStackVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Right */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/20 hover:border-coral/50 transition-all duration-500 cursor-pointer ${
                      hoveredStat === index ? "scale-105 shadow-2xl" : ""
                    }`}
                    variants={statsVariants}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>

                    <motion.div
                      className="text-3xl font-bold text-turquoise mb-2"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>

                    <h4 className="text-turquoise-light font-semibold mb-2">
                      {stat.label}
                    </h4>

                    <motion.p
                      className="text-sm text-turquoise/70"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredStat === index ? 1 : 0,
                        height: hoveredStat === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.description}
                    </motion.p>

                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Mission Statement */}
            <motion.div
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-turquoise/30 backdrop-blur-sm"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-coral mb-6 flex items-center">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronRight className="mr-3" size={24} />
                </motion.div>
                Notre Mission
              </h3>

              <div className="space-y-4">
                {[
                  {
                    text: "Innover constamment dans l'écosystème technologique africain",
                    highlight: "Innover",
                  },
                  {
                    text: "Partager nos connaissances avec la communauté mondiale",
                    highlight: "Partager",
                  },
                  {
                    text: "Créer des solutions qui impactent positivement la société",
                    highlight: "Créer",
                  },
                ].map((mission, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  >
                    <motion.div
                      className={`w-2 h-2 ${
                        index % 2 === 0 ? "bg-coral" : "bg-turquoise"
                      } rounded-full mt-3`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <p className="text-turquoise/90">
                      <span className="text-turquoise-light font-semibold">
                        {mission.highlight}
                      </span>{" "}
                      {mission.text
                        .replace(mission.highlight.toLowerCase(), "")
                        .trim()}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Photos Gallery */}
        <motion.div
          className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl p-10 border border-turquoise/20 backdrop-blur-sm mt-10"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold text-turquoise mb-8 text-center">
            L'Équipe OPPAI
          </h3>

          <div className="grid grid-cols-3 gap-10 mb-6">
            {[team1, team2, team3].map((teamImg, index) => (
              <motion.div
                key={index}
                className="aspect-square rounded-2xl bg-gradient-to-br from-coral/20 to-turquoise/20 border border-turquoise/30 flex items-center justify-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                }}
              >
                <motion.img
                  src={teamImg}
                  alt={`Membre équipe ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <p className="text-turquoise/70 text-sm mt-8">
              Et bien d'autres talents créatifs...
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-10" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/new"
              className="group bg-gradient-to-r from-coral to-turquoise text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Suivre Nos Actualités{" "}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="ml-2" size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
