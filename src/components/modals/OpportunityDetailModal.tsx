import React from 'react';
import { OpportunityItem } from '../../types';
import { X, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface OpportunityDetailModalProps {
  opportunity: OpportunityItem | null;
  onClose: () => void;
  onApply: (opportunity: OpportunityItem) => void;
}

export default function OpportunityDetailModal({
  opportunity,
  onClose,
  onApply
}: OpportunityDetailModalProps) {
  if (!opportunity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="opp-detail-title"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0d1322] border border-neutral-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-neutral-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Unboxed metadata header */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
          <span className="text-emerald-400 font-semibold uppercase tracking-wider">{opportunity.category}</span>
          <span>·</span>
          <span>{opportunity.brandType}</span>
          <span>·</span>
          <span>{opportunity.difficulty} Level</span>
        </div>

        <h2 id="opp-detail-title" className="font-display text-2xl font-bold text-white mb-3">
          {opportunity.title}
        </h2>

        <div className="flex flex-wrap items-center gap-4 py-3 border-y border-neutral-800/80 text-sm mb-5">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Time commitment: <strong className="text-white">{opportunity.duration}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <span className="text-xs text-neutral-400">Conceptual reward:</span>
            <strong className="text-emerald-400 font-mono-nums">{opportunity.conceptualReward}</strong>
          </div>
        </div>

        <div className="space-y-4 text-sm text-neutral-300">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Project Description
            </h3>
            <p className="leading-relaxed">{opportunity.description}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Required Skills
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {opportunity.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Final Deliverable
            </h3>
            <p className="text-xs text-neutral-300">{opportunity.deliverable}</p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-start gap-2.5 text-xs text-emerald-200/90">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-emerald-300 block mb-0.5">Verified Safe Opportunity</strong>
              All teen tasks adhere to Funngro's age-appropriate student safety guidelines. Earnings are held in escrow and released upon client acceptance.
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-neutral-800">
          <span className="text-[11px] text-neutral-500 font-mono">
            UI Concept Simulation
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
            >
              Back to Catalog
            </button>
            <button
              onClick={() => onApply(opportunity)}
              className="px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors flex items-center gap-1.5 shadow-sm shadow-emerald-500/20"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
