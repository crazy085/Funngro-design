import React, { useEffect } from 'react';
import { X, ShieldCheck, Mail, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#151515] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#A7A7A7] hover:text-white rounded-lg hover:bg-[#1D1D1D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F34A]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B7F34A] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#B7F34A]" />
              <span>Youth Data Protection &amp; Privacy</span>
            </div>
            <h2 id="legal-modal-title" className="font-display text-2xl font-bold text-white mb-4">
              Privacy &amp; Safeguarding Policy
            </h2>
            <div className="space-y-4 text-xs text-[#A7A7A7] leading-relaxed">
              <p>
                Funngro places teen data protection and privacy at the highest standard. As a platform connecting young people with digital opportunities, strict youth protection principles govern our architecture.
              </p>
              <div className="p-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-2">
                <h3 className="font-bold text-white">Core Protections</h3>
                <ul className="list-disc pl-4 space-y-1 text-[#A7A7A7]">
                  <li>Zero monetization or selling of minor personal data to third-party data brokers.</li>
                  <li>Escrow verification: Rewards are tracked securely with transparent project milestone records.</li>
                  <li>Parental awareness protocols for teenagers aged 14–17.</li>
                  <li>Encryption of student contact details — brands only interact via structured milestone submissions.</li>
                </ul>
              </div>
              <p className="text-[#A7A7A7]">
                For official regulatory inquiries and full policy details, consult official Funngro documentation at funngro.com.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B7F34A] mb-1">
              <FileText className="w-4 h-4 text-[#B7F34A]" />
              <span>Platform Terms &amp; Fair Opportunity</span>
            </div>
            <h2 id="legal-modal-title" className="font-display text-2xl font-bold text-white mb-4">
              Terms of Service
            </h2>
            <div className="space-y-4 text-xs text-[#A7A7A7] leading-relaxed">
              <p>
                Welcome to Funngro 2.0. By accessing this platform as a student, teen, or enterprise brand partner, you agree to fair, transparent engagement standards.
              </p>
              <div className="p-3.5 rounded-xl bg-[#1D1D1D] border border-white/10 space-y-2">
                <h3 className="font-bold text-white">Key Guidelines</h3>
                <ul className="list-disc pl-4 space-y-1 text-[#A7A7A7]">
                  <li><strong className="text-white">For Youth:</strong> Real deliverables must be original work. Plagiarism or fraudulent claims forfeit rewards and platform standing.</li>
                  <li><strong className="text-white">For Brands:</strong> All tasks must be safe, ethical, and age-appropriate. No predatory labor, hazardous requests, or deceptive brand promises.</li>
                  <li><strong className="text-white">Timely Feedback:</strong> Brands approve or provide feedback on submitted milestones within structured review timelines.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B7F34A] mb-1">
              <Mail className="w-4 h-4 text-[#B7F34A]" />
              <span>Connect With Funngro</span>
            </div>
            <h2 id="legal-modal-title" className="font-display text-2xl font-bold text-white mb-4">
              Contact &amp; Inquiries
            </h2>
            <div className="space-y-4 text-xs text-[#A7A7A7] leading-relaxed">
              <p>
                Interested in piloting a brand campaign, partnering as an educational institution, or discussing this redesign concept?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#1D1D1D] border border-white/10">
                  <div className="text-[#A7A7A7] text-[11px] mb-1">For Brands &amp; Enterprise</div>
                  <div className="font-bold text-white">partnerships@funngro.com</div>
                  <div className="text-[11px] text-[#B7F34A] mt-1">Campaign design &amp; activation</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1D1D1D] border border-white/10">
                  <div className="text-[#A7A7A7] text-[11px] mb-1">For Students &amp; Teens</div>
                  <div className="font-bold text-white">support@funngro.com</div>
                  <div className="text-[11px] text-[#B7F34A] mt-1">Project onboarding &amp; queries</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#1D1D1D] border border-white/10 text-[11px] text-[#A7A7A7]">
                Official Headquarters: Mumbai / Bengaluru, India. Public portal: <a href="https://www.funngro.com" target="_blank" rel="noopener noreferrer" className="text-[#B7F34A] hover:underline">funngro.com</a>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
