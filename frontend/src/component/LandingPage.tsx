import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Plan Your Dream Trip Effortlessly
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Enter your destination and we’ll generate your entire trip plan, including distance, travel time, and ideal stopovers.
        </p>
        <a
          href="#trip-planner"
          className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;