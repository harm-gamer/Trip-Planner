import React from 'react';
import { Route, BedDouble, TimerReset } from 'lucide-react';

const features = [
  {
    icon: <Route size={28} className="text-indigo-600" />,
    title: "Smart Routing",
    description: "We generate an optimal route from your current location to your destination."
  },
  {
    icon: <BedDouble size={28} className="text-indigo-600" />,
    title: "Overnight Stop Suggestions",
    description: "Get hotel or rest suggestions for long trips exceeding 24 hours."
  },
  {
    icon: <TimerReset size={28} className="text-indigo-600" />,
    title: "Real-Time Estimations",
    description: "Accurate distance and time calculations using Google Maps in real time."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">App Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition text-center">
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
