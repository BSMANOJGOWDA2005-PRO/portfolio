import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BrainCircuit, Code, Database, Cpu, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'B.E. CSE CGPA', value: '8.5', subtitle: 'K.V.G College of Eng.' },
    { label: 'Class XII Score', value: '90.4%', subtitle: 'Gurukula PU College' },
    { label: 'Live Property Listings', value: '10+', subtitle: 'Flask & SQLite Stack' },
    { label: 'AI Fallback Providers', value: '4+', subtitle: 'Groq → OpenAI GPT → GLM → DeepSeek' },
  ];

  const highlights = [
    'Full-Stack Developer skilled in Python, OOPs in Python, C, Java, Flask, SQL, SQLite3, HTML, CSS, JavaScript, and React.',
    'Engineered Nova AI Voice Assistant with PyWebView desktop interface and intelligent intent routing.',
    'Designed interactive Power BI business intelligence dashboards translating raw data into actionable KPIs.',
    'Solid foundation in Data Structures & Algorithms (DSA), Object-Oriented Programming (OOPs), REST APIs, and System Automation.',
  ];

  return (
    <section id="about" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 block">
            // ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Building Production-Ready Systems & <span className="gradient-text">AI Applications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <BrainCircuit className="w-6 h-6 text-cyan-400" /> Career Objective
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-6 text-base sm:text-lg">
                I am a passionate <strong className="text-white">Full-Stack Developer & Data Analyst</strong> seeking a Software Engineer / Backend Developer role. I specialize in designing scalable web applications, robust REST APIs, SQL-backed systems, and AI-powered desktop tools.
              </p>

              <div className="space-y-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-purple-400" /> Education
              </h3>

              <div className="space-y-6 border-l-2 border-slate-800 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,242,254,0.8)]" />
                  <span className="text-xs font-mono text-cyan-400">2023 – Present</span>
                  <h4 className="text-lg font-bold text-white">B.E. in Computer Science & Engineering</h4>
                  <p className="text-sm text-slate-400">K.V.G College of Engineering, Sullia</p>
                  <p className="text-xs font-mono text-slate-300 mt-1">CGPA: <span className="text-cyan-400 font-bold">8.5</span></p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-xs font-mono text-purple-400">2021 – 2023</span>
                  <h4 className="text-lg font-bold text-white">Class XII (PCMC)</h4>
                  <p className="text-sm text-slate-400">Raghavendra Gurukula PU College, Mysuru</p>
                  <p className="text-xs font-mono text-slate-300 mt-1">Percentage: <span className="text-purple-400 font-bold">90.4%</span></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Key Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, translateY: -4 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between text-center group hover:border-cyan-500/40 transition-all"
              >
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold gradient-text glow-text group-hover:scale-110 transition-transform inline-block">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{stat.label}</h4>
                  <p className="text-[11px] font-mono text-slate-400">{stat.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
