import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Compass,
  Layers,
  ChevronRight,
  TrendingUp,
  FileCheck,
  Search,
  SlidersHorizontal,
  Code2,
  PenTool,
  Smartphone,
  BarChart3,
  Megaphone,
  Palette
} from 'lucide-react';
import {
  CONCEPTUAL_OPPORTUNITIES,
  TEEN_JOURNEY_STEPS,
  UNIVERSE_CATEGORIES,
  VERIFIED_METRICS
} from '../data/funngroData';
import { OpportunityItem, UniverseCategory } from '../types';
import Reveal from '../components/Reveal';

interface TeenViewProps {
  onOpenRegisterModal: () => void;
  onSelectOpportunity: (opportunity: OpportunityItem) => void;
}

export default function TeenView({
  onOpenRegisterModal,
  onSelectOpportunity
}: TeenViewProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeUniverseCat, setActiveUniverseCat] = useState<string>('content');

  const filteredOpportunities =
    selectedFilter === 'all'
      ? CONCEPTUAL_OPPORTUNITIES
      : CONCEPTUAL_OPPORTUNITIES.filter(
          (item) => item.category.toLowerCase().replace(/\s+/g, '') === selectedFilter
        );

  const currentUniverseItem =
    UNIVERSE_CATEGORIES.find((cat) => cat.id === activeUniverseCat) ||
    UNIVERSE_CATEGORIES[0];

  const getUniverseIcon = (id: string) => {
    switch (id) {
      case 'content':
        return <PenTool className="w-5 h-5" />;
      case 'testing':
        return <Smartphone className="w-5 h-5" />;
      case 'research':
        return <BarChart3 className="w-5 h-5" />;
      case 'promotion':
        return <Megaphone className="w-5 h-5" />;
      case 'design':
        return <Palette className="w-5 h-5" />;
      case 'technology':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* SECTION 1: HERO & PRODUCT MOCKUP */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          <Reveal className="lg:col-span-7 text-center lg:text-left">
            {/* Unboxed editorial category kicker */}
            <div className="text-xs font-mono font-medium tracking-wider text-emerald-400 uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span>Student & Teen Platform</span>
              <span>·</span>
              <span>Ages 14–22</span>
            </div>

            {/* Primary H1 for SEO */}
            <h1 className="sr-only">
              Turn Your Skills Into Real Opportunities
            </h1>

            {/* Editorial Display Heading */}
            <div
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 text-balance"
              aria-hidden="true"
            >
              YOUR TIME.<br />
              YOUR SKILLS.<br />
              <span className="text-emerald-400">YOUR OPPORTUNITY.</span>
            </div>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Turn what you can do into real opportunities. Work on practical brand projects, build confidence, and get rewarded on your schedule.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('teen-discovery-mockup')}
                className="px-6 py-3 text-sm font-semibold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors shadow-lg shadow-emerald-500/20 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Explore opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('teen-journey')}
                className="px-6 py-3 text-sm font-semibold rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                How it works
              </button>
            </div>
          </Reveal>

          <Reveal delayMs={150} className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#0c121e] shadow-2xl group">
              <img
                src="/src/assets/images/teen_creator_workspace_1791308376705.jpg"
                alt="Young Indian student and digital creator working focused at a modern workspace"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                <span className="font-mono text-[11px] text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-neutral-800">
                  Real Projects · Real Learning
                </span>
                <span className="text-[11px] text-neutral-400">Verified Platform</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual Product Mockup Container */}
        <div id="teen-discovery-mockup" className="mt-8 pt-4">
          <Reveal className="rounded-2xl bg-[#0c121e] border border-neutral-800 shadow-2xl p-4 sm:p-6 md:p-8">
            {/* Mockup Top Navigation Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h2 className="text-base font-bold text-white tracking-tight">
                    Opportunity Discovery Interface
                  </h2>
                </div>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Conceptual UI demonstration · Filter real project formats
                </p>
              </div>

              {/* Filter Tabs (Interactive Segmented Control) */}
              <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-xl border border-neutral-800 overflow-x-auto max-w-full">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedFilter === 'all'
                      ? 'bg-neutral-800 text-emerald-400 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => setSelectedFilter('apptesting')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedFilter === 'apptesting'
                      ? 'bg-neutral-800 text-emerald-400 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  App Testing
                </button>
                <button
                  onClick={() => setSelectedFilter('contentcreation')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedFilter === 'contentcreation'
                      ? 'bg-neutral-800 text-emerald-400 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Content
                </button>
                <button
                  onClick={() => setSelectedFilter('brandpromotion')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedFilter === 'brandpromotion'
                      ? 'bg-neutral-800 text-emerald-400 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Promotion
                </button>
                <button
                  onClick={() => setSelectedFilter('research')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    selectedFilter === 'research'
                      ? 'bg-neutral-800 text-emerald-400 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Research
                </button>
              </div>
            </div>

            {/* Mockup Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {filteredOpportunities.map((opp, idx) => (
                <Reveal key={opp.id} delayMs={idx * 80}>
                  <div
                    onClick={() => onSelectOpportunity(opp)}
                    className="group p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/50 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full"
                  >
                    <div className="space-y-3">
                      {/* Unboxed Metadata Line */}
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-400 font-semibold">{opp.category}</span>
                          <span>·</span>
                          <span>{opp.brandType}</span>
                        </div>
                        <span className="text-neutral-400">{opp.duration}</span>
                      </div>

                      <h3 className="font-semibold text-white text-base group-hover:text-emerald-300 transition-colors">
                        {opp.title}
                      </h3>

                      <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                        {opp.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-neutral-800/80 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-neutral-400 uppercase font-mono tracking-wider">
                          Conceptual Reward
                        </div>
                        <div className="text-sm font-bold text-white font-mono-nums">
                          {opp.conceptualReward}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectOpportunity(opp);
                        }}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800 group-hover:bg-emerald-500 group-hover:text-neutral-950 text-neutral-300 transition-colors flex items-center gap-1"
                      >
                        <span>View Project</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* UI Concept Disclaimer Label */}
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
              <span className="italic">
                *Conceptual interface simulation illustrating typical task types. Rewards vary based on project scope, milestone delivery, and client verification.
              </span>
              <button
                onClick={onOpenRegisterModal}
                className="text-emerald-400 hover:text-emerald-300 font-medium whitespace-nowrap"
              >
                Sign up to discover real projects →
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2: NOT JUST A GIG */}
      <section className="py-20 px-4 sm:px-6 bg-[#060910] border-t border-neutral-800/80">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
              The Funngro Difference
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Not just a gig.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* EARN */}
            <Reveal delayMs={0}>
              <div className="p-8 rounded-2xl bg-[#0c121e] border border-neutral-800/90 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    01 / BENEFIT
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    EARN
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Get rewarded for completing real work.
                  </p>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-4">
                  Fair, transparent compensation for verified milestone delivery. Learn financial responsibility and build your first savings independently.
                </p>
              </div>
            </Reveal>

            {/* BUILD */}
            <Reveal delayMs={120}>
              <div className="p-8 rounded-2xl bg-[#0c121e] border border-neutral-800/90 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    02 / EXPERIENCE
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    BUILD
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Turn real projects into practical experience.
                  </p>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-4">
                  Graduate beyond theoretical textbooks. Craft a verified track record with tangible work samples you can proudly showcase for college admissions and internships.
                </p>
              </div>
            </Reveal>

            {/* GROW */}
            <Reveal delayMs={240}>
              <div className="p-8 rounded-2xl bg-[#0c121e] border border-neutral-800/90 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    03 / TRAJECTORY
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    GROW
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Build confidence and skills through increasingly meaningful opportunities.
                  </p>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-4">
                  Step into complex team challenges and leadership ambassador tracks as your experience expands.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISUAL JOURNEY */}
      <section id="teen-journey" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
            Step-by-Step Path
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 text-balance">
            From your first opportunity to your next level.
          </h2>
        </Reveal>

        {/* Progression Steps: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {TEEN_JOURNEY_STEPS.map((step, idx) => (
            <Reveal key={idx} delayMs={idx * 100}>
              <div className="relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-3">
                  <div className="font-mono text-2xl font-extrabold text-emerald-400 font-mono-nums">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-neutral-200 leading-snug">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400 leading-relaxed">
                  {step.keyOutcome}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4: OPPORTUNITY UNIVERSE */}
      <section className="py-20 px-4 sm:px-6 bg-[#060910] border-t border-neutral-800/80">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
              Multidisciplinary Tracks
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Your skills have more than one direction.
            </h2>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              Explore the breadth of digital and campus opportunities available across categories.
            </p>
          </Reveal>

          {/* Interactive Universe Tabs */}
          <Reveal delayMs={100} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {UNIVERSE_CATEGORIES.map((cat) => {
              const isActive = activeUniverseCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveUniverseCat(cat.id)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    isActive
                      ? 'bg-neutral-800 border-emerald-500 text-white shadow-lg shadow-emerald-950/20'
                      : 'bg-[#0c121e] border-neutral-800/80 text-neutral-400 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div className={`mb-2 ${isActive ? 'text-emerald-400' : 'text-neutral-500'}`}>
                    {getUniverseIcon(cat.id)}
                  </div>
                  <div className="font-semibold text-sm">{cat.name}</div>
                </button>
              );
            })}
          </Reveal>

          {/* Universe Active Category Focus Card */}
          <Reveal delayMs={150}>
            <div className="p-8 rounded-2xl bg-[#0c121e] border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                  <span>{currentUniverseItem.name} Track</span>
                  <span>·</span>
                  <span>Practical Project Scope</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {currentUniverseItem.summary}
                </h3>
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Typical Project Examples
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentUniverseItem.projectExamples.map((ex, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-200"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-neutral-900/80 border border-neutral-800/80 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Common Tools & Platforms
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentUniverseItem.typicalTools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-black/60 border border-neutral-700/60 text-xs font-mono text-emerald-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 pt-2 border-t border-neutral-800/80">
                  Learn modern industry-standard workflows while delivering tangible value.
                </p>
                <button
                  onClick={onOpenRegisterModal}
                  className="w-full py-2.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors text-center"
                >
                  Apply for {currentUniverseItem.name} Projects
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5: TRUST SECTION */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
            Platform Scale
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Evidence, not decoration.
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Official metrics representing the live Funngro ecosystem in India.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VERIFIED_METRICS.map((metric, idx) => (
            <Reveal key={idx} delayMs={idx * 120}>
              <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 text-left space-y-2 h-full">
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono-nums text-emerald-400">
                  {metric.value}
                </div>
                <div className="text-base font-bold text-white">
                  {metric.label}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <Reveal>
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-neutral-900 via-[#0c121e] to-[#080c14] border border-neutral-700/80 shadow-2xl relative overflow-hidden">
            {/* Subtle accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-xl mx-auto space-y-6">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-1 rounded">
                Join Young India
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Your first opportunity is closer than you think.
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Bring your skills. Find work that helps you grow.
              </p>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={onOpenRegisterModal}
                  className="px-8 py-3.5 text-sm font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors shadow-lg shadow-emerald-500/30 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <span>Get started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
