import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface InteractiveTiltProps {
  children: React.ReactNode;
  className?: string;
  tiltAngle?: number;
}

export const InteractiveTilt: React.FC<InteractiveTiltProps> = ({
  children,
  className = '',
  tiltAngle = 10,
}) => {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);
  const [glarePosition, setGlarePosition] = React.useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -tiltAngle;
    const rY = ((x - centerX) / centerX) * tiltAngle;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 24,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {children}

      {/* Dynamic Specular Glare Reflection */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[inherit] overflow-hidden"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.2) 0%, rgba(229,29,36,0.1) 40%, transparent 80%)`,
        }}
      />
    </motion.div>
  );
};
