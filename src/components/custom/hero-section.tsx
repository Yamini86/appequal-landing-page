"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP-style fade-in animation placeholder
    // In a real implementation, this would initialize GSAP animations
    const elements = document.querySelectorAll('.animate-fade-in')
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100')
        el.classList.remove('opacity-0')
      }, index * 200 + 500)
    })
  }, [])

  const handleExploreClick = () => {
    const servicesSection = document.querySelector('#services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative w-full overflow-hidden bg-app-primary" style={{ minHeight: 'calc(100vh - 80px)', marginTop: '80px' }}>
      {/* WebGL Canvas Placeholder */}
      <div 
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 0, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(192, 192, 192, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(47, 58, 68, 0.3) 0%, transparent 50%)
          `
        }}
      >
        {/* Static particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: Math.random() > 0.5 ? '#0000FF' : '#C0C0C0'
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center lg:px-8" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <motion.h1 
            className="animate-fade-in opacity-0 font-display text-3xl font-bold leading-tight transition-opacity duration-1000 md:text-4xl lg:text-6xl"
            style={{
              background: 'linear-gradient(135deg, #0000FF 0%, #C0C0C0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Your Digital Future
          </motion.h1>

          {/* New Subtitle */}
          <motion.p 
            className="animate-fade-in opacity-0 font-body text-lg font-medium text-text-secondary transition-opacity duration-1000 md:text-xl lg:text-2xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With Innovative Solutions that transform businesses through cutting-edge web development, e-commerce platforms, and mobile applications
          </motion.p>

          {/* Company Name */}
          <motion.p 
            className="animate-fade-in opacity-0 font-body text-base font-medium text-text-secondary/80 transition-opacity duration-1000 md:text-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            AppEqual E-Commerce Pvt Ltd - Pioneering Technology Solutions in Hyderabad, India
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="animate-fade-in opacity-0 transition-opacity duration-1000"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={handleExploreClick}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white font-display font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{
                boxShadow: '0 0 30px rgba(0, 0, 255, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 0, 255, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 0, 255, 0.4)'
              }}
            >
              <span className="relative z-10">Explore Our Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-blue-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 transition-opacity duration-1000"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-text-secondary"
          >
            <span className="font-body text-sm">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Glassmorphic overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-app-primary/20 pointer-events-none" />
    </section>
  )
}