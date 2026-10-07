import React, { useState, useEffect } from 'react';
import { Route } from '../types';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentRoute: Route;
  onRouteChange: (route: Route) => void;
  onOpenConceptModal: () => void;
}

export default function Navbar({ currentRoute, onRouteChange, onOpenConceptModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manage body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (route: Route) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Concept Evaluation Notice Banner */}
      <div className="bg-[#151515] border-b border-white/10 px-4 py-1.5 text-center text-xs text-[#A7A7A7]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B7F34A]"></span>
            <span className="font-semibold text-white">Funngro 2.0 Concept</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="hidden sm:inline text-[#A7A7A7]">Strategic Product Redesign Evaluation</span>
          </div>
          <button
            onClick={onOpenConceptModal}
            className="text-xs text-[#B7F34A] hover:text-[#C5F76B] font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B7F34A] rounded px-1 transition-colors"
          >
            Design rationale & notes
          </button>
        </div>
      </div>

      {/* Main Top Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2.5'
            : 'bg-[#0B0B0B]/90 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('gateway');
            }}
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F34A] rounded-md p-1 -m-1 text-left"
            aria-label="Funngro Home"
          >
            <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-[#B7F34A] transition-colors">
              FUNNGRO
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B7F34A] px-1.5 py-0.5 rounded">
              2.0
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('gateway');
              }}
              className={`transition-colors py-1 relative ${
                currentRoute === 'gateway'
                  ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B7F34A]'
                  : 'text-[#A7A7A7] hover:text-white'
              }`}
            >
              Overview
            </a>
            <a
              href="/teen"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('teen');
              }}
              className={`transition-colors py-1 relative ${
                currentRoute === 'teen'
                  ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B7F34A]'
                  : 'text-[#A7A7A7] hover:text-white'
              }`}
            >
              Teen
            </a>
            <a
              href="/company"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('company');
              }}
              className={`transition-colors py-1 relative ${
                currentRoute === 'company'
                  ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#B7F34A]'
                  : 'text-[#A7A7A7] hover:text-white'
              }`}
            >
              Companies
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/teen"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('teen');
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F34A] ${
                currentRoute === 'teen'
                  ? 'bg-[#1D1D1D] text-white border border-[#B7F34A]/60 shadow-sm'
                  : 'text-white hover:bg-white/10 border border-white/20'
              }`}
            >
              For Teens
            </a>
            <a
              href="/company"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('company');
              }}
              className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#B7F34A] hover:bg-[#C5F76B] text-[#0B0B0B] transition-all whitespace-nowrap shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F34A]"
            >
              For Companies
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#B7F34A] rounded-lg border border-white/15 hover:bg-[#151515] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F34A]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[88px] z-50 bg-[#0B0B0B]/98 backdrop-blur-xl md:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-white/10 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A7A7A7]">
              Navigate Platforms
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('gateway')}
                className={`flex items-center justify-between p-4 rounded-xl text-left border transition-colors ${
                  currentRoute === 'gateway'
                    ? 'bg-[#1D1D1D] border-[#B7F34A]/50 text-white font-semibold'
                    : 'bg-[#151515] border-white/10 text-[#A7A7A7]'
                }`}
              >
                <div>
                  <div className="text-base font-semibold text-white">Gateway</div>
                  <div className="text-xs text-[#A7A7A7]">Audience selection & overview</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </button>

              <button
                onClick={() => handleNavClick('teen')}
                className={`flex items-center justify-between p-4 rounded-xl text-left border transition-colors ${
                  currentRoute === 'teen'
                    ? 'bg-[#1D1D1D] border-[#B7F34A]/50 text-white font-semibold'
                    : 'bg-[#151515] border-white/10 text-[#A7A7A7]'
                }`}
              >
                <div>
                  <div className="text-base font-semibold text-white">For Teens & Students</div>
                  <div className="text-xs text-[#A7A7A7]">Your time · Your skills · Your opportunity</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#B7F34A]" />
              </button>

              <button
                onClick={() => handleNavClick('company')}
                className={`flex items-center justify-between p-4 rounded-xl text-left border transition-colors ${
                  currentRoute === 'company'
                    ? 'bg-[#1D1D1D] border-[#B7F34A]/50 text-white font-semibold'
                    : 'bg-[#151515] border-white/10 text-[#A7A7A7]'
                }`}
              >
                <div>
                  <div className="text-base font-semibold text-white">For Brands & Companies</div>
                  <div className="text-xs text-[#A7A7A7]">Reach young India through real action</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('teen')}
                className="w-full py-3 text-center text-sm font-semibold rounded-xl bg-transparent border border-white/20 text-white hover:border-white transition-colors"
              >
                Explore Opportunities (Teen)
              </button>
              <button
                onClick={() => handleNavClick('company')}
                className="w-full py-3 text-center text-sm font-bold rounded-xl bg-[#B7F34A] text-[#0B0B0B] hover:bg-[#C5F76B] transition-colors shadow-md"
              >
                Launch Youth Campaign
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConceptModal();
              }}
              className="w-full text-center text-xs text-[#A7A7A7] hover:text-[#B7F34A] py-2 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B7F34A]" />
              Why this Funngro 2.0 redesign concept?
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
