"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, BarChart3, Users, ArrowUpRight, Building2, Trophy, Star, CheckCircle } from 'lucide-react';

interface GrowthStat {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: React.ElementType;
}

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  investment: string;
  roi: string;
  timeline: string;
  description: string;
  metrics: {
    revenue: string;
    growth: string;
    users: string;
  };
}

interface ChartData {
  year: string;
  revenue: number;
  investment: number;
  profit: number;
}

const AnimatedCounter: React.FC<{ end: number; duration?: number; prefix?: string; suffix?: string }> = ({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "" 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        setCount(Math.floor((progress / duration) * end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const SimpleChart: React.FC<{ data: ChartData[] }> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => Math.max(d.revenue, d.investment, d.profit)));
  
  return (
    <div className="w-full h-64 bg-gray-50 rounded-lg p-4 relative">
      <div className="flex h-full items-end justify-between gap-2">
        {data.map((item, index) => (
          <div key={item.year} className="flex-1 flex flex-col items-center gap-1">
            <div className="flex flex-col items-center justify-end h-full gap-1">
              <motion.div
                className="w-full bg-blue-500 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${(item.revenue / maxValue) * 100}%` }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              />
              <motion.div
                className="w-full bg-green-500 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${(item.profit / maxValue) * 100}%` }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
              />
            </div>
            <span className="text-xs font-medium text-gray-600 mt-1">{item.year}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-2 right-2 flex gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span>Revenue</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span>Profit</span>
        </div>
      </div>
    </div>
  );
};

export default function InvestmentGrowthSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'opportunities' | 'cases'>('overview');

  const growthStats: GrowthStat[] = [
    { id: '1', label: 'Total Revenue', value: 125000000, prefix: '$', icon: DollarSign },
    { id: '2', label: 'Portfolio Growth', value: 285, suffix: '%', icon: TrendingUp },
    { id: '3', label: 'Active Clients', value: 1250, icon: Users },
    { id: '4', label: 'Average ROI', value: 342, suffix: '%', icon: Target },
  ];

  const chartData: ChartData[] = [
    { year: '2020', revenue: 25, investment: 10, profit: 8 },
    { year: '2021', revenue: 45, investment: 20, profit: 18 },
    { year: '2022', revenue: 75, investment: 35, profit: 32 },
    { year: '2023', revenue: 125, investment: 55, profit: 58 },
    { year: '2024', revenue: 180, investment: 80, profit: 95 },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      company: 'TechFlow Solutions',
      industry: 'SaaS Technology',
      investment: '$2.5M',
      roi: '425%',
      timeline: '18 months',
      description: 'Revolutionary workflow automation platform that transformed enterprise productivity.',
      metrics: {
        revenue: '$12.8M ARR',
        growth: '340% YoY',
        users: '25K+ Active'
      }
    },
    {
      id: '2',
      company: 'GreenEnergy Dynamics',
      industry: 'Renewable Energy',
      investment: '$5.2M',
      roi: '380%',
      timeline: '24 months',
      description: 'Next-generation solar technology that reduced installation costs by 60%.',
      metrics: {
        revenue: '$28.4M',
        growth: '520% YoY',
        users: '150+ Projects'
      }
    },
    {
      id: '3',
      company: 'HealthTech Innovations',
      industry: 'Digital Healthcare',
      investment: '$3.8M',
      roi: '295%',
      timeline: '20 months',
      description: 'AI-powered diagnostic platform improving patient outcomes globally.',
      metrics: {
        revenue: '$15.6M ARR',
        growth: '285% YoY',
        users: '500K+ Patients'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Investment & Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving exceptional returns through strategic investments and innovative business solutions. 
              Join our portfolio of success stories and accelerate your growth journey.
            </p>
          </motion.div>

          {/* Growth Statistics */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2000 + index * 200}
                    />
                  </h3>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
              <div className="flex gap-2">
                {[
                  { key: 'overview' as const, label: 'Growth Overview', icon: BarChart3 },
                  { key: 'opportunities' as const, label: 'Opportunities', icon: Target },
                  { key: 'cases' as const, label: 'Success Stories', icon: Trophy }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.key
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Growth Trajectory</h3>
                  <SimpleChart data={chartData} />
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">$180M</p>
                      <p className="text-sm text-gray-600">2024 Revenue</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">620%</p>
                      <p className="text-sm text-gray-600">5-Year Growth</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">$95M</p>
                      <p className="text-sm text-gray-600">Net Profit</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Highlights</h3>
                  <div className="space-y-4">
                    {[
                      { metric: 'Portfolio Value', value: '$2.8B', change: '+45% YoY' },
                      { metric: 'Active Investments', value: '127', change: '+32% YoY' },
                      { metric: 'Successful Exits', value: '34', change: '+18% YoY' },
                      { metric: 'Average Hold Period', value: '3.2 Years', change: 'Optimal' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900">{item.metric}</p>
                          <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">{item.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'opportunities' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Series A Funding',
                    amount: '$50M Available',
                    sector: 'Technology & AI',
                    roi: 'Target ROI: 400%+',
                    timeline: '12-18 months',
                    features: ['AI/ML Startups', 'SaaS Platforms', 'Enterprise Solutions']
                  },
                  {
                    title: 'Growth Capital',
                    amount: '$100M Available',
                    sector: 'Sustainable Energy',
                    roi: 'Target ROI: 350%+',
                    timeline: '18-24 months',
                    features: ['Clean Technology', 'Energy Storage', 'Grid Solutions']
                  },
                  {
                    title: 'Strategic Partnership',
                    amount: '$25M Available',
                    sector: 'Healthcare Innovation',
                    roi: 'Target ROI: 300%+',
                    timeline: '24-30 months',
                    features: ['Digital Health', 'Biotech', 'Medical Devices']
                  }
                ].map((opportunity, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 mb-1">{opportunity.amount}</p>
                      <p className="text-sm text-gray-600">{opportunity.sector}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Expected ROI</span>
                        <span className="text-sm font-bold text-green-600">{opportunity.roi}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Timeline</span>
                        <span className="text-sm font-bold text-gray-900">{opportunity.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-medium text-gray-700">Focus Areas:</p>
                      {opportunity.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'cases' && (
              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                            <Star className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
                            <p className="text-sm text-gray-600">{study.industry}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">{study.description}</p>
                        
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                            <DollarSign className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium">Investment: {study.investment}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium">ROI: {study.roi}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg">
                            <Target className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium">Timeline: {study.timeline}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900">Key Metrics</h4>
                        <div className="space-y-3">
                          <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="text-sm font-medium text-gray-600">Annual Revenue</p>
                            <p className="text-2xl font-bold text-blue-600">{study.metrics.revenue}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="text-sm font-medium text-gray-600">Growth Rate</p>
                            <p className="text-2xl font-bold text-green-600">{study.metrics.growth}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="text-sm font-medium text-gray-600">User Base</p>
                            <p className="text-2xl font-bold text-purple-600">{study.metrics.users}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Accelerate Your Growth?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our portfolio of successful companies and unlock unprecedented growth opportunities 
                with our strategic investment and business development expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Schedule a Consultation
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  View Investment Portfolio
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}