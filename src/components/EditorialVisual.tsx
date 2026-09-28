import React from 'react';
import { TelemetryBentoGrid } from './TelemetryBentoGrid';

interface EditorialVisualProps {
  variant:
    | 'hero-luciano'
    | 'service-model-1'
    | 'service-model-2'
    | 'service-model-3'
    | 'service-model-4'
    | 'vr-headset'
    | 'project-fintech'
    | 'project-restaurant'
    | 'project-architecture'
    | 'project-travel'
    | 'project-spatial'
    | 'project-fashion'
    | 'client-olivia'
    | 'footer-night';
  className?: string;
  alt?: string;
}

export const EditorialVisual: React.FC<EditorialVisualProps> = ({ variant, className = '', alt = 'Luciano Blake Editorial' }) => {
  switch (variant) {
    case 'hero-luciano':
      return (
        <div className={`relative overflow-hidden bg-[#120506] ${className}`} role="img" aria-label={alt}>
          {/* Intense red mood lighting & motion blur streaks */}
          <div className="absolute inset-0 bg-radial from-[#e51d24]/60 via-[#800d11]/40 to-[#0c0506] mix-blend-screen opacity-90" />
          
          <svg className="w-full h-full object-cover" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroRedGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff2a32" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#c81016" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1a0405" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="hairMotion" x1="100%" y1="30%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#ff3b44" stopOpacity="0.9" />
                <stop offset="30%" stopColor="#b30910" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#290507" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="faceLight" cx="65%" cy="45%" r="50%">
                <stop offset="0%" stopColor="#ffd8d8" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#ea6b71" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#a3141a" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1f0305" stopOpacity="0.95" />
              </radialGradient>
              <filter id="blurStreaks" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
              </filter>
            </defs>

            {/* Background Red Atmospheric Haze */}
            <rect width="600" height="700" fill="#0d0405" />
            <circle cx="450" cy="300" r="320" fill="url(#heroRedGlow)" opacity="0.85" />

            {/* Torso & Shoulders Silhouette */}
            <path
              d="M200 700 C 220 540, 290 510, 380 500 C 470 510, 540 550, 570 700 Z"
              fill="#080203"
            />
            {/* Red rim on shoulder */}
            <path
              d="M340 510 C 370 505, 410 508, 480 535 C 530 560, 560 620, 570 700"
              stroke="#e51d24"
              strokeWidth="4"
              opacity="0.4"
            />

            {/* Neck & Jaw */}
            <path
              d="M345 390 C 345 450, 355 490, 390 510 C 430 495, 440 450, 440 390 Z"
              fill="url(#faceLight)"
            />

            {/* Head Silhouette and Facial Planes */}
            <path
              d="M310 240 C 310 160, 380 120, 450 140 C 510 160, 530 250, 520 330 C 500 420, 420 450, 370 430 C 330 400, 310 320, 310 240 Z"
              fill="url(#faceLight)"
            />

            {/* Sculpted Lips with Crimson Light */}
            <path
              d="M365 375 C 385 368, 405 368, 415 375 C 405 385, 385 385, 365 375 Z"
              fill="#c9222a"
              opacity="0.9"
            />
            <path
              d="M368 377 C 385 385, 400 385, 412 377 C 400 392, 380 392, 368 377 Z"
              fill="#5a090e"
            />

            {/* Nose & Cheekbone Shadow */}
            <path
              d="M380 280 L 392 340 L 375 350 Z"
              fill="#821016"
              opacity="0.45"
            />
            
            {/* Tousled Windblown Hair Across Face & Eyes */}
            <path
              d="M320 180 C 300 240, 240 280, 160 300 C 230 270, 300 230, 330 190 Z"
              fill="url(#hairMotion)"
            />
            <path
              d="M350 160 C 290 220, 210 270, 130 290 C 220 250, 320 200, 360 170 Z"
              fill="url(#hairMotion)"
              filter="url(#blurStreaks)"
            />
            <path
              d="M370 140 C 310 200, 230 250, 140 280 C 240 230, 340 180, 380 150 Z"
              fill="url(#hairMotion)"
            />
            <path
              d="M390 130 C 320 190, 210 240, 120 270 C 220 220, 350 170, 410 140 Z"
              fill="url(#hairMotion)"
            />
            <path
              d="M420 130 C 360 190, 260 250, 150 290 C 260 230, 380 180, 440 145 Z"
              fill="url(#hairMotion)"
              filter="url(#blurStreaks)"
            />

            {/* Upper Hair Volume with Red Tint */}
            <path
              d="M310 220 C 300 130, 370 90, 460 110 C 520 130, 540 190, 520 260 C 490 190, 450 150, 390 160 C 340 170, 320 200, 310 220 Z"
              fill="#2e070a"
            />
            {/* Fine Hair Motion Strands flying leftwards */}
            <g stroke="#ff3842" strokeWidth="2.5" opacity="0.75" filter="url(#blurStreaks)">
              <path d="M380 160 Q 260 220 100 260" />
              <path d="M400 180 Q 280 240 120 290" />
              <path d="M410 210 Q 300 270 140 320" />
              <path d="M420 230 Q 320 290 180 340" />
              <path d="M370 200 Q 240 260 80 310" />
            </g>

            {/* Deep Vignette */}
            <rect width="600" height="700" fill="url(#heroRedGlow)" opacity="0.3" style={{ mixBlendMode: 'overlay' }} />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/40" />
        </div>
      );

    case 'service-model-1':
    case 'service-model-2':
    case 'service-model-3':
    case 'service-model-4':
      const shades = {
        'service-model-1': { col: '#06b6d4', bg: '#04171d', angle: '0deg', focus: 'UI/UX', rim: '#22d3ee' },
        'service-model-2': { col: '#10b981', bg: '#041b12', angle: '15deg', focus: 'WEB DEV', rim: '#34d399' },
        'service-model-3': { col: '#a855f7', bg: '#180726', angle: '-10deg', focus: 'BRAND', rim: '#c084fc' },
        'service-model-4': { col: '#f97316', bg: '#1d0c04', angle: '25deg', focus: 'MOTION', rim: '#fb923c' },
      }[variant];

      return (
        <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: shades.bg }} role="img" aria-label={alt}>
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: `radial-gradient(circle at 60% 40%, ${shades.col} 0%, transparent 70%)`,
            }}
          />
          <svg className="w-full h-full object-cover" viewBox="0 0 400 400" fill="none">
            <rect width="400" height="400" fill={shades.bg} />
            <circle cx="200" cy="180" r="140" fill={shades.col} opacity="0.45" filter="blur(30px)" />
            {/* Model Profile Silhouette */}
            <circle cx="210" cy="170" r="75" fill="#fca5a5" opacity="0.75" />
            <path d="M120 380 C 130 290, 180 260, 220 260 C 270 260, 310 290, 330 380 Z" fill="#080808" />
            {/* Hair with custom chromatic rim */}
            <path d="M140 180 C 130 110, 200 90, 260 110 C 290 130, 290 180, 270 210 C 230 160, 180 150, 140 180 Z" fill="#141416" />
            <path d="M190 140 C 160 180, 120 210, 80 220" stroke={shades.rim} strokeWidth="3" opacity="0.8" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />
        </div>
      );

    case 'vr-headset':
      return (
        <div className={`relative overflow-hidden bg-[#0d0714] ${className}`} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/30 via-[#0a0312] to-[#06b6d4]/25" />
          <svg className="w-full h-full object-cover" viewBox="0 0 600 400" fill="none">
            <rect width="600" height="400" fill="#09050d" />
            {/* Multi-color dual-tone ambient backlight */}
            <circle cx="240" cy="190" r="160" fill="#a855f7" opacity="0.4" filter="blur(40px)" />
            <circle cx="370" cy="170" r="110" fill="#06b6d4" opacity="0.35" filter="blur(45px)" />

            {/* Person Face Profile tilted looking upward */}
            <path d="M160 400 C 180 320, 220 280, 270 270 C 330 280, 380 320, 420 400 Z" fill="#060608" />
            <path d="M230 240 C 240 280, 270 300, 300 290 C 330 270, 340 230, 330 200 Z" fill="#d8b4e2" opacity="0.75" />

            {/* High-tech VR Headset Visor with Glow */}
            <path
              d="M200 160 C 200 140, 330 110, 370 140 L 360 210 C 310 220, 200 210, 200 160 Z"
              fill="#18181b"
              stroke="#a855f7"
              strokeWidth="2"
            />
            {/* Visor glowing horizontal dual cyber strips */}
            <path
              d="M215 165 C 250 148, 320 135, 350 155"
              stroke="#06b6d4"
              strokeWidth="4"
              opacity="0.9"
              filter="blur(1px)"
            />
            <path
              d="M210 175 C 245 158, 315 145, 345 165"
              stroke="#a855f7"
              strokeWidth="3"
              opacity="0.9"
            />
            {/* Head strap */}
            <path d="M200 160 C 170 180, 160 210, 165 240" stroke="#27272a" strokeWidth="8" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
      );

    case 'project-fintech':
      return (
        <div className={`relative overflow-hidden bg-[#070b09] flex flex-col justify-between p-4 sm:p-5 group ${className}`} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-radial from-[#10b981]/20 via-[#061e15]/40 to-[#020504] pointer-events-none" />
          
          {/* Subtle brutalist concrete room grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Top Floating Glass HUD Elements */}
          <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-[#34d399] tracking-wider uppercase">LINA // AUTONOMOUS AGENT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#a7f3d0] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">Core: 78%</span>
              <span className="text-[10px] font-mono text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">Ollama Stable</span>
            </div>
          </div>

          {/* Center 3D Holographic Neural Memory Network */}
          <div className="relative z-10 my-auto py-2">
            <svg className="w-full h-36 sm:h-40" viewBox="0 0 460 160" fill="none">
              <defs>
                <linearGradient id="neuralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Holographic Target Brackets */}
              <path d="M 120 20 H 100 V 40" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
              <path d="M 340 20 H 360 V 40" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
              <path d="M 120 140 H 100 V 120" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />
              <path d="M 340 140 H 360 V 120" stroke="#34d399" strokeWidth="1.5" opacity="0.6" />

              {/* Dense Neural Connection Rays */}
              <line x1="130" y1="80" x2="180" y2="40" stroke="url(#neuralGrad1)" strokeWidth="1.5" opacity="0.7" />
              <line x1="130" y1="80" x2="190" y2="120" stroke="url(#neuralGrad1)" strokeWidth="1.5" opacity="0.7" />
              <line x1="180" y1="40" x2="230" y2="75" stroke="#34d399" strokeWidth="2" opacity="0.9" />
              <line x1="190" y1="120" x2="230" y2="75" stroke="#34d399" strokeWidth="2" opacity="0.9" />
              <line x1="230" y1="75" x2="280" y2="35" stroke="url(#neuralGrad1)" strokeWidth="2" opacity="0.9" />
              <line x1="230" y1="75" x2="290" y2="115" stroke="url(#neuralGrad1)" strokeWidth="2" opacity="0.9" />
              <line x1="280" y1="35" x2="330" y2="80" stroke="#06b6d4" strokeWidth="1.5" opacity="0.7" />
              <line x1="290" y1="115" x2="330" y2="80" stroke="#06b6d4" strokeWidth="1.5" opacity="0.7" />
              
              {/* Secondary Cross-Synapse Paths */}
              <line x1="180" y1="40" x2="290" y2="115" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <line x1="190" y1="120" x2="280" y2="35" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <line x1="130" y1="80" x2="330" y2="80" stroke="#34d399" strokeWidth="1" opacity="0.2" />

              {/* Memory Cluster Nodes with Radial Spheres */}
              <g filter="url(#emeraldGlow)">
                <circle cx="230" cy="75" r="16" fill="#064e3b" stroke="#34d399" strokeWidth="2.5" />
                <circle cx="230" cy="75" r="7" fill="#a7f3d0" />
                
                <circle cx="180" cy="40" r="11" fill="#042f2e" stroke="#2dd4bf" strokeWidth="2" />
                <circle cx="190" cy="120" r="11" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
                <circle cx="280" cy="35" r="12" fill="#042f2e" stroke="#22d3ee" strokeWidth="2" />
                <circle cx="290" cy="115" r="12" fill="#064e3b" stroke="#34d399" strokeWidth="2" />

                <circle cx="130" cy="80" r="9" fill="#022c22" stroke="#10b981" strokeWidth="1.8" />
                <circle cx="330" cy="80" r="9" fill="#083344" stroke="#06b6d4" strokeWidth="1.8" />
              </g>

              {/* Floating Monospace Code Snippet on Left */}
              <g opacity="0.8">
                <rect x="15" y="30" width="75" height="95" rx="6" fill="#03110b" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
                <text x="22" y="45" fill="#34d399" fontSize="6.5" fontFamily="monospace" fontWeight="bold">Local Python</text>
                <text x="22" y="58" fill="#6ee7b7" fontSize="5.5" fontFamily="monospace">import agent</text>
                <text x="22" y="70" fill="#a7f3d0" fontSize="5.5" fontFamily="monospace">agent.init()</text>
                <text x="22" y="82" fill="#a7f3d0" fontSize="5.5" fontFamily="monospace">status: ACTIVE</text>
                <text x="22" y="94" fill="#34d399" fontSize="5.5" fontFamily="monospace">&gt; Ollama</text>
                <text x="22" y="106" fill="#6ee7b7" fontSize="5.5" fontFamily="monospace">O(1) memory</text>
              </g>

              {/* Floating Memory Retention Panel on Right */}
              <g opacity="0.8">
                <rect x="370" y="30" width="75" height="95" rx="6" fill="#03110b" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.4" />
                <text x="377" y="45" fill="#22d3ee" fontSize="6.5" fontFamily="monospace" fontWeight="bold">Memory Store</text>
                <rect x="377" y="52" width="61" height="14" rx="2" fill="#064e3b" stroke="#34d399" strokeWidth="0.8" />
                <text x="382" y="62" fill="#d1fae5" fontSize="5" fontFamily="monospace">Short-Term Context</text>
                <rect x="377" y="70" width="61" height="14" rx="2" fill="#083344" stroke="#06b6d4" strokeWidth="0.8" />
                <text x="382" y="80" fill="#cffafe" fontSize="5" fontFamily="monospace">Long-Term JSON</text>
                <rect x="377" y="88" width="61" height="14" rx="2" fill="#042f2e" stroke="#2dd4bf" strokeWidth="0.8" />
                <text x="382" y="98" fill="#ccfbf1" fontSize="5" fontFamily="monospace">Episode Buffer</text>
              </g>
            </svg>
          </div>

          {/* Bottom Terminal Footprint & Hardware Studio Base */}
          <div className="relative z-10 bg-[#040e0a]/90 rounded-xl p-2.5 border border-emerald-500/25 font-mono text-[10px] text-neutral-300 flex items-center justify-between">
            <span className="text-[#34d399] font-bold">&gt; lina --state-json [PERSISTED]</span>
            <span className="text-neutral-400">Context: 100% Local · Zero API Cost</span>
          </div>
        </div>
      );

    case 'project-restaurant':
      // Digital Certification Verification & Management System (Applied DSA) - Matching p2 render
      return (
        <div className={`relative overflow-hidden bg-[#040914] flex flex-col justify-between p-4 sm:p-5 group ${className}`} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-radial from-[#2563eb]/20 via-[#071738]/40 to-[#02050c] pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between border-b border-blue-500/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-[#60a5fa] tracking-wider uppercase">ACADEMIC VERIFICATION SYSTEM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">Applied DSA Tree</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">SHA-256 Validated</span>
            </div>
          </div>

          {/* Center Cryptographic Tree Graph & Glass Academic Seal */}
          <div className="relative z-10 my-auto py-2">
            <svg className="w-full h-36 sm:h-40" viewBox="0 0 460 160" fill="none">
              <defs>
                <linearGradient id="merkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <filter id="cobaltGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Binary Search Tree Lines */}
              <line x1="140" y1="25" x2="80" y2="65" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
              <line x1="140" y1="25" x2="200" y2="65" stroke="#3b82f6" strokeWidth="2" opacity="0.8" />
              <line x1="80" y1="65" x2="45" y2="110" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
              <line x1="80" y1="65" x2="110" y2="110" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
              <line x1="200" y1="65" x2="165" y2="110" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
              <line x1="200" y1="65" x2="235" y2="110" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />

              {/* Isometric 3D Data Hash Cubes */}
              <g filter="url(#cobaltGlow)">
                {/* Root Cube */}
                <rect x="125" y="10" width="30" height="30" rx="5" fill="#172554" stroke="#60a5fa" strokeWidth="2" />
                <text x="140" y="29" fill="#bae6fd" fontSize="7" fontFamily="monospace" textAnchor="middle">ha31.38</text>

                {/* Level 1 Cubes */}
                <rect x="65" y="52" width="28" height="28" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="79" y="70" fill="#7dd3fc" fontSize="6.5" fontFamily="monospace" textAnchor="middle">0x8f2</text>
                <rect x="185" y="52" width="28" height="28" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="199" y="70" fill="#7dd3fc" fontSize="6.5" fontFamily="monospace" textAnchor="middle">0x9c4</text>

                {/* Leaf Hash Blocks */}
                <rect x="33" y="100" width="24" height="22" rx="3" fill="#082f49" stroke="#0ea5e9" strokeWidth="1.2" />
                <rect x="98" y="100" width="24" height="22" rx="3" fill="#082f49" stroke="#0ea5e9" strokeWidth="1.2" />
                <rect x="153" y="100" width="24" height="22" rx="3" fill="#082f49" stroke="#0ea5e9" strokeWidth="1.2" />
                <rect x="223" y="100" width="24" height="22" rx="3" fill="#082f49" stroke="#0ea5e9" strokeWidth="1.2" />
              </g>

              {/* Floating Holographic Glass Academic Seal (Right Side) */}
              <g transform="translate(290, 20)">
                {/* Glass Bevel Plaque */}
                <rect width="135" height="115" rx="14" fill="#082f49" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" filter="url(#cobaltGlow)" />
                <rect x="5" y="5" width="125" height="105" rx="10" fill="#0369a1" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4 3" />
                
                {/* Academic Crest Icon */}
                <circle cx="67" cy="52" r="32" stroke="#bae6fd" strokeWidth="1.5" fill="#0c4a6e" fillOpacity="0.5" />
                {/* Graduation Mortarboard & Shield */}
                <polygon points="67,35 48,44 67,52 86,44" fill="#38bdf8" />
                <rect x="58" y="47" width="18" height="14" rx="2" fill="#0284c7" stroke="#7dd3fc" strokeWidth="1" />
                <path d="M 53 62 C 58 74, 76 74, 81 62" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
                
                <text x="67" y="94" fill="#e0f2fe" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ACADEMIC VERIFIED</text>
                <text x="67" y="104" fill="#38bdf8" fontSize="6" fontFamily="monospace" textAnchor="middle">O(1) DETERMINISTIC</text>
              </g>
            </svg>
          </div>

          <div className="relative z-10 bg-[#030a16]/90 rounded-xl p-2.5 border border-blue-500/25 font-mono text-[10px] text-neutral-300 flex items-center justify-between">
            <span className="text-[#60a5fa] font-bold">SHA-256(Block_Data): 0x7f8a...e9b1</span>
            <span className="text-emerald-400 font-semibold">STATUS: TAMPER-PROOF CERTIFICATE</span>
          </div>
        </div>
      );

    case 'project-architecture':
      // Edge-to-Cloud IoT Telemetry (ESP32, Sensors, EMQX) - Matching p3 render
      return (
        <div className={`relative overflow-hidden bg-[#0c0a06] flex flex-col justify-between p-4 sm:p-5 group ${className}`} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-radial from-[#f59e0b]/20 via-[#1c1304]/40 to-[#040301] pointer-events-none" />
          
          {/* Subtle laboratory dark desk texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b] animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-[#fbbf24] tracking-wider uppercase">ESP32 TELEMETRY // MQTT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">WiFi / RF: ACTIVE</span>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">EMQX Broker QoS 1</span>
            </div>
          </div>

          {/* Center Hardware Board with Studio Lighting & Sensor Details */}
          <div className="relative z-10 my-auto py-2">
            <svg className="w-full h-36 sm:h-40" viewBox="0 0 460 160" fill="none">
              <defs>
                <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="60%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
                <filter id="amberGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* RF Wireless Radiation Rings */}
              <circle cx="330" cy="55" r="25" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
              <circle cx="330" cy="55" r="45" stroke="#eab308" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
              <circle cx="330" cy="55" r="65" stroke="#eab308" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.15" />

              {/* Circuit Board Substrate (Matte Black PCB) */}
              <g transform="translate(100, 25)">
                {/* PCB Body */}
                <rect width="250" height="110" rx="12" fill="#141414" stroke="#44403c" strokeWidth="1.5" />
                
                {/* Gold plated breadboard header pins (Top & Bottom) */}
                {Array.from({ length: 14 }).map((_, i) => (
                  <circle key={`pin-t-${i}`} cx={25 + i * 15} cy="10" r="3" fill="#0c0a09" stroke="#fbbf24" strokeWidth="1.2" />
                ))}
                {Array.from({ length: 14 }).map((_, i) => (
                  <circle key={`pin-b-${i}`} cx={25 + i * 15} cy="100" r="3" fill="#0c0a09" stroke="#fbbf24" strokeWidth="1.2" />
                ))}

                {/* USB-C Connector Port */}
                <rect x="-8" y="42" width="16" height="26" rx="3" fill="#52525b" stroke="#71717a" strokeWidth="1" />
                <rect x="-12" y="46" width="6" height="18" rx="2" fill="#27272a" />

                {/* Glowing Circuit Copper Traces */}
                <path d="M 30 55 H 70 V 75 H 95" stroke="url(#traceGrad)" strokeWidth="2" filter="url(#amberGlow)" />
                <path d="M 30 75 H 65 V 85 H 95" stroke="url(#traceGrad)" strokeWidth="1.5" opacity="0.8" />
                <path d="M 170 55 H 200 V 35 H 220" stroke="#22c55e" strokeWidth="2" filter="url(#amberGlow)" />

                {/* ESP32 Silver Metal Shielding Can */}
                <rect x="145" y="25" width="85" height="55" rx="5" fill="#27272a" stroke="#71717a" strokeWidth="1.5" />
                <rect x="150" y="30" width="75" height="45" rx="3" fill="#18181b" />
                <text x="187" y="48" fill="#e4e4e7" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ESP-WROOM-32</text>
                <text x="187" y="59" fill="#a1a1aa" fontSize="6" fontFamily="monospace" textAnchor="middle">CE 2096066</text>
                <path d="M 155 67 H 220" stroke="#3f3f46" strokeWidth="0.8" />

                {/* Main SoC Chip (Black Epoxy) */}
                <rect x="95" y="45" width="38" height="38" rx="4" fill="#0a0a0a" stroke="#262626" strokeWidth="1.5" />
                <circle cx="102" cy="52" r="1.5" fill="#71717a" />
                
                {/* Active Indicator LEDs */}
                <circle cx="75" cy="40" r="2.5" fill="#f59e0b" filter="url(#amberGlow)" />
                <circle cx="85" cy="40" r="2.5" fill="#22c55e" filter="url(#amberGlow)" />

                {/* Optical Pulse Sensor with Fiber / Probe */}
                <g transform="translate(240, 70)">
                  <rect width="18" height="20" rx="3" fill="#1c1917" stroke="#ef4444" strokeWidth="1" />
                  <circle cx="9" cy="10" r="3.5" fill="#ef4444" filter="url(#amberGlow)" />
                  <path d="M 18 10 C 35 10, 50 30, 75 35" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.8" />
                </g>
              </g>
            </svg>
          </div>

          <div className="relative z-10 bg-[#0a0802]/90 rounded-xl p-2.5 border border-amber-500/25 font-mono text-[10px] text-neutral-300 flex items-center justify-between">
            <span className="text-[#fbbf24] font-bold">ADC: 1000Hz Optical Telemetry</span>
            <span className="text-emerald-400 font-semibold">Latency: &lt;50ms · QoS 1</span>
          </div>
        </div>
      );

    case 'project-travel':
      // Interactive Prompt Game Mechanics (Echo-Trace & Chrono-Canvas) - Matching p4 render
      return (
        <div className={`relative overflow-hidden bg-[#0d0314] flex flex-col justify-between p-4 sm:p-5 group ${className}`} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-radial from-[#a855f7]/25 via-[#2b083b]/40 to-[#06010a] pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between border-b border-purple-500/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c084fc] shadow-[0_0_8px_#c084fc] animate-ping" />
              <span className="font-mono text-[11px] font-bold text-[#c084fc] tracking-wider uppercase">PROMPT GAME MECHANICS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-fuchsia-300 bg-fuchsia-950/60 px-2 py-0.5 rounded border border-fuchsia-800/40">Chrono-Canvas</span>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/40">Echo-Trace Active</span>
            </div>
          </div>

          {/* Center Luminous Generative Memory Canvas with Acoustic Rings & Paint Strokes */}
          <div className="relative z-10 my-auto py-2">
            <svg className="w-full h-36 sm:h-40" viewBox="0 0 460 160" fill="none">
              <defs>
                <linearGradient id="brushGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="brushGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="60%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <filter id="neonPurpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Dynamic Fluid Memory Paint Strokes */}
              <path
                d="M 40 130 C 100 20, 200 40, 280 80 S 390 140, 420 50"
                stroke="url(#brushGrad1)"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.85"
                filter="url(#neonPurpleGlow)"
              />
              <path
                d="M 60 40 C 140 140, 260 120, 340 70 S 410 20, 440 100"
                stroke="url(#brushGrad2)"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.75"
                filter="url(#neonPurpleGlow)"
              />

              {/* Concentric Acoustic Whisper Waveforms in Center */}
              <g transform="translate(230, 80)">
                <circle cx="0" cy="0" r="14" stroke="#ec4899" strokeWidth="2" fill="none" opacity="0.9" />
                <circle cx="0" cy="0" r="28" stroke="#d946ef" strokeWidth="1.8" strokeDasharray="3 3" fill="none" opacity="0.7" />
                <circle cx="0" cy="0" r="44" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
                <circle cx="0" cy="0" r="62" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="5 5" fill="none" opacity="0.3" />
                <circle cx="0" cy="0" r="5" fill="#f43f5e" filter="url(#neonPurpleGlow)" />
              </g>

              {/* Interactive Narrative Decision Nodes */}
              <g transform="translate(60, 40)">
                <rect width="80" height="28" rx="6" fill="#1e1035" stroke="#c084fc" strokeWidth="1.5" />
                <text x="40" y="18" fill="#f5d0fe" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">TRACE_WHISPER</text>
              </g>

              <g transform="translate(320, 30)">
                <rect width="85" height="28" rx="6" fill="#2a0833" stroke="#f472b6" strokeWidth="1.5" />
                <text x="42" y="18" fill="#fbcfe8" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CHRONO_PAINT</text>
              </g>

              <g transform="translate(190, 115)">
                <rect width="80" height="24" rx="5" fill="#160826" stroke="#a855f7" strokeWidth="1.2" />
                <text x="40" y="16" fill="#e9d5ff" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">BRANCH: DYNAMIC</text>
              </g>
            </svg>
          </div>

          <div className="relative z-10 bg-[#0d0312]/90 rounded-xl p-2.5 border border-purple-500/25 font-mono text-[10px] text-neutral-300 flex items-center justify-between">
            <span className="text-[#e879f9] font-bold">&gt; [STATE: CHRONO_CANVAS_ACTIVE]</span>
            <span className="text-cyan-400 font-semibold">Generative Narrative Mechanics</span>
          </div>
        </div>
      );

    case 'project-spatial':
      // Disaster Response Policy Modeling (Nepal Flood Relief) - Matching p5 render
      return (
        <div className={`relative overflow-hidden bg-[#030d12] flex flex-col justify-between p-4 sm:p-5 group ${className}`} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-radial from-[#06b6d4]/20 via-[#07242e]/40 to-[#010609] pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between border-b border-cyan-500/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] shadow-[0_0_8px_#06b6d4] animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-[#67e8f9] tracking-wider uppercase">DISASTER RELIEF COMMAND // NEPAL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-orange-400 bg-orange-950/60 px-2 py-0.5 rounded border border-orange-800/40">3-Pillar Allocation</span>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">GIS Tactical</span>
            </div>
          </div>

          {/* Center 3D Topographic Terrain & Relief Logistics Corridors */}
          <div className="relative z-10 my-auto py-2">
            <svg className="w-full h-36 sm:h-40" viewBox="0 0 460 160" fill="none">
              <defs>
                <linearGradient id="floodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0891b2" />
                  <stop offset="50%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 3D Himalayan Topographic Elevation Contours */}
              <path d="M 30 135 Q 120 70, 230 95 T 430 80" stroke="#0e7490" strokeWidth="1.2" opacity="0.5" fill="none" />
              <path d="M 30 115 Q 130 50, 240 75 T 430 50" stroke="#06b6d4" strokeWidth="1.5" opacity="0.65" fill="none" />
              <path d="M 40 90 Q 140 25, 250 50 T 430 30" stroke="#22d3ee" strokeWidth="1.8" opacity="0.8" fill="none" />
              <path d="M 50 65 Q 150 15, 260 30 T 420 15" stroke="#67e8f9" strokeWidth="1.2" opacity="0.4" fill="none" />

              {/* River Valley Flood Basin Drainage Vector */}
              <path
                d="M 40 100 C 130 90, 210 130, 310 110 S 410 70, 440 90"
                stroke="url(#floodGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                filter="url(#cyanGlow)"
              />

              {/* Tactical Supply Pillars */}
              <g transform="translate(60, 40)">
                <rect width="70" height="38" rx="6" fill="#082f49" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="35" y="16" fill="#7dd3fc" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">HOUSING</text>
                <text x="35" y="28" fill="#e0f2fe" fontSize="6.5" fontFamily="monospace" textAnchor="middle">PRIORITY: 1</text>
              </g>

              <g transform="translate(195, 30)">
                <rect width="75" height="38" rx="6" fill="#431407" stroke="#fb923c" strokeWidth="1.5" />
                <text x="37" y="16" fill="#fdba74" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">HEALTHCARE</text>
                <text x="37" y="28" fill="#ffedd5" fontSize="6.5" fontFamily="monospace" textAnchor="middle">EXPEDITED</text>
              </g>

              <g transform="translate(330, 40)">
                <rect width="70" height="38" rx="6" fill="#082f49" stroke="#22d3ee" strokeWidth="1.5" />
                <text x="35" y="16" fill="#67e8f9" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">W.A.S.H.</text>
                <text x="35" y="28" fill="#cffafe" fontSize="6.5" fontFamily="monospace" textAnchor="middle">CLEAN WATER</text>
              </g>

              {/* Real-time Allocation Vectors with Direction Arrows */}
              <line x1="130" y1="59" x2="195" y2="49" stroke="#f97316" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="270" y1="49" x2="330" y2="59" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
            </svg>
          </div>

          <div className="relative z-10 bg-[#020b0d]/90 rounded-xl p-2.5 border border-cyan-500/25 font-mono text-[10px] text-neutral-300 flex items-center justify-between">
            <span className="text-[#22d3ee] font-bold">Flood Catchment Logistics</span>
            <span className="text-orange-400 font-semibold">Nepal Relief Corridors</span>
          </div>
        </div>
      );

    case 'project-fashion':
      // CodSoft Enterprise Software Suite (Java ATM, Course Manager, Quiz) - Matching p6 render
      return (
        <div className={`relative overflow-hidden bg-[#0c0809] flex flex-col justify-between p-4 sm:p-5 group ${className}`} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-radial from-[#e51d24]/20 via-[#260a0e]/40 to-[#040102] pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between border-b border-red-500/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e51d24] shadow-[0_0_8px_#e51d24] animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-[#f87171] tracking-wider uppercase">ENTERPRISE JAVA SOFTWARE SUITE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">Hash Map Active</span>
              <span className="text-[10px] font-mono text-red-300 bg-red-950/40 px-2 py-0.5 rounded border border-red-800/40">CodSoft Commended</span>
            </div>
          </div>

          {/* Center Enterprise Desktop Monitor & Floating Glass Panels */}
          <div className="relative z-10 my-auto py-2">
            <svg className="w-full h-36 sm:h-40" viewBox="0 0 460 160" fill="none">
              <defs>
                <linearGradient id="javaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#b91c1c" />
                </linearGradient>
                <filter id="crimsonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Main Enterprise Display Monitor Chassis */}
              <g transform="translate(110, 15)">
                <rect width="240" height="130" rx="8" fill="#141414" stroke="#262626" strokeWidth="2" />
                <rect x="5" y="5" width="230" height="120" rx="4" fill="#0a0a0a" />

                {/* Curriculum Optimization - Enrollment Hash Map Graph */}
                <text x="15" y="20" fill="#fde047" fontSize="7" fontWeight="bold" fontFamily="monospace">CURRICULUM ENROLLMENT HASH MAP</text>
                
                {/* Node Interconnection Lines */}
                <line x1="45" y1="45" x2="110" y2="45" stroke="#f59e0b" strokeWidth="1.2" opacity="0.6" />
                <line x1="45" y1="45" x2="110" y2="75" stroke="#ef4444" strokeWidth="1.2" opacity="0.6" />
                <line x1="45" y1="75" x2="110" y2="45" stroke="#f59e0b" strokeWidth="1.2" opacity="0.6" />
                <line x1="45" y1="75" x2="110" y2="75" stroke="#ef4444" strokeWidth="1.2" opacity="0.6" />
                <line x1="45" y1="100" x2="110" y2="75" stroke="#f59e0b" strokeWidth="1.2" opacity="0.6" />

                <line x1="110" y1="45" x2="160" y2="60" stroke="#f97316" strokeWidth="1.5" opacity="0.8" />
                <line x1="110" y1="75" x2="160" y2="60" stroke="#f97316" strokeWidth="1.5" opacity="0.8" />

                {/* Source Department Nodes */}
                <circle cx="45" cy="45" r="9" fill="#1c1917" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="45" y="47.5" fill="#fef08a" fontSize="5" fontFamily="monospace" textAnchor="middle">CS101</text>

                <circle cx="45" cy="75" r="9" fill="#1c1917" stroke="#ef4444" strokeWidth="1.5" />
                <text x="45" y="77.5" fill="#fca5a5" fontSize="5" fontFamily="monospace" textAnchor="middle">BUS203</text>

                <circle cx="45" cy="100" r="9" fill="#1c1917" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="45" y="102.5" fill="#fef08a" fontSize="5" fontFamily="monospace" textAnchor="middle">ARTS</text>

                {/* Course Target Hash Buckets */}
                <circle cx="110" cy="45" r="9" fill="#262626" stroke="#ef4444" strokeWidth="1.5" />
                <text x="110" y="47.5" fill="#fca5a5" fontSize="5" fontFamily="monospace" textAnchor="middle">DS102</text>

                <circle cx="110" cy="75" r="9" fill="#262626" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="110" y="77.5" fill="#fef08a" fontSize="5" fontFamily="monospace" textAnchor="middle">BUS205</text>

                {/* Aggregated Key-Value Bucket */}
                <circle cx="160" cy="60" r="11" fill="#450a0a" stroke="#f97316" strokeWidth="2" filter="url(#crimsonGlow)" />
                <text x="160" y="63" fill="#ffedd5" fontSize="5.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">O(1)</text>

                {/* Enrollment Growth Mini Histogram */}
                <g transform="translate(150, 85)">
                  <rect x="0" y="20" width="6" height="15" fill="#f59e0b" />
                  <rect x="9" y="14" width="6" height="21" fill="#f59e0b" />
                  <rect x="18" y="8" width="6" height="27" fill="#ef4444" />
                  <rect x="27" y="2" width="6" height="33" fill="#ef4444" />
                  <rect x="36" y="10" width="6" height="25" fill="#f97316" />
                  <rect x="45" y="0" width="6" height="35" fill="#22c55e" />
                </g>
              </g>

              {/* Left Floating Translucent HUD: ATM Banking Interface */}
              <g transform="translate(15, 25)">
                <rect width="85" height="110" rx="8" fill="#18181b" fillOpacity="0.75" stroke="#ef4444" strokeWidth="1.5" filter="url(#crimsonGlow)" />
                <text x="10" y="18" fill="#fca5a5" fontSize="6.5" fontWeight="bold" fontFamily="monospace">ATM CORE</text>
                <text x="10" y="30" fill="#a1a1aa" fontSize="5" fontFamily="monospace">SESSION: XJ9876</text>
                <rect x="10" y="36" width="65" height="18" rx="3" fill="#09090b" stroke="#3f3f46" strokeWidth="0.8" />
                <text x="15" y="48" fill="#22c55e" fontSize="7" fontWeight="bold" fontFamily="monospace">$5,432.10</text>
                <text x="10" y="66" fill="#f87171" fontSize="5.5" fontFamily="monospace">&gt; INSERT PIN</text>
                <text x="10" y="78" fill="#e4e4e7" fontSize="5.5" fontFamily="monospace">&gt; WITHDRAW OK</text>
                <text x="10" y="90" fill="#a1a1aa" fontSize="5" fontFamily="monospace">POS: APPROVED</text>
              </g>

              {/* Right Floating Translucent HUD: Live Transaction Monitor */}
              <g transform="translate(360, 25)">
                <rect width="85" height="110" rx="8" fill="#18181b" fillOpacity="0.75" stroke="#f59e0b" strokeWidth="1.5" filter="url(#crimsonGlow)" />
                <text x="10" y="18" fill="#fde047" fontSize="6.5" fontWeight="bold" fontFamily="monospace">LIVE MONITOR</text>
                <text x="10" y="30" fill="#a1a1aa" fontSize="5" fontFamily="monospace">UPTIME: 45D 08H</text>
                <rect x="10" y="36" width="65" height="18" rx="3" fill="#09090b" stroke="#3f3f46" strokeWidth="0.8" />
                <text x="15" y="48" fill="#f59e0b" fontSize="7" fontWeight="bold" fontFamily="monospace">12,345 SESS</text>
                <text x="10" y="66" fill="#22c55e" fontSize="5.5" fontFamily="monospace">LATENCY: 1.25s</text>
                <text x="10" y="78" fill="#e4e4e7" fontSize="5.5" fontFamily="monospace">ALERTS: 0</text>
                <text x="10" y="90" fill="#f87171" fontSize="5.5" fontFamily="monospace">STATUS: STABLE</text>
              </g>
            </svg>
          </div>

          <div className="relative z-10 bg-[#0c0204]/90 rounded-xl p-2.5 border border-red-500/25 font-mono text-[10px] text-neutral-300 flex items-center justify-between">
            <span className="text-[#f87171] font-bold">Java OOP Architecture</span>
            <span className="text-emerald-400 font-semibold">3 Production Systems Shipped</span>
          </div>
        </div>
      );

    case 'client-olivia':
      return (
        <div className={`relative overflow-hidden bg-[#110506] ${className}`} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-radial from-[#e51d24]/50 via-[#700d11]/30 to-[#0a0203]" />
          <svg className="w-full h-full object-cover" viewBox="0 0 500 500" fill="none">
            <rect width="500" height="500" fill="#0d0406" />
            <circle cx="280" cy="220" r="180" fill="#e51d24" opacity="0.4" filter="blur(40px)" />
            {/* Person Face with Glasses Looking Up and Left */}
            <path d="M120 500 C 140 370, 200 320, 270 320 C 340 320, 400 370, 430 500 Z" fill="#080203" />
            <path d="M210 230 C 210 160, 260 140, 310 150 C 350 170, 360 230, 340 280 C 310 320, 240 310, 220 280 Z" fill="#fca5a5" opacity="0.8" />
            {/* Short cropped hair */}
            <path d="M200 210 C 190 140, 250 120, 320 130 C 360 140, 370 190, 350 230 C 320 180, 260 170, 200 210 Z" fill="#290709" />
            {/* Glasses Frames */}
            <circle cx="255" cy="225" r="22" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.9" />
            <circle cx="310" cy="235" r="22" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.9" />
            <line x1="277" y1="228" x2="288" y2="230" stroke="#ffffff" strokeWidth="2.5" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />
        </div>
      );

    case 'footer-night':
      return (
        <div className={`relative overflow-hidden bg-[#0c0406] ${className}`} role="img" aria-label={alt}>
          <div className="absolute inset-0 bg-radial from-[#e51d24]/40 via-[#66090e]/30 to-[#070204]" />
          <svg className="w-full h-full object-cover" viewBox="0 0 500 450" fill="none">
            <rect width="500" height="450" fill="#0a0305" />
            {/* City Architecture Silhouette & Vertical Neon Bars */}
            <rect x="50" y="40" width="80" height="410" fill="#140608" opacity="0.8" />
            <rect x="150" y="90" width="90" height="360" fill="#1c070b" opacity="0.7" />
            <rect x="260" y="30" width="120" height="420" fill="#120507" opacity="0.8" />
            <line x1="140" y1="50" x2="140" y2="350" stroke="#e51d24" strokeWidth="4" opacity="0.6" filter="blur(2px)" />
            <line x1="250" y1="80" x2="250" y2="400" stroke="#ff363d" strokeWidth="3" opacity="0.5" />
            {/* Man in Dark Coat Portrait */}
            <circle cx="340" cy="240" r="140" fill="#e51d24" opacity="0.45" filter="blur(40px)" />
            <path d="M210 450 C 230 330, 300 280, 360 280 C 420 280, 470 330, 490 450 Z" fill="#080203" />
            <path d="M300 220 C 300 160, 340 140, 380 150 C 410 160, 420 210, 410 250 C 380 280, 330 270, 310 250 Z" fill="#fca5a5" opacity="0.75" />
            {/* Red rim lighting */}
            <path d="M350 280 L 400 350 L 440 450" stroke="#e51d24" strokeWidth="3" opacity="0.6" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        </div>
      );

    default:
      return (
        <div className={`relative bg-neutral-900 ${className}`}>
          <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-500 font-mono">
            PROFTO.
          </div>
        </div>
      );
  }
};
