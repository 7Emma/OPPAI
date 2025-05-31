import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          &lt;Contact/&gt;
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Rejoignez-nous</h3>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4 rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4 rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 p-4 rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110">
                <Twitter size={24} />
              </a>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/30">
              <div className="text-cyan-400 font-mono text-sm mb-2">git clone https://github.com/oppai-collective</div>
              <div className="text-cyan-300 text-sm">Discord: oppai-devs.com</div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Collaborations</h3>
            <div className="space-y-4">
              <a href="mailto:dev@oppai-collective.fr" className="flex items-center justify-center space-x-3 text-cyan-300 hover:text-cyan-100 transition-colors duration-300">
                <Mail size={20} />
                <span>dev@oppai-collective.fr</span>
              </a>
              <p className="text-cyan-100 text-sm">Projets • Consultations • Recrutement</p>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/30">
                <div className="text-cyan-400 font-mono text-xs space-y-1">
                  <div>Languages: JavaScript, Python, Go, Rust</div>
                  <div>Cloud: AWS, Azure, GCP, Kubernetes</div>
                  <div>Frameworks: React, Node.js, Django, Spring</div>
                  <div>Databases: PostgreSQL, MongoDB, Redis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;