import React from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Download, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Copy, 
  Check, 
  Search, 
  Users, 
  Briefcase,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/profileData';

interface HeroProps {
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyText }) => {
  const renderSlideItem = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex items-center gap-x-4 text-[11px] sm:text-xs text-[#596174] font-medium pr-4 flex-shrink-0">
      {/* 1. Phone */}
      <div className="flex items-center gap-1.5 bg-[#FAF8FF] px-2.5 py-1 rounded-full border border-purple-100 shadow-2xs hover:border-[#6D3FD1]/40 transition-colors">
        <Phone className="w-3 h-3 text-[#6D3FD1]" />
        <a href={`tel:${profileData.contact.primaryPhone}`} className="hover:text-[#6D3FD1] font-bold text-[#151B2E]">
          {profileData.contact.primaryPhone}
        </a>
        <button
          onClick={() => onCopyText(profileData.contact.primaryPhone, 'Primary Phone')}
          className="text-gray-400 hover:text-[#6D3FD1] p-0.5 ml-0.5"
          title="Copy phone"
        >
          <Copy className="w-2.5 h-2.5" />
        </button>
      </div>

      <span className="text-purple-300 font-bold">•</span>

      {/* 2. Email */}
      <div className="flex items-center gap-1.5 bg-[#FAF8FF] px-2.5 py-1 rounded-full border border-purple-100 shadow-2xs hover:border-[#6D3FD1]/40 transition-colors">
        <Mail className="w-3 h-3 text-[#6D3FD1]" />
        <a href={`mailto:${profileData.contact.primaryEmail}`} className="hover:text-[#6D3FD1] font-bold text-[#151B2E]">
          {profileData.contact.primaryEmail}
        </a>
        <button
          onClick={() => onCopyText(profileData.contact.primaryEmail, 'Primary Email')}
          className="text-gray-400 hover:text-[#6D3FD1] p-0.5 ml-0.5"
          title="Copy email"
        >
          <Copy className="w-2.5 h-2.5" />
        </button>
      </div>

      <span className="text-purple-300 font-bold">•</span>

      {/* 3. LinkedIn */}
      <div className="flex items-center gap-1.5 bg-[#FAF8FF] px-2.5 py-1 rounded-full border border-purple-100 shadow-2xs hover:border-[#6D3FD1]/40 transition-colors">
        <Linkedin className="w-3 h-3 text-[#6D3FD1]" />
        <a
          href={profileData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6D3FD1] hover:text-[#5B2FBE] font-bold flex items-center gap-1"
        >
          <span>LinkedIn Profile</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      <span className="text-purple-300 font-bold">•</span>

      {/* 4. Location */}
      <div className="flex items-center gap-1.5 bg-[#FAF8FF] px-2.5 py-1 rounded-full border border-purple-100 shadow-2xs">
        <MapPin className="w-3 h-3 text-[#6D3FD1]" />
        <span className="font-semibold text-[#151B2E]">Lucknow, UP, India</span>
      </div>

      <span className="text-purple-300 font-bold">•</span>

      {/* 5. Opportunity Badge */}
      <div className="flex items-center gap-1.5 bg-[#111625] text-purple-200 px-2.5 py-1 rounded-full border border-purple-400/30 text-[10px] font-bold">
        <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
        <span>Open to HR & TA Roles</span>
      </div>

      <span className="text-purple-300 font-bold">•</span>
    </div>
  );

  return (
    <section id="hero" className="relative pt-10 pb-8 sm:pt-14 sm:pb-12 md:pt-16 md:pb-14 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      
      {/* Subtle Abstract Wave SVG Background */}
      <div className="bg-wave-svg overflow-hidden">
        <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M400,200 C650,50 850,450 1200,250 L1200,800 L400,800 Z" fill="url(#waveGrad1)" opacity="0.3" />
          <path d="M550,150 C750,300 950,100 1200,400" stroke="url(#waveStroke1)" strokeWidth="1.2" opacity="0.4" fill="none" />
          <path d="M500,180 C720,340 920,130 1200,430" stroke="url(#waveStroke2)" strokeWidth="1" opacity="0.35" fill="none" />
          <defs>
            <linearGradient id="waveGrad1" x1="400" y1="200" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DDD6FE" stopOpacity="0.3" />
              <stop offset="1" stopColor="#EDE9FE" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="waveStroke1" x1="500" y1="150" x2="1200" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A78BFA" />
              <stop offset="1" stopColor="#7C4DDB" />
            </linearGradient>
            <linearGradient id="waveStroke2" x1="500" y1="180" x2="1200" y2="430" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C4B5FD" />
              <stop offset="1" stopColor="#9B6CFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient Glows */}
      <div className="ambient-glow-purple"></div>
      <div className="ambient-glow-center"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start relative z-10">
        
        {/* =========================================================================
             LEFT COLUMN (Approx. 65%): Spacious, Authoritative & Balanced
             ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-8 flex flex-col justify-between space-y-4 sm:space-y-4.5 text-left pt-1 min-w-0"
        >
          
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[#111625] text-purple-200 border border-purple-400/30 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for HR & TA Roles</span>
            </div>

            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white border border-purple-200 text-[#596174] shadow-sm">
              <MapPin className="w-3 h-3 text-[#6D3FD1]" />
              <span>Lucknow, UP, India</span>
            </div>
          </div>

          {/* Hero Name Heading */}
          <div className="space-y-0.5">
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-[#151B2E] leading-tight">
              Mayank <span className="gradient-purple-text">Chakrawarti</span>
            </h1>
          </div>

          {/* Subtitle with Purple Underline */}
          <div className="space-y-1">
            <p className="text-xs sm:text-base lg:text-lg font-extrabold text-[#151B2E] leading-snug">
              Human Resource Executive & Talent Acquisition Specialist
            </p>
            <div className="w-10 h-0.5 bg-[#6D3FD1] rounded-full"></div>
          </div>

          {/* Short Professional Description */}
          <p className="text-xs sm:text-sm text-[#596174] leading-relaxed max-w-xl font-medium">
            {profileData.summary}
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 sm:gap-3 pt-1">
            <a
              href="#contact"
              className="btn-purple-primary py-2.5 px-3.5 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1.5 cursor-pointer shadow-md text-center"
            >
              <Send className="w-3.5 h-3.5 text-white" />
              <span>Let's Connect</span>
            </a>

            <button
              onClick={() => window.print()}
              className="btn-soft-outline py-2.5 px-3.5 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-sm text-center"
            >
              <Download className="w-3.5 h-3.5 text-[#151B2E]" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Dedicated One-Line Sliding Loop Ribbon (Right to Left) */}
          <div className="pt-2 w-full max-w-full overflow-hidden">
            <div className="ticker-container-wrap rounded-full bg-white/95 border border-purple-200 shadow-[0_2px_12px_rgba(109,63,209,0.08)] py-2 px-3 backdrop-blur-sm group/ticker">
              {/* Soft Edge Fade Masks */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 rounded-l-full"></div>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 rounded-r-full"></div>

              {/* Continuous Sliding Loop Track */}
              <div className="ticker-slide-track whitespace-nowrap flex items-center">
                {renderSlideItem('grp1')}
                {renderSlideItem('grp2')}
              </div>
            </div>
          </div>

        </motion.div>

        {/* =========================================================================
             RIGHT COLUMN: Full-width on Mobile, Sleek 340px on Desktop
             ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="w-full lg:col-span-4 lg:max-w-[340px] lg:ml-auto lg:mr-0"
        >
          <div className="dark-info-card w-full p-4 sm:p-5 space-y-3 relative overflow-hidden shadow-xl rounded-2xl sm:rounded-3xl border border-slate-800">
            
            {/* Logo & Verification Badge Header */}
            <div className="flex flex-col items-center text-center space-y-1.5 pt-0.5">
              
              {/* Compact Circular Logo with Glowing Rim */}
              <div className="relative group cursor-pointer">
                <div 
                  className="rounded-full border border-purple-400/80 p-0.5 shadow-[0_0_14px_rgba(167,139,250,0.35)] bg-[#171C2D] flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden"
                  style={{ width: '60px', height: '60px' }}
                >
                  <img
                    src="assets/logo.png"
                    alt="Mayank Chakrawarti Emblem"
                    className="w-full h-full object-contain"
                    style={{ maxWidth: '52px', maxHeight: '52px' }}
                  />
                </div>

                {/* Small Verification Badge */}
                <div className="absolute bottom-0 right-0 w-4.5 h-4.5 rounded-full bg-gradient-to-r from-[#6D3FD1] to-[#9B6CFF] border-2 border-[#111625] flex items-center justify-center shadow-md">
                  <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                </div>
              </div>

              {/* Verified Pill */}
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#201B42] border border-purple-500/30 text-purple-300 text-[8.5px] font-extrabold tracking-wider uppercase mt-0.5">
                VERIFIED HR PROFESSIONAL
              </div>

              {/* Name & Headline */}
              <div className="space-y-0.5">
                <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                  Mayank Chakrawarti
                </h3>
                <p className="text-[10px] sm:text-[11px] text-gray-300 leading-tight">
                  End-to-End Recruitment & TA Specialist
                </p>
              </div>
            </div>

            {/* Thin Horizontal Divider */}
            <div className="border-t border-slate-800 my-1.5"></div>

            {/* What I Do Section (3 Compact Items) */}
            <div className="space-y-2">
              <h4 className="text-[9.5px] font-extrabold uppercase tracking-wider text-purple-400">
                Core Specializations
              </h4>

              <div className="space-y-2">
                {/* Item 1 */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#171C2D] border border-slate-800 flex items-center gap-2.5 hover:border-purple-500/40 transition-colors w-full">
                  <div className="w-7 h-7 rounded-lg bg-[#201B42] border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-tight">Talent Acquisition</h5>
                    <p className="text-[9.5px] text-gray-400 leading-tight mt-0.5">End-to-end recruitment pipeline</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#171C2D] border border-slate-800 flex items-center gap-2.5 hover:border-purple-500/40 transition-colors w-full">
                  <div className="w-7 h-7 rounded-lg bg-[#201B42] border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-tight">Recruitment & Sourcing</h5>
                    <p className="text-[9.5px] text-gray-400 leading-tight mt-0.5">Candidate mapping & headhunting</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#171C2D] border border-slate-800 flex items-center gap-2.5 hover:border-purple-500/40 transition-colors w-full">
                  <div className="w-7 h-7 rounded-lg bg-[#201B42] border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-tight">HR Operations & MIS</h5>
                    <p className="text-[9.5px] text-gray-400 leading-tight mt-0.5">Onboarding & record compliance</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
