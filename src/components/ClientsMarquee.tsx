import React from 'react';
import { Cpu, Terminal, Network, ShieldCheck, Zap, Layers, Binary } from 'lucide-react';

export const ClientsMarquee: React.FC = () => {
  const ecosystems = [
    { name: 'NIET (CSE AI)', icon: Binary },
    { name: 'CodSoft Intern', icon: ShieldCheck },
    { name: 'Ollama Local LLM', icon: Terminal },
    { name: 'ESP32 & Sensors', icon: Cpu },
    { name: 'EMQX MQTT Broker', icon: Network },
    { name: 'Applied DSA & OOP', icon: Layers },
    { name: 'Python Agent Systems', icon: Zap },
  ];

  return (
    <div className="relative py-8 sm:py-10 border-y border-white/[0.08] bg-[#0c0c0c] overflow-hidden select-none">
      {/* Fade Gradients at Left & Right Edges for smooth marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-12 sm:gap-20">
        {[...ecosystems, ...ecosystems, ...ecosystems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200 cursor-default shrink-0 group"
            >
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-[#e51d24]/50 group-hover:text-[#e51d24] transition-all">
                <Icon className="w-4 h-4 stroke-[1.8]" />
              </div>
              <span className="font-sans font-bold text-sm sm:text-base tracking-wider text-neutral-300 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

