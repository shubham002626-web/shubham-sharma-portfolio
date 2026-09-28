import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useTheme } from './ThemeContext';

type CursorVariant = 'default' | 'pointer' | 'image' | 'text' | 'button' | 'hidden';

export const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring with editorial weight and damping
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch-only devices to avoid intrusive cursor on smartphones/tablets
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for custom cursor attributes or element types
      const clickable = target.closest('button, a, input, select, textarea, [role="button"]');
      const imageOrVisual = target.closest(
        '[role="img"], img, svg, .group\\/visual, [data-cursor="view"], [data-cursor-image]'
      );
      const isProjectCard = target.closest('#work .group, [data-project-card]');

      if (clickable) {
        setCursorVariant('pointer');
        setCursorText('');
      } else if (isProjectCard) {
        setCursorVariant('image');
        setCursorText('VIEW');
      } else if (imageOrVisual && !target.closest('header, nav, button, a')) {
        setCursorVariant('image');
        setCursorText('EXPLORE');
      } else if (target.closest('p, h1, h2, h3, h4, span')) {
        setCursorVariant('default');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorVariant('hidden');
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      setCursorVariant('default');
    };

    const handleMouseDown = () => {
      setCursorVariant((prev) => (prev === 'image' ? 'image' : 'pointer'));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice) {
    return null;
  }

  // Variant animations for the outer ring
  const ringVariants = {
    default: {
      width: 36,
      height: 36,
      borderColor: isLight ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.35)',
      backgroundColor: 'rgba(229, 29, 36, 0.04)',
      scale: 1,
    },
    pointer: {
      width: 58,
      height: 58,
      borderColor: '#e51d24',
      backgroundColor: isLight ? 'rgba(229, 29, 36, 0.08)' : 'rgba(229, 29, 36, 0.12)',
      scale: 1.15,
    },
    image: {
      width: 82,
      height: 82,
      borderColor: '#ffffff',
      backgroundColor: 'rgba(229, 29, 36, 0.85)',
      scale: 1,
    },
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
      scale: 0,
    },
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* 1. Precise Instant Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#e51d24] shadow-[0_0_10px_#e51d24]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible && cursorVariant !== 'image' ? 1 : 0,
        }}
        transition={{ duration: 0.08 }}
      />

      {/* 2. Magnetic Smooth Lag Outer Editorial Frame */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-dashed flex items-center justify-center backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={cursorVariant}
        variants={ringVariants}
        transition={{
          type: 'spring',
          stiffness: 320,
          damping: 24,
        }}
      >
        {/* Inner Label for Case Studies & Images */}
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[10px] font-mono font-black tracking-widest text-white uppercase text-center"
          >
            {cursorText}
          </motion.span>
        )}

        {/* Subtle corner crosshairs on pointer hover */}
        {cursorVariant === 'pointer' && !cursorText && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-[#e51d24]"
          />
        )}
      </motion.div>
    </div>
  );
};
