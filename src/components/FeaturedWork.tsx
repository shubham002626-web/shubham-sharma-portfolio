import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { EditorialVisual } from './EditorialVisual';
import { ProjectModal } from './ProjectModal';
import { BlurReveal } from './BlurReveal';
import { ProgressiveImageFrame } from './ProgressiveImageFrame';
import { InteractiveTilt } from './InteractiveTilt';
import { sound } from '../utils/sound';

export const FeaturedWork: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'LINA: CUSTOM AI AGENT',
      category: 'AI & AGENTS',
      year: '2025 - PRESENT',
      image: 'project-fintech',
      description:
        'A self-learning, autonomous conversational AI agent engineered with Python, structured local JSON state storage, and local Ollama model execution. Designed for zero-cloud latency, total privacy, and multi-turn context retention through deterministic prompt framework design.',
      client: 'Autonomous AI Agent Lab',
      role: 'Lead AI Engineer & Prompt Architect',
      tags: ['Python', 'Ollama (Local LLM)', 'JSON State Store', 'Prompt Engineering', 'RAG'],
      metrics: '100% Local Inference & Zero API Cost',
      complexityMetrics: [
        { label: 'MODEL', value: 'Ollama (Local LLM)' },
        { label: 'STACK', value: 'Python / JSON State' },
        { label: 'LATENCY', value: '0ms Cloud Egress' },
      ],
      accentColor: '#10b981',
      accentGlow: 'rgba(168, 85, 247, 0.25)',
      accentBadge: 'AUTONOMOUS AGENT',
    },
    {
      id: '2',
      title: 'DIGITAL CERTIFICATION VERIFICATION',
      category: 'SYSTEMS & DSA',
      year: '2025',
      image: 'project-architecture',
      description:
        'An individual capstone project focusing on applied Data Structures & Algorithms for secure academic certificate authentication. Implements cryptographic hashing and indexed lookups to prevent credential fraud while providing instant tamper-resistant validation.',
      client: 'Academic Capstone · NIET',
      role: 'Systems & Algorithm Architect',
      tags: ['Applied DSA', 'Java', 'Hashing Algorithms', 'Verification Pipeline', 'OOP'],
      metrics: 'O(1) Hash-Based Verification',
      complexityMetrics: [
        { label: 'ALGO', value: 'Applied DSA / Hash Index' },
        { label: 'STACK', value: 'Java / OOP Pipeline' },
        { label: 'TIME', value: 'O(1) Lookup' },
      ],
      accentColor: '#3b82f6',
      accentGlow: 'rgba(59, 130, 246, 0.25)',
      accentBadge: 'APPLIED DSA CAPSTONE',
    },
    {
      id: '3',
      title: 'EDGE-TO-CLOUD IOT TELEMETRY',
      category: 'IOT & HARDWARE',
      year: '2025',
      image: 'project-travel',
      description:
        'A resilient hardware-software telemetry pipeline integrating ESP32 microcontrollers, high-frequency optical sensors, and an EMQX cloud message broker. Features low-level C/C++ firmware routines, telemetry packet serialization, and real-time MQTT streaming.',
      client: 'IoT Telemetry Research Prototype',
      role: 'Embedded Systems & IoT Engineer',
      tags: ['ESP32', 'C/C++ Firmware', 'EMQX Broker', 'Optical Sensors', 'MQTT'],
      metrics: 'Sub-50ms Telemetry Streaming',
      complexityMetrics: [
        { label: 'DEVICE', value: 'ESP-WROOM-32' },
        { label: 'STACK', value: 'C/C++ / FreeRTOS' },
        { label: 'BROKER', value: 'EMQX Cloud MQTT' },
      ],
      accentColor: '#f59e0b',
      accentGlow: 'rgba(245, 158, 11, 0.25)',
      accentBadge: 'HARDWARE & MQTT',
    },
    {
      id: '4',
      title: 'INTERACTIVE PROMPT GAME MECHANICS',
      category: 'AI & AGENTS',
      year: '2025 - PRESENT',
      image: 'project-spatial',
      description:
        'Innovative prompt-driven interactive applications featuring "Echo-Trace: The AI Whisperer" and "Chrono-Canvas: The Memory Painter". Uses semantic hint deduction and temporal memory painting to generate dynamic narrative branches through conditioned LLM prompts.',
      client: 'Generative Mechanics Lab',
      role: 'Game Logic & Prompt Engineer',
      tags: ['Prompt Engineering', 'Python', 'Game Mechanics', 'Generative Narrative'],
      metrics: 'Multi-Branch Dynamic State Engine',
      complexityMetrics: [
        { label: 'FRAMEWORK', value: 'Prompt Architecture' },
        { label: 'ENGINE', value: 'Conditioned Semantic Tree' },
        { label: 'STACK', value: 'Python / LLM State' },
      ],
      accentColor: '#a855f7',
      accentGlow: 'rgba(168, 85, 247, 0.25)',
      accentBadge: 'PROMPT ARCHITECTURE',
    },
    {
      id: '5',
      title: 'DISASTER RESPONSE POLICY MODELING',
      category: 'MODELING',
      year: '2025',
      image: 'project-fashion',
      description:
        'Led a collaborative operational research and policy analysis project proposing optimized resource distribution corridors across affected provinces in Nepal following severe flood damage. Modeled allocation priority across Housing, Healthcare, and Water/Sanitation (WASH).',
      client: 'Humanitarian Policy Initiative',
      role: 'Project Lead & Resource Analyst',
      tags: ['Policy Modeling', 'Resource Logistics', 'Data Analysis', 'Team Leadership'],
      metrics: '3-Pillar Optimal Relief Framework',
      complexityMetrics: [
        { label: 'DOMAIN', value: 'GIS / Flood Catchment' },
        { label: 'ALLOCATION', value: '3-Pillar Linear Model' },
        { label: 'DATA', value: 'Operational Research' },
      ],
      accentColor: '#06b6d4',
      accentGlow: 'rgba(6, 182, 212, 0.25)',
      accentBadge: 'POLICY & OPTIMIZATION',
    },
    {
      id: '6',
      title: 'CODSOFT ENTERPRISE SOFTWARE SUITE',
      category: 'SYSTEMS & DSA',
      year: '2025',
      image: 'project-restaurant',
      description:
        'Virtual Java Development Internship at CodSoft developing a production-tested software suite: an interactive ATM Interface with session validation, a Student Course Management System with enrollment auditing, and an extensible Multi-Topic Quiz application.',
      client: 'CodSoft Virtual Internship',
      role: 'Java Development Intern',
      tags: ['Java', 'OOP Principles', 'Data Structures', 'Exception Handling', 'GUI/CLI'],
      metrics: '3 Production Systems Shipped',
      complexityMetrics: [
        { label: 'CORE', value: 'Java SE / OOP / HashMaps' },
        { label: 'MODULES', value: 'ATM / Course / Quiz' },
        { label: 'SECURITY', value: 'Session Auth & Audit' },
      ],
      accentColor: '#e51d24',
      accentGlow: 'rgba(229, 29, 36, 0.25)',
      accentBadge: 'CODSOFT INTERNSHIP',
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('ALL');

  const filteredProjects =
    filter === 'ALL'
      ? projects
      : projects.filter((p) => p.category.toUpperCase().includes(filter));

  return (
    <section id="work" className="relative py-20 sm:py-28 bg-[#0c0c0c] border-t border-white/[0.06] snap-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header (Centered like in video at 00:08) */}
        <BlurReveal duration={0.8} blurAmount={10} yOffset={28} className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 snap-header">
          <span className="text-[#e51d24] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            KEY PROJECTS & SYSTEMS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            ENGINEERING ACROSS
            <span className="block text-white">
              AI, SYSTEMS & HARDWARE
              <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#e51d24] ml-2 mb-1" />
            </span>
          </h2>

          {/* Filter Pills / Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {['ALL', 'AI & AGENTS', 'SYSTEMS & DSA', 'IOT & HARDWARE', 'MODELING'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setFilter(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-all duration-300 rounded-full cursor-pointer ${
                  filter === cat
                    ? 'liquid-glass-btn text-neutral-900 font-black shadow-lg'
                    : 'glass-pill-badge text-neutral-400 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </BlurReveal>

        {/* 2x3 Grid Layout (Bento showcase) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const visualMap: Record<
                string,
                | 'project-fintech'
                | 'project-restaurant'
                | 'project-architecture'
                | 'project-travel'
                | 'project-spatial'
                | 'project-fashion'
              > = {
                '1': 'project-fintech',
                '2': 'project-restaurant',
                '3': 'project-architecture',
                '4': 'project-travel',
                '5': 'project-spatial',
                '6': 'project-fashion',
              };
              const visualVariant = visualMap[project.id] || 'project-fintech';
              const cardAccent = project.accentColor || '#e51d24';

              return (
                <InteractiveTilt tiltAngle={6} key={project.id} className="h-full">
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-50px' }}
                    exit={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
                    transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    onClick={() => {
                      sound.playClick();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="h-full group cursor-pointer glass-panel-ultra rounded-[28px] sm:rounded-[34px] transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between relative"
                    style={{
                      borderColor: undefined,
                    }}
                  >
                    {/* Top Meta Row: Category with Color Pip (Left) · Year & Chromatic Badge (Right) */}
                    <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/[0.08] mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full shrink-0 transition-transform group-hover:scale-125"
                          style={{
                            backgroundColor: cardAccent,
                            boxShadow: `0 0 8px ${cardAccent}`,
                          }}
                        />
                        <span className="font-mono text-xs sm:text-[13px] font-bold tracking-widest text-neutral-400 uppercase group-hover:text-white transition-colors">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.accentBadge && (
                          <span
                            className="hidden sm:inline text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-full border opacity-75 group-hover:opacity-100 transition-opacity"
                            style={{
                              color: cardAccent,
                              borderColor: `${cardAccent}40`,
                              backgroundColor: `${cardAccent}10`,
                            }}
                          >
                            {project.accentBadge}
                          </span>
                        )}
                        <span className="font-mono text-xs sm:text-[13px] tracking-widest text-neutral-400">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Project Image Frame with Progressive Blur-Up Loading, Rounded Edges & Parallax */}
                    <div className="relative mb-5 border border-white/[0.04] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-neutral-950">
                      <ProgressiveImageFrame
                        aspectRatio="aspect-[16/10]"
                        delay={idx * 80}
                        altText={project.title}
                        parallax={true}
                        parallaxSpeed={26}
                      >
                        <EditorialVisual
                          variant={visualVariant}
                          className="w-full h-full"
                          alt={project.title}
                        />
                      </ProgressiveImageFrame>

                      {/* Corner Accent Box on Hover with Project Color */}
                      <div
                        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20 shadow-lg"
                        style={{
                          backgroundColor: cardAccent,
                        }}
                      >
                        <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Bottom Title: Large Bold Typography */}
                    <div className="flex items-center justify-between pt-1 mb-3.5">
                      <h3
                        className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-wide transition-colors"
                        style={{
                          color: undefined,
                        }}
                      >
                        {project.title}
                      </h3>
                      <div
                        className="text-xs font-mono transition-colors hidden sm:flex items-center gap-1 opacity-70 group-hover:opacity-100 shrink-0 ml-3"
                        style={{ color: cardAccent }}
                      >
                        <span>VIEW ARCHIVE</span>
                        <span>→</span>
                      </div>
                    </div>

                    {/* Technical Complexity Metrics Row */}
                    {project.complexityMetrics && (
                      <div className="pt-3 border-t border-white/[0.06] mt-auto">
                        <div className="grid grid-cols-3 gap-2 bg-[#080808]/90 p-2 sm:p-2.5 rounded-xl border border-white/[0.05]">
                          {project.complexityMetrics.map((cm, i) => (
                            <div key={i} className="flex flex-col min-w-0">
                              <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-400 uppercase truncate">
                                {cm.label}
                              </span>
                              <span
                                className="text-[11px] sm:text-xs font-mono font-semibold truncate transition-colors"
                                style={{ color: i === 0 ? cardAccent : '#f5f5f5' }}
                              >
                                {cm.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </InteractiveTilt>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Center Button Below Grid: MORE FEATURED WORK */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => setSelectedProject(projects[0])}
            className="liquid-glass-btn group flex items-center gap-3.5 pl-7 pr-3 py-3 cursor-pointer select-none"
          >
            <span className="font-display tracking-wider text-xs sm:text-sm font-black uppercase text-neutral-900">
              EXPLORE ARCHIVE REPOSITORY
            </span>
            <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </button>
        </div>

      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
