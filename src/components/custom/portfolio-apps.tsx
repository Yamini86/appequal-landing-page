"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface App {
  id: string
  name: string
  category: string
  rating: number
  description: string
  featured?: boolean
  stats?: {
    downloads: string
    users: string
    revenue: string
  }
}

const apps: App[] = [
  {
    id: 'vidyardi',
    name: 'Vidyardi',
    category: 'Education',
    rating: 4.8,
    description: 'Interactive learning platform with AI-powered personalized education paths'
  },
  {
    id: 'truehunt',
    name: 'Truehunt',
    category: 'E-commerce',
    rating: 4.6,
    description: 'Smart product discovery platform with advanced filtering and comparison tools'
  },
  {
    id: 'raithanna',
    name: 'Raithanna',
    category: 'Education',
    rating: 4.7,
    description: 'Digital agriculture learning hub connecting farmers with expert knowledge'
  },
  {
    id: 'gatedplus',
    name: 'GATEDPLUS',
    category: 'Education',
    rating: 4.9,
    description: 'Comprehensive exam preparation platform with advanced analytics and performance tracking',
    stats: {
      downloads: '500K+',
      users: '50K+',
      revenue: '$2M+'
    }
  },
  {
    id: 'wingig',
    name: 'Wingig',
    category: 'Communication',
    rating: 4.5,
    description: 'Professional networking app for freelancers and creative professionals'
  },
  {
    id: 'myfish',
    name: 'Myfish',
    category: 'E-commerce',
    rating: 4.4,
    description: 'Sustainable seafood marketplace connecting consumers with local fishermen'
  }
]

const categories = ['All Projects', 'Education', 'E-commerce', 'Communication']

export default function PortfolioApps() {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [filteredApps, setFilteredApps] = useState(apps)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeFilter === 'All Projects') {
      setFilteredApps(apps)
    } else {
      setFilteredApps(apps.filter(app => app.category === activeFilter))
    }
  }, [activeFilter])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-app-accent text-app-accent'
            : i < rating
            ? 'fill-app-accent/50 text-app-accent'
            : 'text-app-accent-dark'
        }`}
      />
    ))
  }

  const AppCard = ({ app, index }: { app: App; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const cardInView = useInView(cardRef, { once: true })

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.25, 0.4, 0.25, 1]
        }}
        className="glass-effect rounded-xl p-6 group hover:glow-effect transition-all duration-500 bg-app-secondary/50 border-app-accent-dark/30"
      >
        {/* 3D Mockup Placeholder */}
        <div className="bg-gradient-to-br from-app-accent-dark to-app-primary rounded-lg mb-4 relative overflow-hidden h-32">
          <div className="absolute inset-0 bg-gradient-to-br from-app-accent/20 to-transparent" />
          <div className="absolute top-4 left-4 w-8 h-8 bg-app-accent/80 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-app-primary rounded-sm" />
          </div>
        </div>

        {/* App Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-text-primary text-lg">
              {app.name}
            </h3>
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-app-accent/10 text-app-accent border border-app-accent/20">
              {app.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {renderStars(app.rating)}
            </div>
            <span className="text-sm text-text-secondary font-medium">
              {app.rating}
            </span>
          </div>

          <p className="text-text-secondary leading-relaxed text-sm">
            {app.description}
          </p>

          {/* Stats for GATEDPLUS */}
          {app.stats && (
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-app-accent-dark/30">
              <div className="text-center">
                <div className="text-lg font-semibold text-text-primary">
                  {app.stats.downloads}
                </div>
                <div className="text-xs text-text-secondary">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-text-primary">
                  {app.stats.users}
                </div>
                <div className="text-xs text-text-secondary">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-text-primary">
                  {app.stats.revenue}
                </div>
                <div className="text-xs text-text-secondary">Revenue</div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <section 
      ref={sectionRef}
      id="apps"
      className="py-24 bg-app-secondary relative overflow-hidden"
    >
      {/* Background Particle Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-app-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-app-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Discover our innovative applications across education, e-commerce, and communication platforms
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 glass-effect border ${
                activeFilter === category
                  ? 'bg-app-accent text-app-primary border-app-accent glow-effect'
                  : 'bg-app-secondary/50 text-text-secondary border-app-accent-dark/30 hover:border-app-accent/50 hover:text-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Apps Grid - 6 Equal Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredApps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            Ready to bring your app idea to life?
          </p>
          <button className="px-8 py-4 bg-app-accent text-app-primary font-semibold rounded-full hover:glow-effect transition-all duration-300 font-display">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}