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
      badgeColor: 'bg-[#d01b1b] text-white font-extrabold shadow-md',
      icon: <Terminal className="w-6 h-6 text-[#d01b1b]" />,
      achievements: [
        {
          heading: 'Full-Stack Real Estate Web Platform',
          desc: 'Built and deployed a full-stack real estate web application using Python, Flask, and SQLite3, implementing secure authentication, property search, booking workflows, and a role-based admin dashboard — supporting 10+ live property listings with separate user and admin access control.',
          tech: ['Python', 'Flask', 'SQLite3', 'REST APIs', 'User/Admin Access Control'],
        },
        {
          heading: 'Interactive Power BI Analytics',
          desc: 'Designed interactive Power BI dashboards translating raw datasets into KPI-driven business insights, using data modeling and visualization to surface actionable trends for decision-making.',
          tech: ['Power BI', 'Power Query', 'Data Visualization', 'Data Modeling', 'KPI Analysis'],
        },
        {
          heading: 'AI-Powered Desktop Voice Assistant',
          desc: 'Engineered an AI-powered desktop voice assistant using Python, PyWebView, SQLite, Groq API, NVIDIA DeepSeek API, and OpenRouter. Implemented LLM-based conversational AI, intelligent intent routing, multi-provider AI fallback (Groq → NVIDIA DeepSeek) for high availability, Windows automation, web search, and AI-powered code generation and execution.',
          tech: ['Python', 'PyWebView', 'SQLite', 'Groq API', 'DeepSeek API', 'OpenRouter', 'Windows Automation'],
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
    <section id="experience" className="relative py-28 bg-[#ebe7e0] text-slate-900 overflow-hidden">
      
      {/* Top Wave Curve Transition from Soft Cream Process */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 -translate-y-1 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 text-[#faf6ee] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d01b1b]/10 border border-[#d01b1b]/30 text-xs font-mono font-bold text-[#d01b1b] uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-[#d01b1b]" /> // CAREER TRACK & EXPERTISE
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-900">
            WORK EXPERIENCE
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Engineering production software, data BI dashboards, and multi-provider AI desktop systems.
          </p>
          <div className="w-20 h-1.5 bg-[#d01b1b] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Experience Timeline Card */}
        {experiences.map((exp) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#dfd9ce] border-l-8 border-l-[#d01b1b] rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(200,190,175,0.2)] mb-16 relative overflow-hidden"
          >
            {/* Top Bar Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#e5dfd5]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 shadow-sm">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-mono tracking-widest text-[#d01b1b] font-bold uppercase mt-1">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#ebe7e0] text-xs font-mono font-bold text-slate-800 border border-[#dfd9ce]">
                  {exp.period}
                </span>
                <span className={`px-4 py-1.5 rounded-full text-xs uppercase ${exp.badgeColor}`}>
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Achievements Clean Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
              {exp.achievements.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, translateY: -4 }}
                  className="bg-[#f7f4ed] border border-[#dfd9ce] p-6 rounded-2xl flex flex-col justify-between hover:border-red-300 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#d01b1b] shrink-0" />
                      {item.heading}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#e5dfd5]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2 font-bold">
                      TECH STACK:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full bg-white text-[11px] font-mono text-slate-800 border border-[#dfd9ce] font-semibold shadow-sm"
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
          className="bg-white border border-[#dfd9ce] rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(200,190,175,0.2)]"
        >
          <div className="mb-6 flex items-center gap-3">
            <Award className="w-7 h-7 text-[#d01b1b]" />
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Certifications &amp; Credentials
              </h3>
              <p className="text-xs text-slate-600 font-mono mt-0.5">
                Verified technical certifications in Data Structures, AI, &amp; Business Intelligence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-2xl bg-[#f7f4ed] border border-[#dfd9ce] flex flex-col justify-between hover:border-red-300 hover:bg-white hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#d01b1b] text-white font-bold">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">{cert.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{cert.title}</h4>
                  <p className="text-xs text-slate-600 font-mono">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
