import React from 'react';
import UnifiedOrderForm from '../components/UnifiedOrderForm';
import PageCTA from '../components/PageCTA';
import { Users, BookOpen, Brain, Zap, ClipboardList, Layers, BarChart2, CheckCircle, ArrowRight } from 'lucide-react';

const specialties = [
  { title: 'Clinical Psychology', desc: 'Expert analysis of mental health assessments, diagnostic reports and treatment plans.', icon: <Users size={20} /> },
  { title: 'Cognitive Psychology', desc: 'Memory, attention and perception research summaries and essays.', icon: <Brain size={20} /> },
  { title: 'Social Psychology', desc: 'Group dynamics, prejudice, persuasion and interpersonal studies.', icon: <Layers size={20} /> },
  { title: 'Developmental Psychology', desc: 'Lifespan development essays, observational study write-ups and case reports.', icon: <BookOpen size={20} /> },
  { title: 'Forensic Psychology', desc: 'Risk assessments, offender profiling and court-report style assignments.', icon: <ClipboardList size={20} /> },
  { title: 'Biopsychology', desc: 'Neural mechanisms, psychopharmacology and experimental write-ups.', icon: <BarChart2 size={20} /> },
];

const faqs = [
  { q: 'Do writers have psychology credentials?', a: 'Yes — our team includes psychologists and researchers with relevant postgraduate degrees.' },
  { q: 'Can you support statistical analysis?', a: 'We offer SPSS/R analysis support, interpretation and write-up for quantitative modules.' },
  { q: 'Do you provide literature reviews?', a: 'Comprehensive, referenced literature reviews following APA 7 citation style are available.' },
];

const PsychologyAssignment = () => {
  return (
    <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-700">
              <CheckCircle size={14} /> APA & BPS Aligned
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-3xl">
              Master Psychological Theory with Expert Academic Writers
            </h1>
            <p className="text-body-lg text-primary-700 max-w-2xl leading-relaxed">
              Specialist psychology writers delivering coursework, essays and dissertations aligned to APA and BPS standards.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <Users size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">Advanced Research Support</p>
                <p className="mt-2 text-body-sm text-primary-700">Including statistical analysis and qualitative coding.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <Zap size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">Publication-Quality Writing</p>
                <p className="mt-2 text-body-sm text-primary-700">Clear methodology sections, APA 7 formatting and rigorous referencing.</p>
              </div>
            </div>
          </div>

          <UnifiedOrderForm defaultSubject="Psychology" variant="inline" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-secondary-700 mb-8">Specialized Psychology Expertise</p>
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
            quote: 'The statistical section was thorough and helped me pass my research methods module.',
            name: 'Emma W.',
            subtitle: 'UCL | MSc Psychology',
          },{
            quote: 'Excellent literature review and APA formatting — top marks!',
            name: 'Luke M.',
            subtitle: 'University of York | 2nd Year',
          },{
            quote: 'The experimental write-up was clear and publication ready.',
            name: 'Priya S.',
            subtitle: 'University of Edinburgh | 3rd Year',
          }].map((t) => (
            <div key={t.name} className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-body-sm text-primary-700 leading-relaxed mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700"><Users size={20} /></span>
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
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Psychology Help FAQs</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Common questions from psychology students</h2>
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

export default PsychologyAssignment;
