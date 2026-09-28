export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  client: string;
  role: string;
  tags: string[];
  metrics?: string;
  complexityMetrics?: { label: string; value: string }[];
  demoUrl?: string;
  accentColor?: string;
  accentGlow?: string;
  accentBadge?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  thumbnail: string;
  image: string;
}

export interface Award {
  id: string;
  title: string;
  year: string;
  description: string;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  company: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
