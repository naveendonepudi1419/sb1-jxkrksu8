import { Shield, Lock, Server, Cloud, Users, Bell } from 'lucide-react';
import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    icon: Shield,
    title: "Managed Security",
    description: "24/7 monitoring and threat response by our expert security team",
  },
  {
    icon: Lock,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Secure your on-premise and cloud infrastructure",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Protected cloud environments and secure data storage",
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Employee cybersecurity awareness and training programs",
  },
  {
    icon: Bell,
    title: "Incident Response",
    description: "Rapid response and recovery from security incidents",
  },
];