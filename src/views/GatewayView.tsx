import React from 'react';
import { Route } from '../types';
import { ArrowRight, Sparkles, Compass, Briefcase } from 'lucide-react';
import { VERIFIED_METRICS } from '../data/funngroData';
import Reveal from '../components/Reveal';

interface GatewayViewProps {
  onRouteChange: (route: Route) => void;
  onOpenConceptModal: () => void;
}

export default function GatewayView({ onRouteChange, onOpenConceptModal }: GatewayViewProps) {
  return (
    <div className="w-full">
      {/* SECTION 1: DARK / INK HERO */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto text-center">
        <Reveal>
          {/* Editorial Sub-kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151515] border border-white/10 text-xs text-[#A7A7A7] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A]"></span>
            <span className="text-white font-medium">India&apos;s Dedicated Youth Opportunity Network</span>
          </div>

          {/* Brand Display Wordmark */}
          <div className="font-display font-extrabold tracking-tight text-[#A7A7A7] text-xs uppercase tracking-widest mb-3">
            FUNNGRO 2.0
          </div>

          {/* Primary H1 */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6 text-balance">
            Where young ambition meets real opportunity.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-[#A7A7A7] max-w-2xl mx-auto leading-relaxed mb-12">
            Funngro connects ambitious young people with real work opportunities and helps India&apos;s leading companies collaborate with the next generation through authentic action.
          </p>
        </Reveal>

        {/* The Two Primary Audience Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto text-left">
          {/* CARD 1: I'M A TEEN */}
          <Reveal delayMs={100}>
            <a
              href="/teen"
              onClick={(e) => {
                e.preventDefault();
                onRouteChange('teen');
              }}
              className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-[#151515] hover:bg-[#1D1D1D] border border-white/10 hover:border-[#B7F34A] transition-all duration-300 shadow-xl cursor-pointer h-full block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F34A]"
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#B7F34A]">
                    <Compass className="w-3.5 h-3.5 text-[#B7F34A]" />
                    For Youth &amp; Students
                  </span>
                  <span className="text-xs text-[#A7A7A7] font-medium">Ages 14–22</span>
                </div>

                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-[#B7F34A] transition-colors">
                    I&apos;M A TEEN
                  </h2>
                  <p className="text-white text-base font-semibold leading-relaxed">
                    Find opportunities. Build skills. Get rewarded.
                  </p>
                </div>

                <p className="text-xs text-[#A7A7A7] leading-relaxed pt-1">
                  Explore real projects in content, app testing, research, and promotion. Gain portfolio experience without compromising your studies.
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-white group-hover:text-[#B7F34A] transition-colors flex items-center gap-1.5">
                  Explore as a Teen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] font-mono font-bold text-[#0B0B0B] bg-[#B7F34A] px-2.5 py-0.5 rounded">
                  70L+ Youth Network
                </span>
              </div>
            </a>
          </Reveal>

          {/* CARD 2: I'M A COMPANY */}
          <Reveal delayMs={200}>
            <a
              href="/company"
              onClick={(e) => {
                e.preventDefault();
                onRouteChange('company');
              }}
              className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-[#151515] hover:bg-[#1D1D1D] border border-white/10 hover:border-white/40 transition-all duration-300 shadow-xl cursor-pointer h-full block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F34A]"
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white">
                    <Briefcase className="w-3.5 h-3.5 text-white" />
                    For Brands &amp; Enterprise
                  </span>
                  <span className="text-xs text-[#A7A7A7] font-medium">B2B Solutions</span>
                </div>

                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-white transition-colors">
                    I&apos;M A COMPANY
                  </h2>
                  <p className="text-white text-base font-semibold leading-relaxed">
                    Reach young India through meaningful campaigns and actions.
                  </p>
                </div>

                <p className="text-xs text-[#A7A7A7] leading-relaxed pt-1">
                  Activate real user participation across campus promotion, authentic UGC creation, app testing, and unvarnished consumer research.
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-white group-hover:text-[#B7F34A] transition-colors flex items-center gap-1.5">
                  Explore for Companies
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] font-mono text-white bg-white/10 border border-white/15 px-2.5 py-0.5 rounded">
                  5,000+ Brands
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2: WARM OFF-WHITE EDITORIAL CONTRAST STRIP */}
      <section className="border-y border-[#171717]/10 bg-[#F5F1E8] py-16 px-4 sm:px-6 text-[#171717]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#68645C] font-bold">
              Verified Funngro Platform Ecosystem
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#171717]/10">
            {VERIFIED_METRICS.map((metric, idx) => (
              <Reveal key={idx} delayMs={idx * 100} className="pt-6 sm:pt-0 sm:px-6">
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#171717] tracking-tight mb-1 font-mono-nums">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-[#171717] mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-[#68645C] max-w-xs mx-auto">
                  {metric.detail}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DARK / INK EVALUATION CONTEXT STRIP */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <Reveal>
          <div className="p-6 sm:p-8 rounded-2xl bg-[#151515] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#B7F34A]">
                <Sparkles className="w-3.5 h-3.5 text-[#B7F34A]" />
                <h2 className="text-xs font-bold text-[#B7F34A] uppercase tracking-wider">
                  Funngro 2.0 Evaluation Perspective
                </h2>
              </div>
              <p className="text-sm text-white">
                Curious why this redesign simplifies the journey to &quot;One Screen = One Idea&quot;?
              </p>
            </div>
            <button
              onClick={onOpenConceptModal}
              className="shrink-0 px-4 py-2.5 text-xs font-semibold rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white transition-all whitespace-nowrap"
            >
              Review Design System
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
