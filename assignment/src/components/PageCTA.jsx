import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Reveal from './Reveal';

const PageCTA = () => {
  return (
    <section className="bg-primary-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal><motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 24 }} className="rounded-[2rem] bg-gradient-to-r from-[#0a1c3a] via-primary-950 to-[#0d2340] border border-white/10 shadow-2xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.15),_transparent_30%),_radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_25%),_linear-gradient(180deg,_rgba(255,255,255,0.02),_transparent)]"></div>
          <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">
            <div className="space-y-6 flex-1">
              <h2 className="font-display text-display-lg-mobile md:text-display-lg text-white leading-tight max-w-xl">
                Need Expert Assignment Help Today?
              </h2>
              <p className="max-w-2xl text-body-lg text-primary-100 leading-relaxed">
                Don't let deadline stress affect your mental health. Let our professionals handle the heavy lifting while you focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openPopup'))}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition w-full sm:w-auto"
                >
                  Order Now
                  <ArrowRight size={16} />
                </button>
                <a 
                  href="https://wa.me/447476950970"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:from-green-600 hover:to-green-700 transition w-full sm:w-auto"
                >
                  <FaWhatsapp size={16} /> WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </motion.div></Reveal>
      </div>
    </section>
  );
};

export default PageCTA;
