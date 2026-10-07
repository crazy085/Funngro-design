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
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto text-center">
        <Reveal>
          {/* Editorial Sub-kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>India&apos;s Dedicated Youth Opportunity Network</span>
          </div>

          {/* Brand Display Wordmark */}
          <div className="font-display font-extrabold tracking-tight text-neutral-400 text-sm uppercase letter-spacing-wide mb-3">
            FUNNGRO 2.0
          </div>

          {/* Primary H1 */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6 text-balance">
            Where young ambition meets real opportunity.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Funngro connects ambitious young people with real work opportunities and helps India&apos;s leading companies collaborate with the next generation through authentic action.
          </p>
        </Reveal>

        {/* The Two Primary Audience Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto text-left">
          {/* CARD 1: I'M A TEEN */}
          <Reveal delayMs={100}>
            <div
              onClick={() => onRouteChange('teen')}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-neutral-900/90 to-[#0c121e] border border-neutral-800 hover:border-emerald-500/60 transition-all duration-300 shadow-xl hover:shadow-emerald-950/20 cursor-pointer overflow-hidden h-full"
            >
              {/* Subtle card glow accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-emerald-400">
                    <Compass className="w-3.5 h-3.5" />
                    For Youth & Students
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">Ages 14–22</span>
                </div>

                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    I&apos;M A TEEN
                  </h2>
                  <p className="text-neutral-300 text-base font-medium leading-relaxed">
                    Find opportunities. Build skills. Get rewarded.
                  </p>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                  Explore real projects in content, app testing, research, and promotion. Gain portfolio experience without compromising your studies.
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  Explore as a Teen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] font-mono text-emerald-400/80 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                  Verified Projects
                </span>
              </div>
            </div>
          </Reveal>

          {/* CARD 2: I'M A COMPANY */}
          <Reveal delayMs={200}>
            <div
              onClick={() => onRouteChange('company')}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-[#111624] to-[#090e18] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 shadow-xl cursor-pointer overflow-hidden h-full"
            >
              {/* Subtle neutral accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500 pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-neutral-400">
                    <Briefcase className="w-3.5 h-3.5" />
                    For Brands & Enterprise
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">B2B Solutions</span>
                </div>

                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-neutral-100 transition-colors">
                    I&apos;M A COMPANY
                  </h2>
                  <p className="text-neutral-300 text-base font-medium leading-relaxed">
                    Reach young India through meaningful campaigns and actions.
                  </p>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                  Activate real user participation across campus promotion, authentic UGC creation, app testing, and unvarnished consumer research.
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-white group-hover:text-neutral-200 transition-colors flex items-center gap-1.5">
                  Explore for Companies
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-700/80 px-2 py-0.5 rounded">
                  Youth at Scale
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Verified Trust Strip */}
      <section className="border-y border-neutral-800/80 bg-[#060910] py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Verified Funngro Platform Ecosystem
            </span>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-neutral-800/80">
            {VERIFIED_METRICS.map((metric, idx) => (
              <Reveal key={idx} delayMs={idx * 100} className="pt-4 sm:pt-0 sm:px-4">
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-1 font-mono-nums">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-emerald-400 mb-0.5">
                  {metric.label}
                </div>
                <div className="text-xs text-neutral-400">
                  {metric.detail}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Redesign Evaluation Context Strip */}
      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <Reveal>
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Funngro 2.0 Evaluation Perspective</span>
              </div>
              <p className="text-sm text-neutral-300">
                Curious why this redesign simplifies the journey to &quot;One Screen = One Idea&quot;?
              </p>
            </div>
            <button
              onClick={onOpenConceptModal}
              className="shrink-0 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 transition-colors whitespace-nowrap"
            >
              Review Design System
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
