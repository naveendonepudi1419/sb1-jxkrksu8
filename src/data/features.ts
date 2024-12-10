import { Shield, Lock, Server } from 'lucide-react';
import type { FeatureCard } from '../types';

export const features: FeatureCard[] = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "Real-time monitoring and AI-powered threat detection",
  },
  {
    icon: Lock,
    title: "Zero Trust Security",
    description: "Comprehensive access control and identity management",
  },
  {
    icon: Server,
    title: "Cloud Security",
    description: "Secure cloud infrastructure and data protection",
  },
];