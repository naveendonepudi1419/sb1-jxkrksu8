import React from 'react';
import { motion } from 'framer-motion';
import type { ServiceItem } from '../../types';

interface ServiceCardProps extends ServiceItem {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
  >
    <Icon className="w-12 h-12 text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default ServiceCard;