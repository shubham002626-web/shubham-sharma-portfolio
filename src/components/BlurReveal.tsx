import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface BlurRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blurAmount?: number;
  className?: string;
  threshold?: number;
}

/**
 * Editorial Blur-Up scroll entrance component
 * Elements fade in from yOffset while transitioning from filter: blur(blurAmount) to blur(0px)
 */
export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 24,
  blurAmount = 8,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        filter: `blur(${blurAmount}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier editorial glide
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
