import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowUpRight, FolderGit2, Sparkles, Award, Mail, Terminal, Sun, Moon, Volume2, X, Palette, Navigation } from 'lucide-react';
import { usePageTransition } from './PageTransition';
import { useTheme, ACCENT_PRESETS } from './ThemeContext';
import { sound } from '../utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { navigateToSection } = usePageTransition();
  const { theme, toggleTheme, setAccent, scrollSnap, setScrollSnap, cycleScrollSnap } = useTheme();

  // Listen for Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.playClick();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open in parent
          window.dispatchEvent(new CustomEvent('toggle-command-palette'));
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const commands: CommandItem[] = [
    {
      id: 'home',
      title: 'Home & Systems Architecture Hero',
      category: 'Navigation',
      icon: Terminal,
      action: () => navigateToSection('#home', 'SHUBHAM KUMAR SHARMA · 01'),
      shortcut: 'H',
    },
    {
      id: 'about',
      title: 'About Shubham & NIET Background',
      category: 'Navigation',
      icon: Sparkles,
      action: () => navigateToSection('#about', 'ABOUT SHUBHAM & NIET · 02'),
      shortcut: 'A',
    },
    {
      id: 'work',
      title: 'Key Projects (LINA Agent, Capstone, IoT ESP32)',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => navigateToSection('#work', 'KEY PROJECTS · 03'),
      shortcut: 'W',
    },
    {
      id: 'services',
      title: 'Core Disciplines (AI Agents, Systems, IoT)',
      category: 'Navigation',
      icon: Sparkles,
      action: () => navigateToSection('#services', 'CORE DISCIPLINES · 04'),
      shortcut: 'D',
    },
    {
      id: 'process',
      title: 'Engineering Methodology & Tools',
      category: 'Navigation',
      icon: Terminal,
      action: () => navigateToSection('#process', 'ENGINEERING PROCESS · 05'),
      shortcut: 'P',
    },
    {
      id: 'awards',
      title: 'Academic Honors & Internship Milestones',
      category: 'Navigation',
      icon: Award,
      action: () => navigateToSection('#awards', 'HONORS & MILESTONES · 06'),
    },
    {
      id: 'contact',
      title: 'Get in Touch / Connect with Shubham',
      category: 'Navigation',
      icon: Mail,
      action: () => navigateToSection('#contact', 'GET IN TOUCH · 07'),
      shortcut: 'C',
    },
    {
      id: 'theme',
      title: `Switch Theme to ${theme === 'dark' ? 'Inverted Light' : 'Dark'} Mode`,
      category: 'Preference',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        sound.playClick();
      },
      shortcut: 'T',
    },
    {
      id: 'audio',
      title: 'Toggle Web Audio Soundscapes',
      category: 'Preference',
      icon: Volume2,
      action: () => sound.toggle(),
    },
    {
      id: 'scroll-snap-cycle',
      title: `Cycle CSS Scroll Snap (Current: ${scrollSnap.toUpperCase()})`,
      category: 'Navigation',
      icon: Navigation,
      action: () => {
        cycleScrollSnap();
        sound.playActivate();
      },
      shortcut: 'S',
    },
    {
      id: 'scroll-snap-proximity',
      title: 'Set Scroll Snap: Proximity (Deliberate snap near section headers)',
      category: 'Navigation',
      icon: Navigation,
      action: () => {
        setScrollSnap('proximity');
        sound.playActivate();
      },
    },
    {
      id: 'scroll-snap-mandatory',
      title: 'Set Scroll Snap: Mandatory (Strict snap-to-section navigation)',
      category: 'Navigation',
      icon: Navigation,
      action: () => {
        setScrollSnap('mandatory');
        sound.playActivate();
      },
    },
    {
      id: 'scroll-snap-off',
      title: 'Set Scroll Snap: Free Scroll (Off)',
      category: 'Navigation',
      icon: Navigation,
      action: () => {
        setScrollSnap('off');
        sound.playActivate();
      },
    },
    ...ACCENT_PRESETS.map((p) => ({
      id: `accent-${p.id}`,
      title: `Set Palette: ${p.name}`,
      category: 'Color Palette',
      icon: Palette,
      action: () => {
        setAccent(p.id);
        sound.playClick();
      },
    })),
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleExecute = (cmd: CommandItem) => {
    sound.playClick();
    onClose();
    setTimeout(() => {
      cmd.action();
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop blur layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal palette body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.96, y: -10, filter: 'blur(6px)' }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-xl glass-panel-ultra rounded-[24px] sm:rounded-[32px] shadow-2xl overflow-hidden text-white"
          >
            {/* Header Search Field */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.08] bg-white/[0.03]">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to section, toggle theme, or run action..."
                autoFocus
                className="w-full bg-transparent text-sm sm:text-base font-sans text-white placeholder-neutral-500 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-neutral-800 text-neutral-400 rounded border border-neutral-700">
                ESC
              </kbd>
            </div>

            {/* Commands List */}
            <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => handleExecute(cmd)}
                      onMouseEnter={() => sound.playHover()}
                      className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl hover:bg-neutral-800/80 transition-colors group text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#e51d24] group-hover:border-[#e51d24]/50 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold tracking-wide text-neutral-200 group-hover:text-white">
                            {cmd.title}
                          </div>
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                            {cmd.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {cmd.shortcut && (
                          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400 rounded">
                            {cmd.shortcut}
                          </kbd>
                        )}
                        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center text-neutral-500 text-xs font-mono uppercase tracking-widest">
                  No matching editorial commands found
                </div>
              )}
            </div>

            {/* Footer Telemetry Bar */}
            <div className="px-5 py-2.5 bg-neutral-950 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e51d24] animate-ping" />
                PROFTO PALETTE · STUDIO NAVIGATION
              </span>
              <span className="hidden sm:inline">PRO TIP: PRESS CMD + K ANYWHERE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
