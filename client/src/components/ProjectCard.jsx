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

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

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
        className="bg-[#b5141b]/90 border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden backdrop-blur-md shadow-xl hover:border-white/40 transition-all duration-300 group"
      >
        <div>
          {/* Header Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-white/15 border border-white/20 text-white flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> {project.category}
            </span>

            {project.featured && (
              <span className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-white text-[#d01b1b] font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> FEATURED
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-100 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/90 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Bullet Highlights */}
          <ul className="space-y-2 mb-6">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-xs text-white/80 flex items-start gap-2">
                <span className="text-white font-bold">•</span>
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
                className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-white/10 border border-white/15 text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-full bg-white/15 border border-white/20 text-xs font-semibold text-white hover:bg-white/30 transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" /> Code Repo
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-full bg-white text-[#d01b1b] font-bold text-xs hover:bg-red-50 shadow-md transition-all flex items-center justify-center gap-2"
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
