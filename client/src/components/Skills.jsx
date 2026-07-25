import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, BarChart3, Wrench, Layers, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5 text-white" />,
      skills: ['Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Core Technical Skills',
      icon: <Cpu className="w-5 h-5 text-white" />,
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Operating Systems',
        'Computer Networks',
      ],
    },
    {
      title: 'Backend & Web Stack',
      icon: <Server className="w-5 h-5 text-white" />,
      skills: [
        'Flask',
        'REST API Development',
        'Authentication & Authorization',
        'SQL',
        'SQLite',
      ],
    },
    {
      title: 'Data Analytics & BI',
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      skills: [
        'Power BI',
        'Power Query',
        'Data Visualization',
        'Data Modeling',
        'KPI Analysis',
        'Dashboarding',
      ],
    },
    {
      title: 'Tools & AI Technologies',
      icon: <Wrench className="w-5 h-5 text-white" />,
      skills: [
        'Git',
        'GitHub',
        'Version Control',
        'LLMs (Groq, OpenAI GPT, GLM, DeepSeek)',
        'Prompt Engineering',
        'Linux',
        'PyWebView',
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Layers className="w-5 h-5 text-white" />,
      skills: [
        'Problem Solving',
        'Team Collaboration',
        'Quick Learner',
        'Adaptability',
        'Time Management',
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#d01b1b] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-white/80 block">
            // TECHNICAL MATRIX
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Skills &amp; Competencies
          </h2>
          <p className="text-lg text-white/90">
            Verified technical stack directly aligned with production engineering and AI systems development.
          </p>
          <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#b5141b]/90 border border-white/20 p-6 rounded-3xl backdrop-blur-md shadow-xl hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/20">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-white/15 text-white border border-white/15 hover:bg-white hover:text-[#d01b1b] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
