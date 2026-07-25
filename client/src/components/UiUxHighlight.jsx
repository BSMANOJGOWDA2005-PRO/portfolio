import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Cpu, Code2, ArrowRight, Smartphone, Database, CheckCircle2 } from 'lucide-react';

export default function UiUxHighlight() {
  return (
    <section className="relative py-24 bg-[#f8fafc] text-slate-900 overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Typography & Headline matching uploaded reference */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Pill Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#d01b1b]/10 border border-[#d01b1b]/30 text-xs font-mono font-bold text-[#d01b1b] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Core Design Philosophy
              </span>
            </div>

            {/* Headline matching user reference format */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Why high-impact <span className="text-[#d01b1b]">UI/UX Design</span> &amp; Systems Engineering is Crucial?
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              A great digital application requires both pixel-perfect frontend UI/UX and rock-solid backend architecture. I engineer full-stack systems where clean design meets scalable Python APIs, Power BI analytics, and multi-provider LLM AI.
            </p>

            {/* Feature Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d01b1b] shrink-0" />
                <span className="text-sm font-semibold text-slate-800">Pixel-Perfect Glassmorphic Responsive UIs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d01b1b] shrink-0" />
                <span className="text-sm font-semibold text-slate-800">Zero-Downtime Multi-LLM API Failover Routing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d01b1b] shrink-0" />
                <span className="text-sm font-semibold text-slate-800">KPI-Driven Power BI Data Analytics Dashboards</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d01b1b] text-white font-extrabold text-sm hover:bg-[#b5141b] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>Explore Technical Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Circular Arch Canvas with UI/UX Mockups matching uploaded reference */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Dark Circular Container Arch matching reference image */}
            <div className="relative w-full max-w-lg aspect-square rounded-full bg-gradient-to-tr from-[#8a0c12] via-[#b5141b] to-[#d01b1b] p-8 sm:p-12 shadow-2xl border-4 border-white flex items-center justify-center overflow-hidden group">
              
              {/* Decorative Background Lighting */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating UI & UX Pill Badges matching reference */}
              <div className="absolute top-10 left-12 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-sm shadow-xl tracking-wider uppercase border border-amber-300">
                UI
              </div>
              <div className="absolute top-10 right-12 px-4 py-1.5 rounded-full bg-purple-500 text-white font-black text-sm shadow-xl tracking-wider uppercase border border-purple-300">
                UX
              </div>

              {/* Interactive Phone / App Screen Mockup in Center matching reference */}
              <div className="relative z-10 w-64 bg-slate-900 border-4 border-slate-700 rounded-[32px] p-4 shadow-2xl space-y-3 transform group-hover:scale-105 transition-transform duration-500">
                
                {/* Screen Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="w-12 h-2 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-[#d01b1b]" />
                </div>

                {/* Mockup Card 1: App Interface */}
                <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">
                      Aa
                    </div>
                    <div className="w-7 h-7 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs">
                      Aa
                    </div>
                  </div>
                  <div className="h-2 rounded bg-slate-700 w-3/4" />
                  <div className="h-2 rounded bg-slate-700 w-1/2" />
                </div>

                {/* Mockup Card 2: Analytics & AI Widget */}
                <div className="p-3 rounded-2xl bg-[#d01b1b]/20 border border-[#d01b1b]/40 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-red-300 font-bold uppercase block">
                      AI FAILOVER ACTIVE
                    </span>
                    <span className="text-xs text-white font-bold block">
                      Groq → DeepSeek
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#d01b1b] flex items-center justify-center text-white font-bold text-xs shadow-md">
                    99.9%
                  </div>
                </div>

                {/* Bottom Pill Button */}
                <div className="pt-1">
                  <div className="w-full py-2 rounded-xl bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold text-xs text-center shadow-lg">
                    Production Build
                  </div>
                </div>

              </div>

              {/* Secondary Floating Card Widget on Bottom Left */}
              <div className="absolute bottom-10 left-6 z-20 p-3 rounded-2xl bg-slate-900/90 border border-white/20 text-white text-xs font-mono shadow-2xl backdrop-blur-md">
                <span className="text-[10px] text-amber-300 block font-bold">POWER BI KPI</span>
                <span className="font-bold text-white">Dashboard Insights</span>
              </div>

              {/* Secondary Floating Card Widget on Bottom Right */}
              <div className="absolute bottom-10 right-6 z-20 p-3 rounded-2xl bg-slate-900/90 border border-white/20 text-white text-xs font-mono shadow-2xl backdrop-blur-md">
                <span className="text-[10px] text-purple-300 block font-bold">PYTHON REST API</span>
                <span className="font-bold text-white">Flask &amp; SQLite3</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
