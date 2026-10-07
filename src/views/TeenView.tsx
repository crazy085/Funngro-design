import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Compass,
  Layers,
  ChevronRight,
  Search,
  Code2,
  PenTool,
  Smartphone,
  BarChart3,
  Megaphone,
  Palette,
  Bookmark,
  Check,
  Zap,
  Filter
} from 'lucide-react';
import {
  CONCEPTUAL_OPPORTUNITIES,
  TEEN_JOURNEY_STEPS,
  UNIVERSE_CATEGORIES,
  VERIFIED_METRICS
} from '../data/funngroData';
import { OpportunityItem, Route } from '../types';
import Reveal from '../components/Reveal';

interface TeenViewProps {
  onRouteChange?: (route: Route) => void;
  onOpenRegisterModal: () => void;
  onSelectOpportunity: (opportunity: OpportunityItem) => void;
}

export default function TeenView({
  onRouteChange,
  onOpenRegisterModal,
  onSelectOpportunity
}: TeenViewProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [activeUniverseCat, setActiveUniverseCat] = useState<string>('content');
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);

  // Skill Matcher State
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Reels & Video', 'App Testing']);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredOpportunities = useMemo(() => {
    return CONCEPTUAL_OPPORTUNITIES.filter((item) => {
      const matchesCategory =
        selectedFilter === 'all' ||
        item.category.toLowerCase().replace(/\s+/g, '') === selectedFilter;

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brandType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

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

  const skillOptions = [
    'Reels & Video',
    'App Testing',
    'Youth Surveys',
    'Campus Buzz',
    'Graphic Design',
    'Coding & Tech'
  ];

  const calculatedFitScore = Math.min(
    99,
    Math.max(68, 65 + selectedSkills.length * 8)
  );

  return (
    <div className="w-full">
      {/* SECTION 1: DARK / INK HERO & PRODUCT MOCKUP */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          <Reveal className="lg:col-span-7 text-center lg:text-left">
            {/* Unboxed editorial category kicker */}
            <div className="text-xs font-mono font-bold tracking-wider text-[#B7F34A] uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span>Student &amp; Teen Platform</span>
              <span>·</span>
              <span>Ages 14–22</span>
            </div>

            {/* Primary H1 */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6 text-balance">
              Turn your skills into real opportunities.<br />
              <span className="text-[#B7F34A]">Your time, your future.</span>
            </h1>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg text-[#A7A7A7] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Turn what you can do into real opportunities. Work on practical brand projects, build confidence, and get rewarded on your schedule.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('teen-discovery-mockup')}
                className="btn-primary px-7 py-3.5 text-sm font-bold rounded-xl flex items-center gap-2"
              >
                <span>Explore opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('teen-journey')}
                className="btn-secondary-dark px-7 py-3.5 text-sm font-semibold rounded-xl"
              >
                How it works
              </button>
            </div>
          </Reveal>

          <Reveal delayMs={150} className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#151515] shadow-2xl group">
              <img
                src="/src/assets/images/teen_creator_workspace_1791308376705.jpg"
                alt="Young Indian student focused on digital creative work at a modern desk with a laptop"
                width={640}
                height={360}
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[11px] font-bold text-[#0B0B0B] bg-[#B7F34A] px-2 py-0.5 rounded">
                  Real Projects · Real Learning
                </span>
                <span className="text-[11px] text-[#A7A7A7]">Verified Platform</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual Product Mockup Container */}
        <div id="teen-discovery-mockup" className="mt-8 pt-4">
          <Reveal className="rounded-2xl bg-[#151515] border border-white/10 shadow-2xl p-4 sm:p-6 md:p-8">
            {/* Mockup Top Navigation Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B7F34A] animate-pulse"></span>
                  <h2 className="text-base font-bold text-white tracking-tight">
                    Opportunity Discovery Interface
                  </h2>
                </div>
                <p className="text-xs text-[#A7A7A7] mt-0.5">
                  Live conceptual UI · Filter by real category or search by skills
                </p>
              </div>

              {/* Interactive Search + Filter Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                {/* Search input */}
                <div className="relative flex-1 sm:w-56">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#A7A7A7]" />
                  <input
                    type="text"
                    placeholder="Search skills, projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-[#1D1D1D] border border-white/10 text-white placeholder-[#A7A7A7] focus-visible:outline-none focus-visible:border-[#B7F34A]"
                  />
                </div>

                {/* Filter Tabs (Interactive Segmented Control) */}
                <div className="flex items-center gap-1 p-1 bg-[#1D1D1D] rounded-xl border border-white/10 overflow-x-auto max-w-full">
                  <button
                    onClick={() => setSelectedFilter('all')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                      selectedFilter === 'all'
                        ? 'bg-[#B7F34A] text-[#0B0B0B]'
                        : 'text-[#A7A7A7] hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedFilter('apptesting')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                      selectedFilter === 'apptesting'
                        ? 'bg-[#B7F34A] text-[#0B0B0B]'
                        : 'text-[#A7A7A7] hover:text-white'
                    }`}
                  >
                    App Testing
                  </button>
                  <button
                    onClick={() => setSelectedFilter('contentcreation')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                      selectedFilter === 'contentcreation'
                        ? 'bg-[#B7F34A] text-[#0B0B0B]'
                        : 'text-[#A7A7A7] hover:text-white'
                    }`}
                  >
                    Content
                  </button>
                  <button
                    onClick={() => setSelectedFilter('brandpromotion')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                      selectedFilter === 'brandpromotion'
                        ? 'bg-[#B7F34A] text-[#0B0B0B]'
                        : 'text-[#A7A7A7] hover:text-white'
                    }`}
                  >
                    Promotion
                  </button>
                  <button
                    onClick={() => setSelectedFilter('research')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                      selectedFilter === 'research'
                        ? 'bg-[#B7F34A] text-[#0B0B0B]'
                        : 'text-[#A7A7A7] hover:text-white'
                    }`}
                  >
                    Research
                  </button>
                </div>
              </div>
            </div>

            {/* Results count indicator */}
            <div className="flex items-center justify-between text-xs text-[#A7A7A7] pt-4 pb-1">
              <span>Showing {filteredOpportunities.length} opportunities</span>
              {bookmarkedIds.length > 0 && (
                <span className="text-[#B7F34A] font-semibold">
                  {bookmarkedIds.length} saved project{bookmarkedIds.length > 1 ? 's' : ''}
                </span>
              )}
            </div>

            {/* Mockup Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {filteredOpportunities.length === 0 ? (
                <div className="col-span-2 py-12 text-center text-xs text-[#A7A7A7]">
                  No projects match your search query. Try searching for &quot;reels&quot;, &quot;testing&quot;, or reset filter.
                </div>
              ) : (
                filteredOpportunities.map((opp, idx) => {
                  const isBookmarked = bookmarkedIds.includes(opp.id);
                  return (
                    <Reveal key={opp.id} delayMs={idx * 60}>
                      <div
                        onClick={() => onSelectOpportunity(opp)}
                        className="group p-5 rounded-xl bg-[#1D1D1D] border border-white/10 hover:border-[#B7F34A] transition-all duration-200 cursor-pointer flex flex-col justify-between h-full relative"
                      >
                        <div className="space-y-3">
                          {/* Unboxed Metadata Line with Bookmark button */}
                          <div className="flex items-center justify-between text-xs text-[#A7A7A7]">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[#B7F34A] font-bold">{opp.category}</span>
                              <span>·</span>
                              <span>{opp.brandType}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[#A7A7A7]">{opp.duration}</span>
                              <button
                                onClick={(e) => toggleBookmark(e, opp.id)}
                                className={`p-1 rounded hover:bg-white/10 transition-colors ${
                                  isBookmarked ? 'text-[#B7F34A]' : 'text-[#A7A7A7] hover:text-white'
                                }`}
                                aria-label="Bookmark project"
                              >
                                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#B7F34A]' : ''}`} />
                              </button>
                            </div>
                          </div>

                          <h3 className="font-semibold text-white text-base group-hover:text-[#B7F34A] transition-colors">
                            {opp.title}
                          </h3>

                          <p className="text-xs text-[#A7A7A7] line-clamp-2 leading-relaxed">
                            {opp.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {opp.skills.map((s, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded text-[10px] bg-[#151515] border border-white/10 text-[#A7A7A7]"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] text-[#A7A7A7] uppercase font-mono tracking-wider">
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
                            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/10 group-hover:bg-[#B7F34A] group-hover:text-[#0B0B0B] text-white transition-colors flex items-center gap-1"
                          >
                            <span>Inspect Project</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </Reveal>
                  );
                })
              )}
            </div>

            {/* UI Concept Disclaimer Label */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A7A7A7]">
              <span className="italic">
                *Conceptual interface simulation illustrating typical task types. Rewards vary based on project scope, milestone delivery, and client verification.
              </span>
              <button
                onClick={onOpenRegisterModal}
                className="text-[#B7F34A] hover:text-[#C5F76B] font-semibold whitespace-nowrap"
              >
                Sign up to discover real projects →
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2: NOT JUST A GIG (WARM OFF-WHITE SURFACE FOR BOLD EDITORIAL CONTRAST) */}
      <section className="py-24 px-4 sm:px-6 bg-[#F5F1E8] border-y border-[#171717]/10 text-[#171717]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#68645C] font-bold">
              The Funngro Difference
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-[#171717] tracking-tight mt-2">
              Not just a gig.
            </h2>
            <p className="text-base text-[#68645C] mt-3 leading-relaxed">
              Designed around student schedules. Real responsibilities that carry weight on your CV.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* EARN */}
            <Reveal delayMs={0}>
              <div className="p-8 sm:p-9 rounded-2xl bg-[#FFFDF7] border border-[#171717]/10 shadow-sm flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
                    01 / BENEFIT
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-[#171717] tracking-tight">
                    EARN
                  </h3>
                  <p className="text-[#171717] text-base font-semibold leading-relaxed">
                    Get rewarded for completing real work.
                  </p>
                </div>
                <p className="text-xs text-[#68645C] leading-relaxed border-t border-[#171717]/10 pt-5">
                  Fair, transparent compensation for verified milestone delivery. Learn financial responsibility and build your first savings independently.
                </p>
              </div>
            </Reveal>

            {/* BUILD */}
            <Reveal delayMs={120}>
              <div className="p-8 sm:p-9 rounded-2xl bg-[#FFFDF7] border border-[#171717]/10 shadow-sm flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
                    02 / EXPERIENCE
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-[#171717] tracking-tight">
                    BUILD
                  </h3>
                  <p className="text-[#171717] text-base font-semibold leading-relaxed">
                    Turn real projects into practical experience.
                  </p>
                </div>
                <p className="text-xs text-[#68645C] leading-relaxed border-t border-[#171717]/10 pt-5">
                  Graduate beyond theoretical textbooks. Craft a verified track record with tangible work samples you can proudly showcase for college admissions and internships.
                </p>
              </div>
            </Reveal>

            {/* GROW */}
            <Reveal delayMs={240}>
              <div className="p-8 sm:p-9 rounded-2xl bg-[#FFFDF7] border border-[#171717]/10 shadow-sm flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#171717] font-bold">
                    03 / TRAJECTORY
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-[#171717] tracking-tight">
                    GROW
                  </h3>
                  <p className="text-[#171717] text-base font-semibold leading-relaxed">
                    Build confidence and skills through increasingly meaningful opportunities.
                  </p>
                </div>
                <p className="text-xs text-[#68645C] leading-relaxed border-t border-[#171717]/10 pt-5">
                  Step into complex team challenges and leadership ambassador tracks as your experience expands.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISUAL JOURNEY (DEEP INK INTERACTIVE PROGRESSION) */}
      <section id="teen-journey" className="py-24 md:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-[#B7F34A] font-bold">
            Step-by-Step Path
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 text-balance">
            From your first opportunity to your next level.
          </h2>
          <p className="text-sm text-[#A7A7A7] mt-2">
            Click any step to inspect how milestones operate.
          </p>
        </Reveal>

        {/* Progression Steps: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
          {TEEN_JOURNEY_STEPS.map((step, idx) => {
            const isSelected = activeJourneyStep === idx;
            return (
              <Reveal key={idx} delayMs={idx * 80}>
                <div
                  onClick={() => setActiveJourneyStep(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 h-full ${
                    isSelected
                      ? 'bg-[#1D1D1D] border-[#B7F34A] shadow-lg ring-1 ring-[#B7F34A]'
                      : 'bg-[#151515] border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-extrabold text-[#B7F34A] font-mono-nums">
                        {step.step}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-mono uppercase font-bold text-[#0B0B0B] bg-[#B7F34A] px-2 py-0.5 rounded">
                          Active Phase
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-[#A7A7A7] leading-snug">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-[#A7A7A7] leading-relaxed">
                    {step.keyOutcome}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: OPPORTUNITY UNIVERSE + INTERACTIVE SKILL FIT (WARM OFF-WHITE CONTRAST) */}
      <section className="py-24 px-4 sm:px-6 bg-[#F5F1E8] border-y border-[#171717]/10 text-[#171717]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <Reveal className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#68645C] font-bold">
                Multidisciplinary Tracks
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight mt-2">
                Your skills have more than one direction.
              </h2>
              <p className="text-sm text-[#68645C] mt-3 leading-relaxed">
                Explore the breadth of digital and campus opportunities available across categories.
              </p>
            </Reveal>

            {/* Quick Skill-Fit Interactive Calculator Badge */}
            <Reveal delayMs={100} className="lg:col-span-4">
              <div className="p-5 rounded-2xl bg-[#FFFDF7] border border-[#171717]/10 space-y-2.5 shadow-sm">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#68645C] font-semibold">Your Projected Match</span>
                  <span className="font-mono font-extrabold text-[#171717]">{calculatedFitScore}% Fit</span>
                </div>
                <div className="w-full bg-[#171717]/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#B7F34A] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${calculatedFitScore}%` }}
                  ></div>
                </div>
                <div className="text-[11px] text-[#68645C]">
                  Selected {selectedSkills.length} of 6 interest categories
                </div>
              </div>
            </Reveal>
          </div>

          {/* Interactive Skill Selector Chips */}
          <div className="mb-8 p-6 rounded-2xl bg-[#FFFDF7] border border-[#171717]/10 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-[#171717] mb-3.5 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#171717]" />
              <span>Tap what you enjoy doing to test platform fit:</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skillOptions.map((skill) => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#B7F34A] border-[#B7F34A] text-[#0B0B0B] shadow-sm'
                        : 'bg-[#F5F1E8] border-[#171717]/15 text-[#171717] hover:border-[#171717]'
                    }`}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5 text-[#0B0B0B]" /> : null}
                    <span>{skill}</span>
                  </button>
                );
              })}
            </div>
          </div>

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
                      ? 'bg-[#171717] border-[#171717] text-white shadow-md'
                      : 'bg-[#FFFDF7] border-[#171717]/10 text-[#68645C] hover:text-[#171717] hover:border-[#171717]/30'
                  }`}
                >
                  <div className={`mb-2 ${isActive ? 'text-[#B7F34A]' : 'text-[#68645C]'}`}>
                    {getUniverseIcon(cat.id)}
                  </div>
                  <div className="font-bold text-sm">{cat.name}</div>
                </button>
              );
            })}
          </Reveal>

          {/* Universe Active Category Focus Card */}
          <Reveal delayMs={150}>
            <div className="p-8 rounded-2xl bg-[#FFFDF7] border border-[#171717]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#68645C] font-bold">
                  <span>{currentUniverseItem.name} Track</span>
                  <span>·</span>
                  <span>Practical Project Scope</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#171717]">
                  {currentUniverseItem.summary}
                </h3>
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#68645C]">
                    Typical Project Examples
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentUniverseItem.projectExamples.map((ex, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-[#F5F1E8] border border-[#171717]/10 text-xs font-medium text-[#171717]"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-[#F5F1E8] border border-[#171717]/10 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#68645C]">
                  Common Tools &amp; Platforms
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentUniverseItem.typicalTools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#FFFDF7] border border-[#171717]/10 text-xs font-mono font-semibold text-[#171717]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#68645C] pt-2 border-t border-[#171717]/10">
                  Learn modern industry-standard workflows while delivering tangible value.
                </p>
                <button
                  onClick={onOpenRegisterModal}
                  className="btn-primary w-full py-3 text-xs font-bold rounded-lg text-center"
                >
                  Apply for {currentUniverseItem.name} Projects
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5: TRUST SECTION (DEEP INK) */}
      <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#B7F34A] font-bold">
            Platform Scale
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Evidence, not decoration.
          </h2>
          <p className="text-sm text-[#A7A7A7] mt-2">
            Official metrics representing the live Funngro ecosystem in India.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {VERIFIED_METRICS.map((metric, idx) => (
            <Reveal key={idx} delayMs={idx * 120}>
              <div className="p-8 rounded-2xl bg-[#151515] border border-white/10 text-left space-y-2 h-full">
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#B7F34A] tracking-tight font-mono-nums">
                  {metric.value}
                </div>
                <div className="text-base font-bold text-white">
                  {metric.label}
                </div>
                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 6: FINAL CTA (ELEVATED INK WITH GREEN DOMINANCE) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <Reveal>
          <div className="p-8 sm:p-14 rounded-3xl bg-[#151515] border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto space-y-6">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#0B0B0B] bg-[#B7F34A] px-2.5 py-1 rounded">
                Join Young India
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Your first opportunity is closer than you think.
              </h2>

              <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
                Bring your skills. Find work that helps you grow.
              </p>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={onOpenRegisterModal}
                  className="btn-primary px-8 py-3.5 text-sm font-bold rounded-xl flex items-center gap-2"
                >
                  <span>Get started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A7A7A7]">
                <span>Are you a brand or enterprise looking to engage youth?</span>
                <a
                  href="/company"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange?.('company');
                  }}
                  className="text-white hover:text-[#B7F34A] font-semibold underline-offset-4 hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Explore Brand &amp; Enterprise Solutions</span>
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
