import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Code2, Download } from 'lucide-react';
import Scene3D from './Scene3D';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* 3D R3F Canvas Background */}
      <Scene3D />

      {/* Ambient Radial Gradient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.2)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span>AVAILABLE FOR FULL-STACK & AI ROLES</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl"
        >
          Hi, I'm <span className="gradient-text glow-text">BS Manoj Gowda</span>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl sm:text-3xl font-medium text-slate-200 mb-6 flex items-center justify-center gap-2"
        >
          <span className="text-cyan-400 font-mono">&lt;</span>
          Full Stack Developer & AI Systems Engineer
          <span className="text-cyan-400 font-mono">/&gt;</span>
        </motion.p>

        {/* Short Bio snippet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm sm:text-base text-slate-400 max-w-2xl mb-8 leading-relaxed"
        >
          Engineering scalable Python & REST API web applications, intelligent multi-provider LLM voice assistants, and data analytics dashboards. B.E. Computer Science student passionate about clean architecture and 3D web experiences.
        </motion.p>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl"
        >
          {['Python', 'OOPs in Python', 'C', 'Java', 'Flask', 'SQL', 'SQLite', 'React', 'HTML / CSS', 'JavaScript', 'Groq / OpenAI GPT / GLM / DeepSeek LLM', 'Power BI'].map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 text-xs font-mono rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:opacity-95 shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all flex items-center gap-2 group"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm hover:text-white transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-cyan-400" /> Get In Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
