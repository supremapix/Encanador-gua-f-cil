import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_DATA } from '../data/company';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical: string;
  type?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
  breadcrumbs?: ({ name: string; item: string } | { label: string; href: string })[];
  faqItems?: { question: string; answer: string }[];
  includeVideoSchema?: boolean;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonical,
  type = 'website',
  ogImage = COMPANY_DATA.heroImages[0].url,
  noindex = false,
  breadcrumbs = [],
  faqItems = [],
  includeVideoSchema = true
}) => {
  // Main Plumber LocalBusiness schema
  const plumberSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${COMPANY_DATA.baseUrl}/#organization`,
    "name": COMPANY_DATA.name,
    "legalName": COMPANY_DATA.legalName,
    "url": COMPANY_DATA.baseUrl,
    "telephone": COMPANY_DATA.phoneDisplay,
    "priceRange": "$$",
    "image": [
      COMPANY_DATA.heroImages[0].url,
      COMPANY_DATA.heroImages[1].url,
      COMPANY_DATA.heroImages[2].url
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_DATA.address.street,
      "addressLocality": COMPANY_DATA.address.city,
      "addressRegion": COMPANY_DATA.address.state,
      "postalCode": COMPANY_DATA.address.zipCode,
      "addressCountry": "BR"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Curitiba",
        "sameAs": "https://pt.wikipedia.org/wiki/Curitiba"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Região Metropolitana de Curitiba"
      }
    ],
    "description": description
  };

  // Breadcrumbs schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, idx) => {
      const name = 'name' in b ? b.name : b.label;
      const item = 'item' in b ? b.item : b.href;
      return {
        "@type": "ListItem",
        "position": idx + 1,
        "name": name,
        "item": item.startsWith('http') ? item : `${COMPANY_DATA.baseUrl}${item}`
      };
    })
  } : null;

  // FAQ schema
  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Video Object schema
  const videoSchema = includeVideoSchema ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": COMPANY_DATA.video.title,
    "description": COMPANY_DATA.video.description,
    "thumbnailUrl": [
      `https://img.youtube.com/vi/${COMPANY_DATA.video.embedId}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${COMPANY_DATA.video.embedId}/hqdefault.jpg`
    ],
    "uploadDate": "2024-01-01T08:00:00-03:00",
    "embedUrl": `https://www.youtube.com/embed/${COMPANY_DATA.video.embedId}`,
    "contentUrl": COMPANY_DATA.video.url
  } : null;

  return (
    <Helmet>
      {/* Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      {/* Open Graph */}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={COMPANY_DATA.name} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(plumberSchema)}
      </script>

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {videoSchema && (
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      )}
    </Helmet>
  );
};
