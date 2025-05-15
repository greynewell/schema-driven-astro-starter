// Base interfaces
interface Person {
  '@type': 'Person';
  name: string;
  url?: string;
}

interface AggregateRating {
  '@type': 'AggregateRating';
  ratingValue: string;
  bestRating: string;
  worstRating: string;
  ratingCount: string;
}

interface SearchAction {
  '@type': 'SearchAction';
  target: string;
  'query-input': string;
}

interface WebPage {
  '@type': 'WebPage';
  name: string;
  description: string;
  url: string;
}

interface CreativeWork {
  '@type': 'CreativeWork';
  name: string;
  url: string;
}

// Main Website interface
export interface Website {
  '@context': string;
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  inLanguage: string;
  version: string;
  author?: Person;
  publisher?: Person;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  license?: string;
  isAccessibleForFree?: boolean;
  accessibilityFeature?: string[];
  accessibilityHazard?: string[];
  accessibilityAPI?: string;
  accessibilityControl?: string[];
  accessibilitySummary?: string;
  aggregateRating?: AggregateRating;
  potentialAction?: SearchAction[];
  sameAs?: string[];
  mainEntity?: WebPage;
  sponsor?: Person;
  subjectOf?: CreativeWork;
  text?: string;
  thumbnailUrl?: string;
  timeRequired?: string;
  typicalAgeRange?: string;
}

// Meta component interfaces
export interface MetaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'book';
  author?: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    url?: string;
  };
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  language?: string;
}

// JsonLd component interface
export interface JsonLdProps {
  data: Website;
  debug?: boolean;
} 