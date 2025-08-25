"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Cloud, Shield, FileCheck, CreditCard, Key, Search, TrendingUp, Lock, Map } from 'lucide-react';
import gsap from 'gsap';

interface ServiceData {
  id: string;
  title: string;
  statistic: string;
  statisticLabel: string;
  bulletPoints: string[];
  goodNewsTitle: string;
  goodNewsContent: string;
  icon: React.ComponentType<any>;
}

const servicesData: ServiceData[] = [
  {
    id: 'digital-infrastructure',
    title: 'Digital Infrastructure & Experience',
    statistic: '95%',
    statisticLabel: 'uptime achieved with cloud infrastructure',
    bulletPoints: [
      'Cloud-native architecture design',
      'Scalable microservices implementation',
      'User experience optimization',
      'Performance monitoring & analytics'
    ],
    goodNewsTitle: 'Infrastructure Excellence',
    goodNewsContent: 'Enhanced system reliability by 40% and reduced operational costs by 35% through optimized cloud solutions.',
    icon: Cloud
  },
  {
    id: 'technology-scaling',
    title: 'Technology Scaling & Security',
    statistic: '300%',
    statisticLabel: 'performance improvement with scaling solutions',
    bulletPoints: [
      'Auto-scaling infrastructure solutions',
      'Security-first development practices',
      'Load balancing & optimization',
      'Continuous integration & deployment'
    ],
    goodNewsTitle: 'Scaling Success',
    goodNewsContent: 'Achieved 99.9% system availability while supporting 10x traffic growth without performance degradation.',
    icon: TrendingUp
  },
  {
    id: 'financial-compliance',
    title: 'Financial & Regulatory Compliance',
    statistic: '100%',
    statisticLabel: 'compliance rate with financial regulations',
    bulletPoints: [
      'Automated compliance monitoring',
      'Real-time regulatory reporting',
      'Risk assessment frameworks',
      'Audit trail documentation'
    ],
    goodNewsTitle: 'Compliance Mastery',
    goodNewsContent: 'Maintained perfect compliance scores while reducing regulatory reporting time by 60%.',
    icon: FileCheck
  },
  {
    id: 'banking-security',
    title: 'Banking & Financial Security',
    statistic: '82%',
    statisticLabel: 'of banks face fraud annually',
    bulletPoints: [
      'Advanced encryption protocols',
      'Real-time fraud detection',
      'Secure payment processing',
      'Multi-layer authentication systems'
    ],
    goodNewsTitle: 'Fraud Prevention Success',
    goodNewsContent: 'Reduced fraud by 70% for clients through advanced AI-powered detection systems.',
    icon: CreditCard
  },
  {
    id: 'identity-access',
    title: 'Identity & Access Management',
    statistic: '65%',
    statisticLabel: 'of breaches due to weak access controls',
    bulletPoints: [
      'Multi-factor authentication systems',
      'Zero-trust security architecture',
      'Identity verification protocols',
      'Access privilege management'
    ],
    goodNewsTitle: 'Access Control Excellence',
    goodNewsContent: '95% access compliance achieved with streamlined user authentication processes.',
    icon: Key
  },
  {
    id: 'audit-governance',
    title: 'Audit & Governance Security',
    statistic: '70%',
    statisticLabel: 'audit delays from manual processes',
    bulletPoints: [
      'AI-powered audit automation',
      'Compliance tracking systems',
      'Governance framework implementation',
      'Risk assessment protocols'
    ],
    goodNewsTitle: 'Audit Efficiency',
    goodNewsContent: 'Cut audit time by 50% through intelligent automation and streamlined processes.',
    icon: Search
  },
  {
    id: 'revenue-security',
    title: 'Revenue Security',
    statistic: '45%',
    statisticLabel: 'revenue loss from security leaks',
    bulletPoints: [
      'Revenue stream protection',
      'Fraud detection algorithms',
      'Financial data encryption',
      'Transaction monitoring systems'
    ],
    goodNewsTitle: 'Revenue Protection',
    goodNewsContent: 'Increased revenue retention by 60% through comprehensive security measures.',
    icon: TrendingUp
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    statistic: '90%',
    statisticLabel: 'of firms hit by ransomware attacks',
    bulletPoints: [
      'Real-time threat monitoring',
      'Advanced malware protection',
      'Incident response protocols',
      'Security awareness training'
    ],
    goodNewsTitle: 'Threat Mitigation',
    goodNewsContent: '99% threat mitigation rate achieved through proactive security measures.',
    icon: Shield
  },
  {
    id: 'gis',
    title: 'GIS',
    statistic: '78%',
    statisticLabel: 'better decision-making with GIS data',
    bulletPoints: [
      'Geospatial data analysis',
      'Location intelligence solutions',
      'Mapping & visualization tools',
      'Spatial database management'
    ],
    goodNewsTitle: 'Geographic Intelligence',
    goodNewsContent: 'Improved accuracy by 85% in strategic decision-making through advanced GIS solutions.',
    icon: Map
  }
];

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showRealityCheck, setShowRealityCheck] = useState<string | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }
      );
    }
  }, [activeTab]);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    
    if (cardsRef.current) {
      gsap.to(cardsRef.current.children, {
        opacity: 0,
        y: -20,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(index);
        }
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = activeTab > 0 ? activeTab - 1 : servicesData.length - 1;
    handleTabChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeTab < servicesData.length - 1 ? activeTab + 1 : 0;
    handleTabChange(newIndex);
  };

  const handleRealityCheck = (serviceId: string) => {
    setShowRealityCheck(showRealityCheck === serviceId ? null : serviceId);
  };

  const currentServices = servicesData.slice(activeTab * 3, (activeTab + 1) * 3);
  const totalTabs = Math.ceil(servicesData.length / 3);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to secure, scale, and optimize your business operations
            with cutting-edge innovation and proven expertise.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div ref={tabsRef} className="flex items-center space-x-2 bg-card border border-border rounded-xl p-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalTabs }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleTabChange(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === i
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {i * 3 + 1}-{Math.min((i + 1) * 3, servicesData.length)}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
              aria-label="Next services"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Services Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service) => {
            const IconComponent = service.icon;
            const isRealityCheckActive = showRealityCheck === service.id;
            
            return (
              <div
                key={service.id}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* 3D Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Service Content */}
                <div className={`transition-opacity duration-300 ${isRealityCheckActive ? 'opacity-0 absolute' : 'opacity-100'}`}>
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                    {service.title}
                  </h3>
                  
                  <ul className="space-y-2 mb-6">
                    {service.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reality Check Content */}
                <div className={`transition-opacity duration-300 ${isRealityCheckActive ? 'opacity-100' : 'opacity-0 absolute'}`}>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary mb-2">{service.statistic}</div>
                    <p className="text-sm text-muted-foreground">{service.statisticLabel}</p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                      {service.goodNewsTitle}
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      {service.goodNewsContent}
                    </p>
                  </div>
                </div>

                {/* Reality Check Button */}
                <button
                  onClick={() => handleRealityCheck(service.id)}
                  className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
                >
                  {isRealityCheckActive ? 'Back to Details' : 'Reality Check'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Mobile Navigation Indicators */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: totalTabs }, (_, i) => (
              <button
                key={i}
                onClick={() => handleTabChange(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  activeTab === i ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};