import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FolderGit2, Cpu, Mic, ShieldCheck, Terminal, FileText, Code2, Sparkles, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export default function Projects() {
  const [showNovaDeepDive, setShowNovaDeepDive] = useState(true);

  const projects = [
    {
      title: 'AI-Powered Desktop Voice Assistant',
      category: 'AI & Desktop Automation',
      featured: true,
      description:
        'Developed an AI-powered desktop voice assistant using Python, integrating LLM-based chat, real-time speech recognition, text-to-speech, and intent-based routing for AI chat, code generation, web search, and Windows automation.',
      highlights: [
        'Designed a cost-free multi-provider AI fallback architecture (Groq → OpenAI → NVIDIA DeepSeek), ensuring uninterrupted AI responses during API rate limits and eliminating infrastructure costs.',
        'Built a PyWebView desktop application with Windows automation (os, subprocess, psutil) for application control, website launching, system commands, and resource monitoring.',
        'Integrated AI-powered code generation, debugging, execution, image analysis, PDF analysis, document summarization, and image-based content extraction.',
      ],
      tags: ['Python', 'PyWebView', 'Groq API', 'DeepSeek API', 'OpenRouter', 'SpeechRecognition', 'pyttsx3', 'SQLite'],
      github: 'https://github.com/BSMANOJGOWDA2005-PRO/AI_Nova_voice_assistant',
      demo: null,
    },
    {
      title: 'Real Estate Platform',
      category: 'Full-Stack Web App',
      featured: true,
      description:
        'Developed a scalable real estate platform using Python, Flask, SQLite3, and REST APIs, implementing secure authentication and a lightweight database architecture.',
      highlights: [
        'Supports 10+ live property listings with separate user and admin panels for role-based access control.',
        'Enabled users to browse properties, submit booking requests, and send inquiry messages to admins.',
        'Admins can add, approve, reject, or delete listings, and manage bookings and messages through a dedicated dashboard with advanced search, filtering, and session management.',
      ],
      tags: ['Python', 'Flask', 'SQLite3', 'REST APIs', 'Role-Based Access Control', 'Admin Dashboard'],
      github: 'https://github.com/BSMANOJGOWDA2005-PRO/Real_estate_web_application',
      demo: 'https://real-estate-web-application-mm46.onrender.com/',
    },
    {
      title: 'Power BI Business Analytics Dashboards',
      category: 'Data BI & Analytics',
      featured: false,
      description:
        'Designed interactive Power BI dashboards translating raw datasets into KPI-driven business insights using data modeling and visualization.',
      highlights: [
        'Built automated data cleaning pipelines using Power Query and advanced DAX formulas.',
        'Created executive data visual models for revenue metrics, conversion trends, and operational KPIs.',
      ],
      tags: ['Power BI', 'Power Query', 'Data Visualization', 'Data Modeling', 'KPI Analysis'],
      github: 'https://github.com/BSMANOJGOWDA2005-PRO',
      demo: null,
    },
  ];

  const novaFeatures = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#d01b1b]" />,
      title: 'Cost-Free Multi-Provider AI Fallback',
      description:
        'Intelligent tier routing across Groq API → OpenAI → NVIDIA DeepSeek (and OpenRouter) for zero downtime during API rate limits.',
    },
    {
      icon: <Mic className="w-5 h-5 text-[#d01b1b]" />,
      title: 'Voice Intent & Speech Synthesis',
      description:
        'Real-time speech-to-text via SpeechRecognition with natural voice response feedback powered by pyttsx3.',
    },
    {
      icon: <Terminal className="w-5 h-5 text-[#d01b1b]" />,
      title: 'Windows System Automation',
      description:
        'System-level execution with os, subprocess, and psutil for application control, website launching, resource monitoring, and task management.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#d01b1b]" />,
      title: 'Code Generation & Execution',
      description:
        'AI-powered code playground capable of generating, debugging, and executing code snippets on the fly.',
    },
    {
      icon: <FileText className="w-5 h-5 text-[#d01b1b]" />,
      title: 'Multimodal Vision & PDF Analysis',
      description:
        'Extracts structured content from images, long-form PDF documents, and text files with instant summarization.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#d01b1b]" />,
      title: 'PyWebView Desktop Interface',
      description:
        'Native desktop wrapper providing a smooth, responsive glassmorphism user interface.',
    },
  ];

  return (
    <section id="projects" className="relative py-28 bg-[#ebe7e0] text-slate-900 overflow-hidden">
      
      {/* Top Wave Curve Transition from Soft Cream Skills */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 -translate-y-1 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 text-[#faf6ee] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4 pt-4"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#d01b1b]/10 border border-[#d01b1b]/30 text-xs font-mono font-bold text-[#d01b1b] uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4 text-[#d01b1b]" /> // PORTFOLIO SHOWCASE & SYSTEMS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Featured Projects &amp; Systems
          </h2>
          <p className="text-lg text-slate-600">
            Explore my production-ready full-stack web applications, desktop AI voice assistants, and analytics projects.
          </p>
          <div className="w-20 h-1.5 bg-[#d01b1b] mx-auto mt-4 rounded-full" />
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
          className="bg-white rounded-3xl border border-[#dfd9ce] overflow-hidden shadow-[0_8px_30px_rgb(200,190,175,0.2)]"
        >
          {/* Top Banner */}
          <div className="p-6 sm:p-8 bg-[#f7f4ed] border-b border-[#dfd9ce] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-[#d01b1b] shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#d01b1b] text-white font-extrabold">
                    FLAGSHIP ARCHITECTURE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  Nova AI Voice Assistant — Architectural Deep-Dive
                </h3>
              </div>
            </div>

            <button
              onClick={() => setShowNovaDeepDive(!showNovaDeepDive)}
              className="px-5 py-2 text-xs font-semibold rounded-full bg-[#d01b1b] text-white hover:bg-red-700 flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              {showNovaDeepDive ? (
                <>Hide Architecture Specs <ChevronUp className="w-4 h-4 text-white" /></>
              ) : (
                <>Expand Architecture Specs <ChevronDown className="w-4 h-4 text-white" /></>
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
                className="p-6 sm:p-8 bg-white"
              >
                {/* Fallback Pipeline Visualization */}
                <div className="mb-8 p-6 rounded-2xl bg-[#f7f4ed] border border-[#dfd9ce] shadow-sm">
                  <h4 className="text-xs font-mono text-[#d01b1b] uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                    <Layers className="w-4 h-4 text-[#d01b1b]" /> Multi-LLM Tiered Failover Pipeline
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
                    <div className="p-3.5 rounded-xl bg-white border border-red-200 text-slate-900 font-bold shadow-sm">
                      <span className="text-[10px] text-[#d01b1b] block mb-1 font-extrabold">Tier 1 (Primary)</span>
                      <strong>Groq API</strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-purple-200 text-slate-900 font-bold shadow-sm">
                      <span className="text-[10px] text-purple-600 block mb-1 font-extrabold">Tier 2 (Fallback)</span>
                      <strong>OpenAI-gpt</strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-slate-900 font-bold shadow-sm">
                      <span className="text-[10px] text-emerald-600 block mb-1 font-extrabold">Tier 3 (Fallback)</span>
                      <strong>NVIDIA DeepSeek</strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-blue-200 text-slate-900 font-bold shadow-sm">
                      <span className="text-[10px] text-blue-600 block mb-1 font-extrabold">Tier 4 (Fallback)</span>
                      <strong>GLM</strong>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {novaFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#f7f4ed]/70 border border-[#dfd9ce] hover:border-red-300 hover:bg-white hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-red-50 border border-red-100">
                          {feat.icon}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
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
