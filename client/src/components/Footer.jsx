import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050e] border-t border-slate-800/80 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#hero" className="flex items-center gap-2">
            <span className="font-mono font-extrabold text-cyan-400 text-lg">BS MANOJ GOWDA</span>
          </a>
          <p className="text-xs text-slate-400">
            Full-Stack Developer & AI Systems Engineer • Crafting intelligent web solutions.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/BSMANOJGOWDA2005-PRO"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/bs-manoj-gowda-072843300"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manojgowdamanu005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="Send Email via Gmail"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4">
          <p className="text-xs font-mono text-slate-500">
            © {new Date().getFullYear()} BS Manoj Gowda.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
