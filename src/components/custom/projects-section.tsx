"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced analytics",
    longDescription: "A full-featured e-commerce platform built with Next.js and Stripe integration, featuring real-time inventory management, advanced analytics dashboard, and seamless payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    category: "Web Development"
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Intelligent data visualization and insights platform",
    longDescription: "An advanced analytics dashboard powered by machine learning algorithms that provides real-time insights, predictive analytics, and customizable data visualizations for businesses.",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking solution",
    longDescription: "A comprehensive mobile banking application with biometric authentication, real-time transactions, budget tracking, and investment portfolio management features.",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Plaid API"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    category: "Mobile Development"
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description: "Streamlined patient care and medical record management",
    longDescription: "A comprehensive healthcare management system that digitizes patient records, streamlines appointment scheduling, and provides telemedicine capabilities for healthcare providers.",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Docker"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    category: "Healthcare"
  },
  {
    id: 5,
    title: "Real-time Collaboration Tool",
    description: "Team productivity platform with live collaboration",
    longDescription: "A real-time collaboration platform that enables teams to work together seamlessly with live document editing, video conferencing, project management, and integrated communication tools.",
    technologies: ["Nuxt.js", "Socket.io", "Redis", "WebRTC", "Kubernetes"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    category: "Productivity"
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Transparent and secure digital voting platform",
    longDescription: "A blockchain-based voting system that ensures transparency, security, and immutability of votes while providing real-time results and comprehensive audit trails.",
    technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS", "React"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    category: "Blockchain"
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
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-white dark:bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-border"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-card/90 text-gray-800 dark:text-foreground rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Project Links */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-card/90 rounded-full hover:bg-white dark:hover:bg-card transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 text-gray-700 dark:text-foreground" />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-card/90 rounded-full hover:bg-white dark:hover:bg-card transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4 text-gray-700 dark:text-foreground" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-gray-900 dark:text-foreground mb-2 group-hover:text-[#0000FF] transition-colors duration-300"
          layoutId={`title-${project.id}`}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-gray-600 dark:text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.longDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-950/30 text-[#0000FF] dark:text-blue-400 rounded-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-muted text-gray-600 dark:text-muted-foreground rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Learn More Button */}
        <motion.div 
          className="flex items-center text-[#0000FF] dark:text-blue-400 text-sm font-medium group/btn cursor-pointer"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <span className="group-hover/btn:underline">Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </motion.div>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0000FF]/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-[#0000FF] dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
              Our Work
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Featured{" "}
            <span className="text-[#0000FF] dark:text-blue-400 relative">
              Projects
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0000FF] to-purple-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Explore our portfolio of innovative solutions that have transformed businesses 
            and delivered exceptional user experiences across various industries.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-[#0000FF] hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}