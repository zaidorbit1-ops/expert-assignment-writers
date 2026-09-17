import React from 'react';
import UnifiedOrderForm from '../components/UnifiedOrderForm';
import PageCTA from '../components/PageCTA';
import { ArrowRight, TrendingUp, ShieldCheck, BarChart3, DollarSign, ShieldAlert, Users, Sparkles, Award, BookOpen } from 'lucide-react';

const financeAreas = [
  {
    title: 'Corporate Finance',
    description: 'Capital budgeting, valuation modeling and financial strategy papers built for UK business modules.',
    icon: <DollarSign size={22} />,
  },
  {
    title: 'Investment Analysis',
    description: 'Asset valuation, portfolio analysis and risk assessment reports with clear recommendations.',
    icon: <BarChart3 size={22} />,
  },
  {
    title: 'Portfolio Management',
    description: 'Optimisation, asset allocation and performance review papers for investment-focused coursework.',
    icon: <TrendingUp size={22} />,
  },
  {
    title: 'International Finance',
    description: 'Forex, international markets and cross-border capital flow assignments with global insight.',
    icon: <Users size={22} />,
  },
  {
    title: 'Derivatives',
    description: 'Pricing models, Black-Scholes analysis and hedging strategy reports for derivatives modules.',
    icon: <ShieldAlert size={22} />,
  },
  {
    title: 'Risk Management',
    description: 'VaR, stress testing and financial risk frameworks tailored to UK regulation and grading rubrics.',
    icon: <ShieldCheck size={22} />,
  },
];

const faqs = [
  {
    question: 'Can you handle quantitative finance models like CAPM and VaR?',
    answer: 'Yes, our finance team writes models, calculates ratios and explains results clearly for your assignment and presentation needs.',
  },
  {
    question: 'Do you support Excel-based financial statements and charts?',
    answer: 'We deliver assignment-ready Excel outputs, tables and charts alongside the written analysis when required.',
  },
  {
    question: 'How do revisions work for finance dissertation chapters?',
    answer: 'We offer free revisions to ensure your analysis matches the module rubric and tutor feedback before final submission.',
  },
];

const FinanceAssignment = () => {
  return (
    <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-700">
              <Sparkles size={14} /> Finance Precision for UK Students
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-3xl">
              Master Complex Finance Concepts with Expert Precision
            </h1>
            <p className="text-body-lg text-primary-700 max-w-2xl leading-relaxed">
              From portfolio optimization to corporate finance analysis, our finance specialists turn technical research into polished assignments that meet top-tier UK grading criteria.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <Award size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">15,000+ Students Supported</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <BookOpen size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">Trusted by UK Universities</p>
              </div>
            </div>
          </div>

          <UnifiedOrderForm defaultSubject="Finance" variant="inline" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-secondary-700 mb-8">Specialized Finance Disciplines</p>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {financeAreas.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-slate-50 border border-primary-100 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary-700/10 text-secondary-700 mb-5 transition-all duration-300 group-hover:bg-secondary-700 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-primary-900 mb-3">{item.title}</h3>
                <p className="text-body-sm text-primary-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="rounded-[2rem] bg-slate-900 p-10 shadow-soft border border-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-400 mb-4">The Quantitative Edge</p>
            <h2 className="font-display text-headline-lg text-white mb-4">We build finance assignments that score in both analysis and structure.</h2>
            <p className="text-body-lg text-slate-300 leading-relaxed max-w-xl">
              Our writers deliver models, charts and explanations together so your submission reads professionally and demonstrates deep financial insight.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Bloomberg Terminal', 'Python & R', 'Advanced Excel/VBA', 'DATA & EViews'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-all duration-300 hover:bg-white/10">
                  <span className="h-2 w-2 rounded-full bg-secondary-700" /> {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-soft border border-white/10">
            <img
              src="https://image.cnbcfm.com/api/v1/image/107222590-1681142311702-happy-students-using-laptop-with-their-computer-sc-2022-11-23-18-00-58-utc.jpg?v=1681410543&w=1600&h=900"
              alt="Finance terminal dashboard"
              className="w-full h-full object-cover min-h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="font-semibold text-primary-900">PhD Finance Experts</h3>
            <p className="mt-3 text-body-sm text-primary-700">Specialist writers from LSE, Oxford and Warwick with deep finance research backgrounds.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="font-semibold text-primary-900">100% Plagiarism Free</h3>
            <p className="mt-3 text-body-sm text-primary-700">We provide Turnitin reports with every finance assignment to ensure originality and academic safety.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="font-semibold text-primary-900">24/7 Academic Support</h3>
            <p className="mt-3 text-body-sm text-primary-700">Our finance writing team is available around the clock for urgent assignments and exam season deadlines.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Distinction Stories from Top UK Universities</p>
          <h2 className="font-display text-headline-lg text-primary-900 mt-4">High-achieving finance students trust our finance expertise.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              name: 'Emily Carter',
              role: 'MSc Finance, Imperial College London',
              quote: 'The derivatives assignment was handled with precision and my professor praised the clarity of the calculations.',
            },
            {
              name: 'Oliver Reid',
              role: 'BSc Economics, University of Manchester',
              quote: 'I got a first for my portfolio management report thanks to the strong Excel models and investment logic they delivered.',
            },
            {
              name: 'Mia Patel',
              role: 'MSc Accounting & Finance, LSE',
              quote: 'Professional service and fast delivery. The valuation report was perfect for my module requirements.',
            },
          ].map((item) => (
            <div key={item.name} className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-body-sm text-primary-700 leading-relaxed mb-6">“{item.quote}”</p>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">
                  <Users size={20} />
                </span>
                <div>
                  <p className="font-semibold text-primary-900">{item.name}</p>
                  <p className="text-sm text-primary-700">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Finance Help FAQs</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Common questions from finance students</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-3xl border border-primary-100 p-6 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <summary className="cursor-pointer list-none text-body-md font-semibold text-primary-900">{item.question}</summary>
                <p className="mt-4 text-body-sm text-primary-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
};

export default FinanceAssignment;
