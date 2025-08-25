import { ServicesSection } from "@/components/custom/services-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            AppEqual
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for digital transformation. We provide comprehensive technology solutions 
            to secure, scale, and optimize your business operations with cutting-edge innovation.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Join hundreds of companies that trust AppEqual for their digital transformation journey.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}