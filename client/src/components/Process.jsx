import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket, ArrowRight, Workflow } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Research & Strategy',
      description: 'Understanding requirements, user journeys, data structures, and systemic bottlenecks to form a bulletproof blueprint.',
      icon: <Search className="w-6 h-6 text-[#d01b1b]" />,
      badge: 'DISCOVERY',
    },
    {
      number: '02',
      title: 'Architecture & Design',
      description: 'Wireframing, API schema design, database relationships, and multi-provider failover routing models.',
      icon: <Palette className="w-6 h-6 text-[#d01b1b]" />,
      badge: 'BLUEPRINT',
    },
    {
      number: '03',
      title: 'Full-Stack Development',
      description: 'Engineering responsive frontends with React, robust Flask/Python REST APIs, SQLite databases, and LLM integrations.',
      icon: <Code2 className="w-6 h-6 text-[#d01b1b]" />,
      badge: 'ENGINEERING',
    },
    {
      number: '04',
      title: 'Testing & Deployment',
      description: 'Rigorous end-to-end testing, error traceback diagnosis, Power BI analytics validation, and cloud deployment.',
      icon: <Rocket className="w-6 h-6 text-[#d01b1b]" />,
      badge: 'LAUNCH',
    },
  ];

  return (
    <section id="process" className="relative py-28 bg-[#faf6ee] text-slate-900 overflow-hidden">
      
      {/* Top Red Wave Curve Transition from About */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 -translate-y-1 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-20 text-[#d01b1b] fill-current"
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
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#d01b1b]/10 border border-[#d01b1b]/30 text-xs font-mono font-bold text-[#d01b1b] uppercase tracking-wider">
            <Workflow className="w-4 h-4 text-[#d01b1b]" /> // WORKFLOW & METHODOLOGY
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Here's how I turn ideas into real-world applications
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            I follow a structured, creative, and highly methodical engineering lifecycle to build production-grade solutions.
          </p>
          <div className="w-20 h-1.5 bg-[#d01b1b] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-[#eae3d9] p-8 rounded-3xl shadow-[0_8px_30px_rgb(218,197,175,0.2)] hover:shadow-2xl hover:border-[#d01b1b]/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-[#d01b1b] font-mono">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-2xl bg-red-50 border border-red-100 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-red-50 text-[#d01b1b] font-extrabold uppercase tracking-wider inline-block mb-3">
                  {step.badge}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#d01b1b] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0e9df] flex items-center text-xs font-bold text-[#d01b1b]">
                <span>Phase {step.number} Complete</span>
                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
