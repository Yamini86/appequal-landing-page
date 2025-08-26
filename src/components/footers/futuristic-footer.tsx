"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send,
  ExternalLink,
  Building2
} from 'lucide-react';

interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

interface ContactInfo {
  type: string;
  value: string;
  icon: React.ReactNode;
}

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const footerColumns: FooterColumn[] = [
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Mobile Apps', href: '/services/mobile-apps' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'AI & Machine Learning', href: '/services/ai-ml' },
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Support', href: '/services/support' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Community', href: '/community' },
        { label: 'Help Center', href: '/help' },
        { label: 'Status Page', href: 'https://status.company.com', external: true },
        { label: 'Security', href: '/security' }
      ]
    }
  ];

  const socialLinks: SocialLink[] = [
    { platform: 'Facebook', href: 'https://facebook.com/company', icon: <Facebook size={20} /> },
    { platform: 'Twitter', href: 'https://twitter.com/company', icon: <Twitter size={20} /> },
    { platform: 'Instagram', href: 'https://instagram.com/company', icon: <Instagram size={20} /> },
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/company', icon: <Linkedin size={20} /> },
    { platform: 'YouTube', href: 'https://youtube.com/@company', icon: <Youtube size={20} /> }
  ];

  const contactInfo: ContactInfo[] = [
    { type: 'Email', value: 'hello@company.com', icon: <Mail size={16} /> },
    { type: 'Phone', value: '+1 (555) 123-4567', icon: <Phone size={16} /> },
    { type: 'Address', value: '123 Innovation Street, Tech City, TC 12345', icon: <MapPin size={16} /> }
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEmail('');
    setIsSubscribing(false);
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 opacity-90" />
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Building2 size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TechCorp
              </h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Pioneering the future of technology with innovative solutions that transform businesses 
              and empower digital transformation across industries worldwide.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <div className="text-indigo-400">{contact.icon}</div>
                  <span className="text-sm">{contact.value}</span>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-indigo-400/50 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.platform}
                >
                  <div className="text-gray-400 group-hover:text-indigo-400 transition-colors duration-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  <h3 className="text-lg font-semibold text-white border-b border-gradient-to-r from-indigo-400 to-transparent pb-2">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="flex items-center space-x-2 text-gray-300 hover:text-indigo-400 transition-colors duration-200 group"
                        >
                          <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                            {link.label}
                          </span>
                          {link.external && (
                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-6">
                Get the latest news and updates delivered to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/10 transition-all duration-200"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubscribing || !email}
                  className="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
                >
                  {isSubscribing ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 TechCorp. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="/accessibility" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};