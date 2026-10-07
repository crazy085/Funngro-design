import { useEffect } from 'react';
import { Route } from '../types';

interface SEOHeadProps {
  currentRoute: Route;
}

const META_CONFIG: Record<Route, { title: string; description: string; path: string }> = {
  gateway: {
    title: 'Funngro 2.0 — Where Young Ambition Meets Real Opportunity',
    description: 'Funngro connects ambitious young Indians with real work opportunities and leading brands with the next generation through real actions.',
    path: '/'
  },
  teen: {
    title: 'Online Opportunities for Teens in India | Funngro',
    description: 'Discover real online opportunities for teens and students in India. Build practical digital skills, deliver real projects, and earn rewards with Funngro.',
    path: '/teen'
  },
  company: {
    title: 'Youth Marketing & Brand Campaigns in India | Funngro',
    description: 'Reach India\'s young audience through meaningful brand campaigns, UGC content, app testing, and consumer research powered by active youth.',
    path: '/company'
  }
};

export default function SEOHead({ currentRoute }: SEOHeadProps) {
  useEffect(() => {
    const config = META_CONFIG[currentRoute] || META_CONFIG.gateway;

    // Document Title
    document.title = config.title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', config.description);

    // OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', config.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', config.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    const currentCanonicalUrl = window.location.origin + config.path;
    ogUrl.setAttribute('content', currentCanonicalUrl);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentCanonicalUrl);

    // Twitter Tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', config.title);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', config.description);
  }, [currentRoute]);

  return null;
}
