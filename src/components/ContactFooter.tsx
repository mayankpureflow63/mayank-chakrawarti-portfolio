import React from 'react';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  ExternalLink, 
  PhoneCall, 
  ArrowUp,
  Sparkles,
  UserCheck,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Home,
  CheckCircle2,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { contactData } from '../data/profileData';

interface ContactFooterProps {
  onCopyText: (text: string, label: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onCopyText }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home / Hero', href: '#hero', icon: Home },
    { name: 'About & Overview', href: '#about', icon: UserCheck },
    { name: 'Work Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills & Capabilities', href: '#skills', icon: Sparkles },
    { name: 'Education & Academics', href: '#education', icon: GraduationCap },
    { name: 'Get In Touch / Contact', href: '#contact', icon: MessageSquare },
  ];

  const pillarLinks = [
    'Talent Sourcing & Headhunting',
    'Candidate Screening & Assessment',
    'Shortlisting & Panel Coordination',
    'Offers & Onboarding Lifecycle',
    'Employer Branding & Networking',
    'HR Operations & MIS Analytics',
  ];

  return (
    <div className="w-full bg-[#F8F9FC]">
      
      {/* =========================================================================
           1. CENTERED DARK CONTACT SECTION (Single-Column Executive Presentation)
           ========================================================================= */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#080D1D] via-[#10182B] to-[#070A12] border border-[#273047] rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 md:p-10 shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden">
          
          {/* Subtle Glow inside Contact Card */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl"></div>

          {/* Header (Centered) */}
          <div className="text-center space-y-2 sm:space-y-3 max-w-xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D1735] border border-[#4C3B78] text-[#C4B5FD] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
              <span>💬 GET IN TOUCH</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F5F5F7] tracking-tight">
              Let's Connect & <span className="text-[#A78BFA]">Collaborate</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#A8B0C2] leading-relaxed">
              Open to HR Executive, Talent Acquisition, and Recruitment opportunities. Reach out directly through any preferred channel.
            </p>
          </div>

          {/* 4 Contact Information Cards (Compact Horizontal List) */}
          <div className="space-y-2.5 sm:space-y-3 relative z-10">
            
            {/* Card 1: Primary Phone */}
            <div className="bg-[#121A2C] border border-[#273047] hover:border-[#8B5CF6]/60 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between shadow-lg hover:shadow-[0_8px_25px_rgba(139,92,246,0.12)] hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1D1735] border border-[#4C3B78] flex items-center justify-center text-[#A78BFA] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10.5px] sm:text-[11px] font-medium text-[#A8B0C2] leading-none mb-1">
                    Primary Phone
                  </p>
                  <a
                    href={`tel:${contactData.primaryPhone}`}
                    className="text-xs sm:text-sm md:text-base font-bold text-[#F5F5F7] tracking-tight hover:text-[#C4B5FD] transition-colors block truncate"
                  >
                    {contactData.primaryPhone}
                  </a>
                </div>
              </div>

              <a
                href={`tel:${contactData.primaryPhone}`}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#191F33] border border-[#2D3854] hover:bg-[#201B42] hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#A78BFA] hover:text-white transition-all flex-shrink-0 ml-2"
                title="Call Directly"
              >
                <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>

            {/* Card 2: Email */}
            <div className="bg-[#121A2C] border border-[#273047] hover:border-[#8B5CF6]/60 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between shadow-lg hover:shadow-[0_8px_25px_rgba(139,92,246,0.12)] hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1D1735] border border-[#4C3B78] flex items-center justify-center text-[#A78BFA] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10.5px] sm:text-[11px] font-medium text-[#A8B0C2] leading-none mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactData.primaryEmail}`}
                    className="text-xs sm:text-sm md:text-base font-bold text-[#F5F5F7] tracking-tight hover:text-[#C4B5FD] transition-colors block truncate"
                  >
                    {contactData.primaryEmail}
                  </a>
                </div>
              </div>

              <a
                href={`mailto:${contactData.primaryEmail}`}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#191F33] border border-[#2D3854] hover:bg-[#201B42] hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#A78BFA] hover:text-white transition-all flex-shrink-0 ml-2"
                title="Send Email"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>

            {/* Card 3: LinkedIn Profile */}
            <div className="bg-[#121A2C] border border-[#273047] hover:border-[#8B5CF6]/60 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between shadow-lg hover:shadow-[0_8px_25px_rgba(139,92,246,0.12)] hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1D1735] border border-[#4C3B78] flex items-center justify-center text-[#A78BFA] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10.5px] sm:text-[11px] font-medium text-[#A8B0C2] leading-none mb-1">
                    LinkedIn Profile
                  </p>
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm md:text-base font-bold text-[#F5F5F7] tracking-tight hover:text-[#C4B5FD] transition-colors block truncate"
                  >
                    linkedin.com/in/mayank-chakravarti-59903b378
                  </a>
                </div>
              </div>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#191F33] border border-[#2D3854] hover:bg-[#201B42] hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#A78BFA] hover:text-white transition-all flex-shrink-0 ml-2"
                title="Open LinkedIn"
              >
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>

            {/* Card 4: Location */}
            <div className="bg-[#121A2C] border border-[#273047] hover:border-[#8B5CF6]/60 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between shadow-lg hover:shadow-[0_8px_25px_rgba(139,92,246,0.12)] hover:-translate-y-0.5 transition-all duration-200 group">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1D1735] border border-[#4C3B78] flex items-center justify-center text-[#A78BFA] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10.5px] sm:text-[11px] font-medium text-[#A8B0C2] leading-none mb-1">
                    Location
                  </p>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-[#F5F5F7] tracking-tight block truncate">
                    Lucknow, Uttar Pradesh
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#191F33] border border-[#2D3854] flex items-center justify-center text-[#A78BFA] flex-shrink-0 ml-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
           2. FULL-WIDTH PREMIUM LIGHT FOOTER (Edge-to-edge covering full width)
           ========================================================================= */}
      <footer className="w-full bg-gradient-to-b from-[#FAF8FF] via-white to-[#F5F3FF] border-t border-[#E4DDF5] text-[#17213A] relative overflow-hidden pt-12 sm:pt-16 pb-10 sm:pb-12">
        
        {/* Subtle Decorative Wave Graphic (Lower Left) */}
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-96 h-64 opacity-40">
          <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M-20,180 C80,120 160,220 260,150 C360,80 390,200 420,170" stroke="#C4B5FD" strokeWidth="1.5" fill="none" />
            <path d="M-10,200 C90,140 170,240 270,170 C370,100 400,220 430,190" stroke="#DDD6FE" strokeWidth="1.2" fill="none" />
            <path d="M0,220 C100,160 180,260 280,190 C380,120 410,240 440,210" stroke="#E9E3FF" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
          
          {/* 4 Main Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
            
            {/* Column 1: Personal Profile (4 cols on lg) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3.5">
                
                {/* Monogram / Logo Badge */}
                <div 
                  className="rounded-full border border-purple-300 p-0.5 bg-white shadow-[0_4px_16px_rgba(109,75,216,0.18)] flex items-center justify-center flex-shrink-0"
                  style={{ width: '64px', height: '64px' }}
                >
                  <img
                    src="assets/logo.png"
                    alt="Mayank Chakrawarti Emblem"
                    className="w-full h-full object-contain"
                    style={{ maxWidth: '54px', maxHeight: '54px' }}
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#17213A] tracking-tight leading-tight">
                    Mayank <span className="text-[#6D4BD8]">Chakrawarti</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6D4BD8] font-bold">
                    HR & Talent Acquisition Specialist
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#596174] leading-relaxed max-w-sm">
                Specializing in end-to-end recruitment pipelines, candidate sourcing, HR operations, and building high-performance teams.
              </p>

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFFF] border border-[#DDD6FE] text-[#5B3CC4] text-xs font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for Full-Time HR & TA Roles</span>
              </div>
            </div>

            {/* Column 2: Quick Navigation (3 cols on lg) */}
            <div className="lg:col-span-3 space-y-3">
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#6D4BD8]">
                  QUICK NAVIGATION
                </h4>
                <div className="w-8 h-0.5 bg-[#6D4BD8] rounded-full mt-1"></div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#3E4A63]">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-[#6D4BD8] hover:translate-x-1 transition-all inline-flex items-center gap-2.5 py-0.5"
                      >
                        <Icon className="w-4 h-4 text-[#6D4BD8]" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3: Core HR Pillars (3 cols on lg) */}
            <div className="lg:col-span-3 space-y-3">
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#6D4BD8]">
                  CORE HR PILLARS
                </h4>
                <div className="w-8 h-0.5 bg-[#6D4BD8] rounded-full mt-1"></div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#17213A]">
                {pillarLinks.map((pillar) => (
                  <li key={pillar} className="flex items-center gap-2 py-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6D4BD8] flex-shrink-0" />
                    <span className="truncate">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Direct Connect (2 cols on lg) */}
            <div className="lg:col-span-2 space-y-3">
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#6D4BD8]">
                  DIRECT CONNECT
                </h4>
                <div className="w-8 h-0.5 bg-[#6D4BD8] rounded-full mt-1"></div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#3E4A63]">
                <a
                  href={`tel:${contactData.primaryPhone}`}
                  className="flex items-center gap-2 hover:text-[#6D4BD8] transition-colors py-0.5"
                >
                  <Phone className="w-4 h-4 text-[#6D4BD8] flex-shrink-0" />
                  <span className="truncate">{contactData.primaryPhone}</span>
                </a>

                <a
                  href={`mailto:${contactData.primaryEmail}`}
                  className="flex items-center gap-2 hover:text-[#6D4BD8] transition-colors py-0.5"
                >
                  <Mail className="w-4 h-4 text-[#6D4BD8] flex-shrink-0" />
                  <span className="truncate">{contactData.primaryEmail}</span>
                </a>

                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#6D4BD8] hover:text-[#5B3CC4] transition-colors font-bold py-0.5"
                >
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Thin Horizontal Divider */}
          <div className="border-t border-[#EAE4F8] pt-6 sm:pt-8"></div>

          {/* Bottom Footer Information Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#596174]">
            
            {/* Left Side: Shield Badge + Copyright */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-[#DDD6FE] flex items-center justify-center text-[#6D4BD8] shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#6D4BD8]" />
              </div>
              <div>
                <p className="font-bold text-[#17213A]">
                  © 2026 <span className="text-[#6D4BD8]">Mayank Chakrawarti</span>.
                </p>
                <p className="text-[11px] text-[#64748B]">All rights reserved.</p>
              </div>
            </div>

            {/* Center Section: Social Icons */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-[#64748B] font-medium hidden sm:inline">
                Let's connect on
              </span>
              <span className="text-[#DDD6FE] hidden sm:inline">|</span>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white border border-[#DDD6FE] flex items-center justify-center text-[#6D4BD8] hover:bg-[#F3EFFF] hover:scale-105 transition-all shadow-2xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${contactData.primaryEmail}`}
                className="w-8 h-8 rounded-xl bg-white border border-[#DDD6FE] flex items-center justify-center text-[#6D4BD8] hover:bg-[#F3EFFF] hover:scale-105 transition-all shadow-2xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/916388779272"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white border border-[#DDD6FE] flex items-center justify-center text-emerald-500 hover:bg-emerald-50 hover:scale-105 transition-all shadow-2xs"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Right Side: Portfolio Label + Back to Top */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-[#64748B] hidden lg:inline">
                Human Resources & Talent Acquisition Portfolio
              </span>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#F3EFFF] border border-[#DDD6FE] text-[#6D4BD8] text-xs font-bold shadow-2xs hover:shadow-sm transition-all cursor-pointer"
                title="Back to Top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>

          </div>

        </div>

      </footer>

    </div>
  );
};
