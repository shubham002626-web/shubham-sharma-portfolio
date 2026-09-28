import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface ScrollProgressProps {
  className?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();

  // Smooth editorial spring interpolation for seamless scrolling feedback
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[2.5px] z-[99] pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Background track hairline */}
      <div className="absolute inset-0 bg-white/[0.04]" />

      {/* Dynamic Animated Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="h-full w-full bg-gradient-to-r from-[#e51d24] via-[#ff3b42] to-[#e51d24] origin-left shadow-[0_0_10px_rgba(229,29,36,0.8)]"
      />
    </div>
  );
};
