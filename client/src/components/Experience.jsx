import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Code, Cpu, Database, BarChart3, Terminal } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Developer & Data Analyst',
      company: 'INDEPENDENT PROJECTS',
      period: '2025 – PRESENT',
      type: 'PRODUCTION & AI SYSTEMS',
      icon: <Terminal className="w-6 h-6 text-white" />,
      achievements: [
        {
          heading: 'Full-Stack Real Estate Platform',
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
    },
    {
      title: 'AI for Beginners',
      issuer: 'HP LIFE',
      date: 'September 2025',
      badge: 'CERTIFIED',
    },
    {
      title: 'Power BI Micro Course',
      issuer: 'Skill Course',
      date: 'March 2026',
      badge: 'COMPLETED',
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-[#d01b1b] text-white overflow-hidden">
      
      {/* Top Wave Curve Transition */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 -translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-20 text-white fill-current"
        >
          <path d="M0,0 C300,90 600,-40 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-white/80 block">
            // CAREER & ACHIEVEMENTS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            WORK EXPERIENCE
          </h2>
          <p className="text-lg text-white/90 font-normal">
            Hands-on software engineering experience building production web platforms, data BI dashboards, and AI voice automation.
          </p>
          <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Work Experience Section Card */}
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#b5141b]/90 border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md mb-16"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/15">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-mono tracking-widest text-white/80 font-bold uppercase mt-1">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-white/15 text-xs font-mono font-bold text-white border border-white/20">
                  {exp.period}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white text-[#d01b1b] text-xs font-black uppercase">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Achievements List */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
              {exp.achievements.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/15 p-6 rounded-2xl flex flex-col justify-between hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-white shrink-0" />
                      {item.heading}
                    </h4>
                    <p className="text-xs text-white/90 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 block mb-2">
                      STACK USED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full bg-white/15 text-[11px] font-medium text-white border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Certifications Highlight Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#b5141b]/80 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl"
        >
          <div className="mb-6 text-center sm:text-left">
            <h3 className="text-2xl font-black text-white tracking-tight">
              Certifications &amp; Credentials
            </h3>
            <p className="text-xs text-white/80 font-mono mt-1">
              Verified domain mastery in Data Structures, AI, &amp; Business Intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-2xl bg-white/10 border border-white/15 flex flex-col justify-between hover:bg-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#d01b1b] font-bold">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] font-mono text-white/70">{cert.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-xs text-white/80">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
