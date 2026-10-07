import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  BarChart2,
  Share2,
  Sparkles,
  Layers,
  Sliders,
  ChevronRight,
  Send,
  Building
} from 'lucide-react';
import {
  COMPANY_SOLUTIONS,
  COMPANY_PROCESS,
  WHY_FUNNGRO,
  VERIFIED_METRICS
} from '../data/funngroData';
import { SolutionCategory } from '../types';
import Reveal from '../components/Reveal';

interface CompanyViewProps {
  onOpenCampaignModal: (solutionType?: string) => void;
  onOpenContactModal: () => void;
}

export default function CompanyView({
  onOpenCampaignModal,
  onOpenContactModal
}: CompanyViewProps) {
  const [activeSolutionId, setActiveSolutionId] = useState<string>('promote');

  // Interactive Visualizer state in Hero
  const [activeVisualizerTab, setActiveVisualizerTab] = useState<'brief' | 'targeting' | 'verification'>('brief');

  const activeSolution =
    COMPANY_SOLUTIONS.find((s) => s.id === activeSolutionId) ||
    COMPANY_SOLUTIONS[0];

  const scrollToSolutions = () => {
    const el = document.getElementById('company-solutions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* SECTION 1: HERO & SOPHISTICATED PRODUCT VISUALIZATION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          <Reveal className="lg:col-span-7 text-center lg:text-left">
            <div className="text-xs font-mono font-medium tracking-wider text-neutral-400 uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span>Enterprise Solutions</span>
              <span>·</span>
              <span>Youth Action Platform</span>
            </div>

            {/* Primary H1 for SEO */}
            <h1 className="sr-only">
              Reach India&apos;s Young Audience Through Real Actions
            </h1>

            {/* Editorial Display Header */}
            <div
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 text-balance"
              aria-hidden="true"
            >
              DON&apos;T JUST REACH YOUNG INDIA.<br />
              <span className="text-emerald-400">GET THEM TO ACT.</span>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Connect your brand with young audiences through meaningful campaigns, content, research, testing and more.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenCampaignModal()}
                className="px-6 py-3 text-sm font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors shadow-lg shadow-emerald-500/20 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Start a campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToSolutions}
                className="px-6 py-3 text-sm font-semibold rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Explore solutions
              </button>
            </div>
          </Reveal>

          <Reveal delayMs={150} className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#0a0f1b] shadow-2xl group">
              <img
                src="/src/assets/images/brand_strategy_workspace_1791308391483.jpg"
                alt="Brand marketing and growth strategy professionals collaborating on youth campaigns"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                <span className="font-mono text-[11px] text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-neutral-800">
                  Real Participation at Scale
                </span>
                <span className="text-[11px] text-neutral-400">Enterprise Verified</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sophisticated Campaign / Product Visualization */}
        <Reveal delayMs={100} className="mt-6 rounded-2xl bg-[#0a0f1b] border border-neutral-800 shadow-2xl overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-neutral-900/70 border-b border-neutral-800 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
              </div>
              <span className="text-xs font-mono text-neutral-300 font-medium">
                Funngro Campaign Studio · Console Architecture
              </span>
            </div>

            {/* Segmented Controller for Studio Views */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-neutral-800">
              <button
                onClick={() => setActiveVisualizerTab('brief')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  activeVisualizerTab === 'brief'
                    ? 'bg-neutral-800 text-emerald-400'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                1. Campaign Spec
              </button>
              <button
                onClick={() => setActiveVisualizerTab('targeting')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  activeVisualizerTab === 'targeting'
                    ? 'bg-neutral-800 text-emerald-400'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                2. Youth Cohort
              </button>
              <button
                onClick={() => setActiveVisualizerTab('verification')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  activeVisualizerTab === 'verification'
                    ? 'bg-neutral-800 text-emerald-400'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                3. Milestone Verification
              </button>
            </div>
          </div>

          {/* Interactive Workspace Area */}
          <div className="p-6 sm:p-8">
            {activeVisualizerTab === 'brief' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-150">
                <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                  <div className="text-xs font-mono text-emerald-400 uppercase">Input Objective</div>
                  <div className="text-base font-bold text-white">Direct Youth Engagement</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Brands specify concrete milestones: UGC short videos, campus trial drops, peer referrals, or usability testing.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                  <div className="text-xs font-mono text-emerald-400 uppercase">Scale & Velocity</div>
                  <div className="text-base font-bold text-white">From 100 to 10,000+ Actions</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Activate distributed student talent across India simultaneously, coordinated by Funngro workflows.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
                  <div className="text-xs font-mono text-emerald-400 uppercase">Proof Architecture</div>
                  <div className="text-base font-bold text-white">Escrow & Submission Audits</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Zero vanity impression fees. Every deliverable is screened before milestone compensation releases.
                  </p>
                </div>
              </div>
            )}

            {activeVisualizerTab === 'targeting' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-150">
                <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 uppercase">Age Distribution</div>
                  <div className="text-base font-bold text-white">14–22 Age Cohorts</div>
                  <div className="text-xs text-neutral-400">High school, pre-university, and undergraduate college students across Tier 1, 2, and 3 regions.</div>
                </div>
                <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 uppercase">Interest Clusters</div>
                  <div className="text-base font-bold text-white">Skill-Based Segmenting</div>
                  <div className="text-xs text-neutral-400">Target by demonstrated competencies: Content creators, UI testers, campus ambassadors, or survey groups.</div>
                </div>
                <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 uppercase">Safeguards</div>
                  <div className="text-base font-bold text-white">Protected Communication</div>
                  <div className="text-xs text-neutral-400">Structured milestone exchange preserves student privacy and brand brand safety.</div>
                </div>
              </div>
            )}

            {activeVisualizerTab === 'verification' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-150">
                <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 uppercase">Review Pipeline</div>
                  <div className="text-base font-bold text-white">Multi-Check Verification</div>
                  <div className="text-xs text-neutral-400">Deliverables reviewed for guidelines adherence, original effort, and proof of completion.</div>
                </div>
                <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 uppercase">Analytics Dashboard</div>
                  <div className="text-base font-bold text-white">Clear Outcome Reports</div>
                  <div className="text-xs text-neutral-400">Real-time counts of verified submissions, qualitative insights, and completed action milestones.</div>
                </div>
                <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 uppercase">Direct Export</div>
                  <div className="text-base font-bold text-white">Instant Asset Delivery</div>
                  <div className="text-xs text-neutral-400">Download high-res UGC video clips, structured bug tickets, or survey CSV datasets seamlessly.</div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* SECTION 2: VERIFIED TRUST STRIP */}
      <section className="border-y border-neutral-800/80 bg-[#060910] py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
              Verified Scale
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Publicly stated Funngro platform ecosystem
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {VERIFIED_METRICS.map((metric, idx) => (
              <Reveal key={idx} delayMs={idx * 120}>
                <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800/80 h-full">
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono-nums mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-emerald-400 mb-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTIONS SELECTOR */}
      <section id="company-solutions" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
            Activation Categories
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 text-balance">
            One audience. Many ways to activate it.
          </h2>
          <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
            Choose the engagement model that matches your brand objectives.
          </p>
        </Reveal>

        {/* Category Buttons / Segmented Controls */}
        <Reveal delayMs={100} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8" role="tablist">
          {COMPANY_SOLUTIONS.map((sol) => {
            const isSelected = activeSolutionId === sol.id;
            return (
              <button
                key={sol.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`solution-panel-${sol.id}`}
                id={`solution-tab-${sol.id}`}
                onClick={() => setActiveSolutionId(sol.id)}
                className={`py-3.5 px-3 rounded-xl text-center text-xs font-bold tracking-wider uppercase border transition-all ${
                  isSelected
                    ? 'bg-neutral-800 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/30'
                    : 'bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {sol.label}
              </button>
            );
          })}
        </Reveal>

        {/* Selected Solution State & Accompanying Visual */}
        <Reveal delayMs={150}>
          <div
            role="tabpanel"
            id={`solution-panel-${activeSolution.id}`}
            aria-labelledby={`solution-tab-${activeSolution.id}`}
            className="p-8 sm:p-10 rounded-2xl bg-[#0c121e] border border-neutral-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <span>{activeSolution.label} Campaign Model</span>
                <span>·</span>
                <span>Active Youth Participation</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {activeSolution.tagline}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeSolution.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                  Deliverable Formats
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSolution.deliverables.map((del, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-200"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-neutral-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Target action: <strong className="text-neutral-200">{activeSolution.targetAction}</strong></span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-5">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  Strategic Advantage
                </div>
                <div className="text-sm font-semibold text-white">
                  {activeSolution.metricHighlight}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-black/40 border border-neutral-800 space-y-2 text-xs text-neutral-300">
                <div className="font-semibold text-emerald-400">
                  Why brands choose {activeSolution.label} on Funngro:
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  Connect directly with young participants who understand peer context better than external creative agencies.
                </p>
              </div>

              <button
                onClick={() => onOpenCampaignModal(activeSolution.label)}
                className="w-full py-3 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-emerald-500/20"
              >
                <span>Launch {activeSolution.label} Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="py-20 px-4 sm:px-6 bg-[#060910] border-t border-neutral-800/80">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
              Campaign Lifecycle
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              How it works
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {COMPANY_PROCESS.map((proc, idx) => (
              <Reveal key={idx} delayMs={idx * 100}>
                <div className="p-6 rounded-2xl bg-[#0c121e] border border-neutral-800 flex flex-col justify-between space-y-4 h-full">
                  <div className="space-y-3">
                    <div className="font-mono text-2xl font-extrabold text-emerald-400 font-mono-nums">
                      {proc.step}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {proc.title}
                    </h3>
                    <p className="text-sm font-medium text-neutral-200 leading-snug">
                      {proc.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400 leading-relaxed">
                    {proc.detail}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY FUNNGRO */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
            Core Value Proposition
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Why Funngro
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_FUNNGRO.map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 120}>
              <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    PILLAR 0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-neutral-200 text-sm font-medium leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <Reveal>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-neutral-900 via-[#0c121e] to-[#080c14] border border-neutral-700/80 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto space-y-6">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-1 rounded">
                Launch Your Next Youth Initiative
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Ready to build your next youth campaign?
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Connect with verified young creators, testers, ambassadors, and researchers across India.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => onOpenCampaignModal()}
                  className="px-8 py-3.5 text-sm font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors shadow-lg shadow-emerald-500/30 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <span>Start a campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenContactModal}
                  className="px-7 py-3.5 text-sm font-semibold rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  Talk to Funngro
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
