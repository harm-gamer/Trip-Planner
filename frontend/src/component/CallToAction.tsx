import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="bg-indigo-600 text-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to plan your next trip?</h2>
        <p className="text-lg md:text-xl mb-6">
          Enter your destination and let us handle the rest — distance, route, and rest stops included.
        </p>
        <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl">
          Start Planning Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
