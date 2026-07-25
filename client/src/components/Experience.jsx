import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Terminal, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Developer & Data Analyst',
      company: 'INDEPENDENT PROJECTS',
      period: '2025 – PRESENT',
      type: 'PRODUCTION & AI SYSTEMS',
      badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40 font-extrabold',
      icon: <Terminal className="w-6 h-6 text-red-400" />,
      achievements: [
        {
          heading: 'Full-Stack Real Estate Web Platform',
          desc: 'Built & deployed a full-stack real estate web application using Python, Flask, & SQLite3, featuring secure authentication, property search, booking workflows, and a role-based admin dashboard supporting 10+ live listings.',
          tech: ['Python', 'Flask', 'SQLite3', 'REST APIs', 'HTML5', 'CSS3', 'JavaScript'],
        },
        {
          heading: 'Interactive Power BI Analytics',
          desc: 'Designed interactive Power BI dashboards translating raw datasets into KPI-driven business insights, using data modeling and visualization to surface actionable decision-making trends.',
          tech: ['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'KPI Analysis', 'Dashboarding'],
        },
        {
          heading: 'AI-Powered Desktop Voice Assistant',
          desc: 'Engineered a desktop voice assistant using Python, PyWebView, SQLite, Groq API, OpenAI GPT, GLM, & NVIDIA DeepSeek API. Implemented zero-downtime multi-provider AI fallback routing, Windows automation, web search, & live code execution.',
          tech: ['Python', 'PyWebView', 'Groq API', 'OpenAI GPT', 'GLM API', 'DeepSeek API', 'SpeechRecognition'],
        },
      ],
    },
  ];

  const certifications = [
    {
      title: 'Data Structures & Algorithms in Python',
      issuer: 'Infosys Springboard',
      date: 'April 2025',
      badge: 'VERIFIED',
      borderColor: 'border-red-500/30 text-red-400',
    },
    {
      title: 'AI for Beginners',
      issuer: 'HP LIFE',
      date: 'September 2025',
      badge: 'CERTIFIED',
      borderColor: 'border-purple-500/30 text-purple-400',
    },
    {
      title: 'Power BI Micro Course',
      issuer: 'Skill Course',
      date: 'March 2026',
      badge: 'COMPLETED',
      borderColor: 'border-amber-500/30 text-amber-400',
    },
  ];

  return (
    <section id="experience" className="relative py-28 bg-[#0b0f19] text-white overflow-hidden">
      
      {/* Top Wave Curve Transition (White to Deep Cyber Slate) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 -translate-y-1 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-24 text-white fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Ambient Red & Purple Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-red-400" /> // CAREER TRACK & EXPERTISE
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            WORK EXPERIENCE
          </h2>
          <p className="text-lg text-slate-400 font-normal">
            Engineering production software, data BI dashboards, and multi-provider AI desktop systems.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Experience Timeline Card */}
        {experiences.map((exp) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#121829]/90 border border-red-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl mb-16 relative overflow-hidden group hover:border-red-500/50 transition-all duration-300"
          >
            {/* Top Bar Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(229,28,36,0.2)]">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-red-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-mono tracking-widest text-red-400 font-bold uppercase mt-1">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-slate-900 text-xs font-mono font-bold text-slate-300 border border-slate-700">
                  {exp.period}
                </span>
                <span className={`px-4 py-1.5 rounded-full text-xs uppercase border ${exp.badgeColor}`}>
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Achievements Dark Cyber Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
              {exp.achievements.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, translateY: -4 }}
                  className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-red-500/40 hover:shadow-[0_0_20px_rgba(229,28,36,0.15)] transition-all duration-300"
                >
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-red-400 shrink-0" />
                      {item.heading}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-bold">
                      TECH STACK:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800 hover:border-red-500/40 transition-colors font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Certifications Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#121829]/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Award className="w-7 h-7 text-red-400" />
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Certifications &amp; Credentials
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Verified technical certifications in Data Structures, AI, &amp; Business Intelligence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className={`p-5 rounded-2xl bg-slate-900/90 border ${cert.borderColor} flex flex-col justify-between hover:scale-[1.02] transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold border border-red-500/30">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{cert.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-xs text-slate-400 font-mono">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom Wave Curve Transition (Deep Cyber Slate to White Skills) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-1 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-24 text-white fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,120 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
