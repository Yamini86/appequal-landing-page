"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, AlertTriangle, ChevronLeft, ChevronRight, Shield, Lock, FileCheck, DollarSign, Globe, Map } from 'lucide-react'
import * as THREE from 'three'
import { gsap } from 'gsap'

interface TabContent {
  id: string
  title: string
  statistic: string
  statisticLabel: string
  bulletPoints: string[]
  goodNewsTitle: string
  goodNewsContent: string
  icon: React.ElementType
  color: string
}

const tabsData: TabContent[] = [
  {
    id: 'digital-infrastructure',
    title: 'Digital Infrastructure & Experience',
    statistic: '73%',
    statisticLabel: 'of businesses lose customers due to poor digital experience',
    bulletPoints: [
      'Average $4.2M annual revenue loss from poor user experience',
      'Customer acquisition costs increase by 240% with weak digital presence',
      '67% of users abandon websites that take longer than 3 seconds to load',
      'Mobile-unfriendly sites lose 68% of potential conversions'
    ],
    goodNewsTitle: 'Good News!',
    goodNewsContent: 'Our proven infrastructure solutions have helped clients increase conversion rates by 340% and reduce bounce rates by 85%.',
    icon: Globe,
    color: '#4f46e5'
  },
  {
    id: 'technology-scaling',
    title: 'Technology Scaling & Security',
    statistic: '89%',
    statisticLabel: 'of companies experience security breaches due to poor scaling practices',
    bulletPoints: [
      'Unplanned downtime costs enterprises $300K per hour on average',
      'Security vulnerabilities increase 450% during rapid scaling phases',
      '78% of scaling failures result from inadequate infrastructure planning',
      'Legacy system integration issues cause 65% of project delays'
    ],
    goodNewsTitle: 'Good News!',
    goodNewsContent: 'Our security-first scaling methodology has achieved 99.97% uptime for enterprise clients while reducing infrastructure costs by 45%.',
    icon: Shield,
    color: '#059669'
  },
  {
    id: 'financial-regulatory',
    title: 'Financial & Regulatory Compliance',
    statistic: '61%',
    statisticLabel: 'of financial institutions face compliance violations costing millions annually',
    bulletPoints: [
      'Average compliance violation fine reaches $2.8M per incident',
      'Regulatory reporting errors increase operational costs by 230%',
      '84% of audit failures stem from inadequate documentation systems',
      'Manual compliance processes consume 40% of finance team productivity'
    ],
    goodNewsTitle: 'Good News!',
    goodNewsContent: 'Our automated compliance solutions have helped clients achieve 100% audit success rates while reducing compliance costs by 60%.',
    icon: FileCheck,
    color: '#dc2626'
  },
  {
    id: 'banking-financial-security',
    title: 'Banking & Financial Security',
    statistic: '82%',
    statisticLabel: 'of banks face fraud annually',
    bulletPoints: [
      'Financial fraud costs banks $1.4B annually in direct losses',
      'Advanced encryption reduces transaction fraud by 85%',
      'Secure banking solutions prevent 94% of unauthorized access attempts',
      'Multi-layered security protocols block 99.2% of malicious transactions'
    ],
    goodNewsTitle: 'Good News!',
    goodNewsContent: 'Reduced fraud by 70% for clients through our advanced encryption and secure banking solutions.',
    icon: DollarSign,
    color: '#16a34a'
  },
  {
    id: 'identity-access-management',
    title: 'Identity & Access Management',
    statistic: '65%',
    statisticLabel: 'of breaches due to weak access controls',
    bulletPoints: [
      'Weak authentication systems cost enterprises $4.45M per breach',
      'Multi-factor authentication prevents 99.9% of automated attacks',
      'Identity management reduces security incidents by 78%',
      'Proper access controls eliminate 82% of insider threats'
    ],
    goodNewsTitle: 'Good News!',
    goodNewsContent: '95% access compliance achieved through our multi-factor authentication systems.',
    icon: Lock,
    color: '#7c3aed'
  },
  {
    id: 'audit-governance-security',
    title: 'Audit & Governance Security',
    statistic: '70%',
    statisticLabel: 'audit delays from manual processes',
    bulletPoints: [
      'Manual audit processes increase costs by 340% annually',
      'AI-powered tools reduce audit preparation time by 60%',
      'Automated compliance tracking prevents 89% of regulatory violations',
      'Governance security frameworks improve efficiency by 75%'
    ],
    goodNewsTitle: 'Good News!',
    goodNewsContent: 'Cut audit time by 50% using our AI-powered compliance tools.',
    icon: FileCheck,
    color: '#ea580c'
  },
  {
    id: 'revenue-security',
    title: 'Revenue Security',
    statistic: '45%',
    statisticLabel: 'revenue loss from leaks and fraud',
    bulletPoints: [
      'Revenue leaks cost businesses $2.1M annually on average',
      'Fraud detection systems prevent 92% of revenue theft',
      'Real-time monitoring catches 97% of suspicious transactions',
      'Advanced analytics identify revenue optimization opportunities worth 25%'
    ],
    goodNewsTitle: 'Good News!',
    goodNewsContent: 'Increased revenue retention by 60% through our fraud detection systems.',
    icon: DollarSign,
    color: '#0891b2'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    statistic: '90%',
    statisticLabel: 'of firms hit by ransomware',
    bulletPoints: [
      'Ransomware attacks cost enterprises $4.62M per incident',
      'Real-time monitoring prevents 99.1% of cyber threats',
      'Advanced threat detection blocks 97% of malware attacks',
      'Comprehensive security frameworks reduce breach risk by 88%'
    ],
    goodNewsTitle: 'Good News!',
    goodNewsContent: '99% threat mitigation rate achieved through our real-time monitoring systems.',
    icon: Shield,
    color: '#dc2626'
  },
  {
    id: 'gis',
    title: 'GIS (Geographic Information Systems)',
    statistic: '78%',
    statisticLabel: 'better decision-making with GIS data',
    bulletPoints: [
      'Location-based insights improve operational efficiency by 35%',
      'Geospatial data analysis reduces costs by $1.8M annually',
      'Strategic mapping enhances market penetration by 42%',
      'GIS integration increases business intelligence accuracy by 67%'
    ],
    goodNewsTitle: 'Good News!',
    goodNewsContent: 'Improved accuracy by 85% through our geospatial data solutions and strategic insights.',
    icon: Map,
    color: '#16a34a'
  }
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('digital-infrastructure')
  const [currentIndex, setCurrentIndex] = useState(0)
  const riverRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  const activeTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0]
  const itemsPerPage = window?.innerWidth < 768 ? 1 : window?.innerWidth < 1024 ? 2 : 3
  const maxIndex = Math.max(0, tabsData.length - itemsPerPage)

  useEffect(() => {
    // GSAP animation for content transitions
    if (contentRef.current) {
      gsap.set(contentRef.current, { opacity: 0, y: 20 })
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      })
    }
  }, [activeTab])

  useEffect(() => {
    // GSAP animation for tab navigation
    if (tabsRef.current) {
      gsap.to(tabsRef.current, {
        x: -currentIndex * (100 / itemsPerPage) + '%',
        duration: 0.5,
        ease: "power2.out"
      })
    }
  }, [currentIndex, itemsPerPage])

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1))
  }

  const IconComponent = activeTabData.icon

  return (
    <section id="services" className="relative min-h-screen bg-app-primary py-20">
      {/* Animated River Flow */}
      <div 
        ref={riverRef}
        className="absolute top-0 left-0 w-full h-1 overflow-hidden"
      >
        <div className="relative w-full h-full">
          <div 
            className="absolute inset-0 h-1 bg-gradient-to-r from-app-accent via-indigo-400 to-app-accent opacity-80"
            style={{
              animation: 'riverFlow 3s linear infinite',
              background: 'linear-gradient(90deg, #C0C0C0 0%, #4f46e5 50%, #C0C0C0 100%)',
              backgroundSize: '200% 100%'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive solutions designed to overcome your business challenges
          </p>
        </motion.div>

        {/* Tab Navigation with Slider */}
        <div className="relative mb-16">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              variant="outline"
              size="icon"
              className="bg-app-secondary/50 border-app-accent-dark/30 hover:bg-app-accent/10 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-text-secondary">
                {currentIndex + 1} - {Math.min(currentIndex + itemsPerPage, tabsData.length)} of {tabsData.length} services
              </p>
            </div>

            <Button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              variant="outline"
              size="icon"
              className="bg-app-secondary/50 border-app-accent-dark/30 hover:bg-app-accent/10 disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Tab Cards Slider */}
          <div className="overflow-hidden rounded-xl">
            <div 
              ref={tabsRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ width: `${(tabsData.length / itemsPerPage) * 100}%` }}
            >
              {tabsData.map((tab, index) => {
                const TabIcon = tab.icon
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative p-6 rounded-xl border-2 transition-all duration-300 font-display font-medium
                      glass-effect text-left h-32 flex items-center gap-4 mx-2
                      ${activeTab === tab.id 
                        ? 'border-app-accent bg-app-accent/10 text-text-primary glow-effect transform scale-105' 
                        : 'border-app-accent-dark/30 bg-app-secondary/30 text-text-secondary hover:border-app-accent/50 hover:bg-app-accent/5'
                      }
                    `}
                    style={{ width: `${100 / itemsPerPage - 1}%` }}
                    whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* 3D Icon Effect */}
                    <div 
                      className={`
                        p-3 rounded-lg transition-all duration-300
                        ${activeTab === tab.id ? 'bg-app-accent/20 shadow-lg' : 'bg-app-secondary/50'}
                      `}
                      style={{ 
                        backgroundColor: activeTab === tab.id ? `${tab.color}20` : undefined,
                        boxShadow: activeTab === tab.id ? `0 0 20px ${tab.color}40` : undefined
                      }}
                    >
                      <TabIcon 
                        className="h-6 w-6 transition-colors duration-300" 
                        style={{ color: activeTab === tab.id ? tab.color : undefined }}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-sm lg:text-base leading-tight block">
                        {tab.title}
                      </span>
                      {activeTab === tab.id && (
                        <span className="text-xs text-app-accent mt-1 block">
                          Active Service
                        </span>
                      )}
                    </div>
                    
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 rounded-xl border-2"
                        style={{ borderColor: tab.color }}
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Reality Check Box */}
        <motion.div 
          className="glass-effect bg-app-secondary/80 rounded-2xl p-8 lg:p-12 border-2 border-app-accent-dark/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              ref={contentRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Left Panel */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="p-3 rounded-xl shadow-lg"
                      style={{ 
                        backgroundColor: `${activeTabData.color}20`,
                        boxShadow: `0 0 30px ${activeTabData.color}30`
                      }}
                    >
                      <IconComponent 
                        className="h-8 w-8" 
                        style={{ color: activeTabData.color }}
                      />
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-primary">
                      The Reality Check
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span 
                        className="font-display text-6xl lg:text-7xl font-bold"
                        style={{ color: activeTabData.color }}
                      >
                        {activeTabData.statistic}
                      </span>
                    </div>
                    <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
                      {activeTabData.statisticLabel}
                    </p>
                  </div>
                </div>

                <Button 
                  className="font-display font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 glow-effect group"
                  style={{ 
                    backgroundColor: activeTabData.color,
                    color: '#ffffff'
                  }}
                >
                  See Our Solution
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Right Panel */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                    <h3 className="font-display text-xl font-semibold text-text-primary">
                      Lost Revenue Opportunities
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {activeTabData.bulletPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5, ease: "power2.out" }}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                          style={{ backgroundColor: activeTabData.color }}
                        />
                        <span className="leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Good News Box */}
                <div className="glass-effect bg-emerald-900/20 border-2 border-emerald-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-400" />
                    <h4 className="font-display text-lg font-semibold text-emerald-400">
                      {activeTabData.goodNewsTitle}
                    </h4>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {activeTabData.goodNewsContent}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes riverFlow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </section>
  )
}