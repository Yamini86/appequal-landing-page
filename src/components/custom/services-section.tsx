"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'

interface TabContent {
  id: string
  title: string
  statistic: string
  statisticLabel: string
  bulletPoints: string[]
  goodNewsTitle: string
  goodNewsContent: string
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
    goodNewsContent: 'Our proven infrastructure solutions have helped clients increase conversion rates by 340% and reduce bounce rates by 85%.'
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
    goodNewsContent: 'Our security-first scaling methodology has achieved 99.97% uptime for enterprise clients while reducing infrastructure costs by 45%.'
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
    goodNewsContent: 'Our automated compliance solutions have helped clients achieve 100% audit success rates while reducing compliance costs by 60%.'
  }
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('digital-infrastructure')
  const riverRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const activeTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0]

  useEffect(() => {
    // Animate content change
    if (contentRef.current) {
      contentRef.current.style.opacity = '0'
      contentRef.current.style.transform = 'translateY(20px)'
      
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.transition = 'all 0.5s ease-out'
          contentRef.current.style.opacity = '1'
          contentRef.current.style.transform = 'translateY(0)'
        }
      }, 100)
    }
  }, [activeTab])

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
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#0000FF" }}>
            Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive solutions designed to overcome your business challenges
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 mb-16">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-8 py-4 rounded-lg transition-all duration-300 font-display font-medium
                glass-effect border-2 text-center min-h-[80px] flex items-center justify-center
                ${activeTab === tab.id 
                  ? 'border-app-accent bg-app-accent/10 text-text-primary glow-effect' 
                  : 'border-app-accent-dark/30 bg-app-secondary/30 text-text-secondary hover:border-app-accent/50 hover:bg-app-accent/5'
                }
              `}
            >
              <span className="text-sm lg:text-base leading-tight">
                {tab.title}
              </span>
              
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-lg bg-app-accent/5 border-2 border-app-accent"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
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
                  <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#0000FF" }}>
                    The Reality Check
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-6xl lg:text-7xl font-bold text-app-accent">
                        {activeTabData.statistic}
                      </span>
                    </div>
                    <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
                      {activeTabData.statisticLabel}
                    </p>
                  </div>
                </div>

                <Button 
                  className="bg-app-accent text-app-primary hover:bg-app-accent/90 font-display font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 glow-effect group"
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
                    <h3 className="font-display text-xl font-semibold" style={{ color: "#0000FF" }}>
                      Lost Revenue Opportunities
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {activeTabData.bulletPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <div className="w-2 h-2 rounded-full bg-app-accent mt-3 flex-shrink-0" />
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