import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic chromatic ambient refractive orbs for deep glassmorphism */}
      <div
        aria-hidden="true"
        className="absolute -top-[15%] left-[10%] w-[550px] h-[550px] rounded-full opacity-25 blur-[130px] pointer-events-none animate-pulse"
        style={{
          background: 'radial-gradient(circle, var(--accent-primary, #e51d24) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 70%)',
          animationDuration: '9s',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(16, 185, 129, 0.3) 50%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[5%] left-[20%] w-[650px] h-[650px] rounded-full opacity-18 blur-[160px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, var(--accent-primary, #e51d24) 40%, transparent 70%)',
        }}
      />

      {/* 6 vertical architectural grid lines */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between">
        <div className="w-[1px] h-full bg-white/[0.04] theme-grid-line" />
        <div className="w-[1px] h-full bg-white/[0.04] theme-grid-line hidden sm:block" />
        <div className="w-[1px] h-full bg-white/[0.04] theme-grid-line" />
        <div className="w-[1px] h-full bg-white/[0.04] theme-grid-line hidden md:block" />
        <div className="w-[1px] h-full bg-white/[0.04] theme-grid-line" />
        <div className="w-[1px] h-full bg-white/[0.04] theme-grid-line hidden sm:block" />
        <div className="w-[1px] h-full bg-white/[0.04] theme-grid-line" />
      </div>
    </div>
  );
};
