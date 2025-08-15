import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Code, ChevronDown } from "lucide-react";
import bg1 from "../assets/bg/bg1.jpeg";
import bg2 from "../assets/bg/bg2.jpeg";
import bg3 from "../assets/bg/bg3.jpeg";

function HeroSection({ scrollToSection }) {
  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [floatingCount, setFloatingCount] = useState(100);
  const controls = useAnimation();

  const welcomeMessages = [
    "welcome_to_oppai.exe",
    "bienvenue_chez_oppai.exe",
    "oppai_collective.exe",
    "start_coding_with_us.exe",
  ];

  const backgroundImages = [bg1, bg2, bg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWelcomeIndex((prev) => (prev + 1) % welcomeMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setFloatingCount(window.innerWidth < 640 ? 30 : 100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
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

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const floatingSymbols = ["0", "1", "{", "}", "<", "/>", "()", "[]"];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Arrière-plan */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {backgroundImages.map(
            (bg, index) =>
              index === currentBgIndex && (
                <motion.div
                  key={index}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bg})` }}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1 }}
                />
              )
          )}
        </AnimatePresence>
      </div>

      {/* Dégradés */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-turquoise/10 to-coral/10"
        animate={{
          background: [
            "linear-gradient(to right, rgba(64, 224, 208, 0.1), rgba(255, 127, 80, 0.1))",
            "linear-gradient(to right, rgba(255, 127, 80, 0.1), rgba(64, 224, 208, 0.1))",
            "linear-gradient(to right, rgba(64, 224, 208, 0.1), rgba(255, 127, 80, 0.1))",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Éléments flottants */}
      <div className="absolute inset-0 justify-center">
        {[...Array(floatingCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-turquoise-light/40 font-mono text-xs"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight - 50,
                Math.random() * window.innerHeight,
              ],
              opacity: [0, 0.4, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            {
              floatingSymbols[
                Math.floor(Math.random() * floatingSymbols.length)
              ]
            }
          </motion.div>
        ))}
      </div>

      {/* Contenu principal */}
      <motion.div
        className="container mx-auto px-4 text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Messages de bienvenue */}
        <motion.div
          className="font-mono text-turquoise text-lg sm:text-xl mb-4"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWelcomeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              &gt; {welcomeMessages[currentWelcomeIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Titre */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-turquoise-light via-coral to-turquoise-dark bg-clip-text text-transparent font-mono"
          variants={titleVariants}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            backgroundPosition: {
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          OPPAI
        </motion.h1>

        {/* Slogan */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-4 text-coral-light"
          variants={itemVariants}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Collectif de Développeurs
        </motion.p>

        {/* Manifeste défilant */}
        <motion.div
          className="overflow-hidden whitespace-nowrap border-t border-b border-turquoise/20 py-2 mt-6 mb-6"
          variants={itemVariants}
        >
          <motion.span
            className="text-coral-light font-mono inline-block"
            animate={{ x: ["100vw", "-100vw"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            💻 Nous codons avec passion • 🤝 Rejoignez notre aventure • 🚀
            Innovation à chaque ligne de code •
          </motion.span>
        </motion.div>

        {/* Bloc infos */}
        <motion.div
          className="font-mono text-turquoise-light mb-8 bg-slate-900/70 backdrop-blur-sm rounded-lg p-3 sm:p-4 max-w-full sm:max-w-2xl mx-auto border border-turquoise/30"
          variants={itemVariants}
          whileHover={{
            borderColor: "rgba(64, 224, 208, 1)",
            boxShadow: "0 0 20px rgba(64, 224, 208, 0.3)",
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-left text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-coral">const</span>{" "}
              <span className="text-turquoise">oppai</span> = {"{"}
            </motion.div>
            <br />
            <span className="ml-4 text-turquoise-light">mission</span>:{" "}
            <span className="text-coral-light">"Innovation through code"</span>,
            <br />
            <span className="ml-4 text-turquoise-light">members</span>:{" "}
            <span className="text-turquoise">10+</span>,
            <br />
            <span className="ml-4 text-turquoise-light">tech_stack</span>:{" "}
            <span className="text-coral-light">
              ["React", "Node.js", "TailwindCSS", "C/C++"]
            </span>
            ,
            <br />
            <span className="ml-4 text-turquoise-light">since</span>:{" "}
            <span className="text-turquoise">"2023"</span>,
            <br />
            <span className="ml-4 text-turquoise-light">
              projects_completed
            </span>
            : <span className="text-turquoise">25</span>,
            <br />
            <span className="ml-4 text-turquoise-light">status</span>:{" "}
            <span className="text-coral">"Always coding"</span>
            <br />
            {"}"};
          </motion.div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-turquoise-light font-mono"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: "25+", label: "Projets livrés" },
            { value: "10+", label: "Membres actifs" },
            { value: "5", label: "Partenaires" },
            { value: "∞", label: "Tasses de café" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={statsVariants}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ scale: 1.05 }} // juste un petit zoom au survol
            >
              <motion.p
                className="text-4xl font-bold"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(64, 224, 208, 0.3)",
                    "0 0 20px rgba(64, 224, 208, 0.6)",
                    "0 0 10px rgba(64, 224, 208, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Boutons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="w-full sm:w-auto bg-gradient-to-r from-turquoise to-coral px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(64, 224, 208, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code className="inline-block mr-2" size={20} />
            </motion.div>
            Voir nos Projets
          </motion.a>
          <motion.a
            href="#contact"
            className="w-full sm:w-auto border-2 border-coral px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center"
            whileHover={{
              backgroundColor: "#FF7F50",
              color: "#FFFFFF",
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
          >
            Nous Rejoindre
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ChevronDown className="ml-2" size={20} />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Citation */}
        <motion.p
          className="mt-8 text-sm italic text-white/60"
          variants={itemVariants}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          "Le code est notre langage, l'innovation notre mission."
        </motion.p>

        {/* Flèche vers section suivante */}
        <motion.div
          className="mt-16 justify-center relative left-6"
          variants={itemVariants}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2, color: "#40E0D0" }}
            onClick={() => scrollToSection && scrollToSection("about")}
            className="cursor-pointer"
          >
            <ChevronDown
              size={40}
              className="mx-auto text-turquoise-light/50"
            />
          </motion.div>
        </motion.div>

        {/* Indicateurs du carrousel */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {backgroundImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentBgIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBgIndex ? "bg-turquoise" : "bg-white/30"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={
                index === currentBgIndex
                  ? {
                      boxShadow: [
                        "0 0 10px rgba(64, 224, 208, 0.5)",
                        "0 0 20px rgba(64, 224, 208, 0.8)",
                        "0 0 10px rgba(64, 224, 208, 0.5)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
