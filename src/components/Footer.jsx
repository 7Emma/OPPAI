import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4 font-mono">
          &lt;OPPAI/&gt;
        </div>
        <p className="text-cyan-300 text-sm">
          © 2025 OPPAI Collective. Open Source & Innovation. | Développeurs Français
        </p>
        <div className="mt-4 font-mono text-xs text-cyan-400">
          console.log("Keep coding, keep innovating! 🚀");
        </div>
      </div>
    </footer>
  );
};

export default Footer;