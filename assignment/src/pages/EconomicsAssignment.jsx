import React from 'react';
import UnifiedOrderForm from '../components/UnifiedOrderForm';
import PageCTA from '../components/PageCTA';
import { TrendingUp, BarChart2, BookOpen, Users, Briefcase, Globe } from 'lucide-react';

const specialties = [
  { title: 'Macroeconomics', desc: 'Policy analysis, growth models, GDP and fiscal-monetary interactions.', icon: <TrendingUp size={20} /> },
  { title: 'Microeconomics', desc: 'Consumer theory, game theory and market structure modelling.', icon: <BarChart2 size={20} /> },
  { title: 'Econometrics', desc: 'Time-series, panel data and regression modelling with STATA/R support.', icon: <BookOpen size={20} /> },
  { title: 'Behavioral Economics', desc: 'Experimental design, behavioural modelling and survey analysis.', icon: <Users size={20} /> },
  { title: 'International Trade', desc: 'Trade policy, comparative advantage and applied trade models.', icon: <Globe size={20} /> },
  { title: 'Development Economics', desc: 'Poverty measurement, program evaluation and policy impact studies.', icon: <Briefcase size={20} /> },
];

const faqs = [
  { q: 'Do you include data and Stata/R code?', a: 'Yes — we include replication scripts, code and documentation when required.' },
  { q: 'Can you help with empirical tables and interpretation?', a: 'We prepare tables, robustness checks and clear interpretation of results.' },
  { q: 'Are policy recommendations evidence-based?', a: 'All recommendations are grounded in peer-reviewed literature and empirical findings.' },
];

const EconomicsAssignment = () => {
  return (
    <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-700">
              <TrendingUp size={14} /> Domain-Specific Mastery
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-3xl">
              Master Economic Theory with Elite UK Academic Experts
            </h1>
            <p className="text-body-lg text-primary-700 max-w-2xl leading-relaxed">
              Navigate complex econometric models and policy analysis with PhD economists from top UK universities.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <BarChart2 size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">Data-Driven Analysis</p>
                <p className="mt-2 text-body-sm text-primary-700">Robust empirical work with reproducible code and clear tables.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <BookOpen size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">Theory & Policy</p>
                <p className="mt-2 text-body-sm text-primary-700">Concise literature reviews, models and policy recommendations.</p>
              </div>
            </div>
          </div>

          <UnifiedOrderForm defaultSubject="Economics" variant="inline" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-secondary-700 mb-8">Domain-Specific Mastery</p>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {specialties.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-slate-50 border border-primary-100 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-secondary-700/10 text-secondary-700 mb-5 transition-all duration-300 group-hover:bg-secondary-700 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-primary-900 mb-3">{item.title}</h3>
                <p className="text-body-sm text-primary-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[{
            quote: 'The econometric tables and interpretation were excellent.',
            name: 'MSc Economics Student',
            subtitle: 'London School of Economics',
          },{
            quote: 'Policy recommendations were grounded in recent literature and clear.',
            name: 'PhD Candidate',
            subtitle: 'University of Oxford',
          },{
            quote: 'Provided replication scripts and clear Stata do-files.',
            name: 'Research Assistant',
            subtitle: 'University of Manchester',
          }].map((t) => (
            <div key={t.name} className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-body-sm text-primary-700 leading-relaxed mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700"><TrendingUp size={20} /></span>
                <div>
                  <p className="font-semibold text-primary-900">{t.name}</p>
                  <p className="text-sm text-primary-700">{t.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="rounded-[2rem] bg-white p-10 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Economics Help FAQs</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Precision & Policy: Your Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-3xl border border-primary-100 p-6 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <summary className="cursor-pointer list-none text-body-md font-semibold text-primary-900">{item.q}</summary>
                <p className="mt-4 text-body-sm text-primary-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
};

export default EconomicsAssignment;
