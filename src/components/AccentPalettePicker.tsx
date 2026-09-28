import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme, ACCENT_PRESETS, AccentId } from './ThemeContext';
import { sound } from '../utils/sound';

export const AccentPalettePicker: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { accent, setAccent, accentPreset } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: AccentId) => {
    sound.playClick();
    setAccent(id);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Trigger Button with Active Color Pip */}
      <button
        type="button"
        onClick={() => {
          sound.playClick();
          setIsOpen((prev) => !prev);
        }}
        onMouseEnter={() => sound.playHover()}
        title={`Accent Color: ${accentPreset.name}`}
        aria-label="Select Studio Accent Color"
        className="liquid-glass-btn flex items-center gap-1.5 px-3 py-1.5 text-neutral-900 transition-all text-xs group cursor-pointer select-none"
      >
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm transition-transform group-hover:scale-125"
          style={{ backgroundColor: accentPreset.hex, boxShadow: `0 0 8px ${accentPreset.hex}` }}
        />
        <Palette className="w-3.5 h-3.5 text-neutral-800 group-hover:text-black transition-colors" />
        <span className="hidden xl:inline text-[10px] font-mono uppercase font-black tracking-wider text-neutral-900">
          {accentPreset.name.split(' ')[1] || accentPreset.name}
        </span>
      </button>

      {/* Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.94 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 z-50 min-w-[210px] p-2.5 bg-[#121212]/95 backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-2xl"
          >
            <div className="px-2 py-1 mb-1.5 flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-widest border-b border-white/[0.06] pb-1.5">
              <span>Studio Chromatics</span>
              <span className="text-[9px] text-neutral-500">6 PALETTES</span>
            </div>

            <div className="space-y-1">
              {ACCENT_PRESETS.map((preset) => {
                const isActive = preset.id === accent;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelect(preset.id)}
                    onMouseEnter={() => sound.playHover()}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-left text-xs transition-colors cursor-pointer group ${
                      isActive
                        ? 'bg-neutral-800/90 text-white font-semibold'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-3.5 h-3.5 rounded-full transition-transform group-hover:scale-110 flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: preset.hex,
                          boxShadow: isActive ? `0 0 10px ${preset.hex}` : 'none',
                        }}
                      />
                      <span className="font-sans text-[11px]">{preset.name}</span>
                    </div>

                    {isActive && (
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
