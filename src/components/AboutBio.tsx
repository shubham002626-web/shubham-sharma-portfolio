import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Layers, ShieldCheck, Binary, Sparkles } from 'lucide-react';
import { BlurReveal } from './BlurReveal';

interface SkillBar {
  label: string;
  percentage: number;
}

export const AboutBio: React.FC = () => {
  const skills: SkillBar[] = [
    { label: 'DATA STRUCTURES & ALGORITHMS (DSA)', percentage: 92 },
    { label: 'PYTHON & AI AGENT ORCHESTRATION (OLLAMA)', percentage: 90 },
    { label: 'JAVA & OBJECT-ORIENTED PROGRAMMING (OOP)', percentage: 88 },
    { label: 'C / C++ & LOW-LEVEL MEMORY MANAGEMENT', percentage: 85 },
    { label: 'IOT & SENSOR TELEMETRY (ESP32 / MQTT / EMQX)', percentage: 84 },
  ];

  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-28 bg-[#0a0a0a] overflow-hidden border-t border-white/[0.06] snap-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Interactive Systems Matrix Console (No Photo) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <BlurReveal duration={0.8} blurAmount={10} yOffset={28} className="mb-8 snap-header">
              <span className="text-[#e51d24] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
                ABOUT ME & BACKGROUND
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                BRIDGING LOW-LEVEL CODE,
                <span className="block text-white">
                  AUTONOMOUS INTELLIGENCE
                  <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#e51d24] ml-2 mb-1" />
                </span>
              </h2>
            </BlurReveal>

            {/* Architectural Systems Matrix Console Panel (Replacing photo) */}
            <BlurReveal delay={0.2} duration={0.8} blurAmount={12} yOffset={24}>
              <div className="glass-panel-ultra rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e51d24] animate-ping" />
                    <span className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase">
                      SYSTEM ARCHITECTURE CORE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">
                    NIET CSE (AI) · VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/[0.06]">
                    <Binary className="w-5 h-5 text-[#e51d24] mb-2" />
                    <span className="text-xs font-mono font-bold text-white block uppercase">ALGORITHMIC RIGOR</span>
                    <span className="text-[11px] font-sans text-neutral-400 mt-1 block">
                      Deterministic time & space Big-O optimization.
                    </span>
                  </div>

                  <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/[0.06]">
                    <Terminal className="w-5 h-5 text-[#10b981] mb-2" />
                    <span className="text-xs font-mono font-bold text-white block uppercase">LOCAL LLM AGENTS</span>
                    <span className="text-[11px] font-sans text-neutral-400 mt-1 block">
                      Self-contained inference pipelines via Ollama.
                    </span>
                  </div>

                  <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/[0.06]">
                    <Cpu className="w-5 h-5 text-[#3b82f6] mb-2" />
                    <span className="text-xs font-mono font-bold text-white block uppercase">IOT FIRMWARE</span>
                    <span className="text-[11px] font-sans text-neutral-400 mt-1 block">
                      Real-time ESP32 telemetry with EMQX MQTT brokers.
                    </span>
                  </div>

                  <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/[0.06]">
                    <Layers className="w-5 h-5 text-[#f59e0b] mb-2" />
                    <span className="text-xs font-mono font-bold text-white block uppercase">OOP & MEMORY</span>
                    <span className="text-[11px] font-sans text-neutral-400 mt-1 block">
                      SOLID Java structures and low-level C memory pointers.
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#e51d24]" />
                    <span>CONTINUOUS ENGINEERING</span>
                  </span>
                  <span className="text-white font-bold">2025 - PRESENT</span>
                </div>
              </div>
            </BlurReveal>
          </div>

          {/* Right Column: MY BIO & Interactive Animated Skill Bars */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-2 lg:pt-6">
            <BlurReveal delay={0.15} duration={0.7} blurAmount={8} yOffset={20} className="mb-8 sm:mb-10">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide mb-4">
                TECHNICAL BIOGRAPHY
              </h3>
              <p className="text-neutral-300 font-sans text-base sm:text-lg leading-relaxed font-normal">
                I am a 2nd-year B.Tech undergraduate in Computer Science and Engineering (Artificial Intelligence) at <span className="text-white font-medium">Noida Institute of Engineering and Technology (NIET)</span>. Rather than treating AI as an isolated black box or hardware as purely mechanical, my engineering practice bridges the entire vertical stack: from low-level C memory pointers, Object-Oriented Programming (OOP), and rigorous Data Structures & Algorithms, to autonomous conversational AI agents (Ollama), prompt framework design, and connected ESP32 telemetry hardware.
              </p>
            </BlurReveal>

            {/* Skill Bars with Animated Width & Tabular Percentages */}
            <div className="space-y-6 sm:space-y-7">
              {skills.map((skill, index) => (
                <div key={skill.label} className="group">
                  <div className="flex justify-between items-center mb-2 text-xs sm:text-sm font-bold tracking-wider text-white">
                    <span className="group-hover:text-[#e51d24] transition-colors">{skill.label}</span>
                    <span className="font-mono tabular-nums text-neutral-300 text-xs sm:text-sm">
                      {inView ? `${skill.percentage}%` : '0%'}
                    </span>
                  </div>
                  
                  {/* Thin Track Container */}
                  <div className="h-1.5 sm:h-2 w-full bg-neutral-900 rounded-none overflow-hidden relative border border-white/[0.05]">
                    <motion.div
                      className="h-full bg-[#e51d24] relative"
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${skill.percentage}%` : '0%' }}
                      transition={{
                        duration: 1.1,
                        delay: index * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {/* Glow tip */}
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/70 shadow-[0_0_8px_#fff]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-10 mt-8 border-t border-white/[0.08]">
              <div className="glass-panel-ultra p-3 sm:p-4 rounded-2xl">
                <span className="font-display text-3xl sm:text-4xl font-black text-white block">2nd</span>
                <span className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase">Year B.Tech CSE (AI)</span>
              </div>
              <div className="glass-panel-ultra p-3 sm:p-4 rounded-2xl">
                <span className="font-display text-3xl sm:text-4xl font-black text-[#e51d24] block">NIET</span>
                <span className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase">Premier Tech Institute</span>
              </div>
              <div className="glass-panel-ultra p-3 sm:p-4 rounded-2xl">
                <span className="font-display text-3xl sm:text-4xl font-black text-white block">5+</span>
                <span className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase">Engineering Systems</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
