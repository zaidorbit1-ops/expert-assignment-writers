import React from 'react';
import Reveal from './Reveal';

const TrustBar = () => {
  const universities = [
    'OXFORD',
    'LSE',
    'UCL',
    'CAMBRIDGE',
    'MANCHESTER',
  ];

  return (
    <section className="py-12 border-y border-primary-200/20 bg-white">
      <Reveal className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <p className="text-label-md font-label-md text-primary-700 uppercase tracking-widest mb-8">
          Trusted by Students from Top UK Universities
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {universities.map((uni) => (
            <span
              key={uni}
              className="text-headline-md font-display font-bold text-primary-900 hover:text-secondary-700 hover:scale-110 transition-all"
            >
              {uni}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default TrustBar;
