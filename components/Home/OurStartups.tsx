"use client";

import React from "react";

const OurStartups = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-16 text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/tech-bg.jpg')] bg-cover bg-center"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Startups
        </h2>

        <p className="text-lg md:text-xl font-medium mb-4">
          Digital solutions we have built for ourselves and our customers
        </p>

        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
          We develop AI-based solutions for corporate & startups. From strategy
          to execution, we guide our clients through their next digital
          transformation leveraging technologies like Data Analytics, Natural
          Language Processing, Computer Vision, Machine Learning, Deep Learning
          & IoT.
        </p>
      </div>
    </section>
  );
};

export default OurStartups;