"use client"

import { Download, ArrowRight } from "lucide-react"
import { useRef, useEffect } from "react"

export default function InvestmentSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP parallax scrolling with blur-to-clear transition
    if (typeof window !== 'undefined') {
      import('gsap').then(({ default: gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger)

          if (sectionRef.current && containerRef.current) {
            // Blur to clear animation
            gsap.fromTo(containerRef.current, 
              { 
                filter: "blur(10px)",
                opacity: 0,
                y: 50
              },
              {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse"
                }
              }
            )

            // Parallax effect for background elements
            gsap.to(sectionRef.current, {
              yPercent: -10,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            })
          }
        })
      })
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-app-primary py-20 lg:py-32 overflow-hidden"
      id="investment"
    >
      {/* Background Three.js Wave Portal Effect Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-app-accent/5 via-transparent to-app-accent-dark/10">
          {/* Animated wave patterns */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-app-accent/30 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-transparent via-app-accent/20 to-transparent animate-pulse delay-300"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-app-accent/25 to-transparent animate-pulse delay-700"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div 
          ref={containerRef}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6" style={{ color: "#0000FF" }}>
              Investment Network
            </h2>
          </div>

          {/* Main Content Container */}
          <div className="glass-effect rounded-2xl p-8 lg:p-12 mb-16 relative group hover:shadow-[0_0_40px_rgba(192,192,192,0.15)] transition-all duration-500">
            {/* Glassmorphic glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-app-accent/5 via-transparent to-app-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Main Description */}
              <p className="font-body text-lg lg:text-xl text-text-secondary leading-relaxed text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
                AppEqual is an established Investment network that guides entrepreneurs to create compelling investment proposals that attract business angel investors
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button className="group relative bg-app-accent hover:bg-app-accent/90 text-app-primary font-display font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,192,192,0.4)] hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download PDF Guide
                </button>
                
                <button className="group relative bg-transparent border-2 border-app-accent text-app-accent hover:bg-app-accent hover:text-app-primary font-display font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(192,192,192,0.3)] hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center">
                  Contact for Investment Opportunities
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-app-secondary/50 backdrop-blur-sm rounded-xl p-6 hover:bg-app-secondary/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.1)]">
                    <div className="text-3xl lg:text-4xl font-display font-bold text-app-accent mb-2">500+</div>
                    <div className="text-text-secondary font-body">Investment Proposals</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-app-secondary/50 backdrop-blur-sm rounded-xl p-6 hover:bg-app-secondary/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.1)]">
                    <div className="text-3xl lg:text-4xl font-display font-bold text-app-accent mb-2">€50M+</div>
                    <div className="text-text-secondary font-body">Successfully Raised</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-app-secondary/50 backdrop-blur-sm rounded-xl p-6 hover:bg-app-secondary/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.1)]">
                    <div className="text-3xl lg:text-4xl font-display font-bold text-app-accent mb-2">95%</div>
                    <div className="text-text-secondary font-body">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Investment Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect rounded-xl p-6 lg:p-8 group hover:shadow-[0_0_30px_rgba(192,192,192,0.1)] transition-all duration-500">
              <h3 className="font-display text-xl lg:text-2xl font-semibold mb-4" style={{ color: "#0000FF" }}>
                Angel Investor Network
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                Connect with our curated network of experienced business angels and venture capitalists ready to invest in promising startups and scale-ups.
              </p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 lg:p-8 group hover:shadow-[0_0_30px_rgba(192,192,192,0.1)] transition-all duration-500">
              <h3 className="font-display text-xl lg:text-2xl font-semibold mb-4" style={{ color: "#0000FF" }}>
                Investment Readiness
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                Our comprehensive program prepares entrepreneurs with pitch decks, financial models, and due diligence materials that impress investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}