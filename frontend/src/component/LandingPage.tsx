import React from 'react';
 import road from '../assets/road.jpg'; // Make sure you have this image in your public or assets folder

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-black via-green-900 to-black text-white min-h-screen mt-8 px-4 w-full flex items-center justify-center">
    <div className="w-full  max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      {/* Left Side - Image */}
      <div className="w-full flex justify-center">
        <img
          src={road}
          alt="Road Trip"
          className="rounded-lg shadow-2xl w-full max-w-md object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="text-center md:text-left ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Plan Your Dream Trip Effortlessly
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Enter your destination and we’ll generate your entire trip plan, including distance, travel time, and ideal stopovers.
        </p>
        <a
          href="#trip-planner"
          className="inline-block bg-white text-green-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
