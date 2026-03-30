// ── Blog ─────────────────────────────────────────────────────────────────────
export type ContentBlockType = 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'blockquote' | 'code';

export interface ContentBlock {
  type: ContentBlockType;
  text: string;
}

export interface BlogPost {
  id: number;
  slug?: string;
  title: string;
  excerpt: string;
  benefit?: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  author?: string;
  content: ContentBlock[];
}

// ── Services ─────────────────────────────────────────────────────────────────
export interface ServiceDetails {
  intro: string;
  proof_line: string;
  features: string[];
  cta: string;
  cta_subline: string;
}

export interface Service {
  slug: string;
  title: string;
  desc: string;
  use_case: string;
  icon: string;
  details: ServiceDetails;
}

// ── Portfolio ─────────────────────────────────────────────────────────────────
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  result: string;
  tags: string[];
  image: string;
  url?: string;
}

// ── Contact form ─────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  type: string;
  budget: string;
  message: string;
  company?: string;
}

export type ContactStatus = 'idle' | 'sending' | 'success' | 'error';

// ── API Response ─────────────────────────────────────────────────────────────
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}
