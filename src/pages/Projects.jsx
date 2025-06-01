import React from 'react';
import { Terminal, Code } from 'lucide-react';
import { projects } from '../Datas/projects';

const Projects = () => {
  
  return (
    <section id="projets" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 mt-10 bg-gradient-to-r from-coral-dark to-coral bg-clip-text text-transparent">
          &lt;Nos Projets/&gt;
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl mb-4 flex flex-col items-center justify-center group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                  <Terminal size={24} className="text-turquoise-light mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xs font-mono text-cyan-300 bg-slate-800/50 px-2 py-1 rounded">
                    {project.lang}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-cyan-300 text-sm mb-2">{project.type} • {project.year}</p>
                <p className="text-cyan-100 text-xs mb-4">{project.desc}</p>
                <button className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center space-x-2">
                  <span>Voir le Code</span>
                  <Code size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects