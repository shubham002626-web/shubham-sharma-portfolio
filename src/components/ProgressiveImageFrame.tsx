import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

interface ProgressiveImageFrameProps {
  children: React.ReactNode;
  aspectRatio?: string;
  className?: string;
  lowResThumbnailColor?: string;
  delay?: number;
  altText?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
}

export const ProgressiveImageFrame: React.FC<ProgressiveImageFrameProps> = ({
  children,
  aspectRatio = 'aspect-[16/10]',
  className = '',
  lowResThumbnailColor = '#140507',
  delay = 0,
  altText = 'Visual frame',
  parallax = false,
  parallaxSpeed = 22,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax effect: as the card moves up with page scroll,
  // the inner image translates downwards from -parallaxSpeed to +parallaxSpeed.
  // This makes the image travel slightly slower than the scroll speed,
  // creating a natural, three-dimensional viewport depth effect.
  const y = useTransform(scrollYProgress, [0, 1], [-parallaxSpeed, parallaxSpeed]);

  useEffect(() => {
    // Simulate high-fidelity asset decodes and progressive render
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 180 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${aspectRatio} ${className}`}
      role="img"
      aria-label={altText}
    >
      {/* 1. Low-frequency Blur-Up Skeleton/Placeholder Layer */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: lowResThumbnailColor }}
          >
            {/* Ambient low-res blurred luminous color blobs */}
            <div className="absolute inset-0 bg-radial from-[#e51d24]/30 via-[#50080c]/20 to-black/80 blur-xl scale-125" />

            {/* Shimmer sweep effect */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transform -skew-x-12"
            />

            {/* Micro editorial loading watermark */}
            <div className="relative z-20 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e51d24] animate-ping" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold">
                RENDERING ASSET
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Full-Resolution Sharp Visual Content with Blur-Up Transition and Parallax Layer */}
      <motion.div
        style={parallax ? { y } : undefined}
        className={`w-full h-full ${
          parallax ? 'scale-[1.18] will-change-transform transform-gpu origin-center' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, filter: 'blur(16px)', scale: 1.05 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            filter: isLoaded ? 'blur(0px)' : 'blur(16px)',
            scale: isLoaded ? 1 : 1.05,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1], // cinematic bezier curve
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
