import React, { useState, useEffect } from 'react';
import { Route, OpportunityItem } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import GatewayView from './views/GatewayView';
import TeenView from './views/TeenView';
import CompanyView from './views/CompanyView';
import ConceptModal from './components/modals/ConceptModal';
import OpportunityDetailModal from './components/modals/OpportunityDetailModal';
import TeenRegistrationModal from './components/modals/TeenRegistrationModal';
import CompanyCampaignModal from './components/modals/CompanyCampaignModal';
import LegalModal from './components/modals/LegalModal';

function getInitialRoute(): Route {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('/teen')) return 'teen';
  if (path.includes('/company')) return 'company';
  return 'gateway';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>(getInitialRoute);

  // Modals state
  const [conceptModalOpen, setConceptModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<OpportunityItem | null>(null);
  const [teenRegisterModalOpen, setTeenRegisterModalOpen] = useState(false);
  const [teenRegisterInterest, setTeenRegisterInterest] = useState<string | undefined>();
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);
  const [campaignSolutionType, setCampaignSolutionType] = useState<string | undefined>();
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleRouteChange = (route: Route) => {
    setCurrentRoute(route);
    const path = route === 'gateway' ? '/' : `/${route}`;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  };

  const handleOpenTeenRegistration = (interest?: string) => {
    setTeenRegisterInterest(interest);
    setTeenRegisterModalOpen(true);
  };

  const handleOpenCampaignModal = (solutionType?: string) => {
    setCampaignSolutionType(solutionType);
    setCampaignModalOpen(true);
  };

  const handleApplyFromOpportunity = (opportunity: OpportunityItem) => {
    setSelectedOpportunity(null);
    handleOpenTeenRegistration(opportunity.category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080c14] text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* SEO Engine */}
      <SEOHead currentRoute={currentRoute} />

      {/* Global Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenConceptModal={() => setConceptModalOpen(true)}
      />

      {/* Primary Content View */}
      <main className="flex-1 w-full" id="main-content">
        {currentRoute === 'gateway' && (
          <GatewayView
            onRouteChange={handleRouteChange}
            onOpenConceptModal={() => setConceptModalOpen(true)}
          />
        )}

        {currentRoute === 'teen' && (
          <TeenView
            onOpenRegisterModal={() => handleOpenTeenRegistration()}
            onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
          />
        )}

        {currentRoute === 'company' && (
          <CompanyView
            onOpenCampaignModal={handleOpenCampaignModal}
            onOpenContactModal={() => setLegalModalType('contact')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onRouteChange={handleRouteChange}
        onOpenConceptModal={() => setConceptModalOpen(true)}
        onOpenPrivacyModal={() => setLegalModalType('privacy')}
        onOpenTermsModal={() => setLegalModalType('terms')}
        onOpenContactModal={() => setLegalModalType('contact')}
      />

      {/* Accessible Modals */}
      <ConceptModal
        isOpen={conceptModalOpen}
        onClose={() => setConceptModalOpen(false)}
      />

      <OpportunityDetailModal
        opportunity={selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        onApply={handleApplyFromOpportunity}
      />

      <TeenRegistrationModal
        isOpen={teenRegisterModalOpen}
        onClose={() => setTeenRegisterModalOpen(false)}
        initialInterest={teenRegisterInterest}
      />

      <CompanyCampaignModal
        isOpen={campaignModalOpen}
        onClose={() => setCampaignModalOpen(false)}
        initialSolution={campaignSolutionType}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
