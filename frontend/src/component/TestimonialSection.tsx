import React from 'react';

const testimonials = [
  {
    name: "Aarav Patel",
    role: "Frequent Traveler",
    quote: "This app saved me hours of planning. The stopover suggestions are a game changer!"
  },
  {
    name: "Meera Sharma",
    role: "Business Consultant",
    quote: "Impressed with how accurate and seamless the trip planning is. Highly recommended."
  },
  {
    name: "Ravi Kumar",
    role: "Travel Blogger",
    quote: "I used it on a cross-country trip — clean UI, fast, and surprisingly intuitive."
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
            <span className="text-sm text-gray-500">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
