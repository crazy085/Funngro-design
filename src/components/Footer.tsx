import React from 'react';
import { Route } from '../types';
import { ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: Route) => void;
  onOpenConceptModal: () => void;
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
  onOpenContactModal?: () => void;
}

export default function Footer({
  onRouteChange,
  onOpenConceptModal,
  onOpenPrivacyModal,
  onOpenTermsModal,
  onOpenContactModal
}: FooterProps) {
  const handleNav = (route: Route) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0B0B0B] border-t border-white/10 text-[#A7A7A7] text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                FUNNGRO
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B7F34A] px-1.5 py-0.5 rounded">
                2.0 CONCEPT
              </span>
            </div>
            <p className="text-[#A7A7A7] text-sm leading-relaxed max-w-sm">
              Where young ambition meets real opportunity. Empowering India&apos;s next generation with practical skills, verified projects, and real rewards, while helping leading brands activate youth through authentic action.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenConceptModal}
                className="inline-flex items-center gap-1.5 text-xs text-[#B7F34A] hover:text-[#C5F76B] font-semibold underline-offset-4 hover:underline transition-colors"
              >
                <span>Read Design Architecture &amp; Evaluation Notes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-white">
              Platform
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('gateway');
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="/teen"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('teen');
                  }}
                  className="hover:text-[#B7F34A] transition-colors text-left block"
                >
                  For Teens &amp; Youth
                </a>
              </li>
              <li>
                <a
                  href="/company"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('company');
                  }}
                  className="hover:text-white transition-colors text-left block"
                >
                  For Companies &amp; Brands
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-white">
              Information
            </p>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenConceptModal}
                  className="hover:text-white transition-colors text-left"
                >
                  About Funngro 2.0
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContactModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="https://www.funngro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Official Funngro</span>
                  <ExternalLink className="w-3 h-3 text-[#A7A7A7]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-white">
              Trust &amp; Guidelines
            </p>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenPrivacyModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy &amp; Data Security
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTermsModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service &amp; Youth Safeguards
                </button>
              </li>
              <li>
                <div className="text-xs text-[#A7A7A7] pt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B7F34A] shrink-0" />
                  <span>Compliant student safety protocols</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Evaluation Disclaimer & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A7A7A7]">
          <div className="max-w-2xl leading-relaxed">
            <span className="text-white font-medium">Evaluation Notice:</span> This is a conceptual product redesign evaluation for Funngro.
            Quantitative figures cited (70L+ young Indians, 5,000+ brands, 1,000+ live projects) reflect publicly stated Funngro platform claims. No affiliated endorsement implied.
          </div>
          <div className="shrink-0 font-mono text-[11px] text-[#A7A7A7]">
            © {new Date().getFullYear()} Funngro 2.0 Concept
          </div>
        </div>
      </div>
    </footer>
  );
}
