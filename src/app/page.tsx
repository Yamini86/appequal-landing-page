import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar"
import HeroSection from "@/components/custom/hero-section"
import AboutSection from "@/components/custom/about-section"
import ServicesSection from "@/components/custom/services-section"
import ProjectsSection from "@/components/custom/projects-section"
import PortfolioApps from "@/components/custom/portfolio-apps"
import InvestmentSection from "@/components/custom/investment-section"
import ContactSection from "@/components/custom/contact-section"
import { Footer } from "@/components/footers/futuristic-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnimatedIndicatorNavbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PortfolioApps />
      <InvestmentSection />
      <ContactSection />
      <Footer />
    </main>
  )
}