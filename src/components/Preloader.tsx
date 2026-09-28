import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { sound } from '../utils/sound';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ARCHITECTURE');

  useEffect(() => {
    // Counter animation from 0 to 100 with dynamic cadence
    let current = 0;
    const interval = setInterval(() => {
      // Non-linear acceleration for authentic high-end loading feel
      const increment = current < 30 ? 3 : current < 75 ? 5 : current < 92 ? 4 : 2;
      current += increment;

      if (current >= 100) {
        current = 100;
        setCount(100);
        setStatusText('ENTER PORTFOLIO');
        sound.playShutter();
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 550);
      } else {
        setCount(current);
        if (current > 30 && current <= 60) {
          setStatusText('CALIBRATING TELEMETRY & DESIGN ASSETS');
        } else if (current > 60 && current < 95) {
          setStatusText('SYNCING HIGH-FREQUENCY EDITORIAL GRID');
        }
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: {
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1], // Cinematic curtain reveal bezier
        },
      }}
      className="fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-12 md:p-16 bg-[#080808] text-white select-none overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-6 sm:left-12 md:left-16 top-0 bottom-0 w-[1px] bg-white/[0.05]" />
        <div className="absolute right-6 sm:right-12 md:right-16 top-0 bottom-0 w-[1px] bg-white/[0.05]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden md:block" />
        
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e51d24]/10 rounded-full blur-[140px]" />
      </div>

      {/* Top Meta Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#e51d24] animate-ping" />
          <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase font-semibold">
            LUCIANO BLAKE · PROFTO
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs tracking-widest text-neutral-500 uppercase hidden sm:block"
        >
          NEW YORK · TOKYO · LONDON
        </motion.div>
      </div>

      {/* Center Cinematic Typography & Brand Reveal */}
      <div className="relative z-10 my-auto py-12">
        <div className="overflow-hidden mb-3">
          <motion.div
            initial={{ y: '100%', filter: 'blur(10px)' }}
            animate={{ y: '0%', filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-baseline gap-3"
          >
            <span className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#e51d24] font-bold">
              CSE (ARTIFICIAL INTELLIGENCE) · NIET
            </span>
            <span className="h-[1px] flex-1 max-w-[80px] bg-[#e51d24]/50 hidden sm:block" />
            <span className="font-mono text-xs text-neutral-500">2026</span>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%', filter: 'blur(14px)' }}
            animate={{ y: '0%', filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none"
          >
            SHUBHAM<br />
            <span className="text-neutral-400 group-hover:text-white transition-colors">
              KUMAR SHARMA
            </span>
            <span className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#e51d24] ml-3 align-baseline" />
          </motion.h1>
        </div>
      </div>

      {/* Bottom Counter & Dynamic Progress Bar */}
      <div className="relative z-10">
        <div className="flex items-end justify-between mb-4">
          <div className="space-y-1">
            <span className="font-mono text-[11px] sm:text-xs text-neutral-400 uppercase tracking-widest block font-medium">
              {statusText}
            </span>
            <span className="font-mono text-[10px] text-neutral-600 block">
              ENGINEERED AT THE NEXUS OF SYSTEMS, AGENTS & HARDWARE
            </span>
          </div>

          <div className="flex items-baseline font-display">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter">
              {count < 10 ? `0${count}` : count}
            </span>
            <span className="text-sm sm:text-base font-mono text-[#e51d24] font-bold ml-1">
              %
            </span>
          </div>
        </div>

        {/* High-Precision Rounded Hairline Progress Bar */}
        <div className="w-full h-1 sm:h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-white/[0.05]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-[#800d11] via-[#e51d24] to-[#ff474d] rounded-full shadow-[0_0_12px_rgba(229,29,36,0.8)]"
          />
        </div>
      </div>
    </motion.div>
  );
};
