import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AvailabilityBanner from './components/AvailabilityBanner';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import SkillsRadar from './components/SkillsRadar';
import LookingFor from './components/LookingFor';
import Contact from './components/Contact';
import CursorCat from './components/CursorCat';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Interactive scroll monitoring to update active nav state dynamically
  useEffect(() => {
    const sections = ['home', 'projects', 'experience', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for headers
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main 
      className="relative w-full min-h-screen text-foreground overflow-x-hidden flex flex-col justify-between" 
      id="velorah-root"
    >
      {/* Cinematic Looping Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
        className="fixed inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
        id="background-video"
      />

      {/* Classy Dark Glassmorphic Reading Overlay over the video backdrop */}
      <div 
        className="fixed inset-0 bg-black/55 backdrop-blur-[1px] z-0 pointer-events-none" 
        id="video-overlay"
      />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Availability Banner — floats just below the navbar */}
      <AvailabilityBanner />

      {/* Main Scroll Content */}
      <div className="relative z-10 w-full" id="content-container">
        
        {/* Section 1: Hero */}
        <Hero onScrollToProjects={handleScrollToProjects} />

        {/* Section 2: Tech Stack Marquee */}
        <TechMarquee />

        {/* Section 3: Journey Timeline */}
        <Timeline />

        {/* Section 4: Projects Grid */}
        <Projects />

        {/* Section 5: Open Source Contributions */}
        <OpenSource />

        {/* Section 6: Professional Internships */}
        {/* removed — now shown in Timeline above */}

        {/* Section 7: Skills & Education credentials */}
        <SkillsRadar />

        {/* Section 8: What I'm Looking For */}
        <LookingFor />

        {/* Section 9: Contact */}
        <Contact />

      </div>

      {/* Footnote */}
      <footer className="relative z-10 w-full border-t border-white/5 bg-[#03151f]/60 backdrop-blur-sm py-8" id="footer-block">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>© 2026 Jagjeet Singh Dhillon. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-white/20 select-none">|</span>
            <p>ACTIVE NODE: PORT 3000</p>
            <span className="text-white/20 select-none">|</span>
            <p>COMMS STATUS: SECURE</p>
          </div>
        </div>
      </footer>

      {/* Pixelated cursor-following cat 🐱 */}
      <CursorCat />
    </main>
  );
}
