import React from 'react';
import { MapPinned, Clock, Hotel } from 'lucide-react';

const steps = [
  {
    icon: <MapPinned size={32} className="text-blue-600" />,
    title: "Enter Your Destination",
    description: "Tell us where you want to go, and we’ll plan the route from your location."
  },
  {
    icon: <Clock size={32} className="text-blue-600" />,
    title: "Get Trip Duration",
    description: "We calculate the exact travel time and distance using Google Maps APIs."
  },
  {
    icon: <Hotel size={32} className="text-blue-600" />,
    title: "Find Stopovers",
    description: "If your trip is over 24 hours, we’ll suggest ideal stopover points to rest."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
