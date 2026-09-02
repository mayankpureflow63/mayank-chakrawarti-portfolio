import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Search, CalendarCheck, Percent, Megaphone, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { responsibilityPillars } from '../data/profileData';

export const About: React.FC = () => {
  const iconList = [Search, UserCheck, CalendarCheck, Percent, Megaphone, FileSpreadsheet];

  return (
    <section id="about" className="py-6 sm:py-10 md:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="light-dashboard-container p-3 sm:p-6 md:p-8 space-y-3.5 sm:space-y-6">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#111625] text-purple-200 border border-purple-400/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2 shadow-sm">
            <UserCheck className="w-3 h-3 text-purple-300" />
            <span>Executive Overview</span>
          </div>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-[#151B2E] tracking-tight">
            About Me / <span className="gradient-purple-text">Professional Summary</span>
          </h2>
          <p className="text-[#596174] text-xs sm:text-sm mt-0.5 sm:mt-1 leading-relaxed">
            Results-driven HR professional specializing in talent acquisition, recruitment pipelines, and employee engagement.
          </p>
        </div>

        {/* 2-Column Left & Right Symmetrical Pillar Grid (2 Columns on Phone & Desktop) */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6">
          {responsibilityPillars.map((item, index) => {
            const Icon = iconList[index % iconList.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="light-dashboard-card p-2.5 sm:p-4 md:p-5 flex flex-col justify-between space-y-2 sm:space-y-3 group hover:border-[#6D3FD1]/40 hover:shadow-md transition-all rounded-xl sm:rounded-2xl bg-white border border-purple-100"
              >
                <div className="space-y-1.5 sm:space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6D3FD1] group-hover:scale-105 transition-transform flex-shrink-0">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#6D3FD1]" />
                    </div>
                    <span className="text-[8px] sm:text-[9.5px] font-mono font-extrabold text-[#6D3FD1] bg-purple-50 px-1.5 sm:px-2.5 py-0.5 rounded-full border border-purple-200 tracking-wider">
                      {item.pillarNumber}
                    </span>
                  </div>

                  <h3 className="text-[11px] sm:text-sm md:text-base font-bold text-[#151B2E] tracking-tight group-hover:text-[#6D3FD1] transition-colors leading-tight line-clamp-2">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                    {item.graphicTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-1 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9.5px] font-bold bg-purple-50 text-[#6D3FD1] border border-purple-100/80 leading-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1 sm:space-y-1.5 pt-0.5 sm:pt-1">
                    {item.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1 sm:gap-1.5 text-[9px] sm:text-xs text-[#596174]">
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#6D3FD1] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-1.5 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between text-[9px] sm:text-[11px] font-bold text-[#6D3FD1]">
                  <span>Core Focus</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
