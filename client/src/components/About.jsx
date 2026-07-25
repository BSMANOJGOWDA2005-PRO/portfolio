import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, Code, Terminal, Layers, Cpu } from 'lucide-react';

export default function About() {
  const skillBadges = [
    {
      name: 'PYTHON & FLASK',
      desc: 'Backend Systems & REST APIs',
      icon: (
        <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-white font-bold">
          <Terminal className="w-7 h-7 text-white" />
        </div>
      ),
    },
    {
      name: 'REACT & JAVA',
      desc: 'Full-Stack Web Development',
      icon: (
        <div className="w-14 h-14 rounded-full bg-transparent border-2 border-cyan-300 flex items-center justify-center text-cyan-300">
          <Layers className="w-7 h-7 text-white animate-spin-slow" />
        </div>
      ),
    },
    {
      name: 'LLM AI ENGINE',
      desc: 'Groq • OpenAI GPT • GLM • DeepSeek',
      icon: (
        <div className="w-14 h-14 rounded-full bg-transparent border-2 border-yellow-300 flex items-center justify-center text-yellow-300">
          <Cpu className="w-7 h-7 text-yellow-300" />
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#d01b1b] text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Tilted 3D Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm photo-frame-3d">
              {/* Device Frame Border matching Screenshot 2 */}
              <div className="bg-[#1a1c23] p-3 pt-6 rounded-3xl border-4 border-slate-700 shadow-2xl relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>

                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-red-900 border border-slate-700">
                  <img
                    src="/po2.jpeg"
                    alt="BS MANOJ GOWDA"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div>
              <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-4">
                Hello!
              </h2>

              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed font-normal">
                Hi, my name is <strong className="font-bold text-white uppercase">BS MANOJ GOWDA</strong>, a Full-Stack Developer with hands-on experience building and deploying Python/Flask applications, React interfaces, REST APIs, SQL-backed systems, and AI-powered desktop automation tools.
              </p>
            </div>

            {/* Education Card Container */}
            <div className="bg-white/10 border border-white/20 p-6 rounded-3xl backdrop-blur-md space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-white" /> Education
              </h3>

              <div className="space-y-4 border-l-2 border-white/30 pl-4 ml-1">
                <div>
                  <span className="text-xs font-mono text-white/80">2023 – Present</span>
                  <h4 className="text-base font-bold text-white">B.E. in Computer Science &amp; Engineering</h4>
                  <p className="text-xs text-white/90">K.V.G College of Engineering, Sullia — <strong className="text-white">CGPA: 8.5</strong></p>
                </div>

                <div>
                  <span className="text-xs font-mono text-white/80">2021 – 2023</span>
                  <h4 className="text-base font-bold text-white">Class XII (PCMC)</h4>
                  <p className="text-xs text-white/90">Raghavendra Gurukula PU College, Mysuru — <strong className="text-white">Percentage: 90.4%</strong></p>
                </div>
              </div>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {skillBadges.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/20 group hover:bg-white/20 transition-all">
                  <div className="shrink-0 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-white uppercase block">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-white/70 block">
                      {skill.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>

      {/* Curved Bottom Divider Transitioning to White Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-24 text-white fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
