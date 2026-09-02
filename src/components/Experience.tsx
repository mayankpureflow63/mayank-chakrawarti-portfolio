import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  RotateCcw, 
  Briefcase, 
  MapPin, 
  Calendar, 
  Users, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  LayoutGrid, 
  ArrowRight, 
  Search, 
  Handshake, 
  BarChart2 
} from 'lucide-react';
import { experienceData } from '../data/profileData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-6 sm:py-10 md:py-14 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-6">
        
        {experienceData.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="light-dashboard-container p-3.5 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
          >
            {/* Top Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#111625] text-purple-200 border border-purple-400/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                  <BarChart3 className="w-3 h-3 text-purple-300" />
                  CAREER TIMELINE & CORE WORK
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#151B2E] tracking-tight">
                  Work <span className="gradient-purple-text">Experience</span>
                </h2>
                <p className="text-[#596174] text-xs sm:text-sm">
                  Recruitment consulting, talent sourcing pipelines, and HR executive operations.
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-purple-200 text-[#6D3FD1] text-[11px] sm:text-xs font-bold shadow-sm self-start sm:self-auto">
                <RotateCcw className="w-3 h-3 text-[#6D3FD1]" />
                <span>Career History</span>
              </div>
            </div>

            {/* Role & Company Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 sm:p-4 rounded-xl bg-white border border-purple-100/90 shadow-sm">
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6D3FD1] flex-shrink-0">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#6D3FD1]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <h3 className="text-sm sm:text-lg md:text-xl font-extrabold text-[#151B2E]">
                      {exp.role}
                    </h3>
                    {exp.companyType && (
                      <span className="px-2 py-0.2 rounded-full text-[9px] sm:text-[10px] font-bold bg-[#111625] text-purple-200 border border-purple-400/30">
                        {exp.companyType}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-1 text-[11px] sm:text-xs text-[#596174] font-medium">
                    <span className="text-[#6D3FD1] font-bold">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-[#6D3FD1]" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-50 border border-purple-200/90 text-[#6D3FD1] text-[10px] sm:text-xs font-bold self-start sm:self-auto">
                <Calendar className="w-3 h-3 text-[#6D3FD1]" />
                <span>{exp.duration}</span>
              </div>
            </div>

            {/* Stats Metrics Strip (2x2 on Mobile, 4-Cols on Desktop) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-white border border-purple-100/80 shadow-sm">
              {/* 1. Sourced */}
              <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6D3FD1] flex-shrink-0">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6D3FD1]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg md:text-xl font-black text-[#151B2E] tracking-tight">500+</h4>
                  <p className="text-[9px] sm:text-[11px] text-[#596174] font-semibold leading-tight">Candidates Sourced</p>
                </div>
              </div>

              {/* 2. TTM */}
              <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg md:text-xl font-black text-[#151B2E] tracking-tight">30%</h4>
                  <p className="text-[9px] sm:text-[11px] text-[#596174] font-semibold leading-tight">TTM Reduced</p>
                </div>
              </div>

              {/* 3. Offer Success */}
              <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg md:text-xl font-black text-[#151B2E] tracking-tight">92%</h4>
                  <p className="text-[9px] sm:text-[11px] text-[#596174] font-semibold leading-tight">Offer-to-Joining</p>
                </div>
              </div>

              {/* 4. Compliance */}
              <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg md:text-xl font-black text-[#151B2E] tracking-tight">100%</h4>
                  <p className="text-[9px] sm:text-[11px] text-[#596174] font-semibold leading-tight">HR Compliance</p>
                </div>
              </div>
            </div>

            {/* Core Work Areas Section */}
            <div className="space-y-2.5 pt-0.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#6D3FD1]">
                  <LayoutGrid className="w-3.5 h-3.5 text-[#6D3FD1]" />
                  <span>CORE WORK AREAS</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-purple-200 text-[#6D3FD1] text-[10px] font-bold">
                  <span>Explore All</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* 2x2 Core Work Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5">
                
                {/* 1. Talent Sourcing & Headhunting (Purple Theme) */}
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 shadow-sm transition-all space-y-2">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6D3FD1] flex-shrink-0">
                      <Search className="w-4 h-4 text-[#6D3FD1]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#151B2E] leading-tight">Talent Sourcing & Headhunting</h4>
                      <p className="text-[10px] text-[#596174] mt-0.5 leading-tight">End-to-end sourcing & candidate mapping</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-0.5">
                    <span className="badge-purple px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      Naukri.com
                    </span>
                    <span className="badge-purple px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      LinkedIn Recruiter
                    </span>
                    <span className="badge-purple px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      Boolean Search
                    </span>
                  </div>
                </div>

                {/* 2. Screening & Competency Interviews (Orange Theme) */}
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-300 shadow-sm transition-all space-y-2">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0">
                      <Users className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#151B2E] leading-tight">Screening & Competency Interviews</h4>
                      <p className="text-[10px] text-[#596174] mt-0.5 leading-tight">Profile evaluation & competency assessment</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-0.5">
                    <span className="badge-orange px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      Resume Audit
                    </span>
                    <span className="badge-orange px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      Telephonic Rounds
                    </span>
                    <span className="badge-orange px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      Skill Profiling
                    </span>
                  </div>
                </div>

                {/* 3. Offer Negotiations & Onboarding (Emerald Theme) */}
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 shadow-sm transition-all space-y-2">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Handshake className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#151B2E] leading-tight">Offer Negotiations & Onboarding</h4>
                      <p className="text-[10px] text-[#596174] mt-0.5 leading-tight">Compensation negotiation & smooth onboarding</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-0.5">
                    <span className="badge-emerald px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      CTC Breakdown
                    </span>
                    <span className="badge-emerald px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      Offer Letters
                    </span>
                    <span className="badge-emerald px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      Day-1 Induction
                    </span>
                  </div>
                </div>

                {/* 4. HR Operations & Analytics (Blue Theme) */}
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-blue-100 hover:border-blue-300 shadow-sm transition-all space-y-2">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <BarChart2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#151B2E] leading-tight">HR Operations & Analytics</h4>
                      <p className="text-[10px] text-[#596174] mt-0.5 leading-tight">HR ops, reporting & compliance management</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-0.5">
                    <span className="badge-blue px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      MIS Reports
                    </span>
                    <span className="badge-blue px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      Campus Drives
                    </span>
                    <span className="badge-blue px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                      Compliance Audits
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};
