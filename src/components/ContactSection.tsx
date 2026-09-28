import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BlurReveal } from './BlurReveal';
import { sound } from '../utils/sound';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Autonomous AI Agent / Local LLM (Ollama)',
    budget: 'Full-Time / Co-Op / Internship Opportunity',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill in all required fields marked with *');
      return;
    }
    setError('');
    setLoading(true);
    sound.playClick();

    // Simulate instant responsive submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      sound.playSuccess();
    }, 400);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0c0c0c] border-t border-white/[0.06] overflow-hidden snap-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <BlurReveal duration={0.8} blurAmount={10} yOffset={28} className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 snap-header">
          <span className="text-[#e51d24] font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            LET'S ENGINEER SOMETHING
            <span className="block text-white">
              POWERFUL & RIGOROUS
              <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#e51d24] ml-2 mb-1" />
            </span>
          </h2>
        </BlurReveal>

        {/* Contact Form Container (matching video 00:16 - 00:18) */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto glass-panel-ultra rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 relative shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#e51d24]/20 border border-[#e51d24] flex items-center justify-center mx-auto text-[#e51d24]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl font-black uppercase text-white tracking-wide">
                  INQUIRY DISPATCHED
                </h3>
                <p className="text-neutral-300 font-sans text-sm max-w-md mx-auto">
                  Thank you for reaching out, {formData.fullName}. Shubham will review your project specifications and get back to you promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      projectType: 'Autonomous AI Agent / Local LLM (Ollama)',
                      budget: 'Full-Time / Co-Op / Internship Opportunity',
                      message: '',
                    });
                  }}
                  className="mt-4 liquid-glass-btn px-6 py-2.5 text-xs font-mono font-bold text-neutral-900 cursor-pointer select-none"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
              {error && (
                <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs font-mono rounded-xl">
                  {error}
                </div>
              )}

              {/* 2-Column Row: FULL NAME & EMAIL ADDRESS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                    FULL NAME <span className="text-[#e51d24]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full glass-input rounded-[14px] sm:rounded-[18px] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                    EMAIL ADDRESS <span className="text-[#e51d24]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="shubhamkumar002626@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full glass-input rounded-[14px] sm:rounded-[18px] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* 2-Column Row: PROJECT TYPE & ENGAGEMENT TYPE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                    PROJECT / INQUIRY TYPE
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full glass-input rounded-[14px] sm:rounded-[18px] px-4 py-3 text-sm text-white focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Autonomous AI Agent / Local LLM (Ollama)" className="bg-neutral-900 text-white">Autonomous AI Agent / Local LLM (Ollama)</option>
                    <option value="IoT Telemetry & ESP32 Embedded Firmware" className="bg-neutral-900 text-white">IoT Telemetry & ESP32 Embedded Firmware</option>
                    <option value="Java / C++ Systems Software Engineering" className="bg-neutral-900 text-white">Java / C++ Systems Software Engineering</option>
                    <option value="Applied DSA & Cryptographic Capstone" className="bg-neutral-900 text-white">Applied DSA & Cryptographic Capstone</option>
                    <option value="Academic Collaboration / Research Inquiry" className="bg-neutral-900 text-white">Academic Collaboration / Research Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                    ENGAGEMENT OPPORTUNITY
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full glass-input rounded-[14px] sm:rounded-[18px] px-4 py-3 text-sm text-white focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Full-Time / Co-Op / Internship Opportunity" className="bg-neutral-900 text-white">Full-Time / Co-Op / Internship Opportunity</option>
                    <option value="AI Agent Prototyping" className="bg-neutral-900 text-white">AI Agent Prototyping</option>
                    <option value="IoT & Hardware Firmware Engineering" className="bg-neutral-900 text-white">IoT & Hardware Firmware Engineering</option>
                    <option value="Applied DSA Software Development" className="bg-neutral-900 text-white">Applied DSA Software Development</option>
                    <option value="Academic Research Collaboration" className="bg-neutral-900 text-white">Academic Research Collaboration</option>
                  </select>
                </div>
              </div>

              {/* Full Row: TELL ME ABOUT YOUR PROJECT */}
              <div>
                <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                  PROJECT SPECIFICATIONS / MESSAGE <span className="text-[#e51d24]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your technical objectives, system requirements, or collaboration goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full glass-input rounded-[14px] sm:rounded-[18px] px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Full Width Pill CTA Button: SEND INQUIRY */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full liquid-glass-btn group flex items-center justify-between pl-8 pr-3 py-3.5 text-neutral-900 font-sans font-black text-sm tracking-widest uppercase cursor-pointer select-none"
                >
                  <span className="font-display tracking-wider text-sm sm:text-base text-neutral-900">
                    {loading ? 'TRANSMITTING DISPATCH...' : 'TRANSMIT DIRECT INQUIRY'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

      </motion.div>

      </div>
    </section>
  );
};
