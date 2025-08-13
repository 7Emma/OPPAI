import React from 'react';
import { Users, GitBranch, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id='about' className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 mt-10 animate-pulse bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent">
          &lt;À Propos/&gt;
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-turquoise leading-relaxed">
              OPPAI est un collectif de développeurs passionnés, unis par l'amour du code propre et de l'innovation technologique. Nous sommes une communauté dynamique de plus de 50 programmeurs talentueux.
            </p>
            <p className="text-lg text-turquoise leading-relaxed">
              Depuis 2023, nous développons des solutions logicielles innovantes, partageons nos connaissances et repoussons les limites de ce qui est possible avec le code. De l'IA au développement web, en passant par la cybersécurité et les systèmes distribués.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-turquoise/30">
              <div className="text-coral font-mono text-sm mb-4">// Notre ADN</div>
              <div className="space-y-2 font-mono text-sm">
                <div><span className="text-coral">const</span> <span className="text-turquoise">values</span> = [</div>
                <div className="ml-4 text-turquoise-light">"Innovation continue",</div>
                <div className="ml-4 text-turquoise-light">"Code quality first",</div>
                <div className="ml-4 text-turquoise-light">"Open source mindset",</div>
                <div className="ml-4 text-turquoise-light">"Collaborative spirit"</div>
                <div>];</div>
              </div>
            </div>
            <div className="flex space-x-6 mt-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-coral to-turquoise w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto text-white">
                  <Users size={24} />
                </div>
                <p className="text-sm text-turquoise">10+ Devs</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-coral to-turquoise w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto text-white">
                  <GitBranch size={24} />
                </div>
                <p className="text-sm text-turquoise">200+ Repos</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-coral to-turquoise w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto text-white">
                  <Zap size={24} />
                </div>
                <p className="text-sm text-turquoise">∞ Commits</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-coral/20 to-turquoise/20 rounded-2xl p-8 backdrop-blur-sm border border-turquoise/30">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-coral rounded-full animate-pulse"></div>
                  <span className="text-turquoise">Stack: Full-Stack & DevOps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-turquoise rounded-full animate-pulse"></div>
                  <span className="text-turquoise">Formation: 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-coral rounded-full animate-pulse"></div>
                  <span className="text-turquoise">Origine: Bénin</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-turquoise rounded-full animate-pulse"></div>
                  <span className="text-turquoise">Développeurs: 10+ membres actifs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-coral rounded-full animate-pulse"></div>
                  <span className="text-turquoise">Spécialité: Innovation & R&D</span>
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