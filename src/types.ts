export interface NeighborhoodData {
  name: string;
  slug: string;
  type: 'official_neighborhood';
  official: boolean;
  region: 'Zona Norte' | 'Zona Sul' | 'Zona Leste' | 'Zona Oeste' | 'Centro' | 'CIC';
  nearbyAreas: string[];
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  faq: { question: string; answer: string }[];
  geoContext: string;
  indexable: boolean;
}

export interface PopularAreaData {
  name: string;
  slug: string;
  type: 'popular_area' | 'vila' | 'loteamento';
  official: false;
  parentNeighborhood: string;
  nearbyAreas: string[];
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  faq: { question: string; answer: string }[];
  geoContext: string;
  indexable: boolean;
}

export interface ServiceCityData {
  name: string;
  slug: string;
  type: 'city';
  distanceNote: string;
  nearbyCities: string[];
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  faq: { question: string; answer: string }[];
  geoContext: string;
  indexable: boolean;
}

export interface PlumbingService {
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  commonProblems: string[];
  solutions: string[];
  faq: { question: string; answer: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  location: string;
  serviceType: string;
  description: string;
  urgency: string;
}
