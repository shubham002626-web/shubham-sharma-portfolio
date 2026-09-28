import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { ShubhamAvatarVisual } from './ShubhamAvatarVisual';
import { usePageTransition } from './PageTransition';
import { BlurReveal } from './BlurReveal';
import { InteractiveTilt } from './InteractiveTilt';
import { TextParallax } from './TextParallax';
import { sound } from '../utils/sound';

export const Hero: React.FC = () => {
  const { navigateToSection } = usePageTransition();
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    return localStorage.getItem('user_portfolio_avatar') || '/avatar.jpg';
  });
  useEffect(() => {
    if (avatarUrl) {
      localStorage.setItem('user_portfolio_avatar', avatarUrl);
    }
  }, [avatarUrl]);


  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen pt-24 sm:pt-28 pb-16 flex flex-col justify-between overflow-hidden snap-section">
      {/* Background Ambient Multi-Tone Chromatic Glows */}
      <div
        className="absolute top-1/4 right-1/4 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full blur-[120px] pointer-events-none opacity-30 transition-all duration-700"
        style={{ backgroundColor: 'var(--accent-primary, #e51d24)' }}
      />
      <div className="absolute top-1/3 left-1/4 w-[280px] h-[280px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[280px] h-[280px] bg-purple-600/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative">
          
          {/* Left Column: Massive Headline */}
          <div className="lg:col-span-6 z-10 flex flex-col justify-center select-none pt-4 lg:pt-0">
            <TextParallax speed={20}>
              <BlurReveal duration={0.9} blurAmount={12} yOffset={32} className="snap-header">
                <h1 className="font-display text-[60px] sm:text-[90px] md:text-[110px] lg:text-[124px] xl:text-[142px] font-black leading-[0.88] tracking-tight uppercase text-white drop-shadow-2xl">
                  SHUBHAM
                  <span className="block text-white relative">
                    KUMAR SHARMA
                    <span
                      className="inline-block w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 ml-2 sm:ml-3 mb-1 sm:mb-2 align-baseline transition-colors duration-500"
                      style={{ backgroundColor: 'var(--accent-primary, #e51d24)' }}
                    />
                  </span>
                </h1>
              </BlurReveal>
            </TextParallax>

            {/* Quick subtitle / role */}
            <BlurReveal delay={0.2} duration={0.7} blurAmount={8} yOffset={20}>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-neutral-300 max-w-lg font-sans tracking-wide font-normal leading-relaxed">
                2nd-year B.Tech in Computer Science & Engineering (Artificial Intelligence) at <span className="text-white font-semibold">NIET</span>. Bridging the gap between low-level C/C++ memory architectures, applied Data Structures & Algorithms, autonomous AI agents (Ollama), and ESP32 IoT telemetry systems.
              </p>
            </BlurReveal>

            {/* Social Icons row (matching bottom left/right in video) */}
            <BlurReveal delay={0.35} duration={0.6} blurAmount={6} yOffset={16}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 text-neutral-400">
                <a
                  href="mailto:shubhamkumar002626@gmail.com"
                  className="glass-pill-badge px-3.5 py-1.5 rounded-full hover:text-white transition-all text-xs font-mono tracking-wider flex items-center gap-2 group cursor-pointer"
                  aria-label="Direct Email"
                >
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] group-hover:bg-[#e51d24] group-hover:text-white transition-all">
                    @
                  </span>
                  <span>Email</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill-badge px-3.5 py-1.5 rounded-full hover:text-white transition-all text-xs font-mono tracking-wider flex items-center gap-2 group cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] group-hover:bg-[#e51d24] group-hover:text-white transition-all font-bold">
                    in
                  </span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill-badge px-3.5 py-1.5 rounded-full hover:text-white transition-all text-xs font-mono tracking-wider flex items-center gap-2 group cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] group-hover:bg-[#e51d24] group-hover:text-white transition-all">
                    gh
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
            </BlurReveal>
          </div>

          {/* Right Column: EXCLUSIVE DEDICATED AVATAR SLOT */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <BlurReveal delay={0.15} duration={0.9} blurAmount={14} yOffset={28} className="w-full max-w-[460px] sm:max-w-[520px]">
              <InteractiveTilt tiltAngle={6} className="w-full rounded-[36px] sm:rounded-[44px]">
                <div className="relative w-full rounded-[36px] sm:rounded-[44px] overflow-hidden glass-panel-ultra p-3 sm:p-4 group">
                  
                  {/* Avatar Frame Container */}
                  <div className="relative aspect-[4/5] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0c0c0e] border border-white/[0.1] shadow-2xl">
                    {avatarUrl ? (
                      <img
                        src={avatarUrl}
                        alt="Shubham Kumar Sharma - Avatar"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full relative">
                        <ShubhamAvatarVisual
                          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                          alt="Shubham Kumar Sharma"
                        />
                        {/* Status Overlay Pill */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="glass-pill-badge px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase text-white/90 flex items-center gap-1.5 shadow-lg">
                            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                            SHUBHAM KUMAR SHARMA
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Corner Reticle Brackets */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/40 pointer-events-none z-20" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/40 pointer-events-none z-20" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/40 pointer-events-none z-20" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/40 pointer-events-none z-20" />


                  </div>

                </div>
              </InteractiveTilt>
            </BlurReveal>
          </div>

        </div>
      </div>

      {/* Floating Rotating Circle Badge at the bottom center (matches video at 00:02 - 00:04) */}
      <div className="relative z-20 flex justify-center mt-6 lg:-mt-10">
        <div
          className="relative group cursor-pointer"
          onClick={() => navigateToSection('work', 'SELECTED WORK ARCHIVES')}
        >
          {/* Circular Badge Body */}
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: 'var(--accent-primary, #e51d24)',
              boxShadow: '0 10px 30px -5px var(--accent-glow, rgba(229, 29, 36, 0.4))',
            }}
          >
            {/* Center 4-Point Star Icon */}
            <div className="text-white text-lg sm:text-xl font-bold select-none">
              ✦
            </div>

            {/* Rotating Rim SVG Text */}
            <div className="absolute inset-0 animate-spin-slow pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <path
                  id="badgePath"
                  d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                  fill="none"
                />
                <text className="text-[8.5px] font-bold uppercase tracking-[0.22em] fill-white select-none">
                  <textPath href="#badgePath" startOffset="0%">
                    ★ CSE (AI) @ NIET ★ AUTONOMOUS AGENTS ★ IOT TELEMETRY ★
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
