import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, Cpu } from 'lucide-react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onFinish(), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white selection:bg-cyan-500"
    >
      {/* Background ambient lighting */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* Animated logo orb */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="relative w-20 h-20 mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,242,254,0.2)]"
        >
          <Cpu className="w-10 h-10 text-cyan-400" />
        </motion.div>

        {/* Brand Name */}
        <h2 className="text-xl font-bold tracking-widest text-slate-200 mb-2 uppercase">
          BS Manoj Gowda
        </h2>
        <p className="text-xs font-mono text-cyan-400/80 tracking-wider mb-6 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 animate-spin" /> INITIALIZING 3D EXPERIENCE...
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900/80 border border-slate-800 rounded-full h-2 overflow-hidden p-0.5 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-[0_0_12px_rgba(0,242,254,0.8)]"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
          />
        </div>

        {/* Counter */}
        <div className="w-full flex justify-between items-center text-xs font-mono text-slate-400 mt-3">
          <span>SYSTEM READY</span>
          <span className="text-cyan-400 font-semibold">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
