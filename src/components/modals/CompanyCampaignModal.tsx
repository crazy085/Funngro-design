import React, { useState } from 'react';
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
              Campaign Inquiry Received
            </h3>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{contactName}</strong> from <strong className="text-white">{companyName}</strong>. Our enterprise partnership team will prepare a structured {objective} proposal for reaching {participantScale} young Indians.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
              Brand Solutions · Funngro Enterprise
            </div>
            <h2 id="company-campaign-title" className="font-display text-2xl font-bold text-white mb-2">
              Launch a Youth Campaign
            </h2>
            <p className="text-xs text-neutral-400 mb-6">
              Connect your brand with young India through authentic, verified actions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Swiggy, Nykaa, Zepto"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Your Name & Role
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya (Growth Lead)"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Official Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Campaign Activation Type
                  </label>
                  <select
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white focus-visible:outline-none focus-visible:border-emerald-500"
                  >
                    <option value="PROMOTE">Campus & Social Promotion</option>
                    <option value="CREATE">Gen-Z UGC & Content Creation</option>
                    <option value="TEST">App & Product Testing</option>
                    <option value="RESEARCH">Youth Consumer Research</option>
                    <option value="REFER">Peer Referral Activation</option>
                    <option value="SAMPLE">Direct Product Sampling</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Target Youth Cohort Scale
                  </label>
                  <select
                    value={participantScale}
                    onChange={(e) => setParticipantScale(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white focus-visible:outline-none focus-visible:border-emerald-500"
                  >
                    <option value="100–500">100 – 500 Participants</option>
                    <option value="500–2,000">500 – 2,000 Participants</option>
                    <option value="2,000–10,000">2,000 – 10,000 Participants</option>
                    <option value="10,000+">10,000+ Multi-Campus Pan-India</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Brief Campaign Objectives / Target Timeline
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline key deliverables, specific campus targets, or product launch timing..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:border-emerald-500 resize-none"
                />
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
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors flex items-center gap-1.5 shadow-sm shadow-emerald-500/20"
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
