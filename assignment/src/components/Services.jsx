import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Stethoscope, Gavel, PiggyBank, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const Services = () => {
  const services = [
    {
      icon: <Briefcase size={32} />,
      title: 'Business Management',
      description:
        'Strategic planning, marketing models, HRM papers, and business case studies written to distinction level. Our experts have real-world industry experience.',
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'Nursing & Healthcare',
      description:
        'Evidence-based practice papers and clinical case studies following NHS guidelines. All assignments meet regulatory compliance standards.',
    },
    {
      icon: <Gavel size={32} />,
      title: 'Law',
      description:
        'Comprehensive legal research and case analysis for UK and International law. We cover contract law, criminal law, and corporate law.',
    },
    {
      icon: <PiggyBank size={32} />,
      title: 'Finance & Accounting',
      description:
        'Complex financial modeling, auditing assignments, and corporate accounting. Perfect for ACCA, CPA, and MBA level work.',
    },
  ];

  return (
    <section id="services" className="py-section-padding bg-white">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header */}
        <Reveal className="text-center mb-16 space-y-4">
          <h2 className="font-display text-headline-lg text-primary-900">
            Expertise Across All Disciplines
          </h2>
          <p className="text-body-lg font-body text-primary-700 max-w-2xl mx-auto">
            From complex medical papers to strategic business analyses, our PhD-qualified writers cover 100+ subjects with proven track records of academic excellence.
          </p>
        </Reveal>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="bg-white p-8 rounded-3xl border border-primary-100 shadow-soft hover:shadow-lg transition-all group hover:translate-y-[-4px] duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary-900/10 flex items-center justify-center mb-6 text-primary-900 group-hover:bg-secondary-700 group-hover:text-white transition-all">
                {service.icon}
              </div>

              {/* Title */}
              <h4 className="font-display text-headline-sm text-primary-900 mb-3">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-body-sm font-body text-primary-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="text-primary-900 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-secondary-700"
              >
                Learn More{' '}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
