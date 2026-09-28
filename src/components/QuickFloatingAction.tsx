import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { sound } from '../utils/sound';
import { usePageTransition } from './PageTransition';

export const QuickFloatingAction: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [inContactZone, setInContactZone] = useState(false);
  const { navigateToSection } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        // User has arrived at the contact section if its top is near or above viewport center
        setInContactZone(rect.top <= window.innerHeight * 0.6 && rect.bottom >= 100);
      }
      setScrolled(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetInTouch = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playClick();
    navigateToSection('#contact', "LET'S WORK TOGETHER");
  };

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5">
      {/* Persistent "GET IN TOUCH" Button Located Down at Bottom */}
      {!inContactZone && (
        <motion.button
          type="button"
          onClick={handleGetInTouch}
          onMouseEnter={() => sound.playHover()}
          initial={{ opacity: 0, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.9 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Get In Touch - Go down to contact section"
          className="liquid-glass-btn group flex items-center gap-3 pl-5 pr-2 py-2 text-neutral-900 cursor-pointer select-none"
        >
          <span className="font-display tracking-wider text-xs sm:text-sm font-black uppercase text-neutral-900">
            GET IN TOUCH
          </span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 group-hover:translate-y-0.5 group-hover:rotate-45">
            <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </div>
        </motion.button>
      )}

      {/* Return to Top button (visible after scrolling down) */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            title="Return to top"
            aria-label="Return to top"
            className="w-10 h-10 rounded-full bg-[#121212]/95 backdrop-blur-xl border border-white/[0.14] flex items-center justify-center text-neutral-300 hover:text-white hover:border-[var(--accent-primary,#e51d24)] active:scale-95 transition-all shadow-xl cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
