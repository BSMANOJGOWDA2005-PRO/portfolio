import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2 } from 'lucide-react';

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
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#d01b1b] text-white selection:bg-white selection:text-[#d01b1b]"
    >
      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="relative w-20 h-20 mb-8 flex items-center justify-center rounded-2xl bg-white/10 border border-white/30 shadow-2xl"
        >
          <Code2 className="w-10 h-10 text-white" />
        </motion.div>

        <h2 className="text-2xl font-black tracking-widest text-white mb-2 uppercase">
          BS Manoj Gowda
        </h2>
        <p className="text-xs font-mono text-white/80 tracking-wider mb-6 flex items-center gap-1.5 uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-spin text-white" /> Loading Portfolio System...
        </p>

        <div className="w-full bg-black/20 border border-white/20 rounded-full h-2.5 overflow-hidden p-0.5 shadow-inner">
          <motion.div
            className="h-full bg-white rounded-full shadow-lg"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
          />
        </div>

        <div className="w-full flex justify-between items-center text-xs font-mono text-white/80 mt-3">
          <span>PORTFOLIO SYSTEM</span>
          <span className="text-white font-bold">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
