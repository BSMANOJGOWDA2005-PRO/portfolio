import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Cpu } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
      className="w-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="bg-[#0f1424] border border-slate-800 hover:border-red-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-300 group hover:shadow-[0_0_30px_rgba(229,28,36,0.2)]"
      >
        <div>
          {/* Header Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-red-500/10 border border-red-500/30 text-red-300 flex items-center gap-1.5 font-bold">
              <Cpu className="w-3.5 h-3.5" /> {project.category}
            </span>

            {project.featured && (
              <span className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-red-600 text-white font-extrabold flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3 text-white" /> FEATURED
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Bullet Highlights */}
          <ul className="space-y-2 mb-6">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-950 border border-slate-800 text-slate-300 hover:border-red-500/30 transition-colors font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200 hover:text-red-300 hover:border-red-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4 text-white" /> Code Repo
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold text-xs hover:opacity-90 shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
