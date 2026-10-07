import { useEffect } from 'react';
import { Route } from '../types';

interface SEOHeadProps {
  currentRoute: Route;
}

const PRODUCTION_DOMAIN = 'https://funngro-design-phi.vercel.app';
const OG_IMAGE_URL = 'https://funngro-design-phi.vercel.app/og-image.jpg';

const META_CONFIG: Record<Route, { title: string; description: string; canonicalUrl: string }> = {
  gateway: {
    title: 'Funngro | Real Opportunities for Teens & Youth',
    description: 'Funngro connects ambitious Indian teens with real work opportunities and helps leading companies engage youth through practical campaigns.',
    canonicalUrl: `${PRODUCTION_DOMAIN}/`
  },
  teen: {
    title: 'Online Opportunities for Teens in India | Funngro',
    description: 'Find online projects in content creation, app testing, and market research. Build practical digital skills and work on your own schedule.',
    canonicalUrl: `${PRODUCTION_DOMAIN}/teen`
  },
  company: {
    title: 'Youth Marketing & Brand Campaigns in India | Funngro',
    description: 'Partner with India\'s youth network for campus promotion, authentic UGC content, app usability testing, and consumer research at scale.',
    canonicalUrl: `${PRODUCTION_DOMAIN}/company`
  }
};

export default function SEOHead({ currentRoute }: SEOHeadProps) {
  useEffect(() => {
    const config = META_CONFIG[currentRoute] || META_CONFIG.gateway;

    // 1. Document Title
    document.title = config.title;

    // Helper function to update or create meta tag
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let tag = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Meta Description
    setMetaTag('name', 'description', config.description);

    // 3. Robots
    setMetaTag('name', 'robots', 'index, follow');

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:title', config.title);
    setMetaTag('property', 'og:description', config.description);
    setMetaTag('property', 'og:url', config.canonicalUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Funngro');
    setMetaTag('property', 'og:image', OG_IMAGE_URL);
    setMetaTag('property', 'og:image:alt', 'Funngro 2.0 Youth Platform & Opportunities');

    // 5. Twitter / X Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', config.title);
    setMetaTag('name', 'twitter:description', config.description);
    setMetaTag('name', 'twitter:image', OG_IMAGE_URL);
    setMetaTag('name', 'twitter:image:alt', 'Funngro 2.0 Youth Platform & Opportunities');

    // 6. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonicalUrl);

    // 7. Dynamic Route Structured Data (JSON-LD)
    let jsonLdScript = document.getElementById('route-schema-jsonld') as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'route-schema-jsonld';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${PRODUCTION_DOMAIN}/#website`,
          url: `${PRODUCTION_DOMAIN}/`,
          name: 'Funngro',
          description: 'Where young ambition meets real opportunity in India',
          publisher: {
            '@id': `${PRODUCTION_DOMAIN}/#organization`
          }
        },
        {
          '@type': 'Organization',
          '@id': `${PRODUCTION_DOMAIN}/#organization`,
          name: 'Funngro',
          url: 'https://www.funngro.com',
          logo: OG_IMAGE_URL,
          sameAs: ['https://www.funngro.com']
        },
        {
          '@type': 'WebPage',
          '@id': `${config.canonicalUrl}#webpage`,
          url: config.canonicalUrl,
          name: config.title,
          description: config.description,
          isPartOf: {
            '@id': `${PRODUCTION_DOMAIN}/#website`
          }
        }
      ]
    };

    jsonLdScript.text = JSON.stringify(structuredData);
  }, [currentRoute]);

  return null;
}
