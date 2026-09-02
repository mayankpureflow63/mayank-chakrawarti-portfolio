import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Search, FileText, MessagesSquare, Handshake, UserPlus, BarChart3, TrendingUp, PieChart } from 'lucide-react';
import { topSkills } from '../data/profileData';

export const Skills: React.FC = () => {
  const skillsData = [
    {
      id: 'talent-acquisition',
      title: 'Talent Acquisition & Sourcing',
      description: 'Find, engage & attract the right talent.',
      theme: 'purple',
      iconBg: 'bg-gradient-to-br from-[#EDE6FF] to-[#DCD0FF] border border-[#D5C5FF] text-[#7C4DFF] shadow-[0_4px_12px_rgba(124,77,255,0.15)]',
      mainIcon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="18" fill="url(#purpleGlassGrad)" stroke="#7C4DFF" strokeWidth="2.5" />
          <circle cx="28" cy="24" r="6" fill="#7C4DFF" />
          <path d="M18 36 C18 30.5 22.5 29 28 29 C33.5 29 38 30.5 38 36" fill="#7C4DFF" />
          <path d="M41 41 L53 53" stroke="#7C4DFF" strokeWidth="4" strokeLinecap="round" />
          <circle cx="53" cy="53" r="2.5" fill="#5B35C9" />
          <defs>
            <linearGradient id="purpleGlassGrad" x1="14" y1="14" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F3EFFF" />
              <stop offset="1" stopColor="#D9C9FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      subSkills: [
        {
          name: 'Candidate Sourcing',
          icon: <Users className="w-4 h-4 text-[#7C4DFF]" />,
          iconBg: 'bg-[#F3EFFF] border border-[#E9E3FF]'
        },
        {
          name: 'Boolean Search',
          icon: <Search className="w-4 h-4 text-[#7C4DFF]" />,
          iconBg: 'bg-[#F3EFFF] border border-[#E9E3FF]'
        },
        {
          name: 'Resume Screening',
          icon: <FileText className="w-4 h-4 text-[#7C4DFF]" />,
          iconBg: 'bg-[#F3EFFF] border border-[#E9E3FF]'
        }
      ]
    },
    {
      id: 'full-lifecycle',
      title: 'Full-Lifecycle Recruitment',
      description: 'End-to-end hiring from screening to onboarding.',
      theme: 'blue',
      iconBg: 'bg-gradient-to-br from-[#E6F0FF] to-[#D0E2FF] border border-[#C2D8FF] text-[#5B8DEF] shadow-[0_4px_12px_rgba(91,141,239,0.15)]',
      mainIcon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="14" width="32" height="40" rx="6" fill="url(#blueGlassGrad)" stroke="#5B8DEF" strokeWidth="2.5" />
          <path d="M24 14 V11 C24 9.5 25.5 8 27 8 H37 C38.5 8 40 9.5 40 11 V14" stroke="#5B8DEF" strokeWidth="2.5" fill="#E6F0FF" />
          <circle cx="32" cy="24" r="4.5" fill="#5B8DEF" />
          <path d="M23 34 C23 30.5 27 29.5 32 29.5 C37 29.5 41 30.5 41 34" fill="#5B8DEF" />
          <circle cx="44" cy="44" r="8" fill="#5B8DEF" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M41 44 L43.5 46.5 L47.5 41.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="blueGlassGrad" x1="16" y1="14" x2="48" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0F6FF" />
              <stop offset="1" stopColor="#D4E6FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
      subSkills: [
        {
          name: 'Interviews & Shortlisting',
          icon: <MessagesSquare className="w-4 h-4 text-[#5B8DEF]" />,
          iconBg: 'bg-[#EFF6FF] border border-[#DBEAFE]'
        },
        {
          name: 'Offer Negotiation',
          icon: <Handshake className="w-4 h-4 text-[#5B8DEF]" />,
          iconBg: 'bg-[#EFF6FF] border border-[#DBEAFE]'
        },
        {
          name: 'Onboarding New Hires',
          icon: <UserPlus className="w-4 h-4 text-[#5B8DEF]" />,
          iconBg: 'bg-[#EFF6FF] border border-[#DBEAFE]'
        }
      ]
    },
    {
      id: 'hr-operations',
      title: 'HR Operations & Strategy',
      description: 'Drive HR efficiency and business impact.',
      theme: 'orange',
      iconBg: 'bg-gradient-to-br from-[#FFF0E6] to-[#FFE0CC] border border-[#FFD2B3] text-[#F2A65A] shadow-[0_4px_12px_rgba(242,166,90,0.15)]',
      mainIcon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="22" fill="url(#orangeGlassGrad)" stroke="#F2A65A" strokeWidth="2.5" />
          <rect x="22" y="34" width="5" height="14" rx="2" fill="#F2A65A" />
          <rect x="30" y="26" width="5" height="22" rx="2" fill="#F2A65A" />
          <rect x="38" y="18" width="5" height="30" rx="2" fill="#E28630" />
          <path d="M21 30 L29 23 L37 16 L45 10" stroke="#E28630" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
          <defs>
            <linearGradient id="orangeGlassGrad" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF7F2" />
              <stop offset="1" stopColor="#FFE4D4" />
            </linearGradient>
          </defs>
        </svg>
      ),
      subSkills: [
        {
          name: 'HR Planning',
          icon: <TrendingUp className="w-4 h-4 text-[#F2A65A]" />,
          iconBg: 'bg-[#FFF7ED] border border-[#FFEDD5]'
        },
        {
          name: 'Employee Engagement',
          icon: <BarChart3 className="w-4 h-4 text-[#F2A65A]" />,
          iconBg: 'bg-[#FFF7ED] border border-[#FFEDD5]'
        },
        {
          name: 'Recruitment Reports',
          icon: <PieChart className="w-4 h-4 text-[#F2A65A]" />,
          iconBg: 'bg-[#FFF7ED] border border-[#FFEDD5]'
        }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-6 sm:py-10 md:py-14 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Subtle Abstract Wave SVG Background & Particles */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-0 opacity-40">
        <svg viewBox="0 0 1440 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 192C180 230 360 250 540 220C720 190 900 110 1080 120C1260 130 1380 200 1440 230V280H0V192Z"
            fill="url(#waveGradSkills)"
          />
          <path
            d="M0 220C240 180 480 260 720 230C960 200 1200 140 1440 190"
            stroke="url(#strokeGradSkills)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle cx="320" cy="220" r="3" fill="#B9A5FF" opacity="0.8" />
          <circle cx="850" cy="160" r="2.5" fill="#7C4DFF" opacity="0.6" />
          <circle cx="1200" cy="210" r="3.5" fill="#B9A5FF" opacity="0.7" />
          <defs>
            <linearGradient id="waveGradSkills" x1="0" y1="120" x2="1440" y2="280" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F3F0FF" stopOpacity="0.8" />
              <stop offset="1" stopColor="#E9E3FF" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="strokeGradSkills" x1="0" y1="190" x2="1440" y2="230" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B9A5FF" />
              <stop offset="1" stopColor="#7C4DFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="space-y-1.5 sm:space-y-2">
          
          {/* Small Label Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F0FF] border border-[#E9E3FF] text-[#7C4DFF] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#7C4DFF]" />
            <span>CORE COMPETENCIES</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121B36] tracking-tight">
            Top Skills
          </h2>

          {/* Subtitle */}
          <p className="text-[#566078] text-xs sm:text-sm font-normal max-w-2xl leading-relaxed">
            Strategic HR planning, full-cycle recruitment, and leadership capabilities.
          </p>
        </div>

        {/* Skills Navigation Tags (Pill Row) */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 pt-0.5">
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white hover:bg-[#F8F5FF] rounded-full border border-[#E9E3FF] hover:border-[#7C4DFF]/40 text-[#121B36] text-xs font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-default group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C4DFF] group-hover:scale-125 transition-transform flex-shrink-0"></span>
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>

        {/* Main 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 pt-1">
          {skillsData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 md:p-6 border border-[#ECE7F8] shadow-[0_8px_25px_rgba(124,77,255,0.04)] hover:shadow-[0_14px_35px_rgba(124,77,255,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Compact Icon + Title & Short Description */}
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 ${card.iconBg}`}>
                    {card.mainIcon}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#121B36] tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-[#566078] mt-0.5 leading-snug font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Thin Divider */}
                <div className="border-t border-slate-100 my-3.5 sm:my-4"></div>

                {/* 3 Compact Skill Points with Themed Icons */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {card.subSkills.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex flex-col items-center text-center p-1.5 rounded-lg hover:bg-[#FAF8FF] transition-colors group/item"
                    >
                      <div className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg flex items-center justify-center mb-1 shadow-xs group-hover/item:scale-110 transition-transform ${sub.iconBg}`}>
                        {sub.icon}
                      </div>
                      <span className="text-[10px] sm:text-[10.5px] font-semibold text-[#566078] leading-tight">
                        {sub.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
