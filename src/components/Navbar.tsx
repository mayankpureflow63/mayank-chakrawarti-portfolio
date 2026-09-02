import React, { useState } from 'react';
import { Download, Send, Menu, X, Briefcase, UserCheck, Sparkles, GraduationCap, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: UserCheck },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Sparkles },
    { name: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', id: 'contact', icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-50 header-glass">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 py-1.5">
          
          {/* Prominent High-Definition Emblem Logo */}
          <a
            href="#hero"
            className="flex items-center group cursor-pointer py-1"
            title="Mayank Chakrawarti - Home"
          >
            <div 
              className="rounded-full border-2 border-purple-400/90 p-1 bg-[#111625] flex items-center justify-center shadow-[0_0_18px_rgba(167,139,250,0.35)] group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(167,139,250,0.6)] transition-all duration-300 flex-shrink-0"
              style={{ width: '60px', height: '60px' }}
            >
              <img
                src="assets/logo.png"
                alt="Mayank Chakrawarti Emblem"
                className="w-full h-full object-contain"
                style={{ width: '52px', height: '52px' }}
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold text-[#596174]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors hover:text-[#6D3FD1] ${
                  activeSection === link.id ? 'nav-link-active font-extrabold' : ''
                }`}
                onClick={() => setActiveSection?.(link.id)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="btn-dark-navy px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Download / Print Resume"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              className="btn-purple-primary px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-white" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Actions: Compact Call-to-action & Hamburger Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              className="btn-purple-primary px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
            >
              <Send className="w-3 h-3 text-white" />
              <span>Connect</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#151B2E] hover:text-[#6D3FD1] focus:outline-none rounded-lg hover:bg-purple-50 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5 text-[#6D3FD1]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-purple-100/80 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl space-y-1 px-2 animate-fadeIn">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeSection === link.id
                      ? 'bg-purple-50 text-[#6D3FD1] font-extrabold'
                      : 'text-[#596174] hover:bg-purple-50 hover:text-[#6D3FD1]'
                  }`}
                  onClick={() => {
                    setActiveSection?.(link.id);
                    setIsOpen(false);
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </a>
              );
            })}

            <div className="pt-2 border-t border-purple-100 flex gap-2">
              <button
                onClick={() => {
                  window.print();
                  setIsOpen(false);
                }}
                className="w-full btn-soft-outline py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
