import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Nova AI — Desktop Voice Assistant',
      category: 'AI & Desktop Automation',
      featured: true,
      description:
        'AI-powered desktop voice assistant featuring LLM-based chat, speech recognition, intent routing, and PyWebView glassmorphic UI.',
      highlights: [
        'Cost-free multi-provider AI fallback architecture (Groq → OpenAI GPT → GLM → NVIDIA DeepSeek) for 99.9% availability.',
        'PyWebView desktop interface with live Windows system control, task manager, and resource monitoring.',
        'AI-powered code generation, debugging, execution, image analysis, and PDF document summarization.',
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 block flex items-center justify-center gap-1.5">
            <FolderGit2 className="w-4 h-4 text-cyan-400" /> // PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Explore my latest full-stack web applications, AI voice assistants, and analytics projects. Hover over cards for 3D tilt interaction.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
