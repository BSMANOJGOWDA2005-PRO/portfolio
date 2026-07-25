import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Bot } from 'lucide-react';

export default function VideoAvatar() {
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

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative group w-full max-w-sm sm:max-w-md mx-auto"
    >
      {/* Radiant Glow Behind Frame */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse-slow" />

      {/* Outer Glass Frame */}
      <div className="relative rounded-3xl bg-slate-900/80 border border-cyan-500/30 overflow-hidden shadow-2xl backdrop-blur-xl">
        
        {/* Header Bar */}
        <div className="px-4 py-2.5 bg-slate-950/70 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-400 font-semibold flex items-center gap-1">
              <Bot className="w-3.5 h-3.5" /> AI AVATAR DEMO
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>NEURAL GENERATION</span>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative aspect-square sm:aspect-[4/5] bg-black overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            src="/Talking_head_animation_from_frames_202607252337.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover object-center filter saturate-110 contrast-105"
          />

          {/* Holographic Scanline Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none opacity-50" />

          {/* Quick Control Bar Overlay */}
          <div className="absolute bottom-3 left-3 right-3 px-3 py-2 bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-white opacity-90 group-hover:opacity-100 transition-opacity">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-lg hover:bg-cyan-500/20 text-cyan-400 transition-colors"
              title={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <span className="text-[11px] font-mono text-slate-300 tracking-wider">
              BS MANOJ GOWDA (AI)
            </span>

            <div className="flex items-center gap-1">
              <button
                onClick={toggleMute}
                className="p-1.5 rounded-lg hover:bg-cyan-500/20 text-cyan-400 transition-colors"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={handleFullscreen}
                className="p-1.5 rounded-lg hover:bg-purple-500/20 text-purple-400 transition-colors"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Badge */}
        <div className="px-4 py-2 bg-slate-950/90 text-center border-t border-white/5">
          <p className="text-[11px] font-mono text-slate-400">
            Rendered with Deep AI Video Generation Framework
          </p>
        </div>
      </div>
    </motion.div>
  );
}
