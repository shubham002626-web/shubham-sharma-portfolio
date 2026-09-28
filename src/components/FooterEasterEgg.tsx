import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, X, PartyPopper, Disc, CircleDot, Award } from 'lucide-react';
import { sound } from '../utils/sound';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRot: number;
  shape: 'circle' | 'square' | 'star' | 'diamond';
  opacity: number;
  life: number;
}

interface FloatingOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
}

const CHROMATIC_COLORS = [
  '#e51d24', // Crimson
  '#2563eb', // Cobalt
  '#10b981', // Mint
  '#f59e0b', // Gold
  '#a855f7', // Violet
  '#f97316', // Tangerine
  '#38bdf8', // Sky
  '#ec4899', // Hot Pink
  '#ffffff', // Pure White
];

export const FooterEasterEgg: React.FC<{
  discoMode: boolean;
  setDiscoMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ discoMode, setDiscoMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [orbs, setOrbs] = useState<FloatingOrb[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Spawn confetti cannon explosion
  const triggerCelebration = (originX?: number, originY?: number) => {
    sound.playCelebration();
    setClickCount((prev) => prev + 1);
    setIsOpen(true);

    const startX = originX ?? (typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
    const startY = originY ?? (typeof window !== 'undefined' ? window.innerHeight * 0.75 : 500);

    const newParticles: Particle[] = [];
    const count = 75;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.6;
      const speed = 4 + Math.random() * 12;
      const shapes: ('circle' | 'square' | 'star' | 'diamond')[] = [
        'circle',
        'square',
        'star',
        'diamond',
      ];

      newParticles.push({
        id: Math.random() + Date.now(),
        x: startX + (Math.random() - 0.5) * 30,
        y: startY + (Math.random() - 0.5) * 30,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 5 - Math.random() * 5, // bias upward
        size: 5 + Math.random() * 8,
        color: CHROMATIC_COLORS[Math.floor(Math.random() * CHROMATIC_COLORS.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 14,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        opacity: 1,
        life: 1,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);
  };

  // Listen for global custom event (e.g. from clicking PROFTO punctuation dot)
  useEffect(() => {
    const handleGlobalTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<{ x?: number; y?: number }>;
      triggerCelebration(customEvent.detail?.x, customEvent.detail?.y);
    };
    window.addEventListener('trigger-bedrock-easter-egg', handleGlobalTrigger);
    return () => window.removeEventListener('trigger-bedrock-easter-egg', handleGlobalTrigger);
  }, []);

  // Spawn interactive popping orbs
  const spawnOrbs = () => {
    sound.playPop();
    const newOrbs: FloatingOrb[] = [];
    for (let i = 0; i < 7; i++) {
      newOrbs.push({
        id: Date.now() + i,
        x: 10 + Math.random() * 80, // viewport %
        y: 60 + Math.random() * 30, // viewport %
        size: 32 + Math.random() * 24,
        color: CHROMATIC_COLORS[i % CHROMATIC_COLORS.length],
        vx: (Math.random() - 0.5) * 0.8,
        vy: -0.6 - Math.random() * 0.8,
      });
    }
    setOrbs((prev) => [...prev, ...newOrbs]);
  };

  const popOrb = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playPop();
    setOrbs((prev) => prev.filter((o) => o.id !== id));

    // Spawn mini sparks at clicked orb location
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    triggerCelebration(rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  // Particle Physics Animation Loop
  useEffect(() => {
    if (particles.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let active = true;

    const render = () => {
      if (!active) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles((prev) => {
        const next = prev
          .map((p) => {
            const nextX = p.x + p.vx;
            const nextY = p.y + p.vy;
            const nextVy = p.vy + 0.28; // gravity
            const nextVx = p.vx * 0.985; // drag
            const nextLife = p.life - 0.012;
            const nextRot = p.rotation + p.vRot;

            return {
              ...p,
              x: nextX,
              y: nextY,
              vx: nextVx,
              vy: nextVy,
              life: nextLife,
              opacity: Math.max(0, nextLife),
              rotation: nextRot,
            };
          })
          .filter((p) => p.life > 0 && p.y < window.innerHeight + 100);

        // Draw active particles
        next.forEach((p) => {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;

          if (p.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          } else if (p.shape === 'square') {
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          } else if (p.shape === 'diamond') {
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.lineTo(p.size / 1.5, 0);
            ctx.lineTo(0, p.size);
            ctx.lineTo(-p.size / 1.5, 0);
            ctx.closePath();
            ctx.fill();
          } else {
            // Star
            ctx.beginPath();
            for (let s = 0; s < 4; s++) {
              ctx.rotate(Math.PI / 4);
              ctx.lineTo(p.size, 0);
              ctx.lineTo(0, p.size / 3);
            }
            ctx.closePath();
            ctx.fill();
          }
          ctx.restore();
        });

        return next;
      });

      if (particles.length > 0) {
        animationFrameRef.current = requestAnimationFrame(render);
      }
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      active = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particles.length > 0]);

  // Keep canvas size synced with viewport
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Fullscreen High-Performance Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[100]"
        style={{ display: particles.length > 0 ? 'block' : 'none' }}
      />

      {/* Interactive Floating Orbs (if summoned) */}
      <AnimatePresence>
        {orbs.map((orb) => (
          <motion.button
            key={orb.id}
            initial={{ scale: 0, opacity: 0, x: `${orb.x}vw`, y: `${orb.y}vh` }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.9, 1, 0.9],
              y: [`${orb.y}vh`, `${orb.y - 12}vh`],
              x: [`${orb.x}vw`, `${orb.x + (Math.random() - 0.5) * 8}vw`],
            }}
            exit={{ scale: 1.8, opacity: 0 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            onClick={(e) => popOrb(orb.id, e)}
            className="fixed z-[105] rounded-full backdrop-blur-md border border-white/40 cursor-pointer shadow-lg flex items-center justify-center group active:scale-90"
            style={{
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.8), ${orb.color}90)`,
              boxShadow: `0 0 20px ${orb.color}80`,
            }}
            title="Pop me!"
          >
            <span className="text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 font-bold transition-opacity">
              POP
            </span>
          </motion.button>
        ))}
      </AnimatePresence>

      {/* Hidden Easter Egg Trigger: Placed directly in Footer */}
      <div className="relative inline-flex items-center">
        <button
          type="button"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            triggerCelebration(rect.left + rect.width / 2, rect.top + rect.height / 2);
          }}
          onMouseEnter={() => {
            sound.playHover();
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Subterranean Easter Egg"
          className="relative group p-1 rounded-full focus:outline-none focus:ring-1 focus:ring-red-500 cursor-pointer select-none"
        >
          {/* Luminous Pulsing Ring on Hover */}
          <span
            className={`absolute inset-0 rounded-full transition-all duration-300 ${
              isHovered
                ? 'scale-175 bg-red-500/25 blur-sm'
                : 'scale-100 bg-transparent'
            }`}
          />

          {/* The Hidden Trigger Pip: Looks like a clean brutalist punctuation dot */}
          <span className="relative flex items-center justify-center w-5 h-5 rounded-full border border-white/10 bg-neutral-900 group-hover:border-red-500 transition-colors">
            <Sparkles className="w-3 h-3 text-neutral-400 group-hover:text-red-500 group-hover:rotate-45 group-hover:scale-125 transition-all duration-300" />
          </span>

          {/* Mysterious Subtle Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: -28, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-neutral-950/95 border border-red-500/50 shadow-2xl pointer-events-none z-30"
              >
                <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-red-400 uppercase font-bold">
                  <span>✦</span>
                  <span>BEDROCK EASTER EGG</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Celebratory Reward Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 16 }}
              transition={{ type: 'spring', damping: 22, stiffness: 280 }}
              className="relative w-full max-w-lg bg-[#0e0e10] border border-white/[0.14] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
              style={{
                boxShadow: '0 25px 70px -15px rgba(229, 29, 36, 0.4)',
              }}
            >
              {/* Ambient Radial Background Glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-red-600/25 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  setIsOpen(false);
                }}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
                aria-label="Close reward modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-mono tracking-widest uppercase mb-4">
                <Trophy className="w-3.5 h-3.5" />
                <span>SECRET UNLOCKED · RANK S-TIER</span>
              </div>

              {/* Title & Celebration Statement */}
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mb-2 flex items-center gap-2">
                <span>BEDROCK VOYAGER</span>
                <span className="text-red-500">✦</span>
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
                You reached the absolute bedrock depth of the digital studio archive! Very few visitors explore this far down. As your reward, here are some fun studio perks:
              </p>

              {/* Stats Bento Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6 font-mono text-center">
                <div className="p-3 bg-neutral-900/80 rounded-2xl border border-white/[0.06]">
                  <span className="text-[10px] text-neutral-400 block mb-0.5">DEPTH REACHED</span>
                  <span className="text-sm font-bold text-white">100%</span>
                </div>
                <div className="p-3 bg-neutral-900/80 rounded-2xl border border-white/[0.06]">
                  <span className="text-[10px] text-neutral-400 block mb-0.5">REWARD CLICKS</span>
                  <span className="text-sm font-bold text-red-400">{clickCount}</span>
                </div>
                <div className="p-3 bg-neutral-900/80 rounded-2xl border border-white/[0.06]">
                  <span className="text-[10px] text-neutral-400 block mb-0.5">DISCOVERY</span>
                  <span className="text-sm font-bold text-emerald-400">RARE</span>
                </div>
              </div>

              {/* Playful Interactive Actions */}
              <div className="space-y-2.5 mb-6">
                {/* 1. Fire Confetti Cannon */}
                <button
                  type="button"
                  onClick={() => triggerCelebration()}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/[0.08] hover:border-red-500/50 text-white text-xs font-mono transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <PartyPopper className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">FIRE ANOTHER CONFETTI CANNON</span>
                  </div>
                  <span className="text-[10px] text-neutral-400">BOOM ✦</span>
                </button>

                {/* 2. Toggle Aurora Disco Mode */}
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setDiscoMode((prev) => !prev);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-xs font-mono transition-all cursor-pointer group ${
                    discoMode
                      ? 'bg-purple-950/60 border-purple-500 text-purple-200'
                      : 'bg-neutral-900 hover:bg-neutral-800 border-white/[0.08] hover:border-purple-500/50 text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Disc className={`w-4 h-4 text-purple-400 ${discoMode ? 'animate-spin' : ''}`} />
                    <span className="font-semibold">
                      {discoMode ? 'AURORA RAINBOW DISCO: ACTIVE' : 'ENABLE AURORA RAINBOW DISCO'}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400">
                    {discoMode ? 'ON' : 'OFF'}
                  </span>
                </button>

                {/* 3. Spawn Floating Poppable Orbs */}
                <button
                  type="button"
                  onClick={spawnOrbs}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/[0.08] hover:border-cyan-500/50 text-white text-xs font-mono transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <CircleDot className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">SUMMON FLOATING POPPING BUBBLES</span>
                  </div>
                  <span className="text-[10px] text-neutral-400">POP IT ✦</span>
                </button>
              </div>

              {/* Dismiss Action */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono text-neutral-500">
                  ESC OR CLICK OUTSIDE TO CLOSE
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  CONTINUE EXPLORING
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
