"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NAV_ITEMS = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Solutions", link: "#solutions" },
  { name: "Apps", link: "#apps" },
  { name: "Investment", link: "#investment" },
  { name: "Contact", link: "#contact" },
];

const AnimatedIndicatorNavbar = () => {
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0].name);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  const handleNavClick = (item: { name: string; link: string }) => {
    setActiveItem(item.name);
    if (item.link.startsWith('#')) {
      // Special handling for Apps -> Portfolio
      if (item.name === 'Apps') {
        const portfolioElement = document.querySelector('#apps');
        if (portfolioElement) {
          portfolioElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        const element = document.querySelector(item.link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="fixed top-0 left-0 right-0 z-50 py-4">
      <nav className="container mx-auto flex items-center justify-between glass-effect rounded-2xl px-6 py-3">
        {/* Left WordMark */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-lg font-[var(--font-display)] font-semibold tracking-tighter text-[#C0C0C0]">
            AppEqual
          </span>
        </a>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="rounded-4xl flex items-center gap-6 px-8 py-3 glass-effect"
          >
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.name}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    data-nav-item={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`relative cursor-pointer text-sm font-medium hover:bg-transparent transition-all duration-300 ${
                      activeItem === item.name
                        ? "text-[#C0C0C0] drop-shadow-[0_0_8px_rgba(192,192,192,0.6)]"
                        : "text-[#C0C0C0] hover:text-[#C0C0C0] hover:drop-shadow-[0_0_8px_rgba(47,58,68,0.8)]"
                    }`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </React.Fragment>
            ))}
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="bg-[#C0C0C0] h-0.5 w-full rounded-t-none transition-all duration-300 drop-shadow-[0_0_4px_rgba(192,192,192,0.6)]" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Popover */}
        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} handleNavClick={handleNavClick} />

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="outline"
            size="sm"
            className="h-10 py-2.5 text-sm font-normal glass-effect border-[#C0C0C0]/20 text-[#C0C0C0] hover:bg-[#C0C0C0]/10 hover:text-[#C0C0C0] hover:drop-shadow-[0_0_8px_rgba(47,58,68,0.8)] transition-all duration-300"
          >
            Signup
          </Button>
        </div>
      </nav>
    </section>
  );
};

export { AnimatedIndicatorNavbar };

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative h-6 w-6">
      <div className="absolute inset-0">
        <Menu
          className={`text-[#C0C0C0] group-hover:text-[#C0C0C0] group-hover:drop-shadow-[0_0_8px_rgba(47,58,68,0.8)] absolute transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`text-[#C0C0C0] group-hover:text-[#C0C0C0] group-hover:drop-shadow-[0_0_8px_rgba(47,58,68,0.8)] absolute transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const MobileNav = ({
  activeItem,
  setActiveItem,
  handleNavClick,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
  handleNavClick: (item: { name: string; link: string }) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <AnimatedHamburger isOpen={isOpen} />
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -left-4 -top-4 block w-screen max-w-md overflow-hidden rounded-xl p-0 lg:hidden glass-effect border-[#C0C0C0]/20"
        >
          <ul className="glass-effect text-[#C0C0C0] w-full py-4">
            {NAV_ITEMS.map((navItem, idx) => (
              <li key={idx}>
                <a
                  href={navItem.link}
                  onClick={() => {
                    handleNavClick(navItem);
                    setIsOpen(false);
                  }}
                  className={`text-[#C0C0C0] flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-300 ${
                    activeItem === navItem.name
                      ? "border-[#C0C0C0] text-[#C0C0C0] drop-shadow-[0_0_8px_rgba(192,192,192,0.6)]"
                      : "text-[#C0C0C0] hover:text-[#C0C0C0] hover:drop-shadow-[0_0_8px_rgba(47,58,68,0.8)] border-transparent"
                  }`}
                >
                  {navItem.name}
                </a>
              </li>
            ))}
            <li className="flex flex-col px-7 py-2">
              <Button variant="secondary" className="glass-effect border-[#C0C0C0]/20 text-[#C0C0C0] hover:bg-[#C0C0C0]/10 hover:text-[#C0C0C0]">Sign Up</Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};