import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface CardImageParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // pixel offset range, default 26
  scale?: number; // scale to prevent edge bleed, default 1.18
}

export const CardImageParallax: React.FC<CardImageParallaxProps> = ({
  children,
  className = '',
  speed = 26,
  scale = 1.18,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // As the user scrolls down, the card moves upwards across the screen.
  // Shifting the image from -speed to +speed translates the image downwards
  // relative to the card container, making it move slightly slower than the scroll speed.
  // This produces an authentic, cinematic depth window parallax.
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y }}
        className="w-full h-full will-change-transform transform-gpu origin-center"
        animate={{ scale }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
