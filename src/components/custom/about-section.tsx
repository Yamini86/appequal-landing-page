"use client"

import { motion } from "motion/react"
import { useEffect, useRef } from "react"

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const threejsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP scroll-triggered animation setup would go here
    // For now, we'll use CSS animations as a fallback
  }, [])

  return (
    <section 
      id="about"
      className="relative min-h-screen bg-app-secondary overflow-hidden py-20"
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-app-accent/10 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-app-accent/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-text-secondary/10 rounded-full blur-lg" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Left Column */}
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {/* Glassmorphic Container */}
              <div className="glass-effect rounded-2xl p-8 lg:p-12">
                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="font-display text-4xl lg:text-5xl font-bold mb-8"
                  style={{ color: "#0000FF" }}
                >
                  About AppEqual
                </motion.h2>

                {/* Primary Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="font-body text-lg lg:text-xl text-text-secondary leading-relaxed mb-10"
                >
                  AppEqual E-Commerce Pvt Ltd is an enterprise organization provides Web, E-Commerce and Mobile Application solution using different concepts
                </motion.p>

                {/* Mission Subheading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-app-accent to-transparent rounded-full" />
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-4" style={{ color: "#0000FF" }}>
                    Our Mission
                  </h3>
                  <p className="font-body text-lg text-app-accent font-medium">
                    To innovate digital experiences for global businesses
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Three.js Animation Container - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px]"
            >
              {/* Three.js Placeholder */}
              <div
                ref={threejsRef}
                className="w-full h-full glass-effect rounded-2xl flex items-center justify-center relative overflow-hidden"
              >
                {/* Floating Text Animation Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated Text Elements */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      className="absolute -top-16 -left-16 font-display text-2xl font-bold text-app-accent/30"
                    >
                      Innovation
                    </motion.div>
                    
                    <motion.div
                      animate={{
                        y: [0, 15, 0],
                        rotate: [0, -3, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute -bottom-12 right-4 font-display text-xl font-semibold text-text-secondary/40"
                    >
                      Excellence
                    </motion.div>
                    
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      className="absolute top-8 -right-20 font-display text-lg font-medium text-app-accent/25"
                    >
                      Digital
                    </motion.div>

                    {/* Central Element */}
                    <div className="w-32 h-32 glass-effect rounded-full flex items-center justify-center glow-effect">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-16 h-16 border-2 border-app-accent/50 rounded-full relative"
                      >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-app-accent rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Background Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-app-accent/20 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section Transition Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-app-primary to-transparent pointer-events-none" />
    </section>
  )
}