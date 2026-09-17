import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is this service confidential?',
      answer:
        'Yes, absolutely. We use industry-standard 256-bit SSL encryption for all data. Your personal details are never shared with writers or any third party. Your work is completely private and yours alone. We also maintain strict confidentiality agreements with all team members.',
    },
    {
      question: 'How do I know the work is plagiarism-free?',
      answer:
        'We provide a comprehensive Turnitin similarity report with every assignment. Our writers create all content from scratch, adhering to strict academic integrity standards. If any plagiarism is detected, we offer a 100% money-back guarantee, no questions asked.',
    },
    {
      question: 'Can I speak with my writer?',
      answer:
        'Yes, we have a dedicated messaging portal where you can communicate directly with your assigned writer. You can provide updates, ask for clarifications, discuss amendments, and track progress in real-time throughout the writing process.',
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer:
        'We offer unlimited free revisions within 30 days of delivery. Our quality team checks all work before delivery, but if you need changes, we make them without hesitation. Your satisfaction is guaranteed or your money back.',
    },
    {
      question: 'How quickly can you complete an assignment?',
      answer:
        'We offer flexible deadlines from 24 hours to several weeks. Rush assignments (24-48 hours) are available at standard rates. We recommend 7-10 days for optimal quality, but we consistently deliver excellent work even on tight timelines.',
    },
    {
      question: 'What subjects do you cover?',
      answer:
        'Our PhD-qualified writers cover 100+ subjects including Business, Law, Nursing, Finance, Engineering, Psychology, History, Sociology, Marketing, HR, and many more. If your subject isn\'t listed, contact us to confirm availability.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-section-padding bg-white">
      <div className="max-w-3xl mx-auto px-margin-mobile">
        <Reveal><h2 className="font-display text-headline-lg text-primary-900 text-center mb-12">
          Frequently Asked Questions
        </h2></Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="border border-primary-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-primary-50 transition-all group"
              >
                <span className="font-display text-headline-sm text-primary-900">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-primary-900 transition-transform duration-300 group-hover:text-secondary-700 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-body-md font-body text-primary-700 border-t border-primary-200/50 bg-primary-50/50 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
