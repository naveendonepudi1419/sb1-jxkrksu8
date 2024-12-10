export interface ServiceItem {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface FeatureCard {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}