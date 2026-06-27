export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface SectionLabelProps {
  text: string;
  className?: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  logo?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IntegrationCard {
  step: string;
  title: string;
  description: string;
}

export interface ReliabilityCard {
  icon: string;
  title: string;
  description: string;
}

export interface StepCard {
  step: string;
  title: string;
  description: string;
}

export interface LogoItem {
  name: string;
  style: string;
}