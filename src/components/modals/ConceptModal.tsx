import React from 'react';
import { X, CheckCircle2, Shield, Sparkles, ExternalLink } from 'lucide-react';

interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConceptModal({ isOpen, onClose }: ConceptModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="concept-modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d1322] border border-neutral-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-neutral-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
            Design & Strategy Evaluation
          </span>
        </div>

        <h2 id="concept-modal-title" className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Funngro 2.0 Redesign Concept
        </h2>

        <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
          <p>
            This proposal explores what a modern, product-led evolution of <strong className="text-white">Funngro</strong> looks like. Rather than merely copying the existing website or creating a generic SaaS landing page, this redesign grounds itself in Funngro's genuine mission: connecting young Indians with real work, and connecting companies with youth participation at scale.
          </p>

          <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-3">
            <h3 className="font-semibold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Core Architectural Principles Applied
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <strong className="text-white">One Screen = One Idea:</strong> Reduced cognitive overload by replacing cluttered wall-of-text sections with spacious, focused conceptual blocks.
              </li>
              <li>
                <strong className="text-white">Truthful to Real Platform Metrics:</strong> Employs verified public figures only (<em className="text-emerald-300">70L+ young Indians, 5,000+ brands, 1,000+ live projects</em>). Zero fabricated metrics, fake logos, or fake reviews.
              </li>
              <li>
                <strong className="text-white">Dual-Audience Architecture:</strong> Distinct, tailored visual narratives for ambitious teens (encouraging, skill-focused, non-predatory) and brands (B2B, action-driven, outcome-oriented).
              </li>
              <li>
                <strong className="text-white">Zero-Pill & Editorial Typographic Discipline:</strong> Clean unboxed metadata, disciplined type scale, 60-30-10 color allocation with purposeful emerald green accents.
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs text-neutral-400">
            <span>Reference: Official Funngro public positioning</span>
            <a
              href="https://www.funngro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
            >
              Visit funngro.com <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors"
          >
            Explore Prototype
          </button>
        </div>
      </div>
    </div>
  );
}
