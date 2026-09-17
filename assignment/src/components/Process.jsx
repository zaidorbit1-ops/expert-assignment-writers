import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, CheckSquare, Download } from 'lucide-react';
import Reveal from './Reveal';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: <FileText size={32} />,
      title: 'Submit Order',
      description: 'Fill our simple form with your assignment requirements, deadline, and specific guidelines.',
    },
    {
      number: '02',
      icon: <Users size={32} />,
      title: 'Expert Matched',
      description: 'A subject-matter expert is carefully matched to your assignment based on their specialization.',
    },
    {
      number: '03',
      icon: <CheckSquare size={32} />,
      title: 'Quality Check',
      description: 'Your work undergoes rigorous plagiarism and grammar audits to ensure excellence.',
    },
    {
      number: '04',
      icon: <Download size={32} />,
      title: 'Final Delivery',
      description: 'Download your polished, academic-ready paper with full Turnitin report included.',
    },
  ];

  return (
    <section id="process" className="py-section-padding bg-white">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal><h2 className="font-display text-headline-lg text-primary-900 text-center mb-16">
          Simple 4-Step Process
        </h2></Reveal>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-primary-200 -translate-y-1/2 -z-0"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Circle Number */}
                <div className="w-16 h-16 bg-white border-4 border-primary-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <span className="text-headline-sm font-display font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4 text-primary-900 group-hover:text-secondary-700 transition-all opacity-0 group-hover:opacity-100">
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="font-display text-headline-sm text-primary-900 mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-body-sm font-body text-primary-700">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
