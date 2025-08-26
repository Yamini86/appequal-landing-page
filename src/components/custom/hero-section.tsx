"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Target } from 'lucide-react';

export default function HeroSection() {
  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
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
      
      {/* Floating Elements */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ 
          y: [-20, 0, -20],
          opacity: [0, 1, 1]
        }}
        transition={{
          duration: 6,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 lg:top-32 lg:left-20"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm" />
      </motion.div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ 
          y: [-25, 0, -25],
          opacity: [0, 1, 1]
        }}
        transition={{
          duration: 8,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-16 lg:top-48 lg:right-32"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm" />
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ 
          y: [-15, 0, -15],
          opacity: [0, 1, 1]
        }}
        transition={{
          duration: 6,
          delay: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-64 left-1/4 hidden lg:block"
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
          <Zap className="w-6 h-6 text-yellow-400" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ 
          y: [-20, 0, -20],
          opacity: [0, 1, 1]
        }}
        transition={{
          duration: 8,
          delay: 1.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-80 right-1/3 hidden lg:block"
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
          <Target className="w-6 h-6 text-green-400" />
        </div>
      </motion.div>

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
              whileHover={{ scale: 1.05 }}
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

          {/* Stats */}
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
    </section>
  );
}