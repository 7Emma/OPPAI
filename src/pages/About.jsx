import React, { useState, useEffect, useMemo } from "react";
import {
  Users,
  GitBranch,
  Zap,
  Code,
  Award,
  Globe,
  ChevronRight,
} from "lucide-react";

const AboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const values = useMemo(() => [
  "Innovation continue",
  "Code quality first",
  "Open source mindset",
  "Collaborative spirit",
], []);

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

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-coral via-purple-400 to-turquoise bg-clip-text text-transparent animate-pulse">
            &lt;À Propos/&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral to-turquoise mx-auto rounded-full"></div>
          <p className="text-xl text-turquoise/80 mt-8 max-w-3xl mx-auto leading-relaxed">
            Collective de développeurs passionnés, repoussant les limites de
            l'innovation technologique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Left */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-lg text-turquoise/90 leading-relaxed">
                <span className="text-coral font-semibold">OPPAI</span> est bien
                plus qu'un collectif de développeurs. Nous sommes une{" "}
                <span className="text-turquoise-light font-semibold">
                  communauté dynamique
                </span>{" "}
                de créateurs technologiques unis par une passion commune :
                transformer des idées innovantes en solutions concrètes.
              </p>
              <p className="text-lg text-turquoise/90 leading-relaxed">
                Depuis <span className="text-coral font-bold">2023</span>, nous
                développons des solutions logicielles avant-gardistes,
                partageons nos connaissances et repoussons constamment les
                limites du possible. De l'IA au développement web, en passant
                par la cybersécurité et les systèmes distribués.
              </p>
            </div>

            {/* Code Block with Typing Animation */}
            <div className="bg-slate-900/80 rounded-2xl p-8 border border-turquoise/30 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Code className="text-turquoise/60" size={20} />
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
                    <span className="text-green-400">"{typedText}"</span>,
                    <span className="animate-pulse text-coral ml-1">|</span>
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
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-r from-coral/5 to-turquoise/5 rounded-2xl p-6 border border-turquoise/20">
              <h3 className="text-xl font-bold text-turquoise mb-4 flex items-center">
                <Globe className="mr-3" size={24} />
                Notre Stack Technologique
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-800/50 text-turquoise-light rounded-full text-sm border border-turquoise/20 hover:border-coral/50 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Right */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/20 hover:border-coral/50 transition-all duration-500 cursor-pointer ${
                      hoveredStat === index ? "scale-105 shadow-2xl" : ""
                    }`}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>

                    <div className="text-3xl font-bold text-turquoise mb-2">
                      {stat.value}
                    </div>

                    <h4 className="text-turquoise-light font-semibold mb-2">
                      {stat.label}
                    </h4>

                    <p
                      className={`text-sm text-turquoise/70 transition-all duration-300 ${
                        hoveredStat === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {stat.description}
                    </p>

                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                    ></div>
                  </div>
                );
              })}
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-turquoise/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-coral mb-6 flex items-center">
                <ChevronRight className="mr-3" size={24} />
                Notre Mission
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-coral rounded-full mt-3 animate-pulse"></div>
                  <p className="text-turquoise/90">
                    <span className="text-turquoise-light font-semibold">
                      Innover
                    </span>{" "}
                    constamment dans l'écosystème technologique africain
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-turquoise rounded-full mt-3 animate-pulse"></div>
                  <p className="text-turquoise/90">
                    <span className="text-turquoise-light font-semibold">
                      Partager
                    </span>{" "}
                    nos connaissances avec la communauté mondiale
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-coral rounded-full mt-3 animate-pulse"></div>
                  <p className="text-turquoise/90">
                    <span className="text-turquoise-light font-semibold">
                      Créer
                    </span>{" "}
                    des solutions qui impactent positivement la société
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button className="group bg-gradient-to-r from-coral to-turquoise text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Rejoignez l'Aventure
                <ChevronRight
                  className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
