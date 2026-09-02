import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Users, BarChart2, Target, ChevronRight } from 'lucide-react';
import { educationData } from '../data/profileData';

export const Education: React.FC = () => {
  const edu = educationData[0] || {
    degree: 'Bachelor of Commerce',
    institution: 'Shri Jai Narayan Mishra PG College (KKC), Lucknow',
    timeline: 'August 2023 – July 2026',
    location: 'Lucknow, Uttar Pradesh'
  };

  const keyStudies = [
    {
      title: 'Human Resource Management',
      icon: <Users className="w-5 h-5 text-[#6D4BD8]" />
    },
    {
      title: 'Business Communication',
      icon: <BarChart2 className="w-5 h-5 text-[#6D4BD8]" />
    },
    {
      title: 'Organizational Behavior',
      icon: <Target className="w-5 h-5 text-[#6D4BD8]" />
    }
  ];

  return (
    <section id="education" className="py-8 sm:py-12 md:py-16 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Main Section Container (Matches media_1788350532464.png) */}
      <div className="bg-gradient-to-br from-[#FAFAFE] via-[#F6F3FF] to-[#FAF9FF] border border-[#E6E0F5] rounded-[28px] sm:rounded-[36px] md:rounded-[40px] p-5 sm:p-8 md:p-12 shadow-[0_16px_50px_rgba(109,75,216,0.06)] relative overflow-hidden space-y-6 sm:space-y-8">
        
        {/* Subtle Background Dotted Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#DDD6FE_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none"></div>

        {/* Academic Graphic Illustration (Top-Right) */}
        <div className="absolute -top-4 -right-4 sm:top-2 sm:right-4 w-48 h-48 sm:w-72 sm:h-72 pointer-events-none opacity-85 z-0">
          <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
            {/* Ambient Background Circle Glow */}
            <circle cx="210" cy="130" r="100" fill="url(#purpleAmbientLight)" opacity="0.6" />
            
            {/* Minimal Background Dotted Matrix */}
            <g opacity="0.35" fill="#8B6DE8">
              <circle cx="80" cy="90" r="2" />
              <circle cx="100" cy="90" r="2" />
              <circle cx="120" cy="90" r="2" />
              <circle cx="80" cy="110" r="2" />
              <circle cx="100" cy="110" r="2" />
              <circle cx="120" cy="110" r="2" />
              <circle cx="80" cy="130" r="2" />
              <circle cx="100" cy="130" r="2" />
              <circle cx="120" cy="130" r="2" />
            </g>

            {/* Stacked Books Base */}
            <g opacity="0.75">
              {/* Bottom Book */}
              <path d="M140 210 L270 185 L270 205 L140 230 Z" fill="#D5C7FF" />
              <path d="M140 210 L130 205 L260 180 L270 185 Z" fill="#EDE6FF" />
              <rect x="130" y="205" width="10" height="25" rx="3" fill="#B7A0FA" />
              
              {/* Top Book */}
              <path d="M145 185 L265 162 L265 180 L145 203 Z" fill="#C8B5FF" />
              <path d="M145 185 L135 180 L255 157 L265 162 Z" fill="#F3EEFF" />
              <rect x="135" y="180" width="10" height="23" rx="3" fill="#9D7EF8" />
            </g>

            {/* 3D Graduation Cap */}
            <g opacity="0.85">
              {/* Cap Base Skullcap */}
              <path d="M175 130 C175 145 225 145 225 130 L225 120 L175 120 Z" fill="#9B7CFA" opacity="0.8" />
              
              {/* Cap Diamond Top */}
              <polygon points="200,90 260,115 200,138 140,115" fill="url(#capDiamondGrad)" stroke="#7C4DFF" strokeWidth="1.5" />
              
              {/* Button & Tassel */}
              <circle cx="200" cy="114" r="3" fill="#5B3CC4" />
              <path d="M200 114 Q245 120 250 145" stroke="#7C4DFF" strokeWidth="2" strokeLinecap="round" fill="none" />
              <polygon points="248,145 252,145 254,162 246,162" fill="#5B3CC4" />
            </g>

            <defs>
              <linearGradient id="purpleAmbientLight" x1="110" y1="30" x2="310" y2="230" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EDE8FF" stopOpacity="0.8" />
                <stop offset="1" stopColor="#F9F7FF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="capDiamondGrad" x1="140" y1="90" x2="260" y2="138" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DDD0FF" />
                <stop offset="1" stopColor="#BA9EFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 space-y-6 sm:space-y-8">
          
          {/* Header */}
          <div className="space-y-2 max-w-2xl">
            
            {/* Category Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE9FE] border border-[#DDD6FE] text-[#5B3CC4] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#6D4BD8]" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17213A] tracking-tight">
              Education
            </h2>

            {/* Supporting Description */}
            <p className="text-[#3E4A63] text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-lg">
              Strong academic foundation in commerce and business with a focus on HR and management.
            </p>

            {/* Purple Underline */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#6D4BD8] to-[#9B6CFF] rounded-full mt-2"></div>
          </div>

          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="bg-white border border-[#E6E0F5] rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 shadow-[0_8px_30px_rgba(91,60,196,0.05)] hover:shadow-[0_14px_40px_rgba(91,60,196,0.09)] transition-all duration-300 space-y-6 group"
          >
            
            {/* Top Main Information: Degree & Institution + Year Badge */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              
              {/* Left Group: Icon + Degree & College Info */}
              <div className="flex items-start gap-3.5 sm:gap-5 min-w-0">
                
                {/* Graduation Icon Box */}
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#7C4DFF] to-[#5B35C9] shadow-[0_6px_18px_rgba(124,77,255,0.3)] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Degree Title, Subtitle, and Institution */}
                <div className="space-y-1 min-w-0">
                  <h3 className="text-base sm:text-xl md:text-2xl font-black text-[#17213A] tracking-tight leading-snug">
                    Bachelor of Commerce – BCom, Commerce
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#64748B]">
                    B.Com, Commerce
                  </p>

                  <p className="text-xs sm:text-sm font-bold text-[#6D4BD8]">
                    {edu.institution || 'Shri Jai Narayan Mishra PG College (KKC), Lucknow'}
                  </p>
                </div>

              </div>

              {/* Right Side: Year Date Badge */}
              <div className="self-start sm:self-auto flex-shrink-0 pl-16 sm:pl-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F3EFFF] border border-[#DDD6FE] text-xs sm:text-sm font-bold text-[#6D4BD8] shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-[#6D4BD8]" />
                  <span>2023 – 2026</span>
                </div>
              </div>

            </div>

            {/* Date and Location Strip */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#3E4A63] font-semibold pt-1 border-t border-[#F8F6FD]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#6D4BD8]" />
                <span>{edu.timeline || 'August 2023 – July 2026'}</span>
              </span>
              <span className="text-[#DDD6FE] hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#6D4BD8]" />
                <span>{edu.location || 'Lucknow, Uttar Pradesh'}</span>
              </span>
            </div>

            {/* Thin Horizontal Divider */}
            <div className="border-t border-[#F1EBFB]"></div>

            {/* Key Areas of Study (Full-Width Mobile Cards) */}
            <div className="space-y-3">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#64748B]">
                KEY AREAS OF STUDY
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                {keyStudies.map((study, index) => (
                  <div
                    key={index}
                    className="bg-[#FAF8FF] hover:bg-white border border-[#EAE4F8] hover:border-[#6D4BD8]/40 rounded-[20px] p-3.5 sm:p-4 flex items-center justify-between shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group/item cursor-default"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F3EFFF] border border-[#E6E0F5] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        {study.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-[#17213A] leading-tight block truncate">
                          {study.title}
                        </span>
                        {/* Small Purple Decorative Line */}
                        <div className="w-6 h-0.5 bg-[#6D4BD8] rounded-full mt-1.5 opacity-85"></div>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-[#8B6DE8] group-hover/item:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};
