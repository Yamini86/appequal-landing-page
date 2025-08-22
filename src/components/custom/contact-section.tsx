"use client"

import React, { useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const form = formRef.current

    if (!section || !form) return

    // Fade-in animation on scroll
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Input focus expand animations
    const inputs = form.querySelectorAll('input, textarea')
    inputs.forEach((input) => {
      const handleFocus = () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      const handleBlur = () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      input.addEventListener('focus', handleFocus)
      input.addEventListener('blur', handleBlur)

      return () => {
        input.removeEventListener('focus', handleFocus)
        input.removeEventListener('blur', handleBlur)
      }
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-app-secondary py-20 relative overflow-hidden"
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-app-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-text-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-app-accent mx-auto rounded-full" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 backdrop-blur-md border border-text-secondary/20"
          >
            <h3 className="text-2xl font-display font-semibold text-text-primary mb-6">
              Send us a Message
            </h3>

            <form className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-body font-medium text-text-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-app-primary/50 border border-text-secondary/30 rounded-lg text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-app-accent/50 focus:border-app-accent transition-all duration-300 backdrop-blur-sm glow-effect focus:shadow-[0_0_30px_rgba(192,192,192,0.4)]"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-body font-medium text-text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-app-primary/50 border border-text-secondary/30 rounded-lg text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-app-accent/50 focus:border-app-accent transition-all duration-300 backdrop-blur-sm glow-effect focus:shadow-[0_0_30px_rgba(192,192,192,0.4)]"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-body font-medium text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-app-primary/50 border border-text-secondary/30 rounded-lg text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-app-accent/50 focus:border-app-accent transition-all duration-300 resize-none backdrop-blur-sm glow-effect focus:shadow-[0_0_30px_rgba(192,192,192,0.4)]"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-app-accent text-app-primary font-body font-semibold py-3 px-6 rounded-lg hover:bg-text-secondary transition-all duration-300 flex items-center justify-center gap-2 glow-effect hover:shadow-[0_0_25px_rgba(192,192,192,0.5)]"
              >
                <Send size={18} />
                Send Request
              </motion.button>
            </form>
          </motion.div>

          {/* Company Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-md border border-text-secondary/20">
              <h3 className="text-2xl font-display font-semibold text-text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-app-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-app-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-text-primary mb-2">Address</h4>
                    <p className="text-text-secondary leading-relaxed">
                      5th Floor, Trendz Eternity, Gachibowli,<br />
                      Hyderabad, Telangana 500032, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-app-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-app-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-text-primary mb-2">Phone</h4>
                    <p className="text-text-secondary">+91 (040) 1234-5678</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-app-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-app-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-text-primary mb-2">Email</h4>
                    <p className="text-text-secondary">hello@appequal.com</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-app-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-app-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-text-primary mb-2">Office Hours</h4>
                    <p className="text-text-secondary">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6 backdrop-blur-md border border-text-secondary/20"
            >
              <h4 className="font-display font-semibold text-text-primary mb-3">
                Ready to Start Your Project?
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                We&apos;re here to help bring your ideas to life. Whether you need web development, 
                mobile apps, or investment consulting, our team is ready to discuss your project 
                and provide tailored solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}