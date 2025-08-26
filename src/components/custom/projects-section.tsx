"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Filter } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

type ProjectCategory = 'All' | 'Web Apps' | 'Mobile' | 'Security' | 'AI/ML' | 'E-commerce';

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface FilterButtonProps {
  category: ProjectCategory;
  isActive: boolean;
  onClick: (category: ProjectCategory) => void;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with advanced analytics, inventory management, and seamless payment integration.',
    image: '/api/placeholder/600/400',
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'E-commerce',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Security Dashboard',
    description: 'Real-time cybersecurity monitoring dashboard with threat detection, vulnerability scanning, and incident response.',
    image: '/api/placeholder/600/400',
    techStack: ['Vue.js', 'Python', 'FastAPI', 'Redis', 'Docker'],
    category: 'Security',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'Intelligent content creation platform powered by machine learning algorithms for automated copywriting.',
    image: '/api/placeholder/600/400',
    techStack: ['React', 'TensorFlow', 'Python', 'OpenAI API', 'MongoDB'],
    category: 'AI/ML',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '4',
    title: 'Mobile Finance App',
    description: 'Cross-platform mobile application for personal finance management with budgeting and investment tracking.',
    image: '/api/placeholder/600/400',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Plaid API'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '5',
    title: 'Project Management Suite',
    description: 'Comprehensive project management platform with team collaboration, time tracking, and resource allocation.',
    image: '/api/placeholder/600/400',
    techStack: ['Angular', 'NestJS', 'PostgreSQL', 'WebSocket'],
    category: 'Web Apps',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: '6',
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support, DeFi integration, and advanced security features.',
    image: '/api/placeholder/600/400',
    techStack: ['React', 'Web3.js', 'Solidity', 'Ethereum', 'MetaMask'],
    category: 'Security',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

const categories: ProjectCategory[] = ['All', 'Web Apps', 'Mobile', 'Security', 'AI/ML', 'E-commerce'];

const FilterButton: React.FC<FilterButtonProps> = ({ category, isActive, onClick }) => {
  return (
    <motion.button
      onClick={() => onClick(category)}
      className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'text-white shadow-lg'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          layoutId="activeFilter"
          initial={false}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        <Filter className="w-4 h-4" />
        {category}
      </span>
    </motion.button>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        className="relative h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none" />
        
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Project Links Overlay */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-4 h-4 text-gray-700" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4 text-gray-700" />
              </motion.a>
            )}
          </motion.div>

          {/* Category Badge */}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 bg-white/10 border border-white/20 text-xs text-gray-300 rounded-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIndex * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Learn More Button */}
          <motion.button
            className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <motion.span
              className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Featured
            </motion.span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our portfolio of innovative solutions that showcase our expertise in 
            cutting-edge technologies and modern development practices.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={setActiveCategory}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </motion.button>
          
          <motion.p
            className="mt-4 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Discover more innovative solutions in our complete portfolio
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}