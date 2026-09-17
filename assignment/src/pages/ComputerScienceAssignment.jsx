import React from 'react';
import UnifiedOrderForm from '../components/UnifiedOrderForm';
import PageCTA from '../components/PageCTA';
import { Code, Server, ShieldCheck, Cpu, Monitor, GitBranch, Database } from 'lucide-react';

const sections = [
  { title: 'Software Engineering', desc: 'Object-oriented programming, design patterns, full-stack system architecture and code-based assignments.', icon: <Code size={20} /> },
  { title: 'Data Science', desc: 'Statistical modelling, data analysis and visualization reports using Python and R.', icon: <Server size={20} /> },
  { title: 'Cyber Security', desc: 'Penetration testing reports, security assessments and cryptography assignments.', icon: <ShieldCheck size={20} /> },
  { title: 'Artificial Intelligence', desc: 'Neural networks, ML models and experiment write-ups including TensorFlow/PyTorch code.', icon: <Cpu size={20} /> },
  { title: 'Database Management', desc: 'SQL/NoSQL design, normalization and performance tuning reports.', icon: <Database size={20} /> },
  { title: 'Web Development', desc: 'RESTful APIs, frontend frameworks and deployment reports with production-ready code.', icon: <Monitor size={20} /> },
];

const faqs = [
  { q: 'Do you provide source code and documentation?', a: 'Yes — full commented source code, readme and deployment notes are included on request.' },
  { q: 'Can you handle reproduction of experiments?', a: 'We re-run code where applicable and provide environment notes and dependency lists.' },
  { q: 'Will the code run on my machine?', a: 'We provide clear setup instructions and container options (Docker) when required.' },
];

const ComputerScienceAssignment = () => {
  return (
    <main className="bg-slate-50 text-primary-900">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-700">
              <Code size={14} /> Academic Excellence in Tech
            </div>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg text-primary-900 leading-tight max-w-3xl">
              Master Complex Computer Science Concepts with Expert Developers
            </h1>
            <p className="text-body-lg text-primary-700 max-w-2xl leading-relaxed">
              Bridge the gap between theory and execution. Get custom-coded solutions, rigorous documentation and architecture designs.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <GitBranch size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">Clean Code Standards</p>
                <p className="mt-2 text-body-sm text-primary-700">Well-documented, modular code with tests and README.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-700/10 text-secondary-700 mb-4">
                  <Server size={20} />
                </div>
                <p className="text-sm font-semibold text-primary-900">Plagiarism-Free Algorithms</p>
                <p className="mt-2 text-body-sm text-primary-700">Original implementations with academic referencing for theory sections.</p>
              </div>
            </div>
          </div>

          <UnifiedOrderForm defaultSubject="Computer Science" variant="inline" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-secondary-700 mb-8">Specialized CS Disciplines</p>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {sections.map((item) => (
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
            quote: 'The compiled project ran clean for my final year dissertation. Highly recommended.',
            name: 'A. Lewis',
            subtitle: 'University of Manchester',
          },{
            quote: 'Struggled with my ML model until the team helped optimise my CNN and improved accuracy by 15%.',
            name: 'S. Merchant',
            subtitle: 'University of Oxford',
          },{
            quote: 'Delivered an industrial-grade deployment and clear documentation.',
            name: 'M. Patel',
            subtitle: 'Imperial College London',
          }].map((t) => (
            <div key={t.name} className="rounded-[2rem] bg-white p-8 shadow-soft border border-primary-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-body-sm text-primary-700 leading-relaxed mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-700"><Code size={20} /></span>
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
            <p className="text-xs uppercase tracking-[0.3em] text-secondary-700">Computer Science Help FAQs</p>
            <h2 className="font-display text-headline-lg text-primary-900 mt-4">Common technical inquiries</h2>
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

export default ComputerScienceAssignment;
