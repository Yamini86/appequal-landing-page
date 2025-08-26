"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Download, Smartphone, Monitor, Tablet, Star, Users, TrendingUp } from "lucide-react";

interface TechnologyBadge {
  name: string;
  color: string;
}

interface AppStoreLink {
  platform: "ios" | "android" | "web";
  url: string;
}

interface PortfolioApp {
  id: string;
  title: string;
  description: string;
  category: "mobile" | "web" | "desktop";
  screenshots: string[];
  deviceType: "phone" | "tablet" | "desktop";
  technologies: TechnologyBadge[];
  appStoreLinks: AppStoreLink[];
  demoUrl?: string;
  stats?: {
    downloads?: string;
    rating?: number;
    users?: string;
  };
  featured?: boolean;
}

const portfolioApps: PortfolioApp[] = [
  {
    id: "1",
    title: "AppEqual Mobile",
    description: "Revolutionary mobile app for digital equality and accessibility. Features AI-powered assistance and inclusive design patterns.",
    category: "mobile",
    deviceType: "phone",
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop",
    ],
    technologies: [
      { name: "React Native", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "AI/ML", color: "bg-purple-500" },
      { name: "Firebase", color: "bg-orange-500" },
    ],
    appStoreLinks: [
      { platform: "ios", url: "#" },
      { platform: "android", url: "#" },
    ],
    stats: {
      downloads: "100K+",
      rating: 4.8,
      users: "50K+",
    },
    featured: true,
  },
  {
    id: "2",
    title: "AppEqual Dashboard",
    description: "Comprehensive web dashboard for managing digital equality initiatives and tracking accessibility metrics across organizations.",
    category: "web",
    deviceType: "desktop",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    ],
    technologies: [
      { name: "Next.js", color: "bg-black" },
      { name: "React", color: "bg-cyan-500" },
      { name: "Tailwind", color: "bg-teal-500" },
      { name: "Node.js", color: "bg-green-600" },
    ],
    appStoreLinks: [
      { platform: "web", url: "#" },
    ],
    demoUrl: "#",
    stats: {
      users: "10K+",
      rating: 4.9,
    },
  },
  {
    id: "3",
    title: "AppEqual Analytics",
    description: "Advanced analytics platform for measuring digital inclusion impact with real-time insights and reporting.",
    category: "web",
    deviceType: "tablet",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
    ],
    technologies: [
      { name: "Vue.js", color: "bg-green-500" },
      { name: "D3.js", color: "bg-orange-600" },
      { name: "Python", color: "bg-yellow-500" },
      { name: "PostgreSQL", color: "bg-blue-700" },
    ],
    appStoreLinks: [
      { platform: "web", url: "#" },
    ],
    demoUrl: "#",
    stats: {
      users: "5K+",
      rating: 4.7,
    },
  },
];

const DeviceFrame: React.FC<{ 
  deviceType: "phone" | "tablet" | "desktop"; 
  screenshot: string; 
  alt: string;
}> = ({ deviceType, screenshot, alt }) => {
  if (deviceType === "phone") {
    return (
      <div className="relative mx-auto">
        <div className="relative w-64 h-[500px] bg-gray-900 rounded-[2rem] p-4 shadow-2xl">
          <div className="w-full h-full bg-black rounded-[1.5rem] overflow-hidden">
            <img 
              src={screenshot} 
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (deviceType === "tablet") {
    return (
      <div className="relative mx-auto">
        <div className="relative w-80 h-[500px] bg-gray-900 rounded-3xl p-6 shadow-2xl">
          <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
            <img 
              src={screenshot} 
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-800 rounded-full border-2 border-gray-700"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto">
      <div className="relative w-96 h-64 bg-gray-900 rounded-lg p-2 shadow-2xl">
        <div className="w-full h-full bg-black rounded overflow-hidden">
          <img 
            src={screenshot} 
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-t-lg"></div>
      </div>
    </div>
  );
};

const AppStoreButton: React.FC<{ link: AppStoreLink }> = ({ link }) => {
  const getButtonContent = () => {
    switch (link.platform) {
      case "ios":
        return (
          <div className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="w-6 h-6 bg-white rounded text-black flex items-center justify-center text-xs font-bold">
              
            </div>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </div>
        );
      case "android":
        return (
          <div className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            <div className="w-6 h-6 bg-white rounded text-green-600 flex items-center justify-center text-xs font-bold">
              ▶
            </div>
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </div>
        );
      case "web":
        return (
          <div className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm font-semibold">Launch App</span>
          </div>
        );
    }
  };

  return (
    <motion.a
      href={link.url}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      {getButtonContent()}
    </motion.a>
  );
};

const AppCard: React.FC<{ app: PortfolioApp; isActive: boolean }> = ({ app, isActive }) => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % app.screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + app.screenshots.length) % app.screenshots.length);
  };

  const deviceIcon = {
    phone: Smartphone,
    tablet: Tablet,
    desktop: Monitor,
  };

  const Icon = deviceIcon[app.deviceType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
        isActive ? "ring-2 ring-blue-500" : ""
      }`}
    >
      {app.featured && (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
          Featured App
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Icon className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{app.title}</h3>
              <p className="text-sm text-gray-500 capitalize">{app.category} App</p>
            </div>
          </div>
          {app.stats?.rating && (
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">{app.stats.rating}</span>
            </div>
          )}
        </div>

        <div className="relative mb-6">
          <div className="flex justify-center mb-4">
            <DeviceFrame
              deviceType={app.deviceType}
              screenshot={app.screenshots[currentScreenshot]}
              alt={`${app.title} screenshot ${currentScreenshot + 1}`}
            />
          </div>

          {app.screenshots.length > 1 && (
            <div className="flex justify-center space-x-2">
              <button
                onClick={prevScreenshot}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex space-x-1 items-center">
                {app.screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreenshot(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentScreenshot ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextScreenshot}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{app.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {app.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`${tech.color} text-white text-xs px-3 py-1 rounded-full font-medium`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>

        {app.stats && (
          <div className="mb-4 grid grid-cols-3 gap-4 text-center">
            {app.stats.downloads && (
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Download className="w-4 h-4 text-green-500 mr-1" />
                </div>
                <div className="text-lg font-bold text-gray-900">{app.stats.downloads}</div>
                <div className="text-xs text-gray-500">Downloads</div>
              </div>
            )}
            {app.stats.users && (
              <div>
                <div className="flex items-center justify-center mb-1">
                  <Users className="w-4 h-4 text-blue-500 mr-1" />
                </div>
                <div className="text-lg font-bold text-gray-900">{app.stats.users}</div>
                <div className="text-xs text-gray-500">Active Users</div>
              </div>
            )}
            {app.stats.rating && (
              <div>
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="w-4 h-4 text-purple-500 mr-1" />
                </div>
                <div className="text-lg font-bold text-gray-900">{app.stats.rating}</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {app.appStoreLinks.map((link, index) => (
            <AppStoreButton key={index} link={link} />
          ))}
          {app.demoUrl && (
            <motion.a
              href={app.demoUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-semibold">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioApplications() {
  const [activeApp, setActiveApp] = useState(0);

  const nextApp = () => {
    setActiveApp((prev) => (prev + 1) % portfolioApps.length);
  };

  const prevApp = () => {
    setActiveApp((prev) => (prev - 1 + portfolioApps.length) % portfolioApps.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative digital products designed to promote equality, 
            accessibility, and inclusive technology solutions across platforms.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Carousel */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeApp * 100}%)` }}
              >
                {portfolioApps.map((app, index) => (
                  <div key={app.id} className="w-full flex-shrink-0 px-4">
                    <AppCard app={app} isActive={index === activeApp} />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevApp}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {portfolioApps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveApp(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeApp ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextApp}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Grid */}
          <div className="lg:hidden grid gap-8 md:grid-cols-2">
            {portfolioApps.map((app, index) => (
              <AppCard key={app.id} app={app} isActive={true} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's collaborate on your next digital equality initiative. 
            From concept to deployment, we're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}