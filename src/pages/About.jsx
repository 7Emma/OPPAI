import React from 'react';
import { Users, GitBranch, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          &lt;À Propos/&gt;
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-cyan-100 leading-relaxed">
              OPPAI est un collectif de développeurs passionnés, unis par l'amour du code propre et de l'innovation technologique. Nous sommes une communauté dynamique de plus de 50 programmeurs talentueux.
            </p>
            <p className="text-lg text-cyan-100 leading-relaxed">
              Depuis 2020, nous développons des solutions logicielles innovantes, partageons nos connaissances et repoussons les limites de ce qui est possible avec le code. De l'IA au développement web, en passant par la cybersécurité et les systèmes distribués.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/30">
              <div className="text-cyan-400 font-mono text-sm mb-4">// Notre ADN</div>
              <div className="space-y-2 font-mono text-sm">
                <div><span className="text-purple-400">const</span> <span className="text-yellow-400">values</span> = [</div>
                <div className="ml-4 text-green-400">"Innovation continue",</div>
                <div className="ml-4 text-green-400">"Code quality first",</div>
                <div className="ml-4 text-green-400">"Open source mindset",</div>
                <div className="ml-4 text-green-400">"Collaborative spirit"</div>
                <div>];</div>
              </div>
            </div>
            <div className="flex space-x-6 mt-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <Users size={24} />
                </div>
                <p className="text-sm text-cyan-300">50+ Devs</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <GitBranch size={24} />
                </div>
                <p className="text-sm text-cyan-300">200+ Repos</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <Zap size={24} />
                </div>
                <p className="text-sm text-cyan-300">∞ Commits</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-100">Stack: Full-Stack & DevOps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-100">Formation: 2020</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-100">Origine: France</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-100">Développeurs: 50+ membres actifs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-100">Spécialité: Innovation & R&D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;