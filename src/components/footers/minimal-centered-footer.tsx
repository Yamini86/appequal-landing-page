"use client";

import { ArrowUpRight, Linkedin, Twitter, Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MinimalCenteredFooter = () => {
  const footerRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const navigation = [
    { name: "Local Call", href: "#" },
    { name: "Raithanna", href: "#" },
    { name: "Truehunt", href: "#" },
    { name: "Vidyardi", href: "#" },
    { name: "Gatedplus", href: "#" },
    { name: "Wingig", href: "#" },
    { name: "Myfish", href: "#" },
  ];

  const social = [
    { name: "LinkedIn", href: "https://linkedin.com/company/appequal", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/appequal", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/appequal", icon: Instagram },
  ];

  useEffect(() => {
    // Fade-in animation
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }

    // 3D rotation effects on hover
    buttonRefs.current.forEach((button) => {
      if (button) {
        const handleMouseEnter = () => {
          gsap.to(button, {
            rotationY: 15,
            rotationX: 5,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          button.removeEventListener("mouseenter", handleMouseEnter);
          button.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });
  }, []);

  return (
    <section 
      ref={footerRef}
      className="bg-black flex flex-col items-center gap-8 py-16 md:py-24 lg:py-32"
    >
      <nav className="container mx-auto flex flex-col items-center gap-6">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {navigation.map((item, index) => (
            <li key={item.name}>
              <a
                ref={(el) => (buttonRefs.current[index] = el)}
                href={item.href}
                className="glass-effect px-4 py-2 rounded-lg text-[#C0C0C0] font-medium font-[var(--font-body)] transition-all duration-300 hover:glow-effect hover:text-white backdrop-blur-md border border-[rgba(192,192,192,0.2)] text-sm md:text-base"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {social.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={item.name}>
                <a
                  ref={(el) => (buttonRefs.current[navigation.length + index] = el)}
                  href={item.href}
                  className="glass-effect px-4 py-2 rounded-lg text-[#C0C0C0] font-medium font-[var(--font-body)] transition-all duration-300 hover:glow-effect hover:text-white backdrop-blur-md border border-[rgba(192,192,192,0.2)] flex items-center gap-2 text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent className="size-4" />
                  {item.name}
                  <ArrowUpRight className="size-3" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="text-center space-y-3 mt-4">
          <p className="text-xs md:text-sm text-[#C0C0C0] font-[var(--font-body)]">
            Last Updated: August 21, 2025, 11:36 AM IST
          </p>
          <p className="text-xs md:text-sm text-[#C0C0C0] font-[var(--font-body)]">
            © 2025 AppEqual. All rights reserved.
          </p>
        </div>
      </nav>
    </section>
  );
};

export { MinimalCenteredFooter };