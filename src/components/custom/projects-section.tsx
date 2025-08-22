"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  year: string
  index: number
}

const ProjectCard = ({ title, description, year, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const threejsRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-card/80 backdrop-blur-xl border border-accent/10 rounded-lg p-6 hover:bg-card/90 hover:border-accent/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        damping: 25,
        stiffness: 120
      }}
    >
      {/* Three.js Placeholder with Holographic Effect */}
      <div 
        ref={threejsRef}
        className="relative h-40 mb-6 bg-gradient-to-br from-accent/20 via-app-accent-dark/30 to-accent/10 rounded-lg overflow-hidden group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-500"
      >
        {/* Holographic grid effect */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(192,192,192,0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#grid-${index})`} />
          </svg>
        </div>
        
        {/* Animated morphing shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-full blur-sm"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              borderRadius: ["50%", "25%", "50%"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Glow effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-accent/10 group-hover:via-accent/10 group-hover:to-accent/20 transition-all duration-500" />
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        {/* Year Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
          {year}
        </div>

        {/* Title */}
        <h3 className="font-[var(--font-display)] font-semibold text-xl text-text-primary group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="font-[var(--font-body)] text-text-secondary leading-relaxed">
          {description}
        </p>

        {/* View More Button */}
        <motion.button
          className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-lg text-accent font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          View More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Henry Patrick - Immersive Digital Experiences",
      description: "A cutting-edge portfolio showcasing interactive web experiences with advanced Three.js implementations and immersive storytelling.",
      year: "2025"
    },
    {
      title: "Hugo Yan - Refining Luxury Web Solutions", 
      description: "Sophisticated e-commerce platform featuring premium user experience design and seamless luxury brand integration.",
      year: "2024"
    },
    {
      title: "Sully Li - Bringing Communities Together",
      description: "Social platform development focused on community building with real-time collaboration and engagement features.",
      year: "2024"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-app-secondary overflow-hidden"
      id="projects"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-[var(--font-display)] font-bold text-4xl lg:text-5xl text-text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              year={project.year}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}