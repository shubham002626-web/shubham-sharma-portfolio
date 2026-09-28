import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ProcessStep } from '../types';
import { BlurReveal } from './BlurReveal';
import { InteractiveTilt } from './InteractiveTilt';
import { TextParallax } from './TextParallax';

export const WorkingProcess: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'PROBLEM ABSTRACTION & DSA DESIGN',
      description:
        'I begin by formulating the algorithmic core, selecting optimal Data Structures, and calculating Big-O time and space complexity bounds before writing a line of code.',
    },
    {
      step: '02',
      title: 'ARCHITECTURE & MEMORY MODELING',
      description:
        'I map Object-Oriented patterns (SOLID), manage low-level C/C++ memory layouts and pointer lifecycles, and design structured JSON stores for state retention.',
    },
    {
      step: '03',
      title: 'AGENT & HARDWARE PROTOTYPING',
      description:
        'I wire local LLM inference via Ollama with custom prompt frameworks, or flash C/C++ firmware to ESP32 microcontrollers to interface with optical sensors.',
    },
    {
      step: '04',
      title: 'BENCHMARKING & SYSTEM VERIFICATION',
      description:
        'I stress-test edge cases, audit packet throughput over EMQX MQTT brokers, verify cryptographic hashing integrity, and produce defense-ready documentation.',
    },
  ];

  const tools = ['JAVA', 'PYTHON', 'C / C++', 'OLLAMA', 'ESP32', 'EMQX', 'DSA', 'OOP'];

  return (
    <section id="process" className="relative py-20 sm:py-28 bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden snap-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Top Header & Tools Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-20 snap-header">
          
          {/* Left: Heading */}
          <BlurReveal duration={0.8} blurAmount={10} yOffset={28} className="lg:col-span-7">
            <span className="text-[#e51d24] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
              ENGINEERING METHODOLOGY
            </span>
            <TextParallax speed={15}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                FROM RAW ALGORITHMS
                <span className="block text-white">TO AUTONOMOUS</span>
                <span className="block text-white">
                  INTELLIGENCE
                  <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#e51d24] ml-2 mb-1" />
                </span>
              </h2>
            </TextParallax>
          </BlurReveal>

          {/* Right: Tools & Action */}
          <BlurReveal delay={0.2} duration={0.7} blurAmount={8} yOffset={20} className="lg:col-span-5 flex flex-col justify-end space-y-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 block mb-3">
                TOOLS I USE:
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono tracking-wider text-neutral-300 font-medium hover:border-[#e51d24]/50 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a
                href="#contact"
                className="liquid-glass-btn group inline-flex items-center gap-3 pl-5 pr-2 py-2 text-neutral-900 cursor-pointer select-none"
              >
                <span className="font-display tracking-wider text-xs font-black uppercase text-neutral-900">
                  CONTACT ME
                </span>
                <div className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </a>
            </div>
          </BlurReveal>

        </div>

        {/* 4 Process Cards (Grid Layout matching video 00:10 - 00:12) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <InteractiveTilt tiltAngle={7} key={item.step} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="h-full glass-panel-ultra rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
              >
                {/* Subtle top indicator */}
                <div className="w-8 h-1 bg-[#e51d24] mb-8 transition-all duration-500 group-hover:w-full" />

                <div>
                  {/* Big Red Number */}
                  <div className="font-display text-5xl sm:text-6xl font-black text-[#e51d24] tracking-tight mb-4 group-hover:scale-105 transition-transform origin-left">
                    {item.step}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mb-3">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-neutral-400 font-sans text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Step indicator dot at bottom */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>PHASE {item.step} OF 04</span>
                  <div className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-[#e51d24] transition-colors" />
                </div>
              </motion.div>
            </InteractiveTilt>
          ))}
        </div>

      </div>
    </section>
  );
};
