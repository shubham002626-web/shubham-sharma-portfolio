import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EditorialVisual } from './EditorialVisual';
import { BlurReveal } from './BlurReveal';
import { ProgressiveImageFrame } from './ProgressiveImageFrame';
import { InteractiveTilt } from './InteractiveTilt';
import { TextParallax } from './TextParallax';
import { sound } from '../utils/sound';

interface ServiceItem {
  id: string;
  variant: 'service-model-1' | 'service-model-2' | 'service-model-3' | 'service-model-4';
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  color: string;
}

export const CreativeServices: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'ai-agents',
      variant: 'service-model-1',
      title: 'AUTONOMOUS AI AGENTS',
      subtitle: 'Local LLMs & Prompt Engineering',
      tagline: 'Self-learning conversational architectures with zero cloud reliance',
      color: '#10b981',
      description:
        'Architecting self-learning, context-aware AI agents utilizing Python, structured JSON memory persistence, and local Ollama model execution. Designed for zero-cloud latency, strict data privacy, and deterministic task routing via prompt framework design.',
      deliverables: [
        'Custom Conversational AI Agents (LINA)',
        'Local LLM Ingestion & Inference via Ollama',
        'Stateful Context & Local JSON Memory',
        'Deterministic Prompt Frameworks & RAG',
      ],
    },
    {
      id: 'core-cs',
      variant: 'service-model-2',
      title: 'CORE CS & SYSTEMS',
      subtitle: 'DSA & Low-Level Memory',
      tagline: 'Engineered for computational rigor, time complexity, and memory safety',
      color: '#3b82f6',
      description:
        'Engineering high-performance software grounded in foundational Computer Science. Applying Data Structures & Algorithms, Object-Oriented Principles (SOLID), and low-level memory structures in C/C++ and Java to solve complex computational bottlenecks.',
      deliverables: [
        'Data Structures & Algorithms (DSA) Optimization',
        'Low-Level C/C++ Memory Structures & Pointers',
        'Java OOP Enterprise Systems (CodSoft Suite)',
        'Asymptotic Space/Time Complexity Benchmarking',
      ],
    },
    {
      id: 'iot-telemetry',
      variant: 'service-model-3',
      title: 'IOT & TELEMETRY',
      subtitle: 'ESP32 & Real-Time Sensors',
      tagline: 'Edge firmware integrated with high-frequency MQTT message brokers',
      color: '#f59e0b',
      description:
        'Designing end-to-end edge-to-cloud hardware telemetry systems. Writing optimized firmware in C/C++ on ESP32 microcontrollers to interface with optical telemetry sensors and stream packets over EMQX cloud message brokers with sub-second latency.',
      deliverables: [
        'ESP32 Microcontroller Firmware (C/C++)',
        'Optical Telemetry Sensor Integration',
        'EMQX Cloud MQTT Broker Pipeline',
        'Edge Packet Parsing & Fault-Tolerant Streaming',
      ],
    },
    {
      id: 'modeling-capstone',
      variant: 'service-model-4',
      title: 'MODELING & VERIFICATION',
      subtitle: 'Policy Logistics & Applied DSA',
      tagline: 'Analytical optimization and cryptographic academic credentials',
      color: '#a855f7',
      description:
        'Applying analytical modeling to solve multi-variable real-world challenges. From modeling humanitarian disaster relief resource distribution following flood damage in Nepal to engineering secure capstone digital certificate verification engines.',
      deliverables: [
        'Digital Certificate Verification Capstone (Applied DSA)',
        'Disaster Response Logistics & Resource Allocation Modeling',
        'Cross-Disciplinary Team Leadership & Coordination',
        'Technical Defense, Documentation & Research Analysis',
      ],
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const active = services[activeIdx];

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#0a0a0a] overflow-hidden snap-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 snap-header">
          <BlurReveal duration={0.8} blurAmount={10} yOffset={28}>
            <span className="text-[#e51d24] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
              CORE DISCIPLINES & EXPERTISE
            </span>
            <TextParallax speed={15}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                ARCHITECTING FROM
                <span className="block text-white">
                  SILICON TO COGNITION
                  <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#e51d24] ml-2 mb-1" />
                </span>
              </h2>
            </TextParallax>
          </BlurReveal>

          <BlurReveal delay={0.2} duration={0.6} blurAmount={8} yOffset={16} className="flex items-center gap-4">
            <button
              onClick={() => setModalService(active)}
              className="group flex items-center gap-3 pl-5 pr-2 py-2 rounded-full border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 hover:border-neutral-500 transition-all text-xs font-semibold tracking-wider text-white"
            >
              <span>DISCIPLINE SPECS</span>
              <div className="w-7 h-7 rounded-full bg-[#e51d24] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </BlurReveal>
        </div>

        {/* 4 Interactive Thumbnails (matching the video's 4 small cards above/beside the service) */}
        <BlurReveal delay={0.15} duration={0.7} blurAmount={8} yOffset={20}>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mb-12">
            {services.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  setActiveIdx(idx);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`relative aspect-square rounded-[18px] sm:rounded-[20px] overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                  activeIdx === idx
                    ? 'scale-105 shadow-xl'
                    : 'border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-600'
                }`}
                style={{
                  borderColor: activeIdx === idx ? item.color : undefined,
                  boxShadow: activeIdx === idx ? `0 0 20px ${item.color}40` : undefined,
                }}
                aria-label={`Select ${item.title}`}
              >
                <EditorialVisual variant={item.variant} className="w-full h-full" />
                {activeIdx === idx && (
                  <div
                    className="absolute inset-0 border pointer-events-none rounded-[18px] sm:rounded-[20px]"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: item.color,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </BlurReveal>

        {/* Main Service Card / Showcase Area (Split Screen) */}
        <div
          className="glass-panel-ultra rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl transition-all duration-500"
          style={{
            boxShadow: `0 20px 60px -20px ${active.color}25, 0 1px 1px 0 rgba(255, 255, 255, 0.35) inset`,
          }}
        >
          {/* Subtle Ambient Radial Glow for Active Service */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700"
            style={{ backgroundColor: active.color }}
          />
          
          {/* Subtle Watermark Number */}
          <div className="absolute top-4 right-8 font-display text-[90px] sm:text-[140px] font-black text-white/[0.03] select-none pointer-events-none transition-all duration-700">
            0{activeIdx + 1}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left: Service Details */}
              <div className="lg:col-span-6 z-10">
                <span
                  className="text-xs font-mono tracking-widest uppercase font-bold block mb-2 transition-colors"
                  style={{ color: active.color }}
                >
                  SERVICE 0{activeIdx + 1} · {active.subtitle}
                </span>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight mb-4 leading-tight">
                  {active.title}
                </h3>
                <p className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {active.description}
                </p>

                {/* Service Highlights / Deliverables */}
                <div className="space-y-2.5 mb-8">
                  {active.deliverables.map((d, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1, duration: 0.3 }}
                      className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 transition-colors"
                        style={{ color: active.color }}
                      />
                      <span>{d}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Service Details CTA */}
                <button
                  onClick={() => setModalService(active)}
                  className="group inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:border-neutral-500 transition-all text-xs font-semibold tracking-wider text-white active:scale-95"
                >
                  <span>SERVICE DETAILS</span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-45"
                    style={{ backgroundColor: active.color }}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              </div>

              {/* Right: Large Editorial Visual with Progressive Blur-Up & InteractiveTilt */}
              <div className="lg:col-span-6 relative">
                <InteractiveTilt tiltAngle={7} className="w-full rounded-[24px] sm:rounded-[28px]">
                  <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/[0.08] shadow-2xl">
                    <ProgressiveImageFrame
                      aspectRatio="aspect-[4/3]"
                      delay={120}
                      altText={active.title}
                    >
                      <EditorialVisual
                        variant={active.variant}
                        className="w-full h-full transition-transform duration-700 hover:scale-105"
                        alt={active.title}
                      />
                    </ProgressiveImageFrame>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none z-20">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-white/80 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                        {active.title}
                      </span>
                      <span
                        className="text-[11px] font-mono bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
                        style={{ color: active.color }}
                      >
                        SELECTED DISCIPLINE
                      </span>
                    </div>
                  </div>
                </InteractiveTilt>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Service Details Modal */}
      {modalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#121212] border border-neutral-800 rounded-lg max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setModalService(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#e51d24] tracking-widest uppercase font-bold block mb-1">
              FULL SCOPE & WORKFLOW
            </span>
            <h4 className="font-display text-3xl font-black uppercase text-white mb-2">
              {modalService.title}
            </h4>
            <p className="text-xs text-neutral-400 font-mono mb-4">
              {modalService.tagline}
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {modalService.description}
            </p>

            <div className="border-t border-neutral-800 pt-4 mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">
                Key Deliverables:
              </span>
              <ul className="space-y-2">
                {modalService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="w-1.5 h-1.5 bg-[#e51d24] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setModalService(null)}
                className="px-5 py-2 rounded-full bg-[#e51d24] hover:bg-[#c81016] text-white text-xs font-semibold tracking-wider transition-colors"
              >
                Inquire For This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
