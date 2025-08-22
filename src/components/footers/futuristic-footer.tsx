"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Twitter, Github, Linkedin, Facebook, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const createParticles = () => {
      const particleCount = window.innerWidth < 768 ? 30 : 60;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles.length = 0;
      createParticles();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 255, ${particle.opacity})`;
        ctx.fill();
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(0, 0, 255, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 0, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'E-commerce Solutions', href: '#services' },
    { name: 'Mobile Applications', href: '#portfolio' },
    { name: 'Investment Consulting', href: '#investment' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="relative bg-black overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleField />

      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 container mx-auto px-6 py-16"
      >
        {/* Glassmorphic Container */}
        <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-blue-500/20 p-8 md:p-12">
          {/* Blue Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 animate-pulse" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-display text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  AppEqual
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 group-hover:w-24 transition-all duration-300" />
              </motion.div>
              <p className="font-body text-gray-300 text-sm leading-relaxed mb-6">
                Crafting digital excellence through innovative web solutions, cutting-edge mobile applications, and strategic investment consulting.
              </p>
              <motion.div
                className="inline-flex items-center gap-2 text-blue-400 text-sm"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar size={16} />
                <span>Est. 2024</span>
              </motion.div>
            </motion.div>

            {/* Services Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="font-display text-xl font-semibold text-white mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li key={index}>
                    <motion.a
                      href={service.href}
                      className="font-body text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm group flex items-center gap-2"
                      whileHover={{ x: 8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="font-display text-xl font-semibold text-white mb-6 relative">
                Contact
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full" />
              </h4>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin size={16} className="text-blue-400 mt-1 group-hover:text-blue-300 transition-colors" />
                  <span className="font-body text-gray-300 text-sm leading-relaxed">
                    123 Innovation Drive<br />
                    Tech Valley, CA 94025
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="font-body text-gray-300 text-sm">+1 (555) 123-4567</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="font-body text-gray-300 text-sm">hello@appequal.com</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="font-display text-xl font-semibold text-white mb-6 relative">
                Connect
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full" />
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="relative group"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
                    <div className="relative p-3 bg-white/5 rounded-lg border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                      <social.icon size={20} className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <motion.div
                className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-body text-xs text-gray-300 mb-3">Stay updated with our latest innovations</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-xs text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <motion.button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-blue-500/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                className="flex items-center gap-6 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <span className="font-body">© {currentYear} AppEqual. All rights reserved.</span>
                <div className="w-1 h-1 bg-blue-500 rounded-full" />
                <span className="font-body">Last updated: {lastUpdated}</span>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-6 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors font-body"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors font-body"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors font-body"
                  whileHover={{ y: -2 }}
                >
                  Cookies
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Geometric Patterns */}
      <div className="absolute top-1/2 left-10 w-20 h-20 border border-blue-500/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-blue-500/30 rotate-12 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-blue-500/20 rounded-full animate-bounce-slow" />
    </footer>
  );
};