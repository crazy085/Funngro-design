import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface CompanyCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSolution?: string;
}

export default function CompanyCampaignModal({
  isOpen,
  onClose,
  initialSolution
}: CompanyCampaignModalProps) {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [objective, setObjective] = useState(
    initialSolution ? initialSolution.toUpperCase() : 'PROMOTE'
  );
  const [participantScale, setParticipantScale] = useState('500–2,000');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        resetAndClose();
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setCompanyName('');
    setContactName('');
    setWorkEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="company-campaign-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
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
              Campaign Inquiry Received
            </h3>
            <p className="text-sm text-[#A7A7A7] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{contactName}</strong> from <strong className="text-white">{companyName}</strong>. Our enterprise partnership team will prepare a structured {objective} proposal for reaching {participantScale} young Indians.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={resetAndClose}
                className="btn-primary px-6 py-2.5 text-xs font-bold rounded-lg"
              >
                Close &amp; Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B7F34A] mb-1">
              Brand Solutions · Funngro Enterprise
            </div>
            <h2 id="company-campaign-title" className="font-display text-2xl font-bold text-white mb-2">
              Launch a Youth Campaign
            </h2>
            <p className="text-xs text-[#A7A7A7] mb-6">
              Connect your brand with young India through authentic youth participation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="comp-company-name" className="block text-white font-medium mb-1">
                    Company / Brand Name
                  </label>
                  <input
                    id="comp-company-name"
                    type="text"
                    required
                    placeholder="e.g. Swiggy, Nykaa, Zepto"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white placeholder-[#A7A7A7] focus-visible:outline-none focus-visible:border-[#B7F34A]"
                  />
                </div>
                <div>
                  <label htmlFor="comp-contact-name" className="block text-white font-medium mb-1">
                    Your Name &amp; Role
                  </label>
                  <input
                    id="comp-contact-name"
                    type="text"
                    required
                    placeholder="e.g. Priya (Growth Lead)"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white placeholder-[#A7A7A7] focus-visible:outline-none focus-visible:border-[#B7F34A]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="comp-work-email" className="block text-white font-medium mb-1">
                  Official Work Email
                </label>
                <input
                  id="comp-work-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white placeholder-[#A7A7A7] focus-visible:outline-none focus-visible:border-[#B7F34A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="comp-objective" className="block text-white font-medium mb-1">
                    Campaign Activation Type
                  </label>
                  <select
                    id="comp-objective"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white focus-visible:outline-none focus-visible:border-[#B7F34A]"
                  >
                    <option value="PROMOTE">Campus &amp; Social Promotion</option>
                    <option value="CREATE">Gen-Z UGC &amp; Content Creation</option>
                    <option value="TEST">App &amp; Product Testing</option>
                    <option value="RESEARCH">Youth Consumer Research</option>
                    <option value="REFER">Peer Referral Activation</option>
                    <option value="SAMPLE">Direct Product Sampling</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="comp-participant-scale" className="block text-white font-medium mb-1">
                    Target Youth Cohort Scale
                  </label>
                  <select
                    id="comp-participant-scale"
                    value={participantScale}
                    onChange={(e) => setParticipantScale(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white focus-visible:outline-none focus-visible:border-[#B7F34A]"
                  >
                    <option value="100–500">100 – 500 Participants</option>
                    <option value="500–2,000">500 – 2,000 Participants</option>
                    <option value="2,000–10,000">2,000 – 10,000 Participants</option>
                    <option value="10,000+">10,000+ Multi-Campus Pan-India</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="comp-notes" className="block text-white font-medium mb-1">
                  Brief Campaign Objectives / Target Timeline
                </label>
                <textarea
                  id="comp-notes"
                  rows={3}
                  placeholder="Outline key deliverables, specific campus targets, or product launch timing..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1D1D1D] border border-white/10 text-white placeholder-[#A7A7A7] focus-visible:outline-none focus-visible:border-[#B7F34A] resize-none"
                />
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
                  className="btn-primary px-5 py-2 text-xs font-bold rounded-lg flex items-center gap-1.5"
                >
                  <span>Request Campaign Proposal</span>
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
