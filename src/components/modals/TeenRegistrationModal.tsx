import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface TeenRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export default function TeenRegistrationModal({
  isOpen,
  onClose,
  initialInterest
}: TeenRegistrationModalProps) {
  const [name, setName] = useState('');
  const [ageRange, setAgeRange] = useState('16-18');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [skillsSelected, setSkillsSelected] = useState<string[]>(
    initialInterest ? [initialInterest] : ['Content Creation']
  );
  const [hasParentConsent, setHasParentConsent] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleSkill = (skill: string) => {
    setSkillsSelected((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCity('');
    onClose();
  };

  const skillOptions = [
    'Content Creation',
    'App Testing',
    'Market Research',
    'Brand Promotion',
    'Graphic Design',
    'Coding & Tech'
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="teen-reg-title"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0d1322] border border-neutral-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-neutral-200">
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Welcome to Funngro 2.0!
            </h3>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Your profile draft for <strong className="text-white">{name || 'Teen Pioneer'}</strong> has been created. In the live platform, you'll receive your first project verification match on your student dashboard.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors"
              >
                Back to Explorer
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
              Student & Teen Onboarding
            </div>
            <h2 id="teen-reg-title" className="font-display text-2xl font-bold text-white mb-2">
              Start Your Journey
            </h2>
            <p className="text-xs text-neutral-400 mb-6">
              Turn your digital curiosity into real experience and verified rewards. No prior corporate experience required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Age Group
                  </label>
                  <select
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white focus-visible:outline-none focus-visible:border-emerald-500"
                  >
                    <option value="14-15">14 – 15 years</option>
                    <option value="16-18">16 – 18 years</option>
                    <option value="19-22">19 – 22 years (College)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pune, Maharashtra"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Email (or Student ID Email)
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-2">
                  Skills you want to use / explore (pick 1 or more)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {skillOptions.map((skill) => (
                    <button
                      type="button"
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-2 text-left rounded-lg border text-[11px] font-medium transition-colors ${
                        skillsSelected.includes(skill)
                          ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300'
                          : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-neutral-400">
                  <input
                    type="checkbox"
                    checked={hasParentConsent}
                    onChange={(e) => setHasParentConsent(e.target.checked)}
                    className="mt-0.5 rounded border-neutral-700 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span>
                    I confirm I have parent or guardian awareness to participate in student skill opportunities and receive verified rewards.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between gap-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!hasParentConsent}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-neutral-950 transition-colors flex items-center gap-1.5 shadow-sm shadow-emerald-500/20"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
