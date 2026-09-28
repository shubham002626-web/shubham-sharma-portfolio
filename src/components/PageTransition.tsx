import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { sound } from '../utils/sound';

interface TransitionContextType {
  navigateToSection: (sectionId: string, sectionTitle?: string) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateToSection: () => {},
  isTransitioning: false,
});

export const usePageTransition = () => useContext(TransitionContext);

interface PageTransitionProviderProps {
  children: ReactNode;
}

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [destinationLabel, setDestinationLabel] = useState('');

  const navigateToSection = useCallback((sectionId: string, sectionTitle?: string) => {
    // Clean section id (strip leading hash)
    const cleanId = sectionId.replace(/^#/, '');
    
    // Friendly editorial title mapping
    const titleMap: Record<string, string> = {
      home: 'LUCIANO BLAKE · 01',
      about: 'ABOUT & METHODOLOGY · 02',
      services: 'CREATIVE SERVICES · 03',
      work: 'SELECTED ARCHIVES · 04',
      process: 'CREATIVE PROCESS · 05',
      awards: 'HONORS & RECOGNITION · 06',
      reviews: 'CLIENT TESTIMONIALS · 07',
      contact: "LET'S WORK TOGETHER · 08",
    };

    const label = sectionTitle || titleMap[cleanId] || cleanId.toUpperCase();
    setDestinationLabel(label);
    setIsTransitioning(true);
    sound.playShutter();

    // Timeline:
    // 0.0s - 0.35s: Shutters close inwards with red accent wipe
    // 0.35s: Viewport scrolls smoothly to destination section behind the shutter
    // 0.5s - 0.9s: Shutters wipe open revealing the newly arrived section
    window.setTimeout(() => {
      const targetElement = document.getElementById(cleanId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'auto' });
      } else if (cleanId === 'home') {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 380);

    window.setTimeout(() => {
      setIsTransitioning(false);
    }, 950);
  }, []);

  return (
    <TransitionContext.Provider value={{ navigateToSection, isTransitioning }}>
      {children}
      {/* We mount the PageTransitionOverlay at root */}
      <PageTransitionOverlay isTransitioning={isTransitioning} label={destinationLabel} />
    </TransitionContext.Provider>
  );
};

// Internal PageTransitionOverlay component utilizing motion/react
interface OverlayProps {
  isTransitioning: boolean;
  label: string;
}

const PageTransitionOverlay: React.FC<OverlayProps> = ({ isTransitioning, label }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] pointer-events-auto flex flex-col justify-between">
          {/* Top Matte Shutter */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.77, 0, 0.175, 1], // cinematic cubic-bezier
            }}
            style={{ transformOrigin: 'top' }}
            className={`w-full h-1/2 relative border-b border-[#e51d24]/60 flex items-end justify-center pb-4 ${
              isLight ? 'bg-[#f7f7f5]' : 'bg-[#090909]'
            }`}
          >
            {/* Red Accent Beam along the seam */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e51d24] shadow-[0_0_15px_#e51d24]"
            />
          </motion.div>

          {/* Central Editorial Monogram & Target Section Watermark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -15 }}
            transition={{ duration: 0.3, delay: 0.15, ease: 'easeOut' }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none select-none px-6"
          >
            {/* Top Micro Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#e51d24] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#e51d24] font-bold">
                TRANSITIONING SECTION
              </span>
            </div>

            {/* Giant Bold Section Label */}
            <div
              className={`font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider text-center drop-shadow-2xl ${
                isLight ? 'text-neutral-900' : 'text-white'
              }`}
            >
              {label}
            </div>

            {/* Subtitle brand watermark */}
            <div className="mt-3 flex items-center gap-3 text-neutral-500 font-mono text-[11px] tracking-widest uppercase">
              <span>PROFTO ARCHIVES</span>
              <span>·</span>
              <span>LUCIANO BLAKE STUDIO</span>
            </div>

            {/* Editorial crosshair marks */}
            <div
              className={`absolute top-12 left-12 w-6 h-6 border-t border-l hidden sm:block ${
                isLight ? 'border-neutral-400' : 'border-white/20'
              }`}
            />
            <div
              className={`absolute top-12 right-12 w-6 h-6 border-t border-r hidden sm:block ${
                isLight ? 'border-neutral-400' : 'border-white/20'
              }`}
            />
            <div
              className={`absolute bottom-12 left-12 w-6 h-6 border-b border-l hidden sm:block ${
                isLight ? 'border-neutral-400' : 'border-white/20'
              }`}
            />
            <div
              className={`absolute bottom-12 right-12 w-6 h-6 border-b border-r hidden sm:block ${
                isLight ? 'border-neutral-400' : 'border-white/20'
              }`}
            />
          </motion.div>

          {/* Bottom Matte Shutter */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.77, 0, 0.175, 1],
            }}
            style={{ transformOrigin: 'bottom' }}
            className={`w-full h-1/2 relative border-t border-[#e51d24]/60 flex items-start justify-center pt-4 ${
              isLight ? 'bg-[#f7f7f5]' : 'bg-[#090909]'
            }`}
          >
            {/* Red Accent Beam along the bottom seam */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute top-0 left-0 right-0 h-[2px] bg-[#e51d24] shadow-[0_0_15px_#e51d24]"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
