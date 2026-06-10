export type ActivePage = 'home' | 'privacy' | 'terms' | 'cookies';

export interface AnimalCategory {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

export interface PlanItem {
  name: string;
  badge?: string;
  price: string;
  subtitle: string;
  features: string[];
  whatsAppMsg: string;
  popular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyInfo {
  razaoSocial: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  email: string;
  atendimento: string;
  whatsappLink: string;
}
