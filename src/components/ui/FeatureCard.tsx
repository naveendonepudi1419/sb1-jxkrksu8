import React from 'react';
import type { FeatureCard as FeatureCardType } from '../../types';

const FeatureCard: React.FC<FeatureCardType> = ({ icon: Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
    <Icon className="w-12 h-12 mb-4 text-blue-400" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default FeatureCard;