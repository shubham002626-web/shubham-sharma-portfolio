/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsMarquee } from './components/ClientsMarquee';
import { CreativeServices } from './components/CreativeServices';
import { AboutBio } from './components/AboutBio';
import { FeaturedWork } from './components/FeaturedWork';
import { WorkingProcess } from './components/WorkingProcess';
import { Awards } from './components/Awards';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PageTransitionProvider } from './components/PageTransition';
import { CustomCursor } from './components/CustomCursor';
import { ThemeProvider } from './components/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Preloader } from './components/Preloader';
import { CommandPalette } from './components/CommandPalette';
import { QuickFloatingAction } from './components/QuickFloatingAction';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setPaletteOpen((prev) => !prev);
    };
    window.addEventListener('toggle-command-palette', handleToggle);
    return () => window.removeEventListener('toggle-command-palette', handleToggle);
  }, []);

  return (
    <ThemeProvider>
      <PageTransitionProvider>
        {/* Starting Curtain Preloader Animation */}
        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {/* Global Editorial Command Palette (Cmd+K) */}
        <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />

        {/* Floating Quick Action & Back to Top */}
        <QuickFloatingAction />

        {/* Subtle Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Editorial Magnetic Cursor */}
        <CustomCursor />

        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#e51d24] selection:text-white relative">
          {/* Architectural Background Grid Lines */}
          <BackgroundGrid />

          {/* Main Content Flow */}
          <div className="relative z-10">
            {/* Navigation Bar */}
            <Navbar
              onReplayIntro={() => setLoading(true)}
              onOpenPalette={() => setPaletteOpen(true)}
            />

            {/* Hero Section */}
            <Hero />

            {/* Clients Marquee */}
            <ClientsMarquee />

            {/* Creative Services */}
            <CreativeServices />

            {/* About Me & Bio Skills */}
            <AboutBio />

            {/* Featured Work Grid */}
            <FeaturedWork />

            {/* Working Process */}
            <WorkingProcess />

            {/* Awards & Recognition */}
            <Awards />

            {/* Contact Inquiry Section */}
            <ContactSection />

            {/* Footer & Brand Outro */}
            <Footer />
          </div>
        </div>
      </PageTransitionProvider>
    </ThemeProvider>
  );
}
