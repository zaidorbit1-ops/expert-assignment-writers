import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Reveal from './Reveal';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah J.',
      university: "King's College London",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: 'The nursing assignment was absolutely flawless. The references were accurate and it followed the NHS guidelines perfectly. I secured a distinction! The writer clearly understood the subject matter deeply.',
    },
    {
      name: 'David L.',
      university: 'University of Manchester',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: "I was struggling with my Finance dissertation. The expert matched with me was incredibly knowledgeable in corporate governance and financial modeling. They delivered 2 days early! Highly recommended for postgraduate work.",
    },
    {
      name: 'Emma W.',
      university: 'LSE',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      text: 'Expert Writers literally saved my final semester. The delivery was 2 days early, giving me plenty of time to review. The quality of writing is absolutely superior to anything else I found online. Worth every penny!',
    },
    {
      name: 'James M.',
      university: 'University of Oxford',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      text: 'My Law assignment on contract interpretation was handled brilliantly. The analysis was comprehensive, cases were properly cited, and the arguments were compelling. Got a First! The communication with my writer was excellent throughout.',
    },
    {
      name: 'Priya K.',
      university: 'UCL',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1525134479888-b7a4911e08b1?w=100&h=100&fit=crop',
      text: 'As an international student, I was worried about academic standards in the UK. This service gave me confidence. The assignment quality was exceptional, and I learned so much from reading the work. Highly professional team!',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-section-padding bg-primary-50">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header with Navigation */}
        <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="font-display text-headline-lg text-primary-900">
              Student Success Stories
            </h2>
            <p className="text-body-lg font-body text-primary-700 mt-2">
              Join thousands of UK students who achieved academic excellence with our expert help.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-primary-900 flex items-center justify-center hover:bg-primary-900 hover:text-white transition-all hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-primary-900 flex items-center justify-center hover:bg-primary-900 hover:text-white transition-all hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {visibleTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, rotate: idx === 1 ? 0 : idx === 0 ? -0.5 : 0.5 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-white p-8 rounded-3xl border border-primary-200 shadow-soft hover:shadow-lg transition-all animate-slide-up hover:translate-y-[-4px]"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-secondary-700 text-secondary-700"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body-md font-body text-primary-900 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-200"
                />
                <div>
                  <h5 className="font-display font-semibold text-primary-900">
                    {testimonial.name}
                  </h5>
                  <p className="text-caption font-body text-primary-700">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
