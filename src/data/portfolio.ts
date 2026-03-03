export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  tagline: string;
  icon: string;
}

export const portfolioCategories = [
  'All',
  'Enterprise Software',
  'CRM',
  'SaaS',
  'Mobile Apps',
  'Web Apps',
  'Digital Marketing',
  'Social Media',
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Enterprise Software Solutions',
    category: 'Enterprise Software',
    description: 'Custom Business Software Development — We design and develop tailored software systems that streamline operations, automate workflows, and improve business efficiency.',
    features: ['ERP Systems', 'Inventory Management', 'HR & Payroll Systems', 'School / College Management Software', 'Real Estate Platforms'],
    tagline: 'Built for performance. Engineered for scale.',
    icon: 'Building2',
  },
  {
    id: 2,
    title: 'CRM Development',
    category: 'CRM',
    description: 'Smart Customer Relationship Management Systems — We build powerful CRM platforms that help companies manage leads, sales pipelines, and customer interactions efficiently.',
    features: ['Lead Tracking Automation', 'Sales Dashboard & Analytics', 'Customer Data Management', 'WhatsApp & Email Integration', 'Role-Based Admin Panels'],
    tagline: 'Turn data into decisions.',
    icon: 'BarChart3',
  },
  {
    id: 3,
    title: 'SaaS Platforms',
    category: 'SaaS',
    description: 'Subscription-Based Cloud Software — We develop secure, scalable SaaS products ready for global deployment.',
    features: ['Multi-User Architecture', 'Secure Login & Authentication', 'Payment Gateway Integration', 'Subscription Management', 'Cloud Deployment (AWS / VPS)'],
    tagline: 'Built once. Scaled infinitely.',
    icon: 'Cloud',
  },
  {
    id: 4,
    title: 'Mobile Application Development',
    category: 'Mobile Apps',
    description: 'Android & iOS Apps — We create high-performance mobile apps with modern UI/UX.',
    features: ['Business Apps', 'E-Commerce Apps', 'Service Booking Apps', 'Educational Apps', 'Admin + User Apps'],
    tagline: 'Seamless performance across devices.',
    icon: 'Smartphone',
  },
  {
    id: 5,
    title: 'Web Application Development',
    category: 'Web Apps',
    description: 'Fast. Secure. Responsive.',
    features: ['Corporate Websites', 'E-Commerce Platforms', 'Landing Pages', 'Admin Dashboards', 'Portfolio Websites'],
    tagline: 'Optimized for speed and conversion.',
    icon: 'Globe',
  },
  {
    id: 6,
    title: 'Digital Marketing Solutions',
    category: 'Digital Marketing',
    description: 'Growth-Driven Marketing Strategies',
    features: ['SEO Optimization', 'Google Ads Management', 'Performance Marketing', 'Funnel Creation', 'Analytics & Reporting'],
    tagline: 'Data-backed marketing for measurable growth.',
    icon: 'TrendingUp',
  },
  {
    id: 7,
    title: 'Social Media Management',
    category: 'Social Media',
    description: 'Complete Brand Presence Management',
    features: ['Content Creation', 'Reels & Short Video Strategy', 'Instagram & Facebook Handling', 'Paid Ad Campaigns', 'Engagement & Community Growth'],
    tagline: 'Building brands that connect.',
    icon: 'Share2',
  },
];
