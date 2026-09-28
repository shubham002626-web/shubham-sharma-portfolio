import React, { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { usePageTransition } from './PageTransition';
import { BlurReveal } from './BlurReveal';
import { FooterEasterEgg } from './FooterEasterEgg';
import { sound } from '../utils/sound';

export const Footer: React.FC = () => {
  const { navigateToSection } = usePageTransition();
  const [discoMode, setDiscoMode] = useState(false);
  const [dotHovered, setDotHovered] = useState(false);

  const pages = [
    { label: 'HOME', href: '#home', title: 'SHUBHAM KUMAR SHARMA · HOME' },
    { label: 'ABOUT ME', href: '#about', title: 'TECHNICAL BIO & NIET' },
    { label: 'DISCIPLINES', href: '#services', title: 'CORE DISCIPLINES' },
    { label: 'KEY PROJECTS', href: '#work', title: 'KEY PROJECTS & SYSTEMS' },
    { label: 'MILESTONES', href: '#awards', title: 'HONORS & RECOGNITIONS' },
    { label: 'CONTACT', href: '#contact', title: "GET IN TOUCH" },
  ];

  const socials = [
    { label: 'GITHUB', href: 'https://github.com' },
    { label: 'LINKEDIN', href: 'https://linkedin.com' },
    { label: 'DIRECT EMAIL', href: 'mailto:shubhamkumar002626@gmail.com' },
  ];

  const handlePageClick = (e: React.MouseEvent, href: string, title?: string) => {
    e.preventDefault();
    navigateToSection(href, title);
  };

  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.08] pt-16 sm:pt-24 pb-12 overflow-hidden snap-section">
      {/* Playful Ambient Aurora Disco Glow (when unlocked by Easter Egg) */}
      {discoMode && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-25 bg-gradient-to-r from-red-600 via-amber-500 via-emerald-500 via-cyan-500 via-blue-600 to-purple-600 animate-aurora blur-[90px]"
        />
      )}

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main Grid: Left links/info & Right massive brand signature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-white/[0.08]">
          
          {/* Left Column: Pages & Social Links */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <BlurReveal duration={0.7} blurAmount={8} yOffset={20} className="grid grid-cols-2 gap-8 mb-12">
              
              {/* Pages Column */}
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase block mb-4">
                  PAGES
                </span>
                <ul className="space-y-3">
                  {pages.map((p) => (
                    <li key={p.label}>
                      <a
                        href={p.href}
                        onClick={(e) => handlePageClick(e, p.href, p.title)}
                        className="font-display text-lg sm:text-xl font-bold tracking-wider text-neutral-300 hover:text-[#e51d24] transition-colors uppercase block"
                      >
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media Column */}
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase block mb-4">
                  SOCIAL MEDIA
                </span>
                <ul className="space-y-3">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display text-lg sm:text-xl font-bold tracking-wider text-neutral-300 hover:text-white transition-colors uppercase block"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </BlurReveal>

            {/* Let's Talk Contact Widget */}
            <BlurReveal delay={0.15} duration={0.7} blurAmount={8} yOffset={20} className="glass-panel-ultra rounded-[24px] sm:rounded-[28px] p-6 max-w-md shadow-xl">
              <span className="text-xs font-mono tracking-widest text-[#e51d24] uppercase font-bold block mb-1">
                GET IN TOUCH
              </span>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-display text-2xl font-black uppercase text-white">
                  Shubham Kumar Sharma
                </span>
                <Mail className="w-5 h-5 text-neutral-400" />
              </div>
              <a
                href="#contact"
                onClick={(e) => handlePageClick(e, '#contact', "GET IN TOUCH")}
                className="liquid-glass-btn group flex items-center justify-between pl-5 pr-2 py-2 text-neutral-900 cursor-pointer select-none"
              >
                <span className="font-display tracking-wider text-xs font-black uppercase text-neutral-900">
                  CONNECT / INQUIRE
                </span>
                <div className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </a>
            </BlurReveal>
          </div>

          {/* Right Column: Giant Brandmark & Outro */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between">
            {/* Giant Title */}
            <BlurReveal duration={0.9} blurAmount={12} yOffset={28} className="w-full text-left lg:text-right">
              <span className="font-display text-[58px] sm:text-[88px] md:text-[110px] lg:text-[130px] xl:text-[150px] font-black uppercase tracking-tight text-white leading-none block select-none">
                <span
                  onClick={(e) => handlePageClick(e, '#home', 'SHUBHAM KUMAR SHARMA · PORTFOLIO')}
                  className="cursor-pointer hover:text-neutral-200 transition-colors"
                >
                  SHUBHAM
                </span>
                {/* Hidden Easter Egg Punctuation Dot */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    window.dispatchEvent(
                      new CustomEvent('trigger-bedrock-easter-egg', {
                        detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
                      })
                    );
                  }}
                  onMouseEnter={() => {
                    sound.playHover();
                    setDotHovered(true);
                  }}
                  onMouseLeave={() => setDotHovered(false)}
                  title="✦ Hidden Subterranean Easter Egg: Click Me!"
                  aria-label="Subterranean Easter Egg"
                  className="relative inline-block w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 ml-2 sm:ml-3 align-baseline cursor-pointer transition-all duration-300 hover:scale-130 hover:rotate-45 active:scale-95 group focus:outline-none"
                  style={{
                    backgroundColor: 'var(--accent-primary, #e51d24)',
                    boxShadow: dotHovered
                      ? '0 0 25px var(--accent-primary, #e51d24)'
                      : 'none',
                  }}
                >
                  {dotHovered && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full bg-black/95 border border-white/20 text-[9px] font-mono text-white tracking-widest uppercase pointer-events-none shadow-2xl">
                      CLICK ME ✦
                    </span>
                  )}
                </button>
              </span>
            </BlurReveal>

            <div className="mt-8 text-xs font-mono text-neutral-400 text-left lg:text-right space-y-1">
              <p>NIET DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING (AI)</p>
              <p className="text-neutral-500">GREATER NOIDA, UTTAR PRADESH · INDIA</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} SHUBHAM KUMAR SHARMA · NIET CSE (AI).</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">PRIVACY POLICY</span>
            <span>·</span>
            <span className="hover:text-neutral-400 cursor-pointer">TERMS OF SERVICE</span>
            <span>·</span>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-primary,#e51d24)]">ENGINEERED FOR RIGOR</span>
              <FooterEasterEgg discoMode={discoMode} setDiscoMode={setDiscoMode} />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
