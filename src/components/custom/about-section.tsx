"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, Award, TrendingUp, Globe, Zap } from 'lucide-react';

interface Statistic {
  id: string;
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

interface AboutSectionProps {
  className?: string;
}

const statistics: Statistic[] = [
  {
    id: '1',
    label: 'Active Users',
    value: '50K+',
    icon: Users,
    description: 'Growing community worldwide'
  },
  {
    id: '2',
    label: 'Success Rate',
    value: '98%',
    icon: Target,
    description: 'Customer satisfaction score'
  },
  {
    id: '3',
    label: 'Awards Won',
    value: '25+',
    icon: Award,
    description: 'Industry recognition'
  },
  {
    id: '4',
    label: 'Growth Rate',
    value: '300%',
    icon: TrendingUp,
    description: 'Year-over-year growth'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function AboutSection({ className = '' }: AboutSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref}
      className={`relative py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden ${className}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <Globe className="w-4 h-4 mr-2" />
                About AppEqual
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Empowering equality through 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}innovation
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                At AppEqual, we believe technology should be a force for equality and inclusion. 
                Our mission is to create digital solutions that break down barriers and create 
                opportunities for everyone, regardless of their background or circumstances.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-blue-600" />
                Our Values
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Inclusivity First</h4>
                    <p className="text-slate-600">Every feature we build prioritizes accessibility and inclusive design.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Innovation for Impact</h4>
                    <p className="text-slate-600">We leverage cutting-edge technology to solve real-world social challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Community Driven</h4>
                    <p className="text-slate-600">Our platform grows stronger through diverse perspectives and collaboration.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2" />
                  Founded in 2020
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-2" />
                  Global team of 50+
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Statistics */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Our Impact by Numbers
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {statistics.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.id}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -5, 
                      transition: { duration: 0.2 } 
                    }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {stat.value}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {stat.label}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Company Story */}
            <motion.div 
              variants={cardVariants}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                Our Story
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Started by a diverse team of developers, designers, and social advocates, 
                AppEqual was born from the belief that technology can be humanity's greatest 
                equalizer. We've grown from a small startup to a globally recognized platform, 
                but our core mission remains unchanged: making the digital world more equitable for all.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}