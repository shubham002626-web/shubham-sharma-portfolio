import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { EditorialVisual } from './EditorialVisual';
import { ProgressiveImageFrame } from './ProgressiveImageFrame';
import { sound } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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

  const modalAccent = project?.accentColor || '#e51d24';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 15, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-ultra rounded-[28px] sm:rounded-[36px] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header with Close Button */}
            <div className="sticky top-0 bg-[#0e0e0e]/85 backdrop-blur-xl border-b border-white/[0.08] p-5 sm:p-6 flex justify-between items-center z-10">
              <div>
                <span
                  className="text-xs font-mono uppercase tracking-widest font-bold"
                  style={{ color: modalAccent }}
                >
                  {project.category} · {project.year}
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-black uppercase text-white">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                onMouseEnter={() => sound.playHover()}
                className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 active:scale-95 transition-all cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 sm:pb-8 space-y-6">
              {/* Main Visual with Progressive Blur-Up */}
              <div className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden border border-neutral-800 relative">
                <ProgressiveImageFrame
                  aspectRatio="aspect-[16/9]"
                  delay={100}
                  altText={project.title}
                >
                  <EditorialVisual
                    variant={visualMap[project.id] || 'project-fintech'}
                    className="w-full h-full"
                    alt={project.title}
                  />
                </ProgressiveImageFrame>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-900/60 rounded-[18px] sm:rounded-[20px] border border-neutral-800/80 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block mb-1">CLIENT</span>
                  <span className="text-white font-semibold">{project.client}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-1">ROLE</span>
                  <span className="text-white font-semibold">{project.role}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-1">TIMELINE</span>
                  <span className="text-white font-semibold">{project.year}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block mb-1">KEY OUTCOME</span>
                  <span className="font-semibold" style={{ color: modalAccent }}>
                    {project.metrics || '+140% Conv.'}
                  </span>
                </div>
              </div>

              {/* Technical Complexity Metrics Banner */}
              {project.complexityMetrics && (
                <div className="p-3.5 bg-[#0a0a0a] rounded-[16px] border border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: modalAccent }} />
                    <span className="text-neutral-400 font-bold uppercase tracking-wider text-[11px]">
                      ENGINEERING COMPLEXITY:
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.complexityMetrics.map((cm, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="text-neutral-500 text-[10px]">{cm.label}:</span>
                        <span className="text-white font-medium text-[11px]">{cm.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Narrative */}
              <div>
                <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-200 mb-2">
                  Case Study Overview
                </h4>
                <p className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Deliverables / Scope */}
              <div>
                <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-200 mb-3">
                  Technologies & Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-900 border rounded-full text-xs font-mono text-neutral-300"
                      style={{
                        borderColor: `${modalAccent}35`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Row */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-800 justify-between items-center">
                <span className="text-xs text-neutral-400 font-mono">
                  Designed & Built with zero-compromise precision.
                </span>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-5 py-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="flex-1 sm:flex-initial liquid-glass-btn px-6 py-2.5 text-neutral-900 text-xs font-semibold tracking-wider text-center transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer select-none"
                  >
                    <span className="font-display tracking-wider text-xs font-black uppercase text-neutral-900">
                      Request Similar Project
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-900" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
