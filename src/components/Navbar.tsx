import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Play, Command } from 'lucide-react';
import { usePageTransition } from './PageTransition';
import { ThemeToggle } from './ThemeToggle';
import { AudioToggle } from './AudioToggle';
import { AccentPalettePicker } from './AccentPalettePicker';
import { sound } from '../utils/sound';

interface NavbarProps {
  onOpenContact?: () => void;
  onReplayIntro?: () => void;
  onOpenPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onReplayIntro, onOpenPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateToSection } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', title: 'SHUBHAM KUMAR SHARMA · HOME' },
    { label: 'ABOUT ME', href: '#about', title: 'ABOUT & BIO' },
    { label: 'WORK', href: '#work', title: 'KEY PROJECTS' },
    { label: 'DISCIPLINES', href: '#services', title: 'CORE DISCIPLINES' },
    { label: 'PROCESS', href: '#process', title: 'ENGINEERING PROCESS' },
    { label: 'CONTACT', href: '#contact', title: "GET IN TOUCH" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string, title?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateToSection(href, title);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/75 backdrop-blur-2xl border-b border-white/[0.12] py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5 sm:py-6'
      }`}
      style={{
        boxShadow: scrolled
          ? '0 10px 30px -10px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.08) inset'
          : undefined,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark with Red Square Dot */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', 'SHUBHAM KUMAR SHARMA · PORTFOLIO')}
          className="flex items-center gap-1.5 group"
        >
          <span className="font-display text-2xl sm:text-3xl font-black tracking-wider text-white group-hover:text-neutral-200 transition-colors">
            SHUBHAM
          </span>
          <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#e51d24] mt-1" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.title)}
              className="text-xs lg:text-[13px] font-semibold tracking-widest text-neutral-300 hover:text-white transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e51d24] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Theme Switcher: GET IN TOUCH */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Command Palette Launcher */}
          {onOpenPalette && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenPalette();
              }}
              title="Command Palette (Cmd+K)"
              className="liquid-glass-btn flex items-center gap-1.5 px-3 py-1.5 text-neutral-900 transition-all text-xs group cursor-pointer select-none"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-neutral-800 group-hover:text-black" />
              <span className="font-mono text-[10px] font-bold text-neutral-700 group-hover:text-black">⌘K</span>
            </button>
          )}

          {/* Web Audio Feedback Toggle */}
          <AudioToggle />

          {/* Replay Intro Animation Button */}
          {onReplayIntro && (
            <button
              onClick={() => {
                sound.playClick();
                onReplayIntro();
              }}
              title="Replay Intro Preloader Animation"
              className="liquid-glass-btn p-2 rounded-full text-neutral-900 transition-all text-xs flex items-center justify-center group cursor-pointer select-none"
              aria-label="Replay Intro Animation"
            >
              <Play className="w-3.5 h-3.5 group-hover:scale-110 text-[#e51d24] transition-transform" />
            </button>
          )}

          {/* Studio Chromatics Accent Palette Picker */}
          <AccentPalettePicker />

          {/* Editorial Theme Switcher */}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <AccentPalettePicker />
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white hover:text-[#e51d24] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0c]/98 border-b border-neutral-800 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.title)}
                className="text-base font-semibold tracking-widest text-neutral-300 hover:text-[#e51d24] py-2 border-b border-neutral-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex justify-between items-center text-xs text-neutral-500 font-mono">
              <span>AVAILABLE FOR WORK</span>
              <span className="text-[#e51d24] font-bold">2026/2027</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
