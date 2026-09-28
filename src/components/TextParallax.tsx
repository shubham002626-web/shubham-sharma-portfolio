import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface TextParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // e.g. -40 to 40
}

export const TextParallax: React.FC<TextParallaxProps> = ({
  children,
  className = '',
  speed = 30,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
