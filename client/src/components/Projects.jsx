import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FolderGit2, Cpu, Mic, ShieldCheck, Terminal, FileText, Code2, Sparkles, ChevronDown, ChevronUp, Layers, Zap } from 'lucide-react';

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
      tags: ['Python', 'PyWebView', 'Groq API', 'OpenAI GPT', 'GLM API', 'DeepSeek API', 'SpeechRecognition', 'SQLite', 'pyttsx3'],
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
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      title: 'Zero-Downtime Multi-LLM Failover',
      description:
        'Intelligent tier routing across Groq API (ultra-fast inference) → OpenAI GPT-4o/3.5 → GLM API → NVIDIA DeepSeek. If any API hits rate limits or downtime, Nova instantly fails over with zero interruption.',
    },
    {
      icon: <Mic className="w-5 h-5 text-purple-400" />,
      title: 'Voice Intent & Speech Synthesis',
      description:
        'Speech-to-Text integration via SpeechRecognition with natural offline/online voice response feedback powered by pyttsx3. Hands-free voice activation and command execution.',
    },
    {
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      title: 'Windows System Automation',
      description:
        'Direct system-level execution: opening apps, managing running processes, Task Manager process termination, volume control, and automated web navigation.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: 'Code Generation & Live Execution',
      description:
        'Integrated code playground capable of generating Python/JS scripts, diagnosing syntax errors from stack traces, and executing safe code snippets on the fly.',
    },
    {
      icon: <FileText className="w-5 h-5 text-amber-400" />,
      title: 'Vision & Document Summarization',
      description:
        'Extracts structured insights and summaries from long-form PDF documents, text files, and visual images using multimodal LLM prompts.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-pink-400" />,
      title: 'PyWebView Glassmorphic GUI',
      description:
        'Native desktop wrapper hosting a responsive, dark neon glassmorphism web interface with animated soundwaves, theme switching, and persistent SQLite history.',
    },
  ];

  return (
    <section id="projects" className="relative py-28 bg-[#050712] overflow-hidden bg-grid-pattern">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 flex items-center justify-center gap-1.5">
            <FolderGit2 className="w-4 h-4 text-cyan-400" /> // PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Explore my production-ready full-stack web applications, desktop AI voice assistants, and business intelligence projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Dedicated Nova AI Architecture Spotlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-3xl border border-cyan-500/30 overflow-hidden relative"
        >
          {/* Top Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    FLAGSHIP PROJECT ARCHITECTURE
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-purple-400" /> MULTI-LLM POWERED
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Nova AI Voice Assistant — Architectural Deep-Dive
                </h3>
              </div>
            </div>

            <button
              onClick={() => setShowNovaDeepDive(!showNovaDeepDive)}
              className="px-4 py-2 text-xs font-mono rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 flex items-center gap-2 transition-all"
            >
              {showNovaDeepDive ? (
                <>Hide Architecture Specs <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Expand Architecture Specs <ChevronDown className="w-4 h-4" /></>
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
                className="p-6 sm:p-8 bg-slate-950/60"
              >
                {/* Fallback Pipeline Visualization */}
                <div className="mb-8 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/20">
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Multi-LLM Tiered Routing Pipeline (Zero-Downtime Failover)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
                    <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/40 text-cyan-300">
                      <span className="text-[10px] text-slate-400 block mb-1">Tier 1 (Primary)</span>
                      <strong>Groq API</strong>
                      <span className="text-[10px] text-slate-400 block mt-1">Llama 3 / Mixtral (Fast)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-purple-500/40 text-purple-300">
                      <span className="text-[10px] text-slate-400 block mb-1">Tier 2 (Fallback)</span>
                      <strong>OpenAI GPT</strong>
                      <span className="text-[10px] text-slate-400 block mt-1">GPT-4o / GPT-3.5</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-blue-500/40 text-blue-300">
                      <span className="text-[10px] text-slate-400 block mb-1">Tier 3 (Fallback)</span>
                      <strong>GLM API</strong>
                      <span className="text-[10px] text-slate-400 block mt-1">Zhipu GLM Models</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-300">
                      <span className="text-[10px] text-slate-400 block mb-1">Tier 4 (Fallback)</span>
                      <strong>NVIDIA DeepSeek</strong>
                      <span className="text-[10px] text-slate-400 block mt-1">DeepSeek LLM</span>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {novaFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-slate-950 border border-white/10">
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
    </section>
  );
}

