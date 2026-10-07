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
      <div className="bg-[#0b101c] border-b border-neutral-800/80 px-4 py-1.5 text-center text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-neutral-300">Funngro 2.0 Concept</span>
            <span className="hidden sm:inline text-neutral-500">·</span>
            <span className="hidden sm:inline text-neutral-400">Strategic Product Redesign Evaluation</span>
          </div>
          <button
            onClick={onOpenConceptModal}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-medium underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded px-1"
          >
            Design rationale & notes
          </button>
        </div>
      </div>

      {/* Main Top Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-neutral-800/90 shadow-lg py-2.5'
            : 'bg-[#080c14]/75 backdrop-blur-sm border-b border-neutral-800/40 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('gateway')}
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md p-1 -m-1 text-left"
            aria-label="Funngro Home"
          >
            <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              FUNNGRO
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded">
              2.0
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('gateway')}
              className={`transition-colors py-1 relative ${
                currentRoute === 'gateway'
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-500'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNavClick('teen')}
              className={`transition-colors py-1 relative ${
                currentRoute === 'teen'
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-500'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Teen
            </button>
            <button
              onClick={() => handleNavClick('company')}
              className={`transition-colors py-1 relative ${
                currentRoute === 'company'
                  ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-500'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Companies
            </button>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('teen')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                currentRoute === 'teen'
                  ? 'bg-neutral-800 text-emerald-400 border border-emerald-500/40'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80 border border-neutral-700/60'
              }`}
            >
              For Teens
            </button>
            <button
              onClick={() => handleNavClick('company')}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors whitespace-nowrap shadow-sm shadow-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              For Companies
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 hover:bg-neutral-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
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
          className="fixed inset-0 top-[88px] z-50 bg-[#080c14]/98 backdrop-blur-xl md:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-neutral-800 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-wider uppercase text-neutral-400">
              Navigate Platforms
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('gateway')}
                className={`flex items-center justify-between p-4 rounded-xl text-left border transition-colors ${
                  currentRoute === 'gateway'
                    ? 'bg-neutral-900 border-emerald-500/50 text-white font-semibold'
                    : 'bg-neutral-900/50 border-neutral-800 text-neutral-300'
                }`}
              >
                <div>
                  <div className="text-base font-semibold">Gateway</div>
                  <div className="text-xs text-neutral-400">Audience selection & overview</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </button>

              <button
                onClick={() => handleNavClick('teen')}
                className={`flex items-center justify-between p-4 rounded-xl text-left border transition-colors ${
                  currentRoute === 'teen'
                    ? 'bg-neutral-900 border-emerald-500/50 text-white font-semibold'
                    : 'bg-neutral-900/50 border-neutral-800 text-neutral-300'
                }`}
              >
                <div>
                  <div className="text-base font-semibold text-emerald-400">For Teens & Students</div>
                  <div className="text-xs text-neutral-400">Your time · Your skills · Your opportunity</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </button>

              <button
                onClick={() => handleNavClick('company')}
                className={`flex items-center justify-between p-4 rounded-xl text-left border transition-colors ${
                  currentRoute === 'company'
                    ? 'bg-neutral-900 border-emerald-500/50 text-white font-semibold'
                    : 'bg-neutral-900/50 border-neutral-800 text-neutral-300'
                }`}
              >
                <div>
                  <div className="text-base font-semibold text-white">For Brands & Companies</div>
                  <div className="text-xs text-neutral-400">Reach young India through real action</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-800/80 space-y-4">
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('teen')}
                className="w-full py-3 text-center text-sm font-semibold rounded-xl bg-neutral-800 border border-neutral-700 text-white hover:bg-neutral-700 transition-colors"
              >
                Explore Opportunities (Teen)
              </button>
              <button
                onClick={() => handleNavClick('company')}
                className="w-full py-3 text-center text-sm font-semibold rounded-xl bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
              >
                Launch Youth Campaign
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConceptModal();
              }}
              className="w-full text-center text-xs text-neutral-400 hover:text-emerald-400 py-2 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Why this Funngro 2.0 redesign concept?
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
