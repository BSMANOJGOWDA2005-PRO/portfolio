import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, Terminal, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Developer & AI Systems Engineer',
      company: 'Independent Engineering & Open Source Projects',
      location: 'Karnataka, India',
      period: '2024 – Present',
      badge: 'Current / Active',
      description:
        'Designing and building production-grade full-stack applications, desktop AI automation systems, and high-performance backend APIs.',
      bullets: [
        'Architected Nova AI Voice Assistant featuring multi-provider LLM fallback (Groq, OpenAI, GLM, DeepSeek) and PyWebView GUI.',
        'Engineered a complete real estate web application on Python/Flask with SQLite3, featuring property search, role-based dashboards, and booking flows.',
        'Constructed interactive Power BI dashboards utilizing Power Query and DAX to visualize key operational KPIs and business metrics.',
        'Implemented secure REST APIs, clean database models, and modular Python system automation utilities.',
      ],
      tech: ['Python', 'Flask', 'PyWebView', 'Groq API', 'OpenAI GPT', 'GLM API', 'DeepSeek API', 'SQL', 'SQLite3', 'JavaScript', 'React', 'Power BI', 'REST APIs', 'Git'],
    },
  ];

  return (
    <section id="experience" className="relative py-28 bg-[#050712] overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 block flex items-center justify-center gap-1.5">
            <Briefcase className="w-4 h-4 text-cyan-400" /> // WORK HISTORY & INTERNSHIPS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 sm:pl-12"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_rgba(0,242,254,0.8)]" />

              {/* Date Badge on Desktop Left */}
              <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right">
                <span className="text-xs font-mono font-semibold text-cyan-400 block">{exp.period}</span>
                <span className="text-[10px] text-slate-400 block">{exp.badge}</span>
              </div>

              {/* Card Container */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 relative">
                {/* Mobile Period Header */}
                <div className="sm:hidden flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">{exp.badge}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <Building2 className="w-3.5 h-3.5" /> {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </span>
                </div>

                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Bullet List */}
                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
