import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      id: '01',
      title: 'Research',
      description: 'I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.',
      color: 'bg-[#d01b1b] text-white',
      badgeColor: 'text-white',
    },
    {
      id: '02',
      title: 'Design',
      description: 'Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.',
      color: 'bg-white text-slate-900 border border-slate-200 shadow-xl',
      badgeColor: 'text-slate-500',
    },
    {
      id: '03',
      title: 'Development',
      description: 'Building fast, scalable full-stack applications with robust backend APIs, optimized databases, and seamless responsive frontends.',
      color: 'bg-slate-900 text-white',
      badgeColor: 'text-red-400',
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Pill Badge */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                My Process
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Here's how I turn ideas into real-world applications
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 leading-relaxed">
              I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.
            </p>
          </motion.div>

          {/* Right Column: Process Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            {/* Dashed Connector Arch SVG */}
            <div className="hidden sm:block absolute top-12 left-1/4 right-1/4 h-32 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 300 100" fill="none">
                <path
                  d="M10,80 Q150,-20 290,80"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            {/* Cards Stack / Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 pt-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className={`p-6 sm:p-8 rounded-3xl relative transition-all duration-300 transform hover:-translate-y-1 ${step.color}`}
                >
                  {/* Top Notch Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm font-mono font-bold ${step.badgeColor}`}>
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed opacity-90">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
