"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Target } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
  onScrollToContact?: () => void;
}

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialY?: number;
  range?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  delay = 0, 
  duration = 6,
  initialY = 0,
  range = 20 
}) => {
  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      animate={{ 
        y: [initialY, initialY - range, initialY],
        opacity: [0, 1, 1]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute"
    >
      {children}
    </motion.div>
  );
};

const GeometricShape: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 100 
}) => (
  <div 
    className={`rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm ${className}`}
    style={{ width: size, height: size }}
  />
);

export default function HeroSection({ 
  onGetStarted, 
  onLearnMore, 
  onScrollToContact 
}: HeroSectionProps) {
  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else if (onScrollToContact) {
      onScrollToContact();
    }
  };

  const handleLearnMore = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"
      />
      
      {/* Floating Geometric Elements */}
      <FloatingElement delay={0.5} duration={8} initialY={0} range={30}>
        <div className="top-20 left-10 lg:top-32 lg:left-20">
          <GeometricShape size={80} className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30" />
        </div>
      </FloatingElement>

      <FloatingElement delay={1} duration={10} initialY={0} range={25}>
        <div className="top-40 right-16 lg:top-48 lg:right-32">
          <GeometricShape size={60} className="bg-gradient-to-br from-purple-500/30 to-pink-500/30" />
        </div>
      </FloatingElement>

      <FloatingElement delay={1.5} duration={7} initialY={0} range={35}>
        <div className="bottom-32 left-16 lg:bottom-40 lg:left-40">
          <GeometricShape size={100} className="bg-gradient-to-br from-indigo-500/30 to-blue-500/30" />
        </div>
      </FloatingElement>

      <FloatingElement delay={2} duration={9} initialY={0} range={20}>
        <div className="bottom-20 right-10 lg:bottom-32 lg:right-24">
          <GeometricShape size={70} className="bg-gradient-to-br from-cyan-500/30 to-teal-500/30" />
        </div>
      </FloatingElement>

      {/* Floating Icons */}
      <FloatingElement delay={0.8} duration={6} initialY={0} range={15}>
        <div className="top-64 left-1/4 hidden lg:block">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </FloatingElement>

      <FloatingElement delay={1.2} duration={8} initialY={0} range={20}>
        <div className="top-80 right-1/3 hidden lg:block">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
            <Target className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </FloatingElement>

      <FloatingElement delay={1.8} duration={7} initialY={0} range={25}>
        <div className="bottom-64 left-1/3 hidden lg:block">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </FloatingElement>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            Revolutionizing Business Excellence
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Empowering Businesses to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Achieve Equality
            </span>
            {' '}in Excellence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            At AppEqual, we believe every business deserves equal access to cutting-edge technology 
            and strategic solutions. Transform your organization with our innovative approach to 
            digital transformation, automation, and sustainable growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLearnMore}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
    </section>
  );
}