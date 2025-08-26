"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarProps {
  className?: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'investment', label: 'Investment', href: '#investment' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const AnimatedIndicatorNavbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [indicatorProps, setIndicatorProps] = useState({ width: 0, left: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);

  // Update indicator position
  useEffect(() => {
    if (activeItemRef.current && navRef.current) {
      const activeElement = activeItemRef.current;
      const navElement = navRef.current;
      
      const activeRect = activeElement.getBoundingClientRect();
      const navRect = navElement.getBoundingClientRect();
      
      setIndicatorProps({
        width: activeRect.width,
        left: activeRect.left - navRect.left,
      });
    }
  }, [activeSection]);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      >
        <div className="relative">
          {/* Glass morphism background */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-white/10" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Brand */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-shrink-0"
              >
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#home');
                  }}
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
                >
                  Brand
                </a>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div ref={navRef} className="relative flex items-center space-x-1">
                  {/* Animated indicator */}
                  <motion.div
                    className="absolute top-0 h-full bg-white/10 rounded-lg border border-white/20"
                    animate={{
                      width: indicatorProps.width,
                      x: indicatorProps.left,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                  
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      ref={activeSection === item.id ? activeItemRef : null}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                      className={`relative z-10 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile menu */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-sm bg-black/90 backdrop-blur-md border-l border-white/10 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="text-xl font-bold text-white">Navigation</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Mobile menu items */}
                <div className="flex-1 py-6">
                  <div className="space-y-2 px-6">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-white bg-white/10 border border-white/20'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                          activeSection === item.id ? 'bg-blue-400' : 'bg-gray-600'
                        }`} />
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Mobile menu footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="text-center text-sm text-gray-400">
                    © 2024 Brand. All rights reserved.
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};