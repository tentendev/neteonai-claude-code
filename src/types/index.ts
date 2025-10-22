/**
 * Type definitions for the Neteon AI application
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: Specification[];
  applications: string[];
  image: string;
  datasheet?: string;
  price?: string;
}

export interface Specification {
  category: string;
  items: {
    label: string;
    value: string;
  }[];
}

export interface Technology {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  benefits: string[];
  technicalDetails: TechnicalDetail[];
  applications: string[];
  relatedProducts: string[];
  image: string;
}

export interface TechnicalDetail {
  title: string;
  content: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  industry: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  products: string[];
  image: string;
  publishDate: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  subject: string;
  message: string;
  interests?: string[];
}

export interface NewsletterFormData {
  email: string;
}

export interface SupportTicket {
  name: string;
  email: string;
  product: string;
  category: string;
  priority: "low" | "medium" | "high" | "critical";
  subject: string;
  description: string;
  attachments?: File[];
}
