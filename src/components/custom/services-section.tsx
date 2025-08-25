"use client";

import React from 'react';

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to secure, scale, and optimize your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Digital Infrastructure</h3>
            <p className="text-gray-600">Cloud-native architecture and scalable solutions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cyber Security</h3>
            <p className="text-gray-600">Advanced threat protection and monitoring.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Financial Compliance</h3>
            <p className="text-gray-600">Regulatory compliance and risk management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};