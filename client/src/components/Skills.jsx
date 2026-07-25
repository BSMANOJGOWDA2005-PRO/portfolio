import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, BarChart3, Wrench, Layers, Cpu, Zap } from 'lucide-react';

export default function Skills() {
  const topFeaturedSkills = [
    {
      name: 'Python & Flask Systems',
      category: 'Backend & Web Architecture',
      level: '95%',
      badge: 'PRODUCTION EXPERT',
      desc: 'Scalable REST APIs, authentication, SQLite/SQL databases, and server-side automation.',
    },
    {
      name: 'React & Web Frontend',
      category: 'Full-Stack Interface',
      level: '90%',
      badge: 'FULL STACK',
      desc: 'Modern component-driven web interfaces, state management, and responsive layouts.',
    },
    {
      name: 'Multi-LLM Voice AI Engine',
      category: 'AI Desktop Systems',
      level: '92%',
      badge: 'GROQ • OPENAI • DEEPSEEK',
      desc: 'PyWebView desktop wrapper, speech intent routing, and zero-downtime AI failover.',
    },
    {
      name: 'Power BI & Data Analytics',
      category: 'Business Intelligence',
      level: '90%',
      badge: 'DATA MODELING',
      desc: 'Power Query pipelines, DAX formulas, KPI dashboards, and executive data visualizations.',
    },
    {
      name: 'REST APIs & SQL Databases',
      category: 'Data Persistence',
      level: '94%',
      badge: 'DATABASE ARCHITECTURE',
      desc: 'Relational database schema design, queries, SQLite3 integration, and API security.',
    },
    {
      name: 'Data Structures & Algorithms',
      category: 'Core CS Fundamentals',
      level: '88%',
      badge: 'VERIFIED CREDENTIAL',
      desc: 'Object-oriented programming in Python/Java, system memory optimization, & problem solving.',
    },
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5 text-[#d01b1b]" />,
      skills: ['Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Core Technical Skills',
      icon: <Cpu className="w-5 h-5 text-[#d01b1b]" />,
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Operating Systems',
        'Computer Networks',
      ],
    },
    {
      title: 'Backend & Web Stack',
      icon: <Server className="w-5 h-5 text-[#d01b1b]" />,
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
      icon: <BarChart3 className="w-5 h-5 text-[#d01b1b]" />,
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
      icon: <Wrench className="w-5 h-5 text-[#d01b1b]" />,
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
      icon: <Layers className="w-5 h-5 text-[#d01b1b]" />,
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
    <section id="skills" className="relative py-28 bg-[#faf6ee] text-slate-900 overflow-hidden">
      
      {/* Top Wave Curve Transition from Soft Warm Gray Experience */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 -translate-y-1 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 text-[#ebe7e0] fill-current"
        >
          <path d="M0,0 C200,80 400,-20 600,60 C800,120 1000,10 1200,80 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#d01b1b]/10 border border-[#d01b1b]/30 text-xs font-mono font-bold text-[#d01b1b] uppercase tracking-wider">
            <Zap className="w-4 h-4 text-[#d01b1b]" /> // TECHNICAL MATRIX & COMPETENCIES
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Skills &amp; Tech Stack
          </h2>
          <p className="text-lg text-slate-600">
            Verified engineering stack directly aligned with full-stack web platforms, BI analytics, and AI systems.
          </p>
          <div className="w-20 h-1.5 bg-[#d01b1b] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Featured Tech Stack Competencies Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {topFeaturedSkills.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#eae3d9] p-6 rounded-3xl shadow-[0_8px_30px_rgb(218,197,175,0.15)] hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#d01b1b] text-white font-extrabold uppercase">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700">
                    {item.level}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-[11px] font-mono text-[#d01b1b] font-bold uppercase mb-3">
                  {item.category}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="pt-3 border-t border-[#f0e9df]">
                <div className="w-full bg-[#f0e9df] rounded-full h-2.5 p-0.5">
                  <div
                    className="bg-[#d01b1b] h-full rounded-full shadow-sm"
                    style={{ width: item.level }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categorized Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#eae3d9] p-6 rounded-3xl shadow-[0_8px_30px_rgb(218,197,175,0.15)] hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-200">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-[#faf6ee] text-slate-800 border border-[#eae3d9] hover:bg-[#d01b1b] hover:text-white transition-all cursor-default font-semibold shadow-sm"
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
