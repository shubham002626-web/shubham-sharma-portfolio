import React from 'react';
import { Trophy, Award as AwardIcon, Star, Medal, Crown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Award } from '../types';
import { BlurReveal } from './BlurReveal';
import { InteractiveTilt } from './InteractiveTilt';
import { TextParallax } from './TextParallax';

export const Awards: React.FC = () => {
  const awardsList: (Award & { icon: React.ElementType; color: string })[] = [
    {
      id: '1',
      title: 'B.TECH CSE (AI) SCHOLAR',
      year: '2025 - PRESENT',
      category: 'NOIDA INSTITUTE OF ENG. & TECH. (NIET)',
      color: '#f59e0b',
      description:
        'Pursuing B.Tech in Computer Science and Engineering (Artificial Intelligence) with distinction in Data Structures, Algorithms, and Object-Oriented systems.',
      icon: Trophy,
    },
    {
      id: '2',
      title: 'CODSOFT JAVA INTERNSHIP',
      year: '2025',
      category: 'VIRTUAL SOFTWARE ENGINEERING',
      color: '#3b82f6',
      description:
        'Awarded internship completion and commendation for engineering 3 production-grade Java applications: ATM Banking Interface, Course Manager, and Quiz Engine.',
      icon: AwardIcon,
    },
    {
      id: '3',
      title: 'CAPSTONE DEFENSE: APPLIED DSA',
      year: '2025',
      category: 'ACADEMIC CAPSTONE',
      color: '#06b6d4',
      description:
        'Successfully architected and defended the Digital Certification Verification and Management System utilizing applied algorithmic indexing and cryptographic hashing.',
      icon: Star,
    },
    {
      id: '4',
      title: 'DISASTER POLICY RESEARCH LEAD',
      year: '2025',
      category: 'POLICY ANALYSIS & LOGISTICS',
      color: '#f97316',
      description:
        'Led a collaborative research team formulating optimal multi-pillar resource distribution (Housing, Healthcare, WASH) following devastating flood damage in Nepal.',
      icon: Medal,
    },
    {
      id: '5',
      title: 'EMBEDDED IOT ARCHITECTURE VALIDATION',
      year: '2025',
      category: 'HARDWARE & TELEMETRY',
      color: '#10b981',
      description:
        'Engineered and validated real-time optical telemetry streaming on ESP32 microcontrollers with sub-second transmission over EMQX cloud MQTT message brokers.',
      icon: Crown,
    },
    {
      id: '6',
      title: 'AUTONOMOUS AGENT BENCHMARK',
      year: '2025 - PRESENT',
      category: 'AI & LOCAL INFERENCE',
      color: '#a855f7',
      description:
        'Developed LINA, achieving 100% privacy-first local LLM inference via Ollama with multi-turn JSON memory persistence and deterministic prompt routing.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="awards" className="relative py-20 sm:py-28 bg-[#0c0c0c] border-t border-white/[0.06] overflow-hidden snap-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header (Centered as in video) */}
        <BlurReveal duration={0.8} blurAmount={10} yOffset={28} className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 snap-header">
          <span className="text-[#e51d24] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            HONORS & MILESTONES
          </span>
          <TextParallax speed={16}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
              RECOGNITION OF RIGOR
              <span className="block text-white">
                & TECHNICAL MASTERY
                <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#e51d24] ml-2 mb-1" />
              </span>
            </h2>
          </TextParallax>
        </BlurReveal>

        {/* 2-Column Grid of 6 Award Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {awardsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <InteractiveTilt tiltAngle={6} key={item.id} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="h-full glass-panel-ultra rounded-[24px] sm:rounded-[28px] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group relative"
                  style={{
                    borderColor: undefined,
                  }}
                >
                  {/* Top Row: Title + Year + Icon Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                          style={{
                            backgroundColor: item.color,
                            boxShadow: `0 0 8px ${item.color}`,
                          }}
                        />
                        <span className="text-xs font-mono text-neutral-400">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-wide transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Year Tag & Custom Badge Icon */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs font-bold text-neutral-300 glass-pill-badge px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <div
                        className="w-9 h-9 rounded-full glass-pill-badge flex items-center justify-center transition-all duration-300 group-hover:rotate-12"
                        style={{
                          color: item.color,
                          borderColor: `${item.color}60`,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom subtle accent line with item color */}
                  <div
                    className="w-full h-[1px] mt-6 transition-colors duration-300 opacity-40 group-hover:opacity-100"
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              </InteractiveTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
};
