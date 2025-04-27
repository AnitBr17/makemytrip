import React from 'react';

const experiences = [
  {
    title: 'Luxury Spa & Wellness',
    description: 'Relax and rejuvenate at our world-class spa offering holistic treatments, massages, and wellness therapies.',
    image: 'https://images.pexels.com/photos/7615470/pexels-photo-7615470.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Gourmet Dining',
    description: 'Enjoy exquisite culinary experiences at our award-winning restaurants curated by top chefs.',
    image: 'https://images.pexels.com/photos/2618787/pexels-photo-2618787.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'City Tours & Adventures',
    description: 'Explore the vibrant city life with personalized guided tours, cultural excursions, and outdoor adventures.',
    image: 'https://images.pexels.com/photos/31733332/pexels-photo-31733332/free-photo-of-stunning-seaside-resort-with-water-park-view.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Private Beach Access',
    description: 'Experience serenity with our exclusive private beach access, complete with personalized services and cabanas.',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
];

const Experiences = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 mt-20">
      <h1 className="font-playfair text-4xl md:text-5xl mb-2 text-center text-gray-800">
        UrbanNights  Experiences
      </h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h2>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;