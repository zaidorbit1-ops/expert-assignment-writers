import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageCTA from '../components/PageCTA';
import { Briefcase, ShieldCheck, BookOpen, TrendingUp, ClipboardList, Stethoscope, Gavel, Cpu, DollarSign, ArrowRight, Headphones, Users } from 'lucide-react';

const services = [
  {
    icon: <Briefcase size={24} />,
    title: 'Business Management',
    description: 'Strategic analysis, leadership studies and market research papers delivered with corporate precision.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Accounting',
    description: 'Accurate financial reporting, audit assignments and tax research built for UK standards.',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Finance',
    description: 'Portfolio analysis, investment strategies and corporate finance work for high grades.',
  },
  {
    icon: <Gavel size={24} />,
    title: 'Law',
    description: 'Legal essays, case studies and jurisprudence research with rigorous citations.',
  },
  {
    icon: <Stethoscope size={24} />,
    title: 'Nursing',
    description: 'Clinical care plans, reflective practice and evidence-based nursing assignments.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Psychology',
    description: 'Behavioral research, cognitive theory essays and experimental analysis support.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Computer Science',
    description: 'Algorithm design, programming reports and system architecture papers backed by code.',
  },
  {
    icon: <ClipboardList size={24} />,
    title: 'Engineering',
    description: 'Technical reports, feasibility studies and design calculations for multiple disciplines.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Economics',
    description: 'Economic modeling, policy evaluation and macro/micro analysis tailored to UK modules.',
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Assignment Writing Services | Business, Law, Nursing, Finance & More</title>
        <meta name="description" content="Expert assignment writing services across 100+ subjects. Business, Law, Nursing, Finance, Engineering, and more. PhD writers, 100% original, plagiarism-free." />
        <meta name="keywords" content="assignment writing services, essay help, dissertation writing, professional writers, academic solutions" />
        <meta property="og:title" content="Assignment Writing Services | All Subjects" />
        <meta property="og:description" content="Get expert assignment help for 100+ subjects. Distinction-grade quality guaranteed." />
      </Helmet>
      <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="inline-flex rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-700 mb-6">
            Academic Excellence Redefined
          </span>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-4xl mx-auto">
            Tailored Academic Solutions for Every Discipline
          </h1>
          <p className="mt-5 text-body-lg text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Explore our range of professional assignment writing services designed to help you achieve academic excellence through scholarly rigor and modern efficiency.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <a href={
                service.title === 'Business Management' ? '/business-management' :
                service.title === 'Accounting' ? '/accounting-assignments' :
                service.title === 'Finance' ? '/finance-assignments' :
                service.title === 'Law' ? '/law-assignments' :
                service.title === 'Nursing' ? '/nursing-assignments' :
                service.title === 'Psychology' ? '/psychology-assignments' :
                service.title === 'Computer Science' ? '/computer-science-assignments' :
                service.title === 'Engineering' ? '/engineering-assignments' :
                service.title === 'Economics' ? '/economics-assignments' :
                '#'
              } className="block">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-900/5 text-primary-900 mb-6 transition-all duration-300 group-hover:bg-secondary-700 group-hover:text-white">
                  {service.icon}
                </div>
                <h2 className="font-display text-headline-sm text-primary-900 mb-3">{service.title}</h2>
                <p className="text-body-sm text-primary-700 leading-relaxed mb-6">{service.description}</p>
                <div className="inline-flex items-center gap-2 text-secondary-700 font-semibold transition-all hover:text-secondary-900">
                  Learn More <ArrowRight size={18} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/5 p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                <Users size={20} />
              </div>
              <h3 className="font-semibold text-white text-lg">PhD Experts</h3>
              <p className="mt-3 text-body-sm text-slate-300 leading-relaxed">
                Every assignment is handled by specialists with UK academic experience and advanced qualifications.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-semibold text-white text-lg">Plagiarism-Free</h3>
              <p className="mt-3 text-body-sm text-slate-300 leading-relaxed">
                Rigorous checks and original research ensure your paper is unique, authentic and citation-ready.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                <Headphones size={20} />
              </div>
              <h3 className="font-semibold text-white text-lg">24/7 Support</h3>
              <p className="mt-3 text-body-sm text-slate-300 leading-relaxed">
                Dedicated UK support and real-time updates throughout the assignment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
    </>
  );
};

export default Services;
