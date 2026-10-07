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
  Building,
  Zap,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';
import {
  COMPANY_SOLUTIONS,
  COMPANY_PROCESS,
  WHY_FUNNGRO,
  VERIFIED_METRICS
} from '../data/funngroData';
import { Route } from '../types';
import Reveal from '../components/Reveal';
import companyHeroImg from '../assets/images/brand_strategy_workspace_1791308391483.jpg';

interface CompanyViewProps {
  onRouteChange?: (route: Route) => void;
  onOpenCampaignModal: (solutionType?: string) => void;
  onOpenContactModal: () => void;
}

export default function CompanyView({
  onRouteChange,
  onOpenCampaignModal,
  onOpenContactModal
}: CompanyViewProps) {
  const [activeSolutionId, setActiveSolutionId] = useState<string>('promote');

  // Interactive Visualizer state in Hero
  const [activeVisualizerTab, setActiveVisualizerTab] = useState<'brief' | 'targeting' | 'verification'>('brief');

  // Interactive Live Campaign Estimator State
  const [youthScale, setYouthScale] = useState<number>(1500);
  const [estimatorObjective, setEstimatorObjective] = useState<string>('PROMOTE');

  const activeSolution =
    COMPANY_SOLUTIONS.find((s) => s.id === activeSolutionId) ||
    COMPANY_SOLUTIONS[0];

  const scrollToSolutions = () => {
    const el = document.getElementById('company-solutions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Estimator Calculations
  const estimatedDays = youthScale <= 500 ? '3–5' : youthScale <= 3000 ? '6–8' : '10–14';
  const estimatedCampuses = Math.max(15, Math.round(youthScale / 12));
  const estimatedActions = youthScale.toLocaleString();

  return (
    <div className="w-full">
      {/* SECTION 1: DARK / INK HERO & SOPHISTICATED PRODUCT VISUALIZATION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          <Reveal className="lg:col-span-7 text-center lg:text-left">
            <div className="text-xs font-mono font-bold tracking-wider text-[#A7A7A7] uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span>Enterprise Solutions</span>
              <span>·</span>
              <span>Youth Action Platform</span>
            </div>

            {/* Primary H1 */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 text-balance">
              Reach India&apos;s young audience.<br />
              <span className="text-[#B7F34A]">Get them to act.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A7A7A7] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Connect your brand with young audiences through meaningful campaigns, content, research, testing and more.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenCampaignModal()}
                className="btn-primary px-7 py-3.5 text-sm font-bold rounded-xl flex items-center gap-2"
              >
                <span>Start a campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToSolutions}
                className="btn-secondary-dark px-7 py-3.5 text-sm font-semibold rounded-xl"
              >
                Explore solutions
              </button>
            </div>
          </Reveal>

          <Reveal delayMs={150} className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#151515] shadow-2xl group">
              <img
                src={companyHeroImg}
                alt="Brand marketing and growth strategy professionals collaborating on youth campaigns"
                width={640}
                height={360}
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/images/brand_strategy_workspace_1791308391483.jpg')) {
                    target.src = '/images/brand_strategy_workspace_1791308391483.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[11px] font-bold text-[#0B0B0B] bg-[#B7F34A] px-2 py-0.5 rounded">
                  Real Participation at Scale
                </span>
                <span className="text-[11px] text-[#A7A7A7]">Enterprise Platform</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sophisticated Campaign / Product Visualization */}
        <Reveal delayMs={100} className="mt-6 rounded-2xl bg-[#151515] border border-white/10 shadow-2xl overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-[#1D1D1D] border-b border-white/10 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
              </div>
              <span className="text-xs font-mono text-white font-medium">
                Funngro Campaign Studio · Console Architecture
              </span>
            </div>

            {/* Segmented Controller for Studio Views */}
            <div className="flex items-center gap-1 bg-[#151515] p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setActiveVisualizerTab('brief')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  activeVisualizerTab === 'brief'
                    ? 'bg-[#B7F34A] text-[#0B0B0B] font-bold'
                    : 'text-[#A7A7A7] hover:text-white'
                }`}
              >
                1. Campaign Spec
              </button>
              <button
                onClick={() => setActiveVisualizerTab('targeting')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  activeVisualizerTab === 'targeting'
                    ? 'bg-[#B7F34A] text-[#0B0B0B] font-bold'
                    : 'text-[#A7A7A7] hover:text-white'
                }`}
              >
                2. Youth Cohort
              </button>
              <button
                onClick={() => setActiveVisualizerTab('verification')}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  activeVisualizerTab === 'verification'
                    ? 'bg-[#B7F34A] text-[#0B0B0B] font-bold'
                    : 'text-[#A7A7A7] hover:text-white'
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
                <div className="p-5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-3">
                  <div className="text-xs font-mono text-[#B7F34A] uppercase font-bold">Input Objective</div>
                  <div className="text-base font-bold text-white">Direct Youth Engagement</div>
                  <p className="text-xs text-[#A7A7A7] leading-relaxed">
                    Brands specify concrete milestones: UGC short videos, campus trial drops, peer referrals, or usability testing.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-3">
                  <div className="text-xs font-mono text-[#B7F34A] uppercase font-bold">Scale &amp; Velocity</div>
                  <div className="text-base font-bold text-white">From 100 to 10,000+ Actions</div>
                  <p className="text-xs text-[#A7A7A7] leading-relaxed">
                    Activate distributed student talent across India simultaneously, coordinated by Funngro workflows.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-3">
                  <div className="text-xs font-mono text-[#B7F34A] uppercase font-bold">Proof Architecture</div>
                  <div className="text-base font-bold text-white">Escrow &amp; Submission Audits</div>
                  <p className="text-xs text-[#A7A7A7] leading-relaxed">
                    Zero vanity impression fees. Every deliverable is screened before milestone compensation releases.
                  </p>
                </div>
              </div>
            )}

            {activeVisualizerTab === 'targeting' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-150">
                <div className="p-5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#B7F34A] uppercase font-bold">Age Distribution</div>
                  <div className="text-base font-bold text-white">14–22 Age Cohorts</div>
                  <div className="text-xs text-[#A7A7A7]">High school, pre-university, and undergraduate college students across Tier 1, 2, and 3 regions.</div>
                </div>
                <div className="p-5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#B7F34A] uppercase font-bold">Interest Clusters</div>
                  <div className="text-base font-bold text-white">Skill-Based Segmenting</div>
                  <div className="text-xs text-[#A7A7A7]">Target by demonstrated competencies: Content creators, UI testers, campus ambassadors, or survey groups.</div>
                </div>
                <div className="p-5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#B7F34A] uppercase font-bold">Safeguards</div>
                  <div className="text-base font-bold text-white">Protected Communication</div>
                  <div className="text-xs text-[#A7A7A7]">Structured milestone exchange preserves student privacy and brand safety.</div>
                </div>
              </div>
            )}

            {activeVisualizerTab === 'verification' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-150">
                <div className="p-5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#B7F34A] uppercase font-bold">Review Pipeline</div>
                  <div className="text-base font-bold text-white">Multi-Check Verification</div>
                  <div className="text-xs text-[#A7A7A7]">Deliverables reviewed for guidelines adherence, original effort, and proof of completion.</div>
                </div>
                <div className="p-5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#B7F34A] uppercase font-bold">Analytics Dashboard</div>
                  <div className="text-base font-bold text-white">Clear Outcome Reports</div>
                  <div className="text-xs text-[#A7A7A7]">Real-time counts of project submissions, qualitative insights, and completed action milestones.</div>
                </div>
                <div className="p-5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#B7F34A] uppercase font-bold">Direct Export</div>
                  <div className="text-base font-bold text-white">Instant Asset Delivery</div>
                  <div className="text-xs text-[#A7A7A7]">Download high-res UGC video clips, structured bug tickets, or survey CSV datasets seamlessly.</div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Interactive Live Campaign Impact Estimator */}
        <Reveal delayMs={150} className="mt-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#151515] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#B7F34A]" />
                  <h2 className="text-base font-bold text-white">
                    Interactive Campaign Scope Estimator
                  </h2>
                </div>
                <p className="text-xs text-[#A7A7A7] mt-0.5">
                  Simulate your target youth cohort reach and expected project turnaround
                </p>
              </div>

              {/* Objective Selector */}
              <div className="flex items-center gap-1.5 p-1 bg-[#1D1D1D] rounded-lg border border-white/10">
                {['PROMOTE', 'CREATE', 'TEST', 'RESEARCH'].map((obj) => (
                  <button
                    key={obj}
                    onClick={() => setEstimatorObjective(obj)}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded transition-colors ${
                      estimatorObjective === obj
                        ? 'bg-[#B7F34A] text-[#0B0B0B]'
                        : 'text-[#A7A7A7] hover:text-white'
                    }`}
                  >
                    {obj}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider + Live Calculated Outcomes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white font-medium">Target Youth Participants</span>
                  <span className="font-mono font-bold text-[#B7F34A] text-sm">
                    {youthScale.toLocaleString()} Young Indians
                  </span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="10000"
                  step="250"
                  value={youthScale}
                  onChange={(e) => setYouthScale(Number(e.target.value))}
                  className="w-full accent-[#B7F34A] bg-[#1D1D1D] h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#A7A7A7]">
                  <span>250 pilot</span>
                  <span>2,500 state</span>
                  <span>5,000 national</span>
                  <span>10,000+ pan-India</span>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 text-center">
                  <div className="text-[10px] font-mono uppercase text-[#A7A7A7] mb-1">Actions</div>
                  <div className="font-mono text-base sm:text-lg font-bold text-white">{estimatedActions}</div>
                  <div className="text-[10px] text-[#B7F34A] mt-0.5">Project Outputs</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 text-center">
                  <div className="text-[10px] font-mono uppercase text-[#A7A7A7] mb-1">Velocity</div>
                  <div className="font-mono text-base sm:text-lg font-bold text-white">{estimatedDays} Days</div>
                  <div className="text-[10px] text-[#B7F34A] mt-0.5">Turnaround</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 text-center">
                  <div className="text-[10px] font-mono uppercase text-[#A7A7A7] mb-1">Campuses</div>
                  <div className="font-mono text-base sm:text-lg font-bold text-white">{estimatedCampuses}+</div>
                  <div className="text-[10px] text-[#B7F34A] mt-0.5">Institutions</div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A7A7A7]">
              <span>Includes structured milestone reviews and quality checks.</span>
              <button
                onClick={() => onOpenCampaignModal(estimatorObjective)}
                className="btn-primary px-4 py-2 text-xs font-bold rounded-lg flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Request {estimatorObjective} proposal for {youthScale.toLocaleString()} youth</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 2: VERIFIED TRUST STRIP (WARM OFF-WHITE EDITORIAL SURFACE) */}
      <section className="border-y border-[#171717]/10 bg-[#F5F1E8] py-16 px-4 sm:px-6 text-[#171717]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#68645C] font-bold">
              Verified Scale
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mt-1">
              Publicly stated Funngro platform ecosystem
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {VERIFIED_METRICS.map((metric, idx) => (
              <Reveal key={idx} delayMs={idx * 120}>
                <div className="p-8 rounded-2xl bg-[#FFFDF7] border border-[#171717]/10 shadow-sm h-full">
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#171717] tracking-tight font-mono-nums mb-2">
                    {metric.value}
                  </div>
                  <div className="text-base font-bold text-[#171717] mb-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-[#68645C] leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SOLUTIONS SELECTOR (DEEP INK) */}
      <section id="company-solutions" className="py-24 md:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#B7F34A] font-bold">
            Activation Categories
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 text-balance">
            One audience. Many ways to activate it.
          </h2>
          <p className="text-sm text-[#A7A7A7] mt-3 leading-relaxed">
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
                    ? 'bg-[#1D1D1D] border-[#B7F34A] text-white shadow-md'
                    : 'bg-[#151515] border-white/10 text-[#A7A7A7] hover:text-white hover:border-white/30'
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
            className="p-8 sm:p-10 rounded-2xl bg-[#151515] border border-white/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B7F34A] font-bold">
                <span>{activeSolution.label} Campaign Model</span>
                <span>·</span>
                <span>Active Youth Participation</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {activeSolution.tagline}
              </h3>

              <p className="text-sm text-[#A7A7A7] leading-relaxed">
                {activeSolution.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white block">
                  Deliverable Formats
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSolution.deliverables.map((del, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-xs text-white"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-[#A7A7A7] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B7F34A] shrink-0" />
                <span>Target action: <strong className="text-white">{activeSolution.targetAction}</strong></span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-5">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#A7A7A7] mb-1">
                  Strategic Advantage
                </div>
                <div className="text-sm font-bold text-white">
                  {activeSolution.metricHighlight}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#151515] border border-white/10 space-y-2 text-xs text-[#A7A7A7]">
                <div className="font-bold text-[#B7F34A]">
                  Why brands choose {activeSolution.label} on Funngro:
                </div>
                <p className="leading-relaxed">
                  Connect directly with young participants who understand peer context better than external creative agencies.
                </p>
              </div>

              <button
                onClick={() => onOpenCampaignModal(activeSolution.label)}
                className="btn-primary w-full py-3 text-xs font-bold rounded-lg flex items-center justify-center gap-2"
              >
                <span>Launch {activeSolution.label} Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 4: HOW IT WORKS (WARM OFF-WHITE EDITORIAL CHAPTERS) */}
      <section className="py-24 px-4 sm:px-6 bg-[#F5F1E8] border-y border-[#171717]/10 text-[#171717]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#68645C] font-bold">
              Campaign Lifecycle
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#171717] tracking-tight mt-2">
              How it works
            </h2>
            <p className="text-sm text-[#68645C] mt-2">
              Structured milestone workflow from brief to completed campaign outcomes.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {COMPANY_PROCESS.map((proc, idx) => (
              <Reveal key={idx} delayMs={idx * 100}>
                <div className="p-7 rounded-2xl bg-[#FFFDF7] border border-[#171717]/10 shadow-sm flex flex-col justify-between space-y-4 h-full">
                  <div className="space-y-3">
                    <div className="font-mono text-2xl font-extrabold text-[#171717] font-mono-nums">
                      {proc.step}
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#171717] tracking-tight">
                      {proc.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#171717] leading-snug">
                      {proc.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#171717]/10 text-xs text-[#68645C] leading-relaxed">
                    {proc.detail}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY FUNNGRO (DEEP INK) */}
      <section className="py-24 md:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#B7F34A] font-bold">
            Core Value Proposition
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Why Funngro
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_FUNNGRO.map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 120}>
              <div className="p-8 rounded-2xl bg-[#151515] border border-white/10 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B7F34A] font-bold">
                    PILLAR 0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm font-semibold leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <p className="text-xs text-[#A7A7A7] leading-relaxed border-t border-white/10 pt-4">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 6: FINAL CTA (ELEVATED INK) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <Reveal>
          <div className="p-8 sm:p-14 rounded-3xl bg-[#151515] border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto space-y-6">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#0B0B0B] bg-[#B7F34A] px-2.5 py-1 rounded">
                Launch Your Next Youth Initiative
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Ready to build your next youth campaign?
              </h2>

              <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
                Connect with young creators, testers, ambassadors, and researchers across India.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => onOpenCampaignModal()}
                  className="btn-primary px-8 py-3.5 text-sm font-bold rounded-xl flex items-center gap-2"
                >
                  <span>Start a campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenContactModal}
                  className="btn-secondary-dark px-7 py-3.5 text-sm font-semibold rounded-xl"
                >
                  Talk to Funngro
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A7A7A7]">
                <span>Are you a student or teenager looking to build skills and earn rewards?</span>
                <a
                  href="/teen"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange?.('teen');
                  }}
                  className="text-white hover:text-[#B7F34A] font-semibold underline-offset-4 hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Explore Teen Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
