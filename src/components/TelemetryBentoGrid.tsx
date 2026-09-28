import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, Zap, TrendingUp, Heart, Check, Clock } from 'lucide-react';

interface MetricBoxProps {
  className?: string;
}

export const TelemetryBentoGrid: React.FC<MetricBoxProps> = ({ className = '' }) => {
  const [pulseKey, setPulseKey] = useState(0);

  // Live heart rate simulator for authentic telemetry feel
  const [bpm, setBpm] = useState(162);

  useEffect(() => {
    const interval = setInterval(() => {
      setBpm((prev) => 160 + Math.floor(Math.sin(Date.now() / 1000) * 4) + Math.floor(Math.random() * 3));
      setPulseKey((k) => k + 1);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full max-w-[1100px] mx-auto p-4 sm:p-6 bg-[#161819] rounded-[36px] sm:rounded-[44px] border border-white/[0.06] shadow-2xl shadow-black/80 text-white font-sans ${className}`}>
      {/* Grid container with rounded cards matching video 00:00 - 00:08 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4.5">

        {/* 1. TOP-LEFT CARD: 4-Item Telemetry / Sensor Stream Pills (col-span-6) */}
        <div className="md:col-span-6 bg-[#212425] rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 flex flex-col justify-between border border-white/[0.05] shadow-lg">
          <div className="space-y-2.5">
            {/* Row 1: ESP32 ADC */}
            <div className="flex items-center gap-3 bg-[#1a1c1d] rounded-[16px] px-3.5 py-2.5 border border-white/[0.03]">
              <span className="bg-[#ccff00] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-[8px] tracking-wide font-mono">
                ESP32
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium text-neutral-200 truncate">
                ADC Ingestion Rate: 1000 Hz · Optical Sensor Active
              </span>
            </div>

            {/* Row 2: EMQX */}
            <div className="flex items-center gap-3 bg-[#1a1c1d] rounded-[16px] px-3.5 py-2.5 border border-white/[0.03]">
              <span className="bg-[#a8e600] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-[8px] tracking-wide font-mono">
                EMQX
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium text-neutral-200 truncate">
                Cloud MQTT Broker: QoS 1 · 0 Dropped Packets
              </span>
            </div>

            {/* Row 3: Packets */}
            <div className="flex items-center gap-3 bg-[#1a1c1d] rounded-[16px] px-3.5 py-2.5 border border-white/[0.03]">
              <span className="bg-neutral-800 text-neutral-400 text-[10px] font-bold uppercase px-2 py-0.5 rounded-[8px] tracking-wide font-mono">
                DATA
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium text-neutral-300 truncate">
                Telemetry Frame #24,910 · Optical Waveform Ingested
              </span>
            </div>

            {/* Row 4: Latency */}
            <div className="flex items-center gap-3 bg-[#1a1c1d] rounded-[16px] px-3.5 py-2.5 border border-white/[0.03]">
              <span className="bg-[#ccff00] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-[8px] tracking-wide font-mono">
                EDGE
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium text-neutral-200 truncate">
                Latency: 28ms · Edge-to-Cloud Hardware Link Validated
              </span>
            </div>
          </div>
        </div>

        {/* 2. TOP-RIGHT CARD: 7-Day Recovery Trends Histogram (col-span-6) */}
        <div className="md:col-span-6 bg-[#212425] rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 flex flex-col justify-between border border-white/[0.05] shadow-lg relative overflow-hidden">
          {/* Subtle lime glow in background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Bar Chart (7 rounded bars with neon lime gradient) */}
          <div className="flex items-end justify-between gap-2.5 h-28 pt-2 px-1">
            {[42, 60, 78, 65, 84, 96, 74].map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full rounded-[10px] bg-gradient-to-t from-[#84a900] via-[#b4f000] to-[#ccff00] shadow-[0_0_12px_rgba(204,255,0,0.2)]"
                />
              </div>
            ))}
          </div>

          {/* Bottom Bar Info */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-3">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              7-DAY RECOVERY TREND
            </span>
            <div className="flex items-center gap-1 text-[#ccff00] font-mono text-xs font-bold">
              <span>▲ 14%</span>
            </div>
          </div>
        </div>

        {/* 3. MIDDLE-LEFT CARD: Heart Rate Live EKG Wave (col-span-7) */}
        <div className="md:col-span-7 bg-[#212425] rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 flex flex-col justify-between border border-white/[0.05] shadow-lg relative overflow-hidden">
          {/* Top Row: Title + Live Pill */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              OPTICAL TELEMETRY SENSOR (ESP32 ADC)
            </span>
            <div className="flex items-center gap-1.5 bg-[#181a1b] rounded-full px-2.5 py-0.5 border border-white/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              <span className="text-[9px] font-mono text-[#ccff00] tracking-wider uppercase font-bold">
                STREAMING
              </span>
            </div>
          </div>

          {/* Big BPM + Zone Pill */}
          <div className="flex items-baseline justify-between my-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                {bpm}
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase font-bold">
                HZ SAMPLING
              </span>
            </div>
            
            <div className="bg-[#1a1d17] border border-[#ccff00]/30 rounded-full px-3 py-1">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#ccff00] font-bold tracking-wider uppercase">
                EMQX MQTT · ACTIVE
              </span>
            </div>
          </div>

          {/* Animated Green Neon Heartbeat Line SVG */}
          <div className="w-full h-12 relative overflow-hidden flex items-center mt-1">
            <svg
              className="w-full h-10 overflow-visible"
              viewBox="0 0 500 60"
              preserveAspectRatio="none"
            >
              {/* Subtle background guide line */}
              <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              
              {/* Animated pulse wave */}
              <path
                d="M0,30 L80,30 L110,30 L125,12 L135,48 L145,5 L155,55 L165,30 L200,30 L280,30 L295,12 L305,48 L315,5 L325,55 L335,30 L380,30 L500,30"
                fill="none"
                stroke="#ccff00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="filter drop-shadow-[0_0_6px_rgba(204,255,0,0.7)]"
              />
            </svg>
          </div>
        </div>

        {/* 4. MIDDLE-RIGHT CARD: Recovery Radial Ring Dial (col-span-5) */}
        <div className="md:col-span-5 bg-[#212425] rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 flex flex-col justify-between border border-white/[0.05] shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              RECOVERY
            </span>
            <span className="text-[10px] font-mono text-neutral-500 font-bold">
              07:18
            </span>
          </div>

          {/* Circular Neon Dial & Score */}
          <div className="flex items-center gap-5 my-auto py-2">
            {/* Radial SVG Dial */}
            <div className="relative w-20 h-20 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                {/* Background Ring */}
                <path
                  className="text-neutral-800"
                  strokeWidth="3.8"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Neon Lime Progress Arc (87%) */}
                <path
                  className="text-[#ccff00] drop-shadow-[0_0_8px_rgba(204,255,0,0.6)]"
                  strokeDasharray="87, 100"
                  strokeLinecap="round"
                  strokeWidth="3.8"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>

            {/* Score & HRV details */}
            <div>
              <div className="font-display text-4xl sm:text-5xl font-black text-white leading-none">
                87<span className="text-xl text-neutral-400 font-sans font-light">%</span>
              </div>
              <div className="text-[11px] font-mono text-[#ccff00] font-semibold mt-1">
                HRV +12ms ▲
              </div>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM-LEFT CARD: 3 Key Metrics Telemetry (col-span-7) */}
        <div className="md:col-span-7 bg-[#212425] rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 flex flex-col justify-between border border-white/[0.05] shadow-lg">
          <div className="space-y-3">
            {/* Metric 1 */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.05]">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono text-neutral-400 uppercase font-bold tracking-wider">
                  HRV
                </span>
                <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wide">
                  RECOVERY
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl sm:text-2xl font-black text-white">87</span>
                <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold">PRIMED</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.05]">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono text-neutral-400 uppercase font-bold tracking-wider">
                  HEAT
                </span>
                <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wide">
                  SESSION
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl sm:text-2xl font-black text-white">54:00</span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold">VO₂</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono text-neutral-400 uppercase font-bold tracking-wider">
                  LATER
                </span>
                <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wide">
                  STRAIN
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl sm:text-2xl font-black text-white">12.4</span>
                <span className="text-[10px] font-mono text-[#ccff00] uppercase font-bold">ON TRACK</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6. BOTTOM-RIGHT CARD: Streak 21 Days + Dot Matrix (col-span-5) */}
        <div className="md:col-span-5 bg-[#212425] rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 flex flex-col justify-between border border-white/[0.05] shadow-lg">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              STREAK
            </span>
            <span className="text-[10px] font-mono text-[#ccff00] font-bold">
              PR
            </span>
          </div>

          {/* Big Number 21 + DAYS */}
          <div className="flex items-baseline gap-2 my-1">
            <span className="font-display text-4xl sm:text-5xl font-black text-white leading-none">
              21
            </span>
            <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider">
              DAYS
            </span>
          </div>

          {/* Matrix of rounded activity pills (3 rows x 7 columns) */}
          <div className="grid grid-cols-7 gap-1.5 mt-2">
            {Array.from({ length: 21 }).map((_, i) => {
              const active = i < 18;
              return (
                <div
                  key={i}
                  className={`h-4.5 rounded-[6px] transition-all duration-300 ${
                    active
                      ? 'bg-[#ccff00] shadow-[0_0_4px_rgba(204,255,0,0.5)]'
                      : 'bg-neutral-800/80 border border-white/[0.03]'
                  }`}
                />
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
