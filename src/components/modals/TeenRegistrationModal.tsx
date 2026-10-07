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
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#151515] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-[#A7A7A7] hover:text-white rounded-lg hover:bg-[#1D1D1D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F34A]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#B7F34A]/20 border border-[#B7F34A]/40 flex items-center justify-center text-[#B7F34A]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Welcome to Funngro 2.0!
            </h3>
            <p className="text-sm text-[#A7A7A7] max-w-sm mx-auto leading-relaxed">
              Your profile draft for <strong className="text-white">{name || 'Teen Pioneer'}</strong> has been created. In the live platform, you&apos;ll receive your first project verification match on your student dashboard.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={resetAndClose}
                className="btn-primary px-6 py-2.5 text-xs font-bold rounded-lg"
              >
                Back to Explorer
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B7F34A] mb-1">
              Student &amp; Teen Onboarding
            </div>
            <h2 id="teen-reg-title" className="font-display text-2xl font-bold text-white mb-2">
              Start Your Journey
            </h2>
            <p className="text-xs text-[#A7A7A7] mb-6">
              Turn your digital curiosity into real experience and verified rewards. No prior corporate experience required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label htmlFor="teen-full-name" className="block text-white font-medium mb-1">
                  Full Name
                </label>
                <input
                  id="teen-full-name"
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white placeholder-[#A7A7A7] focus-visible:outline-none focus-visible:border-[#B7F34A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="teen-age-range" className="block text-white font-medium mb-1">
                    Age Group
                  </label>
                  <select
                    id="teen-age-range"
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white focus-visible:outline-none focus-visible:border-[#B7F34A]"
                  >
                    <option value="14-15">14 – 15 years</option>
                    <option value="16-18">16 – 18 years</option>
                    <option value="19-22">19 – 22 years (College)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="teen-city-state" className="block text-white font-medium mb-1">
                    City / State
                  </label>
                  <input
                    id="teen-city-state"
                    type="text"
                    required
                    placeholder="e.g. Pune, Maharashtra"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white placeholder-[#A7A7A7] focus-visible:outline-none focus-visible:border-[#B7F34A]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="teen-email" className="block text-white font-medium mb-1">
                  Email (or Student ID Email)
                </label>
                <input
                  id="teen-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white placeholder-[#A7A7A7] focus-visible:outline-none focus-visible:border-[#B7F34A]"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Skills you want to use / explore (pick 1 or more)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {skillOptions.map((skill) => (
                    <button
                      type="button"
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-2 text-left rounded-lg border text-[11px] font-semibold transition-colors ${
                        skillsSelected.includes(skill)
                          ? 'bg-[#B7F34A] border-[#B7F34A] text-[#0B0B0B]'
                          : 'bg-[#1D1D1D] border-white/10 text-[#A7A7A7] hover:text-white'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-[#A7A7A7]">
                  <input
                    type="checkbox"
                    checked={hasParentConsent}
                    onChange={(e) => setHasParentConsent(e.target.checked)}
                    className="mt-0.5 rounded border-white/20 accent-[#B7F34A]"
                  />
                  <span>
                    I confirm I have parent or guardian awareness to participate in student skill opportunities and receive verified rewards.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!hasParentConsent}
                  className="btn-primary px-5 py-2 text-xs font-bold rounded-lg disabled:opacity-50 flex items-center gap-1.5"
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
