import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FolderGit2, Cpu, Mic, ShieldCheck, Terminal, FileText, Code2, Sparkles, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export default function Projects() {
  const [showNovaDeepDive, setShowNovaDeepDive] = useState(true);

  const projects = [
    {
      title: 'Nova AI — Desktop Voice Assistant',
      category: 'AI & Desktop Automation',
      featured: true,
      description:
        'Production-grade desktop voice assistant engineered with PyWebView glassmorphic UI, voice command intent execution, and zero-downtime multi-LLM fallback routing.',
      highlights: [
        'Multi-provider AI failover (Groq → OpenAI GPT → GLM → NVIDIA DeepSeek) for 99.9% availability.',
        'PyWebView desktop interface with live Windows system control, task manager, and process control.',
        'Automated code generation, live execution, error traceback analysis, and PDF document summarization.',
      ],
      tags: ['Python', 'PyWebView', 'Groq API', 'OpenAI GPT', 'GLM API', 'DeepSeek API', 'SpeechRecognition', 'SQLite'],
      github: 'https://github.com/BSMANOJGOWDA2005-PRO/AI_Nova_voice_assistant',
      demo: null,
    },
    {
      title: 'Real Estate Platform',
      category: 'Full-Stack Web App',
      featured: true,
      description:
        'Scalable real estate web application built with Python, Flask, and SQLite3, featuring role-based admin panels and booking workflows.',
      highlights: [
        'Supports 10+ live property listings with advanced search, filtering, and booking request workflows.',
        'Role-based access control separating normal property seekers from administrative management.',
        'Admin dashboard for approving, rejecting, or deleting property listings and inquiry messages.',
      ],
      tags: ['Python', 'Flask', 'SQLite3', 'REST APIs', 'HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/BSMANOJGOWDA2005-PRO/Real_estate_web_application',
      demo: 'https://real-estate-web-application-mm46.onrender.com/',
    },
    {
      title: 'Power BI Business Analytics Dashboards',
      category: 'Data BI & Analytics',
      featured: false,
      description:
        'Interactive business intelligence dashboards translating raw data into KPI-driven decision insights.',
      highlights: [
        'Built automated data cleaning pipelines using Power Query and advanced DAX formulas.',
        'Created executive data visual models for revenue metrics, conversion trends, and operational KPIs.',
      ],
      tags: ['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'KPI Dashboards'],
      github: 'https://github.com/BSMANOJGOWDA2005-PRO',
      demo: null,
    },
  ];

  const novaFeatures = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
      title: 'Zero-Downtime Multi-LLM Failover',
      description:
        'Intelligent tier routing across Groq API (ultra-fast inference) → OpenAI GPT-4o/3.5 → GLM API → NVIDIA DeepSeek.',
    },
    {
      icon: <Mic className="w-5 h-5 text-purple-400" />,
      title: 'Voice Intent & Speech Synthesis',
      description:
        'Speech-to-Text integration via SpeechRecognition with natural offline/online voice response feedback powered by pyttsx3.',
    },
    {
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      title: 'Windows System Automation',
      description:
        'Direct system-level execution: opening apps, managing running processes, volume control, and automated web navigation.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: 'Code Generation & Live Execution',
      description:
        'Integrated code playground capable of generating Python/JS scripts, diagnosing syntax errors, and executing code snippets.',
    },
    {
      icon: <FileText className="w-5 h-5 text-amber-400" />,
      title: 'Vision & Document Summarization',
      description:
        'Extracts structured insights and summaries from long-form PDF documents and text files using multimodal LLM prompts.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-pink-400" />,
      title: 'PyWebView Glassmorphic GUI',
      description:
        'Native desktop wrapper hosting a responsive, dark neon glassmorphism web interface with animated soundwaves.',
    },
  ];

  return (
    <section id="projects" className="relative py-28 bg-[#070a14] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4 text-red-400" /> // PORTFOLIO SHOWCASE & SYSTEMS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Featured Projects &amp; Systems
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore my production-ready full-stack web applications, desktop AI voice assistants, and analytics projects.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Nova AI Architecture Spotlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="bg-[#0f1424] rounded-3xl border border-red-500/30 overflow-hidden shadow-2xl backdrop-blur-xl"
        >
          {/* Top Banner */}
          <div className="p-6 sm:p-8 bg-[#0a0d1a] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shadow-[0_0_15px_rgba(229,28,36,0.3)]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold">
                    FLAGSHIP ARCHITECTURE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Nova AI Voice Assistant — Architectural Deep-Dive
                </h3>
              </div>
            </div>

            <button
              onClick={() => setShowNovaDeepDive(!showNovaDeepDive)}
              className="px-5 py-2 text-xs font-semibold rounded-full bg-slate-900 text-slate-200 border border-slate-700 hover:border-red-500/40 hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              {showNovaDeepDive ? (
                <>Hide Architecture Specs <ChevronUp className="w-4 h-4 text-red-400" /></>
              ) : (
                <>Expand Architecture Specs <ChevronDown className="w-4 h-4 text-red-400" /></>
              )}
            </button>
          </div>

          {/* Collapsible Content */}
          <AnimatePresence>
            {showNovaDeepDive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 bg-slate-950/80"
              >
                {/* Fallback Pipeline Visualization */}
                <div className="mb-8 p-6 rounded-2xl bg-slate-900/90 border border-red-500/20">
                  <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                    <Layers className="w-4 h-4 text-red-400" /> Multi-LLM Tiered Failover Pipeline
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-red-500/40 text-red-300 font-bold">
                      <span className="text-[10px] text-slate-500 block mb-1">Tier 1 (Primary)</span>
                      <strong>Groq API</strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-purple-500/40 text-purple-300 font-bold">
                      <span className="text-[10px] text-slate-500 block mb-1">Tier 2 (Fallback)</span>
                      <strong>OpenAI GPT</strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-blue-500/40 text-blue-300 font-bold">
                      <span className="text-[10px] text-slate-500 block mb-1">Tier 3 (Fallback)</span>
                      <strong>GLM API</strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-300 font-bold">
                      <span className="text-[10px] text-slate-500 block mb-1">Tier 4 (Fallback)</span>
                      <strong>NVIDIA DeepSeek</strong>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {novaFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-red-500/30 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                          {feat.icon}
                        </div>
                        <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Bottom Wave Curve Transition (Deep Midnight Projects to White Contact) */}
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
