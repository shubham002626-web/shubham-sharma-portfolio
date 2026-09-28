import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';
import { EditorialVisual } from './EditorialVisual';
import { BlurReveal } from './BlurReveal';
import { ProgressiveImageFrame } from './ProgressiveImageFrame';
import { InteractiveTilt } from './InteractiveTilt';
import { TextParallax } from './TextParallax';
import { sound } from '../utils/sound';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      quote:
        'SHUBHAM DEMONSTRATED EXCEPTIONAL DISCIPLINE IN OBJECT-ORIENTED JAVA DEVELOPMENT DURING HIS CODSOFT INTERNSHIP. HIS ATM AND STUDENT COURSE PLATFORMS DEMONSTRATED CLEAN EXCEPTION HANDLING AND SOUND DATA STRUCTURE SELECTION.',
      author: 'CODSOFT TECHNICAL MENTOR',
      role: 'SOFTWARE EVALUATION LEAD',
      location: 'VIRTUAL',
      company: 'CodSoft Engineering',
      image: 'client-olivia',
    },
    {
      id: '2',
      quote:
        'HIS CAPSTONE DEMONSTRATED MATURE ALGORITHMIC PROBLEM SOLVING BY GROUNDING DIGITAL CERTIFICATION VERIFICATION IN APPLIED DATA STRUCTURES AND DETERMINISTIC HASH LOOKUPS. THE SYSTEM IS BOTH RIGOROUS AND SECURE.',
      author: 'CAPSTONE COMMITTEE',
      role: 'ACADEMIC REVIEW',
      location: 'GREATER NOIDA',
      company: 'NIET Computer Science & Engineering',
      image: 'client-olivia',
    },
    {
      id: '3',
      quote:
        'AS TEAM LEAD ON OUR NEPAL FLOOD RELIEF LOGISTICS STUDY, SHUBHAM EFFORTLESSLY BRIDGED TECHNICAL DATA MODELING WITH HUMANITARIAN POLICY TO FORMULATE PRIORITIZED MULTI-SECTOR AID CORRIDORS.',
      author: 'POLICY RESEARCH TEAM',
      role: 'RESEARCH COLLABORATORS',
      location: 'ACADEMIC STUDY',
      company: 'Humanitarian Modeling Initiative',
      image: 'client-olivia',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="reviews" className="relative py-20 sm:py-28 bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden snap-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading + Client Portrait */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <BlurReveal duration={0.8} blurAmount={10} yOffset={28} className="mb-8 snap-header">
              <span className="text-[#e51d24] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
                CLIENT FEEDBACK
              </span>
              <TextParallax speed={15}>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                  CRAFTING THOUGHTFUL
                  <span className="block text-white">
                    DIGITAL EXPERIENCES
                    <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#e51d24] ml-2 mb-1" />
                  </span>
                </h2>
              </TextParallax>
            </BlurReveal>

            {/* Client Photography Frame with Progressive Blur-Up & InteractiveTilt */}
            <BlurReveal delay={0.2} duration={0.8} blurAmount={12} yOffset={24}>
              <InteractiveTilt tiltAngle={6} className="w-full rounded-[24px] sm:rounded-[32px]">
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/[0.08] shadow-2xl">
                  <ProgressiveImageFrame
                    aspectRatio="aspect-[4/3] sm:aspect-[4/3]"
                    delay={120}
                    altText="Client Portrait"
                  >
                    <EditorialVisual
                      variant="client-olivia"
                      className="w-full h-full"
                      alt="Client Portrait"
                    />
                  </ProgressiveImageFrame>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-widest text-neutral-300 border border-white/10">
                      VERIFIED CLIENT PARTNERSHIP
                    </span>
                  </div>
                </div>
              </InteractiveTilt>
            </BlurReveal>
          </div>

          {/* Right Column: Big Quote + Author Attribution */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-4 lg:pt-0">
            
            {/* Top Row: VIEW ALL REVIEWS Button */}
            <BlurReveal delay={0.15} duration={0.6} blurAmount={6} yOffset={16} className="flex justify-end mb-8 sm:mb-12">
              <button
                onClick={next}
                className="liquid-glass-btn group flex items-center gap-3.5 pl-6 pr-2.5 py-2.5 text-neutral-900 cursor-pointer select-none"
              >
                <span className="font-display tracking-wider text-xs sm:text-sm font-black uppercase text-neutral-900">
                  CYCLE EVALUATIONS
                </span>
                <div className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </BlurReveal>

            {/* Testimonial Quote Block with Giant Red Quotes & InteractiveTilt */}
            <BlurReveal delay={0.25} duration={0.8} blurAmount={10} yOffset={24}>
              <InteractiveTilt tiltAngle={5} className="w-full rounded-[28px] sm:rounded-[36px] mb-8">
                <div className="relative glass-panel-ultra rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 overflow-hidden min-h-[300px] flex flex-col justify-between shadow-2xl">
                  <div className="text-[#e51d24] mb-4">
                    <Quote className="w-12 h-12 stroke-[1.5] rotate-180" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, x: 20, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white tracking-wide leading-snug mb-8">
                        “ {current.quote} ”
                      </blockquote>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                        <div>
                          <h4 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                            {current.author}
                          </h4>
                          <div className="text-xs font-mono text-neutral-400">
                            {current.role} · {current.location}
                          </div>
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              sound.playClick();
                              prev();
                            }}
                            onMouseEnter={() => sound.playHover()}
                            className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white hover:border-[#e51d24] hover:text-[#e51d24] active:scale-95 transition-all cursor-pointer"
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => {
                              sound.playClick();
                              next();
                            }}
                            onMouseEnter={() => sound.playHover()}
                            className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white hover:border-[#e51d24] hover:text-[#e51d24] active:scale-95 transition-all cursor-pointer"
                            aria-label="Next testimonial"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </InteractiveTilt>
            </BlurReveal>

            {/* Indicator dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-[#e51d24]' : 'w-2 bg-neutral-800'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
