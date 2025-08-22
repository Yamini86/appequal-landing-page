"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Code2, Database, Globe, Layers, Zap, Cpu, Shield, Rocket } from 'lucide-react'

const technologies = [
  { name: 'React', icon: Code2, description: 'Modern UI framework for dynamic interfaces' },
  { name: 'Three.js', icon: Globe, description: '3D graphics and immersive experiences' },
  { name: 'TypeScript', icon: Code2, description: 'Type-safe JavaScript for enterprise apps' },
  { name: 'Node.js', icon: Database, description: 'Scalable backend infrastructure' },
  { name: 'Next.js', icon: Layers, description: 'Full-stack React framework' },
  { name: 'WebGL', icon: Zap, description: 'Hardware-accelerated graphics' },
  { name: 'GSAP', icon: Cpu, description: 'Professional animation engine' },
  { name: 'Docker', icon: Shield, description: 'Containerized deployments' },
]

export default function TechnologySolutions() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const morphingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    canvas.style.width = canvas.offsetWidth / 2 + 'px'
    canvas.style.height = canvas.offsetHeight / 2 + 'px'
    ctx.scale(2, 2)

    let animationId: number
    let time = 0

    const drawMorphingShape = () => {
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2)
      
      const centerX = canvas.width / 4
      const centerY = canvas.height / 4
      const baseRadius = Math.min(centerX, centerY) * 0.4

      // Create morphing blob
      ctx.beginPath()
      for (let i = 0; i < Math.PI * 2; i += 0.1) {
        const radius = baseRadius + Math.sin(time * 0.002 + i * 3) * 20 + Math.cos(time * 0.001 + i * 5) * 15
        const x = centerX + Math.cos(i) * radius
        const y = centerY + Math.sin(i) * radius
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()

      // Gradient fill
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseRadius + 35)
      gradient.addColorStop(0, 'rgba(192, 192, 192, 0.3)')
      gradient.addColorStop(0.5, 'rgba(192, 192, 192, 0.1)')
      gradient.addColorStop(1, 'rgba(192, 192, 192, 0.05)')
      
      ctx.fillStyle = gradient
      ctx.fill()

      // Glow effect
      ctx.strokeStyle = 'rgba(192, 192, 192, 0.4)'
      ctx.lineWidth = 2
      ctx.stroke()

      time += 16
      animationId = requestAnimationFrame(drawMorphingShape)
    }

    drawMorphingShape()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-app-primary py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-app-primary via-app-secondary to-app-primary opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(192,192,192,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(47,58,68,0.3),transparent_50%)]" />
      
      <div className="relative container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-text-primary mb-6">
              Our Technology Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-app-accent-dark mx-auto rounded-full" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Glassmorphic Container */}
              <div className="glass-effect rounded-2xl p-8 lg:p-10 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-app-accent-dark/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold text-text-primary">
                    Cutting-Edge Development Stack
                  </h3>
                  
                  <p className="text-lg text-text-secondary font-body leading-relaxed">
                    We leverage cutting-edge technologies to build scalable, performant applications that push the boundaries of what&apos;s possible on the web. Our expertise spans from modern frontend frameworks to robust backend infrastructure.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-text-secondary font-body">React, Three.js, and TypeScript for modern UIs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-text-secondary font-body">Node.js and cloud infrastructure for scalability</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-text-secondary font-body">WebGL and GSAP for immersive experiences</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Approach Section */}
              <motion.div variants={itemVariants} className="glass-effect rounded-xl p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-app-accent-dark rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-app-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-text-primary mb-2">
                      Our Approach
                    </h4>
                    <p className="text-text-secondary font-body leading-relaxed">
                      We combine performance optimization with cutting-edge design to create applications that not only look stunning but deliver exceptional user experiences across all devices and platforms.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Morphing Shapes */}
            <motion.div variants={itemVariants} className="relative">
              <div ref={morphingRef} className="relative h-96 lg:h-[500px] glass-effect rounded-2xl overflow-hidden">
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-app-accent-dark/10" />
                <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-app-accent-dark rounded-full animate-pulse delay-1000" />
              </div>
            </motion.div>
          </div>

          {/* Technology Grid */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-text-primary text-center mb-12">
              Technology Stack
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="glass-effect rounded-xl p-6 group cursor-pointer transition-all duration-300 hover:bg-accent/10"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-app-accent-dark/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <tech.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-display font-semibold text-text-primary text-sm lg:text-base">
                      {tech.name}
                    </h4>
                    <p className="text-xs lg:text-sm text-text-secondary font-body leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}