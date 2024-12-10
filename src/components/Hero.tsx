import React from 'react';
import { motion } from 'framer-motion';
import CyberSphere from './3d/CyberSphere';
import FeatureCard from './ui/FeatureCard';
import { features } from '../data/features';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 overflow-hidden">
      <div className="absolute inset-0">
        <CyberSphere />
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Secure Your Digital Future with{" "}
            <span className="text-blue-400">Nestraa</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Enterprise-grade cybersecurity solutions for businesses of all sizes.
            Protect your assets with industry-leading expertise and cutting-edge technology.
          </p>
          <div className="flex justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;