import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { sound } from '../utils/sound';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  const handleClick = () => {
    sound.playClick();
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => sound.playHover()}
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={`Switch to ${isLight ? 'Dark' : 'Inverted Light'} mode`}
      className={`liquid-glass-btn relative inline-flex items-center gap-2 px-3 py-1.5 cursor-pointer select-none text-neutral-900 ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {isLight ? (
            <Sun className="w-3.5 h-3.5 text-[#e51d24]" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-neutral-800 group-hover:text-black transition-colors" />
          )}
        </motion.div>
      </div>

      <span className="text-[11px] font-mono tracking-wider uppercase font-black text-neutral-900 select-none">
        {isLight ? 'LIGHT' : 'DARK'}
      </span>

      {/* Pill state indicator dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          isLight ? 'bg-[#e51d24]' : 'bg-neutral-800 group-hover:bg-[#e51d24]'
        }`}
      />
    </button>
  );
};
