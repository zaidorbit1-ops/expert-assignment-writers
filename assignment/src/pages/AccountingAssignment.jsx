import React from 'react';
import { Helmet } from 'react-helmet-async';
import UnifiedOrderForm from '../components/UnifiedOrderForm';
import PageCTA from '../components/PageCTA';
import { ArrowRight, ClipboardList, BookOpen, ShieldCheck, CheckCircle, Clock, Users, Activity, DollarSign, ShieldAlert, Sparkles } from 'lucide-react';

const specialties = [
  {
    title: 'Financial Accounting',
    description: 'Double-entry bookkeeping, cash flow statements and management accounts with UK standards.',
    icon: <ClipboardList size={24} />,
  },
  {
    title: 'Forensic Accounting',
    description: 'Fraud detection, investigative reports and litigation support for dispute-ready submissions.',
    icon: <ShieldAlert size={24} />,
  },
  {
    title: 'Management Accounting',
    description: 'Budgeting, forecasting and performance analysis for business reports and case studies.',
    icon: <Activity size={24} />,
  },
  {
    title: 'Taxation',
    description: 'UK tax planning, VAT compliance and corporate tax reports written to current legislation.',
    icon: <DollarSign size={24} />,
  },
  {
    title: 'Auditing',
    description: 'Internal control reviews, audit planning and assurance reports with practical clarity.',
    icon: <ShieldCheck size={24} />,
  },
  {
    title: 'Corporate Finance',
    description: 'Valuation, capital structure and investment appraisal papers for finance-focused modules.',
    icon: <BookOpen size={24} />,
  },
];

const faqs = [
  {
    question: 'How quickly can you complete an accounting assignment?',
    answer: 'Our team can deliver urgent accounting assignments within 24 hours while maintaining quality, provided the brief and supporting data are clear.',
  },
  {
    question: 'Do you offer UK-specific tax and audit support?',
    answer: 'Yes, our writers are familiar with UK tax law, audit standards and financial reporting regulations for universities and professional pathways.',
  },
  {
    question: 'Can I request revisions after submission?',
    answer: 'Absolutely. We include free revisions so your accounting report or dissertation matches your tutor’s comments and the module rubric.',
  },
];

const AccountingAssignment = () => {
  return (
    <>
      <Helmet>
        <title>Accounting Assignment Help | Expert Writers UK | 98% Distinction Rate</title>
        <meta name="description" content="Get professional accounting assignment help from PhD-qualified experts. 98.2% distinction rate, plagiarism-free work, and 24/7 support for UK students." />
        <meta name="keywords" content="accounting assignment help, financial accounting, management accounting, bookkeeping, UK assignment writers" />
        <meta property="og:title" content="Accounting Assignment Help | Expert Assignment Writers" />
        <meta property="og:description" content="Master your accounting assignments with expert help. Distinction-grade quality guaranteed." />
      </Helmet>
      <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-700">
              <Sparkles size={14} /> 98.2% Distinction Rate for 2024
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-3xl">
              Master Your Numbers with Expert Accounting Assignment Help
            </h1>
            <p className="text-body-lg text-primary-700 max-w-2xl leading-relaxed">
              Struggling with balance sheets, tax reports or management accounting? Our UK accounting experts deliver polished assignments that follow professional frameworks and secure top grades.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <Clock size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">3-Hour Rapid Delivery</p>
                <p className="mt-2 text-body-sm text-primary-700">Fast turnarounds for urgent finance and audit briefs.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <CheckCircle size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">100% Free Turnitin Reports</p>
                <p className="mt-2 text-body-sm text-primary-700">Plagiarism-free accounting solutions that pass checks.</p>
              </div>
            </div>
          </div>

          <UnifiedOrderForm defaultSubject="Accounting" variant="inline" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-secondary-700 mb-8">Specialized Accounting Jurisdictions</p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {specialties.map((item) => (
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

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-soft border border-primary-100">
            <img
              src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=1200&q=80"
              alt="Accountant working on laptop"
              className="w-full h-full object-cover min-h-[420px]"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">The Gold Standard of Accuracy</p>
            <h2 className="font-display text-headline-lg text-primary-900">Precision-led accounting help that delivers a distinction.</h2>
            <p className="text-body-lg text-primary-700 leading-relaxed max-w-xl">
              In accounting, one decimal point can change a grade. We combine expert financial analysis with strict UK academic formatting so your assignments are accurate, compliant and ready for submission.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-primary-900">Certified Practitioners Only</h3>
                <p className="mt-2 text-body-sm text-primary-700">Assignments handled by writers with ACCA, CIMA and UK accounting qualifications.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-primary-900">Zero-Error Calculation Policy</h3>
                <p className="mt-2 text-body-sm text-primary-700">Every numerical table and ratio is checked twice to ensure balance and accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Success Stories</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Trusted by accounting students across the UK</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                quote: 'The forensic accounting assignment was so detailed and clear that I submitted with confidence. Every ratio and journal entry was perfect.',
                name: 'Sarah Jenkins',
                subtitle: 'LLM Accounting & Finance',
              },
              {
                quote: 'My audit report hit every requirement and the feedback was excellent. The team understood UK accounting standards well.',
                name: 'David Thompson',
                subtitle: 'University of Manchester',
              },
              {
                quote: 'The taxation module paper was flawless. They explained VAT and corporation tax clearly and I got a first.',
                name: 'James Wu',
                subtitle: 'Warwick Business School',
              },
            ].map((item) => (
              <div key={item.name} className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-body-sm text-primary-700 leading-relaxed mb-6">“{item.quote}”</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">{item.name}</p>
                    <p className="text-sm text-primary-700">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Frequently Asked Questions</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Everything you need to know before placing your order</h2>
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
    </>
  );
};

export default AccountingAssignment;
