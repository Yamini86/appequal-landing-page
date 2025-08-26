"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Twitter, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus({ type: 'loading' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Ready to start your next project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Send us a message
              </h3>
              
              {status.type === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800">{status.message}</p>
                </motion.div>
              )}

              {status.type === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-800">{status.message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name 
                          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 focus:border-blue-500'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email 
                          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 focus:border-blue-500'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      errors.message 
                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500' 
                        : 'border-slate-300 focus:border-blue-500'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status.type === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600">
                      123 Business District<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-500">Mon-Fri 9am-6pm EST</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">contact@company.com</p>
                    <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Follow Us
              </h3>
              
              <div className="flex gap-4">
                {[
                  { icon: Twitter, color: 'hover:bg-blue-600', label: 'Twitter' },
                  { icon: Linkedin, color: 'hover:bg-blue-700', label: 'LinkedIn' },
                  { icon: Github, color: 'hover:bg-gray-800', label: 'GitHub' }
                ].map(({ icon: Icon, color, label }) => (
                  <motion.a
                    key={label}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 transition-colors duration-200 ${color} hover:text-white`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map/Location */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Our Location
                </h3>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                {/* Placeholder for map - replace with actual map integration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-slate-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-slate-500">New York, NY 10001</p>
                  </div>
                </div>
                
                {/* Overlay grid pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full" 
                       style={{
                         backgroundImage: `
                           linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                         `,
                         backgroundSize: '20px 20px'
                       }}>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}