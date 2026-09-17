import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, CheckCircle2, FileText, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f8f9fc] pt-28 pb-14 md:pt-36 md:pb-20">
      <motion.div aria-hidden="true" className="pointer-events-none absolute -left-32 top-28 h-72 w-72 rounded-full bg-secondary-200/50 blur-3xl" animate={{ x: [0, 35, 0], y: [0, 24, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-primary-100/80 blur-3xl" animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:px-14">
        <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="relative z-10 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-800 shadow-sm"><Sparkles size={14} className="text-secondary-700" /> UK's trusted academic support</div>
          <h1 className="max-w-xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary-950 sm:text-6xl">Professional Assignment Writing Help for <span className="text-secondary-700">UK Students.</span></h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-primary-700 sm:text-lg">Research-led assignment support from experienced academic writers, built around your subject, level and deadline.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('openPopup'))} className="group inline-flex items-center gap-3 rounded-xl bg-primary-900 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary-900/20 transition hover:-translate-y-1 hover:bg-primary-800">Start your brief <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary-700"><span className="flex -space-x-2"><span className="h-8 w-8 rounded-full border-2 border-white bg-secondary-400" /><span className="h-8 w-8 rounded-full border-2 border-white bg-primary-400" /><span className="h-8 w-8 rounded-full border-2 border-white bg-primary-700" /></span> 10k+ papers supported</div>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-primary-700"><span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-secondary-700" /> Original work</span><span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-secondary-700" /> UK experts</span><span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-secondary-700" /> On-time delivery</span></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }} className="relative min-h-[420px] sm:min-h-[520px]">
          <motion.div aria-hidden="true" className="absolute right-2 top-12 h-[78%] w-[78%] rounded-[3rem] bg-gradient-to-br from-primary-800 via-primary-600 to-secondary-500 shadow-2xl shadow-primary-900/20" animate={{ rotate: [3, 5, 3], scale: [1, 1.015, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
          <div className="absolute right-[9%] top-[6%] h-[78%] w-[76%] overflow-hidden rounded-[2.75rem] border-8 border-white/70 shadow-2xl sm:right-[12%] sm:w-[72%]">
            <img alt="Student working on academic research" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&h=1200&fit=crop" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
          </div>
          <motion.div whileHover={{ y: -6, scale: 1.03 }} className="absolute left-0 top-[22%] flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:left-2"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-100 text-secondary-800"><BookOpen size={19} /></span><span><strong className="block text-sm text-primary-950">Subject matched</strong><small className="text-xs text-primary-700">Expert support, your way</small></span></motion.div>
          <motion.div whileHover={{ y: -6, scale: 1.03 }} className="absolute bottom-[13%] right-0 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:right-2"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700"><FileText size={18} /></span><span><strong className="block text-sm text-primary-950">Brief received</strong><small className="flex items-center gap-1 text-xs text-secondary-800"><Star size={12} fill="currentColor" /> 4.9/5 rated</small></span></motion.div>
          <motion.div aria-hidden="true" className="absolute right-[4%] top-[2%] h-5 w-5 rounded-full bg-secondary-600" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div aria-hidden="true" className="absolute bottom-[4%] left-[16%] h-4 w-4 rounded-full bg-primary-500" animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
