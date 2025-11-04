/**
 * Site-wide constants and configuration
 */

export const SITE_CONFIG = {
  name: "Neteon AI",
  tagline:
    "Committed to lead the future of automation and intelligentization across industries",
  description:
    "High-performance and application-oriented product designs to lay the foundation for an intelligent, connected world, advancing edge AI",
  url: "https://neteon-ai.com",
  email: "contact@neteon-ai.com",
  supportEmail: "support@neteon-ai.com",
  salesEmail: "sales@neteon-ai.com",
} as const;

export const NAV_LINKS = [
  { label: "Ascent GX10", href: "/ascent-gx10" },
  { label: "Products", href: "/products" },
  { label: "Technologies", href: "/technologies" },
  { label: "Case Studies", href: "/case-studies" },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    id: "edge-ai-computing",
    name: "Edge AI Computing",
    description: "High-performance computing platforms for edge AI applications",
    slug: "edge-ai-computing",
  },
  {
    id: "industrial-automation",
    name: "Industrial Automation",
    description: "Rugged systems for factory automation and manufacturing",
    slug: "industrial-automation",
  },
  {
    id: "intelligent-transportation",
    name: "Intelligent Transportation",
    description: "Vehicle computing solutions for autonomous driving and fleet management",
    slug: "intelligent-transportation",
  },
  {
    id: "smart-surveillance",
    name: "Smart Surveillance",
    description: "AI-powered video analytics and security systems",
    slug: "smart-surveillance",
  },
] as const;

export const CORE_TECHNOLOGIES = [
  {
    id: "thermal-management",
    name: "Advanced Thermal Management",
    slug: "thermal-management",
    description: "Patented cooling solutions for high-performance computing in harsh environments",
  },
  {
    id: "power-systems",
    name: "Intelligent Power Systems",
    slug: "power-systems",
    description: "Efficient power delivery and management for mission-critical applications",
  },
  {
    id: "rugged-design",
    name: "Rugged System Design",
    slug: "rugged-design",
    description: "MIL-STD-810G certified systems for extreme operating conditions",
  },
  {
    id: "ai-acceleration",
    name: "AI Acceleration",
    slug: "ai-acceleration",
    description: "Optimized hardware and software for deep learning inference at the edge",
  },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/neteon-ai",
  twitter: "https://twitter.com/neteonai",
  youtube: "https://youtube.com/@neteonai",
  github: "https://github.com/neteon-ai",
} as const;

export const FOOTER_LINKS = {
  products: [
    { label: "Edge AI Computing", href: "/products/edge-ai-computing" },
    { label: "Industrial Automation", href: "/products/industrial-automation" },
    { label: "Intelligent Transportation", href: "/products/intelligent-transportation" },
    { label: "Smart Surveillance", href: "/products/smart-surveillance" },
  ],
  technologies: [
    { label: "Thermal Management", href: "/technologies/thermal-management" },
    { label: "Power Systems", href: "/technologies/power-systems" },
    { label: "Rugged Design", href: "/technologies/rugged-design" },
    { label: "AI Acceleration", href: "/technologies/ai-acceleration" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Documentation", href: "/docs" },
    { label: "Support Center", href: "/support" },
    { label: "Downloads", href: "/downloads" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Compliance", href: "/compliance" },
  ],
} as const;

export const CERTIFICATIONS = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "MIL-STD-810G",
  "CE",
  "FCC",
  "RoHS",
] as const;
