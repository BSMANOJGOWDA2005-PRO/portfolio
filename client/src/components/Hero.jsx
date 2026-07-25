import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye, Play, Pause, Volume2, VolumeX, Mail } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#d01b1b]">
      
      {/* Full Hero Video Layer (Bright, Vibrant Studio Backdrop) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          src="/Talking_head_animation_from_frames_202607252337.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle bottom shadow overlay for high contrast text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />
      </div>

      {/* Main Hero Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 flex-1 flex flex-col justify-end pb-16 sm:pb-20">
        <div className="max-w-3xl text-left space-y-4">
          
          {/* Main Name & Title Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-1"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none drop-shadow-lg">
              Hi, I'm BS Manoj Gowda,
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/95 tracking-tight drop-shadow-md">
              Full-Stack Developer &amp; AI Engineer
            </h2>
          </motion.div>

          {/* Subtext Paragraph from Resume */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base sm:text-xl text-white/95 leading-relaxed font-medium max-w-2xl drop-shadow"
          >
            I build fast, scalable applications using Python, Flask, React, Java, REST APIs, Power BI Analytics, and Multi-Provider LLMs (Groq, OpenAI, GLM, DeepSeek).
          </motion.p>

          {/* Row of Solid White Pill Action Buttons for Maximum Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3 pt-3"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white text-[#d01b1b] font-extrabold text-sm hover:bg-red-50 shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white text-[#d01b1b] font-extrabold text-sm hover:bg-red-50 shadow-2xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-[#d01b1b]" />
              <span>Contact Me</span>
            </a>

            <a
              href="/BS_Manoj_Gowda_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-[#d01b1b] font-extrabold text-sm hover:bg-red-50 shadow-2xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Eye className="w-4 h-4 text-[#d01b1b]" />
              <span>View Resume</span>
            </a>

            <a
              href="/BS_Manoj_Gowda_Resume.pdf"
              download="BS_Manoj_Gowda_Resume.pdf"
              className="px-6 py-3 rounded-full bg-white text-[#d01b1b] font-extrabold text-sm hover:bg-red-50 shadow-2xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-[#d01b1b]" />
              <span>Download Resume / CV</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Floating Red Circular Pause/Play Control */}
      <div className="absolute bottom-20 right-8 sm:right-16 z-30 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-red-600 text-white border-2 border-white/60 shadow-2xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer group"
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-6 h-6 text-white ml-0.5 group-hover:scale-110 transition-transform" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/40 shadow-xl flex items-center justify-center hover:bg-black/60 transition-all cursor-pointer"
          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Bottom Center Down Arrow Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="relative z-20 flex justify-center pb-4"
      >
        <a href="#about" aria-label="Scroll to About Section" className="p-2 text-white hover:scale-110 transition-transform">
          <ChevronDown className="w-7 h-7 stroke-[2.5]" />
        </a>
      </motion.div>

    </section>
  );
}
